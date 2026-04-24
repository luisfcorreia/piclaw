import { afterEach, expect, test } from 'bun:test';

import { getStandaloneTabUrl } from '../../web/src/components/tab-strip.js';
import {
  registerAddonStandaloneTabUrlResolver,
  resetAddonWebRegistriesForTests,
} from '../../web/src/ui/addon-web-extensions.ts';

afterEach(() => {
  resetAddonWebRegistriesForTests();
});

test('getStandaloneTabUrl honors addon-provided drawio standalone routes', () => {
  registerAddonStandaloneTabUrlResolver((path, { hasPopOutTab } = {}) => {
    if (!/\.drawio(\.xml|\.svg|\.png)?$/i.test(String(path || '')) || hasPopOutTab) return null;
    return '/drawio/edit?path=' + encodeURIComponent(path);
  });

  expect(getStandaloneTabUrl('/workspace/foo.drawio', { hasPopOutTab: true })).toBeNull();
  expect(getStandaloneTabUrl('/workspace/foo.drawio', { hasPopOutTab: false })).toBe('/drawio/edit?path=%2Fworkspace%2Ffoo.drawio');
});

test('getStandaloneTabUrl still resolves standalone viewer routes for non-drawio files', () => {
  expect(getStandaloneTabUrl('/workspace/report.docx', { hasPopOutTab: true })).toBe(
    '/office-viewer/?url=' + encodeURIComponent('/workspace/raw?path=%2Fworkspace%2Freport.docx') + '&name=report.docx',
  );
  expect(getStandaloneTabUrl('/workspace/chart.csv', { hasPopOutTab: true })).toBe('/csv-viewer/?path=%2Fworkspace%2Fchart.csv');
  expect(getStandaloneTabUrl('/workspace/manual.pdf', { hasPopOutTab: true })).toBe('/workspace/raw?path=%2Fworkspace%2Fmanual.pdf');
  expect(getStandaloneTabUrl('/workspace/image.png', { hasPopOutTab: true })).toBe('/image-viewer/?path=%2Fworkspace%2Fimage.png');
});
