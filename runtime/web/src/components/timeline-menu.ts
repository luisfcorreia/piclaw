// @ts-nocheck
/**
 * timeline-menu.ts — Single hamburger menu, position:fixed via a manual portal.
 * Always visible. Repositions based on workspace open/closed state.
 */

import { html, useState, useEffect, useRef, useCallback, useLayoutEffect, render } from '../vendor/preact-htm.js';

export function TimelineMenu({
    workspaceOpen,
    toggleWorkspace,
    onOpenTerminalTab,
    onOpenVncTab,
    onToggleTerminal,
    terminalVisible,
}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);
    const portalRef = useRef(null);

    // Create portal host once
    useEffect(() => {
        if (typeof document === 'undefined') return;
        const host = document.createElement('div');
        host.className = 'timeline-menu-portal in-chat';
        document.body.appendChild(host);
        portalRef.current = host;
        return () => { host.remove(); portalRef.current = null; };
    }, []);

    // Update class when workspace state changes (no remount)
    useEffect(() => {
        if (portalRef.current) {
            portalRef.current.className = `timeline-menu-portal ${workspaceOpen ? 'in-workspace' : 'in-chat'}`;
        }
    }, [workspaceOpen]);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const onClick = (e) => {
            if (menuRef.current?.contains(e.target)) return;
            if (btnRef.current?.contains(e.target)) return;
            setOpen(false);
        };
        document.addEventListener('mousedown', onClick, true);
        return () => document.removeEventListener('mousedown', onClick, true);
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    // Close when workspace state changes
    useEffect(() => { setOpen(false); }, [workspaceOpen]);

    const run = useCallback((fn) => { setOpen(false); fn?.(); }, []);

    // Render into portal
    const content = html`
        <button
            ref=${btnRef}
            class=${`timeline-menu-btn${open ? ' active' : ''}`}
            onClick=${() => setOpen(v => !v)}
            title="Menu"
            aria-label="Menu"
            aria-haspopup="menu"
            aria-expanded=${open ? 'true' : 'false'}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${open && html`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${menuRef} role="menu" aria-label="Menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${() => run(toggleWorkspace)}>
                    ${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
                </button>
                ${(onOpenTerminalTab || onOpenVncTab || onToggleTerminal) && html`<div class="workspace-menu-separator"></div>`}
                ${onOpenTerminalTab && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenTerminalTab)}>Open terminal in tab</button>`}
                ${onOpenVncTab && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenVncTab)}>Open VNC in tab</button>`}
                ${onToggleTerminal && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onToggleTerminal)}>${terminalVisible ? 'Hide terminal dock' : 'Show terminal dock'}</button>`}
                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${() => run(() => window.dispatchEvent(new CustomEvent('piclaw:open-settings')))}>Settings</button>
            </div>
        `}
    `;

    useLayoutEffect(() => {
        if (portalRef.current) render(content, portalRef.current);
    });

    return null;
}
