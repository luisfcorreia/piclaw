import { expect, test } from 'bun:test';

import { resolveNavigationUrl } from '../../web/src/ui/app-location-navigation.js';

test('resolveNavigationUrl resolves relative URLs against current href', () => {
  expect(resolveNavigationUrl('?chat_jid=web%3Achild', 'https://example.test/?chat_jid=web%3Aroot')).toBe('https://example.test/?chat_jid=web%3Achild');
});

test('resolveNavigationUrl preserves absolute URLs', () => {
  expect(resolveNavigationUrl('https://example.test/?pane_popout=1', 'https://base.test/')).toBe('https://example.test/?pane_popout=1');
});
