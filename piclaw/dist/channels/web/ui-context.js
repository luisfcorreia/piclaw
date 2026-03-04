/**
 * web/ui-context.ts – Extension UI context implementation.
 *
 * Implements the ExtensionUIContext interface used by pi-agent extensions
 * to request user input. Backed by the UI bridge for actual delivery.
 *
 * Consumers: channels/web.ts creates a UIContext for each agent session.
 */
import { UiBridge } from "./ui-bridge.js";
function getBridge(channel) {
    return channel.uiBridge ?? new UiBridge(channel);
}
export async function bindSessionUiContext(channel, session, chatJid) {
    return getBridge(channel).bindSession(session, chatJid);
}
export function createUiContext(channel, chatJid) {
    return getBridge(channel).createUiContext(chatJid);
}
