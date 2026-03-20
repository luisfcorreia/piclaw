import { expect, test } from 'bun:test';

import { DISPLAY_MODE_MEDIA_QUERIES, watchReturnToApp, watchStandaloneWebAppMode } from '../../web/src/ui/app-resume.js';

function createEventTarget() {
  const listeners = new Map<string, Set<(...args: any[]) => void>>();
  return {
    addEventListener(type: string, listener: (...args: any[]) => void) {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type)!.add(listener);
    },
    removeEventListener(type: string, listener: (...args: any[]) => void) {
      listeners.get(type)?.delete(listener);
    },
    dispatch(type: string) {
      for (const listener of listeners.get(type) || []) {
        listener({ type });
      }
    },
    count(type: string) {
      return listeners.get(type)?.size || 0;
    },
  };
}

test('watchStandaloneWebAppMode calls back immediately and reacts to resume events', () => {
  const win = createEventTarget() as any;
  let standalone = false;
  const mediaTargets = new Map<string, any>();

  win.matchMedia = (query: string) => {
    if (!mediaTargets.has(query)) {
      const target = createEventTarget() as any;
      Object.defineProperty(target, 'matches', {
        get() {
          return query === '(display-mode: standalone)' ? standalone : false;
        },
      });
      mediaTargets.set(query, target);
    }
    return mediaTargets.get(query);
  };

  const values: boolean[] = [];
  const dispose = watchStandaloneWebAppMode((value: boolean) => values.push(value), {
    window: win,
    navigator: { standalone: false },
  });

  expect(DISPLAY_MODE_MEDIA_QUERIES.length).toBe(3);
  expect(values).toEqual([false]);

  standalone = true;
  win.dispatch('focus');
  mediaTargets.get('(display-mode: standalone)')?.dispatch('change');
  win.dispatch('pageshow');
  expect(values).toEqual([false, true, true, true]);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
});

test('watchReturnToApp triggers only when the document is visible', () => {
  const win = createEventTarget() as any;
  const doc = createEventTarget() as any;
  doc.visibilityState = 'hidden';

  let calls = 0;
  const dispose = watchReturnToApp(() => {
    calls += 1;
  }, {
    window: win,
    document: doc,
  });

  win.dispatch('focus');
  doc.dispatch('visibilitychange');
  expect(calls).toBe(0);

  doc.visibilityState = 'visible';
  win.dispatch('pageshow');
  doc.dispatch('visibilitychange');
  expect(calls).toBe(2);

  dispose();
  expect(win.count('focus')).toBe(0);
  expect(win.count('pageshow')).toBe(0);
  expect(doc.count('visibilitychange')).toBe(0);
});
