import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  type AgentSession,
  type AgentSessionEvent,
  AuthStorage,
  createAgentSession,
  DefaultResourceLoader,
  getAgentDir,
  ModelRegistry,
  SessionManager,
  SettingsManager,
} from "@mariozechner/pi-coding-agent";
import { AGENT_TIMEOUT, DATA_DIR, SESSIONS_DIR, WORKSPACE_DIR } from "./config.js";

export interface AgentOutput {
  status: "success" | "error";
  result: string | null;
  error?: string;
}

interface PoolEntry {
  session: AgentSession;
  lastUsed: number;
}

/** How long (ms) an idle session stays cached before being disposed. */
const IDLE_TTL = 10 * 60 * 1000; // 10 minutes
const CLEANUP_INTERVAL = 60 * 1000; // check every minute

/**
 * Manages a pool of persistent AgentSession instances keyed by chat JID.
 *
 * First invocation for a JID pays the warm-up cost (resource discovery,
 * model initialisation). Subsequent calls reuse the live session – no
 * process-spawn overhead, conversation context already loaded.
 */
export class AgentPool {
  private pool = new Map<string, PoolEntry>();
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;

  // Shared across all sessions (expensive to create, safe to reuse)
  private authStorage = AuthStorage.create();
  private modelRegistry = new ModelRegistry(this.authStorage);
  private settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
  private logsDir = join(WORKSPACE_DIR, "logs");

  constructor() {
    mkdirSync(SESSIONS_DIR, { recursive: true });
    mkdirSync(this.logsDir, { recursive: true });
    this.cleanupTimer = setInterval(() => this.evictIdle(), CLEANUP_INTERVAL);
  }

  /** Run a prompt against the persistent session for `chatJid`. */
  async runAgent(prompt: string, chatJid: string): Promise<AgentOutput> {
    const startTime = Date.now();

    try {
      const session = await this.getOrCreate(chatJid);
      console.log(`[agent-pool] Prompting session ${chatJid} (${prompt.length} chars)`);

      // Collect the assistant's final text from streaming events
      let result = "";
      const unsub = session.subscribe((event: AgentSessionEvent) => {
        if (
          event.type === "message_update" &&
          event.assistantMessageEvent.type === "text_delta"
        ) {
          result += event.assistantMessageEvent.delta;
        }
      });

      // Timeout handling
      let timedOut = false;
      const timeoutId = setTimeout(async () => {
        timedOut = true;
        console.error(`[agent-pool] Timeout after ${AGENT_TIMEOUT}ms for ${chatJid}`);
        await session.abort();
      }, AGENT_TIMEOUT);

      // Set chat context for IPC skills (skills read this env var)
      process.env.PICLAW_CHAT_JID = chatJid;

      try {
        await session.prompt(prompt);
      } finally {
        clearTimeout(timeoutId);
        unsub();
      }

      const duration = Date.now() - startTime;
      this.writeLog(chatJid, duration, timedOut, result, null);

      if (timedOut) {
        return { status: "error", result: null, error: `Timed out after ${AGENT_TIMEOUT}ms` };
      }

      console.log(`[agent-pool] Done in ${duration}ms (${result.length} chars, session ${chatJid})`);
      return { status: "success", result: result.trim() || null };
    } catch (err) {
      const duration = Date.now() - startTime;
      const errorMsg = err instanceof Error ? err.message : String(err);
      this.writeLog(chatJid, duration, false, null, errorMsg);
      console.error(`[agent-pool] Error for ${chatJid}:`, errorMsg);
      return { status: "error", result: null, error: errorMsg };
    }
  }

  /** Gracefully shut down all sessions. */
  async shutdown(): Promise<void> {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    for (const [jid, entry] of this.pool) {
      try {
        entry.session.dispose();
        console.log(`[agent-pool] Disposed session ${jid}`);
      } catch (err) {
        console.error(`[agent-pool] Error disposing ${jid}:`, err);
      }
    }
    this.pool.clear();
  }

  // ── internal ────────────────────────────────────────────

  private async getOrCreate(chatJid: string): Promise<AgentSession> {
    const existing = this.pool.get(chatJid);
    if (existing) {
      existing.lastUsed = Date.now();
      return existing.session;
    }

    console.log(`[agent-pool] Creating new session for ${chatJid}`);

    // Each chat gets its own session directory so history is per-conversation
    const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
    mkdirSync(chatSessionDir, { recursive: true });

    // Use DefaultResourceLoader for full discovery (skills, extensions, context)
    const resourceLoader = new DefaultResourceLoader({
      cwd: WORKSPACE_DIR,
      agentDir: getAgentDir(),
      settingsManager: this.settingsManager,
    });
    await resourceLoader.reload();

    const { session } = await createAgentSession({
      cwd: WORKSPACE_DIR,
      agentDir: getAgentDir(),
      authStorage: this.authStorage,
      modelRegistry: this.modelRegistry,
      settingsManager: this.settingsManager,
      resourceLoader,
      sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
    });

    this.pool.set(chatJid, { session, lastUsed: Date.now() });
    console.log(`[agent-pool] Session ready for ${chatJid} (pool size: ${this.pool.size})`);
    return session;
  }

  private evictIdle(): void {
    const now = Date.now();
    for (const [jid, entry] of this.pool) {
      if (now - entry.lastUsed > IDLE_TTL) {
        console.log(`[agent-pool] Evicting idle session ${jid}`);
        try { entry.session.dispose(); } catch {}
        this.pool.delete(jid);
      }
    }
  }

  private writeLog(
    chatJid: string,
    duration: number,
    timedOut: boolean,
    result: string | null,
    error: string | null,
  ): void {
    try {
      const ts = new Date().toISOString().replace(/[:.]/g, "-");
      const content = [
        `Chat: ${chatJid}`,
        `Duration: ${duration}ms`,
        `TimedOut: ${timedOut}`,
        error ? `Error: ${error}` : null,
        "",
        "=== result ===",
        result?.slice(0, 50000) ?? "(none)",
      ]
        .filter((l) => l !== null)
        .join("\n");
      writeFileSync(join(this.logsDir, `agent-${ts}.log`), content);
    } catch {}
  }
}

/** Turn a JID into a safe directory name. */
function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
