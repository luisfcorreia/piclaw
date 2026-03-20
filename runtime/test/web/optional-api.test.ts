import { expect, mock, test } from 'bun:test';

import { missingOptionalApi, resolveOptionalApi } from '../../web/src/ui/optional-api.js';

test('resolveOptionalApi returns the real export when present', async () => {
  const real = async () => 'ok';
  const resolved = resolveOptionalApi({ doThing: real }, 'doThing', 'fallback');
  expect(resolved).toBe(real);
  expect(await resolved()).toBe('ok');
});

test('resolveOptionalApi returns a fallback async function when export is absent', async () => {
  const resolved = resolveOptionalApi({}, 'missingThing', { ready: false });
  expect(typeof resolved).toBe('function');
  expect(await resolved()).toEqual({ ready: false });
});

test('missingOptionalApi warns in window environments and stays quiet otherwise', async () => {
  const originalWindow = globalThis.window;
  const warn = mock(() => {});
  const originalWarn = console.warn;
  console.warn = warn;

  try {
    globalThis.window = {} as any;
    const withWindow = missingOptionalApi('missingThing', 123);
    expect(await withWindow()).toBe(123);
    expect(warn).toHaveBeenCalledTimes(1);

    warn.mockClear();
    globalThis.window = undefined as any;
    const withoutWindow = missingOptionalApi('serverThing', 456);
    expect(await withoutWindow()).toBe(456);
    expect(warn).toHaveBeenCalledTimes(0);
  } finally {
    console.warn = originalWarn;
    globalThis.window = originalWindow;
  }
});
