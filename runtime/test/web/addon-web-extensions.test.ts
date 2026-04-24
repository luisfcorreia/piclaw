import { afterEach, expect, test } from 'bun:test';

import { getAttachmentPreviewKind, getAttachmentPreviewLabel } from '../../web/src/ui/attachment-preview.js';
import { paneRegistry } from '../../web/src/panes/index.js';
import {
  buildAddonAttachmentPreviewFrameUrl,
  getAddonAttachmentPreviewNote,
  registerAddonAttachmentPreview,
  registerAddonPane,
  registerAddonStandaloneTabUrlResolver,
  resolveAddonStandaloneTabUrl,
  resetAddonWebRegistriesForTests,
} from '../../web/src/ui/addon-web-extensions.ts';

afterEach(() => {
  resetAddonWebRegistriesForTests();
});

test('addon web registries support pane, standalone URL, and attachment preview registration', () => {
  registerAddonPane({
    id: 'drawio-editor',
    label: 'Draw.io Editor',
    capabilities: ['edit'],
    placement: 'tabs',
    canHandle: () => 60,
    mount() {
      return {
        getContent() { return undefined; },
        isDirty() { return false; },
        focus() {},
        dispose() {},
      };
    },
  });
  registerAddonStandaloneTabUrlResolver((path, { hasPopOutTab } = {}) => {
    if (!/\.drawio$/i.test(String(path || '')) || hasPopOutTab) return null;
    return '/drawio/edit?path=' + encodeURIComponent(path);
  });
  registerAddonAttachmentPreview({
    id: 'drawio',
    label: 'Draw.io preview (read-only)',
    match(contentType, filename) {
      return String(contentType || '').toLowerCase() === 'application/vnd.jgraph.mxfile' || /\.drawio$/i.test(String(filename || ''));
    },
    buildFrameUrl(mediaId, filename) {
      return `/drawio/edit.html?media=${encodeURIComponent(String(mediaId))}&name=${encodeURIComponent(filename || 'diagram.drawio')}&readonly=1`;
    },
    note: 'Draw.io preview is read-only. Editing tools are disabled in this preview.',
  });

  expect(paneRegistry.get('drawio-editor')).toBeTruthy();
  expect(resolveAddonStandaloneTabUrl('/workspace/diagram.drawio', { hasPopOutTab: false })).toBe('/drawio/edit?path=%2Fworkspace%2Fdiagram.drawio');
  expect(resolveAddonStandaloneTabUrl('/workspace/diagram.drawio', { hasPopOutTab: true })).toBeNull();
  expect(getAttachmentPreviewKind('application/vnd.jgraph.mxfile', 'diagram.drawio')).toBe('drawio');
  expect(getAttachmentPreviewLabel('drawio')).toBe('Draw.io preview (read-only)');
  expect(buildAddonAttachmentPreviewFrameUrl('drawio', 7, 'diagram.drawio')).toContain('/drawio/edit.html?media=7');
  expect(getAddonAttachmentPreviewNote('drawio')).toContain('read-only');
});
