import { useCallback, useEffect } from '../vendor/preact-htm.js';
import {
  applyModelStatePayload,
  loadAgentsBootstrap,
  refreshActiveChatAgents as refreshActiveChatAgentsState,
  refreshCurrentChatBranches as refreshCurrentChatBranchesState,
  refreshModelState as refreshModelStateForChat,
  updateAgentProfileFromEvent,
  updateUserProfileFromEvent,
} from './app-auth-bootstrap.js';
import { refreshModelAndQueueState as refreshModelAndQueueStateBundle } from './app-status-refresh-orchestration.js';
import { applyStoredSidebarWidth } from './app-boot-load-orchestration.js';

type StateSetter<T> = (next: T | ((prev: T) => T)) => void;

interface RefBox<T> {
  current: T;
}

interface UseChatRefreshLifecycleOptions {
  getAgents: () => Promise<any>;
  setAgents: StateSetter<Record<string, unknown>>;
  setUserProfile: StateSetter<any>;
  applyBranding: (name: string, avatarUrl: string, avatarVersion?: string | null) => void;
  readStoredNumber: (key: string, fallback?: number | null) => number | null;
  sidebarWidthRef: RefBox<number>;
  appShellRef: RefBox<HTMLElement | null>;
  currentChatJid: string;
  currentRootChatJid: string;
  getAgentModels: (chatJid: string) => Promise<any>;
  getActiveChatAgents: (chatJid: string) => Promise<any>;
  getChatBranches: (chatJid: string | null, options?: Record<string, unknown>) => Promise<any>;
  activeChatJidRef: RefBox<string>;
  setActiveChatAgents: StateSetter<any[]>;
  setCurrentChatBranches: StateSetter<any[]>;
  setActiveModel: StateSetter<string | null>;
  setActiveThinkingLevel: StateSetter<string | null>;
  setSupportsThinking: StateSetter<boolean>;
  setActiveModelUsage: StateSetter<any>;
  agentsRef: RefBox<Record<string, unknown>>;
  refreshQueueState: () => void;
  refreshContextUsage: () => Promise<void>;
  refreshAutoresearchStatus: () => Promise<void>;
}

export function startModelAndQueueRefreshEffect(options: {
  refreshModelAndQueueState: () => void;
  refreshModelState: () => void;
  refreshActiveChatAgents: () => void;
  refreshCurrentChatBranches: () => void;
  refreshQueueState: () => void;
  intervalMs?: number;
  scheduleInterval?: (handler: () => void, intervalMs: number) => unknown;
  clearScheduledInterval?: (handle: unknown) => void;
}): () => void {
  const {
    refreshModelAndQueueState,
    refreshModelState,
    refreshActiveChatAgents,
    refreshCurrentChatBranches,
    refreshQueueState,
    intervalMs = 60_000,
    scheduleInterval = (handler, delay) => setInterval(handler, delay),
    clearScheduledInterval = (handle) => clearInterval(handle as ReturnType<typeof setInterval>),
  } = options;

  refreshModelAndQueueState();
  const intervalHandle = scheduleInterval(() => {
    refreshModelState();
    refreshActiveChatAgents();
    refreshCurrentChatBranches();
    refreshQueueState();
  }, intervalMs);

  return () => {
    clearScheduledInterval(intervalHandle);
  };
}

export function useChatRefreshLifecycle(options: UseChatRefreshLifecycleOptions) {
  const {
    getAgents,
    setAgents,
    setUserProfile,
    applyBranding,
    readStoredNumber,
    sidebarWidthRef,
    appShellRef,
    currentChatJid,
    currentRootChatJid,
    getAgentModels,
    getActiveChatAgents,
    getChatBranches,
    activeChatJidRef,
    setActiveChatAgents,
    setCurrentChatBranches,
    setActiveModel,
    setActiveThinkingLevel,
    setSupportsThinking,
    setActiveModelUsage,
    agentsRef,
    refreshQueueState,
    refreshContextUsage,
    refreshAutoresearchStatus,
  } = options;

  const loadAgents = useCallback(async () => {
    await loadAgentsBootstrap({
      getAgents,
      setAgents,
      setUserProfile,
      applyBranding,
    });
  }, [applyBranding, getAgents, setAgents, setUserProfile]);

  useEffect(() => {
    loadAgents();
    applyStoredSidebarWidth({
      readStoredNumber,
      sidebarWidthRef,
      shellElement: appShellRef.current,
    });
  }, [appShellRef, loadAgents, readStoredNumber, sidebarWidthRef]);

  const updateAgentProfile = useCallback((payload: any) => {
    updateAgentProfileFromEvent({
      payload,
      agentsRef,
      setAgents,
      applyBranding,
    });
  }, [agentsRef, applyBranding, setAgents]);

  const updateUserProfile = useCallback((payload: any) => {
    updateUserProfileFromEvent({
      payload,
      setUserProfile,
    });
  }, [setUserProfile]);

  const applyModelState = useCallback((payload: any) => {
    applyModelStatePayload({
      payload,
      setActiveModel,
      setActiveThinkingLevel,
      setSupportsThinking,
      setActiveModelUsage,
    });
  }, [setActiveModel, setActiveModelUsage, setActiveThinkingLevel, setSupportsThinking]);

  const refreshModelState = useCallback(() => {
    refreshModelStateForChat({
      currentChatJid,
      getAgentModels,
      activeChatJidRef,
      applyModelState,
    });
  }, [activeChatJidRef, applyModelState, currentChatJid, getAgentModels]);

  const refreshActiveChatAgents = useCallback(() => {
    refreshActiveChatAgentsState({
      currentChatJid,
      getActiveChatAgents,
      getChatBranches,
      activeChatJidRef,
      setActiveChatAgents,
    });
  }, [activeChatJidRef, currentChatJid, getActiveChatAgents, getChatBranches, setActiveChatAgents]);

  const refreshCurrentChatBranches = useCallback(() => {
    refreshCurrentChatBranchesState({
      currentRootChatJid,
      getChatBranches,
      setCurrentChatBranches,
    });
  }, [currentRootChatJid, getChatBranches, setCurrentChatBranches]);

  const refreshModelAndQueueState = useCallback(() => {
    refreshModelAndQueueStateBundle({
      refreshModelState,
      refreshActiveChatAgents,
      refreshCurrentChatBranches,
      refreshQueueState,
      refreshContextUsage,
      refreshAutoresearchStatus,
    });
  }, [refreshActiveChatAgents, refreshAutoresearchStatus, refreshContextUsage, refreshCurrentChatBranches, refreshModelState, refreshQueueState]);

  useEffect(() => startModelAndQueueRefreshEffect({
    refreshModelAndQueueState,
    refreshModelState,
    refreshActiveChatAgents,
    refreshCurrentChatBranches,
    refreshQueueState,
  }), [refreshActiveChatAgents, refreshCurrentChatBranches, refreshModelAndQueueState, refreshModelState, refreshQueueState]);

  return {
    updateAgentProfile,
    updateUserProfile,
    applyModelState,
    refreshModelState,
    refreshActiveChatAgents,
    refreshCurrentChatBranches,
    refreshModelAndQueueState,
  };
}
