/**
 * agent-pool/session-manager.ts – Main/side session lifecycle management for AgentPool.
 *
 * Extracts chat-session creation, side-session sync, idle eviction, and shutdown
 * mechanics out of the top-level AgentPool coordinator while preserving the
 * existing map-based cache structure used by callers and tests.
 */
import { claimDeferredBranchSeed, finalizeClaimedDeferredBranchSeed, getDeferredBranchSeedFingerprint, hasDeferredBranchSeed, restoreClaimedDeferredBranchSeed, seedSessionManagerFromDeferredBranchSeed, } from "./branch-seeding.js";
import { getChatBranchByChatJid } from "../db.js";
import { createDefaultSession, createSessionInDir, ensureNamedSessionDir, ensureSessionDir, lightweightPrewarmSession } from "./session.js";
import { forcePersistSessionFile, seedRotatedSession } from "../session-rotation.js";
export class AgentSessionManager {
    options;
    branchSeedRealizationInFlight = new Map();
    createInFlight = new Map();
    invalidDeferredBranchSeedErrors = new Map();
    runtimeDisposeInFlight = new WeakMap();
    prewarmInFlight = new Set();
    queuedPrewarms = new Set();
    prewarmQueue = [];
    prewarmCooldownByChat = new Map();
    prewarmLoopActive = false;
    constructor(options) {
        this.options = options;
    }
    getBlockingInvalidSeedError(chatJid) {
        const knownInvalidSeedState = this.invalidDeferredBranchSeedErrors.get(chatJid);
        if (!knownInvalidSeedState)
            return null;
        if (knownInvalidSeedState.fingerprint === getDeferredBranchSeedFingerprint(chatJid)) {
            return knownInvalidSeedState.error;
        }
        this.invalidDeferredBranchSeedErrors.delete(chatJid);
        return null;
    }
    prunePrewarmCooldownEntries(now) {
        for (const [chatJid, lastQueuedAt] of this.prewarmCooldownByChat) {
            if (now - lastQueuedAt >= 30_000) {
                this.prewarmCooldownByChat.delete(chatJid);
            }
        }
    }
    async refreshRuntime(chatJid, runtime) {
        const entry = this.options.pool.get(chatJid);
        if (entry) {
            entry.lastUsed = Date.now();
        }
        await this.options.bindSession(runtime, chatJid);
        this.options.ensureBranchRegistration(chatJid, runtime.session);
    }
    async getOrCreate(chatJid) {
        const knownInvalidSeedError = this.getBlockingInvalidSeedError(chatJid);
        if (knownInvalidSeedError) {
            throw knownInvalidSeedError;
        }
        const pendingCreate = this.createInFlight.get(chatJid);
        if (pendingCreate) {
            return await pendingCreate;
        }
        const existing = this.options.pool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            try {
                await this.realizeDeferredBranchSeed(chatJid, existing.runtime);
                return existing.runtime;
            }
            catch (error) {
                await this.disposeMainRuntimeAfterError(chatJid, existing.runtime, "get_or_create.realize_existing_after_error");
                throw error;
            }
        }
        const task = (async () => {
            this.options.onInfo?.("Creating new session", {
                operation: "get_or_create.create_main_session",
                chatJid,
            });
            const chatSessionDir = ensureSessionDir(chatJid);
            const extensionFactories = await this.options.getSessionExtensionFactories?.(chatJid) ?? [];
            const runtime = this.options.createSession
                ? await this.options.createSession(chatJid, chatSessionDir)
                : await createDefaultSession(chatJid, {
                    authStorage: this.options.authStorage,
                    modelRegistry: this.options.modelRegistry,
                    settingsManager: this.options.settingsManager,
                    tools: this.options.createDefaultTools(),
                    customTools: this.options.createCustomToolOverrides?.() ?? [],
                    extensionFactories,
                });
            this.options.pool.set(chatJid, { runtime, lastUsed: Date.now() });
            this.enforceMainSessionPoolLimit({ protectedChatJids: [chatJid] });
            try {
                const realizedDeferredSeed = await this.realizeDeferredBranchSeed(chatJid, runtime);
                if (!realizedDeferredSeed) {
                    await this.applyDefaultModel(runtime.session);
                }
                await this.refreshRuntime(chatJid, runtime);
                this.options.onInfo?.("Session ready", {
                    operation: this.options.createSession ? "get_or_create.create_main_session" : "get_or_create.create_default_session",
                    chatJid,
                    poolSize: this.options.pool.size,
                });
                return runtime;
            }
            catch (err) {
                await this.disposeMainRuntimeAfterError(chatJid, runtime, "get_or_create.dispose_after_error");
                throw err;
            }
        })().finally(() => {
            this.createInFlight.delete(chatJid);
        });
        this.createInFlight.set(chatJid, task);
        return await task;
    }
    async getOrCreateSide(chatJid) {
        const existing = this.options.sidePool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.runtime;
        }
        this.options.onInfo?.("Creating new side session", {
            operation: "get_or_create_side.create_session",
            chatJid,
        });
        const sideSessionDir = ensureNamedSessionDir(chatJid, "btw-side");
        const extensionFactories = await this.options.getSessionExtensionFactories?.(chatJid) ?? [];
        const runtime = this.options.createSideSession
            ? await this.options.createSideSession(chatJid, sideSessionDir)
            : await createSessionInDir(sideSessionDir, {
                authStorage: this.options.authStorage,
                modelRegistry: this.options.modelRegistry,
                settingsManager: this.options.settingsManager,
                tools: this.options.createDefaultTools(),
                customTools: this.options.createCustomToolOverrides?.() ?? [],
                extensionFactories,
            });
        this.options.sidePool.set(chatJid, { runtime, lastUsed: Date.now() });
        return runtime;
    }
    async syncSideSessionFromMain(mainSession, sideRuntime) {
        try {
            const mainContext = mainSession.sessionManager.buildSessionContext();
            await sideRuntime.newSession({
                setup: async (sessionManager) => {
                    seedRotatedSession(sessionManager, mainContext, {
                        sessionName: "BTW",
                        model: mainContext.model,
                    });
                },
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to reseed side session from main context", {
                operation: "sync_side_session_from_main.reseed",
                err,
            });
        }
        const sideSession = sideRuntime.session;
        const mainModel = mainSession.model;
        const sideModel = sideSession.model;
        if (mainModel && (!sideModel || sideModel.provider !== mainModel.provider || sideModel.id !== mainModel.id)) {
            try {
                await sideSession.setModel(mainModel);
            }
            catch (err) {
                this.options.onWarn?.("Failed to sync side-session model", {
                    operation: "sync_side_session_from_main.model",
                    model: `${mainModel.provider}/${mainModel.id}`,
                    err,
                });
            }
        }
        try {
            sideSession.setThinkingLevel(mainSession.thinkingLevel);
        }
        catch (err) {
            this.options.onWarn?.("Failed to sync side-session thinking level", {
                operation: "sync_side_session_from_main.thinking_level",
                err,
            });
        }
        try {
            sideSession.setActiveToolsByName(mainSession.getActiveToolNames());
        }
        catch (err) {
            this.options.onWarn?.("Failed to sync side-session tool selection", {
                operation: "sync_side_session_from_main.tools",
                err,
            });
        }
    }
    async recreate(chatJid) {
        await this.disposeEntry(this.options.pool, chatJid, "recreate.dispose_main_session");
        await this.disposeEntry(this.options.sidePool, chatJid, "recreate.dispose_side_session", true);
    }
    /**
     * Remove any pending (not-yet-realized) prewarm for a chat. Used by
     * branch prune so a queued warmup cannot materialize a blank runtime
     * (or realize the deferred seed) for an archived chat.
     */
    cancelPrewarm(chatJid) {
        const normalized = String(chatJid || "").trim();
        if (!normalized)
            return;
        this.queuedPrewarms.delete(normalized);
        const idx = this.prewarmQueue.findIndex((entry) => entry.chatJid === normalized);
        if (idx >= 0)
            this.prewarmQueue.splice(idx, 1);
    }
    prewarm(chatJid, options = {}) {
        const normalizedChatJid = String(chatJid || "").trim();
        if (!normalizedChatJid)
            return false;
        if (this.getBlockingInvalidSeedError(normalizedChatJid))
            return false;
        if (this.options.pool.has(normalizedChatJid) && !hasDeferredBranchSeed(normalizedChatJid))
            return false;
        if (this.prewarmInFlight.has(normalizedChatJid) || this.queuedPrewarms.has(normalizedChatJid))
            return false;
        const now = Date.now();
        this.prunePrewarmCooldownEntries(now);
        const lastQueuedAt = this.prewarmCooldownByChat.get(normalizedChatJid) ?? 0;
        if (!options.priority && now - lastQueuedAt < 30_000)
            return false;
        const mode = options.mode === "lightweight" ? "lightweight" : "full";
        this.queuedPrewarms.add(normalizedChatJid);
        this.prewarmCooldownByChat.set(normalizedChatJid, now);
        if (options.priority) {
            this.prewarmQueue.unshift({ chatJid: normalizedChatJid, mode });
        }
        else {
            this.prewarmQueue.push({ chatJid: normalizedChatJid, mode });
        }
        this.drainPrewarmQueue();
        return true;
    }
    getInstrumentationSnapshot() {
        return {
            branchSeedRealizationsInFlight: this.branchSeedRealizationInFlight.size,
            createInFlight: this.createInFlight.size,
            invalidDeferredSeedErrors: this.invalidDeferredBranchSeedErrors.size,
            prewarmInFlight: this.prewarmInFlight.size,
            queuedPrewarms: this.queuedPrewarms.size,
            prewarmQueueLength: this.prewarmQueue.length,
            prewarmCooldowns: this.prewarmCooldownByChat.size,
        };
    }
    async shutdown() {
        for (const jid of [...this.options.pool.keys()]) {
            await this.disposeEntry(this.options.pool, jid, "shutdown.dispose_main_session");
        }
        for (const jid of [...this.options.sidePool.keys()]) {
            await this.disposeEntry(this.options.sidePool, jid, "shutdown.dispose_side_session", true);
        }
        this.options.pool.clear();
        this.options.sidePool.clear();
    }
    async disposeEntry(map, chatJid, operation, side = false) {
        const entry = map.get(chatJid);
        if (!entry)
            return;
        try {
            await entry.runtime.dispose();
            this.options.onInfo?.(side ? "Disposed side session" : "Disposed session", {
                operation,
                chatJid,
            });
        }
        catch (err) {
            this.options.onError?.(side ? "Failed to dispose side session" : "Failed to dispose session", {
                operation,
                chatJid,
                err,
            });
        }
        finally {
            map.delete(chatJid);
        }
    }
    evictIdle(options) {
        const now = Date.now();
        const { mainIdleTtlMs, sideIdleTtlMs } = options;
        for (const [jid, entry] of this.options.pool) {
            if (this.shouldKeepSessionCached(entry.runtime.session, now, entry)) {
                continue;
            }
            if (now - entry.lastUsed > mainIdleTtlMs) {
                this.disposeCachedMainRuntime(jid, entry.runtime, "evict_idle.main_session");
            }
        }
        this.enforceMainSessionPoolLimit();
        for (const [jid, entry] of this.options.sidePool) {
            if (this.shouldKeepSessionCached(entry.runtime.session, now, entry)) {
                continue;
            }
            if (now - entry.lastUsed > sideIdleTtlMs) {
                this.options.onInfo?.("Evicting idle side session", {
                    operation: "evict_idle.side_session",
                    chatJid: jid,
                });
                this.options.sidePool.delete(jid);
                this.disposeRuntimeOnce(entry.runtime, "Failed to dispose evicted side session", {
                    operation: "evict_idle.side_session",
                    chatJid: jid,
                });
            }
        }
    }
    shouldKeepSessionCached(session, now, entry) {
        if (session.isStreaming || session.isBashRunning || session.isCompacting) {
            entry.lastUsed = now;
            return true;
        }
        return false;
    }
    enforceMainSessionPoolLimit(options = {}) {
        const maxSize = this.options.mainSessionMaxSize ?? 0;
        if (!Number.isFinite(maxSize) || maxSize <= 0 || this.options.pool.size <= maxSize)
            return;
        const protectedChatJids = new Set(Array.isArray(options.protectedChatJids)
            ? options.protectedChatJids.map((chatJid) => String(chatJid || "").trim()).filter(Boolean)
            : []);
        const candidates = [...this.options.pool.entries()]
            .filter(([chatJid, entry]) => !protectedChatJids.has(chatJid) && !this.shouldKeepSessionCached(entry.runtime.session, Date.now(), entry))
            .sort((left, right) => left[1].lastUsed - right[1].lastUsed);
        while (this.options.pool.size > maxSize && candidates.length > 0) {
            const next = candidates.shift();
            if (!next)
                break;
            const [chatJid, entry] = next;
            if (this.options.pool.get(chatJid)?.runtime !== entry.runtime)
                continue;
            this.disposeCachedMainRuntime(chatJid, entry.runtime, "evict_idle.main_session_pool_limit");
        }
    }
    disposeCachedMainRuntime(chatJid, runtime, operation) {
        if (this.options.pool.get(chatJid)?.runtime !== runtime)
            return;
        this.options.onInfo?.("Evicting cached main session", {
            operation,
            chatJid,
            poolSize: this.options.pool.size,
            maxSize: this.options.mainSessionMaxSize ?? null,
        });
        this.options.pool.delete(chatJid);
        this.disposeRuntimeOnce(runtime, "Failed to dispose evicted session", {
            operation,
            chatJid,
        });
    }
    disposeRuntimeOnce(runtime, warnMessage, details) {
        const pendingDispose = this.runtimeDisposeInFlight.get(runtime);
        if (pendingDispose)
            return;
        const task = (async () => {
            try {
                await runtime.dispose();
            }
            catch (err) {
                this.options.onWarn?.(warnMessage, {
                    ...details,
                    err,
                });
            }
        })();
        this.runtimeDisposeInFlight.set(runtime, task);
        void task.finally(() => {
            if (this.runtimeDisposeInFlight.get(runtime) === task) {
                this.runtimeDisposeInFlight.delete(runtime);
            }
        });
    }
    async applyDefaultModel(session) {
        const provider = this.options.settingsManager.getDefaultProvider();
        const modelId = this.options.settingsManager.getDefaultModel();
        if (!provider || !modelId)
            return;
        await this.applyResolvedModel(session, { provider, modelId }, "apply_default_model");
    }
    async realizeDeferredBranchSeed(chatJid, runtime) {
        const pending = this.branchSeedRealizationInFlight.get(chatJid);
        if (pending)
            return await pending;
        const task = (async () => {
            let seed;
            try {
                seed = claimDeferredBranchSeed(chatJid);
            }
            catch (error) {
                if (error instanceof Error && error.message.startsWith("Invalid deferred branch seed for ")) {
                    this.invalidDeferredBranchSeedErrors.set(chatJid, {
                        error,
                        fingerprint: getDeferredBranchSeedFingerprint(chatJid),
                    });
                }
                throw error;
            }
            if (!seed)
                return false;
            try {
                const result = await runtime.newSession({
                    ...(seed.parentSession ? { parentSession: seed.parentSession } : {}),
                    setup: async (sessionManager) => {
                        seedSessionManagerFromDeferredBranchSeed(sessionManager, seed);
                    },
                });
                if (result.cancelled) {
                    throw new Error("Deferred branch seed was cancelled.");
                }
                const session = runtime.session;
                await this.applyResolvedModel(session, seed.model, "realize_deferred_branch_seed");
                try {
                    if (seed.thinkingLevel) {
                        session.setThinkingLevel(seed.thinkingLevel);
                    }
                }
                catch (err) {
                    this.options.onWarn?.("Failed to restore deferred branch thinking level", {
                        operation: "realize_deferred_branch_seed.thinking_level",
                        chatJid,
                        err,
                    });
                }
                try {
                    // Prefer the current branch record's agent_name over the seed's
                    // captured sessionName: if the user renamed the branch between fork
                    // and realization, the DB has the new name and applying the stale
                    // seed value would overwrite the rename on first warmup.
                    const liveAgentName = getChatBranchByChatJid(chatJid)?.agent_name?.trim() || "";
                    const sessionNameToApply = liveAgentName || seed.sessionName?.trim() || "";
                    if (sessionNameToApply) {
                        session.setSessionName(sessionNameToApply);
                    }
                }
                catch (err) {
                    this.options.onWarn?.("Failed to restore deferred branch session name", {
                        operation: "realize_deferred_branch_seed.session_name",
                        chatJid,
                        err,
                    });
                }
                forcePersistSessionFile(session);
                finalizeClaimedDeferredBranchSeed(chatJid);
                this.invalidDeferredBranchSeedErrors.delete(chatJid);
                return true;
            }
            catch (error) {
                restoreClaimedDeferredBranchSeed(chatJid);
                throw error;
            }
        })().finally(() => {
            this.branchSeedRealizationInFlight.delete(chatJid);
        });
        this.branchSeedRealizationInFlight.set(chatJid, task);
        return await task;
    }
    async applyResolvedModel(session, model, operation) {
        if (!model)
            return;
        const current = session.model;
        if (current && current.provider === model.provider && current.id === model.modelId)
            return;
        const sessionRegistry = session.modelRegistry ?? this.options.modelRegistry;
        const resolved = sessionRegistry.find(model.provider, model.modelId);
        if (!resolved)
            return;
        const setModel = session.setModel;
        if (typeof setModel !== "function")
            return;
        try {
            await setModel.call(session, resolved);
        }
        catch (err) {
            this.options.onWarn?.("Failed to restore model", {
                operation,
                model: `${model.provider}/${model.modelId}`,
                err,
            });
        }
    }
    drainPrewarmQueue() {
        if (this.prewarmLoopActive)
            return;
        this.prewarmLoopActive = true;
        void (async () => {
            try {
                while (this.prewarmQueue.length > 0) {
                    const next = this.prewarmQueue.shift();
                    if (!next)
                        continue;
                    const { chatJid, mode } = next;
                    this.queuedPrewarms.delete(chatJid);
                    if (this.prewarmInFlight.has(chatJid))
                        continue;
                    if (this.options.pool.has(chatJid) && !hasDeferredBranchSeed(chatJid))
                        continue;
                    this.prewarmInFlight.add(chatJid);
                    try {
                        if (mode === "lightweight" && !hasDeferredBranchSeed(chatJid)) {
                            await (this.options.lightweightPrewarmSession ?? ((jid) => lightweightPrewarmSession(jid, {
                                getSessionExtensionFactories: this.options.getSessionExtensionFactories,
                            })))(chatJid);
                            this.options.onInfo?.("Lightweight-prewarmed chat session", {
                                operation: "prewarm_session.lightweight",
                                chatJid,
                            });
                        }
                        else {
                            await this.getOrCreate(chatJid);
                            this.options.onInfo?.("Prewarmed chat session", {
                                operation: "prewarm_session",
                                chatJid,
                            });
                        }
                    }
                    catch (err) {
                        this.options.onWarn?.("Failed to prewarm chat session", {
                            operation: mode === "lightweight" ? "prewarm_session.lightweight" : "prewarm_session",
                            chatJid,
                            err,
                        });
                    }
                    finally {
                        this.prewarmInFlight.delete(chatJid);
                    }
                }
            }
            finally {
                this.prewarmLoopActive = false;
                if (this.prewarmQueue.length > 0) {
                    this.drainPrewarmQueue();
                }
            }
        })();
    }
    async disposeMainRuntimeAfterError(chatJid, runtime, operation) {
        if (this.options.pool.get(chatJid)?.runtime === runtime) {
            this.options.pool.delete(chatJid);
        }
        const pendingDispose = this.runtimeDisposeInFlight.get(runtime);
        if (pendingDispose) {
            await pendingDispose;
            return;
        }
        const task = (async () => {
            try {
                await runtime.dispose();
            }
            catch (disposeErr) {
                this.options.onWarn?.("Failed to dispose session after initialization error", {
                    operation,
                    chatJid,
                    err: disposeErr,
                });
            }
        })();
        this.runtimeDisposeInFlight.set(runtime, task);
        await task;
        if (this.runtimeDisposeInFlight.get(runtime) === task) {
            this.runtimeDisposeInFlight.delete(runtime);
        }
    }
}
