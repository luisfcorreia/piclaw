/**
 * web/handlers/addons.ts — Backend add-on management endpoints.
 *
 * GET  /agent/addons           — fetch catalog + local install state
 * POST /agent/addons/install   — install an addon by slug (package-first via bun add)
 * POST /agent/addons/uninstall — uninstall an addon by slug (package-first via bun remove)
 *
 * Preferred flow: install a real package spec from the catalog (npm/tarball/etc).
 * Legacy fallback: download a package directory from GitHub raw URLs when a package
 * spec is unavailable or package install fails.
 */

import { existsSync, readFileSync, rmSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { WORKSPACE_DIR } from "../../../core/config.js";

const DEFAULT_CATALOG_URL = "https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json";
const DEFAULT_REPO_OWNER = "rcarmo";
const DEFAULT_REPO_NAME = "piclaw-addons";
const DEFAULT_REPO_BRANCH = "main";
const CATALOG_CACHE_MS = 5 * 60 * 1000;
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com";
const GITHUB_API_BASE = "https://api.github.com";

let catalogCache: { data: unknown; ts: number } | null = null;

interface CatalogAddonInstall {
  kind?: string;
  spec?: string;
  piSource?: string;
}

interface CatalogAddon {
  slug: string;
  name: string;
  version?: string;
  type?: string;
  description?: string;
  path?: string;
  tags?: string[];
  skills?: string[];
  install?: CatalogAddonInstall;
}

interface CatalogData {
  version?: number;
  source?: string;
  addons: CatalogAddon[];
}

function getAddonsDir(): string {
  return join(WORKSPACE_DIR, ".pi", "addons");
}

function ensureAddonsDir(): string {
  const addonsDir = getAddonsDir();
  const pkgJson = join(addonsDir, "package.json");
  if (!existsSync(pkgJson)) {
    mkdirSync(addonsDir, { recursive: true });
    writeFileSync(pkgJson, JSON.stringify({
      name: "piclaw-local-addons",
      private: true,
      dependencies: {},
    }, null, 2));
  }
  return addonsDir;
}

function getInstalledVersion(packageName: string): string | null {
  for (const dir of [getAddonsDir(), join(WORKSPACE_DIR, ".pi", "extensions")]) {
    const pkgJsonPath = join(dir, "node_modules", packageName, "package.json");
    try {
      if (!existsSync(pkgJsonPath)) continue;
      const raw = readFileSync(pkgJsonPath, "utf-8");
      const pkg = JSON.parse(raw);
      if (typeof pkg.version === "string") return pkg.version;
    } catch (e) { /* package.json unreadable — skip */ void e; }
  }
  return null;
}

async function fetchCatalog(catalogUrl?: string): Promise<CatalogData | null> {
  const url = catalogUrl || DEFAULT_CATALOG_URL;
  const now = Date.now();
  if (!catalogUrl && catalogCache && now - catalogCache.ts < CATALOG_CACHE_MS) {
    return catalogCache.data as CatalogData;
  }
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;
    const data = await response.json();
    if (!catalogUrl) catalogCache = { data, ts: now };
    return data as CatalogData;
  } catch {
    return !catalogUrl ? (catalogCache?.data as CatalogData ?? null) : null;
  }
}

export function resolveAddonInstallSpec(addon: Pick<CatalogAddon, "name" | "version" | "install">): { kind: string; spec: string; piSource?: string } {
  const explicitSpec = addon.install?.spec?.trim();
  if (explicitSpec) {
    return {
      kind: addon.install?.kind?.trim() || "package",
      spec: explicitSpec,
      piSource: addon.install?.piSource?.trim() || undefined,
    };
  }
  const version = addon.version?.trim();
  return {
    kind: "npm",
    spec: version ? `${addon.name}@${version}` : addon.name,
    piSource: version ? `npm:${addon.name}@${version}` : `npm:${addon.name}`,
  };
}

async function runBunCommand(args: string[], cwd: string): Promise<{ ok: boolean; exitCode: number; stdout: string; stderr: string }> {
  const proc = Bun.spawn(args, {
    cwd,
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env, BUN_INSTALL: undefined },
  });
  const [exitCode, stdout, stderr] = await Promise.all([
    proc.exited,
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return {
    ok: exitCode === 0,
    exitCode,
    stdout: stdout.trim(),
    stderr: stderr.trim(),
  };
}

/** Fetch the file tree for an addon path via GitHub Contents API (legacy fallback). */
async function fetchAddonFileTree(
  addonPath: string,
  owner = DEFAULT_REPO_OWNER,
  repo = DEFAULT_REPO_NAME,
  branch = DEFAULT_REPO_BRANCH,
): Promise<string[]> {
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
  const resp = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!resp.ok) throw new Error(`GitHub API error: ${resp.status}`);
  const data = await resp.json() as { tree: Array<{ path: string; type: string }> };
  const prefix = addonPath.endsWith("/") ? addonPath : `${addonPath}/`;
  return data.tree
    .filter(entry => entry.type === "blob" && entry.path.startsWith(prefix))
    .map(entry => entry.path);
}

/** Download a single file from GitHub raw and write to disk (legacy fallback). */
async function downloadFile(
  repoPath: string,
  destPath: string,
  owner = DEFAULT_REPO_OWNER,
  repo = DEFAULT_REPO_NAME,
  branch = DEFAULT_REPO_BRANCH,
): Promise<void> {
  const url = `${GITHUB_RAW_BASE}/${owner}/${repo}/${branch}/${repoPath}`;
  const resp = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!resp.ok) throw new Error(`Failed to download ${repoPath}: ${resp.status}`);
  const data = new Uint8Array(await resp.arrayBuffer());
  const dir = dirname(destPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(destPath, data);
}

export async function handleGetAddons(
  json: (body: unknown, status?: number) => Response,
  url?: URL,
): Promise<Response> {
  const catalogUrl = url?.searchParams.get("catalog_url") || undefined;
  const catalog = await fetchCatalog(catalogUrl);
  if (!catalog || !Array.isArray(catalog.addons)) {
    return json({ error: "Failed to fetch add-on catalog" }, 502);
  }

  const addons = catalog.addons.map((addon) => {
    const installedVersion = getInstalledVersion(addon.name);
    const hasUpdate = installedVersion && addon.version && installedVersion !== addon.version;
    return {
      slug: addon.slug,
      name: addon.name,
      version: addon.version || null,
      type: addon.type || "extension",
      description: addon.description || "",
      path: addon.path || "",
      tags: addon.tags || [],
      skills: addon.skills || [],
      installed: Boolean(installedVersion),
      installedVersion: installedVersion || null,
      hasUpdate: Boolean(hasUpdate),
      installKind: resolveAddonInstallSpec(addon).kind,
    };
  });

  return json({ addons, source: catalog.source || "" });
}

export async function handleInstallAddon(
  req: Request,
  json: (body: unknown, status?: number) => Response,
  url?: URL,
): Promise<Response> {
  let body: unknown;
  try { body = await req.json(); } catch { return json({ error: "Invalid JSON" }, 400); }

  const rawSlug = (body as Record<string, unknown> | null)?.slug;
  const slug = typeof rawSlug === "string" ? rawSlug.trim() : "";
  if (!slug) return json({ error: "Missing slug" }, 400);

  const catalogUrl = url?.searchParams.get("catalog_url") || undefined;
  const catalog = await fetchCatalog(catalogUrl);
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const addonsDir = ensureAddonsDir();
  const destDir = join(addonsDir, "node_modules", addon.name);
  const addonPath = addon.path || `addons/${slug}`;
  const installPlan = resolveAddonInstallSpec(addon);

  try {
    const packageInstall = await runBunCommand(["bun", "add", "--force", installPlan.spec], addonsDir);
    if (packageInstall.ok) {
      const installedVersion = getInstalledVersion(addon.name);
      return json({
        ok: true,
        slug,
        name: addon.name,
        installedVersion,
        installKind: installPlan.kind,
        installSpec: installPlan.spec,
        message: `Installed ${addon.name}@${installedVersion || addon.version || "?"} via ${installPlan.kind}. Restart required to load.`,
      });
    }

    // Legacy fallback: download the package directory directly when the catalog
    // still points at repo paths or the package has not been published yet.
    const files = await fetchAddonFileTree(addonPath);
    if (files.length === 0) {
      const detail = packageInstall.stderr || packageInstall.stdout || `bun add exited ${packageInstall.exitCode}`;
      return json({ error: `Install failed via ${installPlan.kind}: ${detail}` }, 500);
    }

    if (existsSync(destDir)) rmSync(destDir, { recursive: true, force: true });
    mkdirSync(destDir, { recursive: true });

    let downloaded = 0;
    for (const filePath of files) {
      const relativePath = filePath.slice(addonPath.length + 1);
      if (!relativePath) continue;
      await downloadFile(filePath, join(destDir, relativePath));
      downloaded++;
    }

    const pkgJsonPath = join(addonsDir, "package.json");
    try {
      const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
      if (!pkg.dependencies) pkg.dependencies = {};
      pkg.dependencies[addon.name] = addon.version || "*";
      writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
    } catch (e) { console.debug('[addons] failed to write package.json stub', e); }

    const addonPkg = join(destDir, "package.json");
    if (existsSync(addonPkg)) {
      await runBunCommand(["bun", "install", "--force"], destDir);
    }

    const installedVersion = getInstalledVersion(addon.name);
    const detail = packageInstall.stderr || packageInstall.stdout || `bun add exited ${packageInstall.exitCode}`;
    return json({
      ok: true,
      slug,
      name: addon.name,
      installedVersion,
      filesDownloaded: downloaded,
      installKind: "legacy-download",
      installSpec: installPlan.spec,
      message: `Installed ${addon.name}@${installedVersion || "?"} via legacy package download fallback. Restart required to load.`,
      warning: `Package install via ${installPlan.kind} failed first: ${detail}`,
    });
  } catch (e) {
    return json({ error: `Install failed: ${String(e)}` }, 500);
  }
}

export async function handleUninstallAddon(
  req: Request,
  json: (body: unknown, status?: number) => Response,
  url?: URL,
): Promise<Response> {
  let body: unknown;
  try { body = await req.json(); } catch { return json({ error: "Invalid JSON" }, 400); }

  const rawSlug = (body as Record<string, unknown> | null)?.slug;
  const slug = typeof rawSlug === "string" ? rawSlug.trim() : "";
  if (!slug) return json({ error: "Missing slug" }, 400);

  const catalogUrl = url?.searchParams.get("catalog_url") || undefined;
  const catalog = await fetchCatalog(catalogUrl);
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const addonsDir = ensureAddonsDir();
  const destDir = join(addonsDir, "node_modules", addon.name);

  try {
    const removal = await runBunCommand(["bun", "remove", addon.name], addonsDir);
    if (!removal.ok && existsSync(destDir)) {
      rmSync(destDir, { recursive: true, force: true });
      const pkgJsonPath = join(addonsDir, "package.json");
      try {
        const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
        if (pkg.dependencies) delete pkg.dependencies[addon.name];
        writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
      } catch (e) { console.debug('[addons] cleanup failed', e); }
    }

    return json({
      ok: true,
      slug,
      name: addon.name,
      message: `Removed ${addon.name}. Restart required to unload.`,
    });
  } catch (e) {
    return json({ error: `Uninstall failed: ${String(e)}` }, 500);
  }
}
