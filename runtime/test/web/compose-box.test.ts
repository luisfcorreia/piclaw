import { expect, test } from 'bun:test';

import {
  SLASH_COMMANDS,
  formatModelPickerContextWindow,
  formatModelPickerDisplayLabel,
  getComposeHistoryStorageKey,
  getModelPickerOptionSearchLabel,
  normalizeModelPickerOptions,
  resolveComposePrefillRequest,
} from '../../web/src/components/compose-box.ts';
import { CONTROL_COMMAND_DEFINITIONS } from '../../src/agent-control/command-registry.ts';

test('getComposeHistoryStorageKey keeps the legacy default key for the default chat', () => {
  expect(getComposeHistoryStorageKey()).toBe('piclaw_compose_history');
  expect(getComposeHistoryStorageKey('web:default')).toBe('piclaw_compose_history');
  expect(getComposeHistoryStorageKey('')).toBe('piclaw_compose_history');
});

test('getComposeHistoryStorageKey namespaces compose history by chat/agent', () => {
  expect(getComposeHistoryStorageKey('web:agent-alpha')).toBe('piclaw_compose_history:web%3Aagent-alpha');
  expect(getComposeHistoryStorageKey('whatsapp:+12345')).toBe('piclaw_compose_history:whatsapp%3A%2B12345');
});

test('normalizeModelPickerOptions prefers structured model metadata and sorts by provider/id label', () => {
  expect(normalizeModelPickerOptions({
    model_options: [
      { provider: 'anthropic', id: 'claude-sonnet-4', label: 'anthropic/claude-sonnet-4', name: 'Claude Sonnet 4', context_window: 200000, reasoning: true },
      { provider: 'openai', id: 'gpt-4.1', label: 'openai/gpt-4.1', name: 'GPT-4.1', context_window: 128000, reasoning: false },
    ],
  })).toEqual([
    {
      label: 'anthropic/claude-sonnet-4',
      provider: 'anthropic',
      id: 'claude-sonnet-4',
      name: 'Claude Sonnet 4',
      contextWindow: 200000,
      reasoning: true,
    },
    {
      label: 'openai/gpt-4.1',
      provider: 'openai',
      id: 'gpt-4.1',
      name: 'GPT-4.1',
      contextWindow: 128000,
      reasoning: false,
    },
  ]);
});

test('normalizeModelPickerOptions falls back to legacy string labels', () => {
  expect(normalizeModelPickerOptions({
    models: ['openai/gpt-4.1', 'anthropic/claude-sonnet-4'],
  })).toEqual([
    {
      label: 'anthropic/claude-sonnet-4',
      provider: 'anthropic',
      id: 'claude-sonnet-4',
      name: null,
      contextWindow: null,
      reasoning: false,
    },
    {
      label: 'openai/gpt-4.1',
      provider: 'openai',
      id: 'gpt-4.1',
      name: null,
      contextWindow: null,
      reasoning: false,
    },
  ]);
});

test('slash autocomplete includes all canonical control commands', () => {
  const composeNames = new Set(SLASH_COMMANDS.map((item) => item.name));
  const missing = CONTROL_COMMAND_DEFINITIONS
    .map((item) => item.name)
    .filter((name) => !composeNames.has(name));

  expect(missing).toEqual([]);
});

test('slash autocomplete exposes the local /meters HUD command with a description', () => {
  const meters = SLASH_COMMANDS.find((item) => item.name === '/meters');
  expect(meters).toBeTruthy();
  expect(meters?.description).toContain('CPU/RAM HUD');
});

test('resolveComposePrefillRequest applies new non-search prefill tokens exactly once', () => {
  expect(resolveComposePrefillRequest({ token: 'tok-1', text: '/login' }, '', false)).toEqual({
    shouldApply: true,
    nextToken: 'tok-1',
    text: '/login',
  });

  expect(resolveComposePrefillRequest({ token: 'tok-1', text: '/login' }, 'tok-1', false)).toEqual({
    shouldApply: false,
    nextToken: 'tok-1',
    text: '',
  });

  expect(resolveComposePrefillRequest({ token: 'tok-2', text: '/login' }, '', true)).toEqual({
    shouldApply: false,
    nextToken: '',
    text: '',
  });
});

test('model picker helpers expose searchable names and formatted context windows', () => {
  const option = {
    label: 'anthropic/claude-sonnet-4',
    provider: 'anthropic',
    id: 'claude-sonnet-4',
    name: 'Claude Sonnet 4',
    contextWindow: 200000,
  };

  expect(formatModelPickerContextWindow(200000)).toBe('200K ctx');
  expect(formatModelPickerDisplayLabel('anthropic/claude-sonnet-4', 200000)).toBe('anthropic/claude-sonnet-4 • 200K ctx');
  expect(formatModelPickerDisplayLabel('anthropic/claude-sonnet-4', null)).toBe('anthropic/claude-sonnet-4');
  expect(getModelPickerOptionSearchLabel(option)).toContain('anthropic/claude-sonnet-4');
  expect(getModelPickerOptionSearchLabel(option)).toContain('Claude Sonnet 4');
  expect(getModelPickerOptionSearchLabel(option)).toContain('200K ctx');
});
