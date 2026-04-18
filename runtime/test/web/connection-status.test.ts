import { expect, test } from 'bun:test';

import {
  RECONNECTING_HINT_DELAY_MS,
  resolveConnectionStatusPresentation,
} from '../../web/src/ui/connection-status.ts';

test('resolveConnectionStatusPresentation hides the pill when connected', () => {
  expect(resolveConnectionStatusPresentation('connected')).toEqual({
    show: false,
    statusClass: 'connected',
    label: 'Connected',
    title: 'Connection: Connected',
  });
});

test('resolveConnectionStatusPresentation keeps brief disconnects in connecting state', () => {
  expect(resolveConnectionStatusPresentation('disconnected', {
    disconnectedAtMs: 1_000,
    nowMs: 1_000 + RECONNECTING_HINT_DELAY_MS - 1,
  })).toEqual({
    show: true,
    statusClass: 'connecting',
    label: 'Connecting',
    title: 'Connecting',
  });
});

test('resolveConnectionStatusPresentation switches to reconnecting after the small timeout', () => {
  expect(resolveConnectionStatusPresentation('disconnected', {
    disconnectedAtMs: 1_000,
    nowMs: 1_000 + RECONNECTING_HINT_DELAY_MS,
  })).toEqual({
    show: true,
    statusClass: 'disconnected',
    label: 'Reconnecting',
    title: 'Reconnecting',
  });
});

test('resolveConnectionStatusPresentation formats non-disconnected statuses directly', () => {
  expect(resolveConnectionStatusPresentation('connecting')).toEqual({
    show: true,
    statusClass: 'connecting',
    label: 'Connecting',
    title: 'Connection: Connecting',
  });
});
