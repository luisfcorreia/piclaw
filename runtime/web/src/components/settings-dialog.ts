// @ts-nocheck
/**
 * settings-dialog.ts — Floating settings dialog shell.
 * Self-manages open/close via 'piclaw:open-settings' custom event.
 * Section components live in ./settings/*.ts submodules.
 * Extension panes register via ./settings/pane-registry.ts.
 */
import { html, useState, useEffect, useCallback, useRef } from '../vendor/preact-htm.js';
import { BodyPortal } from './body-portal.js';
import { getRegisteredSettingsPanes } from './settings/pane-registry.js';

type SettingsSectionComponent = unknown;
type BuiltinSectionId = 'general' | 'providers' | 'models' | 'theme' | 'quick-actions' | 'keychain' | 'tools' | 'addons';

const builtinSectionComponentCache = new Map<BuiltinSectionId, SettingsSectionComponent>();
const builtinSectionLoadPromiseCache = new Map<BuiltinSectionId, Promise<SettingsSectionComponent>>();
let extensionSettingsPanesReady = false;
let extensionSettingsPanesPromise: Promise<void> | null = null;

const BUILTIN_SECTION_LOADERS: Record<BuiltinSectionId, () => Promise<SettingsSectionComponent>> = {
    general: () => import('./settings/general.js').then(mod => mod.GeneralSection),
    providers: () => import('./settings/providers.js').then(mod => mod.ProvidersSection),
    models: () => import('./settings/models.js').then(mod => mod.ModelsSection),
    theme: () => import('./settings/appearance.js').then(mod => mod.ThemeSection),
    'quick-actions': () => import('./settings/quick-actions.js').then(mod => mod.QuickActionsSection),
    keychain: () => import('./settings/keychain.js').then(mod => mod.KeychainSection),
    tools: () => import('./settings/tools.js').then(mod => mod.ToolsSection),
    addons: () => import('./settings/addons.js').then(mod => mod.AddonsSection),
};

const EXTENSION_SETTINGS_PANE_LOADERS = [
    () => import('./settings/editor-settings.js'),
    () => import('./settings/kanban-settings.js'),
    () => import('./settings/mindmap-settings.js'),
    () => import('./settings/developer-settings.js'),
];

function loadBuiltinSection(id) {
    const cached = builtinSectionComponentCache.get(id);
    if (cached) return Promise.resolve(cached);

    const inflight = builtinSectionLoadPromiseCache.get(id);
    if (inflight) return inflight;

    const promise = BUILTIN_SECTION_LOADERS[id]()
        .then((component) => {
            builtinSectionComponentCache.set(id, component);
            builtinSectionLoadPromiseCache.delete(id);
            return component;
        })
        .catch((error) => {
            builtinSectionLoadPromiseCache.delete(id);
            throw error;
        });

    builtinSectionLoadPromiseCache.set(id, promise);
    return promise;
}

function ensureExtensionSettingsPanesLoaded() {
    if (extensionSettingsPanesReady) return Promise.resolve();
    if (extensionSettingsPanesPromise) return extensionSettingsPanesPromise;

    extensionSettingsPanesPromise = Promise.all(
        EXTENSION_SETTINGS_PANE_LOADERS.map((load) => load()),
    )
        .then(() => {
            extensionSettingsPanesReady = true;
            extensionSettingsPanesPromise = null;
        })
        .catch((error) => {
            extensionSettingsPanesPromise = null;
            throw error;
        });

    return extensionSettingsPanesPromise;
}

function renderSectionLoading(label = 'Loading…') {
    return html`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${label}</span>
        </div>
    `;
}

// ── SVG nav icons ───────────────────────────────────────────────────────────
// All icons: 24×24 viewBox, 16×16 rendered, stroke-based, stroke-width 2, round caps/joins.
const iconGeneral = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`;
const iconProviders = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;
const iconModels = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`;
const iconAppearance = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`;
const iconTools = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
const iconQuickActions = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
const iconKeychain = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`;
const iconAddons = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;

// Built-in sections (order 0-100)
const BUILTIN_SECTIONS = [
    { id: 'general', label: 'General', icon: iconGeneral, searchable: false, order: 10 },
    { id: 'providers', label: 'Providers', icon: iconProviders, searchable: false, order: 20 },
    { id: 'models', label: 'Models', icon: iconModels, searchable: true, placeholder: 'Filter models…', order: 30 },
    { id: 'theme', label: 'Appearance', icon: iconAppearance, searchable: false, order: 40 },
    { id: 'quick-actions', label: 'Quick Actions', icon: iconQuickActions, searchable: true, placeholder: 'Filter quick actions…', order: 70 },
    { id: 'keychain', label: 'Keychain', icon: iconKeychain, searchable: true, placeholder: 'Filter entries…', order: 75 },
    { id: 'tools', label: 'Tools', icon: iconTools, searchable: true, placeholder: 'Filter tools…', order: 80 },
    { id: 'addons', label: 'Add-ons', icon: iconAddons, searchable: true, placeholder: 'Filter add-ons…', order: 90 },
];

function SettingsDialogContent({ onClose }) {
    const [activeSection, setActiveSection] = useState('general');
    const [settingsData, setSettingsData] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null);
    const [filter, setFilter] = useState('');
    const [, forceUpdate] = useState(0);
    const [builtinSectionComponents, setBuiltinSectionComponents] = useState(() => Object.fromEntries(builtinSectionComponentCache.entries()));
    const [loadingSectionId, setLoadingSectionId] = useState('general');
    const [extensionPanesLoaded, setExtensionPanesLoaded] = useState(extensionSettingsPanesReady);
    const filterRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    useEffect(() => {
        ensureExtensionSettingsPanesLoaded()
            .then(() => {
                setExtensionPanesLoaded(true);
                forceUpdate(n => n + 1);
            })
            .catch((error) => {
                console.error('[settings-dialog] Failed to register extension settings panes.', error);
            });
    }, []);

    // Re-render when extension panes register
    useEffect(() => {
        const handler = () => forceUpdate(n => n + 1);
        window.addEventListener('piclaw:settings-panes-changed', handler);
        return () => window.removeEventListener('piclaw:settings-panes-changed', handler);
    }, []);

    useEffect(() => {
        fetch('/agent/settings-data').then(r => r.json()).then(setSettingsData).catch(() => setSettingsData({}));
    }, []);

    const extensionPanes = extensionPanesLoaded ? getRegisteredSettingsPanes() : [];
    const allSections = [
        ...BUILTIN_SECTIONS,
        ...extensionPanes.map(p => ({
            id: p.id,
            label: p.label,
            icon: p.icon,
            searchable: p.searchable || false,
            placeholder: p.searchPlaceholder,
            order: p.order ?? 500,
            isExtension: true,
            component: p.component,
        })),
    ].sort((a, b) => (a.order ?? 500) - (b.order ?? 500));

    const activeMeta = allSections.find(s => s.id === activeSection) || BUILTIN_SECTIONS.find(s => s.id === activeSection);

    useEffect(() => {
        if (activeMeta?.searchable) {
            requestAnimationFrame(() => filterRef.current?.focus());
        }
    }, [activeSection]);

    useEffect(() => {
        if (activeMeta?.isExtension) {
            setLoadingSectionId(null);
            return;
        }
        let cancelled = false;
        if (builtinSectionComponents[activeSection]) {
            setLoadingSectionId(null);
            return;
        }
        setLoadingSectionId(activeSection);
        loadBuiltinSection(activeSection)
            .then((component) => {
                if (cancelled) return;
                setBuiltinSectionComponents(prev => prev?.[activeSection] ? prev : { ...(prev || {}), [activeSection]: component });
            })
            .catch((error) => {
                if (cancelled) return;
                console.error(`[settings-dialog] Failed to lazy-load section "${activeSection}".`, error);
            })
            .finally(() => {
                if (!cancelled) setLoadingSectionId(current => current === activeSection ? null : current);
            });
        return () => { cancelled = true; };
    }, [activeSection, activeMeta?.isExtension, builtinSectionComponents]);

    const setStatus = useCallback((text, type = 'info') => {
        setStatusMessage(text ? { text, type } : null);
    }, []);

    const switchSection = useCallback((id) => {
        setActiveSection(id);
        setFilter('');
    }, []);

    const mergeSettingsData = useCallback((patch) => {
        setSettingsData(prev => ({ ...(prev || {}), ...(patch || {}) }));
    }, []);

    const renderSection = () => {
        if (activeMeta?.isExtension) {
            if (!activeMeta.component) return renderSectionLoading('Loading pane…');
            const Comp = activeMeta.component;
            return html`<${Comp} filter=${filter} />`;
        }

        const Comp = builtinSectionComponents[activeSection];
        if (!Comp || loadingSectionId === activeSection) {
            return renderSectionLoading(`Loading ${activeMeta?.label || 'settings'}…`);
        }

        switch (activeSection) {
            case 'general': return html`<${Comp} settingsData=${settingsData} setStatus=${setStatus} mergeSettingsData=${mergeSettingsData} />`;
            case 'providers': return html`<${Comp} providers=${settingsData?.providers} setStatus=${setStatus} />`;
            case 'models': return html`<${Comp} filter=${filter} />`;
            case 'theme': return html`<${Comp} themes=${settingsData?.themes} colorKeys=${settingsData?.colorKeys} />`;
            case 'quick-actions': return html`<${Comp} filter=${filter} setStatus=${setStatus} mergeSettingsData=${mergeSettingsData} />`;
            case 'keychain': return html`<${Comp} filter=${filter} />`;
            case 'tools': return html`<${Comp} toolsets=${settingsData?.toolsets} filter=${filter} settingsData=${settingsData} mergeSettingsData=${mergeSettingsData} />`;
            case 'addons': return html`<${Comp} setStatus=${setStatus} filter=${filter} />`;
            default: return renderSectionLoading('Loading settings…');
        }
    };

    const showRootLoading = settingsData === null || !activeMeta;

    return html`
        <div class="settings-dialog-backdrop" onClick=${(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div class="settings-dialog">
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${activeMeta?.searchable && html`
                        <input ref=${filterRef} type="text" class="settings-header-filter"
                            placeholder=${activeMeta.placeholder || 'Filter…'}
                            value=${filter} onInput=${e => setFilter(e.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${onClose} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${allSections.map((s, i) => {
                            const prevIsBuiltin = i > 0 && !allSections[i - 1].isExtension;
                            const showSep = s.isExtension && prevIsBuiltin;
                            return html`
                                ${showSep && html`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${s.id === activeSection ? 'active' : ''}`} onClick=${() => switchSection(s.id)}>
                                    <span class="settings-nav-icon">${s.icon}</span>
                                    <span class="settings-nav-label">${s.label}</span>
                                </button>
                            `;
                        })}
                    </nav>
                    <main class="settings-content">
                        ${showRootLoading ? renderSectionLoading('Loading settings…') : renderSection()}
                    </main>
                </div>
                ${statusMessage && html`
                    <div class=${`settings-status-bar settings-status-bar-${statusMessage.type}`}>
                        ${statusMessage.type === 'info' && html`<span class="settings-spinner"></span>`}
                        <span>${statusMessage.text}</span>
                        ${statusMessage.type !== 'info' && html`<button class="settings-status-dismiss" onClick=${() => setStatusMessage(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `;
}

export function SettingsDialog({ initialOpen = false } = {}) {
    const [open, setOpen] = useState(Boolean(initialOpen));
    useEffect(() => {
        const handler = () => setOpen(true);
        window.addEventListener('piclaw:open-settings', handler);
        return () => window.removeEventListener('piclaw:open-settings', handler);
    }, []);
    if (!open) return null;
    return html`<${BodyPortal} className="settings-portal"><${SettingsDialogContent} onClose=${() => setOpen(false)} /><//>`;
}

export function openSettingsDialog() {
    window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
}
