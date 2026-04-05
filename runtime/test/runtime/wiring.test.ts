import { describe, expect, test } from "bun:test";
import { createRuntimeSenders, getDreamQueueLane } from "../../src/runtime/wiring.js";

describe("runtime wiring", () => {
  test("getDreamQueueLane isolates Dream work from the interactive chat lane", () => {
    expect(getDreamQueueLane("web:default")).toBe("dream:web:default");
    expect(getDreamQueueLane("web:default")).not.toBe("chat:web:default");
  });

  test("createRuntimeSenders routes web chat messages to web channel", async () => {
    const webCalls: Array<{ jid: string; text: string; source?: string }> = [];
    const whatsappCalls: Array<{ jid: string; text: string }> = [];

    const senders = createRuntimeSenders(
      {
        sendMessage: async (jid, text, options) => {
          webCalls.push({ jid, text, source: options?.source });
        },
        resumeChat: () => {},
        resumePendingChats: () => {},
      },
      {
        sendMessage: async (jid, text) => {
          whatsappCalls.push({ jid, text });
        },
      },
      null
    );

    await senders.sendMessage("web:default", "hello", { source: "scheduled" });

    expect(webCalls).toHaveLength(1);
    expect(webCalls[0]).toEqual({ jid: "web:default", text: "hello", source: "scheduled" });
    expect(whatsappCalls).toHaveLength(0);
  });

  test("createRuntimeSenders routes non-web chat messages to whatsapp channel", async () => {
    const webCalls: Array<{ jid: string; text: string }> = [];
    const whatsappCalls: Array<{ jid: string; text: string }> = [];

    const senders = createRuntimeSenders(
      {
        sendMessage: async (jid, text) => {
          webCalls.push({ jid, text });
        },
        resumeChat: () => {},
        resumePendingChats: () => {},
      },
      {
        sendMessage: async (jid, text) => {
          whatsappCalls.push({ jid, text });
        },
      },
      null
    );

    await senders.sendMessage("12345@s.whatsapp.net", "hi");

    expect(webCalls).toHaveLength(0);
    expect(whatsappCalls).toEqual([{ jid: "12345@s.whatsapp.net", text: "hi" }]);
  });

  test("createRuntimeSenders exposes optional sendNudge when pushover exists", async () => {
    const nudges: string[] = [];

    const senders = createRuntimeSenders(
      {
        sendMessage: async () => {},
        resumeChat: () => {},
        resumePendingChats: () => {},
      },
      {
        sendMessage: async () => {},
      },
      {
        sendMessage: async (_jid, text) => {
          nudges.push(text);
        },
      }
    );

    await senders.sendNudge?.("nudge");
    expect(nudges).toEqual(["nudge"]);
  });
});
