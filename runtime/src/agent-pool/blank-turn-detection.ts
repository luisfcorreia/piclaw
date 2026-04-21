/**
 * agent-pool/blank-turn-detection.ts – Detects prompt attempts that only append
 * user-side session state and never emit an assistant reply.
 *
 * This catches a real failure mode seen in production long runs where
 * `session.prompt()` resolves successfully, but the session delta contains only
 * repeated user prompt entries (sometimes due to internal retries) and no
 * assistant/toolResult turn. Those should be treated as recoverable failures,
 * not successful no-op completions.
 */

interface SessionMessageLike {
  role?: unknown;
}

interface SessionEntryLike {
  type?: unknown;
  message?: SessionMessageLike;
}

interface SessionWithEntries {
  sessionManager?: {
    getEntries?: () => SessionEntryLike[];
  };
}

export interface BlankTurnSessionDelta {
  baselineEntryCount: number;
  appendedEntryCount: number;
  appendedUserMessageCount: number;
  appendedAssistantMessageCount: number;
  appendedToolResultMessageCount: number;
  appendedCompactionCount: number;
  latestAppendedType: string | null;
  latestAppendedRole: string | null;
}

export function snapshotSessionEntryCount(session: unknown): number | null {
  const entries = (session as SessionWithEntries | null | undefined)?.sessionManager?.getEntries?.();
  return Array.isArray(entries) ? entries.length : null;
}

export function inspectBlankTurnSessionDelta(session: unknown, baselineEntryCount: number | null): BlankTurnSessionDelta | null {
  if (!Number.isFinite(baselineEntryCount) || (baselineEntryCount ?? -1) < 0) return null;

  const entries = (session as SessionWithEntries | null | undefined)?.sessionManager?.getEntries?.();
  if (!Array.isArray(entries)) return null;

  const baseline = Math.max(0, Number(baselineEntryCount) || 0);
  const appended = entries.slice(baseline);
  let appendedUserMessageCount = 0;
  let appendedAssistantMessageCount = 0;
  let appendedToolResultMessageCount = 0;
  let appendedCompactionCount = 0;

  for (const entry of appended) {
    if (!entry || typeof entry !== "object") continue;
    if (entry.type === "compaction") {
      appendedCompactionCount += 1;
      continue;
    }
    if (entry.type !== "message") continue;

    const role = entry.message?.role;
    if (role === "user") appendedUserMessageCount += 1;
    if (role === "assistant") appendedAssistantMessageCount += 1;
    if (role === "toolResult" || role === "tool_result") appendedToolResultMessageCount += 1;
  }

  const latest = appended.at(-1);
  return {
    baselineEntryCount: baseline,
    appendedEntryCount: appended.length,
    appendedUserMessageCount,
    appendedAssistantMessageCount,
    appendedToolResultMessageCount,
    appendedCompactionCount,
    latestAppendedType: typeof latest?.type === "string" ? latest.type : null,
    latestAppendedRole: typeof latest?.message?.role === "string" ? latest.message.role : null,
  };
}

export function isBlankTurnSessionDelta(delta: BlankTurnSessionDelta | null | undefined): boolean {
  if (!delta) return false;
  if (delta.appendedEntryCount <= 0) return false;
  if (delta.appendedUserMessageCount <= 0) return false;
  if (delta.appendedAssistantMessageCount > 0) return false;
  if (delta.appendedToolResultMessageCount > 0) return false;
  return true;
}
