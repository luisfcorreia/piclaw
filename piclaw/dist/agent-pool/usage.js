/**
 * agent-pool/usage.ts – Extract and persist LLM token usage from agent events.
 *
 * Listens for `message_end` events with `role: "assistant"` and usage metadata,
 * then writes a TokenUsageRecord to the database (db/token-usage.ts).
 *
 * Consumers:
 *   - agent-pool.ts calls recordMessageUsage() inside its event handler for
 *     each assistant message completion during an agent run.
 */
import { storeTokenUsage } from "../db.js";
/**
 * Extract token usage from an assistant message and store it in the database.
 * Called on each `message_end` event during agent execution.
 */
export function recordMessageUsage(chatJid, message) {
    if (!message || message.role !== "assistant" || !message.usage)
        return;
    const usage = message.usage || {};
    const input = typeof usage.input === "number" ? usage.input : 0;
    const output = typeof usage.output === "number" ? usage.output : 0;
    const cacheRead = typeof usage.cacheRead === "number" ? usage.cacheRead : 0;
    const cacheWrite = typeof usage.cacheWrite === "number" ? usage.cacheWrite : 0;
    const totalTokens = (typeof usage.totalTokens === "number" && usage.totalTokens) ||
        (typeof usage.total === "number" && usage.total) ||
        input + output + cacheRead + cacheWrite;
    const cost = usage.cost || {};
    const costInput = typeof cost.input === "number" ? cost.input : 0;
    const costOutput = typeof cost.output === "number" ? cost.output : 0;
    const costCacheRead = typeof cost.cacheRead === "number" ? cost.cacheRead : 0;
    const costCacheWrite = typeof cost.cacheWrite === "number" ? cost.cacheWrite : 0;
    const costTotal = (typeof cost.total === "number" && cost.total) ||
        costInput + costOutput + costCacheRead + costCacheWrite;
    const runAt = message.timestamp
        ? (() => {
            const ts = new Date(message.timestamp);
            return Number.isNaN(ts.getTime()) ? new Date().toISOString() : ts.toISOString();
        })()
        : new Date().toISOString();
    storeTokenUsage({
        chat_jid: chatJid,
        run_at: runAt,
        input_tokens: input,
        output_tokens: output,
        cache_read_tokens: cacheRead,
        cache_write_tokens: cacheWrite,
        total_tokens: totalTokens,
        cost_input: costInput,
        cost_output: costOutput,
        cost_cache_read: costCacheRead,
        cost_cache_write: costCacheWrite,
        cost_total: costTotal,
        model: message.model ?? null,
        provider: message.provider ?? null,
        api: message.api ?? null,
        turns: 1,
    });
}
