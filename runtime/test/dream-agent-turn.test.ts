import { afterEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { importFresh } from "./helpers.js";

afterEach(() => {
  // no-op: test uses whichever workspace path the current config module has cached
});

test("runDreamAgentTurn reaps a stale dream lock and materializes memory files after the model pass", { timeout: 15000 }, async () => {
  const config = await import("../src/core/config.js");
  rmSync(join(config.WORKSPACE_DIR, "notes"), { recursive: true, force: true });
  rmSync(join(config.DATA_DIR, "dream-backups"), { recursive: true, force: true });
  rmSync(join(config.DATA_DIR, "workspace-search"), { recursive: true, force: true });
  mkdirSync(join(config.DATA_DIR, "dream-backups"), { recursive: true });
  for (let i = 0; i < 12; i += 1) {
    writeFileSync(join(config.DATA_DIR, "dream-backups", `2026-01-01T00-00-${String(i).padStart(2, "0")}-000Z-auto-web_default.zip`), "old", "utf8");
  }
  mkdirSync(join(config.WORKSPACE_DIR, "notes", "memory"), { recursive: true });
  writeFileSync(join(config.WORKSPACE_DIR, "notes", "memory", ".dream.lock"), "999999\n", "utf8");

  const fixedNow = Date.parse("2026-01-02T03:04:05.000Z");
  const dreamChatJid = `dream:auto:web_default:${fixedNow}`;
  const dreamSessionDir = join(config.DATA_DIR, "sessions", `dream_auto_web_default_${fixedNow}`);

  const realNow = Date.now;
  Date.now = () => fixedNow;
  try {
    const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
    db.initDatabase();
    const rawDb = db.getDb();
    rawDb.prepare("INSERT OR REPLACE INTO chats (jid, name, last_message_time) VALUES (?, ?, ?)").run(dreamChatJid, "dream", "2026-01-01T00:00:00.000Z");
    rawDb.prepare("INSERT OR REPLACE INTO chat_cursors (chat_jid, cursor_ts) VALUES (?, ?)").run(dreamChatJid, "2026-01-01T00:00:00.000Z");
    rawDb.prepare("INSERT OR REPLACE INTO chat_branches (branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)").run(
      "dream-branch-1",
      dreamChatJid,
      dreamChatJid,
      null,
      "dream-test-agent",
      "2026-01-01T00:00:00.000Z",
      "2026-01-01T00:00:00.000Z",
      null,
    );
    rawDb.prepare("INSERT INTO token_usage (chat_jid, run_at, input_tokens, output_tokens, total_tokens, turns) VALUES (?, ?, ?, ?, ?, ?)").run(
      dreamChatJid,
      "2026-01-01T00:00:00.000Z",
      10,
      20,
      30,
      1,
    );
    mkdirSync(dreamSessionDir, { recursive: true });
    writeFileSync(join(dreamSessionDir, "session.json"), "{}", "utf8");

    const dream = await importFresh<typeof import("../src/dream.js")>("../src/dream.js");
    const result = await dream.runDreamAgentTurn({
      chatJid: "web:default",
      days: 2,
      mode: "auto",
      agentPool: {
        runAgent: async () => ({ status: "success", result: "AutoDream complete." }),
        disposeChatSession: async () => {},
      } as any,
    });

    expect(result.skipped).toBe(false);
    expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "MEMORY.md"))).toBe(true);
    expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "current-state.md"))).toBe(true);
    expect(existsSync(join(config.WORKSPACE_DIR, "notes", "memory", "recent-context.md"))).toBe(true);
    expect(result.result).toContain("Memory refreshed after Dream: yes");

    expect(rawDb.prepare("SELECT COUNT(*) AS count FROM chats WHERE jid = ?").get(dreamChatJid)).toEqual({ count: 0 });
    expect(rawDb.prepare("SELECT COUNT(*) AS count FROM chat_cursors WHERE chat_jid = ?").get(dreamChatJid)).toEqual({ count: 0 });
    expect(rawDb.prepare("SELECT COUNT(*) AS count FROM chat_branches WHERE chat_jid = ?").get(dreamChatJid)).toEqual({ count: 0 });
    expect(rawDb.prepare("SELECT COUNT(*) AS count FROM token_usage WHERE chat_jid = ?").get(dreamChatJid)).toEqual({ count: 0 });
    expect(existsSync(dreamSessionDir)).toBe(false);

    const backups = readdirSync(join(config.DATA_DIR, "dream-backups")).sort();
    expect(backups).toHaveLength(10);
    const latestBackup = join(config.DATA_DIR, "dream-backups", backups.at(-1)!);
    expect(latestBackup.endsWith(".zip")).toBe(true);
    const list = Bun.spawnSync(["unzip", "-Z1", latestBackup], { stdout: "pipe", stderr: "pipe" });
    expect(list.exitCode, list.stderr.toString()).toBe(0);
    const archived = list.stdout.toString("utf8");
    expect(archived).toContain("manifest.json");
    expect(archived).not.toContain("notes/memory/.dream.lock");
  } finally {
    Date.now = realNow;
  }
});
