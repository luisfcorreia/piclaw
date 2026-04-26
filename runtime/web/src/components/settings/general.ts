// @ts-nocheck
import { html, useState, useEffect, useCallback, useMemo, useRef } from '../../vendor/preact-htm.js';
import { METERS_EVENT_NAME, applyMetersEnabled, readStoredMetersEnabled } from '../../ui/meters.js';
import { NumberStepper } from './number-stepper.js';

function resolveAvatarPreview(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    if (raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('data:') || raw.startsWith('blob:')) return raw;
    const rel = raw.startsWith('/workspace/') ? raw.slice('/workspace/'.length) : raw;
    return `/workspace/file?path=${encodeURIComponent(rel)}`;
}

function AvatarField({ value, onChange }) {
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(resolveAvatarPreview(value));

    useEffect(() => { setPreview(resolveAvatarPreview(value)); }, [value]);

    const handleFileSelect = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            setPreview(dataUrl);
            onChange?.(dataUrl);
        };
        reader.readAsDataURL(file);
    }, [onChange]);

    return html`
        <div class="settings-avatar-inline" onClick=${() => inputRef.current?.click()} title="Click to upload">
            ${preview
                ? html`<img src=${preview} alt="avatar" />`
                : html`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${inputRef} style="display:none" onChange=${handleFileSelect} />
        </div>
    `;
}

function normalizeGeneralSettings(data = {}) {
    return {
        userName: data.userName || '',
        userAvatar: data.userAvatar || '',
        assistantName: data.assistantName || '',
        assistantAvatar: data.assistantAvatar || '',
        sessionAutoRotate: data.sessionAutoRotate !== false,
        sessionMaxSizeMb: data.sessionMaxSizeMb ?? 32,
        composeUploadLimitMb: data.composeUploadLimitMb ?? 32,
        workspaceUploadLimitMb: data.workspaceUploadLimitMb ?? 256,
        toolUseBudget: data.toolUseBudget ?? 64,
    };
}

export function GeneralSection({ settingsData, setStatus, mergeSettingsData }) {
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const [assistantAvatar, setAssistantAvatar] = useState('');
    const [sessionAutoRotate, setSessionAutoRotate] = useState(true);
    const [sessionMaxSizeMb, setSessionMaxSizeMb] = useState(32);
    const [composeUploadLimitMb, setComposeUploadLimitMb] = useState(32);
    const [workspaceUploadLimitMb, setWorkspaceUploadLimitMb] = useState(256);
    const [toolUseBudget, setToolUseBudget] = useState(64);
    const [metersEnabled, setMetersEnabled] = useState(() => readStoredMetersEnabled(false));
    const [appliedHint, setAppliedHint] = useState(false);
    const savedSnapshotRef = useRef('');
    const saveTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; };
    }, []);

    const applyIncoming = useCallback((data) => {
        const next = normalizeGeneralSettings(data);
        setUserName(next.userName);
        setUserAvatar(next.userAvatar);
        setAssistantName(next.assistantName);
        setAssistantAvatar(next.assistantAvatar);
        setSessionAutoRotate(next.sessionAutoRotate);
        setSessionMaxSizeMb(next.sessionMaxSizeMb);
        setComposeUploadLimitMb(next.composeUploadLimitMb);
        setWorkspaceUploadLimitMb(next.workspaceUploadLimitMb);
        setToolUseBudget(next.toolUseBudget);
        savedSnapshotRef.current = JSON.stringify(next);
    }, []);

    useEffect(() => {
        applyIncoming(settingsData || {});
    }, [settingsData, applyIncoming]);

    useEffect(() => {
        const onMetersChange = (event) => {
            setMetersEnabled(Boolean(event?.detail?.enabled));
        };
        window.addEventListener(METERS_EVENT_NAME, onMetersChange);
        return () => window.removeEventListener(METERS_EVENT_NAME, onMetersChange);
    }, []);

    const currentSnapshot = useMemo(() => JSON.stringify(normalizeGeneralSettings({
        userName, userAvatar, assistantName, assistantAvatar,
        sessionAutoRotate, sessionMaxSizeMb,
        composeUploadLimitMb, workspaceUploadLimitMb, toolUseBudget,
    })), [
        userName, userAvatar, assistantName, assistantAvatar,
        sessionAutoRotate, sessionMaxSizeMb,
        composeUploadLimitMb, workspaceUploadLimitMb, toolUseBudget,
    ]);

    // Auto-save on every change with debounce.
    // Skip if a number input is actively focused (user is still typing a value).
    useEffect(() => {
        if (currentSnapshot === savedSnapshotRef.current) return;
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(async () => {
            if (!mountedRef.current) return;
            const active = document.activeElement;
            if (active && active.closest?.('.settings-number-stepper')) return;
            try {
                const response = await fetch('/agent/settings/general', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: currentSnapshot,
                });
                const payload = await response.json().catch(() => ({}));
                if (!mountedRef.current) return;
                if (!response.ok || !payload?.ok || !payload?.settings) return;
                savedSnapshotRef.current = currentSnapshot;
                mergeSettingsData?.(payload.settings);
                setAppliedHint(true);
                setTimeout(() => { if (mountedRef.current) setAppliedHint(false); }, 4000);
            } catch (error) {
                console.warn('[settings/general] Failed to persist general settings snapshot.', error);
            }
        }, 800);
        return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
    }, [currentSnapshot, mergeSettingsData]);

    const totpSetup = settingsData?.instanceTotp || {
        configured: false,
        issuer: assistantName || 'Piclaw',
        label: userName ? `${assistantName || 'Piclaw'}:${userName}` : (assistantName || 'Piclaw'),
        secret: '',
        otpauth: '',
        qrSvg: '',
    };

    return html`
        <div class="settings-section">
            ${appliedHint && html`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${AvatarField} value=${userAvatar} onChange=${setUserAvatar} />
                <input type="text" value=${userName} onInput=${e => setUserName(e.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${AvatarField} value=${assistantAvatar} onChange=${setAssistantAvatar} />
                <input type="text" value=${assistantName} onInput=${e => setAssistantName(e.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Session</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${sessionAutoRotate} onChange=${e => setSessionAutoRotate(e.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${NumberStepper}
                    label="max session size"
                    value=${sessionMaxSizeMb}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${setSessionMaxSizeMb}
                />
            </div>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${metersEnabled}
                        onChange=${() => {
                            const next = applyMetersEnabled(!metersEnabled);
                            setMetersEnabled(next);
                        }} />
                    <span class="settings-hint" style="margin:0">Same toggle as <code>/meters on|off|toggle</code>. Applies immediately in this browser.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${NumberStepper}
                    label="tool use budget"
                    value=${toolUseBudget}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${setToolUseBudget}
                />
                <span class="settings-hint" style="margin:0">per turn</span>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${NumberStepper}
                    label="compose upload limit"
                    value=${composeUploadLimitMb}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${setComposeUploadLimitMb}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${NumberStepper}
                    label="workspace upload limit"
                    value=${workspaceUploadLimitMb}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${setWorkspaceUploadLimitMb}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${totpSetup.configured
                                ? 'Current web-login authenticator secret. Scan this QR to add another authenticator device.'
                                : 'TOTP is not configured for this instance yet, so no setup QR is available.'}
                        </div>
                    </div>
                </div>
                ${totpSetup.configured ? html`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{ __html: totpSetup.qrSvg }}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${totpSetup.issuer || ''} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${totpSetup.label || ''} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${totpSetup.secret || ''} />
                            </div>
                        </div>
                    </div>
                ` : null}
            </div>
        </div>
    `;
}
