/**
 * test/agent-pool/agent-pool-slash-command.test.ts – Tests for slash command execution.
 *
 * Verifies executeSlashCommand() handles /skill, /prompt-template, /help,
 * and unknown commands correctly via a StubSession.
 */

import { expect, test } from "bun:test";
import "../helpers.js";

import { executeSlashCommand } from "../../src/agent-pool/slash-command.js";

class SlashSession {
  listeners: Array<(event: any) => void> = [];
  promptCalls: string[] = [];
  commandCalls: Array<{ name: string; args: string }> = [];
  resourceLoader = {
    getSkills: () => ({ skills: [{ name: "demo", description: "Demo skill" }] }),
  };
  promptTemplates = [{ name: "template", description: "Template" }];
  extensionRunner = {
    getCommand: (name: string) => {
      if (name !== "ext") return null;
      return {
        name: "ext",
        handler: async (args: string) => {
          this.commandCalls.push({ name: "ext", args });
          this.emit({
            type: "message_end",
            message: { role: "assistant", content: [{ type: "text", text: args ? `Ext ${args}` : "Ext ok" }] },
          });
        },
      };
    },
    createCommandContext: () => ({ ok: true }),
    emitError: () => {},
  };
  aborted = false;
  isStreaming = false;
  isCompacting = false;
  isRetrying = false;

  subscribe(fn: (event: any) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((listener) => listener !== fn);
    };
  }

  emit(event: any) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }

  async prompt(rawText: string) {
    this.promptCalls.push(rawText);
    this.emit({
      type: "message_update",
      assistantMessageEvent: { type: "text_delta", delta: "Hello " },
    });
    this.emit({
      type: "message_end",
      message: { role: "assistant", content: [{ type: "text", text: "Hello world" }] },
    });
  }

  async abort() {
    this.aborted = true;
  }
}

test("executeSlashCommand runs known extension command outside prompt turn handling", async () => {
  const session = new SlashSession();
  const result = await executeSlashCommand(session as any, "web:default", "/ext hello");
  expect(result.status).toBe("success");
  expect(result.message).toContain("Ext hello");
  expect(session.promptCalls).toHaveLength(0);
  expect(session.commandCalls).toEqual([{ name: "ext", args: "hello" }]);
});

test("executeSlashCommand rejects unknown command", async () => {
  const session = new SlashSession();
  const result = await executeSlashCommand(session as any, "web:default", "/unknown");
  expect(result.status).toBe("error");
  expect(result.message).toContain("Unknown command");
});

test("executeSlashCommand validates skill commands", async () => {
  const session = new SlashSession();
  const result = await executeSlashCommand(session as any, "web:default", "/skill:demo");
  expect(result.status).toBe("success");
  expect(result.message).toContain("Hello world");
  expect(session.promptCalls).toEqual(["/skill:demo"]);

  const bad = await executeSlashCommand(session as any, "web:default", "/skill:missing");
  expect(bad.status).toBe("error");
  expect(bad.message).toContain("Unknown skill");
});

test("executeSlashCommand waits for session idle before unsubscribing from late assistant completion", async () => {
  const session = new SlashSession();
  let lateDelivered = false;

  session.prompt = async (rawText: string) => {
    session.promptCalls.push(rawText);
    session.isStreaming = true;
    session.emit({
      type: "message_update",
      assistantMessageEvent: { type: "text_delta", delta: "Hello " },
    });

    setTimeout(() => {
      session.emit({
        type: "message_end",
        message: { role: "assistant", content: [{ type: "text", text: "Hello late world" }] },
      });
      session.isStreaming = false;
      lateDelivered = true;
    }, 80);
  };

  const result = await executeSlashCommand(session as any, "web:default", "/skill:demo");
  expect(lateDelivered).toBe(true);
  expect(result.status).toBe("success");
  expect(result.message).toBe("Hello late world");
  expect(session.promptCalls).toEqual(["/skill:demo"]);
  expect(session.listeners).toHaveLength(0);
});
