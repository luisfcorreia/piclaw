/**
 * agent-pool/service-factory.ts – Constructor wiring for AgentPool helper services.
 */
import { getAttachmentRegistry } from "./attachments.js";
import { getSshConfig } from "../db.js";
import { createChatSshCoreExtension, resolveSshCoreConfigFromChatConfig } from "../extensions/ssh-core.js";
import { AgentBranchManager } from "./branch-manager.js";
import { AgentRuntimeFacade } from "./runtime-facade.js";
import { AgentSessionBinder } from "./session-binder.js";
import { AgentSessionManager } from "./session-manager.js";
import { AgentToolFactory } from "./tool-factory.js";
import { AgentTurnCoordinator } from "./turn-coordinator.js";
import { lightweightPrewarmSession } from "./session.js";
import { recordMessageUsage } from "./usage.js";
async function resolveSessionExtensionFactories(chatJid) {
    let sshConfig;
    try {
        sshConfig = getSshConfig(chatJid);
    }
    catch (error) {
        if (!(error instanceof Error) ||
            (error.message !== "Database not initialized" && error.message !== "Cannot use a closed database")) {
            throw error;
        }
    }
    return [createChatSshCoreExtension(chatJid, sshConfig ? resolveSshCoreConfigFromChatConfig(sshConfig) : null)];
}
/**
 * Assemble the extracted helper services used by AgentPool.
 * Keeps constructor wiring in one place so AgentPool itself remains a thin façade.
 */
export function createAgentPoolServices(options) {
    const attachments = getAttachmentRegistry();
    const sessionBinder = new AgentSessionBinder({
        pool: options.pool,
        onError: options.onError,
    });
    const toolFactory = new AgentToolFactory({
        workspaceDir: options.workspaceDir,
        bashOperations: options.bashOperations,
    });
    const turnCoordinator = new AgentTurnCoordinator({
        takeAttachments: (chatJid) => attachments.take(chatJid),
        touchSession: (chatJid) => {
            const entry = options.pool.get(chatJid);
            if (entry)
                entry.lastUsed = Date.now();
        },
        recordMessageUsage,
        onInfo: options.onInfo,
        onWarn: options.onWarn,
        onError: options.onError,
    });
    let sessionManager;
    const runtimeFacade = new AgentRuntimeFacade({
        pool: options.pool,
        getOrCreateRuntime: (chatJid) => sessionManager.getOrCreate(chatJid),
        modelRegistry: options.modelRegistry,
        authStorage: options.authStorage,
        clearAttachments: (chatJid) => attachments.clear(chatJid),
        refreshRuntime: (chatJid, runtime) => sessionManager.refreshRuntime(chatJid, runtime),
        onWarn: options.onWarn,
        onError: options.onError,
    });
    const branchManager = new AgentBranchManager({
        pool: options.pool,
        sidePool: options.sidePool,
        activeForkBaseLeafByChat: options.activeForkBaseLeafByChat,
        getOrCreateRuntime: (chatJid) => sessionManager.getOrCreate(chatJid),
        refreshRuntime: (chatJid, runtime) => sessionManager.refreshRuntime(chatJid, runtime),
        isActive: (chatJid) => runtimeFacade.isActive(chatJid),
        scheduleSessionWarmup: (chatJid) => sessionManager.prewarm(chatJid),
        cancelSessionWarmup: (chatJid) => sessionManager.cancelPrewarm(chatJid),
        onWarn: options.onWarn,
    });
    sessionManager = new AgentSessionManager({
        pool: options.pool,
        sidePool: options.sidePool,
        ...(options.createSession ? { createSession: options.createSession } : {}),
        ...(options.createSideSession ? { createSideSession: options.createSideSession } : {}),
        authStorage: options.authStorage,
        modelRegistry: options.modelRegistry,
        settingsManager: options.settingsManager,
        mainSessionMaxSize: options.mainSessionMaxSize,
        lightweightPrewarmSession: (chatJid) => lightweightPrewarmSession(chatJid, {
            getSessionExtensionFactories: (targetChatJid) => resolveSessionExtensionFactories(targetChatJid),
        }),
        createDefaultTools: () => toolFactory.createDefaultTools(),
        createCustomToolOverrides: () => toolFactory.createCustomToolOverrides(),
        getSessionExtensionFactories: (chatJid) => resolveSessionExtensionFactories(chatJid),
        bindSession: (runtime, chatJid) => sessionBinder.bindSession(runtime, chatJid),
        ensureBranchRegistration: (chatJid, session) => {
            branchManager.ensureBranchRegistration(chatJid, session);
        },
        onInfo: options.onInfo,
        onWarn: options.onWarn,
        onError: options.onError,
    });
    return {
        attachments,
        sessionBinder,
        toolFactory,
        turnCoordinator,
        sessionManager,
        runtimeFacade,
        branchManager,
    };
}
