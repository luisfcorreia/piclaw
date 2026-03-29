import { expect, test } from 'bun:test';

import { resolveBackstopIntervalMs } from '../../web/src/ui/app-realtime-lifecycle-orchestration.js';

test('resolveBackstopIntervalMs uses fast polling while agent is active', () => {
  expect(resolveBackstopIntervalMs(true)).toBe(15000);
});

test('resolveBackstopIntervalMs uses slower polling while agent is idle', () => {
  expect(resolveBackstopIntervalMs(false)).toBe(60000);
});
