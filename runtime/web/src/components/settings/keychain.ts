// @ts-nocheck
/**
 * settings/keychain.ts — Keychain management panel for the settings dialog.
 * Lists entries (name, type, env var, dates). Supports add, delete, and reveal.
 * Revealing requires the master password and optionally a TOTP code.
 */
import { html, useState, useEffect, useCallback, useRef, useMemo } from '../../vendor/preact-htm.js';

function formatDate(iso) {
    if (!iso) return '—';
    try {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return iso; }
}

const TYPE_OPTIONS = ['secret', 'token', 'password', 'basic'];

export function KeychainSection({ filter = '' }) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAdd, setShowAdd] = useState(false);
    const [addName, setAddName] = useState('');
    const [addSecret, setAddSecret] = useState('');
    const [addUsername, setAddUsername] = useState('');
    const [addType, setAddType] = useState('secret');
    const [saving, setSaving] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(null);
    // Reveal state: { name, phase: 'password'|'totp'|'revealed'|'error', masterPassword?, totpCode?, secret?, username?, error? }
    const [revealState, setRevealState] = useState(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const totpRef = useRef(null);

    const fetchEntries = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const resp = await fetch('/agent/keychain');
            const data = await resp.json();
            if (data?.ok) {
                setEntries(data.entries || []);
            } else {
                setError(data?.error || 'Failed to load keychain.');
            }
        } catch (e) {
            setError('Failed to load keychain.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchEntries(); }, [fetchEntries]);

    const handleAdd = useCallback(async () => {
        const name = addName.trim();
        const secret = addSecret;
        if (!name || !secret) return;
        setSaving(true);
        try {
            const resp = await fetch('/agent/keychain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, secret, type: addType, username: addUsername.trim() || undefined }),
            });
            const data = await resp.json();
            if (data?.ok) {
                setAddName(''); setAddSecret(''); setAddUsername(''); setAddType('secret'); setShowAdd(false);
                await fetchEntries();
            } else { setError(data?.error || 'Failed to add entry.'); }
        } catch { setError('Failed to add entry.'); }
        finally { setSaving(false); }
    }, [addName, addSecret, addUsername, addType, fetchEntries]);

    const handleDelete = useCallback(async (name) => {
        try {
            const resp = await fetch('/agent/keychain', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name }),
            });
            const data = await resp.json();
            if (data?.ok) {
                setConfirmDelete(null);
                setRevealState(s => s?.name === name ? null : s);
                await fetchEntries();
            } else { setError(data?.error || 'Failed to delete entry.'); }
        } catch { setError('Failed to delete entry.'); }
    }, [fetchEntries]);

    const doReveal = useCallback(async (name, masterPassword, totpCode) => {
        try {
            const resp = await fetch('/agent/keychain/reveal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, master_password: masterPassword || undefined, totp_code: totpCode || undefined }),
            });
            const data = await resp.json();
            if (data?.ok) {
                setRevealState({ name, phase: 'revealed', secret: data.secret, username: data.username, masterPassword });
            } else if (data?.needs_master_password) {
                setRevealState(prev => ({
                    name, phase: 'password', masterPassword: '',
                    error: prev?.name === name && prev?.masterPassword ? data.error : null,
                }));
                requestAnimationFrame(() => passwordRef.current?.focus());
            } else if (data?.needs_totp) {
                setRevealState(prev => ({
                    name, phase: 'totp', masterPassword, totpCode: '',
                    error: prev?.name === name && prev?.phase === 'totp' && prev?.totpCode ? data.error : null,
                }));
                requestAnimationFrame(() => totpRef.current?.focus());
            } else {
                setRevealState({ name, phase: 'error', error: data?.error || 'Failed to reveal.' });
            }
        } catch {
            setRevealState({ name, phase: 'error', error: 'Failed to reveal.' });
        }
    }, []);

    const handleRevealClick = useCallback((name) => {
        if (revealState?.name === name && revealState?.phase === 'revealed') {
            setRevealState(null); // toggle off
            return;
        }
        // Start the reveal flow — server will tell us what's needed
        doReveal(name, null, null);
    }, [revealState, doReveal]);

    const handlePasswordSubmit = useCallback((name) => {
        const pw = revealState?.masterPassword || '';
        if (!pw) return;
        doReveal(name, pw, null);
    }, [revealState, doReveal]);

    const handleTotpSubmit = useCallback((name) => {
        const code = revealState?.totpCode || '';
        if (code.length < 6) return;
        doReveal(name, revealState?.masterPassword, code);
    }, [revealState, doReveal]);

    const copyToClipboard = useCallback(async (text) => {
        try { await navigator.clipboard.writeText(text); }
        catch {
            const ta = document.createElement('textarea');
            ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        }
    }, []);

    useEffect(() => { if (showAdd) requestAnimationFrame(() => nameRef.current?.focus()); }, [showAdd]);

    const lf = filter.toLowerCase();
    const filtered = useMemo(() => {
        if (!lf) return entries;
        return entries.filter(e =>
            e.name.toLowerCase().includes(lf) ||
            (e.type || '').toLowerCase().includes(lf) ||
            (e.envVar || '').toLowerCase().includes(lf)
        );
    }, [entries, lf]);

    if (loading) return html`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;

    return html`
        <div class="settings-section">
            ${error && html`
                <div class="settings-keychain-error" role="alert">
                    ${error}
                    <button class="settings-keychain-dismiss" onClick=${() => setError(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar">
                <span class="settings-hint" style="margin:0">${filtered.length} entr${filtered.length === 1 ? 'y' : 'ies'}${lf ? ` matching "${filter}"` : ''}</span>
                <button class="settings-keychain-add-btn" onClick=${() => setShowAdd(!showAdd)}>
                    ${showAdd ? 'Cancel' : '+ Add entry'}
                </button>
            </div>

            ${showAdd && html`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${nameRef} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${addName} onInput=${e => setAddName(e.target.value)}
                            class="settings-keychain-input" />
                        <select value=${addType} onChange=${e => setAddType(e.target.value)}
                            class="settings-keychain-select">
                            ${TYPE_OPTIONS.map(t => html`<option value=${t}>${t}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${addSecret} onInput=${e => setAddSecret(e.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${addUsername} onInput=${e => setAddUsername(e.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${handleAdd}
                            disabled=${saving || !addName.trim() || !addSecret}>
                            ${saving ? 'Saving…' : 'Save'}
                        </button>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.length === 0 && html`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${lf ? 'No entries match the filter.' : 'No keychain entries.'}
                            </td></tr>
                        `}
                        ${filtered.map(e => {
                            const rs = revealState?.name === e.name ? revealState : null;
                            const isRevealed = rs?.phase === 'revealed';
                            const isPasswordPrompt = rs?.phase === 'password';
                            const isTotpPrompt = rs?.phase === 'totp';
                            const isError = rs?.phase === 'error';
                            return html`
                            <tr class="settings-keychain-row" key=${e.name}>
                                <td class="settings-keychain-name">${e.name}</td>
                                <td><span class="settings-keychain-type-badge">${e.type}</span></td>
                                <td class="settings-keychain-env">${e.envVar ? html`<code>$${e.envVar}</code>` : '—'}</td>
                                <td class="settings-keychain-date">${formatDate(e.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${isRevealed ? ' active' : ''}`}
                                        onClick=${() => handleRevealClick(e.name)}
                                        title=${isRevealed ? 'Hide secret' : 'Reveal secret'}>
                                        ${isRevealed
                                            ? html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
                                            : html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
                                        }
                                    </button>
                                    ${confirmDelete === e.name
                                        ? html`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${() => handleDelete(e.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${() => setConfirmDelete(null)}>No</button>
                                            </span>
                                        `
                                        : html`<button class="settings-keychain-delete-btn" onClick=${() => setConfirmDelete(e.name)} title="Delete">🗑</button>`
                                    }
                                </td>
                            </tr>
                            ${isPasswordPrompt && html`
                                <tr class="settings-keychain-prompt-row" key=${e.name + '-pw'}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${passwordRef} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${rs?.masterPassword || ''}
                                                onInput=${ev => setRevealState(s => ({ ...s, masterPassword: ev.target.value }))}
                                                onKeyDown=${ev => { if (ev.key === 'Enter') handlePasswordSubmit(e.name); if (ev.key === 'Escape') setRevealState(null); }}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${() => handlePasswordSubmit(e.name)}
                                                disabled=${!(rs?.masterPassword)}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${() => setRevealState(null)}>Cancel</button>
                                            ${rs?.error && html`<span class="settings-keychain-prompt-error">${rs.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${isTotpPrompt && html`
                                <tr class="settings-keychain-prompt-row" key=${e.name + '-totp'}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${totpRef} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${rs?.totpCode || ''}
                                                onInput=${ev => setRevealState(s => ({ ...s, totpCode: ev.target.value.replace(/\\D/g, '').slice(0, 6) }))}
                                                onKeyDown=${ev => { if (ev.key === 'Enter') handleTotpSubmit(e.name); if (ev.key === 'Escape') setRevealState(null); }}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${() => handleTotpSubmit(e.name)}
                                                disabled=${(rs?.totpCode || '').length < 6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${() => setRevealState(null)}>Cancel</button>
                                            ${rs?.error && html`<span class="settings-keychain-prompt-error">${rs.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${isRevealed && html`
                                <tr class="settings-keychain-reveal-row" key=${e.name + '-reveal'}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${rs.username && html`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${rs.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${() => copyToClipboard(rs.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${rs.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${() => copyToClipboard(rs.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${isError && html`
                                <tr class="settings-keychain-reveal-row" key=${e.name + '-error'}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${rs.error}</div>
                                    </td>
                                </tr>
                            `}
                        `; })}
                    </tbody>
                </table>
            </div>
            <p class="settings-hint">Entries are encrypted at rest. Click 👁 to reveal — master password required.</p>
        </div>
    `;
}
