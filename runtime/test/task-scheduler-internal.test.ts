import { afterEach, expect, test } from "bun:test";
import { mkdirSync, writeFileSync, existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";

import { createTempWorkspace, importFresh, setEnv } from "./helpers.js";

const sentMessages: Array<{ jid: string; text: string }> = [];
let restoreEnv: (() => void) | null = null;
let db: typeof import("../src/db.js") | null = null;
let scheduler: typeof import("../src/task-scheduler.js") | null = null;
let dream: typeof import("../src/dream.js") | null = null;
let workspaceSearch: typeof import("../src/workspace-search.js") | null = null;

function writeDailyNote(workspace: string, date: string, summary: string) {
  const dir = join(workspace, "notes/daily");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${date}.md`), `---\ndate: ${date}\nsummarised_until: ${date}T23:59:59.000Z\nmessages_total: 4\nmessages_user: 2\nmessages_assistant: 2\nsession_trees: 1\nsession_chats: 1\nfirst_message: ${date}T12:00:00.000Z\nlast_message: ${date}T12:15:00.000Z\nscope_mode: all-web-session-trees\nscope_anchor: web:default\n---\n# ${date}\n\n## Summary\n\n${summary}\n`, "utf8");
}

afterEach(() => {
  sentMessages.length = 0;
  restoreEnv?.();
  restoreEnv = null;
  try { db?.getDb().close(); } catch { /* expected */ }
  db = null;
  scheduler = null;
  dream = null;
  workspaceSearch = null;
});

test("internal Dream flows keep notes/memory/days model-owned and AutoDream stays out of band", async () => {
  const ws = createTempWorkspace("piclaw-dream-scheduler-");
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: ws.workspace,
    PICLAW_STORE: ws.store,
    PICLAW_DATA: ws.data,
  });

  writeDailyNote(ws.workspace, "2026-04-05", "Infra tooling and memory maintenance landed.");

  db = await importFresh("../src/db.js");
  scheduler = await importFresh("../src/task-scheduler.js");
  dream = await importFresh("../src/dream.js");
  workspaceSearch = await importFresh("../src/workspace-search.js");
  db.initDatabase();

  db.storeMessage({
    id: `msg-user-${Date.now()}`,
    chat_jid: "web:default",
    sender: "user",
    sender_name: "You",
    content: "Make sure the dream maintenance keeps transcript-derived signals from the database, not just daily-note summaries.",
    timestamp: "2026-04-05T12:10:00.000Z",
    is_bot_message: false,
  });
  db.storeMessage({
    id: `msg-agent-${Date.now()}`,
    chat_jid: "web:default",
    sender: "agent",
    sender_name: "Smith",
    content: "Implemented the infra tooling and memory maintenance changes, validated with targeted tests and runtime checks.",
    timestamp: "2026-04-05T12:20:00.000Z",
    is_bot_message: true,
    is_terminal_agent_reply: true,
  });

  const seeded = dream.ensureDreamTask("web:default");
  expect(seeded?.id).toBe(dream.DREAM_TASK_ID);
  expect(seeded?.task_kind).toBe("internal");
  expect(seeded?.schedule_type).toBe("cron");
  expect(seeded?.schedule_value).toBe("0 0 * * *");
  expect(seeded?.status).toBe("active");

  const manualTaskId = `task-dream-${Date.now()}`;
  db.createTask({
    id: manualTaskId,
    chat_jid: "web:default",
    prompt: "dream",
    model: null,
    task_kind: "internal",
    command: null,
    cwd: null,
    timeout_sec: null,
    schedule_type: "once",
    schedule_value: new Date().toISOString(),
    next_run: new Date().toISOString(),
    status: "active",
    created_at: new Date().toISOString(),
  });

  const manualTask = db.getTaskById(manualTaskId);
  await scheduler.runScheduledTask(manualTask!, {
    queue: {} as any,
    agentPool: {} as any,
    sendMessage: async (jid, text) => { sentMessages.push({ jid, text }); },
  });

  expect(sentMessages.length).toBe(0);
  expect(db.getTaskById(manualTaskId)?.last_result).toContain("Dream updated");
  expect(existsSync(join(ws.workspace, "notes/memory/MEMORY.md"))).toBe(true);
  expect(existsSync(join(ws.workspace, "notes/memory/days/2026-04-05.md"))).toBe(false);

  const memoryIndexText = readFileSync(join(ws.workspace, "notes/memory/MEMORY.md"), "utf8");
  expect(memoryIndexText).toContain("[2026-04-05](../daily/2026-04-05.md)");

  const currentStateText = readFileSync(join(ws.workspace, "notes/memory/current-state.json"), "utf8");
  expect(currentStateText).toContain("database, not just daily-note summaries");

  const recentContextText = readFileSync(join(ws.workspace, "notes/memory/recent-context.md"), "utf8");
  expect(recentContextText).toContain("Infra tooling and memory maintenance landed.");

  const indexed = await workspaceSearch!.searchWorkspace({
    query: "Infra tooling and memory maintenance landed",
    scope: "notes",
    refresh: true,
    limit: 20,
  });
  expect(indexed.rows.some((row) => row.path === "notes/daily/2026-04-05.md")).toBe(true);

  writeFileSync(
    join(ws.workspace, "notes", "memory", "current-state.json"),
    `${JSON.stringify({ generated_at: new Date(Date.now() - 48 * 3_600_000).toISOString() }, null, 2)}\n`,
    "utf8",
  );

  for (const chat of ["web:default", "web:a", "web:b", "web:c", "web:d", "web:e"]) {
    db.storeMessage({
      id: `msg-${chat}-${Date.now()}`,
      chat_jid: chat,
      sender: "user",
      sender_name: "You",
      content: `follow-up session in ${chat}`,
      timestamp: new Date().toISOString(),
      is_bot_message: false,
    });
  }

  await scheduler.runScheduledTask(seeded!, {
    queue: {} as any,
    agentPool: {
      runAgent: async () => ({ status: "success", result: "AutoDream model consolidation finished." }),
      disposeChatSession: async () => {},
    } as any,
    sendMessage: async () => {},
  });

  const lastResult = db.getTaskById(dream.DREAM_TASK_ID)?.last_result || "";
  expect(lastResult).toContain("AutoDream model consolidation finished");
  expect(lastResult).toContain("Daily notes refreshed before Dream: yes");
  expect(lastResult).toContain("Pre-Dream backup:");
  const backupPath = lastResult.split("\n").find((line) => line.startsWith("- Pre-Dream backup: "))?.slice("- Pre-Dream backup: ".length).trim();
  expect(Boolean(backupPath)).toBe(true);
  expect(existsSync(backupPath!)).toBe(true);
  readFileSync(join(backupPath!, "manifest.json"), "utf8");
  const today = new Date().toISOString().slice(0, 10);
  const workspaceRoot = backupPath!.replace(/\/data\/dream-backups\/.+$/, "");
  const dailyPath = join(workspaceRoot, "notes", "daily", `${today}.md`);
  expect(existsSync(dailyPath)).toBe(true);
  expect(readFileSync(dailyPath, "utf8")).toContain("## Summary");
  const backupRoot = join(backupPath!, "..");
  const backups = readdirSync(backupRoot);
  expect(backups.length).toBeGreaterThanOrEqual(1);
  expect(existsSync(join(backupPath!, "manifest.json"))).toBe(true);
  const dreamRows = db.getDb().query<{ count: number }, []>("SELECT COUNT(*) AS count FROM messages WHERE chat_jid LIKE 'dream:%'").get();
  expect(dreamRows?.count ?? 0).toBe(0);

  ws.cleanup();
});
