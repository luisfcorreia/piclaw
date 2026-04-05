import { afterEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { getTestWorkspace, importFresh } from "../helpers.js";

function writeDailyNote(workspace: string, date: string, summary: string) {
  const dir = join(workspace, "notes", "daily");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${date}.md`), `---\ndate: ${date}\nsummarised_until: ${date}T23:59:59.000Z\nmessages_total: 4\nmessages_user: 2\nmessages_assistant: 2\nsession_trees: 1\nsession_chats: 1\nfirst_message: ${date}T12:00:00.000Z\nlast_message: ${date}T12:15:00.000Z\nscope_mode: all-web-session-trees\nscope_anchor: web:default\n---\n# ${date}\n\n## Summary\n\n${summary}\n`, "utf8");
}

afterEach(() => {
  const ws = getTestWorkspace();
  rmSync(join(ws.workspace, "notes"), { recursive: true, force: true });
});

test("refresh keeps notes/memory/days sparse by default and only indexes sparse day files when they already exist", async () => {
  const ws = getTestWorkspace();
  rmSync(join(ws.workspace, "notes"), { recursive: true, force: true });
  writeDailyNote(ws.workspace, "2026-04-05", "Infra tooling and memory maintenance landed.");

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  db.initDatabase();
  db.storeMessage({
    id: `msg-${Date.now()}`,
    chat_jid: "web:default",
    sender: "user",
    sender_name: "You",
    content: "database, not just daily-note summaries",
    timestamp: "2026-04-05T12:10:00.000Z",
    is_bot_message: false,
  });

  const refresh = await importFresh<typeof import("../src/agent-memory/refresh.js")>("../src/agent-memory/refresh.js");
  refresh.refreshAgentMemoryFromDailyNotes({ recentDays: 7 });

  const sparsePath = join(ws.workspace, "notes", "memory", "days", "2026-04-05.md");
  expect(existsSync(sparsePath)).toBe(false);
  let memoryIndex = readFileSync(join(ws.workspace, "notes", "memory", "MEMORY.md"), "utf8");
  expect(memoryIndex).toContain("[2026-04-05](../daily/2026-04-05.md)");

  mkdirSync(join(ws.workspace, "notes", "memory", "days"), { recursive: true });
  writeFileSync(sparsePath, "# 2026-04-05\n\n## Durable takeaways\n\n- Custom sparse memory file.\n", "utf8");

  refresh.refreshAgentMemoryFromDailyNotes({ recentDays: 7 });

  expect(readFileSync(sparsePath, "utf8")).toContain("Custom sparse memory file");
  memoryIndex = readFileSync(join(ws.workspace, "notes", "memory", "MEMORY.md"), "utf8");
  expect(memoryIndex).toContain("[2026-04-05](days/2026-04-05.md)");
});
