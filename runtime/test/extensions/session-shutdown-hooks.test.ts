import { describe, expect, test } from "bun:test";
import path from "node:path";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import {
  importFresh,
  waitFor,
  withTempWorkspaceEnv,
} from "../helpers.js";

type FakeHandler = { event: string; handler: (...args: any[]) => any };

function getHandler(handlers: FakeHandler[], event: string): FakeHandler {
  const found = handlers.find((entry) => entry.event === event);
  expect(found).toBeDefined();
  return found!;
}

async function expectAzureShutdownClearsTimer(modulePath: string): Promise<void> {
  await withTempWorkspaceEnv("piclaw-azure-shutdown-", {
    AOAI_ENABLE_MODEL_CAPS: "0",
    AOAI_API_KEY: undefined,
    AOAI_TOKEN_CACHE_DIR: "/tmp/piclaw-test-aoai-cache",
    AOAI_TOKEN_CACHE_FILE: "/tmp/piclaw-test-aoai-cache/token.json",
  }, async () => {
    const previousFetch = globalThis.fetch;
    const previousSetTimeout = globalThis.setTimeout;
    const previousClearTimeout = globalThis.clearTimeout;
    const scheduled: any[] = [];
    const cleared: any[] = [];

    globalThis.fetch = (async () => new Response(JSON.stringify({
      access_token: "token-for-tests",
      expires_on: String(Math.floor(Date.now() / 1000) + 3600),
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })) as typeof fetch;

    globalThis.setTimeout = (((_fn: (...args: any[]) => unknown, ms?: number) => {
      const handle = { id: scheduled.length + 1, ms: Number(ms) || 0 };
      scheduled.push(handle);
      return handle as unknown as ReturnType<typeof setTimeout>;
    }) as unknown) as typeof setTimeout;

    globalThis.clearTimeout = (((handle: ReturnType<typeof setTimeout>) => {
      cleared.push(handle);
    }) as unknown) as typeof clearTimeout;

    try {
      const mod = await importFresh<any>(modulePath);
      const fake = createFakeExtensionApi({ allTools: [] });
      mod.default(fake.api);

      const start = getHandler(fake.handlers as FakeHandler[], "session_start");
      const shutdown = getHandler(fake.handlers as FakeHandler[], "session_shutdown");

      await start.handler();
      await waitFor(() => scheduled.some((handle) => Number(handle?.ms) >= 60000), 1000, 10);
      const lastHandle = [...scheduled].reverse().find((handle) => Number(handle?.ms) >= 60000);
      expect(lastHandle).toBeDefined();

      await shutdown.handler();
      expect(cleared).toContain(lastHandle);
    } finally {
      globalThis.fetch = previousFetch;
      globalThis.setTimeout = previousSetTimeout;
      globalThis.clearTimeout = previousClearTimeout;
    }
  });
}

describe("session_shutdown upgrade regressions", () => {
  test("azure-openai integration clears its refresh timer on session shutdown", async () => {
    await expectAzureShutdownClearsTimer("../extensions/integrations/azure-openai.ts");
  });

  test("azure-openai harness clears its refresh timer on session shutdown", async () => {
    await expectAzureShutdownClearsTimer("../extensions/experimental/azure-openai.harness.ts");
  });

  test("chat SSH core unregisters the live SSH session on session shutdown", async () => {
    const chatJid = `web:test-${Date.now()}`;
    const mod = await import("../../src/extensions/ssh-core.ts");
    await mod.unregisterLiveChatSshSession(chatJid);

    const fake = createFakeExtensionApi({ allTools: [] });
    mod.createChatSshCoreExtension(chatJid, null)(fake.api);

    const start = getHandler(fake.handlers as FakeHandler[], "session_start");
    const shutdown = getHandler(fake.handlers as FakeHandler[], "session_shutdown");

    await start.handler({}, { hasUI: false });
    expect(mod.hasLiveChatSshSession(chatJid)).toBe(true);

    await shutdown.handler();
    expect(mod.hasLiveChatSshSession(chatJid)).toBe(false);
  });

});
