/**
 * web/handlers/addons.ts — Backend add-on management endpoints.
 *
 * GET  /agent/addons          — fetch catalog + local install state
 * POST /agent/addons/install  — install an addon by slug
 * POST /agent/addons/uninstall — uninstall an addon by slug
 */

import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { WORKSPACE_DIR } from "../../../core/config.js";

const CATALOG_URL = "https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json";
const CATALOG_CACHE_MS = 5 * 60 * 1000; // 5 minutes

let catalogCache: { data: unknown; ts: number } | null = null;

interface CatalogAddon {
  slug: string;
  name: string;
  version?: string;
  description?: string;
  path?: string;
  tags?: string[];
}

interface CatalogData {
  version?: number;
  source?: string;
  addons: CatalogAddon[];
}

function getExtensionsDir(): string {
  return join(WORKSPACE_DIR, ".pi", "extensions");
}

function getInstalledVersion(packageName: string): string | null {
  const extDir = getExtensionsDir();
  const pkgJsonPath = join(extDir, "node_modules", packageName, "package.json");
  try {
    if (!existsSync(pkgJsonPath)) return null;
    const raw = readFileSync(pkgJsonPath, "utf-8");
    const pkg = JSON.parse(raw);
    return typeof pkg.version === "string" ? pkg.version : null;
  } catch {
    return null;
  }
}

async function fetchCatalog(): Promise<CatalogData | null> {
  const now = Date.now();
  if (catalogCache && now - catalogCache.ts < CATALOG_CACHE_MS) {
    return catalogCache.data as CatalogData;
  }
  try {
    const response = await fetch(CATALOG_URL, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;
    const data = await response.json();
    catalogCache = { data, ts: now };
    return data as CatalogData;
  } catch {
    return catalogCache?.data as CatalogData ?? null;
  }
}

export async function handleGetAddons(
  json: (body: unknown, status?: number) => Response,
): Promise<Response> {
  const catalog = await fetchCatalog();
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
      type: (addon as Record<string, unknown>).type || "extension",
      description: addon.description || "",
      path: addon.path || "",
      tags: addon.tags || [],
      skills: Array.isArray((addon as Record<string, unknown>).skills) ? (addon as Record<string, unknown>).skills : [],
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

  const catalog = await fetchCatalog();
  const addon = catalog?.addons?.find((a) => a.slug === slug);
  if (!addon) return json({ error: `Add-on "${slug}" not found in catalog` }, 404);

  const extDir = getExtensionsDir();
  const installSpec = `github:rcarmo/piclaw-addons/${addon.path}`;

  try {
    const proc = Bun.spawn(["bun", "add", installSpec], {
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

  const extDir = getExtensionsDir();

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
