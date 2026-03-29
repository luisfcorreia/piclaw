import { expect, test } from 'bun:test';

import { resetExtensionPanelStateForChat } from '../../web/src/ui/app-view-refresh-lifecycle.js';

test('resetExtensionPanelStateForChat clears extension panels and pending action keys', () => {
  let panels = new Map<string, unknown>([['autoresearch', { status: 'running' }]]);
  let pending = new Set<string>(['autoresearch:stop']);

  resetExtensionPanelStateForChat({
    setExtensionStatusPanels: (next) => {
      panels = typeof next === 'function' ? next(panels) : next;
      return panels;
    },
    setPendingExtensionPanelActions: (next) => {
      pending = typeof next === 'function' ? next(pending) : next;
      return pending;
    },
  });

  expect(panels.size).toBe(0);
  expect(pending.size).toBe(0);
});
