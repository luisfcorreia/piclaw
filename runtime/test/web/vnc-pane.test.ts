import { expect, test } from 'bun:test';

import { buildVncTabPath, consumeVncPopoutPassword, createVncPopoutTransferPayload, shouldRetryVncPopoutWithoutHandoff, stashVncPopoutPassword } from '../../web/src/panes/vnc-pane.js';

test('buildVncTabPath encodes target ids when present', () => {
  expect(buildVncTabPath()).toBe('piclaw://vnc');
  expect(buildVncTabPath('host:5901')).toBe('piclaw://vnc/host%3A5901');
});

function createMemoryStorage() {
  const map = new Map<string, string>();
  return {
    storage: {
      getItem: (key: string) => map.has(key) ? map.get(key)! : null,
      setItem: (key: string, value: string) => { map.set(key, value); },
      removeItem: (key: string) => { map.delete(key); },
      key: (index: number) => Array.from(map.keys())[index] ?? null,
      get length() { return map.size; },
    },
    map,
  };
}

test('createVncPopoutTransferPayload serializes target identity and optional password token', () => {
  const memory = createMemoryStorage();
  const runtime = { localStorage: memory.storage } as any;

  expect(createVncPopoutTransferPayload(undefined, undefined, runtime)).toBeNull();
  expect(createVncPopoutTransferPayload('lab', null, runtime)).toEqual({ pane_path: 'piclaw://vnc/lab' });

  const payload = createVncPopoutTransferPayload('lab', 'secret', runtime);
  expect(payload?.pane_path).toBe('piclaw://vnc/lab');
  expect(typeof payload?.vnc_secret).toBe('string');
  expect(payload?.vnc_secret).toBeTruthy();
});

 test('stashVncPopoutPassword stores a one-time password token', () => {
  const memory = createMemoryStorage();
  const runtime = { localStorage: memory.storage } as any;
  const token = stashVncPopoutPassword('secret', runtime, 1000);
  expect(typeof token).toBe('string');
  expect(consumeVncPopoutPassword(token, runtime, 1001)).toBe('secret');
  expect(consumeVncPopoutPassword(token, runtime, 1002)).toBeNull();
});

test('shouldRetryVncPopoutWithoutHandoff only retries pristine failed handoffs', () => {
  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(true);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: '',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 10,
    hasRenderedFrame: false,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: true,
    reconnectAttempts: 0,
  })).toBe(false);

  expect(shouldRetryVncPopoutWithoutHandoff({
    handoffToken: 'token-1',
    bytesIn: 0,
    hasRenderedFrame: false,
    reconnectAttempts: 1,
  })).toBe(false);
});
