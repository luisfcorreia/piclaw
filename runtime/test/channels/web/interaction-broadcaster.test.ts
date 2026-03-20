import { describe, expect, test } from "bun:test";
import { createInteractionBroadcaster } from "../../../src/channels/web/interaction-broadcaster.js";

describe("web interaction broadcaster", () => {
  test("broadcasts agent response and interaction updates with profile", () => {
    const events: Array<{ type: string; data: any }> = [];

    const broadcaster = createInteractionBroadcaster(
      {
        broadcastEvent: (eventType, data) => {
          events.push({ type: eventType, data });
        },
      },
      {
        agentName: "Pi",
        agentAvatar: "/avatar/agent",
        userName: "User",
        userAvatar: "/avatar/user",
        userAvatarBackground: "#111111",
      }
    );

    const interaction = {
      id: 42,
      timestamp: "2024-01-01T00:00:00.000Z",
      role: "assistant",
      content: "hello",
      data: {},
    } as unknown as import("../../../src/db.js").InteractionRow;

    broadcaster.broadcastAgentResponse(interaction);
    broadcaster.broadcastInteractionUpdated(interaction);

    expect(events.map((event) => event.type)).toEqual(["agent_response", "interaction_updated"]);
    expect(events[0].data.agent_name).toBe("Pi");
    expect(events[0].data.agent_avatar).toBe("/avatar/agent");
    expect(events[0].data.user_name).toBe("User");
    expect(events[0].data.user_avatar_background).toBe("#111111");
  });
});
