import { describe, expect, test } from "bun:test";

import { handleAgentRoutes } from "../../../src/channels/web/http/dispatch-agent.js";

describe("web http agent dispatch push presence", () => {
  test("dispatches the push presence route", async () => {
    const req = new Request("https://example.com/agent/push/presence", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        device_id: "device-1",
        client_id: "client-1",
        chat_jid: "web:default",
      }),
    });

    expect((await handleAgentRoutes({} as any, req, "/agent/push/presence", new URL(req.url)))?.status).toBe(200);
  });
});
