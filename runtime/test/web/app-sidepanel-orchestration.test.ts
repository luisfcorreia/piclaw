import { expect, test } from 'bun:test';

import { resetFloatingWidgetStateForChatChange } from '../../web/src/ui/app-sidepanel-orchestration.js';

test('resetFloatingWidgetStateForChatChange clears dismissed keys and closes active widget', () => {
  const dismissed = new Set<string>(['chat:web:1/live:run-1', 'chat:web:1/live:run-2']);
  const setCalls: any[] = [];

  resetFloatingWidgetStateForChatChange({
    dismissedLiveWidgetKeysRef: { current: dismissed },
    setFloatingWidget: (next) => {
      setCalls.push(typeof next === 'function' ? next({ id: 'prev' }) : next);
      return null;
    },
  });

  expect(dismissed.size).toBe(0);
  expect(setCalls).toEqual([null]);
});
