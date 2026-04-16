/**
 * agent-control/handlers/tree.ts – Handler for the /tree command.
 *
 * Renders the session message tree in a compact text format, supporting
 * head/tail modes, pagination, summarisation, and label display.
 *
 * Consumers: agent-control-handlers.ts dispatches to this handler.
 */
import { extractTextFromContent, truncateText } from "../agent-control-helpers.js";
/** Handle /tree: render the session message tree in text format. */
export async function handleTree(session, command) {
    const sessionManager = session.sessionManager;
    const leafId = sessionManager.getLeafId();
    if (!command.targetId) {
        const roots = sessionManager.getTree();
        if (roots.length === 0) {
            return { status: "success", message: "Tree is empty." };
        }
        // Only return the widget block; the widget fetches live data from the API.
        const widgetBlock = {
            type: "generated_widget",
            widget_id: `session-tree-${Date.now()}`,
            title: "Session Tree",
            subtitle: `${roots.length > 0 ? 'Interactive session tree viewer with live refresh' : 'Empty'}`,
            description: "Keeps the tree pane open while you navigate branches or request branch summaries.",
            open_label: "Open tree viewer",
            auto_open: true,
            capabilities: ["interactive"],
            artifact: {
                kind: "session_tree",
                tree: { leafId },
            },
        };
        return { status: "success", message: "", contentBlocks: [widgetBlock] };
    }
    const options = {
        summarize: command.summarize ?? false,
        customInstructions: command.customInstructions,
        replaceInstructions: command.replaceInstructions,
        label: command.label,
    };
    try {
        const result = await session.navigateTree(command.targetId, options);
        if (result.cancelled) {
            return { status: "error", message: "Tree navigation cancelled." };
        }
        if (result.aborted) {
            return { status: "error", message: "Tree navigation aborted." };
        }
        if (result.editorText) {
            return {
                status: "success",
                message: `Navigation complete. Selected text:\n${result.editorText}`,
            };
        }
        return { status: "success", message: "Navigation complete." };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return { status: "error", message };
    }
}
/** Handle /label: set or clear a label on a specific entry. */
export async function handleLabel(session, command) {
    if (!command.targetId) {
        return { status: "error", message: "Usage: /label <entryId> <label|clear>" };
    }
    const rawLabel = command.label?.trim();
    const label = rawLabel && !["clear", "none", "off"].includes(rawLabel.toLowerCase()) ? rawLabel : "";
    session.sessionManager.appendLabelChange(command.targetId.trim(), label);
    return {
        status: "success",
        message: label ? `Label set on ${command.targetId}: ${label}` : `Label cleared on ${command.targetId}.`,
    };
}
/** Handle /labels: list all currently labeled entries. */
export async function handleLabels(session, _command) {
    const roots = session.sessionManager.getTree();
    const labels = [];
    const describeLabelEntry = (entry) => {
        if (entry.type === "message") {
            const msg = (entry.message && typeof entry.message === "object")
                ? entry.message
                : {};
            const role = typeof msg.role === "string" ? msg.role : "message";
            const text = extractTextFromContent(msg.content);
            if (text)
                return `${role}: "${truncateText(text, 60)}"`;
            return role;
        }
        return `[${entry.type}]`;
    };
    const walk = (node) => {
        if (node.label) {
            labels.push({ id: node.entry.id, label: node.label, summary: describeLabelEntry(node.entry) });
        }
        for (const child of node.children || []) {
            walk(child);
        }
    };
    for (const root of roots)
        walk(root);
    if (labels.length === 0) {
        return { status: "success", message: "No labels set." };
    }
    const lines = ["Labels:", ...labels.map((item) => `• ${item.id} [${item.label}] ${item.summary}`)];
    return { status: "success", message: lines.join("\n") };
}
