/**
 * router.ts – Message routing and formatting for the agent pipeline.
 *
 * Responsible for:
 *   - Detecting the channel type (web, whatsapp) from a chat JID.
 *   - Formatting arrays of NewMessage objects into XML for the agent prompt.
 *   - Stripping `<internal>…</internal>` tags from agent output before delivery.
 *   - Applying channel-specific output escaping (HTML entities for web).
 *
 * Consumers:
 *   - runtime/message-loop.ts calls formatMessages() to build the user-turn
 *     content for the agent.
 *   - agent-pool.ts calls formatOutbound() / stripInternalTags() when
 *     delivering the agent's response to channels.
 *   - channels/web.ts and channels/whatsapp.ts use detectChannel() to
 *     determine formatting rules.
 *   - agent-control uses detectChannel() to scope command execution.
 */
import { getChannelFormattingInstructions } from "./channels/formatting.js";
/** Infer the channel from a chat JID string (web: prefix → web, else whatsapp). */
export function detectChannel(chatJid) {
    if (!chatJid)
        return "unknown";
    if (chatJid.startsWith("web:"))
        return "web";
    return "whatsapp";
}
/** Escape special XML characters in a string for safe embedding in XML tags. */
export function escapeXml(s) {
    if (!s)
        return "";
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
/**
 * Serialise an array of NewMessage objects into an XML `<messages>` block
 * that becomes part of the agent's prompt. Includes channel metadata and
 * formatting instructions when the channel is known.
 */
export function formatMessages(messages, channel) {
    const lines = messages.map((m) => `<message sender=\"${escapeXml(m.sender_name)}\" time=\"${m.timestamp}\">${escapeXml(m.content)}</message>`);
    const knownChannel = channel && channel !== "unknown" ? channel : undefined;
    const channelAttr = knownChannel ? ` channel=\"${knownChannel}\"` : "";
    const metaLines = [];
    if (knownChannel)
        metaLines.push(`<channel>${knownChannel}</channel>`);
    const formatting = getChannelFormattingInstructions(knownChannel);
    if (formatting)
        metaLines.push(`<formatting>${formatting}</formatting>`);
    const meta = metaLines.length > 0 ? `${metaLines.join("\n")}\n` : "";
    return `<messages${channelAttr}>\n${meta}${lines.join("\n")}\n</messages>`;
}
/**
 * Remove `<internal>…</internal>` blocks from agent output.
 * Content inside these tags is logged but not sent to the user.
 */
export function stripInternalTags(text) {
    return text.replace(/<internal>[\s\S]*?<\/internal>/g, "").trim();
}
/**
 * Prepare agent output text for delivery on the given channel.
 * Strips internal tags and applies HTML-entity escaping for the web channel.
 */
export function formatOutbound(rawText, channel) {
    const text = stripInternalTags(rawText);
    if (!text)
        return "";
    if (channel === "web") {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return text;
}
