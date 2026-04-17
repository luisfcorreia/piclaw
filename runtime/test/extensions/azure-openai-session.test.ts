import { describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import azureOpenAiSessionExtension from "../../extensions/integrations/azure-openai-session/index.ts";

type CommandDef = { name: string; handler: (...args: any[]) => Promise<any> | any };

describe("azure-openai session shim", () => {
  test("registers the lightweight context hook plus image/flux commands", () => {
    const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
    const commands = new Map<string, CommandDef>();

    const api: ExtensionAPI = {
      on(event: string, handler: (...args: any[]) => any) { handlers.push({ event, handler }); },
      registerTool() {},
      registerCommand(name: string, command: any) { commands.set(name, { name, ...command }); },
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as any,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    azureOpenAiSessionExtension(api);

    expect(handlers.some((entry) => entry.event === "context")).toBe(true);
    expect(commands.has("image")).toBe(true);
    expect(commands.has("flux")).toBe(true);
    expect(handlers.some((entry) => entry.event === "session_start")).toBe(false);
    expect(handlers.some((entry) => entry.event === "session_shutdown")).toBe(false);
  });
});
