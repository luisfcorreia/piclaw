// @ts-nocheck
/**
 * settings-dialog.ts — Floating settings dialog.
 *
 * Self-manages open/close via 'piclaw:open-settings' custom event.
 */

import { html, useState, useEffect, useCallback, useMemo } from '../vendor/preact-htm.js';
import { BodyPortal } from './body-portal.js';
import { getAgentModels, sendAgentMessage } from '../api.js';
import { applyThemeFromEvent } from '../ui/theme.js';

// ── SVG nav icons ───────────────────────────────────────────────────────────

const iconGeneral = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
const iconProviders = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;
const iconModels = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`;
const iconAppearance = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20c-2.76 0-5-4.48-5-10S9.24 2 12 2z"/><circle cx="16.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="7.5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="16.5" cy="15.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="10" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg>`;
const iconTools = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
const iconAddons = html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;

// ── General ─────────────────────────────────────────────────────────────────

function GeneralSection({ assistantName: initialName }) {
    const [assistantName, setAssistantName] = useState(initialName || '');
    const [saved, setSaved] = useState(false);
    useEffect(() => { if (initialName) setAssistantName(initialName); }, [initialName]);
    const save = useCallback(async () => {
        await fetch('/post', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: `/agent-name ${assistantName}` }) });
        setSaved(true); setTimeout(() => setSaved(false), 2000);
    }, [assistantName]);
    return html`
        <div class="settings-section">
            <h3>General</h3>
            <div class="settings-row">
                <label>Assistant name</label>
                <input type="text" value=${assistantName}
                    onInput=${e => { setAssistantName(e.target.value); setSaved(false); }} />
                <button onClick=${save}>${saved ? '✓ Saved' : 'Save'}</button>
            </div>
        </div>
    `;
}

// ── Providers ───────────────────────────────────────────────────────────────

function ProvidersSection() {
    return html`
        <div class="settings-section">
            <h3>Providers</h3>
            <p class="settings-hint">AI model providers are configured via the OOBE flow or the <code>/login</code> command.</p>
            <p class="settings-hint">Supported: <strong>Anthropic</strong>, <strong>OpenAI</strong>, <strong>Google</strong>, <strong>Azure OpenAI</strong>, <strong>OpenRouter</strong>, <strong>Ollama</strong>, <strong>OpenCode</strong>.</p>
            <p class="settings-hint">Use <code>/login</code> to add a provider or <code>/logout</code> to remove one.</p>
        </div>
    `;
}

// ── Models ───────────────────────────────────────────────────────────────────

const ALL_THINKING_LEVELS = ['off', 'minimal', 'low', 'medium', 'high', 'xhigh'];
const EFFORT_DISPLAY = { off: 'off', minimal: 'minimal', low: 'low', medium: 'medium', high: 'high', xhigh: 'max' };
const DEFAULT_DISPLAY = { off: 'off', minimal: 'minimal', low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh' };
function isEffortProvider(p) { return typeof p === 'string' && p.toLowerCase() === 'anthropic'; }

function ThinkingSlider({ thinkingLevel, supportsThinking, provider, onSetLevel, disabled }) {
    const displayMap = isEffortProvider(provider) ? EFFORT_DISPLAY : DEFAULT_DISPLAY;
    const levels = ALL_THINKING_LEVELS;
    const idx = Math.max(0, levels.indexOf(thinkingLevel ?? 'off'));
    if (!supportsThinking) {
        return html`<div class="settings-thinking-slider">
            <label>Thinking level</label>
            <p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p>
        </div>`;
    }
    return html`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${displayMap[levels[idx]] || levels[idx]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${levels.length - 1} step="1"
                    value=${idx} disabled=${disabled}
                    onInput=${(e) => onSetLevel(levels[parseInt(e.target.value, 10)])} />
                <div class="settings-slider-labels">
                    ${levels.map((l, i) => html`
                        <span class=${i === idx ? 'active' : ''}
                              onClick=${() => !disabled && onSetLevel(l)}
                        >${displayMap[l] || l}</span>
                    `)}
                </div>
            </div>
        </div>
    `;
}

function ModelsSection() {
    const [models, setModels] = useState(null);
    const [switching, setSwitching] = useState(false);
    const [thinkingLevel, setThinkingLevel] = useState('off');
    const [supportsThinking, setSupportsThinking] = useState(false);
    const [thinkingBusy, setThinkingBusy] = useState(false);
    const [filter, setFilter] = useState('');

    const loadModels = useCallback(async () => {
        const data = await getAgentModels();
        setModels(data);
        if (data.thinking_level) setThinkingLevel(data.thinking_level);
        setSupportsThinking(Boolean(data.supports_thinking));
        return data;
    }, []);

    useEffect(() => { loadModels().catch(() => setModels({ models: [], model_options: [] })); }, []);

    const switchModel = useCallback(async (label) => {
        if (switching) return;
        setSwitching(true);
        try {
            await sendAgentMessage('default', `/model ${label}`, null, []);
            await loadModels();
        } catch (e) { console.error('Failed to switch model:', e); }
        finally { setSwitching(false); }
    }, [switching, loadModels]);

    const setLevel = useCallback(async (level) => {
        if (thinkingBusy) return;
        setThinkingBusy(true);
        setThinkingLevel(level);
        try {
            const resp = await sendAgentMessage('default', `/thinking ${level}`, null, []);
            if (resp?.command?.thinking_level) setThinkingLevel(resp.command.thinking_level);
            setSupportsThinking(resp?.command?.supports_thinking !== false);
        } catch (e) { console.error('Failed to set thinking:', e); await loadModels().catch(() => {}); }
        finally { setThinkingBusy(false); }
    }, [thinkingBusy, loadModels]);

    if (!models) return html`<div class="settings-loading">Loading models…</div>`;

    const options = models.model_options || [];
    const current = models.current;
    const currentOption = options.find(m => m.label === current);
    const provider = currentOption?.provider || '';
    const lowerFilter = filter.toLowerCase();
    const filtered = lowerFilter
        ? options.filter(m => m.label.toLowerCase().includes(lowerFilter) || (m.provider || '').toLowerCase().includes(lowerFilter))
        : options;

    return html`
        <div class="settings-section">
            <div class="settings-model-filter">
                <input type="text" placeholder="Filter models…" value=${filter}
                    onInput=${e => setFilter(e.target.value)} class="settings-filter-input" />
            </div>
            <table class="settings-table settings-borderless">
                <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                <tbody>
                    ${filtered.map(m => html`
                        <tr class=${m.label === current ? 'settings-row-active' : ''}>
                            <td><input type="radio" name="settings-model"
                                checked=${m.label === current} disabled=${switching}
                                onChange=${() => switchModel(m.label)} /></td>
                            <td>${m.label}</td>
                            <td>${m.provider}</td>
                            <td>${m.context_window ? (m.context_window / 1000).toFixed(0) + 'K' : '—'}</td>
                            <td style="text-align:center">${m.reasoning ? '🧠' : '—'}</td>
                        </tr>
                    `)}
                    ${filtered.length === 0 && html`<tr><td colspan="5" class="settings-empty">No models match "${filter}"</td></tr>`}
                </tbody>
            </table>
            <${ThinkingSlider}
                thinkingLevel=${thinkingLevel} supportsThinking=${supportsThinking}
                provider=${provider} onSetLevel=${setLevel}
                disabled=${thinkingBusy || switching} />
        </div>
    `;
}

// ── Appearance ──────────────────────────────────────────────────────────────

function ThemeSection({ themes, colorKeys }) {
    const [currentTheme, setCurrentTheme] = useState('');
    useEffect(() => { setCurrentTheme(document.documentElement.dataset.colorTheme || 'default'); }, []);
    const apply = useCallback((name) => {
        applyThemeFromEvent({ theme: name, tint: null });
        setCurrentTheme(name);
    }, []);
    const keys = colorKeys || [];
    const presets = themes || [];
    return html`
        <div class="settings-section">
            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Theme</th>
                        <th>Mode</th>
                        ${keys.map(k => html`<th class="settings-swatch-header">${k.replace(/([A-Z])/g, ' $1').trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${presets.map(t => html`
                        <tr class=${t.name === currentTheme ? 'settings-row-active' : ''}>
                            <td><input type="radio" name="settings-theme"
                                checked=${t.name === currentTheme}
                                onChange=${() => apply(t.name)} /></td>
                            <td><strong>${t.label}</strong></td>
                            <td>${t.mode}</td>
                            ${keys.map(k => {
                                const c = t.colors?.[k];
                                return html`<td class="settings-swatch-cell">
                                    ${c ? html`<span class="settings-color-swatch" style=${'background:' + c} title=${c}></span>` : '—'}
                                </td>`;
                            })}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `;
}

// ── Tools ────────────────────────────────────────────────────────────────────

const KIND_BADGE = { 'read-only': '🔍', 'mutating': '✏️', 'mixed': '🔄' };

function ToolsSection({ toolsets }) {
    const groups = toolsets || [];
    // Track which groups are "enabled" (visual only — actual activation is agent-managed)
    const [enabledGroups, setEnabledGroups] = useState(() => {
        const m = {};
        for (const g of groups) m[g.name] = true;
        return m;
    });

    const toggleGroup = useCallback((name) => {
        setEnabledGroups(prev => ({ ...prev, [name]: !prev[name] }));
    }, []);

    if (groups.length === 0) return html`
        <div class="settings-section">
            <h3>Tools</h3>
            <p class="settings-hint">Tool data not available.</p>
        </div>
    `;

    return html`
        <div class="settings-section">
            ${groups.map(g => {
                const enabled = enabledGroups[g.name] !== false;
                return html`
                    <div class="settings-toolset">
                        <div class="settings-toolset-header">
                            <label class="settings-toolset-toggle">
                                <input type="checkbox" checked=${enabled}
                                    onChange=${() => toggleGroup(g.name)} />
                                <strong>${g.name}</strong>
                            </label>
                            <span class="settings-hint" style="margin:0">${g.description}</span>
                        </div>
                        ${enabled && html`
                            <div class="settings-tool-list">
                                ${g.tools.map(t => html`
                                    <div class="settings-tool-row">
                                        <input type="checkbox" checked disabled />
                                        <span class="settings-tool-name">${t.name}</span>
                                        <span class="settings-tool-kind" title=${t.kind}>${KIND_BADGE[t.kind] || '?'}</span>
                                        ${t.summary && html`<span class="settings-tool-summary">${t.summary}</span>`}
                                        <span class="settings-tool-source">${g.name}</span>
                                    </div>
                                `)}
                            </div>
                        `}
                    </div>
                `;
            })}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `;
}

// ── Add-ons ─────────────────────────────────────────────────────────────────

function AddonsSection() {
    const [addons, setAddons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(null); // slug of addon being installed/uninstalled
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const loadAddons = useCallback(async () => {
        try {
            const resp = await fetch('/agent/addons');
            const data = await resp.json();
            if (data.error) throw new Error(data.error);
            setAddons(data.addons || []);
        } catch (e) {
            setAddons(null);
            setError(String(e.message || e));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { loadAddons(); }, []);

    const installAddon = useCallback(async (slug) => {
        if (busy) return;
        setBusy(slug); setError(null); setMessage(null);
        try {
            const resp = await fetch('/agent/addons/install', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug }),
            });
            const data = await resp.json();
            if (data.error) { setError(data.error); return; }
            setMessage(data.message);
            await loadAddons();
        } catch (e) { setError(String(e.message || e)); }
        finally { setBusy(null); }
    }, [busy, loadAddons]);

    const uninstallAddon = useCallback(async (slug) => {
        if (busy) return;
        setBusy(slug); setError(null); setMessage(null);
        try {
            const resp = await fetch('/agent/addons/uninstall', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug }),
            });
            const data = await resp.json();
            if (data.error) { setError(data.error); return; }
            setMessage(data.message);
            await loadAddons();
        } catch (e) { setError(String(e.message || e)); }
        finally { setBusy(null); }
    }, [busy, loadAddons]);

    if (loading) return html`<div class="settings-loading">Fetching add-ons…</div>`;
    if (!addons) return html`
        <div class="settings-section"><h3>Add-ons</h3>
            <p class="settings-hint">Could not load add-ons. ${error || ''}</p>
        </div>`;

    return html`
        <div class="settings-section">
            <h3>Add-ons</h3>
            <p class="settings-hint">From <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>. Restart required after install/uninstall.</p>
            ${error && html`<div class="settings-addon-error">⚠ ${error}</div>`}
            ${message && html`<div class="settings-addon-message">✓ ${message}</div>`}
            <table class="settings-table settings-borderless">
                <thead><tr><th>Add-on</th><th>Version</th><th>Description</th><th>Bundled</th><th style="text-align:right">Actions</th></tr></thead>
                <tbody>
                    ${addons.map(a => html`
                        <tr class=${a.installed ? 'settings-row-active' : ''}>
                            <td>
                                <strong>${a.slug}</strong>
                                <div class="settings-addon-tags">
                                    ${(a.tags || []).map(t => html`<span class="settings-tag">${t}</span>`)}
                                </div>
                            </td>
                            <td class="settings-addon-version">
                                ${a.installed
                                    ? html`<span>${a.installedVersion || '?'}</span>${a.hasUpdate ? html` → <strong>${a.version}</strong>` : ''}`
                                    : html`<span>${a.version || '—'}</span>`}
                            </td>
                            <td>${a.description}</td>
                            <td class="settings-addon-bundled">
                                <span class="settings-tag">${a.type || 'extension'}</span>
                                ${(a.skills || []).map(s => html`<span class="settings-tag settings-tag-skill">${s}</span>`)}
                            </td>
                            <td class="settings-addon-actions">
                                ${a.installed ? html`
                                    ${a.hasUpdate && html`
                                        <button class="settings-addon-btn settings-addon-btn-upgrade"
                                            disabled=${busy === a.slug} onClick=${() => installAddon(a.slug)}
                                        >${busy === a.slug ? '…' : '⬆ Upgrade'}</button>
                                    `}
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${busy === a.slug} onClick=${() => uninstallAddon(a.slug)}
                                    >${busy === a.slug ? '…' : '🗑 Remove'}</button>
                                ` : html`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${busy === a.slug} onClick=${() => installAddon(a.slug)}
                                    >${busy === a.slug ? 'Installing…' : 'Install'}</button>
                                `}
                            </td>
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `;
}

// ── Navigation + dialog ─────────────────────────────────────────────────────

const SECTIONS = [
    { id: 'general', label: 'General', icon: iconGeneral },
    { id: 'providers', label: 'Providers', icon: iconProviders },
    { id: 'models', label: 'Models', icon: iconModels },
    { id: 'theme', label: 'Appearance', icon: iconAppearance },
    { id: 'tools', label: 'Tools', icon: iconTools },
    { id: 'addons', label: 'Add-ons', icon: iconAddons },
];

function SettingsDialogContent({ onClose }) {
    const [activeSection, setActiveSection] = useState('general');
    const [settingsData, setSettingsData] = useState(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    useEffect(() => {
        fetch('/agent/settings-data').then(r => r.json()).then(setSettingsData).catch(() => setSettingsData({}));
    }, []);

    const renderSection = () => {
        switch (activeSection) {
            case 'general': return html`<${GeneralSection} assistantName=${settingsData?.assistantName} />`;
            case 'providers': return html`<${ProvidersSection} />`;
            case 'models': return html`<${ModelsSection} />`;
            case 'theme': return html`<${ThemeSection} themes=${settingsData?.themes} colorKeys=${settingsData?.colorKeys} />`;
            case 'tools': return html`<${ToolsSection} toolsets=${settingsData?.toolsets} />`;
            case 'addons': return html`<${AddonsSection} />`;
            default: return null;
        }
    };

    return html`
        <div class="settings-dialog-backdrop" onClick=${(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div class="settings-dialog">
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    <button class="settings-dialog-close" onClick=${onClose} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${SECTIONS.map(s => html`
                            <button class=${`settings-nav-item ${s.id === activeSection ? 'active' : ''}`}
                                onClick=${() => setActiveSection(s.id)}>
                                <span class="settings-nav-icon">${s.icon}</span>
                                <span class="settings-nav-label">${s.label}</span>
                            </button>
                        `)}
                    </nav>
                    <main class="settings-content">
                        ${settingsData === null ? html`<div class="settings-loading">Loading…</div>` : renderSection()}
                    </main>
                </div>
            </div>
        </div>
    `;
}

export function SettingsDialog() {
    const [open, setOpen] = useState(false);
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
