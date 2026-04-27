// @ts-nocheck
/**
 * settings/sessions.ts — Session management settings section.
 */
import { html, useState, useEffect, useCallback, useMemo, useRef } from '../../vendor/preact-htm.js';
import { NumberStepper } from './number-stepper.js';

function normalizeSessionSettings(data = {}) {
    return {
        sessionAutoRotate: data.sessionAutoRotate !== false,
        sessionMaxSizeMb: data.sessionMaxSizeMb ?? 32,
        toolUseBudget: data.toolUseBudget ?? 64,
        sessionIsolation: data.sessionIsolation || 'none',
    };
}

export function SessionsSection({ settingsData, setStatus, mergeSettingsData }) {
    const [sessionAutoRotate, setSessionAutoRotate] = useState(true);
    const [sessionMaxSizeMb, setSessionMaxSizeMb] = useState(32);
    const [toolUseBudget, setToolUseBudget] = useState(64);
    const [sessionIsolation, setSessionIsolation] = useState('none');
    const [appliedHint, setAppliedHint] = useState(false);
    const savedSnapshotRef = useRef('');
    const saveTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; };
    }, []);

    const applyIncoming = useCallback((data) => {
        const next = normalizeSessionSettings(data);
        setSessionAutoRotate(next.sessionAutoRotate);
        setSessionMaxSizeMb(next.sessionMaxSizeMb);
        setToolUseBudget(next.toolUseBudget);
        setSessionIsolation(next.sessionIsolation);
        savedSnapshotRef.current = JSON.stringify(next);
    }, []);

    useEffect(() => {
        applyIncoming(settingsData || {});
    }, [settingsData, applyIncoming]);

    const currentSnapshot = useMemo(() => JSON.stringify(normalizeSessionSettings({
        sessionAutoRotate, sessionMaxSizeMb, toolUseBudget, sessionIsolation,
    })), [sessionAutoRotate, sessionMaxSizeMb, toolUseBudget, sessionIsolation]);

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
                console.warn('[settings/sessions] Failed to persist session settings.', error);
            }
        }, 800);
        return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
    }, [currentSnapshot, mergeSettingsData]);

    return html`
        <div class="settings-section">
            ${appliedHint && html`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
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

            <h3 style="margin-top:20px">Agent Behaviour</h3>
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
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${sessionIsolation} onChange=${e => setSessionIsolation(e.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `;
}
