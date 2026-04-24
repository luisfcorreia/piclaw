/**
 * web/handlers/addons.ts — Backend add-on management endpoints.
 *
 * GET  /agent/addons          — fetch catalog + local install state
 * POST /agent/addons/install  — install an addon by slug (clone repo, install from local path)
 * POST /agent/addons/uninstall — uninstall an addon by slug
 */

import { existsSync, readFileSync, rmSync, mkdirSync } from "fs";
import { join } from "path";
import { WORKSPACE_DIR } from "../../../core/config.js";

const DEFAULT_CATALOG_URL = "https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json";
const DEFAULT_REPO_URL = "https://github.com/rcarmo/piclaw-addons.git";
const CATALOG_CACHE_MS = 5 * 60 * 1000;

let catalogCache: { data: unknown; ts: number } | null = null;

interface CatalogAddon {
  slug: string;
  name: string;
  version?: string;
  type?: string;
  description?: string;
  path?: string;
  tags?: string[];
  skills?: string[];
}

interface CatalogData {
  version?: number;
  source?: string;
  addons: CatalogAddon[];
}

function getExtensionsDir(): string {
  return join(WORKSPACE_DIR, ".pi", "extensions");
}

function getAddonsDir(): string {
  return join(WORKSPACE_DIR, ".pi", "addons");
}

/** Ensure .pi/addons has a package.json for bun add/remove. */
function ensureAddonsDir(): string {
  const addonsDir = getAddonsDir();
  const pkgJson = join(addonsDir, "package.json");
  if (!existsSync(pkgJson)) {
    mkdirSync(addonsDir, { recursive: true });
    Bun.write(pkgJson, JSON.stringify({ private: true, dependencies: {} }));
  }
  return addonsDir;
}

function getAddonsCacheDir(): string {
  return join(WORKSPACE_DIR, ".piclaw", "tmp", "addons-repo");
}

function getInstalledVersion(packageName: string): string | null {
  // Check addons dir first, then extensions dir
  for (const dir of [getAddonsDir(), getExtensionsDir()]) {
    const pkgJsonPath = join(dir, "node_modules", packageName, "package.json");
    try {
      if (!existsSync(pkgJsonPath)) continue;
      const raw = readFileSync(pkgJsonPath, "utf-8");
      const pkg = JSON.parse(raw);
      if (typeof pkg.version === "string") return pkg.version;
    } catch { /* continue */ }
  }
  return null;
}

async function fetchCatalog(catalogUrl?: string): Promise<CatalogData | null> {
  const url = catalogUrl || DEFAULT_CATALOG_URL;
  const now = Date.now();
  // Only use cache if using the default URL
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

/** Clone or update the addons repo to a local cache directory. */
async function ensureRepoClone(repoUrl?: string): Promise<string> {
  const url = repoUrl || DEFAULT_REPO_URL;
  const cacheDir = getAddonsCacheDir();
  if (existsSync(join(cacheDir, ".git"))) {
    // Pull latest
    const pull = Bun.spawn(["git", "pull", "--ff-only"], {
      cwd: cacheDir, stdout: "pipe", stderr: "pipe",
    });
    await pull.exited;
  } else {
    // Fresh clone
    if (existsSync(cacheDir)) rmSync(cacheDir, { recursive: true, force: true });
    mkdirSync(cacheDir, { recursive: true });
    const clone = Bun.spawn(["git", "clone", "--depth", "1", url, cacheDir], {
      stdout: "pipe", stderr: "pipe",
    });
    const exitCode = await clone.exited;
    if (exitCode !== 0) {
      const stderr = await new Response(clone.stderr).text();
      throw new Error(`Git clone failed: ${stderr.slice(0, 500)}`);
    }
  }
  return cacheDir;
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
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const rawSlug = (body as Record<string, unknown> | null)?.slug;
  const slug = typeof rawSlug === "string" ? rawSlug.trim() : "";
  if (!slug) return json({ error: "Missing slug" }, 400);

  const catalogUrl = url?.searchParams.get("catalog_url") || undefined;
  const repoUrl = url?.searchParams.get("repo_url") || undefined;

  const catalog = await fetchCatalog(catalogUrl);
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const extDir = ensureAddonsDir();

  try {
    // Clone/update the addons repo locally
    const repoDir = await ensureRepoClone(repoUrl);
    const addonLocalPath = join(repoDir, addon.path || `addons/${slug}`);

    if (!existsSync(addonLocalPath)) {
      return json({ error: `Add-on path not found in repo: ${addon.path}` }, 404);
    }

    // Install from local path (--force to handle stale cache permission issues)
    const proc = Bun.spawn(["bun", "add", "--force", addonLocalPath], {
      cwd: extDir,
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env, BUN_INSTALL: undefined },
    });
    const exitCode = await proc.exited;
    const stdout = await new Response(proc.stdout).text();
    const stderr = await new Response(proc.stderr).text();

    if (exitCode !== 0) {
      // Check if the addon itself was installed despite dependency errors
      const partialInstall = getInstalledVersion(addon.name);
      if (partialInstall) {
        return json({
          ok: true,
          slug,
          name: addon.name,
          installedVersion: partialInstall,
          message: `Installed ${addon.name}@${partialInstall} (some optional dependencies may have failed). Restart required to load.`,
        });
      }
      return json({
        error: `Install failed (exit ${exitCode})`,
        detail: (stderr || stdout).slice(0, 1000),
      }, 500);
    }

    const installedVersion = getInstalledVersion(addon.name);
    return json({
      ok: true,
      slug,
      name: addon.name,
      installedVersion,
      message: `Installed ${addon.name}@${installedVersion || "?"}. Restart required to load.`,
    });
  } catch (e) {
    return json({ error: `Install failed: ${String(e)}` }, 500);
  }
}

export async function handleUninstallAddon(
  req: Request,
  json: (body: unknown, status?: number) => Response,
): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const rawSlug2 = (body as Record<string, unknown> | null)?.slug;
  const slug = typeof rawSlug2 === "string" ? rawSlug2.trim() : "";
  if (!slug) return json({ error: "Missing slug" }, 400);

  const catalog = await fetchCatalog();
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const extDir = ensureAddonsDir();

  try {
    const proc = Bun.spawn(["bun", "remove", addon.name], {
      cwd: extDir,
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env, BUN_INSTALL: undefined },
    });
    const exitCode = await proc.exited;
    const stdout = await new Response(proc.stdout).text();
    const stderr = await new Response(proc.stderr).text();

    if (exitCode !== 0) {
      return json({
        error: `Uninstall failed (exit ${exitCode})`,
        detail: (stderr || stdout).slice(0, 1000),
      }, 500);
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
