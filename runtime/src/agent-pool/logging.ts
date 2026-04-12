/**
 * agent-pool/logging.ts – Write agent run summaries to log files on disk.
 *
 * After each agent run, agent-pool.ts calls writeAgentLog() to persist a
 * brief summary (chat JID, duration, result/error) into the logs directory.
 * These log files are useful for post-mortem debugging of agent behaviour.
 *
 * Consumers:
 *   - agent-pool.ts calls writeAgentLog() in the finally block of runAgent().
 */

import { writeFileSync } from "fs";
import { join } from "path";

import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("agent-pool.logging");

/**
 * Write a single agent run log entry to disk.
 * Filenames are timestamped to avoid collisions.
 * Errors during writing are silently ignored to avoid cascading failures.
 */
export function writeAgentLog(
  logsDir: string,
  chatJid: string,
  duration: number,
  timedOut: boolean,
  result: string | null,
  error: string | null
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
      .filter((line) => line !== null)
      .join("\n");
    writeFileSync(join(logsDir, `agent-${ts}.log`), content);
  } catch (error) {
    debugSuppressedError(log, "Failed to write agent run log entry.", error, {
      logsDir,
      chatJid,
      timedOut,
    });
  }
}
