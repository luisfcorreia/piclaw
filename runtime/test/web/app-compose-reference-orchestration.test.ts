import { expect, test } from 'bun:test';

import { resolveComposeSubmitErrorDetail } from '../../web/src/ui/app-compose-reference-orchestration.js';

test('resolveComposeSubmitErrorDetail trims valid string messages', () => {
  expect(resolveComposeSubmitErrorDetail('  failed to send  ')).toBe('failed to send');
});

test('resolveComposeSubmitErrorDetail falls back for blank/non-string payloads', () => {
  expect(resolveComposeSubmitErrorDetail('   ')).toBe('Could not send your message.');
  expect(resolveComposeSubmitErrorDetail(null)).toBe('Could not send your message.');
  expect(resolveComposeSubmitErrorDetail({ message: 'nope' })).toBe('Could not send your message.');
});
