/**
 * agent-pool/prompt-utils.ts – Shared prompt/assistant text helpers.
 */
/** Format a timeout in a compact human-readable form. */
export function formatTimeoutDuration(timeoutMs) {
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0)
        return `${timeoutMs}ms`;
    if (timeoutMs % 1000 === 0)
        return `${Math.round(timeoutMs / 1000)}s`;
    return `${(timeoutMs / 1000).toFixed(1)}s`;
}
/** Extract assistant text blocks from a rich content message. */
export function extractAssistantText(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "text"
        ? String(block.text ?? "")
        : "")
        .join("")
        .trim();
}
/** Extract assistant thinking blocks from a rich content message. */
export function extractAssistantThinking(message) {
    if (!Array.isArray(message?.content))
        return "";
    return message.content
        .map((block) => block && typeof block === "object" && block.type === "thinking"
        ? String(block.thinking ?? "")
        : "")
        .join("")
        .trim();
}
/** Normalize supported side-prompt reasoning levels for streamSimple(). */
export function toSideReasoning(level) {
    return level === "minimal" || level === "low" || level === "medium" || level === "high" || level === "xhigh"
        ? level
        : undefined;
}
export const DEFAULT_SESSION_IDLE_SETTLE_TICKS = 20;
export const DEFAULT_SESSION_IDLE_MAX_WAIT_MS = 10_000;
export const DEFAULT_SESSION_IDLE_COMPACTION_MAX_WAIT_MS = 300_000;
function parseEnvPositiveInt(name, fallback) {
    const raw = process.env[name];
    if (!raw)
        return fallback;
    const parsed = parseInt(raw.trim(), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
export function resolveSessionIdleMaxWaitMs(session, defaultMaxWaitMs = parseEnvPositiveInt("PICLAW_SESSION_IDLE_MAX_WAIT_MS", DEFAULT_SESSION_IDLE_MAX_WAIT_MS), compactionMaxWaitMs = parseEnvPositiveInt("PICLAW_SESSION_IDLE_COMPACTION_MAX_WAIT_MS", DEFAULT_SESSION_IDLE_COMPACTION_MAX_WAIT_MS)) {
    if (!session.isCompacting)
        return defaultMaxWaitMs;
    return Math.max(defaultMaxWaitMs, compactionMaxWaitMs);
}
/** Wait until a session fully settles after a prompt completes. */
export async function waitForSessionIdle(session, settleTicks = DEFAULT_SESSION_IDLE_SETTLE_TICKS, onSettled, maxWaitMs = DEFAULT_SESSION_IDLE_MAX_WAIT_MS) {
    let idleTicks = 0;
    const startTime = Date.now();
    while (idleTicks < settleTicks) {
        const totalWaitMs = Date.now() - startTime;
        if (maxWaitMs > 0 && totalWaitMs >= maxWaitMs) {
            throw new Error(`Timed out waiting for session idle after ${formatTimeoutDuration(maxWaitMs)} ` +
                `(streaming=${Boolean(session.isStreaming)}, compacting=${Boolean(session.isCompacting)}, retrying=${Boolean(session.isRetrying)})`);
        }
        if (!session.isStreaming && !session.isCompacting && !session.isRetrying) {
            idleTicks += 1;
        }
        else {
            idleTicks = 0;
        }
        await Bun.sleep(50);
    }
    onSettled?.({
        totalWaitMs: Date.now() - startTime,
        settleTicks,
        idleTicks,
        isStreaming: Boolean(session.isStreaming),
        isCompacting: Boolean(session.isCompacting),
        isRetrying: Boolean(session.isRetrying),
    });
}
