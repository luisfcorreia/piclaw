import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { queueStartupSessionWarmup, resolveStartupSessionWarmupOptions } from "../../src/runtime/startup.js";
import { createTempWorkspace } from "../helpers.js";

const TEST_SHELL = process.env.SHELL || "bash";
const RUNTIME_DIR = join(import.meta.dir, "../..");

describe("runtime startup helpers", () => {
  test("initializeRuntimeEnvironment seeds workspace skel files for direct installs", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          TEST_SHELL,
          "-lc",
          "bun -e \"import { initializeRuntimeEnvironment } from './src/runtime/startup.js'; initializeRuntimeEnvironment({ loadTimestamps() {}, loadChats() {} });\"",
        ],
        cwd: RUNTIME_DIR,
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
          PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX: "1",
        },
      });
      expect(run.exitCode, run.stderr.toString() || run.stdout.toString()).toBe(0);

      expect(existsSync(join(ws.workspace, "AGENTS.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".piclaw", "README.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".piclaw", "config.json.example"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".pi", "mcp.json.example"))).toBe(true);
      expect(existsSync(join(ws.workspace, "notes", "index.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, "notes", "memory", "README.md"))).toBe(true);
      expect(existsSync(join(ws.workspace, ".pi", "skills"))).toBe(true);
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupResumePendingIpc writes a resume_pending task", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          TEST_SHELL,
          "-lc",
          "bun -e \"import { queueStartupResumePendingIpc } from './src/runtime/startup.js'; queueStartupResumePendingIpc();\"",
        ],
        cwd: RUNTIME_DIR,
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
          PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const tasksDir = join(ws.data, "ipc", "tasks");
      const files = readdirSync(tasksDir).filter((file) => file.startsWith("resume_pending_"));
      expect(files).toHaveLength(1);

      const payload = JSON.parse(readFileSync(join(tasksDir, files[0]), "utf-8"));
      expect(payload).toEqual({ type: "resume_pending", chatJid: "all", reason: "startup" });
    } finally {
      ws.cleanup();
    }
  });

  test("captureStartupMemorySnapshot writes a clean startup artifact", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          TEST_SHELL,
          "-lc",
          "bun -e \"import { captureStartupMemorySnapshot } from './src/runtime/startup.js'; captureStartupMemorySnapshot({ getMemoryInstrumentationSnapshot() { return { cachedMainSessions: 0, cachedSideSessions: 0, activeForkBaseLeaves: 0, activeChats: 0, sessionManager: { createInFlight: 0, branchSeedRealizationsInFlight: 0, invalidDeferredSeedErrors: 0, prewarmInFlight: 0, queuedPrewarms: 0, prewarmQueueLength: 0, prewarmCooldowns: 0 } }; } }, { label: 'post-web-start' });\"",
        ],
        cwd: RUNTIME_DIR,
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
          PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX: "1",
        },
      });
      expect(run.exitCode, run.stderr.toString() || run.stdout.toString()).toBe(0);

      const snapshotDir = join(ws.data, "startup-memory-snapshots");
      const files = readdirSync(snapshotDir).filter((file) => file.endsWith("_post-web-start.json"));
      expect(files).toHaveLength(1);

      const payload = JSON.parse(readFileSync(join(snapshotDir, files[0]), "utf-8"));
      expect(payload.pid).toBeGreaterThan(0);
      expect(payload.label).toBe("post-web-start");
      expect(payload.snapshot.process_memory.rss_bytes).toBeGreaterThan(0);
      expect(payload.snapshot.runtime_memory).toEqual({
        cached_main_sessions: 0,
        cached_side_sessions: 0,
        active_fork_base_leaves: 0,
        active_chats: 0,
        create_in_flight: 0,
        branch_seed_realizations_in_flight: 0,
        invalid_deferred_seed_errors: 0,
        prewarm_in_flight: 0,
        queued_prewarms: 0,
        prewarm_queue_length: 0,
        prewarm_cooldowns: 0,
      });
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupResumePendingIpc always queues a fresh startup resume task", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const tasksDir = join(ws.data, "ipc", "tasks");
      mkdirSync(tasksDir, { recursive: true });
      writeFileSync(
        join(tasksDir, "resume_pending_existing.json"),
        JSON.stringify({ type: "resume_pending", chatJid: "all", reason: "reload" })
      );

      const run = Bun.spawnSync({
        cmd: [
          TEST_SHELL,
          "-lc",
          "bun -e \"import { queueStartupResumePendingIpc } from './src/runtime/startup.js'; queueStartupResumePendingIpc();\"",
        ],
        cwd: RUNTIME_DIR,
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
          PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const files = readdirSync(tasksDir)
        .filter((file) => file.startsWith("resume_pending_"))
        .sort();
      expect(files.length).toBe(2);
      expect(files).toContain("resume_pending_existing.json");
      expect(files.some((file) => file !== "resume_pending_existing.json")).toBe(true);
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupSessionWarmup is disabled by default", () => {
    const scheduled: Array<{ chatJid: string; priority?: boolean }> = [];
    const recentCalls: Array<{ limit?: number; excludeChatJids?: string[] }> = [];

    queueStartupSessionWarmup({
      scheduleChatWarmup: (chatJid: string, options?: { priority?: boolean }) => {
        scheduled.push({ chatJid, priority: options?.priority });
        return true;
      },
      scheduleRecentChatWarmup: (options?: { limit?: number; excludeChatJids?: string[] }) => {
        recentCalls.push(options || {});
        return [];
      },
    } as any);

    expect(scheduled).toEqual([]);
    expect(recentCalls).toEqual([]);
  });

  test("queueStartupSessionWarmup can explicitly warm the default chat and recent chats", () => {
    const scheduled: Array<{ chatJid: string; priority?: boolean }> = [];
    const recentCalls: Array<{ limit?: number; excludeChatJids?: string[] }> = [];

    queueStartupSessionWarmup({
      scheduleChatWarmup: (chatJid: string, options?: { priority?: boolean }) => {
        scheduled.push({ chatJid, priority: options?.priority });
        return true;
      },
      scheduleRecentChatWarmup: (options?: { limit?: number; excludeChatJids?: string[] }) => {
        recentCalls.push(options || {});
        return [];
      },
    } as any, { warmDefaultChat: true, recentLimit: 5 });

    expect(scheduled).toEqual([{ chatJid: "web:default", priority: true }]);
    expect(recentCalls).toEqual([{ limit: 5, excludeChatJids: ["web:default"] }]);
  });

  test("resolveStartupSessionWarmupOptions reads env-backed warmup controls", () => {
    expect(resolveStartupSessionWarmupOptions({
      PICLAW_STARTUP_WARM_DEFAULT_CHAT: "true",
      PICLAW_STARTUP_WARMUP_RECENT_LIMIT: "3",
    } as NodeJS.ProcessEnv)).toEqual({
      warmDefaultChat: true,
      recentLimit: 3,
    });

    expect(resolveStartupSessionWarmupOptions({
      PICLAW_STARTUP_WARM_DEFAULT_CHAT: "off",
      PICLAW_STARTUP_WARMUP_RECENT_LIMIT: "99",
    } as NodeJS.ProcessEnv)).toEqual({
      warmDefaultChat: false,
      recentLimit: 8,
    });
  });
});
