/**
 * agent-pool/session-binder.ts – Session binder lifecycle helper.
 */
/**
 * Manages the optional session binder callback and applies it to sessions.
 */
export class AgentSessionBinder {
    options;
    binder;
    constructor(options) {
        this.options = options;
    }
    setBinder(binder) {
        this.binder = binder;
        if (!binder)
            return;
        for (const [jid, entry] of this.options.pool) {
            void this.runBinder(entry.runtime, jid, "set_session_binder.bind_existing_session");
        }
    }
    async bindSession(runtime, chatJid) {
        await this.runBinder(runtime, chatJid, "bind_session");
    }
    async runBinder(runtime, chatJid, operation) {
        if (!this.binder)
            return;
        try {
            await this.binder(runtime, chatJid);
        }
        catch (err) {
            this.options.onError?.("Failed to bind session", {
                operation,
                chatJid,
                err,
            });
        }
    }
}
