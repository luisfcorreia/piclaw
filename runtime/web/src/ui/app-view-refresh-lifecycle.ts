import { useCallback, useEffect } from '../vendor/preact-htm.js';
import { runTimelineLoadFlow } from './app-boot-load-orchestration.js';
import { refreshCurrentView as refreshCurrentViewState } from './app-status-refresh-orchestration.js';
import { applyLiveFloatingWidgetUpdate } from './app-floating-widget.js';

type StateSetter<T> = (next: T | ((prev: T) => T)) => void;

interface RefBox<T> {
  current: T;
}

export function resetExtensionPanelStateForChat(options: {
  setExtensionStatusPanels: StateSetter<Map<string, unknown>>;
  setPendingExtensionPanelActions: StateSetter<Set<string>>;
}): void {
  const {
    setExtensionStatusPanels,
    setPendingExtensionPanelActions,
  } = options;

  setExtensionStatusPanels(new Map());
  setPendingExtensionPanelActions(new Set());
}

interface UseViewRefreshLifecycleOptions {
  currentChatJid: string;
  currentRootChatJid: string;
  currentHashtag: string | null;
  searchQuery: string | null;
  searchScope: string;
  loadPosts: (hashtag?: string | null) => Promise<void>;
  searchPosts: (
    query: string,
    limit: number,
    offset: number,
    chatJid: string,
    scope: string,
    rootChatJid: string,
  ) => Promise<{ results?: any[] }>;
  setPosts: StateSetter<any[] | null>;
  setHasMore: StateSetter<boolean>;
  scrollToBottom: () => void;
  setExtensionStatusPanels: StateSetter<Map<string, unknown>>;
  setPendingExtensionPanelActions: StateSetter<Set<string>>;
  paneStateOwnerChatJidRef: RefBox<string | null>;
  chatPaneStateByChatRef: RefBox<Map<string, unknown>>;
  snapshotCurrentChatPaneState: () => unknown;
  restoreChatPaneState: (snapshot: unknown) => void;
  dismissedQueueRowIdsRef: RefBox<Set<string | number>>;
  refreshQueueState: () => Promise<void>;
  refreshAgentStatus: () => Promise<any>;
  refreshContextUsage: () => Promise<void>;
  viewStateRef: RefBox<Record<string, unknown> | null | undefined>;
  refreshTimeline: () => Promise<void>;
  refreshModelAndQueueState: () => void;
  setFloatingWidget: StateSetter<any>;
  dismissedLiveWidgetKeysRef: RefBox<Set<string>>;
}

export function useViewRefreshLifecycle(options: UseViewRefreshLifecycleOptions) {
  const {
    currentChatJid,
    currentRootChatJid,
    currentHashtag,
    searchQuery,
    searchScope,
    loadPosts,
    searchPosts,
    setPosts,
    setHasMore,
    scrollToBottom,
    setExtensionStatusPanels,
    setPendingExtensionPanelActions,
    paneStateOwnerChatJidRef,
    chatPaneStateByChatRef,
    snapshotCurrentChatPaneState,
    restoreChatPaneState,
    dismissedQueueRowIdsRef,
    refreshQueueState,
    refreshAgentStatus,
    refreshContextUsage,
    viewStateRef,
    refreshTimeline,
    refreshModelAndQueueState,
    setFloatingWidget,
    dismissedLiveWidgetKeysRef,
  } = options;

  useEffect(() => {
    resetExtensionPanelStateForChat({
      setExtensionStatusPanels,
      setPendingExtensionPanelActions,
    });
  }, [currentChatJid, setExtensionStatusPanels, setPendingExtensionPanelActions]);

  useEffect(() => {
    let cancelled = false;

    void runTimelineLoadFlow({
      currentHashtag,
      searchQuery,
      searchScope,
      currentChatJid,
      currentRootChatJid,
      loadPosts,
      searchPosts,
      setPosts,
      setHasMore,
      scrollToBottom,
      isCancelled: () => cancelled,
    });

    return () => {
      cancelled = true;
    };
  }, [
    currentChatJid,
    currentHashtag,
    searchQuery,
    searchScope,
    currentRootChatJid,
    loadPosts,
    scrollToBottom,
    searchPosts,
    setHasMore,
    setPosts,
  ]);

  useEffect(() => {
    const ownerChatJid = paneStateOwnerChatJidRef.current || currentChatJid;
    chatPaneStateByChatRef.current.set(ownerChatJid, snapshotCurrentChatPaneState());
  }, [chatPaneStateByChatRef, currentChatJid, paneStateOwnerChatJidRef, snapshotCurrentChatPaneState]);

  useEffect(() => {
    const ownerChatJid = paneStateOwnerChatJidRef.current || currentChatJid;
    if (ownerChatJid === currentChatJid) return;

    chatPaneStateByChatRef.current.set(ownerChatJid, snapshotCurrentChatPaneState());
    paneStateOwnerChatJidRef.current = currentChatJid;
    dismissedQueueRowIdsRef.current.clear();
    restoreChatPaneState(chatPaneStateByChatRef.current.get(currentChatJid) || null);
    void refreshQueueState();
    void refreshAgentStatus();
    void refreshContextUsage();
  }, [
    chatPaneStateByChatRef,
    currentChatJid,
    dismissedQueueRowIdsRef,
    paneStateOwnerChatJidRef,
    refreshAgentStatus,
    refreshContextUsage,
    refreshQueueState,
    restoreChatPaneState,
    snapshotCurrentChatPaneState,
  ]);

  const refreshCurrentView = useCallback(() => {
    refreshCurrentViewState({
      viewStateRef,
      refreshTimeline,
      refreshModelAndQueueState,
    });
  }, [refreshModelAndQueueState, refreshTimeline, viewStateRef]);

  const applyLiveGeneratedWidgetUpdate = useCallback((data: any, fallbackStatus = 'streaming') => {
    const updatedAt = new Date().toISOString();
    setFloatingWidget((current: any) => applyLiveFloatingWidgetUpdate(current, data, {
      fallbackStatus,
      currentChatJid,
      dismissedSessionKeys: dismissedLiveWidgetKeysRef.current,
      updatedAt,
    }));
  }, [currentChatJid, dismissedLiveWidgetKeysRef, setFloatingWidget]);

  return {
    refreshCurrentView,
    applyLiveGeneratedWidgetUpdate,
  };
}
