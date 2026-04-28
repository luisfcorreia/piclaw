/**
 * web/handlers/addons.ts — Backend add-on management endpoints.
 *
 * GET  /agent/addons           — fetch one or more catalogs + local install state
 * POST /agent/addons/install   — install an addon by slug (package-first via bun add)
 * POST /agent/addons/uninstall — uninstall an addon by slug (package-first via bun remove)
 *
 * Preferred flow: install a real package spec from the catalog (npm/tarball/etc).
 * Legacy fallback: download a package directory from GitHub raw URLs when a package
 * spec is unavailable or package install fails.
 */

import { existsSync, lstatSync, readFileSync, readdirSync, rmSync, mkdirSync, unlinkSync, writeFileSync, renameSync } from "fs";
import { join, dirname, extname, resolve } from "path";
import { WORKSPACE_DIR } from "../../../core/config.js";
import { requestGracefulShutdown } from "../../../runtime/shutdown-registry.js";

const DEFAULT_CATALOG_URL = "https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json";
const DEFAULT_CATALOG_URLS = [DEFAULT_CATALOG_URL] as const;
const DEFAULT_REPO_OWNER = "rcarmo";
const DEFAULT_REPO_NAME = "piclaw-addons";
const DEFAULT_REPO_BRANCH = "main";
const CATALOG_CACHE_MS = 5 * 60 * 1000;
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com";
const GITHUB_API_BASE = "https://api.github.com";
export const WEB_RESTART_DELAY_MS = 150;

const catalogCache = new Map<string, { data: unknown; ts: number }>();

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

interface AddonPackageManifest {
  name?: string;
  main?: string;
  pi?: {
    extensions?: string[];
    web?: {
      entries?: string[];
    };
  };
}

interface InstalledAddonWebEntry {
  packageName: string;
  entry: string;
  url: string;
}

function getWorkspaceDir(): string {
  return process.env.PICLAW_WORKSPACE || WORKSPACE_DIR;
}

function getAddonsDir(workspaceDir = getWorkspaceDir()): string {
  return join(workspaceDir, ".pi", "extensions");
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
  // Ensure .npmrc points at GitHub Packages for @rcarmo scoped packages.
  // The token is read from the GITHUB_PICLAW_BOT_PAT env var (keychain-injected).
  const npmrcPath = join(addonsDir, ".npmrc");
  const ghToken = process.env.GITHUB_PICLAW_BOT_PAT || process.env.GITHUB_TOKEN || "";
  if (ghToken) {
    const npmrc = [
      "@rcarmo:registry=https://npm.pkg.github.com",
      `//npm.pkg.github.com/:_authToken=\${GITHUB_PICLAW_BOT_PAT}`,
    ].join("\n") + "\n";
    try {
      const existing = existsSync(npmrcPath) ? readFileSync(npmrcPath, "utf-8") : "";
      if (existing !== npmrc) writeFileSync(npmrcPath, npmrc);
    } catch (e) { void e; /* best effort */ }
  }
  return addonsDir;
}

/**
 * Remove a stale node_modules symlink (created by the session extension-link
 * helper) so that `bun add` can create a real node_modules directory.
 *
 * The session bootstrap symlinks `.pi/extensions/node_modules` → the bundled
 * (read-only) node_modules so that jiti can resolve framework packages from
 * user-written workspace extensions.  When addons are installed the directory
 * must be a real writable tree, not a symlink; otherwise every `bun add` and
 * the legacy mkdir fallback both fail with EACCES.
 */
function removeNodeModulesSymlinkIfPresent(addonsDir: string): void {
  const nodeModulesPath = join(addonsDir, "node_modules");
  try {
    const stat = lstatSync(nodeModulesPath);
    if (stat.isSymbolicLink()) {
      unlinkSync(nodeModulesPath);
    }
  } catch (e) {
    // Not found or inaccessible — nothing to remove.
    void e;
  }
}

function getInstalledVersion(packageName: string): string | null {
  const workspaceDir = getWorkspaceDir();
  for (const dir of [getAddonsDir(workspaceDir)]) {
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

function listAddonPackageDirs(addonsNodeModulesDir: string): string[] {
  if (!existsSync(addonsNodeModulesDir)) return [];
  const results: string[] = [];
  for (const entry of readdirSync(addonsNodeModulesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const entryPath = join(addonsNodeModulesDir, entry.name);
    if (entry.name.startsWith('@')) {
      for (const scoped of readdirSync(entryPath, { withFileTypes: true })) {
        if (scoped.isDirectory()) results.push(join(entryPath, scoped.name));
      }
      continue;
    }
    results.push(entryPath);
  }
  return results;
}

function getInstalledAddonPackageDir(packageName: string, workspaceDir = getWorkspaceDir()): string | null {
  const addonsNodeModulesDir = join(workspaceDir, '.pi', 'extensions', 'node_modules');
  const packageDir = join(addonsNodeModulesDir, packageName);
  return existsSync(packageDir) ? packageDir : null;
}

export function getInstalledAddonWebEntries(workspaceDir = getWorkspaceDir()): InstalledAddonWebEntry[] {
  const addonsNodeModulesDir = join(workspaceDir, '.pi', 'extensions', 'node_modules');
  const entries: InstalledAddonWebEntry[] = [];
  for (const packageDir of listAddonPackageDirs(addonsNodeModulesDir)) {
    const packageJsonPath = join(packageDir, 'package.json');
    if (!existsSync(packageJsonPath)) continue;
    try {
      const manifest = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as AddonPackageManifest;
      const packageName = typeof manifest.name === 'string' ? manifest.name.trim() : '';
      const webEntries = Array.isArray(manifest?.pi?.web?.entries)
        ? manifest.pi.web.entries.filter((value): value is string => typeof value === 'string' && Boolean(value.trim()))
        : [];
      if (!packageName || webEntries.length === 0) continue;
      for (const entry of webEntries) {
        const normalizedEntry = entry.replace(/^\.\//, '');
        const fullPath = join(packageDir, normalizedEntry);
        if (!existsSync(fullPath)) continue;
        entries.push({
          packageName,
          entry: normalizedEntry,
          url: `/agent/addons/assets/${encodeURIComponent(packageName)}/${normalizedEntry.split('/').map((segment) => encodeURIComponent(segment)).join('/')}`,
        });
      }
    } catch {
      continue;
    }
  }
  return entries;
}

function parseAddonAssetRequestPath(pathname: string): { packageName: string; relativePath: string } | null {
  const prefix = '/agent/addons/assets/';
  if (!pathname.startsWith(prefix)) return null;
  const rest = pathname.slice(prefix.length).split('/').filter(Boolean).map((segment) => decodeURIComponent(segment));
  if (rest.length < 2) return null;
  const packageName = rest[0].startsWith('@')
    ? rest[0].includes('/')
      ? rest[0]
      : rest.length >= 3
        ? `${rest[0]}/${rest[1]}`
        : ''
    : rest[0];
  const relativeSegments = rest[0].startsWith('@')
    ? rest[0].includes('/')
      ? rest.slice(1)
      : rest.slice(2)
    : rest.slice(1);
  const relativePath = relativeSegments.join('/');
  if (!packageName || !relativePath) return null;
  return { packageName, relativePath };
}

function getAddonAssetMimeType(assetPath: string): string {
  switch (extname(assetPath).toLowerCase()) {
    case '.ts':
    case '.tsx':
    case '.js':
    case '.jsx':
    case '.mjs':
    case '.cjs':
      return 'text/javascript; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.svg':
      return 'image/svg+xml';
    case '.html':
      return 'text/html; charset=utf-8';
    default:
      return 'application/octet-stream';
  }
}

function maybeTranspileAddonAsset(assetPath: string, source: string): string {
  const extension = extname(assetPath).toLowerCase();
  if (extension === '.tsx') {
    return new Bun.Transpiler({ loader: 'tsx' }).transformSync(source);
  }
  if (extension === '.jsx') {
    return new Bun.Transpiler({ loader: 'jsx' }).transformSync(source);
  }
  if (extension === '.js' || extension === '.mjs' || extension === '.cjs') {
    return new Bun.Transpiler({ loader: 'js' }).transformSync(source);
  }
  if (extension === '.ts') {
    return new Bun.Transpiler({ loader: 'ts' }).transformSync(source);
  }
  return source;
}

export function parseCatalogUrlList(values: Array<string | null | undefined>): string[] {
  const urls: string[] = [];
  const seen = new Set<string>();
  for (const value of values) {
    const parts = String(value || "")
      .split(/[\r\n,]+/)
      .map((part) => part.trim())
      .filter(Boolean);
    for (const part of parts) {
      if (seen.has(part)) continue;
      seen.add(part);
      urls.push(part);
    }
  }
  return urls;
}

export function resolveRequestedCatalogUrls(url?: URL): string[] {
  const requested = parseCatalogUrlList(url?.searchParams.getAll("catalog_url") || []);
  if (requested.length === 0) return [...DEFAULT_CATALOG_URLS];
  // Always include the default catalog; additional URLs are merged on top.
  const merged: string[] = [...DEFAULT_CATALOG_URLS];
  for (const u of requested) {
    if (!merged.includes(u)) merged.push(u);
  }
  return merged;
}

async function fetchCatalog(catalogUrl: string): Promise<CatalogData | null> {
  const url = String(catalogUrl || "").trim();
  if (!url) return null;
  const now = Date.now();
  const cached = catalogCache.get(url);
  if (cached && now - cached.ts < CATALOG_CACHE_MS) {
    return cached.data as CatalogData;
  }
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;
    const data = await response.json();
    catalogCache.set(url, { data, ts: now });
    return data as CatalogData;
  } catch {
    return (catalogCache.get(url)?.data as CatalogData | undefined) ?? null;
  }
}

export function mergeCatalogs(catalogs: CatalogData[]): CatalogData | null {
  const validCatalogs = catalogs.filter((catalog) => catalog && Array.isArray(catalog.addons));
  if (validCatalogs.length === 0) return null;
  const addons: CatalogAddon[] = [];
  const seenKeys = new Set<string>();
  const sources: string[] = [];
  let version = 0;

  for (const catalog of validCatalogs) {
    version = Math.max(version, Number(catalog.version) || 0);
    const source = typeof catalog.source === "string" ? catalog.source.trim() : "";
    if (source && !sources.includes(source)) sources.push(source);
    for (const addon of catalog.addons) {
      const slugKey = typeof addon?.slug === "string" && addon.slug.trim() ? `slug:${addon.slug.trim()}` : "";
      const nameKey = typeof addon?.name === "string" && addon.name.trim() ? `name:${addon.name.trim()}` : "";
      const dedupeKey = slugKey || nameKey;
      if (!dedupeKey || seenKeys.has(dedupeKey)) continue;
      if (slugKey) seenKeys.add(slugKey);
      if (nameKey) seenKeys.add(nameKey);
      addons.push(addon);
    }
  }

  return {
    version: version || undefined,
    source: sources.join(", "),
    addons,
  };
}

async function fetchMergedCatalog(catalogUrls: string[]): Promise<{ catalog: CatalogData | null; urls: string[]; failedUrls: string[] }> {
  const urls = parseCatalogUrlList(catalogUrls);
  const results = await Promise.all(urls.map(async (catalogUrl) => ({
    url: catalogUrl,
    catalog: await fetchCatalog(catalogUrl),
  })));
  const catalogs = results
    .map((result) => result.catalog)
    .filter((catalog): catalog is CatalogData => Boolean(catalog && Array.isArray(catalog.addons)));
  const failedUrls = results.filter((result) => !result.catalog || !Array.isArray(result.catalog.addons)).map((result) => result.url);
  return {
    catalog: mergeCatalogs(catalogs),
    urls,
    failedUrls,
  };
}

export function resolveAddonInstallSpec(addon: Pick<CatalogAddon, "name" | "version" | "install">): { kind: string; spec: string; piSource?: string; scopedName?: string } {
  const explicitSpec = addon.install?.spec?.trim();
  if (explicitSpec) {
    // Extract the package name (possibly scoped) from the spec, stripping @version
    const scopedName = explicitSpec.replace(/@[^@/]+$/, "");
    return {
      kind: addon.install?.kind?.trim() || "package",
      spec: explicitSpec,
      piSource: addon.install?.piSource?.trim() || undefined,
      scopedName: scopedName !== addon.name ? scopedName : undefined,
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
  try {
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
  } catch (error) {
    return {
      ok: false,
      exitCode: -1,
      stdout: "",
      stderr: String((error as { message?: string })?.message || error),
    };
  }
}

function getRuntimePlatform(): NodeJS.Platform {
  const override = process.env.PICLAW_TEST_PLATFORM;
  return (override || process.platform) as NodeJS.Platform;
}

export function isAddonFsLockError(error: unknown): boolean {
  const code = String((error as { code?: string })?.code || '').toUpperCase();
  const message = String((error as { message?: string })?.message || error || '').toLowerCase();
  return code === 'EBUSY'
    || code === 'EPERM'
    || code === 'ENOTEMPTY'
    || message.includes('resource busy')
    || message.includes('operation not permitted')
    || message.includes('permission denied')
    || message.includes('access is denied')
    || message.includes('directory not empty');
}

type AddonFsOps = {
  existsSync?: typeof existsSync;
  rmSync?: typeof rmSync;
  mkdirSync?: typeof mkdirSync;
  renameSync?: typeof renameSync;
  sleep?: (ms: number) => Promise<unknown>;
  now?: () => number;
  platform?: NodeJS.Platform;
};

export async function removeAddonDirRobustly(
  targetDir: string,
  addonsDir: string,
  ops: AddonFsOps = {},
): Promise<{ removed: boolean; deferred: boolean; movedTo?: string }> {
  const pathExists = ops.existsSync || existsSync;
  const removePath = ops.rmSync || rmSync;
  const makeDir = ops.mkdirSync || mkdirSync;
  const renamePath = ops.renameSync || renameSync;
  const sleep = ops.sleep || ((ms: number) => Bun.sleep(ms));
  const now = ops.now || (() => Date.now());
  const platform = ops.platform || getRuntimePlatform();

  if (!pathExists(targetDir)) {
    return { removed: false, deferred: false };
  }

  const delays = [40, 120, 260];
  let lastError: unknown = null;
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      removePath(targetDir, { recursive: true, force: true });
      return { removed: true, deferred: false };
    } catch (error) {
      lastError = error;
      if (!(platform === 'win32' && isAddonFsLockError(error)) || attempt === delays.length) break;
      await sleep(delays[attempt]!);
    }
  }

  if (platform === 'win32' && lastError && isAddonFsLockError(lastError) && pathExists(targetDir)) {
    const quarantineDir = join(addonsDir, '.trash');
    makeDir(quarantineDir, { recursive: true });
    const movedTo = join(quarantineDir, `${getPathLeaf(targetDir)}-${now()}`);
    renamePath(targetDir, movedTo);
    return { removed: true, deferred: true, movedTo };
  }

  throw lastError;
}

function getPathLeaf(input: string): string {
  return String(input || '').split(/[\\/]+/).filter(Boolean).at(-1) || 'addon';
}

function cleanupAddonDependencyRecord(addonsDir: string, addonName: string): { cleaned: boolean; error?: string } {
  const pkgJsonPath = join(addonsDir, 'package.json');
  try {
    const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));
    if (!pkg.dependencies || !(addonName in pkg.dependencies)) return { cleaned: false };
    delete pkg.dependencies[addonName];
    writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
    return { cleaned: true };
  } catch (error) {
    return { cleaned: false, error: String((error as { message?: string })?.message || error) };
  }
}

function describeAddonOperationFailure(action: 'install' | 'uninstall', error: unknown): string {
  const message = String((error as { message?: string })?.message || error || 'unknown error');
  if (getRuntimePlatform() === 'win32' && isAddonFsLockError(error)) {
    const verb = action === 'install' ? 'install' : 'remove';
    return `Windows file locking blocked the add-on ${verb}. Restart piclaw (or close panes using the add-on) and try again. Raw error: ${message}`;
  }
  return message;
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
  const { catalog, urls, failedUrls } = await fetchMergedCatalog(resolveRequestedCatalogUrls(url));
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

  return json({ addons, source: catalog.source || "", sources: urls, failed_sources: failedUrls });
}

export async function handleGetAddonWebEntries(
  json: (body: unknown, status?: number) => Response,
): Promise<Response> {
  return json({ entries: getInstalledAddonWebEntries() });
}

export async function handleAddonAssetRequest(
  req: Request,
  pathname: string,
): Promise<Response | null> {
  if (req.method !== 'GET' && req.method !== 'HEAD') return null;
  const parsed = parseAddonAssetRequestPath(pathname);
  if (!parsed) return null;
  const packageDir = getInstalledAddonPackageDir(parsed.packageName);
  if (!packageDir) return new Response('Not Found', { status: 404 });

  const resolvedPath = resolve(packageDir, parsed.relativePath);
  const packageRoot = resolve(packageDir);
  const relativeFromRoot = resolvedPath.slice(packageRoot.length);
  const insidePackageRoot = resolvedPath === packageRoot
    || relativeFromRoot.startsWith('/')
    || relativeFromRoot.startsWith('\\');
  if (!insidePackageRoot) {
    return new Response('Not Found', { status: 404 });
  }
  if (!existsSync(resolvedPath)) {
    return new Response('Not Found', { status: 404 });
  }

  const mimeType = getAddonAssetMimeType(resolvedPath);
  const headers = {
    'Content-Type': mimeType,
    'Cache-Control': 'no-store',
  } as Record<string, string>;

  if (req.method === 'HEAD') {
    return new Response(null, { headers });
  }

  if (mimeType.startsWith('text/javascript')) {
    const source = readFileSync(resolvedPath, 'utf8');
    const code = maybeTranspileAddonAsset(resolvedPath, source);
    return new Response(code, { headers });
  }

  if (mimeType.includes('charset=utf-8')) {
    return new Response(readFileSync(resolvedPath, 'utf8'), { headers });
  }

  return new Response(readFileSync(resolvedPath), { headers });
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

  const { catalog } = await fetchMergedCatalog(resolveRequestedCatalogUrls(url));
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const addonsDir = ensureAddonsDir();
  removeNodeModulesSymlinkIfPresent(addonsDir);
  const destDir = join(addonsDir, "node_modules", addon.name);
  const addonPath = addon.path || `addons/${slug}`;
  const installPlan = resolveAddonInstallSpec(addon);

  try {
    const packageInstall = await runBunCommand(["bun", "add", "--force", installPlan.spec], addonsDir);
    if (packageInstall.ok) {
      const lookupName = installPlan.scopedName || addon.name;
      const installedVersion = getInstalledVersion(lookupName);
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

    const stagingRoot = join(addonsDir, '.staging');
    const stagingDir = join(stagingRoot, `${addon.name}-${Date.now()}`);
    mkdirSync(stagingDir, { recursive: true });

    let downloaded = 0;
    try {
      for (const filePath of files) {
        const relativePath = filePath.slice(addonPath.length + 1);
        if (!relativePath) continue;
        await downloadFile(filePath, join(stagingDir, relativePath));
        downloaded++;
      }

      const pkgJsonPath = join(addonsDir, "package.json");
      try {
        const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
        if (!pkg.dependencies) pkg.dependencies = {};
        pkg.dependencies[addon.name] = addon.version || "*";
        writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
      } catch (e) { console.debug('[addons] failed to write package.json stub', e); }

      const addonPkg = join(stagingDir, "package.json");
      if (existsSync(addonPkg)) {
        await runBunCommand(["bun", "install", "--force"], stagingDir);
      }

      const cleanup = await removeAddonDirRobustly(destDir, addonsDir);
      mkdirSync(dirname(destDir), { recursive: true });
      renameSync(stagingDir, destDir);

      const installedVersion = getInstalledVersion(addon.name);
      const detail = packageInstall.stderr || packageInstall.stdout || `bun add exited ${packageInstall.exitCode}`;
      const warnings = [`Package install via ${installPlan.kind} failed first: ${detail}`];
      if (cleanup.deferred) warnings.push('Existing add-on files were moved aside for cleanup on restart because Windows kept them locked.');
      return json({
        ok: true,
        slug,
        name: addon.name,
        installedVersion,
        filesDownloaded: downloaded,
        installKind: "legacy-download",
        installSpec: installPlan.spec,
        message: `Installed ${addon.name}@${installedVersion || "?"} via legacy package download fallback. Restart required to load.`,
        warning: warnings.join(' '),
      });
    } finally {
      try {
        if (existsSync(stagingDir)) rmSync(stagingDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.debug('[addons] failed to clean staging dir', cleanupError);
      }
    }
  } catch (e) {
    return json({ error: `Install failed: ${describeAddonOperationFailure('install', e)}` }, 500);
  }
}

export function handleRestartAddonRuntime(
  json: (body: unknown, status?: number) => Response,
): Response {
  setTimeout(() => {
    requestGracefulShutdown("web addons restart");
  }, WEB_RESTART_DELAY_MS);
  return json({
    ok: true,
    message: "Restarting piclaw… The UI should reconnect automatically.",
  });
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

  const { catalog } = await fetchMergedCatalog(resolveRequestedCatalogUrls(url));
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const addonsDir = ensureAddonsDir();
  const destDir = join(addonsDir, "node_modules", addon.name);

  try {
    const removal = await runBunCommand(["bun", "remove", addon.name], addonsDir);
    let cleanup = { removed: false, deferred: false };
    let dependencyCleanup: { cleaned: boolean; error?: string } = { cleaned: false };
    if (!removal.ok) {
      cleanup = await removeAddonDirRobustly(destDir, addonsDir);
      dependencyCleanup = cleanupAddonDependencyRecord(addonsDir, addon.name);
    }

    if (!removal.ok && existsSync(destDir)) {
      const detail = removal.stderr || removal.stdout || `bun remove exited ${removal.exitCode}`;
      return json({ error: `Uninstall failed via bun remove: ${detail}` }, 500);
    }

    const warnings: string[] = [];
    if (!removal.ok) {
      const detail = removal.stderr || removal.stdout || `bun remove exited ${removal.exitCode}`;
      warnings.push(`bun remove failed first: ${detail}`);
      if (cleanup.deferred) warnings.push('Locked files were moved aside for cleanup on restart.');
      if (dependencyCleanup.error) warnings.push(`package.json cleanup failed: ${dependencyCleanup.error}`);
    }

    return json({
      ok: true,
      slug,
      name: addon.name,
      message: `Removed ${addon.name}. Restart required to unload.`,
      ...(warnings.length ? { warning: warnings.join(' ') } : {}),
    });
  } catch (e) {
    return json({ error: `Uninstall failed: ${describeAddonOperationFailure('uninstall', e)}` }, 500);
  }
}
