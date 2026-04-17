import { expect, test } from 'bun:test';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  buildEmbeddedDrawioAppUrl,
  getDrawioVendorDirCandidates,
  isBinaryDrawioSaveTarget,
  isExplicitDrawioExportRequest,
  isTrustedDrawioMessageEvent,
  MINIMAL_DRAWIO_EXPORT_ACTIONS,
  MINIMAL_DRAWIO_FILE_MENU_ACTIONS,
  resolveDrawioSavePath,
  resolveDrawioVendorDir,
} from '../../extensions/viewers/drawio-editor/index.ts';

function withTempDir(run: (root: string) => void) {
  const root = mkdtempSync(join(tmpdir(), 'piclaw-drawio-vendor-'));
  try {
    run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('getDrawioVendorDirCandidates includes packaged and workspace fallback locations', () => {
  const candidates = getDrawioVendorDirCandidates('/pkg/ext', '/workspace');
  expect(candidates).toEqual([
    '/pkg/ext/vendor',
    '/workspace/runtime/extensions/viewers/drawio-editor/vendor',
    '/workspace/piclaw/runtime/extensions/viewers/drawio-editor/vendor',
    '/workspace/generated/cache/vendor/drawio/v29.6.1',
    '/workspace/piclaw/generated/cache/vendor/drawio/v29.6.1',
  ]);
});

test('resolveDrawioVendorDir falls back to workspace source vendor when packaged vendor is missing', () => {
  withTempDir((root) => {
    const baseDir = join(root, 'pkg', 'runtime', 'extensions', 'viewers', 'drawio-editor');
    const workspaceVendor = join(root, 'workspace', 'piclaw', 'runtime', 'extensions', 'viewers', 'drawio-editor', 'vendor');
    mkdirSync(workspaceVendor, { recursive: true });
    writeFileSync(join(workspaceVendor, 'index.html'), '<html></html>');

    expect(resolveDrawioVendorDir(baseDir, join(root, 'workspace'))).toBe(workspaceVendor);
  });
});

test('buildEmbeddedDrawioAppUrl hides save and exit chrome in embedded mode', () => {
  expect(buildEmbeddedDrawioAppUrl(false)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=0');
  expect(buildEmbeddedDrawioAppUrl(true)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=1');
  expect(buildEmbeddedDrawioAppUrl(true, true)).toContain('chrome=0');
  expect(buildEmbeddedDrawioAppUrl(true)).toContain('noSaveBtn=1');
  expect(buildEmbeddedDrawioAppUrl(true)).toContain('noExitBtn=1');
  expect(buildEmbeddedDrawioAppUrl(true)).toContain('libraries=0');
});

test('stringified buildEmbeddedDrawioAppUrl still works in the browser wrapper context', () => {
  const revived = new Function(`return (${buildEmbeddedDrawioAppUrl.toString()});`)() as typeof buildEmbeddedDrawioAppUrl;
  expect(revived(false)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=0');
  expect(revived(true, true)).toContain('chrome=0');
});

test('drawio wrapper only trusts same-origin messages from the embedded iframe', () => {
  const frameWindow = {};

  expect(isTrustedDrawioMessageEvent('https://piclaw.test', 'https://piclaw.test', frameWindow, frameWindow)).toBe(true);
  expect(isTrustedDrawioMessageEvent('https://attacker.test', 'https://piclaw.test', frameWindow, frameWindow)).toBe(false);
  expect(isTrustedDrawioMessageEvent('https://piclaw.test', 'https://piclaw.test', {}, frameWindow)).toBe(false);
  expect(isTrustedDrawioMessageEvent('https://piclaw.test', 'https://piclaw.test', frameWindow, null)).toBe(false);
});

test('stringified drawio trust helper keeps the same iframe and origin checks', () => {
  const revived = new Function(`return (${isTrustedDrawioMessageEvent.toString()});`)() as typeof isTrustedDrawioMessageEvent;
  const frameWindow = {};

  expect(revived('https://piclaw.test', 'https://piclaw.test', frameWindow, frameWindow)).toBe(true);
  expect(revived('https://attacker.test', 'https://piclaw.test', frameWindow, frameWindow)).toBe(false);
  expect(revived('https://piclaw.test', 'https://piclaw.test', {}, frameWindow)).toBe(false);
});

test('minimal drawio menu constants keep Save plus reduced export formats', () => {
  expect(MINIMAL_DRAWIO_FILE_MENU_ACTIONS).toEqual(['save', '-']);
  expect(MINIMAL_DRAWIO_EXPORT_ACTIONS).toEqual(['exportPng', 'exportJpg', 'exportSvg']);
});

test('drawio save helpers preserve normal saves and map explicit image exports', () => {
  expect(isExplicitDrawioExportRequest(undefined, undefined)).toBe(false);
  expect(resolveDrawioSavePath('/workspace/foo.drawio')).toBe('/workspace/foo.drawio');
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'application/xml')).toBe('/workspace/foo.drawio');
  expect(isExplicitDrawioExportRequest('image/jpeg', 'foo.jpeg')).toBe(true);
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/jpeg', 'foo.jpeg')).toBe('/workspace/foo.jpg');
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/jpg', 'foo.jpg')).toBe('/workspace/foo.jpg');
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/png', 'foo.png')).toBe('/workspace/foo.png');
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/svg+xml', 'foo.svg')).toBe('/workspace/foo.svg');
  expect(isBinaryDrawioSaveTarget('/workspace/foo.jpg', 'xml', 'image/jpeg')).toBe(true);
  expect(isBinaryDrawioSaveTarget('/workspace/foo.jpeg', 'jpeg', 'image/jpeg')).toBe(true);
  expect(isBinaryDrawioSaveTarget('/workspace/foo.drawio', 'xml', 'application/xml')).toBe(false);
});
