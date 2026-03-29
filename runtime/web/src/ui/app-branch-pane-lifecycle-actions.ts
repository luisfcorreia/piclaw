import { watchPaneOpenEvents } from './app-browser-events.js';
import {
  closeRenameBranchForm,
  openRenameBranchForm,
  pruneCurrentBranch,
  renameCurrentBranch,
  restoreBranch,
  runBranchLoader,
} from './app-branch-actions.js';
import {
  applyStoredPaneLayout,
  closeTransferredPaneSource,
  navigateToSelectedBranch,
  resolvePanePopoutTransfer,
} from './app-branch-pane-orchestration.js';
import {
  createSessionFromCompose,
  popOutChat,
  popOutPane,
} from './app-window-actions.js';

type StateSetter<T> = (next: T | ((prev: T) => T)) => void;

interface RefBox<T> {
  current: T;
}

interface PaneTransferInstanceLike {
  preparePopoutTransfer?: () => Promise<Record<string, string> | null> | Record<string, string> | null;
}

interface BranchRecordLike {
  chat_jid?: string;
}

export function toggleWorkspaceVisibility(setWorkspaceOpen: StateSetter<boolean>): void {
  setWorkspaceOpen((prev) => !prev);
}

export interface HandleBranchPickerChangeActionOptions {
  nextChatJid: unknown;
  currentChatJid: string;
  chatOnlyMode?: boolean;
  navigate: (url: string) => void;
  hasWindow?: boolean;
  currentHref?: string;
}

export function handleBranchPickerChangeAction(options: HandleBranchPickerChangeActionOptions): boolean {
  const {
    nextChatJid,
    currentChatJid,
    chatOnlyMode,
    navigate,
    hasWindow = typeof window !== 'undefined',
    currentHref = hasWindow ? window.location.href : 'http://localhost/',
  } = options;

  return navigateToSelectedBranch({
    hasWindow,
    nextChatJid,
    currentChatJid,
    chatOnlyMode,
    currentHref,
    navigate,
  });
}

export interface OpenRenameCurrentBranchFormActionOptions {
  currentBranchRecord: BranchRecordLike | null;
  renameBranchInFlight: boolean;
  renameBranchLockUntil: number;
  getFormLock: () => number;
  setRenameBranchNameDraft: (value: string) => void;
  setIsRenameBranchFormOpen: (open: boolean) => void;
  hasWindow?: boolean;
}

export function openRenameCurrentBranchFormAction(options: OpenRenameCurrentBranchFormActionOptions): boolean {
  const {
    currentBranchRecord,
    renameBranchInFlight,
    renameBranchLockUntil,
    getFormLock,
    setRenameBranchNameDraft,
    setIsRenameBranchFormOpen,
    hasWindow = typeof window !== 'undefined',
  } = options;

  return openRenameBranchForm({
    hasWindow,
    currentBranchRecord,
    renameBranchInFlight,
    renameBranchLockUntil,
    getFormLock,
    setRenameBranchNameDraft,
    setIsRenameBranchFormOpen,
  });
}

export function closeRenameCurrentBranchFormAction(options: {
  setIsRenameBranchFormOpen: (open: boolean) => void;
  setRenameBranchNameDraft: (value: string) => void;
}): void {
  closeRenameBranchForm(options);
}

export interface RenameCurrentBranchActionOptions {
  currentBranchRecord: BranchRecordLike | null;
  nextName: string;
  openRenameForm: () => void;
  renameBranchInFlightRef: RefBox<boolean>;
  renameBranchLockUntilRef: RefBox<number>;
  getFormLock: () => number;
  setIsRenamingBranch: StateSetter<boolean>;
  renameChatBranch: (chatJid: string, name: string) => Promise<any>;
  refreshActiveChatAgents: () => void;
  refreshCurrentChatBranches: () => void;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  closeRenameForm: () => void;
  hasWindow?: boolean;
}

export async function renameCurrentBranchAction(options: RenameCurrentBranchActionOptions): Promise<void> {
  const {
    hasWindow = typeof window !== 'undefined',
    ...rest
  } = options;

  await renameCurrentBranch({
    hasWindow,
    ...rest,
  });
}

export interface PruneCurrentBranchActionOptions {
  targetChatJid?: string | null;
  currentChatJid: string;
  currentBranchRecord: BranchRecordLike | null;
  currentChatBranches: any[];
  activeChatAgents: any[];
  pruneChatBranch: (chatJid: string) => Promise<any>;
  refreshActiveChatAgents: () => void;
  refreshCurrentChatBranches: () => void;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  chatOnlyMode?: boolean;
  navigate: (url: string) => void;
  hasWindow?: boolean;
  baseHref?: string;
}

export async function pruneCurrentBranchAction(options: PruneCurrentBranchActionOptions): Promise<void> {
  const {
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
    ...rest
  } = options;

  await pruneCurrentBranch({
    hasWindow,
    baseHref,
    ...rest,
  });
}

export interface RestoreBranchActionOptions {
  targetChatJid: string;
  restoreChatBranch: (chatJid: string) => Promise<any>;
  currentChatBranches: any[];
  refreshActiveChatAgents: () => void;
  refreshCurrentChatBranches: () => void;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  chatOnlyMode?: boolean;
  navigate: (url: string) => void;
  hasWindow?: boolean;
  baseHref?: string;
}

export async function restoreBranchAction(options: RestoreBranchActionOptions): Promise<void> {
  const {
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
    ...rest
  } = options;

  await restoreBranch({
    baseHref,
    ...rest,
  });
}

export interface RunBranchLoaderModeEffectOptions {
  branchLoaderMode: boolean;
  branchLoaderSourceChatJid: string;
  forkChatBranch: (chatJid: string) => Promise<any>;
  setBranchLoaderState: StateSetter<any>;
  navigate: (url: string, options?: Record<string, unknown>) => void;
  hasWindow?: boolean;
  baseHref?: string;
  runBranchLoaderImpl?: typeof runBranchLoader;
}

/**
 * Start the branch-loader async flow and return an effect cleanup that cancels stale writes.
 */
export function runBranchLoaderModeEffect(options: RunBranchLoaderModeEffectOptions): (() => void) | undefined {
  const {
    branchLoaderMode,
    branchLoaderSourceChatJid,
    forkChatBranch,
    setBranchLoaderState,
    navigate,
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
    runBranchLoaderImpl = runBranchLoader,
  } = options;

  if (!branchLoaderMode || !hasWindow) {
    return undefined;
  }

  let cancelled = false;
  void runBranchLoaderImpl({
    branchLoaderSourceChatJid,
    forkChatBranch,
    setBranchLoaderState,
    navigate,
    baseHref,
    isCancelled: () => cancelled,
  });

  return () => {
    cancelled = true;
  };
}

export interface CreateSessionFromComposeActionOptions {
  currentChatJid: string;
  chatOnlyMode?: boolean;
  forkChatBranch: (chatJid: string) => Promise<any>;
  refreshActiveChatAgents: () => void;
  refreshCurrentChatBranches: () => void;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  navigate: (url: string) => void;
  hasWindow?: boolean;
  baseHref?: string;
}

export async function createSessionFromComposeAction(options: CreateSessionFromComposeActionOptions): Promise<void> {
  const {
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
    ...rest
  } = options;

  await createSessionFromCompose({
    baseHref,
    ...rest,
  });
}

export interface PopOutPaneActionOptions {
  isWebAppMode: boolean;
  path: string;
  label?: string | null;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  currentChatJid: string;
  tabStripActiveId: string | null;
  editorInstanceRef: RefBox<PaneTransferInstanceLike | null>;
  dockInstanceRef: RefBox<PaneTransferInstanceLike | null>;
  terminalTabPath: string;
  dockVisible: boolean;
  resolveTab: (path: string) => { dirty?: boolean } | null | undefined;
  closeTab: (path: string) => void;
  setDockVisible: (visible: boolean) => void;
  hasWindow?: boolean;
  baseHref?: string;
}

export async function popOutPaneAction(options: PopOutPaneActionOptions): Promise<void> {
  const {
    isWebAppMode,
    path,
    label,
    showIntentToast,
    currentChatJid,
    tabStripActiveId,
    editorInstanceRef,
    dockInstanceRef,
    terminalTabPath,
    dockVisible,
    resolveTab,
    closeTab,
    setDockVisible,
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
  } = options;

  await popOutPane({
    hasWindow,
    isWebAppMode,
    path,
    label,
    showIntentToast,
    currentChatJid,
    baseHref,
    resolveSourceTransfer: (panePath: string) => resolvePanePopoutTransfer({
      panePath,
      tabStripActiveId,
      editorInstanceRef,
      dockInstanceRef,
      terminalTabPath,
    }),
    closeSourcePaneIfTransferred: (panePath: string) => {
      closeTransferredPaneSource({
        panePath,
        terminalTabPath,
        dockVisible,
        resolveTab,
        closeTab,
        setDockVisible,
      });
    },
  });
}

export interface WatchPaneOpenEventBridgeOptions {
  openEditor: (path: string, options?: Record<string, unknown>) => void;
  popOutPane: (path: string, label?: string | null) => void;
  watchPaneOpenEventsImpl?: typeof watchPaneOpenEvents;
}

export function watchPaneOpenEventBridge(options: WatchPaneOpenEventBridgeOptions): (() => void) | undefined {
  const {
    openEditor,
    popOutPane,
    watchPaneOpenEventsImpl = watchPaneOpenEvents,
  } = options;

  return watchPaneOpenEventsImpl({
    openTab: (path, label) => openEditor(path, label ? { label } : undefined),
    popOutPane: (path, label) => {
      popOutPane(path, label);
    },
  });
}

export interface PopOutChatActionOptions {
  isWebAppMode: boolean;
  currentChatJid: string;
  currentRootChatJid: string;
  forkChatBranch: (chatJid: string) => Promise<any>;
  getActiveChatAgents: (chatJid: string) => Promise<any>;
  getChatBranches: (chatJid: string) => Promise<any>;
  setActiveChatAgents: StateSetter<any[]>;
  setCurrentChatBranches: StateSetter<any[]>;
  showIntentToast: (title: string, detail?: string | null, kind?: string, durationMs?: number) => void;
  hasWindow?: boolean;
  baseHref?: string;
}

export async function popOutChatAction(options: PopOutChatActionOptions): Promise<void> {
  const {
    hasWindow = typeof window !== 'undefined',
    baseHref = hasWindow ? window.location.href : 'http://localhost/',
    ...rest
  } = options;

  await popOutChat({
    hasWindow,
    baseHref,
    ...rest,
  });
}

export interface ApplyStoredPaneLayoutActionOptions {
  editorOpen: boolean;
  shellElement: HTMLElement | null;
  editorWidthRef: RefBox<number>;
  dockHeightRef: RefBox<number>;
  sidebarWidthRef: RefBox<number>;
  readStoredNumber: (key: string, fallback?: number | null) => number | null;
  hasWindow?: boolean;
}

export function applyStoredPaneLayoutAction(options: ApplyStoredPaneLayoutActionOptions): void {
  const {
    hasWindow = typeof window !== 'undefined',
    ...rest
  } = options;

  applyStoredPaneLayout({
    hasWindow,
    ...rest,
  });
}
