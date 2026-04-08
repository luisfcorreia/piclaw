import { expect, test } from "bun:test";
import "../helpers.js";
import { existsSync, readFileSync, rmSync } from "fs";
import { join } from "path";

import { WORKSPACE_DIR } from "../../src/core/config.js";
import { getDb, initDatabase } from "../../src/db.js";
import { runDreamMaintenance } from "../../src/dream.js";

test("Dream refreshes daily notes from all chats, not just the current chat context", async () => {
  rmSync(join(WORKSPACE_DIR, "notes"), { recursive: true, force: true });

  initDatabase();
  const conn = getDb();
  conn.exec("DELETE FROM message_media;");
  conn.exec("DELETE FROM messages;");
  conn.exec("DELETE FROM chat_branches;");
  conn.exec("DELETE FROM chats;");

  const day = new Date().toISOString().slice(0, 10);
  const userTs = `${day}T10:00:00.000Z`;
  const assistantTs = `${day}T10:05:00.000Z`;
  const dreamTs = `${day}T10:10:00.000Z`;

  conn.prepare(`
    INSERT INTO messages (id, chat_jid, sender, sender_name, content, timestamp, is_bot_message, is_terminal_agent_reply)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run("web-user-1", "web:default", "user", "User", "web hello", userTs, 0, 0);

  conn.prepare(`
    INSERT INTO messages (id, chat_jid, sender, sender_name, content, timestamp, is_bot_message, is_terminal_agent_reply)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run("wa-agent-1", "12345@s.whatsapp.net", "agent", "Agent", "wa reply", assistantTs, 1, 1);

  conn.prepare(`
    INSERT INTO messages (id, chat_jid, sender, sender_name, content, timestamp, is_bot_message, is_terminal_agent_reply)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run("dream-ignored-1", "dream:auto:web_default:1", "agent", "Dream", "ignore me", dreamTs, 1, 1);

  const result = await runDreamMaintenance({
    chatJid: "web:default",
    mode: "manual",
    days: 7,
  });

  const dailyNotePath = join(WORKSPACE_DIR, "notes", "daily", `${day}.md`);
  expect(existsSync(dailyNotePath)).toBe(true);

  const dailyNote = readFileSync(dailyNotePath, "utf8");
  expect(dailyNote).toContain("scope_mode: all-chats");
  expect(dailyNote).toContain("scope_anchor: *");
  expect(dailyNote).toContain("messages_total: 2");
  expect(dailyNote).toContain("messages_user: 1");
  expect(dailyNote).toContain("messages_assistant: 1");
  expect(result.skipped).toBe(false);
});
