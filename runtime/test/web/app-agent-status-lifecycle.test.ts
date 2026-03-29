import { expect, test } from 'bun:test';

import { resolveSilenceWatchdogIntervalMs } from '../../web/src/ui/app-agent-status-lifecycle.js';

test('resolveSilenceWatchdogIntervalMs halves warning window and caps at 1s', () => {
  expect(resolveSilenceWatchdogIntervalMs(8_000)).toBe(1000);
  expect(resolveSilenceWatchdogIntervalMs(1_200)).toBe(600);
});

test('resolveSilenceWatchdogIntervalMs floors to 100ms minimum', () => {
  expect(resolveSilenceWatchdogIntervalMs(50)).toBe(100);
  expect(resolveSilenceWatchdogIntervalMs(180)).toBe(100);
});
