// @ts-nocheck
// Main authenticated web UI entry point.
import { html, render, useState, useEffect, useCallback, useRef, useMemo } from './vendor/preact-htm.js';
import * as api from './api.js';
import { paneRegistry, editorPaneExtension, preloadEditorBundle, terminalPaneExtension, terminalTabPaneExtension, TERMINAL_TAB_PATH, vncPaneExtension, VNC_TAB_PREFIX, workspacePreviewPaneExtension, workspaceMarkdownPreviewPaneExtension, officeViewerPaneExtension, csvViewerPaneExtension, pdfViewerPaneExtension, imageViewerPaneExtension, videoViewerPaneExtension, drawioPaneExtension, mindmapPaneExtension, kanbanPaneExtension, tabStore } from './panes/index.js';
import { getLocalStorageBoolean, getLocalStorageNumber, setLocalStorageItem } from './utils/storage.js';
import { useSseConnection } from './ui/use-sse-connection.js';
import { useNotifications } from './ui/use-notifications.js';
import { useTimeline } from './ui/use-timeline.js';
import { dedupePosts } from './ui/timeline-utils.js';
import { useAgentState } from './ui/use-agent-state.js';
import { useSplitters } from './ui/use-splitters.js';
import { useEditorState } from './ui/use-editor-state.js';
import { initTheme } from './ui/theme.js';
import {
    LAST_ACTIVITY_TTL_MS,
    SILENCE_FINALIZE_MS,
    SILENCE_REFRESH_MS,
    SILENCE_WARNING_MS,
    isIOSDevice,
    useTimestampRefresh,
} from './ui/app-helpers.js';
import { handleAgentPanelToggle } from './ui/app-agent-panel-toggle.js';
import { resolveFilePillOpenAction } from './ui/file-pill-open.js';
import { parseBtwCommand, buildBtwInjectionText, resolveBtwChatJid } from './ui/btw.js';
import {
    isStandaloneWebAppMode,
} from './ui/chat-window.js';
import { shouldClearQueuedSteerState } from './ui/queue-state.js';
import { isCompactionStatus } from './ui/status-duration.js';
import {
    handleMessageResponseRefresh,
} from './ui/app-auth-bootstrap.js';
import {
    useChatRefreshLifecycle,
} from './ui/app-chat-refresh-lifecycle.js';
import { installStandaloneMobileViewportFix } from './ui/mobile-viewport.js';
import { resolveOptionalApi } from './ui/optional-api.js';
import { watchReturnToApp, watchStandaloneWebAppMode } from './ui/app-resume.js';
import { watchDockToggleShortcut, watchZenModeShortcuts } from './ui/app-browser-events.js';
import {
    getPanePopoutTitle,
    hasPanePopoutMenuActions,
    isVncPanePopoutPath,
    resolveActivePaneOverrideId,
    resolveActivePaneTab,
    shouldHidePanePopoutControls,
    shouldShowEditorPaneContainer,
} from './ui/app-pane-state.js';
import { formatBranchPickerLabel, getBranchHandleDraftState } from './ui/branch-lifecycle.js';
import {
    getCurrentAppAssetVersion,
    getRenameBranchFormLock,
    describeSearchScope,
    loadStoredBtwSession,
    readAppLocationModes,
} from './ui/app-shell-state.js';
import {
    handleConnectionStatusChangeEvent,
    handleUiVersionDriftEvent,
    runBackstopRefreshTick,
} from './ui/app-connection-lifecycle.js';
import {
    createSessionFromComposeAction,
    handleBranchPickerChangeAction,
    openRenameCurrentBranchFormAction,
    closeRenameCurrentBranchFormAction,
    renameCurrentBranchAction,
    pruneCurrentBranchAction,
    restoreBranchAction,
    runBranchLoaderModeEffect,
    popOutPaneAction,
    popOutChatAction,
    watchPaneOpenEventBridge,
    applyStoredPaneLayoutAction,
    toggleWorkspaceVisibility,
} from './ui/app-branch-pane-lifecycle-actions.js';
import {
    applyChatPaneStateSnapshot,
    captureChatPaneStateSnapshot,
} from './ui/app-chat-pane-state.js';
import {
    addPendingPanelAction,
    createPendingPanelActionKey,
    removePendingPanelAction,
    runExtensionStatusPanelAction,
} from './ui/app-extension-status.js';
import {
    filterQueuedTimelinePosts,
} from './ui/app-followup-queue.js';
import {
    applyLiveFloatingWidgetUpdate,
} from './ui/app-floating-widget.js';
import {
    buildFloatingWidgetDashboardData,
    closeFloatingWidgetFromHost,
    handleFloatingWidgetEventFromHost,
    handleInjectQueuedFollowupAction,
    handleRemoveQueuedFollowupAction,
    openFloatingWidgetFromHost,
} from './ui/app-floating-widget-followup.js';
import {
    renderBranchLoaderMode,
    renderPanePopoutMode,
    resolveAppShellRenderMode,
} from './ui/app-pane-mode-render.js';
import {
    renderMainShell,
} from './ui/app-main-shell-render.js';
import {
    refreshAutoresearchStatusForChat,
    refreshContextUsageForChat,
    refreshCurrentView as refreshCurrentViewState,
    refreshQueueStateForChat,
} from './ui/app-status-refresh-orchestration.js';
import { handleAppSseEvent } from './ui/app-sse-events.js';
import {
    finalizeStalledResponse as finalizeStalledResponseState,
    reconcileSilentTurn as reconcileSilentTurnState,
    refreshAgentStatusForChat,
    runSilenceWatchdogTick,
} from './ui/app-agent-status-orchestration.js';
import {
    runTimelineLoadFlow,
} from './ui/app-boot-load-orchestration.js';
import {
    appendUniqueStringRef,
    normalizeComposeRefs,
    removeStringRef,
} from './ui/app-shell-ref-utils.js';
import {
    backToTimeline,
    deleteTimelinePost,
    loadHashtagTimeline,
    scrollToTimelineMessage,
    searchTimeline,
} from './ui/app-timeline-actions.js';
import {
    closeBtwPanelSession,
    handleBtwInterceptCommand,
    injectBtwSession,
    runBtwPromptSession,
} from './ui/app-btw-orchestration.js';

const CURRENT_APP_ASSET_VERSION = getCurrentAppAssetVersion();

const searchPosts = api.searchPosts;
const deletePost = api.deletePost;
const getAgents = api.getAgents;
const getAgentThought = api.getAgentThought;
const setAgentThoughtVisibility = api.setAgentThoughtVisibility;
const getAgentStatus = api.getAgentStatus;
const getAgentContext = resolveOptionalApi(api, 'getAgentContext', null);
const getAutoresearchStatus = resolveOptionalApi(api, 'getAutoresearchStatus', null);
const stopAutoresearch = resolveOptionalApi(api, 'stopAutoresearch', { status: 'ok' });
const dismissAutoresearch = resolveOptionalApi(api, 'dismissAutoresearch', { status: 'ok' });
const getAgentModels = resolveOptionalApi(api, 'getAgentModels', { current: null, models: [] });
const getActiveChatAgents = resolveOptionalApi(api, 'getActiveChatAgents', { chats: [] });
const getChatBranches = resolveOptionalApi(api, 'getChatBranches', { chats: [] });
const renameChatBranch = resolveOptionalApi(api, 'renameChatBranch', null);
const pruneChatBranch = resolveOptionalApi(api, 'pruneChatBranch', null);
const restoreChatBranch = resolveOptionalApi(api, 'restoreChatBranch', null);
const getAgentQueueState = resolveOptionalApi(api, 'getAgentQueueState', { count: 0 });
const steerAgentQueueItem = resolveOptionalApi(api, 'steerAgentQueueItem', { removed: false, queued: 'steer' });
const removeAgentQueueItem = resolveOptionalApi(api, 'removeAgentQueueItem', { removed: false });
const streamSidePrompt = resolveOptionalApi(api, 'streamSidePrompt', null);

if (window.marked) {
    marked.setOptions({
        breaks: true,  // Convert \n to <br>
        gfm: true,     // GitHub Flavored Markdown
    });
}

paneRegistry.register(editorPaneExtension);
paneRegistry.register(workspacePreviewPaneExtension);
paneRegistry.register(workspaceMarkdownPreviewPaneExtension);
paneRegistry.register(officeViewerPaneExtension);
paneRegistry.register(csvViewerPaneExtension);
paneRegistry.register(pdfViewerPaneExtension);
paneRegistry.register(imageViewerPaneExtension);
paneRegistry.register(videoViewerPaneExtension);
paneRegistry.register(drawioPaneExtension);
paneRegistry.register(mindmapPaneExtension);
paneRegistry.register(kanbanPaneExtension);
paneRegistry.register(vncPaneExtension);
preloadEditorBundle();

paneRegistry.register(terminalPaneExtension);
paneRegistry.register(terminalTabPaneExtension);

function MainApp({ locationParams, navigate }) {
    const {
        currentChatJid,
        chatOnlyMode,
        panePopoutMode,
        panePopoutPath,
        panePopoutLabel,
        branchLoaderMode,
        branchLoaderSourceChatJid,
    } = useMemo(() => readAppLocationModes(locationParams), [locationParams]);

    const [connectionStatus, setConnectionStatus] = useState('disconnected');
    const [isWebAppMode, setIsWebAppMode] = useState(() => isStandaloneWebAppMode());
    const [currentHashtag, setCurrentHashtag] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchScope, setSearchScope] = useState('current');
    const [fileRefs, setFileRefs] = useState([]);
    const [messageRefs, setMessageRefs] = useState([]);
    const [intentToast, setIntentToast] = useState(null);
    const {
        agentStatus,
        setAgentStatus,
        agentDraft,
        setAgentDraft,
        agentPlan,
        setAgentPlan,
        agentThought,
        setAgentThought,
        pendingRequest,
        setPendingRequest,
        currentTurnId,
        setCurrentTurnId,
        steerQueuedTurnId,
        setSteerQueuedTurnId,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        isAgentRunningRef,
        draftBufferRef,
        thoughtBufferRef,
        pendingRequestRef,
        stalledPostIdRef,
        currentTurnIdRef,
        steerQueuedTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
    } = useAgentState();
    const [agents, setAgents] = useState({});
    const [activeModel, setActiveModel] = useState(null);
    const [activeThinkingLevel, setActiveThinkingLevel] = useState(null);
    const [supportsThinking, setSupportsThinking] = useState(false);
    const [activeModelUsage, setActiveModelUsage] = useState(null);
    const [activeChatAgents, setActiveChatAgents] = useState([]);
    const [currentChatBranches, setCurrentChatBranches] = useState([]);
    const [contextUsage, setContextUsage] = useState(null);
    const [extensionStatusPanels, setExtensionStatusPanels] = useState(() => new Map());
    const [pendingExtensionPanelActions, setPendingExtensionPanelActions] = useState(() => new Set());
    const [followupQueueItems, setFollowupQueueItems] = useState([]);
    const [isAgentTurnActive, setIsAgentTurnActive] = useState(false);
    const [btwSession, setBtwSession] = useState(() => loadStoredBtwSession());
    const [floatingWidget, setFloatingWidget] = useState(null);
    const dismissedLiveWidgetKeysRef = useRef(new Set());
    const currentChatAgent = useMemo(
        () => activeChatAgents.find((chat) => chat?.chat_jid === currentChatJid) || null,
        [activeChatAgents, currentChatJid],
    );
    const currentBranchRecord = useMemo(
        () => currentChatBranches.find((chat) => chat?.chat_jid === currentChatJid) || currentChatAgent || null,
        [currentChatAgent, currentChatBranches, currentChatJid],
    );
    const currentRootChatJid = currentBranchRecord?.root_chat_jid || currentChatAgent?.root_chat_jid || currentChatJid;
    const activeSearchScopeLabel = describeSearchScope(searchScope);
    const [branchLoaderState, setBranchLoaderState] = useState(() => ({
        status: branchLoaderMode ? 'running' : 'idle',
        message: branchLoaderMode ? 'Preparing a new chat branch…' : '',
    }));
    const followupQueueCount = followupQueueItems.length;
    const followupQueueRowIdsRef = useRef(new Set());
    const followupQueueItemsRef = useRef([]);
    // Row IDs that were locally dismissed (e.g. injected as steering).
    const dismissedQueueRowIdsRef = useRef(new Set());
    const queueRefreshGenRef = useRef(0);
    const silentRecoveryRef = useRef({ inFlight: false, lastAttemptAt: 0, turnId: null });
    // Keep refs in sync during render for immediate access in stable callbacks
    followupQueueRowIdsRef.current = new Set(followupQueueItems.map((item) => item.row_id));
    followupQueueItemsRef.current = followupQueueItems;
    const {
        notificationsEnabled,
        notificationPermission,
        toggleNotifications: handleToggleNotifications,
        notify,
    } = useNotifications();
    const [removingPostIds, setRemovingPostIds] = useState(() => new Set());
    const [workspaceOpen, setWorkspaceOpen] = useState(() => getLocalStorageBoolean('workspaceOpen', true));

    // Stable ref so useEditorState can call removeFileRef without a forward-reference TDZ
    const removeFileRefRef = useRef(null);

    // Editor state hook (file load/save, tabs, dirty, view state, SSE sync)
    const {
        editorOpen, tabStripTabs, tabStripActiveId, previewTabs, tabPaneOverrides,
        openEditor, closeEditor, handleTabClose, handleTabActivate,
        handleTabCloseOthers, handleTabCloseAll, handleTabTogglePin,
        handleTabTogglePreview, handleTabEditSource, revealInExplorer,
    } = useEditorState({ onTabClosed: (path) => removeFileRefRef.current?.(path) });

    // Editor extension container ref + instance tracking
    const editorContainerRef = useRef(null);
    const editorInstanceRef = useRef(null);
    const dockContainerRef = useRef(null);
    const dockInstanceRef = useRef(null);

    // Dock (terminal) toggle state - only available when dock panes registered
    const hasDockPanes = paneRegistry.getDockPanes().length > 0;
    const [dockVisible, setDockVisible] = useState(false);
    const toggleDock = useCallback(() => setDockVisible((v) => !v), []);
    const openTerminalTab = useCallback(() => {
        openEditor(TERMINAL_TAB_PATH, { label: 'Terminal' });
    }, [openEditor]);
    const openVncTab = useCallback(() => {
        openEditor(VNC_TAB_PREFIX, { label: 'VNC' });
    }, [openEditor]);
    const activePaneTab = useMemo(
        () => resolveActivePaneTab(tabStripTabs, tabStripActiveId),
        [tabStripActiveId, tabStripTabs],
    );
    const activePaneOverrideId = useMemo(
        () => resolveActivePaneOverrideId(tabPaneOverrides, tabStripActiveId),
        [tabPaneOverrides, tabStripActiveId],
    );
    const panePopoutTitle = useMemo(
        () => getPanePopoutTitle(panePopoutLabel, activePaneTab, panePopoutPath),
        [activePaneTab, panePopoutLabel, panePopoutPath],
    );
    const panePopoutHasMenuActions = useMemo(
        () => hasPanePopoutMenuActions(tabStripTabs, previewTabs, tabStripActiveId),
        [previewTabs, tabStripActiveId, tabStripTabs],
    );
    const isVncPanePopout = useMemo(
        () => isVncPanePopoutPath(panePopoutPath, VNC_TAB_PREFIX),
        [panePopoutPath],
    );
    const hidePanePopoutControls = useMemo(
        () => shouldHidePanePopoutControls(panePopoutPath, TERMINAL_TAB_PATH, panePopoutHasMenuActions, isVncPanePopout),
        [isVncPanePopout, panePopoutHasMenuActions, panePopoutPath],
    );
    const showEditorPaneContainer = shouldShowEditorPaneContainer(
        panePopoutMode,
        chatOnlyMode,
        editorOpen,
        hasDockPanes,
        dockVisible,
    );

    // ── Zen mode ────────────────────────────────────────────────
    const [zenMode, setZenMode] = useState(false);
    const zenDockWasVisibleRef = useRef(false);

    const enterZenMode = useCallback(() => {
        if (!editorOpen || chatOnlyMode) return;
        // Remember dock state and auto-close
        zenDockWasVisibleRef.current = dockVisible;
        if (dockVisible) setDockVisible(false);
        setZenMode(true);
    }, [editorOpen, chatOnlyMode, dockVisible]);

    const exitZenMode = useCallback(() => {
        if (!zenMode) return;
        setZenMode(false);
        // Restore dock if it was open before zen
        if (zenDockWasVisibleRef.current) {
            setDockVisible(true);
            zenDockWasVisibleRef.current = false;
        }
    }, [zenMode]);

    const toggleZenMode = useCallback(() => {
        if (zenMode) exitZenMode();
        else enterZenMode();
    }, [zenMode, enterZenMode, exitZenMode]);

    // Exit zen mode when the last editor tab closes
    useEffect(() => {
        if (zenMode && !editorOpen) exitZenMode();
    }, [zenMode, editorOpen, exitZenMode]);

    useEffect(() => {
        if (!panePopoutMode || !panePopoutPath) return;
        const activeId = tabStore.getActiveId();
        if (activeId === panePopoutPath) return;
        openEditor(panePopoutPath, panePopoutLabel ? { label: panePopoutLabel } : undefined);
    }, [openEditor, panePopoutLabel, panePopoutMode, panePopoutPath]);

    // Mount/dispose editor extension instance when active tab changes
    useEffect(() => {
        const container = editorContainerRef.current;
        if (!container) return;

        // Dispose previous instance
        if (editorInstanceRef.current) {
            editorInstanceRef.current.dispose();
            editorInstanceRef.current = null;
        }

        const activeId = tabStripActiveId;
        if (!activeId) return;

        // Mount new instance
        const context = { path: activeId, mode: 'edit' };
        const ext = (activePaneOverrideId ? paneRegistry.get(activePaneOverrideId) : null)
            || paneRegistry.resolve(context)
            || paneRegistry.get('editor');
        if (!ext) {
            // No pane extension available - show fallback message
            container.innerHTML = '<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';
            return;
        }

        const instance = ext.mount(container, context);
        editorInstanceRef.current = instance;

        // Wire PaneInstance callbacks
        instance.onDirtyChange?.((dirty) => {
            tabStore.setDirty(activeId, dirty);
        });

        instance.onSaveRequest?.(() => {
            // Save is handled internally by the extension now
        });

        instance.onClose?.(() => {
            closeEditor();
        });

        // Restore view state from tab store
        const viewState = tabStore.getViewState(activeId);
        if (viewState && typeof instance.restoreViewState === 'function') {
            // Wait for CodeMirror to settle
            requestAnimationFrame(() => instance.restoreViewState(viewState));
        }

        // Track view state changes
        if (typeof instance.onViewStateChange === 'function') {
            instance.onViewStateChange((state) => {
                tabStore.saveViewState(activeId, state);
            });
        }

        // Focus the editor
        requestAnimationFrame(() => instance.focus());

        return () => {
            if (editorInstanceRef.current === instance) {
                instance.dispose();
                editorInstanceRef.current = null;
            }
        };
    }, [tabStripActiveId, activePaneOverrideId, closeEditor]);

    const refreshActiveEditorFromWorkspace = useCallback(async (updates) => {
        const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
        const instance = editorInstanceRef.current;
        if (!activePath || !instance?.setContent) return;
        if (typeof instance.isDirty === 'function' && instance.isDirty()) return;

        const relevant = Array.isArray(updates) && updates.length > 0
            ? updates.some((update) => {
                const changedPaths = Array.isArray(update?.changed_paths)
                    ? update.changed_paths
                        .map((value) => typeof value === 'string' ? value.trim() : '')
                        .filter(Boolean)
                    : [];
                if (changedPaths.length > 0) {
                    return changedPaths.some((changedPath) => changedPath === '.' || changedPath === activePath);
                }
                const relPath = typeof update?.path === 'string' ? update.path.trim() : '';
                return !relPath || relPath === '.' || relPath === activePath;
            })
            : true;
        if (!relevant) return;

        try {
            const payload = await api.getWorkspaceFile(activePath, 1_000_000, 'edit');
            const nextText = typeof payload?.text === 'string' ? payload.text : '';
            const nextMtime = typeof payload?.mtime === 'string' && payload.mtime.trim()
                ? payload.mtime.trim()
                : new Date().toISOString();
            instance.setContent(nextText, nextMtime);
        } catch (error) {
            console.warn('[workspace_update] Failed to refresh active pane:', error);
        }
    }, [tabStripActiveId]);

    useEffect(() => {
        const container = dockContainerRef.current;

        if (dockInstanceRef.current) {
            dockInstanceRef.current.dispose();
            dockInstanceRef.current = null;
        }

        if (!container || !hasDockPanes || !dockVisible) return;

        const ext = paneRegistry.getDockPanes()[0];
        if (!ext) {
            container.innerHTML = '<div class="terminal-placeholder">No dock pane available.</div>';
            return;
        }

        const instance = ext.mount(container, { mode: 'view' });
        dockInstanceRef.current = instance;
        requestAnimationFrame(() => instance.focus?.());

        return () => {
            if (dockInstanceRef.current === instance) {
                instance.dispose();
                dockInstanceRef.current = null;
            }
        };
    }, [hasDockPanes, dockVisible]);

    const [userProfile, setUserProfile] = useState({ name: 'You', avatar_url: null, avatar_background: null });
    const staleUiVersionRef = useRef(null);
    const staleUiReloadScheduledRef = useRef(false);
    const hasConnectedOnceRef = useRef(false);
    const wasAgentActiveRef = useRef(false); // tracks active→idle transition for timeline refresh
    const agentStatusRef = useRef(null);
    const activeChatJidRef = useRef(currentChatJid);
    const chatPaneStateByChatRef = useRef(new Map());
    const paneStateOwnerChatJidRef = useRef(currentChatJid);
    const draftThrottleRef = useRef(0);
    const thoughtThrottleRef = useRef(0);
    const agentsRef = useRef({});
    const userProfileRef = useRef({ name: null, avatar_url: null });
    const viewStateRef = useRef({ currentHashtag: null, searchQuery: null, searchOpen: false });
    const timelineRef = useRef(null);
    const appShellRef = useRef(null);
    const sidebarWidthRef = useRef(0);
    const editorWidthRef = useRef(0);
    const dockHeightRef = useRef(0);
    const lastNotifiedIdRef = useRef(null);
    const lastAgentResponseRef = useRef(null);
    const btwAbortRef = useRef(null);
    const lastActivityTimerRef = useRef(null);
    const lastActivityTokenRef = useRef(0);
    const brandingRef = useRef({ title: null, avatarBase: null });
    const intentToastTimerRef = useRef(null);
    const renameBranchInFlightRef = useRef(false);
    const [isRenamingBranch, setIsRenamingBranch] = useState(false);
    const renameBranchLockUntilRef = useRef(0);
    const [isRenameBranchFormOpen, setIsRenameBranchFormOpen] = useState(false);
    const [renameBranchNameDraft, setRenameBranchNameDraft] = useState('');
    const renameBranchDraftState = useMemo(
        () => getBranchHandleDraftState(renameBranchNameDraft, currentBranchRecord?.agent_name || ''),
        [currentBranchRecord?.agent_name, renameBranchNameDraft],
    );
    const renameBranchNameInputRef = useRef(null);

    const clearIntentToast = useCallback(() => {
        if (intentToastTimerRef.current) {
            clearTimeout(intentToastTimerRef.current);
            intentToastTimerRef.current = null;
        }
        setIntentToast(null);
    }, []);

    useTimestampRefresh(30000);

    useEffect(() => {
        if (!isRenameBranchFormOpen) return;
        requestAnimationFrame(() => {
            if (isRenameBranchFormOpen) {
                renameBranchNameInputRef.current?.focus();
                renameBranchNameInputRef.current?.select?.();
            }
        });
    }, [isRenameBranchFormOpen]);

    useEffect(() => {
        return initTheme();
    }, []);

    useEffect(() => {
        return watchStandaloneWebAppMode(setIsWebAppMode);
    }, []);

    useEffect(() => {
        setLocalStorageItem('workspaceOpen', String(workspaceOpen));
    }, [workspaceOpen]);

    useEffect(() => {
        return installStandaloneMobileViewportFix();
    }, []);

    useEffect(() => {
        return () => {
            clearIntentToast();
        };
    }, [clearIntentToast]);

    useEffect(() => {
        if (!btwSession) {
            setLocalStorageItem(BTW_SESSION_KEY, '');
            return;
        }
        setLocalStorageItem(BTW_SESSION_KEY, JSON.stringify({
            question: btwSession.question || '',
            answer: btwSession.answer || '',
            thinking: btwSession.thinking || '',
            error: btwSession.error || null,
            status: btwSession.status || 'success',
        }));
    }, [btwSession]);

    useEffect(() => {
        agentsRef.current = agents || {};
    }, [agents]);

    useEffect(() => {
        activeChatJidRef.current = currentChatJid;
    }, [currentChatJid]);

    useEffect(() => {
        userProfileRef.current = userProfile || { name: 'You', avatar_url: null, avatar_background: null };
    }, [userProfile]);

    const applyBranding = useCallback((name, avatarUrl, avatarVersion = null) => {
        if (typeof document === 'undefined') return;
        const title = (name || '').trim() || 'PiClaw';
        if (brandingRef.current.title !== title) {
            document.title = title;
            const titleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]');
            if (titleMeta && titleMeta.getAttribute('content') !== title) {
                titleMeta.setAttribute('content', title);
            }
            brandingRef.current.title = title;
        }

        const favicon = document.getElementById('dynamic-favicon');
        if (!favicon) return;
        const defaultHref = favicon.getAttribute('data-default') || favicon.getAttribute('href') || '/favicon.ico';
        const baseHref = avatarUrl || defaultHref;
        const avatarKey = avatarUrl ? `${baseHref}|${avatarVersion || ''}` : baseHref;
        if (brandingRef.current.avatarBase !== avatarKey) {
            const cacheBust = avatarUrl ? `${baseHref}${baseHref.includes('?') ? '&' : '?'}v=${avatarVersion || Date.now()}` : baseHref;
            favicon.setAttribute('href', cacheBust);
            brandingRef.current.avatarBase = avatarKey;
        }
    }, []);

    const addFileRef = useCallback((path) => {
        setFileRefs((prev) => appendUniqueStringRef(prev, path));
    }, []);

    const removeFileRef = useCallback((path) => {
        setFileRefs((prev) => removeStringRef(prev, path));
    }, []);
    removeFileRefRef.current = removeFileRef;

    const clearFileRefs = useCallback(() => {
        setFileRefs([]);
    }, []);

    const setFileRefsFromCompose = useCallback((next) => {
        setFileRefs(normalizeComposeRefs(next));
    }, []);


    const showIntentToast = useCallback((title, detail = null, kind = 'info', durationMs = 3000) => {
        clearIntentToast();
        setIntentToast({ title, detail: detail || null, kind: kind || 'info' });
        intentToastTimerRef.current = setTimeout(() => {
            setIntentToast((current) => (current?.title === title ? null : current));
        }, durationMs);
    }, [clearIntentToast]);

    const openFileFromPill = useCallback((rawPath) => {
        const result = resolveFilePillOpenAction(rawPath, {
            editorOpen,
            resolvePane: (context) => paneRegistry.resolve(context),
        });

        if (result.kind === 'open') {
            openEditor(result.path);
            return;
        }

        if (result.kind === 'toast') {
            showIntentToast(result.title, result.detail, result.level);
        }
    }, [editorOpen, openEditor, showIntentToast]);

    const attachActiveEditorFile = useCallback(() => {
        const activeId = tabStripActiveId;
        if (activeId) addFileRef(activeId);
    }, [tabStripActiveId, addFileRef]);

    const addMessageRef = useCallback((id) => {
        setMessageRefs((prev) => appendUniqueStringRef(prev, id));
    }, []);

    /** Scroll to a message by ID; fetch and inject if not in current timeline. */
    const scrollToMessage = useCallback(async (id, targetChatJid = null) => {
        await scrollToTimelineMessage({
            id,
            targetChatJid,
            currentChatJid,
            getThread: api.getThread,
            setPosts,
        });
    }, [currentChatJid, setPosts]);

    const removeMessageRef = useCallback((id) => {
        setMessageRefs((prev) => removeStringRef(prev, id));
    }, []);

    const clearMessageRefs = useCallback(() => {
        setMessageRefs([]);
    }, []);

    const setMessageRefsFromCompose = useCallback((next) => {
        setMessageRefs(normalizeComposeRefs(next));
    }, []);

    const handleComposeSubmitError = useCallback((message) => {
        const detail = typeof message === 'string' && message.trim() ? message.trim() : 'Could not send your message.';
        showIntentToast('Compose failed', detail, 'error', 5000);
    }, [showIntentToast]);

    const noteAgentActivity = useCallback((options = {}) => {
        const now = Date.now();
        lastAgentEventRef.current = now;
        if (options.running) {
            isAgentRunningRef.current = true;
            // Only update state if not already active to avoid redundant re-renders
            setIsAgentTurnActive((prev) => prev ? prev : true);
        }
        if (options.clearSilence) {
            lastSilenceNoticeRef.current = 0;
        }
    }, [setIsAgentTurnActive]);

    const clearLastActivityTimer = useCallback(() => {
        if (lastActivityTimerRef.current) {
            clearTimeout(lastActivityTimerRef.current);
            lastActivityTimerRef.current = null;
        }
        lastActivityTokenRef.current = 0;
    }, []);

    // Cleanup: cancel any pending last-activity timer on unmount.
    // Placed after clearLastActivityTimer definition to avoid TDZ errors.
    useEffect(() => () => {
        clearLastActivityTimer();
    }, [clearLastActivityTimer]);

    const clearLastActivityFlag = useCallback(() => {
        clearLastActivityTimer();
        setAgentStatus((prev) => {
            if (!prev) return prev;
            if (!(prev.last_activity || prev.lastActivity)) return prev;
            const { last_activity, lastActivity, ...rest } = prev;
            return rest;
        });
    }, [clearLastActivityTimer]);

    const showLastActivity = useCallback((payload) => {
        if (!payload) return;
        clearLastActivityTimer();
        const token = Date.now();
        lastActivityTokenRef.current = token;
        // Strip tool/intent details - only show a minimal "last active" hint
        setAgentStatus({ type: payload.type || 'active', last_activity: true });
        lastActivityTimerRef.current = setTimeout(() => {
            if (lastActivityTokenRef.current !== token) return;
            setAgentStatus((prev) => {
                if (!prev || !(prev.last_activity || prev.lastActivity)) return prev;
                return null;
            });
        }, LAST_ACTIVITY_TTL_MS);
    }, [clearLastActivityTimer]);

    const clearAgentRunState = useCallback(() => {
        isAgentRunningRef.current = false;
        setIsAgentTurnActive(false);
        lastAgentEventRef.current = null;
        lastSilenceNoticeRef.current = 0;
        draftBufferRef.current = '';
        thoughtBufferRef.current = '';
        pendingRequestRef.current = null;
        lastAgentResponseRef.current = null;
        currentTurnIdRef.current = null;
        steerQueuedTurnIdRef.current = null;
        agentStatusRef.current = null;
        silentRecoveryRef.current = { inFlight: false, lastAttemptAt: 0, turnId: null };
        clearLastActivityTimer();
        setCurrentTurnId(null);
        setSteerQueuedTurnId(null);
        thoughtExpandedRef.current = false;
        draftExpandedRef.current = false;
    }, [clearLastActivityTimer, setCurrentTurnId, setSteerQueuedTurnId, setIsAgentTurnActive]);

    const clearQueuedSteerStateIfStale = useCallback((remainingQueueCount) => {
        if (!shouldClearQueuedSteerState({
            remainingQueueCount,
            currentTurnId: currentTurnIdRef.current,
            isAgentTurnActive,
        })) {
            return;
        }
        steerQueuedTurnIdRef.current = null;
        setSteerQueuedTurnId(null);
    }, [isAgentTurnActive, setSteerQueuedTurnId]);

    const snapshotCurrentChatPaneState = useCallback(() => captureChatPaneStateSnapshot({
        agentStatus,
        agentDraft,
        agentPlan,
        agentThought,
        pendingRequest,
        currentTurnId,
        steerQueuedTurnId,
        isAgentTurnActive,
        followupQueueItems,
        activeModel,
        activeThinkingLevel,
        supportsThinking,
        activeModelUsage,
        contextUsage,
        isAgentRunning: isAgentRunningRef.current,
        wasAgentActive: wasAgentActiveRef.current,
        draftBuffer: draftBufferRef.current,
        thoughtBuffer: thoughtBufferRef.current,
        lastAgentEvent: lastAgentEventRef.current,
        lastSilenceNotice: lastSilenceNoticeRef.current,
        lastAgentResponse: lastAgentResponseRef.current,
        currentTurnIdRef: currentTurnIdRef.current,
        steerQueuedTurnIdRef: steerQueuedTurnIdRef.current,
        thoughtExpanded: thoughtExpandedRef.current,
        draftExpanded: draftExpandedRef.current,
        agentStatusRef: agentStatusRef.current,
        silentRecovery: silentRecoveryRef.current,
    }), [
        activeModel,
        activeModelUsage,
        activeThinkingLevel,
        agentDraft,
        agentPlan,
        agentStatus,
        agentThought,
        contextUsage,
        currentTurnId,
        followupQueueItems,
        isAgentTurnActive,
        pendingRequest,
        steerQueuedTurnId,
        supportsThinking,
    ]);

    const restoreChatPaneState = useCallback((snapshot) => {
        applyChatPaneStateSnapshot({
            snapshot,
            clearLastActivityTimer,
            refs: {
                isAgentRunningRef,
                wasAgentActiveRef,
                lastAgentEventRef,
                lastSilenceNoticeRef,
                draftBufferRef,
                thoughtBufferRef,
                pendingRequestRef,
                lastAgentResponseRef,
                currentTurnIdRef,
                steerQueuedTurnIdRef,
                agentStatusRef,
                silentRecoveryRef,
                thoughtExpandedRef,
                draftExpandedRef,
            },
            setters: {
                setIsAgentTurnActive,
                setAgentStatus,
                setAgentDraft,
                setAgentPlan,
                setAgentThought,
                setPendingRequest,
                setCurrentTurnId,
                setSteerQueuedTurnId,
                setFollowupQueueItems,
                setActiveModel,
                setActiveThinkingLevel,
                setSupportsThinking,
                setActiveModelUsage,
                setContextUsage,
            },
        });
    }, [clearLastActivityTimer, setCurrentTurnId, setFollowupQueueItems, setIsAgentTurnActive, setSteerQueuedTurnId]);

    const setActiveTurn = useCallback((turnId) => {
        if (!turnId) return;
        if (currentTurnIdRef.current === turnId) return;
        currentTurnIdRef.current = turnId;
        silentRecoveryRef.current = { inFlight: false, lastAttemptAt: 0, turnId };
        setCurrentTurnId(turnId);
        steerQueuedTurnIdRef.current = null;
        setSteerQueuedTurnId(null);
        draftBufferRef.current = '';
        thoughtBufferRef.current = '';
        setAgentDraft({ text: '', totalLines: 0 });
        setAgentPlan('');
        setAgentThought({ text: '', totalLines: 0 });
        setPendingRequest(null);
        pendingRequestRef.current = null;
        lastAgentResponseRef.current = null;
        thoughtExpandedRef.current = false;
        draftExpandedRef.current = false;
    }, [setCurrentTurnId, setSteerQueuedTurnId]);


    const notifyForFinalResponse = useCallback((turnId) => {
        if (typeof document !== 'undefined') {
            const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
            if (!document.hidden && hasFocus) return;
        }
        const entry = lastAgentResponseRef.current;
        if (!entry || !entry.post) return;
        if (turnId && entry.turnId && entry.turnId !== turnId) return;
        const post = entry.post;
        if (post.id && lastNotifiedIdRef.current === post.id) return;
        const content = String(post?.data?.content || '').trim();
        if (!content) return;
        lastNotifiedIdRef.current = post.id || lastNotifiedIdRef.current;
        lastAgentResponseRef.current = null;
        const body = content.replace(/\s+/g, ' ').slice(0, 200);
        const agentsMap = agentsRef.current || {};
        const agent = post?.data?.agent_id ? agentsMap[post.data.agent_id] : null;
        const title = agent?.name || 'Pi';
        notify(title, body);
    }, [notify]);

    const handlePanelToggle = useCallback(async (panelKey, expanded) => {
        await handleAgentPanelToggle({
            panelKey,
            expanded,
            currentTurnIdRef,
            thoughtExpandedRef,
            draftExpandedRef,
            setAgentThoughtVisibility,
            getAgentThought,
            thoughtBufferRef,
            draftBufferRef,
            setAgentThought,
            setAgentDraft,
        });
    }, []);


    // Scroll to bottom of timeline (column-reverse: bottom is scrollTop=0)
    // Only auto-scroll if user is already near the bottom (within 150px).
    const scrollToBottomRef = useRef(null);
    const scrollToBottom = useCallback(() => {
        const el = timelineRef.current;
        if (!el) return;
        // column-reverse: scrollTop=0 is bottom, negative values mean scrolled up
        const scrolledUp = Math.abs(el.scrollTop) > 150;
        if (!scrolledUp) {
            el.scrollTop = 0;
        }
    }, []);
    scrollToBottomRef.current = scrollToBottom;

    const preserveTimelineScroll = useCallback((mutate) => {
        const container = timelineRef.current;
        if (!container || typeof mutate !== 'function') {
            mutate?.();
            return;
        }
        const { currentHashtag: activeHashtag, searchQuery: activeSearch, searchOpen: activeSearchOpen } = viewStateRef.current || {};
        const reverseTimeline = !((activeSearch || activeSearchOpen) && !activeHashtag);
        const anchor = reverseTimeline
            ? container.scrollHeight - container.scrollTop
            : container.scrollTop;
        mutate();
        requestAnimationFrame(() => {
            const target = timelineRef.current;
            if (!target) return;
            if (reverseTimeline) {
                const nextTop = Math.max(target.scrollHeight - anchor, 0);
                target.scrollTop = nextTop;
            } else {
                const maxScroll = Math.max(target.scrollHeight - target.clientHeight, 0);
                const nextTop = Math.min(anchor, maxScroll);
                target.scrollTop = nextTop;
            }
        });
    }, []);

    const preserveTimelineScrollTop = useCallback((mutate) => {
        const container = timelineRef.current;
        if (!container || typeof mutate !== 'function') {
            mutate?.();
            return;
        }
        const anchor = container.scrollTop;
        mutate();
        requestAnimationFrame(() => {
            const target = timelineRef.current;
            if (!target) return;
            const maxScroll = Math.max(target.scrollHeight - target.clientHeight, 0);
            target.scrollTop = Math.min(anchor, maxScroll);
        });
    }, []);

    /** Ref-stable filter: hides placeholder rows and their parent user messages.
     *  Reads from refs so callback identity never changes — this breaks the
     *  re-render cascade that previously destabilised handleSseEvent → SSE.
     *  Returns the same array reference when nothing is filtered. */
    const filterQueuedPosts = useCallback((items) => filterQueuedTimelinePosts(items, followupQueueRowIdsRef.current), []);

    const {
        posts: rawPosts,
        setPosts,
        hasMore,
        setHasMore,
        hasMoreRef,
        loadPosts,
        refreshTimeline,
        loadMore,
        loadMoreRef,
    } = useTimeline({ preserveTimelineScroll, preserveTimelineScrollTop, chatJid: currentChatJid });

    // Derive filtered posts with queued placeholders hidden.
    const posts = useMemo(() => filterQueuedPosts(rawPosts), [rawPosts, followupQueueItems, filterQueuedPosts]);

    const removeStalledPost = useCallback(() => {
        const stalledId = stalledPostIdRef.current;
        if (!stalledId) return;
        setPosts((prev) => (prev ? prev.filter((post) => post.id !== stalledId) : prev));
        stalledPostIdRef.current = null;
    }, [setPosts]);


    const {
        handleSplitterMouseDown,
        handleSplitterTouchStart,
        handleEditorSplitterMouseDown,
        handleEditorSplitterTouchStart,
        handleDockSplitterMouseDown,
        handleDockSplitterTouchStart,
    } = useSplitters({ appShellRef, sidebarWidthRef, editorWidthRef, dockHeightRef });

    const finalizeStalledResponse = useCallback(() => {
        finalizeStalledResponseState({
            isAgentRunningRef,
            lastSilenceNoticeRef,
            lastAgentEventRef,
            currentTurnIdRef,
            thoughtExpandedRef,
            draftExpandedRef,
            draftBufferRef,
            thoughtBufferRef,
            pendingRequestRef,
            lastAgentResponseRef,
            stalledPostIdRef,
            scrollToBottomRef,
            setCurrentTurnId,
            setAgentDraft,
            setAgentPlan,
            setAgentThought,
            setPendingRequest,
            setAgentStatus,
            setPosts,
            dedupePosts,
        });
    }, [setCurrentTurnId]);

    useEffect(() => {
        viewStateRef.current = { currentHashtag, searchQuery, searchOpen };
    }, [currentHashtag, searchQuery, searchOpen]);


    const refreshQueueState = useCallback(() => {
        refreshQueueStateForChat({
            currentChatJid,
            queueRefreshGenRef,
            activeChatJidRef,
            dismissedQueueRowIdsRef,
            getAgentQueueState,
            setFollowupQueueItems,
            clearQueuedSteerStateIfStale,
        });
    }, [clearQueuedSteerStateIfStale, currentChatJid]);

    const refreshContextUsage = useCallback(async () => {
        await refreshContextUsageForChat({
            currentChatJid,
            activeChatJidRef,
            getAgentContext,
            setContextUsage,
        });
    }, [currentChatJid]);

    const refreshAutoresearchStatus = useCallback(async () => {
        await refreshAutoresearchStatusForChat({
            currentChatJid,
            activeChatJidRef,
            getAutoresearchStatus,
            setExtensionStatusPanels,
            setPendingExtensionPanelActions,
        });
    }, [currentChatJid]);

    const refreshAgentStatus = useCallback(async () => {
        return await refreshAgentStatusForChat({
            currentChatJid,
            getAgentStatus,
            activeChatJidRef,
            wasAgentActiveRef,
            viewStateRef,
            refreshTimeline,
            clearAgentRunState,
            agentStatusRef,
            pendingRequestRef,
            thoughtBufferRef,
            draftBufferRef,
            setAgentStatus,
            setAgentDraft,
            setAgentPlan,
            setAgentThought,
            setPendingRequest,
            setActiveTurn,
            noteAgentActivity,
            clearLastActivityFlag,
        });
    }, [clearAgentRunState, clearLastActivityFlag, currentChatJid, noteAgentActivity, refreshTimeline, setActiveTurn]);

    const reconcileSilentTurn = useCallback(async () => {
        return await reconcileSilentTurnState({
            isAgentRunningRef,
            pendingRequestRef,
            currentTurnIdRef,
            silentRecoveryRef,
            silenceRefreshMs: SILENCE_REFRESH_MS,
            viewStateRef,
            refreshTimeline,
            refreshQueueState,
            refreshAgentStatus,
        });
    }, [refreshAgentStatus, refreshQueueState, refreshTimeline]);

    // Silence watchdog: detect stream quiet periods and trigger server re-sync.
    useEffect(() => {
        const intervalMs = Math.min(1000, Math.max(100, Math.floor(SILENCE_WARNING_MS / 2)));
        const interval = setInterval(() => {
            runSilenceWatchdogTick({
                isAgentRunningRef,
                pendingRequestRef,
                lastAgentEventRef,
                lastSilenceNoticeRef,
                agentStatusRef,
                silenceWarningMs: SILENCE_WARNING_MS,
                silenceFinalizeMs: SILENCE_FINALIZE_MS,
                silenceRefreshMs: SILENCE_REFRESH_MS,
                isCompactionStatus,
                setAgentStatus,
                reconcileSilentTurn,
            });
        }, intervalMs);

        return () => clearInterval(interval);
    }, [reconcileSilentTurn]);

    const handleUiVersionDrift = useCallback((serverVersion) => {
        return handleUiVersionDriftEvent({
            serverVersion,
            currentAppAssetVersion: CURRENT_APP_ASSET_VERSION,
            staleUiVersionRef,
            staleUiReloadScheduledRef,
            tabStoreHasUnsaved: () => tabStore.hasUnsaved(),
            isAgentRunningRef,
            pendingRequestRef,
            showIntentToast,
        });
    }, [isAgentRunningRef, pendingRequestRef, showIntentToast]);

    const handleConnectionStatusChange = useCallback((status) => {
        handleConnectionStatusChangeEvent({
            status,
            setConnectionStatus,
            setAgentStatus,
            setAgentDraft,
            setAgentPlan,
            setAgentThought,
            setPendingRequest,
            pendingRequestRef,
            clearAgentRunState,
            hasConnectedOnceRef,
            viewStateRef,
            refreshTimeline,
            refreshAgentStatus,
            refreshQueueState,
            refreshContextUsage,
        });
    }, [clearAgentRunState, refreshTimeline, refreshAgentStatus, refreshQueueState, refreshContextUsage]);


    // Handle hashtag click
    const handleHashtagClick = useCallback(async (hashtag) => {
        await loadHashtagTimeline({
            hashtag,
            setCurrentHashtag,
            setPosts,
            loadPosts,
        });
    }, [loadPosts]);

    // Go back to timeline
    const handleBackToTimeline = useCallback(async () => {
        await backToTimeline({
            setCurrentHashtag,
            setSearchQuery,
            setPosts,
            loadPosts,
        });
    }, [loadPosts]);

    // Handle search
    const handleSearch = useCallback(async (query, scope = searchScope) => {
        await searchTimeline({
            query,
            scope,
            currentChatJid,
            currentRootChatJid,
            searchPosts,
            setSearchScope,
            setSearchQuery,
            setCurrentHashtag,
            setPosts,
            setHasMore,
        });
    }, [currentChatJid, currentRootChatJid, searchScope]);

    const enterSearchMode = useCallback(() => {
        setSearchOpen(true);
        setSearchQuery(null);
        setCurrentHashtag(null);
        setSearchScope('current');
        setPosts([]);
    }, []);

    const exitSearchMode = useCallback(() => {
        setSearchOpen(false);
        setSearchQuery(null);
        loadPosts();
    }, [loadPosts]);

    const navigateToSearchResult = useCallback(() => {}, []);

    const isMainTimelineView = !currentHashtag && !searchQuery && !searchOpen;

    const handleDeletePost = useCallback(async (post) => {
        await deleteTimelinePost({
            post,
            posts,
            currentChatJid,
            deletePost,
            preserveTimelineScrollTop,
            setPosts,
            setRemovingPostIds,
            hasMoreRef,
            loadMoreRef,
        });
    }, [currentChatJid, posts, preserveTimelineScrollTop]);

    const {
        updateAgentProfile,
        updateUserProfile,
        applyModelState,
        refreshModelState,
        refreshActiveChatAgents,
        refreshCurrentChatBranches,
        refreshModelAndQueueState,
    } = useChatRefreshLifecycle({
        getAgents,
        setAgents,
        setUserProfile,
        applyBranding,
        readStoredNumber: getLocalStorageNumber,
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
    });

    const isComposeBoxAgentActive = isAgentTurnActive || agentStatus !== null;

    const handleInjectQueuedFollowup = useCallback((queuedItem) => {
        handleInjectQueuedFollowupAction({
            queuedItem,
            followupQueueItemsRef,
            dismissedQueueRowIdsRef,
            currentChatJid,
            refreshQueueState,
            setFollowupQueueItems,
            showIntentToast,
            steerAgentQueueItem,
            removeAgentQueueItem,
        });
    }, [currentChatJid, refreshQueueState, setFollowupQueueItems, showIntentToast]);

    const handleRemoveQueuedFollowup = useCallback((queuedItem) => {
        handleRemoveQueuedFollowupAction({
            queuedItem,
            followupQueueItemsRef,
            dismissedQueueRowIdsRef,
            currentChatJid,
            refreshQueueState,
            setFollowupQueueItems,
            showIntentToast,
            clearQueuedSteerStateIfStale,
            steerAgentQueueItem,
            removeAgentQueueItem,
        });
    }, [clearQueuedSteerStateIfStale, currentChatJid, refreshQueueState, setFollowupQueueItems, showIntentToast]);

    const handleMessageResponse = useCallback((response) => {
        handleMessageResponseRefresh({
            response,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            refreshContextUsage,
            refreshAutoresearchStatus,
            refreshQueueState,
        });
    }, [refreshActiveChatAgents, refreshAutoresearchStatus, refreshCurrentChatBranches, refreshContextUsage, refreshQueueState]);

    const handleExtensionPanelAction = useCallback(async (panel, action) => {
        const panelKey = typeof panel?.key === 'string' ? panel.key : '';
        const actionKey = typeof action?.key === 'string' ? action.key : '';
        const pendingKey = createPendingPanelActionKey(panelKey, actionKey);
        if (!panelKey || !actionKey) return;
        setPendingExtensionPanelActions((prev) => addPendingPanelAction(prev, panelKey, actionKey));
        try {
            const result = await runExtensionStatusPanelAction({
                panel,
                action,
                currentChatJid,
                stopAutoresearch,
                dismissAutoresearch,
                writeClipboard: (text) => navigator.clipboard.writeText(text),
            });
            if (result.refreshAutoresearchStatus) {
                void refreshAutoresearchStatus();
            }
            if (result.toast) {
                showIntentToast(result.toast.title, result.toast.detail, result.toast.kind, result.toast.durationMs);
            }
        } catch (error) {
            showIntentToast('Panel action failed', error?.message || 'Could not complete that action.', 'warning');
        } finally {
            setPendingExtensionPanelActions((prev) => removePendingPanelAction(prev, pendingKey));
        }
    }, [currentChatJid, refreshAutoresearchStatus, showIntentToast]);

    const closeBtwPanel = useCallback(() => {
        closeBtwPanelSession({
            btwAbortRef,
            setBtwSession,
        });
    }, []);

    const runBtwPrompt = useCallback(async (question) => {
        return await runBtwPromptSession({
            question,
            currentChatJid,
            streamSidePrompt,
            resolveBtwChatJid,
            showIntentToast,
            btwAbortRef,
            setBtwSession,
        });
    }, [currentChatJid, showIntentToast]);

    const handleBtwIntercept = useCallback(async ({ content }) => {
        return await handleBtwInterceptCommand({
            content,
            parseBtwCommand,
            closeBtwPanel,
            runBtwPrompt,
            showIntentToast,
        });
    }, [closeBtwPanel, runBtwPrompt, showIntentToast]);

    const handleBtwRetry = useCallback(() => {
        if (btwSession?.question) {
            void runBtwPrompt(btwSession.question);
        }
    }, [btwSession, runBtwPrompt]);

    const handleBtwInject = useCallback(async () => {
        await injectBtwSession({
            btwSession,
            buildBtwInjectionText,
            isComposeBoxAgentActive,
            currentChatJid,
            sendAgentMessage: api.sendAgentMessage,
            handleMessageResponse,
            showIntentToast,
        });
    }, [btwSession, currentChatJid, handleMessageResponse, isComposeBoxAgentActive, showIntentToast]);

    const buildFloatingWidgetDashboardSnapshot = useCallback(async (requestPayload = null) => {
        return buildFloatingWidgetDashboardData({
            requestPayload,
            currentChatJid,
            currentRootChatJid,
            getAgentStatus,
            getAgentContext,
            getAgentQueueState,
            getAgentModels,
            getActiveChatAgents,
            getChatBranches,
            getTimeline: api.getTimeline,
            rawPosts,
            activeChatAgents,
            currentChatBranches,
            contextUsage,
            followupQueueItems: followupQueueItemsRef.current,
            activeModel,
            activeThinkingLevel,
            supportsThinking,
            isAgentTurnActive,
        });
    }, [activeChatAgents, activeModel, activeThinkingLevel, contextUsage, currentChatBranches, currentChatJid, currentRootChatJid, isAgentTurnActive, rawPosts, supportsThinking]);

    useEffect(() => {
        setExtensionStatusPanels(new Map());
        setPendingExtensionPanelActions(new Set());
    }, [currentChatJid]);

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
        setHasMore,
        setPosts,
    ]);

    useEffect(() => {
        const ownerChatJid = paneStateOwnerChatJidRef.current || currentChatJid;
        chatPaneStateByChatRef.current.set(ownerChatJid, snapshotCurrentChatPaneState());
    }, [currentChatJid, snapshotCurrentChatPaneState]);

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
    }, [currentChatJid, refreshAgentStatus, refreshContextUsage, refreshQueueState, restoreChatPaneState, snapshotCurrentChatPaneState]);

    const refreshCurrentView = useCallback(() => {
        refreshCurrentViewState({
            viewStateRef,
            refreshTimeline,
            refreshModelAndQueueState,
        });
    }, [refreshModelAndQueueState, refreshTimeline]);

    const applyLiveGeneratedWidgetUpdate = useCallback((data, fallbackStatus = 'streaming') => {
        const updatedAt = new Date().toISOString();
        setFloatingWidget((current) => applyLiveFloatingWidgetUpdate(current, data, {
            fallbackStatus,
            currentChatJid,
            dismissedSessionKeys: dismissedLiveWidgetKeysRef.current,
            updatedAt,
        }));
    }, [currentChatJid]);

    const handleSseEvent = useCallback((eventType, data) => {
        handleAppSseEvent(eventType, data, {
            currentChatJid,
            updateAgentProfile,
            updateUserProfile,
            currentTurnIdRef,
            activeChatJidRef,
            pendingRequestRef,
            draftBufferRef,
            thoughtBufferRef,
            steerQueuedTurnIdRef,
            thoughtExpandedRef,
            draftExpandedRef,
            draftThrottleRef,
            thoughtThrottleRef,
            viewStateRef,
            followupQueueItemsRef,
            dismissedQueueRowIdsRef,
            scrollToBottomRef,
            hasMoreRef,
            loadMoreRef,
            lastAgentResponseRef,
            wasAgentActiveRef,
            setActiveTurn,
            applyLiveGeneratedWidgetUpdate,
            setFloatingWidget,
            clearLastActivityFlag,
            handleUiVersionDrift,
            setAgentStatus,
            setAgentDraft,
            setAgentPlan,
            setAgentThought,
            setPendingRequest,
            clearAgentRunState,
            getAgentStatus,
            noteAgentActivity,
            showLastActivity,
            refreshTimeline,
            refreshModelAndQueueState,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            notifyForFinalResponse,
            setContextUsage,
            refreshContextUsage,
            refreshQueueState,
            setFollowupQueueItems,
            clearQueuedSteerStateIfStale,
            setSteerQueuedTurnId,
            applyModelState,
            getAgentContext,
            setExtensionStatusPanels,
            setPendingExtensionPanelActions,
            refreshActiveEditorFromWorkspace,
            showIntentToast,
            removeStalledPost,
            setPosts,
            preserveTimelineScrollTop,
        });
    }, [
        applyLiveGeneratedWidgetUpdate,
        applyModelState,
        clearAgentRunState,
        clearLastActivityFlag,
        clearQueuedSteerStateIfStale,
        currentChatJid,
        handleUiVersionDrift,
        noteAgentActivity,
        notifyForFinalResponse,
        refreshActiveChatAgents,
        refreshActiveEditorFromWorkspace,
        refreshContextUsage,
        refreshCurrentChatBranches,
        refreshModelAndQueueState,
        refreshQueueState,
        refreshTimeline,
        removeStalledPost,
        setActiveTurn,
        setFollowupQueueItems,
        showIntentToast,
        showLastActivity,
        updateAgentProfile,
        updateUserProfile,
    ]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const api = window.__PICLAW_TEST_API || {};
        api.emit = handleSseEvent;
        api.reset = () => {
            removeStalledPost();
            clearAgentRunState();
            setAgentStatus(null);
            setAgentDraft({ text: '', totalLines: 0 });
            setAgentPlan('');
            setAgentThought({ text: '', totalLines: 0 });
            setPendingRequest(null);
        };
        api.finalize = () => finalizeStalledResponse();
        window.__PICLAW_TEST_API = api;
        return () => {
            if (window.__PICLAW_TEST_API === api) {
                window.__PICLAW_TEST_API = undefined;
            }
        };
    }, [clearAgentRunState, finalizeStalledResponse, handleSseEvent, removeStalledPost]);

    // Set up SSE connection
    useSseConnection({ handleSseEvent, handleConnectionStatusChange, loadPosts, onWake: refreshCurrentView, chatJid: currentChatJid });

    // Scroll to hash-linked message on load.
    useEffect(() => {
        if (!posts || posts.length === 0) return;
        const hash = location.hash;
        if (!hash || !hash.startsWith('#msg-')) return;
        const msgId = hash.slice(5);
        scrollToMessage(msgId);
        history.replaceState(null, '', location.pathname + location.search);
    }, [posts, scrollToMessage]);

    // Adaptive backstop poller: 15s while active, 60s while idle.
    const isAgentActive = agentStatus !== null;
    useEffect(() => {
        if (connectionStatus !== 'connected') return;
        const intervalMs = isAgentActive ? 15000 : 60000;
        const interval = setInterval(() => {
            runBackstopRefreshTick({
                viewStateRef,
                isAgentActive,
                refreshTimeline,
                refreshQueueState,
                refreshAgentStatus,
                refreshContextUsage,
                refreshAutoresearchStatus,
            });
        }, intervalMs);
        return () => clearInterval(interval);
    }, [connectionStatus, isAgentActive, refreshAgentStatus, refreshAutoresearchStatus, refreshContextUsage, refreshQueueState, refreshTimeline]);

    // Returning to the tab/webapp should restore context immediately.
    useEffect(() => {
        return watchReturnToApp(() => {
            refreshAgentStatus();
            refreshContextUsage();
            refreshQueueState();
            refreshAutoresearchStatus();
        });
    }, [refreshAgentStatus, refreshAutoresearchStatus, refreshContextUsage, refreshQueueState]);

    const toggleWorkspace = useCallback(() => {
        toggleWorkspaceVisibility(setWorkspaceOpen);
    }, []);

    const handleBranchPickerChange = useCallback((nextChatJid) => {
        handleBranchPickerChangeAction({
            nextChatJid,
            currentChatJid,
            chatOnlyMode,
            navigate,
        });
    }, [chatOnlyMode, currentChatJid, navigate]);

    const openRenameCurrentBranchForm = useCallback(() => {
        openRenameCurrentBranchFormAction({
            currentBranchRecord,
            renameBranchInFlight: renameBranchInFlightRef.current,
            renameBranchLockUntil: renameBranchLockUntilRef.current,
            getFormLock: getRenameBranchFormLock,
            setRenameBranchNameDraft,
            setIsRenameBranchFormOpen,
        });
    }, [currentBranchRecord]);

    const closeRenameCurrentBranchForm = useCallback(() => {
        closeRenameCurrentBranchFormAction({
            setIsRenameBranchFormOpen,
            setRenameBranchNameDraft,
        });
    }, []);

    const handleRenameCurrentBranch = useCallback(async (nextName) => {
        await renameCurrentBranchAction({
            currentBranchRecord,
            nextName,
            openRenameForm: openRenameCurrentBranchForm,
            renameBranchInFlightRef,
            renameBranchLockUntilRef,
            getFormLock: getRenameBranchFormLock,
            setIsRenamingBranch,
            renameChatBranch,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            showIntentToast,
            closeRenameForm: closeRenameCurrentBranchForm,
        });
    }, [closeRenameCurrentBranchForm, currentBranchRecord, refreshActiveChatAgents, refreshCurrentChatBranches, openRenameCurrentBranchForm, setIsRenamingBranch, showIntentToast]);

    const handlePruneCurrentBranch = useCallback(async (targetChatJid = null) => {
        await pruneCurrentBranchAction({
            targetChatJid,
            currentChatJid,
            currentBranchRecord,
            currentChatBranches,
            activeChatAgents,
            pruneChatBranch,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            showIntentToast,
            chatOnlyMode,
            navigate,
        });
    }, [activeChatAgents, chatOnlyMode, currentBranchRecord, currentChatBranches, currentChatJid, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    const handleRestoreBranch = useCallback(async (targetChatJid) => {
        await restoreBranchAction({
            targetChatJid,
            restoreChatBranch,
            currentChatBranches,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            showIntentToast,
            chatOnlyMode,
            navigate,
        });
    }, [chatOnlyMode, currentChatBranches, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    useEffect(() => runBranchLoaderModeEffect({
        branchLoaderMode,
        branchLoaderSourceChatJid,
        forkChatBranch: api.forkChatBranch,
        setBranchLoaderState,
        navigate,
    }), [branchLoaderMode, branchLoaderSourceChatJid, navigate]);

    const handleOpenFloatingWidget = useCallback((widget) => {
        openFloatingWidgetFromHost({
            widget,
            dismissedLiveWidgetKeysRef,
            setFloatingWidget,
        });
    }, []);

    const handleCloseFloatingWidget = useCallback(() => {
        closeFloatingWidgetFromHost({
            dismissedLiveWidgetKeysRef,
            setFloatingWidget,
        });
    }, []);

    const handleFloatingWidgetEvent = useCallback((event, widget) => {
        handleFloatingWidgetEventFromHost({
            event,
            widget,
            currentChatJid,
            isComposeBoxAgentActive,
            setFloatingWidget,
            handleCloseFloatingWidget,
            handleMessageResponse,
            showIntentToast,
            sendAgentMessage: api.sendAgentMessage,
            buildFloatingWidgetDashboardSnapshot,
        });
    }, [buildFloatingWidgetDashboardSnapshot, currentChatJid, handleCloseFloatingWidget, handleMessageResponse, isComposeBoxAgentActive, showIntentToast]);

    useEffect(() => {
        dismissedLiveWidgetKeysRef.current.clear();
        setFloatingWidget(null);
    }, [currentChatJid]);

    const handleCreateSessionFromCompose = useCallback(async () => {
        await createSessionFromComposeAction({
            currentChatJid,
            chatOnlyMode,
            forkChatBranch: api.forkChatBranch,
            refreshActiveChatAgents,
            refreshCurrentChatBranches,
            showIntentToast,
            navigate,
        });
    }, [chatOnlyMode, currentChatJid, navigate, refreshActiveChatAgents, refreshCurrentChatBranches, showIntentToast]);

    const handlePopOutPane = useCallback(async (path, label) => {
        await popOutPaneAction({
            isWebAppMode,
            path,
            label,
            showIntentToast,
            currentChatJid,
            tabStripActiveId,
            editorInstanceRef,
            dockInstanceRef,
            terminalTabPath: TERMINAL_TAB_PATH,
            dockVisible,
            resolveTab: (value) => tabStore.get(value),
            closeTab: handleTabClose,
            setDockVisible,
        });
    }, [currentChatJid, dockVisible, handleTabClose, isWebAppMode, showIntentToast, tabStripActiveId]);

    // Listen for preview-card / pane events that request opening a tab or standalone pane window.
    useEffect(() => watchPaneOpenEventBridge({
        openEditor,
        popOutPane: (path, label) => {
            void handlePopOutPane(path, label);
        },
    }), [handlePopOutPane, openEditor]);

    const handlePopOutChat = useCallback(async () => {
        await popOutChatAction({
            isWebAppMode,
            currentChatJid,
            currentRootChatJid,
            forkChatBranch: api.forkChatBranch,
            getActiveChatAgents: api.getActiveChatAgents,
            getChatBranches,
            setActiveChatAgents,
            setCurrentChatBranches,
            showIntentToast,
        });
    }, [currentChatJid, currentRootChatJid, isWebAppMode, showIntentToast]);

    useEffect(() => {
        applyStoredPaneLayoutAction({
            editorOpen,
            shellElement: appShellRef.current,
            editorWidthRef,
            dockHeightRef,
            sidebarWidthRef,
            readStoredNumber: getLocalStorageNumber,
        });
    }, [editorOpen]);


    // Keyboard shortcut: Ctrl+` to toggle dock (only when dock panes exist)
    useEffect(() => {
        if (!hasDockPanes || chatOnlyMode) return;
        return watchDockToggleShortcut(toggleDock);
    }, [toggleDock, hasDockPanes, chatOnlyMode]);

    // Keyboard shortcuts: Ctrl+Shift+Z to toggle zen mode, Esc to exit zen
    useEffect(() => {
        if (chatOnlyMode) return;
        return watchZenModeShortcuts({
            toggleZenMode,
            exitZenMode,
            zenMode,
            isZenModeActive: () => zenMode,
        });
    }, [toggleZenMode, exitZenMode, zenMode, chatOnlyMode]);

    const steerQueued = Boolean(steerQueuedTurnId && (steerQueuedTurnId === (agentStatus?.turn_id || currentTurnId)));

    const appShellRenderMode = resolveAppShellRenderMode({
        branchLoaderMode,
        panePopoutMode,
    });

    if (appShellRenderMode === 'branch-loader') {
        return renderBranchLoaderMode(branchLoaderState);
    }

    if (appShellRenderMode === 'pane-popout') {
        return renderPanePopoutMode({
            appShellRef,
            editorOpen,
            hidePanePopoutControls,
            panePopoutHasMenuActions,
            panePopoutTitle,
            tabStripTabs,
            tabStripActiveId,
            handleTabActivate,
            previewTabs,
            handleTabTogglePreview,
            editorContainerRef,
            getPaneContent: () => editorInstanceRef.current?.getContent?.(),
            panePopoutPath,
        });
    }

    return renderMainShell({
        appShellRef,
        workspaceOpen,
        editorOpen,
        chatOnlyMode,
        zenMode,
        isRenameBranchFormOpen,
        closeRenameCurrentBranchForm,
        handleRenameCurrentBranch,
        renameBranchNameDraft,
        renameBranchNameInputRef,
        setRenameBranchNameDraft,
        renameBranchDraftState,
        isRenamingBranch,
        addFileRef,
        openEditor,
        openTerminalTab,
        openVncTab,
        hasDockPanes,
        toggleDock,
        dockVisible,
        handleSplitterMouseDown,
        handleSplitterTouchStart,
        showEditorPaneContainer,
        tabStripTabs,
        tabStripActiveId,
        handleTabActivate,
        handleTabClose,
        handleTabCloseOthers,
        handleTabCloseAll,
        handleTabTogglePin,
        handleTabTogglePreview,
        handleTabEditSource,
        previewTabs,
        tabPaneOverrides,
        toggleZenMode,
        handlePopOutPane,
        isWebAppMode,
        editorContainerRef,
        editorInstanceRef,
        handleDockSplitterMouseDown,
        handleDockSplitterTouchStart,
        TERMINAL_TAB_PATH,
        dockContainerRef,
        handleEditorSplitterMouseDown,
        handleEditorSplitterTouchStart,
        searchQuery,
        isIOSDevice,
        currentBranchRecord,
        currentChatJid,
        currentChatBranches,
        handleBranchPickerChange,
        formatBranchPickerLabel,
        openRenameCurrentBranchForm,
        handlePruneCurrentBranch,
        currentHashtag,
        handleBackToTimeline,
        activeSearchScopeLabel,
        posts,
        isMainTimelineView,
        hasMore,
        loadMore,
        timelineRef,
        handleHashtagClick,
        addMessageRef,
        scrollToMessage,
        openFileFromPill,
        handleDeletePost,
        handleOpenFloatingWidget,
        agents,
        userProfile,
        removingPostIds,
        agentStatus,
        isCompactionStatus,
        agentDraft,
        agentPlan,
        agentThought,
        pendingRequest,
        intentToast,
        currentTurnId,
        steerQueued,
        handlePanelToggle,
        btwSession,
        closeBtwPanel,
        handleBtwRetry,
        handleBtwInject,
        floatingWidget,
        handleCloseFloatingWidget,
        handleFloatingWidgetEvent,
        extensionStatusPanels,
        pendingExtensionPanelActions,
        handleExtensionPanelAction,
        searchOpen,
        followupQueueItems,
        handleInjectQueuedFollowup,
        handleRemoveQueuedFollowup,
        viewStateRef,
        loadPosts,
        scrollToBottom,
        searchScope,
        handleSearch,
        setSearchScope,
        enterSearchMode,
        exitSearchMode,
        fileRefs,
        removeFileRef,
        clearFileRefs,
        setFileRefsFromCompose,
        messageRefs,
        removeMessageRef,
        clearMessageRefs,
        setMessageRefsFromCompose,
        handleCreateSessionFromCompose,
        handleRestoreBranch,
        attachActiveEditorFile,
        followupQueueCount,
        handleBtwIntercept,
        handleMessageResponse,
        handleComposeSubmitError,
        handlePopOutChat,
        isComposeBoxAgentActive,
        activeChatAgents,
        connectionStatus,
        activeModel,
        activeModelUsage,
        activeThinkingLevel,
        supportsThinking,
        contextUsage,
        notificationsEnabled,
        notificationPermission,
        handleToggleNotifications,
        setActiveModel,
        applyModelState,
        setPendingRequest,
        pendingRequestRef,
        toggleWorkspace,
    });
}

function App() {
    const [locationHref, setLocationHref] = useState(() =>
        typeof window === 'undefined' ? 'http://localhost/' : window.location.href
    );

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;
        const handlePopState = () => setLocationHref(window.location.href);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = useCallback((nextUrl, options = {}) => {
        if (typeof window === 'undefined') return;
        const { replace = false } = options || {};
        const resolved = new URL(String(nextUrl || ''), window.location.href).toString();
        if (replace) {
            window.history.replaceState(null, '', resolved);
        } else {
            window.history.pushState(null, '', resolved);
        }
        setLocationHref(window.location.href);
    }, []);

    const locationParams = useMemo(() => new URL(locationHref).searchParams, [locationHref]);
    return html`<${MainApp} locationParams=${locationParams} navigate=${navigate} />`;
}

// Mount the app
render(html`<${App} />`, document.getElementById('app'));
