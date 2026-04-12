// @ts-nocheck
import { html, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';

function buildTreeFromFlat(flatNodes) {
    const byId = new Map();
    const roots = [];
    for (const node of flatNodes || []) {
        byId.set(node.id, { ...node, children: [], depth: 0 });
    }
    for (const node of flatNodes || []) {
        const current = byId.get(node.id);
        if (!current) continue;
        const parent = node.parentId ? byId.get(node.parentId) : null;
        if (parent) parent.children.push(current);
        else roots.push(current);
    }
    // Fold toolResult into parent tool-call
    const folded = new Set();
    for (const [, node] of byId) {
        if (node.role !== 'assistant' || !node.toolName) continue;
        if (node.children.length !== 1) continue;
        const child = node.children[0];
        if (child.role !== 'toolResult') continue;
        node.resultDetail = child.detail || null;
        node.resultLength = child.contentLength || 0;
        node.resultId = child.id;
        node.merged = true;
        node.children = child.children;
        for (const gc of node.children) gc.parentId = node.id;
        folded.add(child.id);
    }
    const filteredRoots = roots.filter(r => !folded.has(r.id));
    // Depths: only increase at branch points
    const stack = [];
    for (let i = filteredRoots.length - 1; i >= 0; i--) { filteredRoots[i].depth = 0; stack.push(filteredRoots[i]); }
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
    if (chars < 1000) return `${chars}`;
    if (chars < 1000000) return `${(chars / 1000).toFixed(1)}k`;
    return `${(chars / 1000000).toFixed(1)}M`;
}

function formatSizeLong(chars) {
    if (!chars || chars <= 0) return '';
    if (chars < 1000) return `${chars} chars`;
    if (chars < 1000000) return `${(chars / 1000).toFixed(1)}k chars`;
    return `${(chars / 1000000).toFixed(1)}M chars`;
}

/** Derive compact tag + one-line summary for a tree row. */
function getRowDisplay(node) {
    const type = node.type;
    // System entries
    if (type === 'model_change') return { tag: 'model', tagClass: 'system', text: `${node.preview?.replace('[model ', '').replace(']', '') || ''}` };
    if (type === 'thinking_level_change') return { tag: 'thinking', tagClass: 'system', text: node.preview?.replace('[thinking ', '').replace(']', '') || '' };
    if (type === 'compaction') return { tag: 'compaction', tagClass: 'system', text: node.preview?.replace('[compaction: ', '').replace(']', '') || '' };
    if (type === 'label') return { tag: 'label', tagClass: 'system', text: node.preview?.replace('[label ', '').replace(']', '') || '' };
    if (type === 'session_info') return { tag: 'session', tagClass: 'system', text: node.preview?.replace('[session name ', '').replace(']', '') || '' };
    if (type === 'branch_summary') return { tag: 'summary', tagClass: 'system', text: node.preview || '' };
    if (type !== 'message') return { tag: type || '?', tagClass: 'system', text: node.preview || '' };

    const role = node.role || 'message';

    // Merged tool call + result
    if (node.merged && node.toolName) {
        const cmd = node.toolInput || '';
        const firstLine = cmd.split('\n')[0];
        const truncCmd = firstLine.length > 120 ? firstLine.slice(0, 119) + '\u2026' : firstLine;
        return { tag: node.toolName, tagClass: 'tool', text: truncCmd || '' };
    }

    // Tool call (not merged)
    if (role === 'assistant' && node.toolName) {
        const cmd = node.toolInput || '';
        const firstLine = cmd.split('\n')[0];
        const truncCmd = firstLine.length > 120 ? firstLine.slice(0, 119) + '\u2026' : firstLine;
        return { tag: node.toolName, tagClass: 'tool', text: truncCmd || '\u2026' };
    }

    // Tool result (unmerged)
    if (role === 'toolResult') {
        const out = node.detail || '';
        const firstLine = out.split('\n')[0];
        const trunc = firstLine.length > 120 ? firstLine.slice(0, 119) + '\u2026' : firstLine;
        return { tag: `\u2192 ${node.toolName || 'result'}`, tagClass: 'result', text: trunc };
    }

    // User message
    if (role === 'user') {
        const raw = node.detail || node.preview || '';
        const cleaned = raw.replace(/^user:\s*"?/, '').replace(/"?\s*$/, '');
        const firstLine = cleaned.split('\n')[0];
        const trunc = firstLine.length > 120 ? firstLine.slice(0, 119) + '\u2026' : firstLine;
        return { tag: 'user', tagClass: 'user', text: trunc };
    }

    // Assistant text
    if (role === 'assistant') {
        const raw = node.detail || node.preview || '';
        const cleaned = raw.replace(/^assistant:\s*"?/, '').replace(/"?\s*$/, '');
        const firstLine = cleaned.split('\n')[0];
        const trunc = firstLine.length > 120 ? firstLine.slice(0, 119) + '\u2026' : firstLine;
        return { tag: 'assistant', tagClass: 'assistant', text: trunc };
    }

    return { tag: role, tagClass: 'other', text: node.preview || '' };
}

export function SessionTreeWidget({ widget, onWidgetEvent }) {
    const initialTree = widget?.artifact?.tree && typeof widget.artifact.tree === 'object' ? widget.artifact.tree : null;
    const chatJid = (typeof widget?.originChatJid === 'string' && widget.originChatJid.trim()) ? widget.originChatJid.trim() : null;
    const [state, setState] = useState(() => ({ loading: !initialTree, error: null, data: initialTree }));
    const [selectedId, setSelectedId] = useState(null);
    const activeRowRef = useRef(null);

    const loadTree = async () => {
        setState((current) => ({ ...current, loading: true, error: null }));
        try {
            const qs = chatJid ? `?chat_jid=${encodeURIComponent(chatJid)}` : '';
            const response = await fetch(`/agent/session-tree${qs}`, { method: 'GET', credentials: 'same-origin', headers: { Accept: 'application/json' } });
            const payload = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(payload?.error || `HTTP ${response.status}`);
            setState({ loading: false, error: null, data: payload });
        } catch (error) {
            setState((current) => ({ loading: false, error: error?.message || 'Failed to load tree.', data: current?.data || initialTree || null }));
        }
    };

    useEffect(() => { loadTree(); }, [chatJid]);

    const flatRows = useMemo(() => {
        const data = state.data;
        if (!data || !Array.isArray(data.nodes) || data.nodes.length === 0) return [];
        return flattenTree(data.flat ? buildTreeFromFlat(data.nodes) : data.nodes);
    }, [state.data]);

    const selectedNode = useMemo(() => flatRows.find((n) => n.id === selectedId) || null, [flatRows, selectedId]);

    useEffect(() => { if (activeRowRef.current) activeRowRef.current.scrollIntoView({ block: 'center', behavior: 'auto' }); }, [flatRows.length]);

    const submitNavigation = (summarize = false) => {
        const targetId = selectedNode?.id;
        if (!targetId) return;
        onWidgetEvent?.({ kind: 'widget.submit', payload: { text: summarize ? `/tree ${targetId} --summarize` : `/tree ${targetId}`, closeAfterSubmit: true } }, widget);
    };

    return html`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${() => loadTree()} disabled=${state.loading}>${state.loading ? 'Loading\u2026' : 'Refresh'}</button>
                    ${state.error && html`<span class="session-tree-error-inline">${state.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${state.data?.capped && html`<span class="session-tree-meta">Showing ${state.data?.nodes?.length || 0} of ${state.data?.total || 0}</span>`}
                    ${chatJid && html`<span class="session-tree-meta">${chatJid}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${state.loading && flatRows.length === 0 && html`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!state.loading && flatRows.length === 0 && html`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${flatRows.map((node) => {
                        const sel = selectedId === node.id;
                        const rowClass = `st-row${node.active ? ' active' : ''}${sel ? ' selected' : ''}`;
                        const hasBranch = (node.children || []).length > 1;
                        const d = getRowDisplay(node);
                        return html`
                            <button key=${node.id} ref=${node.active ? activeRowRef : null}
                                class=${rowClass} type="button" role="treeitem" aria-selected=${sel}
                                onClick=${() => setSelectedId(node.id)}>
                                <span class="st-indent" style=${`width:${(node.depth || 0) * 16 + 6}px`}></span>
                                <span class=${`st-dot${node.active ? ' active' : hasBranch ? ' branch' : ''}`}></span>
                                <span class=${`st-tag ${d.tagClass}`}>${d.tag}</span>
                                <span class="st-text">${d.text}</span>
                                ${node.merged && node.resultLength > 0 && html`<span class="st-size">${formatSize(node.resultLength)}</span>`}
                                ${!node.merged && node.contentLength > 3000 && html`<span class="st-size">${formatSize(node.contentLength)}</span>`}
                                ${node.hasThinking && html`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${node.label && html`<span class="st-label">${node.label}</span>`}
                                ${node.active && html`<span class="st-active">\u25C0</span>`}
                            </button>
                        `;
                    })}
                </div>

                <aside class="session-tree-sidebar">
                    ${selectedNode ? html`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${selectedNode.id}${selectedNode.resultId ? ` \u2192 ${selectedNode.resultId}` : ''}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${selectedNode.role || selectedNode.type || 'entry'}${selectedNode.toolName ? ` \u2192 ${selectedNode.toolName}` : ''}${selectedNode.merged ? ' (merged)' : ''}</div>
                        </div>
                        ${selectedNode.toolInput && html`
                            <div class="st-side-section">
                                <div class="st-side-label">${selectedNode.toolName === 'bash' ? 'Command' : 'Input'}</div>
                                <pre class="st-side-code">${selectedNode.toolInput}</pre>
                            </div>
                        `}
                        ${selectedNode.resultDetail && html`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${selectedNode.resultLength ? ` (${formatSizeLong(selectedNode.resultLength)})` : ''}</div>
                                <pre class="st-side-code">${selectedNode.resultDetail}</pre>
                            </div>
                        `}
                        ${selectedNode.detail && !selectedNode.toolInput && html`
                            <div class="st-side-section">
                                <div class="st-side-label">${selectedNode.role === 'toolResult' ? 'Output' : 'Content'}${selectedNode.contentLength ? ` (${formatSizeLong(selectedNode.contentLength)})` : ''}</div>
                                <pre class="st-side-code">${selectedNode.detail}</pre>
                            </div>
                        `}
                        ${selectedNode.timestamp && html`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(selectedNode.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(selectedNode.contentLength > 0 || selectedNode.hasThinking) && html`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${selectedNode.contentLength > 0 && html`<span class="st-pill">${formatSizeLong(selectedNode.contentLength)} content</span>`}
                                    ${selectedNode.hasThinking && html`<span class="st-pill thinking">${formatSizeLong(selectedNode.thinkingLength)} thinking</span>`}
                                    ${selectedNode.merged && selectedNode.resultLength > 0 && html`<span class="st-pill">${formatSizeLong(selectedNode.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${() => submitNavigation(false)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${() => submitNavigation(true)}>Navigate + summarize</button>
                        </div>
                    ` : html`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `;
}
