// @ts-nocheck
/**
 * settings/keychain.ts — Keychain management panel for the settings dialog.
 * Lists entries (name, type, env var, dates). Supports add and delete.
 * Secrets are never displayed — only metadata.
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
    const nameRef = useRef(null);

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
                body: JSON.stringify({
                    name,
                    secret,
                    type: addType,
                    username: addUsername.trim() || undefined,
                }),
            });
            const data = await resp.json();
            if (data?.ok) {
                setAddName('');
                setAddSecret('');
                setAddUsername('');
                setAddType('secret');
                setShowAdd(false);
                await fetchEntries();
            } else {
                setError(data?.error || 'Failed to add entry.');
            }
        } catch {
            setError('Failed to add entry.');
        } finally {
            setSaving(false);
        }
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
                await fetchEntries();
            } else {
                setError(data?.error || 'Failed to delete entry.');
            }
        } catch {
            setError('Failed to delete entry.');
        }
    }, [fetchEntries]);

    useEffect(() => {
        if (showAdd) {
            requestAnimationFrame(() => nameRef.current?.focus());
        }
    }, [showAdd]);

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
                    <div class="settings-keychain-add-row settings-keychain-add-row-primary">
                        <input ref=${nameRef} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${addName} onInput=${e => setAddName(e.target.value)}
                            class="settings-keychain-input" />
                        <select value=${addType} onChange=${e => setAddType(e.target.value)}
                            class="settings-keychain-select">
                            ${TYPE_OPTIONS.map(t => html`<option value=${t}>${t}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row settings-keychain-add-row-secondary">
                        <input type="password" placeholder="Secret value"
                            value=${addSecret} onInput=${e => setAddSecret(e.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${addUsername} onInput=${e => setAddUsername(e.target.value)}
                            class="settings-keychain-input settings-keychain-username-input" />
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
                        ${filtered.map(e => html`
                            <tr class="settings-keychain-row" key=${e.name}>
                                <td class="settings-keychain-name">${e.name}</td>
                                <td><span class="settings-keychain-type-badge">${e.type}</span></td>
                                <td class="settings-keychain-env">
                                    ${e.envVar ? html`
                                        <div class="settings-keychain-env-list">
                                            <code>$${e.envVar}</code>
                                            <code>%${e.envVar}%</code>
                                            <code>$env:${e.envVar}</code>
                                        </div>
                                    ` : '—'}
                                </td>
                                <td class="settings-keychain-date">${formatDate(e.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    ${confirmDelete === e.name
                                        ? html`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${() => handleDelete(e.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${() => setConfirmDelete(null)}>No</button>
                                            </span>
                                        `
                                        : html`
                                            <button class="settings-keychain-delete-btn" onClick=${() => setConfirmDelete(e.name)} title="Delete">🗑</button>
                                        `
                                    }
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
            <p class="settings-hint">Entries are encrypted at rest and auto-injected as environment variables for shell/tool execution. Use the shell syntax that matches your environment: <code>$NAME</code>, <code>%NAME%</code>, or <code>$env:NAME</code>. Secrets are never displayed in the UI.</p>
        </div>
    `;
}
