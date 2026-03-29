// @ts-nocheck
// Main authenticated web UI entry point.
import { html, render, useState, useEffect, useCallback, useRef, useMemo } from './vendor/preact-htm.js';
import * as api from './api.js';
import { paneRegistry, editorPaneExtension, preloadEditorBundle, terminalPaneExtension, terminalTabPaneExtension, TERMINAL_TAB_PATH, vncPaneExtension, VNC_TAB_PREFIX, workspacePreviewPaneExtension, workspaceMarkdownPreviewPaneExtension, officeViewerPaneExtension, csvViewerPaneExtension, pdfViewerPaneExtension, imageViewerPaneExtension, videoViewerPaneExtension, drawioPaneExtension, mindmapPaneExtension, kanbanPaneExtension, tabStore } from './panes/index.js';
import { getLocalStorageBoolean, getLocalStorageNumber, setLocalStorageItem } from './utils/storage.js';
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
import {
    isStandaloneWebAppMode,
} from './ui/chat-window.js';
import { isCompactionStatus } from './ui/status-duration.js';
import {
    handleMessageResponseRefresh,
} from './ui/app-auth-bootstrap.js';
import {
    useChatRefreshLifecycle,
} from './ui/app-chat-refresh-lifecycle.js';
import {
    useSidepanelOrchestration,
} from './ui/app-sidepanel-orchestration.js';
import {
    useComposeReferenceOrchestration,
} from './ui/app-compose-reference-orchestration.js';
import {
    useViewRefreshLifecycle,
} from './ui/app-view-refresh-lifecycle.js';
import {
    useRealtimeLifecycleOrchestration,
} from './ui/app-realtime-lifecycle-orchestration.js';
import {
    useAgentStatusLifecycle,
} from './ui/app-agent-status-lifecycle.js';
import {
    useTimelineViewActions,
} from './ui/app-timeline-view-actions.js';
import {
    useAgentActivityOrchestration,
} from './ui/app-agent-activity-orchestration.js';
import {
    useTimelineScrollOrchestration,
} from './ui/app-timeline-scroll-orchestration.js';
import {
    useAppLocationNavigation,
} from './ui/app-location-navigation.js';
import { installStandaloneMobileViewportFix } from './ui/mobile-viewport.js';
import { resolveOptionalApi } from './ui/optional-api.js';
import { watchStandaloneWebAppMode } from './ui/app-resume.js';
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
    useBranchPaneLifecycle,
} from './ui/app-branch-pane-lifecycle-actions.js';
import {
    useChatPaneRuntimeOrchestration,
} from './ui/app-chat-pane-runtime-orchestration.js';
import {
    handleInjectQueuedFollowupAction,
    handleRemoveQueuedFollowupAction,
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
    finalizeStalledResponse as finalizeStalledResponseState,
} from './ui/app-agent-status-orchestration.js';

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

    const {
        addFileRef,
        removeFileRef,
        clearFileRefs,
        setFileRefsFromCompose,
        showIntentToast,
        openFileFromPill,
        attachActiveEditorFile,
        addMessageRef,
        scrollToMessage,
        removeMessageRef,
        clearMessageRefs,
        setMessageRefsFromCompose,
        handleComposeSubmitError,
    } = useComposeReferenceOrchestration({
        setIntentToast,
        intentToastTimerRef,
        editorOpen,
        openEditor,
        resolvePane: (context) => paneRegistry.resolve(context),
        tabStripActiveId,
        setFileRefs,
        setMessageRefs,
        currentChatJid,
        getThread: api.getThread,
        setPosts,
    });

    removeFileRefRef.current = removeFileRef;

    const {
        noteAgentActivity,
        clearLastActivityTimer,
        clearLastActivityFlag,
        showLastActivity,
        clearAgentRunState,
        handlePanelToggle,
    } = useAgentActivityOrchestration({
        lastActivityTtlMs: LAST_ACTIVITY_TTL_MS,
        lastActivityTimerRef,
        lastActivityTokenRef,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        isAgentRunningRef,
        setIsAgentTurnActive,
        setAgentStatus,
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
        setCurrentTurnId,
        setSteerQueuedTurnId,
        currentTurnIdRefForPanel: currentTurnIdRef,
        setAgentThoughtVisibility,
        getAgentThought,
        setAgentThought,
        setAgentDraft,
    });

    const {
        clearQueuedSteerStateIfStale,
        snapshotCurrentChatPaneState,
        restoreChatPaneState,
        setActiveTurn,
        notifyForFinalResponse,
    } = useChatPaneRuntimeOrchestration({
        isAgentTurnActive,
        steerQueuedTurnId,
        currentTurnId,
        steerQueuedTurnIdRef,
        setSteerQueuedTurnId,
        agentStatus,
        agentDraft,
        agentPlan,
        agentThought,
        pendingRequest,
        pendingRequestRef,
        followupQueueItems,
        activeModel,
        activeThinkingLevel,
        supportsThinking,
        activeModelUsage,
        contextUsage,
        isAgentRunningRef,
        wasAgentActiveRef,
        draftBufferRef,
        thoughtBufferRef,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        lastAgentResponseRef,
        currentTurnIdRef,
        thoughtExpandedRef,
        draftExpandedRef,
        agentStatusRef,
        silentRecoveryRef,
        clearLastActivityTimer,
        setIsAgentTurnActive,
        setAgentStatus,
        setAgentDraft,
        setAgentPlan,
        setAgentThought,
        setPendingRequest,
        setCurrentTurnId,
        setFollowupQueueItems,
        setActiveModel,
        setActiveThinkingLevel,
        setSupportsThinking,
        setActiveModelUsage,
        setContextUsage,
        lastNotifiedIdRef,
        agentsRef,
        notify,
    });

    // Scroll to bottom of timeline (column-reverse: bottom is scrollTop=0)
    // Only auto-scroll if user is already near the bottom (within 150px).
    const scrollToBottomRef = useRef(null);
    const {
        scrollToBottom,
        preserveTimelineScroll,
        preserveTimelineScrollTop,
        filterQueuedPosts,
    } = useTimelineScrollOrchestration({
        timelineRef,
        viewStateRef,
        followupQueueRowIdsRef,
    });
    scrollToBottomRef.current = scrollToBottom;

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


    const {
        refreshQueueState,
        refreshContextUsage,
        refreshAutoresearchStatus,
        refreshAgentStatus,
        handleUiVersionDrift,
        handleConnectionStatusChange,
    } = useAgentStatusLifecycle({
        currentChatJid,
        activeChatJidRef,
        queueRefreshGenRef,
        dismissedQueueRowIdsRef,
        getAgentQueueState,
        setFollowupQueueItems,
        clearQueuedSteerStateIfStale,
        getAgentContext,
        setContextUsage,
        getAutoresearchStatus,
        setExtensionStatusPanels,
        setPendingExtensionPanelActions,
        getAgentStatus,
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
        isAgentRunningRef,
        currentTurnIdRef,
        silentRecoveryRef,
        silenceRefreshMs: SILENCE_REFRESH_MS,
        lastAgentEventRef,
        lastSilenceNoticeRef,
        silenceWarningMs: SILENCE_WARNING_MS,
        silenceFinalizeMs: SILENCE_FINALIZE_MS,
        isCompactionStatus,
        serverVersionContext: {
            currentAppAssetVersion: CURRENT_APP_ASSET_VERSION,
            staleUiVersionRef,
            staleUiReloadScheduledRef,
            tabStoreHasUnsaved: () => tabStore.hasUnsaved(),
            isAgentRunningRef,
            pendingRequestRef,
            showIntentToast,
        },
        setConnectionStatus,
        setPendingRequestForConnection: setPendingRequest,
        hasConnectedOnceRef,
    });


    const {
        handleHashtagClick,
        handleBackToTimeline,
        handleSearch,
        enterSearchMode,
        exitSearchMode,
        isMainTimelineView,
        handleDeletePost,
    } = useTimelineViewActions({
        currentHashtag,
        searchQuery,
        searchOpen,
        searchScope,
        currentChatJid,
        currentRootChatJid,
        posts,
        loadPosts,
        searchPosts,
        setCurrentHashtag,
        setSearchQuery,
        setSearchOpen,
        setSearchScope,
        setPosts,
        setHasMore,
        preserveTimelineScrollTop,
        setRemovingPostIds,
        deletePost,
        hasMoreRef,
        loadMoreRef,
    });

    const navigateToSearchResult = useCallback(() => {}, []);

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

    const {
        handleExtensionPanelAction,
        closeBtwPanel,
        handleBtwIntercept,
        handleBtwRetry,
        handleBtwInject,
        handleOpenFloatingWidget,
        handleCloseFloatingWidget,
        handleFloatingWidgetEvent,
    } = useSidepanelOrchestration({
        currentChatJid,
        currentRootChatJid,
        isComposeBoxAgentActive,
        showIntentToast,
        setPendingExtensionPanelActions,
        refreshAutoresearchStatus,
        stopAutoresearch,
        dismissAutoresearch,
        streamSidePrompt,
        btwAbortRef,
        btwSession,
        setBtwSession,
        sendAgentMessage: api.sendAgentMessage,
        handleMessageResponse,
        dismissedLiveWidgetKeysRef,
        setFloatingWidget,
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
        followupQueueItemsRef,
        activeModel,
        activeThinkingLevel,
        supportsThinking,
        isAgentTurnActive,
    });

    const {
        refreshCurrentView,
        applyLiveGeneratedWidgetUpdate,
    } = useViewRefreshLifecycle({
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
    });

    useRealtimeLifecycleOrchestration({
        currentChatJid,
        posts,
        scrollToMessage,
        handleConnectionStatusChange,
        loadPosts,
        refreshCurrentView,
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
        finalizeStalledResponse,
        connectionStatus,
        agentStatus,
        refreshAgentStatus,
        refreshAutoresearchStatus,
    });

    const {
        toggleWorkspace,
        handleBranchPickerChange,
        openRenameCurrentBranchForm,
        closeRenameCurrentBranchForm,
        handleRenameCurrentBranch,
        handlePruneCurrentBranch,
        handleRestoreBranch,
        handleCreateSessionFromCompose,
        handlePopOutPane,
        handlePopOutChat,
    } = useBranchPaneLifecycle({
        setWorkspaceOpen,
        currentChatJid,
        chatOnlyMode,
        navigate,
        currentBranchRecord,
        renameBranchInFlightRef,
        renameBranchLockUntilRef,
        getFormLock: getRenameBranchFormLock,
        setRenameBranchNameDraft,
        setIsRenameBranchFormOpen,
        setIsRenamingBranch,
        renameChatBranch,
        refreshActiveChatAgents,
        refreshCurrentChatBranches,
        showIntentToast,
        currentChatBranches,
        activeChatAgents,
        pruneChatBranch,
        restoreChatBranch,
        branchLoaderMode,
        branchLoaderSourceChatJid,
        forkChatBranch: api.forkChatBranch,
        setBranchLoaderState,
        currentRootChatJid,
        isWebAppMode,
        getActiveChatAgents: api.getActiveChatAgents,
        getChatBranches,
        setActiveChatAgents,
        setCurrentChatBranches,
        openEditor,
        tabStripActiveId,
        editorInstanceRef,
        dockInstanceRef,
        terminalTabPath: TERMINAL_TAB_PATH,
        dockVisible,
        resolveTab: (value) => tabStore.get(value),
        closeTab: handleTabClose,
        setDockVisible,
        editorOpen,
        shellElement: appShellRef.current,
        editorWidthRef,
        dockHeightRef,
        sidebarWidthRef,
        readStoredNumber: getLocalStorageNumber,
    });

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
    const { locationParams, navigate } = useAppLocationNavigation();
    return html`<${MainApp} locationParams=${locationParams} navigate=${navigate} />`;
}

// Mount the app
render(html`<${App} />`, document.getElementById('app'));
