/**
 * agent-pool.ts – Manages per-chat pi-agent sessions and orchestrates agent runs.
 *
 * The AgentPool is the central coordinator between inbound messages and the
 * pi-coding-agent SDK. It:
 *   - Maintains a map of chat JID → AgentSession (lazy-initialised).
 *   - Provides runAgent() which prompts the agent, streams events, records
 *     token usage, detects auto-compaction needs, and returns the result.
 *   - Handles slash commands by delegating to agent-pool/slash-command.ts.
 *   - Forwards agent-control commands (model switch, session management, etc.)
 *     to the agent-control module.
 *   - Manages session lifecycle: save/restore position (for scheduled tasks),
 *     clear sessions, reload resources.
 *   - Integrates the attachment registry for file-delivery tools.
 *
 * Consumers:
 *   - runtime.ts / runtime/message-loop.ts creates the AgentPool at startup
 *     and calls runAgent() for each inbound message.
 *   - task-scheduler.ts calls runAgent() for scheduled task execution.
 *   - channels/web.ts uses applyControlCommand() and agent status queries.
 *   - agent-control handlers call methods on AgentPool for session/model ops.
 */
import { mkdirSync } from "fs";
import { join } from "path";
import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir, } from "@mariozechner/pi-coding-agent";
import { SESSIONS_DIR, WORKSPACE_DIR } from "./core/config.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { runSidePrompt as runSidePromptInternal } from "./agent-pool/side-prompt-runner.js";
import { runAgentPrompt } from "./agent-pool/run-agent-orchestrator.js";
import { createAgentPoolServices } from "./agent-pool/service-factory.js";
import { deleteSshConfig, getSshConfig, listRecentChatJids, upsertSshConfig, } from "./db.js";
import { setSshToolHandlers } from "./extensions/ssh.js";
import { setProxmoxToolHandlers } from "./extensions/proxmox.js";
import { setPortainerToolHandlers } from "./extensions/portainer.js";
import { clearStoredProxmoxConfig, getStoredProxmoxConfig, requestStoredProxmoxApi, runStoredProxmoxWorkflow, setStoredProxmoxConfig, } from "./proxmox/handlers.js";
import { clearStoredPortainerConfig, getStoredPortainerConfig, requestStoredPortainerApi, runStoredPortainerWorkflow, setStoredPortainerConfig, } from "./portainer/handlers.js";
import { applyLiveSshConfig, clearLiveSshConfig, hasLiveChatSshSession, resolveSshCoreConfigFromChatConfig } from "./extensions/ssh-core.js";
import { createLogger } from "./utils/logger.js";
const log = createLogger("agent-pool");
/** How long (ms) an idle main session stays cached before being disposed. */
const DEFAULT_MAIN_IDLE_TTL = 3 * 60 * 1000; // 3 minutes
/** How long (ms) an idle side session stays cached before being disposed. */
const DEFAULT_SIDE_IDLE_TTL = 60 * 1000; // 1 minute
const DEFAULT_CLEANUP_INTERVAL = 30 * 1000; // check every 30 seconds
const DEFAULT_MAIN_SESSION_POOL_MAX_SIZE = 2;
const DEFAULT_MEMORY_PRESSURE_RSS_BYTES = 512 * 1024 * 1024;
const DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL = 30 * 1000;
const DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE = 1;
function parsePositiveMs(value, fallback) {
    const parsed = Number.parseInt(String(value || "").trim(), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
function parseNonNegativeInt(value, fallback) {
    const parsed = Number.parseInt(String(value || "").trim(), 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}
const MAIN_IDLE_TTL = parsePositiveMs(process.env.PICLAW_MAIN_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS, DEFAULT_MAIN_IDLE_TTL);
const SIDE_IDLE_TTL = parsePositiveMs(process.env.PICLAW_SIDE_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS, DEFAULT_SIDE_IDLE_TTL);
const CLEANUP_INTERVAL = parsePositiveMs(process.env.PICLAW_SESSION_CLEANUP_INTERVAL_MS, DEFAULT_CLEANUP_INTERVAL);
const MAIN_SESSION_POOL_MAX_SIZE = parseNonNegativeInt(process.env.PICLAW_MAIN_SESSION_POOL_MAX_SIZE ?? process.env.PICLAW_SESSION_POOL_MAX_SIZE, DEFAULT_MAIN_SESSION_POOL_MAX_SIZE);
const MEMORY_PRESSURE_RSS_BYTES = parseNonNegativeInt(process.env.PICLAW_MAIN_SESSION_PRESSURE_RSS_BYTES, DEFAULT_MEMORY_PRESSURE_RSS_BYTES);
const MEMORY_PRESSURE_MAIN_IDLE_TTL = parsePositiveMs(process.env.PICLAW_MAIN_SESSION_PRESSURE_IDLE_TTL_MS, DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL);
const MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE = parseNonNegativeInt(process.env.PICLAW_MAIN_SESSION_PRESSURE_POOL_MAX_SIZE, DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE);
const DEFAULT_PROVIDER_RATE_LIMIT_MAX_RETRIES = 5;
const DEFAULT_PROVIDER_RATE_LIMIT_BASE_DELAY_MS = 5000;
/**
 * Manages a pool of persistent AgentSession instances keyed by chat JID.
 *
 * First invocation for a JID pays the warm-up cost (resource discovery,
 * model initialisation). Subsequent calls reuse the live session – no
 * process-spawn overhead, conversation context already loaded.
 */
export class AgentPool {
    pool = new Map();
    sidePool = new Map();
    activeForkBaseLeafByChat = new Map();
    cleanupTimer = null;
    shuttingDown = false;
    memoryPressureActive = false;
    // Shared across all sessions (expensive to create, safe to reuse)
    authStorage;
    modelRegistry;
    settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
    logsDir = join(WORKSPACE_DIR, "logs");
    createSession;
    createSideSession;
    bashOperations = createTrackedBashOperations();
    attachments;
    sessionBinder;
    toolFactory;
    turnCoordinator;
    sessionManager;
    branchManager;
    runtimeFacade;
    sideStreamSimple;
    constructor(options = {}) {
        this.createSession = options.createSession;
        this.createSideSession = options.createSideSession;
        this.authStorage = AuthStorage.create();
        this.modelRegistry = options.modelRegistry ?? ModelRegistry.create(this.authStorage);
        this.applyRateLimitRetryDefaults();
        ({
            attachments: this.attachments,
            sessionBinder: this.sessionBinder,
            toolFactory: this.toolFactory,
            turnCoordinator: this.turnCoordinator,
            sessionManager: this.sessionManager,
            runtimeFacade: this.runtimeFacade,
            branchManager: this.branchManager,
        } = createAgentPoolServices({
            pool: this.pool,
            sidePool: this.sidePool,
            activeForkBaseLeafByChat: this.activeForkBaseLeafByChat,
            authStorage: this.authStorage,
            modelRegistry: this.modelRegistry,
            settingsManager: this.settingsManager,
            workspaceDir: WORKSPACE_DIR,
            mainSessionMaxSize: MAIN_SESSION_POOL_MAX_SIZE,
            bashOperations: this.bashOperations,
            createSession: this.createSession,
            createSideSession: this.createSideSession,
            onInfo: (message, details) => log.info(message, details),
            onWarn: (message, details) => log.warn(message, details),
            onError: (message, details) => log.error(message, details),
        }));
        this.sideStreamSimple = options.sideStreamSimple;
        setSshToolHandlers({
            get: (chatJid) => this.getSshConfig(chatJid),
            set: (chatJid, config) => this.setSshConfig(chatJid, config),
            clear: (chatJid) => this.clearSshConfig(chatJid),
        });
        setProxmoxToolHandlers({
            get: (chatJid) => getStoredProxmoxConfig(chatJid),
            set: (chatJid, config) => setStoredProxmoxConfig(chatJid, config),
            clear: (chatJid) => clearStoredProxmoxConfig(chatJid),
            request: (chatJid, input) => requestStoredProxmoxApi(chatJid, input),
            workflow: (chatJid, input) => runStoredProxmoxWorkflow(chatJid, input),
        });
        setPortainerToolHandlers({
            get: (chatJid) => getStoredPortainerConfig(chatJid),
            set: (chatJid, config) => setStoredPortainerConfig(chatJid, config),
            clear: (chatJid) => clearStoredPortainerConfig(chatJid),
            request: (chatJid, input) => requestStoredPortainerApi(chatJid, input),
            workflow: (chatJid, input) => runStoredPortainerWorkflow(chatJid, input),
        });
        mkdirSync(SESSIONS_DIR, { recursive: true });
        mkdirSync(this.logsDir, { recursive: true });
        this.cleanupTimer = setInterval(() => this.evictIdle(), CLEANUP_INTERVAL);
    }
    applyRateLimitRetryDefaults() {
        const settingsManager = this.settingsManager;
        if (typeof settingsManager.getRetrySettings !== "function")
            return;
        const originalGetRetrySettings = settingsManager.getRetrySettings.bind(settingsManager);
        settingsManager.getRetrySettings = () => {
            const settings = originalGetRetrySettings();
            return {
                ...settings,
                maxRetries: Math.max(settings.maxRetries ?? 0, DEFAULT_PROVIDER_RATE_LIMIT_MAX_RETRIES),
                baseDelayMs: Math.max(settings.baseDelayMs ?? 0, DEFAULT_PROVIDER_RATE_LIMIT_BASE_DELAY_MS),
            };
        };
    }
    setSessionBinder(binder) {
        this.sessionBinder.setBinder(binder);
    }
    /** Run a prompt against the persistent session for `chatJid`. */
    async runAgent(prompt, chatJid, options = {}) {
        return runAgentPrompt(prompt, chatJid, options, {
            getOrCreateRuntime: (nextChatJid) => this.getOrCreateRuntime(nextChatJid),
            turnCoordinator: this.turnCoordinator,
            clearAttachments: (nextChatJid) => this.attachments.clear(nextChatJid),
            takeAttachments: (nextChatJid) => this.attachments.take(nextChatJid),
            logsDir: this.logsDir,
            setActiveForkBaseLeaf: (nextChatJid, leafId) => this.activeForkBaseLeafByChat.set(nextChatJid, leafId),
            clearActiveForkBaseLeaf: (nextChatJid) => {
                this.activeForkBaseLeafByChat.delete(nextChatJid);
            },
            onInfo: (message, details) => log.info(message, details),
            onWarn: (message, details) => log.warn(message, details),
            onError: (message, details) => log.error(message, details),
        });
    }
    async applyControlCommand(chatJid, command) {
        return this.runtimeFacade.applyControlCommand(chatJid, command);
    }
    async getCurrentModelLabel(chatJid) {
        return this.runtimeFacade.getCurrentModelLabel(chatJid);
    }
    async runSidePrompt(chatJid, prompt, options = {}) {
        return runSidePromptInternal(chatJid, prompt, options, {
            getOrCreate: (nextChatJid) => this.getOrCreate(nextChatJid),
            getOrCreateSideRuntime: (nextChatJid) => this.getOrCreateSideRuntime(nextChatJid),
            syncSideSessionFromMain: (mainSession, sideRuntime) => this.syncSideSessionFromMain(mainSession, sideRuntime),
            modelRegistry: this.modelRegistry,
            sideStreamSimple: this.sideStreamSimple,
            onWarn: (message, details) => log.warn(message, details),
        });
    }
    /** Return available model labels and current model for a chat session. */
    async getAvailableModels(chatJid) {
        return this.runtimeFacade.getAvailableModels(chatJid);
    }
    /** Return the current context token usage for a chat session, or null if unknown. */
    async getContextUsageForChat(chatJid) {
        return this.runtimeFacade.getContextUsageForChat(chatJid);
    }
    scheduleRecentChatWarmup(options = {}) {
        if (this.shuttingDown)
            return [];
        const targetCount = Math.max(1, Math.min(8, Math.trunc(options.limit ?? 3) || 3));
        const excluded = new Set(Array.isArray(options.excludeChatJids)
            ? options.excludeChatJids.map((jid) => String(jid || "").trim()).filter(Boolean)
            : []);
        const cooldownByChat = (this.__piclawRecentWarmupCooldownByChat ||= new Map());
        const now = Date.now();
        for (const [chatJid, lastQueuedAt] of cooldownByChat) {
            if (now - lastQueuedAt >= 30_000) {
                cooldownByChat.delete(chatJid);
            }
        }
        const scheduled = [];
        const seen = new Set();
        let fetchLimit = Math.min(100, Math.max(targetCount * 4, targetCount));
        while (scheduled.length < targetCount) {
            const candidates = listRecentChatJids(fetchLimit, {
                excludeChatJids: [...excluded, ...seen],
            });
            for (const chatJid of candidates) {
                if (seen.has(chatJid))
                    continue;
                seen.add(chatJid);
                if (excluded.has(chatJid))
                    continue;
                if (this.pool.has(chatJid))
                    continue;
                if (now - (cooldownByChat.get(chatJid) ?? 0) < 30_000)
                    continue;
                scheduled.push(chatJid);
                if (scheduled.length >= targetCount)
                    break;
            }
            if (scheduled.length >= targetCount || fetchLimit >= 100 || candidates.length < fetchLimit) {
                break;
            }
            const nextFetchLimit = Math.min(100, fetchLimit * 2);
            if (nextFetchLimit === fetchLimit) {
                break;
            }
            fetchLimit = nextFetchLimit;
        }
        // Only record a cooldown / return chats that actually entered the prewarm
        // queue. prewarm() may reject a candidate (already queued, in flight, or
        // within its per-chat cooldown) and we must not consume a slot or suppress
        // backfill for those.
        const actuallyScheduled = [];
        for (const chatJid of scheduled) {
            if (this.sessionManager.prewarm(chatJid, { mode: "lightweight" })) {
                cooldownByChat.set(chatJid, now);
                actuallyScheduled.push(chatJid);
            }
        }
        return actuallyScheduled;
    }
    scheduleChatWarmup(chatJid, options = {}) {
        return this.sessionManager.prewarm(chatJid, options);
    }
    getSessionTreeForChat(chatJid) {
        return this.runtimeFacade.getSessionTreeForChat(chatJid);
    }
    /**
     * Save the current session tree position so it can be restored later.
     * Used by the scheduler to isolate task execution in a side branch.
     */
    async saveSessionPosition(chatJid) {
        return this.runtimeFacade.saveSessionPosition(chatJid);
    }
    /**
     * Restore the session tree to a previously saved position.
     * Navigates back to the saved leaf, leaving the task's output in a side branch.
     */
    async restoreSessionPosition(chatJid, leafId) {
        return this.runtimeFacade.restoreSessionPosition(chatJid, leafId);
    }
    async disposeChatSession(chatJid) {
        await this.sessionManager.recreate(chatJid);
    }
    hasProviderModels(provider) {
        return this.runtimeFacade.hasProviderModels(provider);
    }
    registerModelProvider(providerName, config) {
        this.runtimeFacade.registerModelProvider(providerName, config);
    }
    resolveModelInput(input) {
        return this.runtimeFacade.resolveModelInput(input);
    }
    isStreaming(chatJid) {
        return this.runtimeFacade.isStreaming(chatJid);
    }
    isActive(chatJid) {
        return this.runtimeFacade.isActive(chatJid);
    }
    ensureBranchRegistration(chatJid, session) {
        return this.branchManager.ensureBranchRegistration(chatJid, session);
    }
    async renameChatBranch(chatJid, options = {}) {
        return this.branchManager.renameChatBranch(chatJid, options);
    }
    async pruneChatBranch(chatJid) {
        return this.branchManager.pruneChatBranch(chatJid);
    }
    async restoreChatBranch(chatJid, options = {}) {
        return this.branchManager.restoreChatBranch(chatJid, options);
    }
    async createForkedChatBranch(sourceChatJid, options = {}) {
        return this.branchManager.createForkedChatBranch(sourceChatJid, options);
    }
    listActiveChats() {
        return this.branchManager.listActiveChats();
    }
    listKnownChats(rootChatJid, options) {
        return this.branchManager.listKnownChats(rootChatJid, options);
    }
    getMemoryInstrumentationSnapshot() {
        return {
            cachedMainSessions: this.pool.size,
            cachedSideSessions: this.sidePool.size,
            activeForkBaseLeaves: this.activeForkBaseLeafByChat.size,
            activeChats: this.branchManager.listActiveChats().length,
            sessionManager: this.sessionManager.getInstrumentationSnapshot(),
        };
    }
    findActiveChatByAgentName(agentName) {
        return this.branchManager.findActiveChatByAgentName(agentName);
    }
    findChatByAgentName(agentName) {
        return this.branchManager.findChatByAgentName(agentName);
    }
    getAgentHandleForChat(chatJid) {
        return this.branchManager.getAgentHandleForChat(chatJid);
    }
    async queueStreamingMessage(chatJid, text, behavior) {
        return this.runtimeFacade.queueStreamingMessage(chatJid, text, behavior);
    }
    /** Remove one queued follow-up message (first content match) from an active session queue. */
    async removeQueuedFollowupMessage(chatJid, queuedContent) {
        return this.runtimeFacade.removeQueuedFollowupMessage(chatJid, queuedContent);
    }
    /** Execute a raw slash command in the AgentSession (extension commands). */
    async applySlashCommand(chatJid, rawText) {
        return this.runtimeFacade.applySlashCommand(chatJid, rawText);
    }
    getSshConfig(chatJid) {
        return getSshConfig(chatJid);
    }
    async setSshConfig(chatJid, config) {
        const apply_timing = hasLiveChatSshSession(chatJid) ? "immediate" : "next_session";
        if (apply_timing === "immediate") {
            await applyLiveSshConfig(chatJid, resolveSshCoreConfigFromChatConfig(config));
        }
        const next = upsertSshConfig({ chat_jid: chatJid, ...config });
        return { config: next, apply_timing };
    }
    async clearSshConfig(chatJid) {
        const apply_timing = hasLiveChatSshSession(chatJid) ? "immediate" : "next_session";
        const deleted = deleteSshConfig(chatJid);
        if (apply_timing === "immediate") {
            await clearLiveSshConfig(chatJid);
        }
        return { deleted, apply_timing };
    }
    /** Gracefully shut down all sessions. */
    async shutdown() {
        this.shuttingDown = true;
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        await this.sessionManager.shutdown();
    }
    /** Return an existing session for read-only introspection, or create one if needed. */
    async getSessionForIntrospection(chatJid) {
        return this.getOrCreate(chatJid);
    }
    // ── internal ────────────────────────────────────────────
    async getOrCreateRuntime(chatJid) {
        const runtime = await this.sessionManager.getOrCreate(chatJid);
        const pressure = this.getMemoryPressureMode();
        if (pressure.active && !this.shuttingDown) {
            this.sessionManager.evictIdle({
                mainIdleTtlMs: pressure.mainIdleTtlMs,
                sideIdleTtlMs: SIDE_IDLE_TTL,
                mainSessionMaxSizeOverride: pressure.mainSessionMaxSizeOverride,
            });
        }
        return runtime;
    }
    async getOrCreate(chatJid) {
        return (await this.getOrCreateRuntime(chatJid)).session;
    }
    async getOrCreateSideRuntime(chatJid) {
        return this.sessionManager.getOrCreateSide(chatJid);
    }
    async syncSideSessionFromMain(mainSession, sideRuntime) {
        return this.sessionManager.syncSideSessionFromMain(mainSession, sideRuntime);
    }
    getMemoryPressureMode() {
        const rssBytes = process.memoryUsage.rss();
        const active = MEMORY_PRESSURE_RSS_BYTES > 0 && rssBytes >= MEMORY_PRESSURE_RSS_BYTES;
        if (this.memoryPressureActive !== active) {
            this.memoryPressureActive = active;
            log.info(active ? "Memory pressure mode enabled" : "Memory pressure mode cleared", {
                operation: "memory_pressure.mode_change",
                rssBytes,
                thresholdBytes: MEMORY_PRESSURE_RSS_BYTES,
                mainIdleTtlMs: active ? MEMORY_PRESSURE_MAIN_IDLE_TTL : MAIN_IDLE_TTL,
                mainSessionPoolMaxSize: active ? MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE : MAIN_SESSION_POOL_MAX_SIZE,
            });
        }
        return {
            active,
            mainIdleTtlMs: active ? Math.min(MAIN_IDLE_TTL, MEMORY_PRESSURE_MAIN_IDLE_TTL) : MAIN_IDLE_TTL,
            mainSessionMaxSizeOverride: active ? MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE : undefined,
        };
    }
    evictIdle() {
        const pressure = this.getMemoryPressureMode();
        this.sessionManager.evictIdle({
            mainIdleTtlMs: pressure.mainIdleTtlMs,
            sideIdleTtlMs: SIDE_IDLE_TTL,
            mainSessionMaxSizeOverride: pressure.mainSessionMaxSizeOverride,
        });
    }
}
