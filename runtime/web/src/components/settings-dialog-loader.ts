// @ts-nocheck
import { html, useEffect, useState } from '../vendor/preact-htm.js';

type SettingsDialogModule = typeof import('./settings-dialog.js');

type LoaderSnapshot = {
    loaded: boolean;
    loading: boolean;
    pendingOpen: boolean;
};

let settingsDialogModuleCache: SettingsDialogModule | null = null;
let settingsDialogModulePromise: Promise<SettingsDialogModule> | null = null;
let settingsDialogPendingOpen = false;
let settingsDialogLoading = false;
const settingsDialogSubscribers = new Set<(snapshot: LoaderSnapshot) => void>();

function getLoaderSnapshot(): LoaderSnapshot {
    return {
        loaded: Boolean(settingsDialogModuleCache),
        loading: settingsDialogLoading,
        pendingOpen: settingsDialogPendingOpen,
    };
}

function notifySettingsDialogSubscribers(): void {
    const snapshot = getLoaderSnapshot();
    for (const subscriber of settingsDialogSubscribers) {
        try {
            subscriber(snapshot);
        } catch (error) {
            console.debug('[settings-dialog-loader] Failed to notify subscriber.', error);
        }
    }
}

function loadSettingsDialogModule(): Promise<SettingsDialogModule> {
    if (settingsDialogModuleCache) return Promise.resolve(settingsDialogModuleCache);
    if (settingsDialogModulePromise) return settingsDialogModulePromise;

    settingsDialogLoading = true;
    notifySettingsDialogSubscribers();

    settingsDialogModulePromise = import('./settings-dialog.js')
        .then((mod) => {
            settingsDialogModuleCache = mod;
            settingsDialogLoading = false;
            settingsDialogModulePromise = null;
            notifySettingsDialogSubscribers();
            return mod;
        })
        .catch((error) => {
            settingsDialogLoading = false;
            settingsDialogModulePromise = null;
            settingsDialogPendingOpen = false;
            notifySettingsDialogSubscribers();
            throw error;
        });

    return settingsDialogModulePromise;
}

function subscribeSettingsDialogLoader(callback: (snapshot: LoaderSnapshot) => void): () => void {
    settingsDialogSubscribers.add(callback);
    callback(getLoaderSnapshot());
    return () => settingsDialogSubscribers.delete(callback);
}

function requestOpenSettingsDialog(): void {
    settingsDialogPendingOpen = true;
    notifySettingsDialogSubscribers();
    loadSettingsDialogModule().catch((error) => {
        console.error('[settings-dialog-loader] Failed to lazy-load settings dialog.', error);
    });
}

export function openSettingsDialog() {
    window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
}

export function SettingsDialogLoader() {
    const [snapshot, setSnapshot] = useState(getLoaderSnapshot);

    useEffect(() => subscribeSettingsDialogLoader(setSnapshot), []);
    useEffect(() => {
        const handleOpenSettings = () => {
            if (!settingsDialogModuleCache) {
                requestOpenSettingsDialog();
            }
        };
        window.addEventListener('piclaw:open-settings', handleOpenSettings);
        return () => window.removeEventListener('piclaw:open-settings', handleOpenSettings);
    }, []);

    const showLoadingOverlay = !snapshot.loaded && (snapshot.pendingOpen || snapshot.loading);
    const LoadedDialog = settingsDialogModuleCache?.SettingsDialog || null;

    return html`
        ${showLoadingOverlay && html`
            <div class="settings-dialog-backdrop settings-dialog-backdrop-loader" aria-live="polite" aria-busy="true">
                <div class="settings-dialog settings-dialog-loading-shell" role="status" aria-label="Loading settings">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `}
        ${LoadedDialog && html`<${LoadedDialog} initialOpen=${snapshot.pendingOpen} />`}
    `;
}

export function preloadSettingsDialog(): Promise<SettingsDialogModule> {
    return loadSettingsDialogModule();
}
