// @ts-nocheck
import { html, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';

function buildTreeFromFlat(flatNodes) {
    const byId = new Map();
    const roots = [];
    for (const node of flatNodes || []) {
        byId.set(node.id, {
            ...node,
            children: [],
            depth: 0,
        });
    }
    for (const node of flatNodes || []) {
        const current = byId.get(node.id);
        if (!current) continue;
        const parent = node.parentId ? byId.get(node.parentId) : null;
        if (parent) parent.children.push(current);
        else roots.push(current);
    }

    // Fold toolResult into its parent tool-call node:
    // When a toolResult is the sole child of an assistant tool-call with
    // the same toolName, merge the result data into the parent and
    // re-parent the result's children to the call node.
    const folded = new Set();
    for (const [, node] of byId) {
        if (node.role !== 'assistant' || !node.toolName) continue;
        if (node.children.length !== 1) continue;
        const child = node.children[0];
        if (child.role !== 'toolResult') continue;
        // Merge result into call
        node.resultDetail = child.detail || null;
        node.resultLength = child.contentLength || 0;
        node.resultId = child.id;
        // Preview becomes "tool → result summary"
        const cmdPart = node.toolInput || node.toolName;
        const outPart = child.detail ? child.detail.slice(0, 120) : (child.preview || '');
        node.preview = `${node.toolName}: ${cmdPart ? cmdPart.slice(0, 200) : ''}\n→ ${outPart}`;
        node.merged = true;
        // Re-parent result's children to the call node
        node.children = child.children;
        for (const gc of node.children) gc.parentId = node.id;
        folded.add(child.id);
    }
    // Remove folded nodes from roots (shouldn't happen, but safety)
    const filteredRoots = roots.filter(r => !folded.has(r.id));

    // Compute depths iteratively — only increase depth after a branch point
    const stack = [];
    for (let i = filteredRoots.length - 1; i >= 0; i--) {
        filteredRoots[i].depth = 0;
        stack.push(filteredRoots[i]);
    }
    while (stack.length > 0) {
        const node = stack.pop();
        const isBranch = node.children.length > 1;
        for (let i = node.children.length - 1; i >= 0; i--) {
            node.children[i].depth = isBranch ? node.depth + 1 : node.depth;
            stack.push(node.children[i]);
        }
    }
    return filteredRoots;
}

function flattenTree(roots) {
    const result = [];
    const stack = [];
    for (let i = roots.length - 1; i >= 0; i--) stack.push(roots[i]);
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node);
        for (let i = node.children.length - 1; i >= 0; i--) stack.push(node.children[i]);
    }
    return result;
}

function formatSize(chars) {
    if (!chars || chars <= 0) return '';
    if (chars < 1000) return `${chars} chars`;
    return `${(chars / 1000).toFixed(1)}k chars`;
}

export function SessionTreeWidget({ widget, onWidgetEvent }) {
    const initialTree = widget?.artifact?.tree && typeof widget.artifact.tree === 'object'
        ? widget.artifact.tree
        : null;
    const chatJid = (typeof widget?.originChatJid === 'string' && widget.originChatJid.trim())
        ? widget.originChatJid.trim()
        : null;
    const [state, setState] = useState(() => ({
        loading: !initialTree,
        error: null,
        data: initialTree,
    }));
    const [selectedId, setSelectedId] = useState(null);
    const activeRowRef = useRef(null);

    const loadTree = async () => {
        setState((current) => ({ ...current, loading: true, error: null }));
        try {
            const qs = chatJid ? `?chat_jid=${encodeURIComponent(chatJid)}` : '';
            const response = await fetch(`/agent/session-tree${qs}`, {
                method: 'GET',
                credentials: 'same-origin',
                headers: { Accept: 'application/json' },
            });
            const payload = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(payload?.error || `HTTP ${response.status}`);
            }
            setState({ loading: false, error: null, data: payload });
        } catch (error) {
            setState((current) => ({
                loading: false,
                error: error?.message || 'Failed to load tree.',
                data: current?.data || initialTree || null,
            }));
        }
    };

    useEffect(() => {
        loadTree();
    }, [chatJid]);

    const flatRows = useMemo(() => {
        const data = state.data;
        if (!data || !Array.isArray(data.nodes) || data.nodes.length === 0) return [];
        const roots = data.flat ? buildTreeFromFlat(data.nodes) : data.nodes;
        return flattenTree(roots);
    }, [state.data]);

    const selectedNode = useMemo(() => flatRows.find((node) => node.id === selectedId) || null, [flatRows, selectedId]);

    useEffect(() => {
        if (activeRowRef.current) {
            activeRowRef.current.scrollIntoView({ block: 'center', behavior: 'auto' });
        }
    }, [flatRows.length]);

    const submitNavigation = (summarize = false) => {
        const targetId = selectedNode?.id;
        if (!targetId) return;
        const text = summarize ? `/tree ${targetId} --summarize` : `/tree ${targetId}`;
        onWidgetEvent?.({
            kind: 'widget.submit',
            payload: { text, closeAfterSubmit: true },
        }, widget);
    };

    return html`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${() => loadTree()} disabled=${state.loading}>${state.loading ? 'Loading…' : 'Refresh'}</button>
                    ${state.error && html`<span class="session-tree-error-inline">${state.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${state.data?.capped && html`<span class="session-tree-meta">Showing ${state.data?.nodes?.length || 0} of ${state.data?.total || state.data?.nodes?.length || 0}</span>`}
                    ${chatJid && html`<span class="session-tree-meta">${chatJid}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${state.loading && flatRows.length === 0 && html`<div class="session-tree-empty">Loading session tree…</div>`}
                    ${!state.loading && flatRows.length === 0 && html`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${flatRows.map((node) => {
                        const rowClass = `session-tree-row${node.active ? ' active' : ''}${selectedId === node.id ? ' selected' : ''}`;
                        const hasBranch = (node.children || []).length > 1 || (node.childCount || 0) > 1;
                        return html`
                            <button
                                key=${node.id}
                                ref=${node.active ? activeRowRef : null}
                                class=${rowClass}
                                type="button"
                                role="treeitem"
                                aria-selected=${selectedId === node.id}
                                onClick=${() => setSelectedId(node.id)}
                            >
                                <span class="session-tree-indent" style=${`width:${(node.depth || 0) * 16 + 8}px`}></span>
                                <span class=${`session-tree-dot${node.active ? ' active' : hasBranch ? ' branch-point' : ''}`}></span>
                                <span class="session-tree-preview">${node.preview || `[${node.type || 'entry'}]`}</span>
                                ${node.hasThinking && html`<span class="session-tree-badge thinking">thinking</span>`}
                                ${node.contentLength > 5000 && html`<span class="session-tree-badge">${formatSize(node.contentLength)}</span>`}
                                ${node.label && html`<span class="session-tree-label">${node.label}</span>`}
                                ${node.active && html`<span class="session-tree-active-marker">active</span>`}
                                <span class="session-tree-id">${String(node.id || '').slice(0, 8)}</span>
                            </button>
                        `;
                    })}
                </div>

                <aside class="session-tree-sidebar">
                    ${selectedNode ? html`
                        <div class="session-tree-sidebar-section">
                            <div class="session-tree-sidebar-label">Entry</div>
                            <div class="session-tree-sidebar-id">${selectedNode.id}</div>
                        </div>
                        <div class="session-tree-sidebar-section">
                            <div class="session-tree-sidebar-label">Type</div>
                            <div class="session-tree-sidebar-value">${selectedNode.role || selectedNode.type || 'entry'}${selectedNode.toolName ? ` → ${selectedNode.toolName}` : ''}</div>
                        </div>
                        ${selectedNode.toolInput && html`
                            <div class="session-tree-sidebar-section">
                                <div class="session-tree-sidebar-label">${selectedNode.toolName === 'bash' ? 'Command' : 'Input'}</div>
                                <pre class="session-tree-sidebar-code">${selectedNode.toolInput}</pre>
                            </div>
                        `}
                        ${selectedNode.resultDetail && html`
                            <div class="session-tree-sidebar-section">
                                <div class="session-tree-sidebar-label">Result${selectedNode.resultLength ? ` (${formatSize(selectedNode.resultLength)})` : ''}</div>
                                <pre class="session-tree-sidebar-code">${selectedNode.resultDetail}</pre>
                            </div>
                        `}
                        ${selectedNode.timestamp && html`
                            <div class="session-tree-sidebar-section">
                                <div class="session-tree-sidebar-label">Time</div>
                                <div class="session-tree-sidebar-value">${new Date(selectedNode.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${selectedNode.detail && html`
                            <div class="session-tree-sidebar-section">
                                <div class="session-tree-sidebar-label">${selectedNode.role === 'toolResult' ? 'Output' : 'Content'}</div>
                                <pre class="session-tree-sidebar-code">${selectedNode.detail}</pre>
                            </div>
                        `}
                        ${(selectedNode.contentLength > 0 || selectedNode.hasThinking) && html`
                            <div class="session-tree-sidebar-section">
                                <div class="session-tree-sidebar-label">Size</div>
                                <div class="session-tree-sidebar-badges">
                                    ${selectedNode.contentLength > 0 && html`<span class="session-tree-badge">${formatSize(selectedNode.contentLength)} content</span>`}
                                    ${selectedNode.hasThinking && html`<span class="session-tree-badge thinking">${formatSize(selectedNode.thinkingLength)} thinking</span>`}
                                </div>
                            </div>
                        `}
                        <div class="session-tree-sidebar-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${() => submitNavigation(false)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${() => submitNavigation(true)}>Navigate + summarize</button>
                        </div>
                    ` : html`
                        <div class="session-tree-empty side">Select an entry to navigate.</div>
                    `}
                </aside>
            </div>
        </div>
    `;
}
