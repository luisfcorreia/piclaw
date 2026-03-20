import { expect, test } from "bun:test";
import "../../helpers.js";
import { getSearchResponse } from "../../../src/channels/web/timeline-service.js";
import * as db from "../../../src/db.js";

function makeMessage(chatJid: string, content: string, timestamp: string, isBot = false) {
  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    chat_jid: chatJid,
    sender: isBot ? "bot" : "user",
    sender_name: isBot ? "Bot" : "User",
    content,
    timestamp,
    is_from_me: false,
    is_bot_message: isBot,
  };
}

test("root-scoped search derives the root chat from the registry", () => {
  db.initDatabase();

  const rootChatJid = `web:timeline-search-root-${Date.now()}`;
  const branchChatJid = `${rootChatJid}:branch:1`;
  db.storeChatMetadata(rootChatJid, new Date().toISOString(), "Root");
  db.storeChatMetadata(branchChatJid, new Date().toISOString(), "Branch");

  const rootBranch = db.ensureChatBranch({
    chat_jid: rootChatJid,
    root_chat_jid: rootChatJid,
    agent_name: `root-${Date.now()}`,
  });
  db.ensureChatBranch({
    chat_jid: branchChatJid,
    root_chat_jid: rootChatJid,
    parent_branch_id: rootBranch.branch_id,
    agent_name: `branch-${Date.now()}`,
  });

  db.storeMessage(makeMessage(rootChatJid, "needle root", "2024-03-01T00:00:00.000Z"));
  db.storeMessage(makeMessage(branchChatJid, "needle branch", "2024-03-01T00:01:00.000Z"));

  const result = getSearchResponse(branchChatJid, "needle", 10, 0, "root", "web:wrong-root");
  expect(result.status).toBe(200);

  const body = result.body as {
    root_chat_jid: string | null;
    results: Array<{ data: { content: string } }>;
  };
  expect(body.root_chat_jid).toBe(rootChatJid);
  expect(body.results.map((row) => row.data.content)).toEqual(["needle branch", "needle root"]);
});
