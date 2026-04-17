/**
 * Attachment registry – tracks pending file attachments per chat.
 *
 * AgentPool should construct one registry per pool so pending attachments
 * cannot leak between independent pools that happen to use the same chat JID.
 */
/** Per-session registry of file attachments created during agent runs. */
export class AttachmentRegistry {
    pending = new Map();
    register(chatJid, info) {
        const list = this.pending.get(chatJid) ?? [];
        list.push(info);
        this.pending.set(chatJid, list);
    }
    take(chatJid) {
        const list = this.pending.get(chatJid) ?? [];
        this.pending.delete(chatJid);
        return list;
    }
    clear(chatJid) {
        this.pending.delete(chatJid);
    }
}
// ── Module-level singleton ────────────────────────────────
// Retained for direct extension tests and legacy callers.
let _instance = null;
/** Get or create the AttachmentRegistry for the current chat context. */
export function getAttachmentRegistry() {
    if (!_instance)
        _instance = new AttachmentRegistry();
    return _instance;
}
