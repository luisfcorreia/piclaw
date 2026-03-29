import { expect, test } from 'bun:test';

import { renderResolvedAppShell } from '../../web/src/ui/app-shell-render-router.js';

test('renderResolvedAppShell routes to branch-loader renderer when branch loader mode is active', () => {
  const calls: string[] = [];
  const result = renderResolvedAppShell({
    branchLoaderMode: true,
    panePopoutMode: false,
    branchLoaderState: { step: 'loading' },
    panePopoutOptions: { pane: 'x' },
    mainShellOptions: { main: true },
    renderers: {
      renderBranchLoaderMode: () => {
        calls.push('branch');
        return 'branch';
      },
      renderPanePopoutMode: () => {
        calls.push('popout');
        return 'popout';
      },
      renderMainShell: () => {
        calls.push('main');
        return 'main';
      },
    },
  });

  expect(result).toBe('branch');
  expect(calls).toEqual(['branch']);
});

test('renderResolvedAppShell falls back to main shell renderer for default mode', () => {
  const calls: string[] = [];
  const result = renderResolvedAppShell({
    branchLoaderMode: false,
    panePopoutMode: false,
    branchLoaderState: null,
    panePopoutOptions: {},
    mainShellOptions: { foo: 'bar' },
    renderers: {
      renderBranchLoaderMode: () => {
        calls.push('branch');
        return 'branch';
      },
      renderPanePopoutMode: () => {
        calls.push('popout');
        return 'popout';
      },
      renderMainShell: () => {
        calls.push('main');
        return 'main';
      },
    },
  });

  expect(result).toBe('main');
  expect(calls).toEqual(['main']);
});
