import { expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  getAddonStatusPanelPayload,
  getInstalledAddonRuntimeEntryPaths,
  resetAddonRuntimeContributionsForTests,
  runAddonAdaptiveCardIntent,
  runAddonStatusPanelAction,
} from "../../src/addons/runtime-contributions.js";
import { withTempWorkspaceEnv } from "../helpers.js";

test("installed addon runtime entries register status panel and card-intent handlers", async () => {
  resetAddonRuntimeContributionsForTests();
  await withTempWorkspaceEnv("piclaw-addon-runtime-", {}, async (workspace) => {
    const addonDir = join(workspace.workspace, ".pi", "extensions", "node_modules", "piclaw-addon-example");
    mkdirSync(addonDir, { recursive: true });
    writeFileSync(join(addonDir, "package.json"), JSON.stringify({
      name: "piclaw-addon-example",
      version: "0.1.0",
      type: "module",
      pi: {
        extensions: ["index.ts"],
        runtime: { entries: ["runtime.ts"] },
      },
    }, null, 2));
    writeFileSync(join(addonDir, "index.ts"), "export default function noop() {}\n");
    writeFileSync(join(addonDir, "runtime.ts"), `
const api = globalThis.__piclaw_runtime;
api?.registerStatusPanelProvider?.({
  key: "example",
  getPayload(chatJid) {
    return { key: "example", chat_jid: chatJid, content: [{ type: "status", value: 1 }] };
  },
  runAction(action, payload) {
    return { action, payload };
  },
});
api?.registerAdaptiveCardIntentHandler?.("example-intent", async (context) => {
  await context.sendMessage("handled:" + String(context.rawSubmissionData.value || ""), { threadId: context.threadId });
});
export {};
`);

    expect(getInstalledAddonRuntimeEntryPaths(workspace.workspace)).toEqual([
      join(addonDir, "runtime.ts"),
    ]);

    expect(await getAddonStatusPanelPayload("example", "web:test")).toEqual({
      key: "example",
      chat_jid: "web:test",
      content: [{ type: "status", value: 1 }],
    });

    expect(await runAddonStatusPanelAction("example", "stop", { chat_jid: "web:test" })).toEqual({
      action: "stop",
      payload: { chat_jid: "web:test" },
    });

    const messages: string[] = [];
    const handled = await runAddonAdaptiveCardIntent("example-intent", {
      chatJid: "web:test",
      threadId: "thread-1",
      rawSubmissionData: { value: "ok" },
      sendMessage: async (content) => {
        messages.push(content);
      },
    });

    expect(handled).toBe(true);
    expect(messages).toEqual(["handled:ok"]);
  });
  resetAddonRuntimeContributionsForTests();
});
