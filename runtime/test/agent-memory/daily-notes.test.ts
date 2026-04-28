import { expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const DB_MODULE = new URL("../../src/db.js", import.meta.url).pathname;
const DAILY_NOTES_MODULE = new URL("../../src/agent-memory/daily-notes.js", import.meta.url).pathname;

function isoDateDaysAgo(daysAgo: number): string {
  return new Date(Date.now() - daysAgo * 24 * 3_600_000).toISOString().slice(0, 10);
}

function makeEnv(base: string): Record<string, string | undefined> {
  return {
    ...process.env,
    PICLAW_WORKSPACE: base,
    PICLAW_STORE: join(base, "store"),
    PICLAW_DATA: join(base, "data"),
    PICLAW_DB_IN_MEMORY: "1",
  };
}

function makeTempWorkspace(prefix: string): string {
  const base = mkdtempSync(join(tmpdir(), prefix));
  mkdirSync(join(base, "store"), { recursive: true });
  mkdirSync(join(base, "data"), { recursive: true });
  return base;
}

test("refreshDailyNotesFromMessages adds a visible incomplete warning to new unsummarised notes", () => {
  const base = makeTempWorkspace("piclaw-daily-notes-warning-");
  try {
    const day = isoDateDaysAgo(1);
    const userTs = `${day}T10:00:00.000Z`;
    const agentTs = `${day}T10:05:00.000Z`;

    const script = `
      import { initDatabase, storeMessage } from ${JSON.stringify(DB_MODULE)};
      import { refreshDailyNotesFromMessages } from ${JSON.stringify(DAILY_NOTES_MODULE)};
      initDatabase();
      storeMessage({
        id: 'user-1',
        chat_jid: 'web:default',
        sender: 'user',
        sender_name: 'You',
        content: 'hello',
        timestamp: '${userTs}',
        is_bot_message: false,
      });
      storeMessage({
        id: 'agent-1',
        chat_jid: 'web:default',
        sender: 'agent',
        sender_name: 'Smith',
        content: 'hi',
        timestamp: '${agentTs}',
        is_bot_message: true,
        is_terminal_agent_reply: true,
      });
      const out = refreshDailyNotesFromMessages({ chatJid: '*', days: 7 });
      console.log(JSON.stringify({ created: out.created }));
    `;

    const proc = Bun.spawnSync([process.execPath, "-e", script], { env: makeEnv(base), stdout: "pipe", stderr: "pipe" });
    expect(proc.exitCode, proc.stderr.toString()).toBe(0);
    const result = JSON.parse(proc.stdout.toString().trim().split("\n").pop()!);
    expect(result.created).toBe(1);

    const notePath = join(base, "notes", "daily", `${day}.md`);
    expect(existsSync(notePath)).toBe(true);
    const note = readFileSync(notePath, "utf8");
    expect(note).toContain("> ⚠ **Incomplete daily note**");
    expect(note).toContain(`Latest message currently on file: \`${agentTs}\`.`);
    expect(note).toContain("<!-- NEEDS_SUMMARY -->");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("refreshDailyNotesFromMessages adds an incomplete warning and summary update marker to stale notes", () => {
  const base = makeTempWorkspace("piclaw-daily-notes-stale-");
  try {
    const day = isoDateDaysAgo(1);
    const firstTs = `${day}T10:00:00.000Z`;
    const laterTs = `${day}T11:30:00.000Z`;

    // Pre-create a note with a summary covering only the first message
    mkdirSync(join(base, "notes", "daily"), { recursive: true });
    writeFileSync(
      join(base, "notes", "daily", `${day}.md`),
      `---\ndate: ${day}\nsummarised_until: ${firstTs}\nmessages_total: 1\nmessages_user: 1\nmessages_assistant: 0\nsession_trees: 1\nsession_chats: 1\nfirst_message: ${firstTs}\nlast_message: ${firstTs}\nscope_mode: all-chats\nscope_anchor: *\n---\n# ${day}\n\n## Summary\n\nEarlier summary.\n`,
      "utf8",
    );

    const script = `
      import { initDatabase, storeMessage } from ${JSON.stringify(DB_MODULE)};
      import { refreshDailyNotesFromMessages } from ${JSON.stringify(DAILY_NOTES_MODULE)};
      initDatabase();
      storeMessage({
        id: 'user-1',
        chat_jid: 'web:default',
        sender: 'user',
        sender_name: 'You',
        content: 'first',
        timestamp: '${firstTs}',
        is_bot_message: false,
      });
      storeMessage({
        id: 'agent-1',
        chat_jid: 'web:default',
        sender: 'agent',
        sender_name: 'Smith',
        content: 'later',
        timestamp: '${laterTs}',
        is_bot_message: true,
        is_terminal_agent_reply: true,
      });
      const out = refreshDailyNotesFromMessages({ chatJid: '*', days: 7 });
      console.log(JSON.stringify({ updated: out.updated }));
    `;

    const proc = Bun.spawnSync([process.execPath, "-e", script], { env: makeEnv(base), stdout: "pipe", stderr: "pipe" });
    expect(proc.exitCode, proc.stderr.toString()).toBe(0);
    const result = JSON.parse(proc.stdout.toString().trim().split("\n").pop()!);
    expect(result.updated).toBe(1);

    const note = readFileSync(join(base, "notes", "daily", `${day}.md`), "utf8");
    expect(note).toContain("> ⚠ **Incomplete daily note**");
    expect(note).toContain(`Summary currently covers messages only through \`${firstTs}\`.`);
    expect(note).toContain(`Latest message currently on file: \`${laterTs}\`.`);
    expect(note).toContain(`## Summary update (${laterTs.slice(11, 16)} UTC)`);
    expect(note).toContain("<!-- NEEDS_SUMMARY_UPDATE -->");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
