import { describe, expect, test } from "bun:test";
import {
  createWebChannelEndpointContexts,
  type WebChannelEndpointFactoryOptions,
} from "../../../src/channels/web/channel-endpoint-context-factory.js";

const options: WebChannelEndpointFactoryOptions = {
  defaultChatJid: "web:default",
  defaultAgentId: "default",
  agentName: "Pi",
  agentAvatar: "/avatars/agent",
  userName: "You",
  userAvatar: "/avatars/user",
  userAvatarBackground: "#000",
  assistantAvatarRaw: "assistant.png",
  userAvatarRaw: "user.png",
};

describe("web channel endpoint context factory", () => {
  test("builds auth and ui contexts that delegate through channel state", async () => {
    const panelCalls: Array<{ turnId: string; panel: "thought" | "draft"; expanded: boolean }> = [];
    const channel = {
      workspaceVisible: false,
      workspaceShowHidden: false,
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      serveStatic: async (relPath: string) => new Response(`static:${relPath}`),
      setPanelExpanded: (turnId: string, panel: "thought" | "draft", expanded: boolean) => {
        panelCalls.push({ turnId, panel, expanded });
      },
      uiBridge: {
        handleUiResponse: () => ({ status: "ok" as const }),
      },
      authGateway: {
        createTotpContext: () => ({ kind: "totp" }),
        createWebauthnContext: () => ({ kind: "webauthn" }),
        createWebauthnEnrolPageContext: () => ({ kind: "enrol" }),
      },
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      options
    );

    const auth = contexts.auth();
    expect(auth.createTotpContext()).toEqual({ kind: "totp" });
    expect(auth.createWebauthnContext()).toEqual({ kind: "webauthn" });
    expect(auth.createWebauthnEnrolPageContext()).toEqual({ kind: "enrol" });
    expect(await (await auth.serveStatic("login.html")).text()).toBe("static:login.html");

    const ui = contexts.ui();
    expect(ui.getWorkspaceVisible()).toBe(false);
    ui.setWorkspaceVisible(true);
    expect(channel.workspaceVisible).toBe(true);
    ui.setWorkspaceShowHidden(true);
    expect(channel.workspaceShowHidden).toBe(true);
    ui.setPanelExpanded("turn-1", "thought", true);
    expect(panelCalls).toEqual([{ turnId: "turn-1", panel: "thought", expanded: true }]);
    expect(ui.handleUiResponse("req-1", { ok: true }).status).toBe("ok");
  });

  test("builds content and agent-status contexts with configured defaults", async () => {
    const channel = {
      json: (payload: unknown, status = 200) => new Response(JSON.stringify(payload), { status }),
      getBuffer: () => ({ text: "draft", totalLines: 1 }),
      getAgentStatus: () => ({ type: "thinking" }),
      agentPool: {
        getContextUsageForChat: async () => ({ tokens: 10, contextWindow: 100, percent: 10 }),
        getAvailableModels: async () => ({ current: "openai/gpt-4o", models: ["openai/gpt-4o"] }),
      },
    };

    const contexts = createWebChannelEndpointContexts(
      channel as unknown as Parameters<typeof createWebChannelEndpointContexts>[0],
      options
    );

    const content = contexts.content();
    expect(content.defaultChatJid).toBe("web:default");
    expect(content.getBuffer("turn-1", "draft")?.text).toBe("draft");

    const status = contexts.agentStatus();
    expect(status.defaultChatJid).toBe("web:default");
    expect(status.getAgentStatus("web:default")?.type).toBe("thinking");
    expect((await status.getContextUsageForChat("web:default"))?.tokens).toBe(10);
  });
});
