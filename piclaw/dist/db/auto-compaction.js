/**
 * db/auto-compaction.ts – Tracks the state of automatic context compaction.
 *
 * When the agent's context window fills up, the runtime can trigger an
 * automatic compaction (summarising older messages). This module persists
 * the compaction state per-chat using the router_state key-value store
 * so the UI can display progress and the runtime can resume after restarts.
 *
 * Consumers:
 *   - runtime/message-loop.ts reads/writes compaction state during agent runs.
 *   - channels/web/agent-events.ts broadcasts compaction progress to the UI.
 *   - agent-control/handlers/info.ts surfaces compaction status for `/status`.
 */
import { deleteRouterState, getRouterState, setRouterState } from "./router-state.js";
/** Prefix for all auto-compaction keys in the router_state table. */
const KEY_PREFIX = "auto_compact:";
/** Build the router_state key for a given chat's compaction state. */
function buildKey(chatJid) {
    return `${KEY_PREFIX}${chatJid}`;
}
/** Read the current compaction state for a chat, or null if none exists. */
export function getAutoCompactState(chatJid) {
    const raw = getRouterState(buildKey(chatJid));
    if (!raw)
        return null;
    try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.status === "string") {
            return parsed;
        }
    }
    catch {
        // swallow JSON errors and treat as missing state
    }
    return null;
}
/** Persist the compaction state for a chat. */
export function setAutoCompactState(chatJid, state) {
    setRouterState(buildKey(chatJid), JSON.stringify(state));
}
/** Remove the compaction state entry for a chat. */
export function clearAutoCompactState(chatJid) {
    deleteRouterState(buildKey(chatJid));
}
