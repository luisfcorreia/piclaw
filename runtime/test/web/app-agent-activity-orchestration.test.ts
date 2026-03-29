import { expect, test } from 'bun:test';

import { clearLastActivityFlagState } from '../../web/src/ui/app-agent-activity-orchestration.js';

test('clearLastActivityFlagState removes transient last_activity fields', () => {
  expect(clearLastActivityFlagState({ type: 'active', last_activity: true, detail: 'x' })).toEqual({ type: 'active', detail: 'x' });
  expect(clearLastActivityFlagState({ type: 'active', lastActivity: true, detail: 'x' })).toEqual({ type: 'active', detail: 'x' });
});

test('clearLastActivityFlagState is no-op when no transient activity flag exists', () => {
  const base = { type: 'active', detail: 'x' };
  expect(clearLastActivityFlagState(base)).toEqual(base);
  expect(clearLastActivityFlagState(null)).toBeNull();
});
