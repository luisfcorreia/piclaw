import { afterEach, expect, test } from "bun:test";
import { createTempWorkspace, setEnv } from "../../helpers.js";

let restoreEnv: (() => void) | null = null;
let cleanupWorkspace: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
  cleanupWorkspace?.();
  cleanupWorkspace = null;
});

test("web channel isolates branch post writes from the default chat timeline", async () => {
  const ws = createTempWorkspace("piclaw-web-isolation-");
  cleanupWorkspace = ws.cleanup;
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../../../src/db.js");
  db.initDatabase();
  db.getDb().exec("DELETE FROM message_media; DELETE FROM messages; DELETE FROM chats; DELETE FROM chat_cursors; DELETE FROM chat_branches;");
  db.storeChatMetadata("web:default", new Date().toISOString(), "Default");
  db.storeChatMetadata("web:branch", new Date().toISOString(), "Branch");

  const webMod = await import("../../../src/channels/web.js");
  const web = new (webMod.WebChannel as any)({
    queue: { enqueue: () => {} },
    agentPool: { runAgent: async () => ({ status: "success", result: "ok" }), getContextUsageForChat: async () => null },
  });

  const res = await (web as any).handleRequest(new Request("http://test/post?chat_jid=web%3Abranch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "branch only" }),
  }));

  expect(res.status).toBe(201);
  const defaultTimeline = db.getTimeline("web:default", 20);
  const branchTimeline = db.getTimeline("web:branch", 20);
  expect(defaultTimeline).toHaveLength(0);
  expect(branchTimeline).toHaveLength(1);
  expect(branchTimeline[0]?.data?.content).toBe("branch only");
});

test("web channel isolates branch delete operations from the default chat", async () => {
  const ws = createTempWorkspace("piclaw-web-isolation-");
  cleanupWorkspace = ws.cleanup;
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../../../src/db.js");
  db.initDatabase();
  db.getDb().exec("DELETE FROM message_media; DELETE FROM messages; DELETE FROM chats; DELETE FROM chat_cursors; DELETE FROM chat_branches;");
  db.storeChatMetadata("web:default", new Date().toISOString(), "Default");
  db.storeChatMetadata("web:branch", new Date().toISOString(), "Branch");

  const defaultRowId = db.storeMessage({
    id: `msg-${Math.random()}`,
    chat_jid: "web:default",
    sender: "user",
    sender_name: "User",
    content: "default message",
    timestamp: new Date().toISOString(),
    is_from_me: false,
    is_bot_message: false,
  });
  const branchRowId = db.storeMessage({
    id: `msg-${Math.random()}`,
    chat_jid: "web:branch",
    sender: "user",
    sender_name: "User",
    content: "branch message",
    timestamp: new Date().toISOString(),
    is_from_me: false,
    is_bot_message: false,
  });

  const webMod = await import("../../../src/channels/web.js");
  const web = new (webMod.WebChannel as any)({
    queue: { enqueue: () => {} },
    agentPool: { runAgent: async () => ({ status: "success", result: "ok" }), getContextUsageForChat: async () => null },
  });

  const res = await (web as any).handleRequest(new Request(`http://test/post/${branchRowId}?chat_jid=web%3Abranch`, {
    method: "DELETE",
  }));

  expect(res.status).toBe(200);
  expect(db.getMessageByRowId("web:branch", branchRowId)).toBeUndefined();
  expect(db.getMessageByRowId("web:default", defaultRowId)?.data?.content).toBe("default message");
});
