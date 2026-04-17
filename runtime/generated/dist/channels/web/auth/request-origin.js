/**
 * channels/web/request-origin.ts – Track the last seen web origin per chat.
 *
 * Used to build absolute URLs (e.g. passkey enrol links) that match the
 * hostname used by the current browser session, even when behind proxies.
 */
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { getRequestOriginParts } from "../http/client.js";
const originByChatJid = new Map();
const REQUEST_ORIGIN_TTL_MS = 24 * 60 * 60 * 1000;
const log = createLogger("web.request-origin");
function pruneExpiredOrigins(now = Date.now()) {
    for (const [chatJid, record] of originByChatJid) {
        if (now - record.touchedAt < REQUEST_ORIGIN_TTL_MS)
            continue;
        originByChatJid.delete(chatJid);
    }
}
/** Persist the latest request origin for a web chat thread. */
export function rememberWebOrigin(chatJid, req) {
    try {
        const now = Date.now();
        pruneExpiredOrigins(now);
        const { proto, host } = getRequestOriginParts(req);
        if (!host)
            return;
        originByChatJid.set(chatJid, {
            origin: `${proto}://${host}`,
            touchedAt: now,
        });
    }
    catch (error) {
        debugSuppressedError(log, "Failed to remember the last seen web request origin.", error, {
            chatJid,
            requestUrl: req?.url ?? null,
        });
    }
}
/** Return the remembered browser origin for a web chat, if available. */
export function getWebOrigin(chatJid) {
    pruneExpiredOrigins();
    return originByChatJid.get(chatJid)?.origin || null;
}
