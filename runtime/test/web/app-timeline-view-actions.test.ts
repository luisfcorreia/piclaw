import { expect, test } from 'bun:test';

import { isMainTimelineViewState } from '../../web/src/ui/app-timeline-view-actions.js';

test('isMainTimelineViewState returns true only for default timeline mode', () => {
  expect(isMainTimelineViewState({
    currentHashtag: null,
    searchQuery: null,
    searchOpen: false,
  })).toBe(true);

  expect(isMainTimelineViewState({
    currentHashtag: 'ops',
    searchQuery: null,
    searchOpen: false,
  })).toBe(false);

  expect(isMainTimelineViewState({
    currentHashtag: null,
    searchQuery: 'error',
    searchOpen: false,
  })).toBe(false);

  expect(isMainTimelineViewState({
    currentHashtag: null,
    searchQuery: null,
    searchOpen: true,
  })).toBe(false);
});
