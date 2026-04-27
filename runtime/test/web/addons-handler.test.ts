import { expect, test } from 'bun:test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import '../helpers.js';
import { withTempWorkspaceEnv } from '../helpers.js';
import {
  getInstalledAddonWebEntries,
  handleAddonAssetRequest,
  handleGetAddons,
  handleRestartAddonRuntime,
  isAddonFsLockError,
  mergeCatalogs,
  parseCatalogUrlList,
  removeAddonDirRobustly,
  resolveAddonInstallSpec,
  resolveRequestedCatalogUrls,
  WEB_RESTART_DELAY_MS,
} from '../../src/channels/web/handlers/addons.js';

test('parseCatalogUrlList normalizes newline and comma separated URLs', () => {
  expect(parseCatalogUrlList([
    ' https://example.com/a.json\nhttps://example.com/b.json ',
    'https://example.com/b.json, https://example.com/c.json',
    '',
  ])).toEqual([
    'https://example.com/a.json',
    'https://example.com/b.json',
    'https://example.com/c.json',
  ]);
});

test('resolveRequestedCatalogUrls falls back to the default catalog and preserves repeated params', () => {
  expect(resolveRequestedCatalogUrls(new URL('https://example.test/agent/addons'))).toEqual([
    'https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json',
  ]);
  expect(resolveRequestedCatalogUrls(new URL('https://example.test/agent/addons?catalog_url=https://example.com/a.json&catalog_url=https://example.com/b.json'))).toEqual([
    'https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json',
    'https://example.com/a.json',
    'https://example.com/b.json',
  ]);
});

test('mergeCatalogs combines multiple catalogs and dedupes overlapping addons by slug/name', () => {
  expect(mergeCatalogs([
    {
      source: 'primary',
      addons: [
        { slug: 'drawio', name: 'piclaw-addon-drawio-editor', version: '1.0.0', description: 'primary drawio' },
      ],
    },
    {
      source: 'secondary',
      addons: [
        { slug: 'drawio', name: 'piclaw-addon-drawio-editor', version: '2.0.0', description: 'secondary drawio' },
        { slug: 'eml', name: 'piclaw-addon-eml-viewer', version: '1.0.0', description: 'eml' },
      ],
    },
  ])).toEqual({
    version: undefined,
    source: 'primary, secondary',
    addons: [
      { slug: 'drawio', name: 'piclaw-addon-drawio-editor', version: '1.0.0', description: 'primary drawio' },
      { slug: 'eml', name: 'piclaw-addon-eml-viewer', version: '1.0.0', description: 'eml' },
    ],
  });
});

test('resolveAddonInstallSpec prefers explicit catalog install spec', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-code-validator',
    version: '0.1.0',
    install: {
      kind: 'npm',
      spec: 'piclaw-addon-code-validator@0.1.0',
      piSource: 'npm:piclaw-addon-code-validator@0.1.0',
    },
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-code-validator@0.1.0',
    piSource: 'npm:piclaw-addon-code-validator@0.1.0',
  });
});

test('resolveAddonInstallSpec falls back to npm package@version', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-eml-viewer',
    version: '1.2.3',
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-eml-viewer@1.2.3',
    piSource: 'npm:piclaw-addon-eml-viewer@1.2.3',
  });
});

test('resolveAddonInstallSpec falls back to bare npm package name when version is missing', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-dev-tools',
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-dev-tools',
    piSource: 'npm:piclaw-addon-dev-tools',
  });
});

test('handleGetAddons merges add-ons from multiple catalog URLs', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL) => {
    const href = String(input);
    if (href.includes('rcarmo/piclaw-addons/main/catalog.json')) {
      return new Response(JSON.stringify({
        source: 'default',
        addons: [
          { slug: 'proxmox', name: 'piclaw-addon-proxmox', version: '0.1.3', description: 'proxmox' },
        ],
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    if (href.includes('catalog-a.json')) {
      return new Response(JSON.stringify({
        source: 'catalog-a',
        addons: [
          { slug: 'drawio', name: 'piclaw-addon-drawio-editor', version: '1.0.0', description: 'drawio' },
        ],
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    if (href.includes('catalog-b.json')) {
      return new Response(JSON.stringify({
        source: 'catalog-b',
        addons: [
          { slug: 'eml', name: 'piclaw-addon-eml-viewer', version: '1.0.0', description: 'eml' },
        ],
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response('not found', { status: 404 });
  }) as typeof fetch;

  try {
    const response = await handleGetAddons(
      (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } }),
      new URL('https://example.test/agent/addons?catalog_url=https://example.com/catalog-a.json&catalog_url=https://example.com/catalog-b.json'),
    );
    expect(response.status).toBe(200);
    const data = await response.json();
    // Default catalog is always included + custom ones merged
    expect(data.sources).toEqual([
      'https://raw.githubusercontent.com/rcarmo/piclaw-addons/main/catalog.json',
      'https://example.com/catalog-a.json',
      'https://example.com/catalog-b.json',
    ]);
    expect(data.failed_sources).toEqual([]);
    // Addons from all three catalogs are merged
    const slugs = data.addons.map((a: any) => a.slug).sort();
    expect(slugs).toEqual(['drawio', 'eml', 'proxmox']);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('getInstalledAddonWebEntries discovers addon browser entrypoints', async () => {
  await withTempWorkspaceEnv('piclaw-addon-web-entries-', {}, async (workspace) => {
    const addonDir = join(workspace.workspace, '.pi', 'extensions', 'node_modules', 'piclaw-addon-example');
    mkdirSync(join(addonDir, 'web'), { recursive: true });
    writeFileSync(join(addonDir, 'package.json'), JSON.stringify({
      name: 'piclaw-addon-example',
      version: '0.1.0',
      type: 'module',
      pi: {
        extensions: ['index.ts'],
        web: { entries: ['web/index.ts'] },
      },
    }, null, 2));
    writeFileSync(join(addonDir, 'index.ts'), 'export default function noop() {}\n');
    writeFileSync(join(addonDir, 'web', 'index.ts'), 'globalThis.__exampleAddonLoaded = true;\n');

    expect(getInstalledAddonWebEntries(workspace.workspace)).toEqual([
      {
        packageName: 'piclaw-addon-example',
        entry: 'web/index.ts',
        url: '/agent/addons/assets/piclaw-addon-example/web/index.ts',
      },
    ]);
  });
});

test('handleAddonAssetRequest serves transpiled addon browser modules', async () => {
  await withTempWorkspaceEnv('piclaw-addon-web-asset-', {}, async (workspace) => {
    const addonDir = join(workspace.workspace, '.pi', 'extensions', 'node_modules', 'piclaw-addon-example');
    mkdirSync(join(addonDir, 'web'), { recursive: true });
    writeFileSync(join(addonDir, 'package.json'), JSON.stringify({
      name: 'piclaw-addon-example',
      version: '0.1.0',
      type: 'module',
      pi: {
        extensions: ['index.ts'],
        web: { entries: ['web/index.ts'] },
      },
    }, null, 2));
    writeFileSync(join(addonDir, 'web', 'index.ts'), 'const answer: number = 42;\nexport default answer;\n');

    const response = await handleAddonAssetRequest(
      new Request('http://localhost/agent/addons/assets/piclaw-addon-example/web/index.ts', { method: 'GET' }),
      '/agent/addons/assets/piclaw-addon-example/web/index.ts',
    );

    expect(response?.status).toBe(200);
    expect(response?.headers.get('Content-Type')).toContain('text/javascript');
    expect(await response?.text()).toContain('const answer = 42');
  });
});

test('handleAddonAssetRequest accepts Windows-style resolved paths inside the addon root', async () => {
  const originalResolve = require('node:path').resolve;
  const pathModule = require('node:path');
  pathModule.resolve = ((...parts: string[]) => {
    const joined = parts.join('/').replace(/\\/g, '/').replace(/\/+/g, '/');
    if (joined.endsWith('/web/index.ts')) return 'C:\\workspace\\.pi\\extensions\\node_modules\\piclaw-addon-example\\web\\index.ts';
    if (joined.endsWith('/piclaw-addon-example')) return 'C:\\workspace\\.pi\\extensions\\node_modules\\piclaw-addon-example';
    return originalResolve(...parts);
  }) as typeof originalResolve;

  try {
    await withTempWorkspaceEnv('piclaw-addon-web-asset-win-', {}, async (workspace) => {
      const addonDir = join(workspace.workspace, '.pi', 'extensions', 'node_modules', 'piclaw-addon-example');
      mkdirSync(join(addonDir, 'web'), { recursive: true });
      writeFileSync(join(addonDir, 'package.json'), JSON.stringify({
        name: 'piclaw-addon-example',
        version: '0.1.0',
        type: 'module',
        pi: {
          extensions: ['index.ts'],
          web: { entries: ['web/index.ts'] },
        },
      }, null, 2));
      writeFileSync(join(addonDir, 'web', 'index.ts'), 'export const windowsOk: boolean = true;\n');

      const response = await handleAddonAssetRequest(
        new Request('http://localhost/agent/addons/assets/piclaw-addon-example/web/index.ts', { method: 'GET' }),
        '/agent/addons/assets/piclaw-addon-example/web/index.ts',
      );

      expect(response?.status).toBe(200);
      expect(await response?.text()).toContain('const windowsOk = true');
    });
  } finally {
    pathModule.resolve = originalResolve;
  }
});

test('removeAddonDirRobustly retries transient Windows lock errors and then quarantines locked directories', async () => {
  const target = 'C:\\workspace\\.pi\\extensions\\node_modules\\piclaw-addon-example';
  const addonsDir = 'C:\\workspace\\.pi\\extensions';
  let attempts = 0;
  const removed: string[] = [];
  const renamed: Array<{ from: string; to: string }> = [];

  const result = await removeAddonDirRobustly(target, addonsDir, {
    platform: 'win32',
    existsSync: (path) => path === target,
    rmSync: (path) => {
      removed.push(String(path));
      attempts += 1;
      const error = new Error('resource busy or locked') as Error & { code?: string };
      error.code = 'EBUSY';
      throw error;
    },
    mkdirSync: () => undefined,
    renameSync: (from, to) => { renamed.push({ from: String(from), to: String(to) }); },
    sleep: async () => undefined,
    now: () => 12345,
  });

  expect(attempts).toBe(4);
  expect(removed).toHaveLength(4);
  expect(result).toEqual({
    removed: true,
    deferred: true,
    movedTo: 'C:\\workspace\\.pi\\extensions/.trash/piclaw-addon-example-12345',
  });
  expect(renamed).toEqual([
    {
      from: target,
      to: 'C:\\workspace\\.pi\\extensions/.trash/piclaw-addon-example-12345',
    },
  ]);
});

test('removeAddonDirRobustly rethrows non-lock errors', async () => {
  const target = '/workspace/.pi/extensions/node_modules/piclaw-addon-example';
  const addonsDir = '/workspace/.pi/extensions';
  const error = new Error('boom') as Error & { code?: string };
  error.code = 'ENOENT';

  await expect(removeAddonDirRobustly(target, addonsDir, {
    platform: 'linux',
    existsSync: () => true,
    rmSync: () => { throw error; },
    sleep: async () => undefined,
  })).rejects.toBe(error);
});

test('isAddonFsLockError matches common Windows lock errors', () => {
  const busy = new Error('resource busy or locked') as Error & { code?: string };
  busy.code = 'EBUSY';
  expect(isAddonFsLockError(busy)).toBe(true);
  expect(isAddonFsLockError(new Error('Access is denied'))).toBe(true);
  expect(isAddonFsLockError(new Error('plain failure'))).toBe(false);
});

test('handleRestartAddonRuntime returns success and schedules graceful restart', async () => {
  let scheduled = 0;
  (globalThis as any).__PICLAW_EXIT_SCHEDULER__ = () => {
    scheduled += 1;
  };

  try {
    const res = handleRestartAddonRuntime((body, status = 200) => new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      ok: true,
      message: 'Restarting piclaw… The UI should reconnect automatically.',
    });

    await new Promise((resolve) => setTimeout(resolve, WEB_RESTART_DELAY_MS + 30));
    expect(scheduled).toBe(1);
  } finally {
    delete (globalThis as any).__PICLAW_EXIT_SCHEDULER__;
  }
});
