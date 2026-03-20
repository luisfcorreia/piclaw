import { expect, test } from 'bun:test';

import { createReply, getAgents } from '../../web/src/api.ts';

test('web API client uses preferred roster and reply paths', async () => {
  const originalFetch = globalThis.fetch;
  const calls: Array<{ url: string; method: string; body: string | null }> = [];

  globalThis.fetch = (async (input, init) => {
    calls.push({
      url: String(input),
      method: String(init?.method || 'GET'),
      body: init?.body ? String(init.body) : null,
    });
    return new Response(JSON.stringify({ status: 'ok' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }) as typeof fetch;

  try {
    await getAgents();
    await createReply(42, 'hello', [7], 'web:branch');
  } finally {
    globalThis.fetch = originalFetch;
  }

  expect(calls[0]).toEqual({
    url: '/agent/roster',
    method: 'GET',
    body: null,
  });
  expect(calls[1]).toEqual({
    url: '/post/reply?chat_jid=web%3Abranch',
    method: 'POST',
    body: JSON.stringify({ thread_id: 42, content: 'hello', media_ids: [7] }),
  });
});
