import { expect, test } from 'bun:test';

import { shouldResetSteerQueue } from '../../web/src/ui/app-chat-pane-runtime-orchestration.js';

test('shouldResetSteerQueue returns true when queue drains and no active turn remains', () => {
  expect(shouldResetSteerQueue({
    remainingQueueCount: 0,
    isAgentTurnActive: false,
    steerQueuedTurnId: 'turn-1',
    currentTurnId: null,
  })).toBe(true);
});

test('shouldResetSteerQueue keeps steer queue when active turn still matches', () => {
  expect(shouldResetSteerQueue({
    remainingQueueCount: 1,
    isAgentTurnActive: true,
    steerQueuedTurnId: 'turn-1',
    currentTurnId: 'turn-1',
  })).toBe(false);
});
