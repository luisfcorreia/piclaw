import { expect, test } from 'bun:test';

import { startModelAndQueueRefreshEffect } from '../../web/src/ui/app-chat-refresh-lifecycle.js';

test('startModelAndQueueRefreshEffect runs hydrate immediately and schedules periodic refresh bundle', () => {
  const calls: string[] = [];
  let intervalHandler: (() => void) | null = null;
  let clearedHandle: unknown = null;

  const cleanup = startModelAndQueueRefreshEffect({
    refreshModelAndQueueState: () => calls.push('initial'),
    refreshModelState: () => calls.push('model'),
    refreshActiveChatAgents: () => calls.push('agents'),
    refreshCurrentChatBranches: () => calls.push('branches'),
    refreshQueueState: () => calls.push('queue'),
    intervalMs: 60_000,
    scheduleInterval: (handler) => {
      intervalHandler = handler;
      return { token: 'poll' };
    },
    clearScheduledInterval: (handle) => {
      clearedHandle = handle;
    },
  });

  expect(calls).toEqual(['initial']);
  intervalHandler?.();
  expect(calls).toEqual(['initial', 'model', 'agents', 'branches', 'queue']);

  cleanup();
  expect(clearedHandle).toEqual({ token: 'poll' });
});
