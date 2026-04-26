import { expect, test } from 'bun:test';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import '../helpers.js';

test('WorkspaceTreeCache clamps requested depth to configured workspace max depth', async () => {
  const configModule = await import('../../src/core/config.js');
  const settingsModule = await import('../../src/channels/web/workspace/settings.js');
  const treeCacheModule = await import('../../src/channels/web/workspace/tree-cache.js');

  const previous = settingsModule.getWorkspaceScanSettings();
  const prefix = `workspace-tree-depth-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const baseDir = join(configModule.WORKSPACE_DIR, prefix);

  mkdirSync(join(baseDir, 'demo', 'deep', 'nested'), { recursive: true });
  writeFileSync(join(baseDir, 'demo', 'deep', 'nested', 'file.txt'), 'hello');

  try {
    settingsModule.saveWorkspaceScanSettings({ treeMaxDepth: 2 });

    const cache = new treeCacheModule.WorkspaceTreeCache();
    const result = cache.getTree(prefix, '8', false);
    expect(result.status).toBe(200);

    const root = (result.body as any).root;
    const demo = root.children.find((entry) => entry.name === 'demo');
    expect(demo).toBeTruthy();
    expect(Array.isArray(demo.children)).toBe(true);

    const deep = demo.children.find((entry) => entry.name === 'deep');
    expect(deep).toBeTruthy();
    expect(deep.children).toBeUndefined();
  } finally {
    settingsModule.saveWorkspaceScanSettings(previous);
    rmSync(baseDir, { recursive: true, force: true });
  }
});
