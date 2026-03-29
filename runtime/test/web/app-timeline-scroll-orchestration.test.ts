import { expect, test } from 'bun:test';

import { shouldAutoScrollToBottom } from '../../web/src/ui/app-timeline-scroll-orchestration.js';

test('shouldAutoScrollToBottom allows snap when user is near bottom', () => {
  expect(shouldAutoScrollToBottom(0)).toBe(true);
  expect(shouldAutoScrollToBottom(-120)).toBe(true);
  expect(shouldAutoScrollToBottom(140)).toBe(true);
});

test('shouldAutoScrollToBottom prevents snap when user scrolled far away', () => {
  expect(shouldAutoScrollToBottom(-151)).toBe(false);
  expect(shouldAutoScrollToBottom(300)).toBe(false);
});
