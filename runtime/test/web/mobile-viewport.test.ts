import { expect, test } from 'bun:test';

import {
  readViewportHeight,
  shouldUseStandaloneMobileViewportFix,
  syncStandaloneMobileViewport,
} from '../../web/src/ui/mobile-viewport.js';

test('shouldUseStandaloneMobileViewportFix enables for standalone mobile and iPhone browser runtimes', () => {
  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: (query: string) => ({ matches: query.includes('pointer') }),
    },
  })).toBe(true);

  expect(shouldUseStandaloneMobileViewportFix({
    navigator: {
      standalone: false,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
      maxTouchPoints: 0,
    },
    window: {
      matchMedia: () => ({ matches: false }),
    },
  })).toBe(false);
});

test('readViewportHeight prefers visualViewport by default', () => {
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 612.4 },
      innerHeight: 900,
    },
  })).toBe(612);

  expect(readViewportHeight({
    window: {
      innerHeight: 844,
    },
  })).toBe(844);
});

test('readViewportHeight adds offsetTop when keyboard is active', () => {
  expect(readViewportHeight({
    window: {
      visualViewport: { height: 500.2, offsetTop: 188.1 },
      innerHeight: 900,
    },
  }, { keyboardActive: true })).toBe(688);
});

test('readViewportHeight compensates for iOS PWA portrait safe-area bug', () => {
  const mockDoc = {
    documentElement: {
      style: {},
    },
  };
  // Simulate: screen.height=844, visualViewport.height=785 (diff=59, >15 threshold)
  // safe-area-top=59px readable via CSS var
  const originalGetComputedStyle = globalThis.getComputedStyle;
  globalThis.getComputedStyle = () => ({
    getPropertyValue: (name: string) => name === '--safe-area-top' ? '59' : '',
  }) as any;

  try {
    const height = readViewportHeight({
      window: {
        visualViewport: { height: 785 },
        innerHeight: 785,
        innerWidth: 390,
        screen: { height: 844, width: 390 },
      },
    }, { isPWA: true, document: mockDoc });

    // Should add back safe-area-top: 785 + 59 = 844
    expect(height).toBe(844);
  } finally {
    if (originalGetComputedStyle) {
      globalThis.getComputedStyle = originalGetComputedStyle;
    } else {
      delete globalThis.getComputedStyle;
    }
  }
});

test('readViewportHeight skips PWA compensation in landscape', () => {
  const mockDoc = { documentElement: {} };
  const originalGetComputedStyle = globalThis.getComputedStyle;
  globalThis.getComputedStyle = () => ({
    getPropertyValue: () => '59',
  }) as any;

  try {
    // landscape: innerHeight < innerWidth
    const height = readViewportHeight({
      window: {
        visualViewport: { height: 390 },
        innerHeight: 390,
        innerWidth: 844,
        screen: { height: 844, width: 390 },
      },
    }, { isPWA: true, document: mockDoc });

    // No compensation — just visualViewport
    expect(height).toBe(390);
  } finally {
    if (originalGetComputedStyle) {
      globalThis.getComputedStyle = originalGetComputedStyle;
    } else {
      delete globalThis.getComputedStyle;
    }
  }
});

test('syncStandaloneMobileViewport applies PWA portrait compensation', () => {
  const cssVars = new Map<string, string>();
  const originalGetComputedStyle = globalThis.getComputedStyle;
  globalThis.getComputedStyle = () => ({
    getPropertyValue: (name: string) => name === '--safe-area-top' ? '59' : '',
  }) as any;

  try {
    const height = syncStandaloneMobileViewport({
      navigator: {
        standalone: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
        maxTouchPoints: 5,
      },
      window: {
        matchMedia: () => ({ matches: true }),
        visualViewport: { height: 785 },
        innerHeight: 785,
        innerWidth: 390,
        screen: { height: 844, width: 390 },
      },
      document: {
        documentElement: {
          style: {
            setProperty: (name: string, value: string) => cssVars.set(name, value),
          },
        },
        activeElement: { tagName: 'DIV' },
      },
    });

    expect(height).toBe(844);
    expect(cssVars.get('--app-height')).toBe('844px');
  } finally {
    if (originalGetComputedStyle) {
      globalThis.getComputedStyle = originalGetComputedStyle;
    } else {
      delete globalThis.getComputedStyle;
    }
  }
});

test('syncStandaloneMobileViewport uses visualViewport+offsetTop when keyboard is active', () => {
  const cssVars = new Map<string, string>();

  const height = syncStandaloneMobileViewport({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 512.2, offsetTop: 146.4 },
      innerHeight: 844,
      innerWidth: 390,
      screen: { height: 844, width: 390 },
    },
    document: {
      documentElement: {
        style: {
          setProperty: (name: string, value: string) => cssVars.set(name, value),
        },
      },
      activeElement: { tagName: 'TEXTAREA' },
    },
  });

  expect(height).toBe(659);
  expect(cssVars.get('--app-height')).toBe('659px');
});

test('syncStandaloneMobileViewport can reset page scroll when requested', () => {
  const cssVars = new Map<string, string>();
  const windowScrolls: Array<[number, number]> = [];
  const scrollingElement = { scrollTop: 91, scrollLeft: 17 };
  const documentElement = {
    scrollTop: 33,
    scrollLeft: 8,
    style: {
      setProperty: (name: string, value: string) => cssVars.set(name, value),
    },
  };
  const body = { scrollTop: 19, scrollLeft: 7 };

  syncStandaloneMobileViewport({
    navigator: {
      standalone: true,
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',
      maxTouchPoints: 5,
    },
    window: {
      matchMedia: () => ({ matches: true }),
      visualViewport: { height: 701.9 },
      innerHeight: 900,
      innerWidth: 600,
      screen: { height: 1024, width: 768 },
      scrollTo: (x: number, y: number) => windowScrolls.push([x, y]),
    },
    document: {
      documentElement,
      body,
      scrollingElement,
    },
  }, { resetScroll: true });

  expect(windowScrolls).toEqual([[0, 0]]);
  expect(scrollingElement.scrollTop).toBe(0);
  expect(body.scrollTop).toBe(0);
});
