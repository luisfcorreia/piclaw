import { expect, test } from 'bun:test';

import { buildDrawioEditorUrl } from '../../web/src/panes/drawio-pane.js';

test('buildDrawioEditorUrl matches the older direct editor route and keeps export UI available', () => {
  expect(buildDrawioEditorUrl(false)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&ui=dark&dark=0');
  expect(buildDrawioEditorUrl(true)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&ui=dark&dark=1');
  expect(buildDrawioEditorUrl(true)).not.toContain('/drawio/edit.html');
  expect(buildDrawioEditorUrl(true)).not.toContain('noSaveBtn=1');
  expect(buildDrawioEditorUrl(true)).not.toContain('noExitBtn=1');
});
