import { afterEach, expect, test } from 'bun:test';
import {
  METERS_COLLAPSED_EVENT_NAME,
  METERS_COLLAPSED_STORAGE_KEY,
  applyMetersCollapsed,
  readStoredMetersCollapsed,
  toggleMetersCollapsed,
} from '../../web/src/ui/meters.ts';
import { buildCompactMetersSummary, buildSparklinePath, formatBytesCompact } from '../../web/src/components/system-meters-hud.ts';

const originalWindow = globalThis.window;

function makeWindow(initial = {}) {
  const store = new Map(Object.entries(initial));
  const events: Array<{ type: string; detail: any }> = [];
  return {
    localStorage: {
      getItem: (key: string) => (store.has(key) ? String(store.get(key)) : null),
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    },
    dispatchEvent: (event: Event & { detail?: any }) => {
      events.push({ type: event.type, detail: (event as any).detail });
      return true;
    },
    __events: events,
  } as any;
}

afterEach(() => {
  globalThis.window = originalWindow;
});

test('applyMetersCollapsed persists state and dispatches a collapsed-change event', () => {
  const win = makeWindow();
  globalThis.window = win;

  const next = applyMetersCollapsed(true);

  expect(next).toBe(true);
  expect(win.localStorage.getItem(METERS_COLLAPSED_STORAGE_KEY)).toBe('true');
  expect(win.__events).toEqual([
    { type: METERS_COLLAPSED_EVENT_NAME, detail: { collapsed: true } },
  ]);
});

test('buildCompactMetersSummary uses fat bullet separators and includes swap when present', () => {
  expect(buildCompactMetersSummary({ cpu_percent: 18, ram_percent: 62, swap_percent: 7, swap_total_bytes: 1024 })).toBe('CPU 18% • RAM 62% • SWP 7%');
  expect(buildCompactMetersSummary({ cpu_percent: 18, ram_percent: 62, swap_percent: null, swap_total_bytes: 0 })).toBe('CPU 18% • RAM 62%');
});

test('buildSparklinePath supports dynamically scaled byte series and flat lines', () => {
  expect(buildSparklinePath([100, 200], 56, 16)).toBe('M 0.00 16.00 L 56.00 0.00');
  expect(buildSparklinePath([512, 512], 56, 16)).toBe('M 0 8.00 L 56 8.00');
});

test('formatBytesCompact keeps RSS labels short enough for the HUD', () => {
  expect(formatBytesCompact(0)).toBe('0B');
  expect(formatBytesCompact(512 * 1024 * 1024)).toBe('512M');
  expect(formatBytesCompact(1536 * 1024 * 1024)).toBe('1.5G');
});

test('toggleMetersCollapsed flips the stored collapsed state', () => {
  const win = makeWindow({ [METERS_COLLAPSED_STORAGE_KEY]: 'true' });
  globalThis.window = win;

  expect(readStoredMetersCollapsed(false)).toBe(true);
  expect(toggleMetersCollapsed()).toBe(false);
  expect(readStoredMetersCollapsed(false)).toBe(false);
});
