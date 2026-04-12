import { expect, test } from "bun:test";

import { SseHub } from "../../../src/channels/web/sse/sse-hub.js";

test("SseHub.closeAll clears clients even when a controller throws on close", () => {
  const hub = new SseHub();
  const heartbeatA = setInterval(() => {}, 1000);
  const heartbeatB = setInterval(() => {}, 1000);

  hub.clients.add({ controller: { close: () => { throw new Error("already closed"); } }, heartbeat: heartbeatA } as any);
  hub.clients.add({ controller: { close: () => undefined }, heartbeat: heartbeatB } as any);

  expect(() => hub.closeAll()).not.toThrow();
  expect(hub.clients.size).toBe(0);
});
