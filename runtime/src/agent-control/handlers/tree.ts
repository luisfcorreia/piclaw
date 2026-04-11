/**
 * agent-control/handlers/tree.ts – Handler for the /tree command.
 *
 * Renders the session message tree in a compact text format, supporting
 * head/tail modes, pagination, summarisation, and label display.
 *
 * Consumers: agent-control-handlers.ts dispatches to this handler.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { extractTextFromContent, formatCompactNumber, truncateText } from "../agent-control-helpers.js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

type TreeCommand = Extract<AgentControlCommand, { type: "tree" }>;
type LabelCommand = Extract<AgentControlCommand, { type: "label" }>;
type LabelsCommand = Extract<AgentControlCommand, { type: "labels" }>;
type SessionTreeNode = ReturnType<AgentSession["sessionManager"]["getTree"]>[number];
type SessionTreeEntry = SessionTreeNode["entry"];

function getToolCallName(content: unknown): string | null {
  if (!Array.isArray(content)) return null;
  for (const block of content) {
    if (!block || typeof block !== "object") continue;
    const candidate = block as { type?: unknown; name?: unknown };
    if (candidate.type === "toolCall" && typeof candidate.name === "string") {
      return candidate.name;
    }
  }
  return null;
}

function describeEntry(entry: SessionTreeEntry): string {
  switch (entry.type) {
    case "message": {
      const msg = (entry.message && typeof entry.message === "object")
        ? (entry.message as unknown as Record<string, unknown>)
        : {};
      const role = typeof msg.role === "string" ? msg.role : "message";
      if (role === "toolResult") {
        const toolName = typeof msg.toolName === "string" ? msg.toolName : "tool";
        return `toolResult: ${toolName}`;
      }
      const content = msg.content;
      const text = extractTextFromContent(content);
      if (text) {
        return `${role}: "${truncateText(text, 80)}"`;
      }
      const toolCallName = getToolCallName(content);
      if (toolCallName) return `${role}: [tool ${toolCallName}]`;
      return role;
    }
    case "compaction":
      return `[compaction: ${formatCompactNumber(entry.tokensBefore)} tokens]`;
    case "branch_summary":
      return `[branch summary from ${entry.fromId}]`;
    case "thinking_level_change":
      return `[thinking ${entry.thinkingLevel}]`;
    case "model_change":
      return `[model ${entry.provider}/${entry.modelId}]`;
    case "custom":
      return `[custom ${entry.customType}]`;
    case "custom_message":
      return `[custom message ${entry.customType}]`;
    case "label":
      return `[label ${entry.label || "clear"}]`;
    case "session_info":
      return `[session name ${entry.name || "none"}]`;
  }
  return "[entry]";
}

function loadTreeWidgetHtml(): string | null {
  try {
    const thisDir = dirname(fileURLToPath(import.meta.url));
    // Walk up from agent-control/handlers/ to runtime root, then into web/static/
    const candidates = [
      resolve(thisDir, "..", "..", "..", "web", "static", "session-tree.html"),
      resolve(thisDir, "..", "..", "..", "..", "web", "static", "session-tree.html"),
    ];
    for (const p of candidates) {
      try {
        return readFileSync(p, "utf8");
      } catch { /* try next */ }
    }
    return null;
  } catch {
    return null;
  }
}

function buildTreeWidgetBlock(treeData: { leafId: string | null; nodes: unknown[] }): Record<string, unknown> | null {
  const html = loadTreeWidgetHtml();
  if (!html) return null;
  // Inject tree data directly instead of fetching — srcdoc iframes can't fetch same-origin
  const injected = html.replace(
    "var treeData = null;",
    `var treeData = ${JSON.stringify(treeData)};`,
  );
  return {
    type: "generated_widget",
    widget_id: `session-tree-${Date.now()}`,
    title: "Session Tree",
    subtitle: "Interactive session tree viewer",
    description: "Navigate branches, view labels, and jump to any entry.",
    open_label: "Open tree viewer",
    capabilities: ["interactive"],
    artifact: {
      kind: "html",
      html: injected,
    },
  };
}

/** Handle /tree: render the session message tree in text format. */
export async function handleTree(session: AgentSession, command: TreeCommand): Promise<AgentControlResult> {
  const sessionManager = session.sessionManager;
  const leafId = sessionManager.getLeafId();

  if (!command.targetId) {
    const roots = sessionManager.getTree();
    if (roots.length === 0) {
      return { status: "success", message: "Tree is empty." };
    }

    const lines: string[] = ["Session tree:"];
    const flatLines: string[] = [];

    const walk = (node: SessionTreeNode, depth: number) => {
      const indent = "  ".repeat(depth);
      const label = node.label ? ` [${node.label}]` : "";
      const active = node.entry.id === leafId ? " ← active" : "";
      flatLines.push(`${indent}• ${node.entry.id} ${describeEntry(node.entry)}${label}${active}`);
      for (const child of node.children || []) {
        walk(child, depth + 1);
      }
    };

    for (const root of roots) {
      walk(root, 0);
    }

    const totalEntries = flatLines.length;
    const limit = Math.max(1, command.limit ?? 10);
    const mode = command.mode ?? "tail";
    const offset = Math.max(0, command.offset ?? 0);

    let start: number;
    let end: number;

    if (mode === "tail") {
      start = Math.max(totalEntries - limit, 0);
      end = totalEntries;
    } else {
      start = Math.min(offset, totalEntries);
      end = Math.min(start + limit, totalEntries);
    }

    const slice = flatLines.slice(start, end);
    lines.push(...slice);

    if (slice.length < totalEntries) {
      const range = mode === "tail"
        ? `last ${slice.length} of ${totalEntries}`
        : `entries ${start + 1}-${start + slice.length} of ${totalEntries}`;
      lines.push(`… showing ${range}. Use /tree --limit N [--offset M] or /tree --tail N to view more.`);
    }

    lines.push("Use /tree <entryId> to navigate. Add --summarize or --summary \"...\" for branch summaries.");

    // Serialize tree as a flat array to avoid deep nesting (sessions can be thousands deep)
    const flatNodes: unknown[] = [];
    const walkFlat = (node: SessionTreeNode) => {
      flatNodes.push({
        id: node.entry.id,
        parentId: node.entry.parentId ?? null,
        type: node.entry.type,
        timestamp: node.entry.timestamp,
        label: node.label ?? null,
        active: node.entry.id === leafId,
        preview: describeEntry(node.entry),
        childCount: (node.children || []).length,
      });
      for (const child of node.children || []) walkFlat(child);
    };
    for (const root of roots) walkFlat(root);

    // Cap at 500 most recent entries for the widget
    const cappedNodes = flatNodes.length > 500 ? flatNodes.slice(-500) : flatNodes;
    const treePayload = { leafId, nodes: cappedNodes, flat: true, total: flatNodes.length, capped: flatNodes.length > 500 };
    const widgetBlock = buildTreeWidgetBlock(treePayload);
    const contentBlocks = widgetBlock ? [widgetBlock] : undefined;
    return { status: "success", message: lines.join("\n"), contentBlocks };
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
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { status: "error", message };
  }
}

/** Handle /label: set or clear a label on a specific entry. */
export async function handleLabel(session: AgentSession, command: LabelCommand): Promise<AgentControlResult> {
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
export async function handleLabels(session: AgentSession, _command: LabelsCommand): Promise<AgentControlResult> {
  const roots = session.sessionManager.getTree();
  const labels: Array<{ id: string; label: string; summary: string }> = [];

  const describeLabelEntry = (entry: SessionTreeEntry): string => {
    if (entry.type === "message") {
      const msg = (entry.message && typeof entry.message === "object")
        ? (entry.message as unknown as Record<string, unknown>)
        : {};
      const role = typeof msg.role === "string" ? msg.role : "message";
      const text = extractTextFromContent(msg.content);
      if (text) return `${role}: "${truncateText(text, 60)}"`;
      return role;
    }
    return `[${entry.type}]`;
  };

  const walk = (node: SessionTreeNode) => {
    if (node.label) {
      labels.push({ id: node.entry.id, label: node.label, summary: describeLabelEntry(node.entry) });
    }
    for (const child of node.children || []) {
      walk(child);
    }
  };

  for (const root of roots) walk(root);

  if (labels.length === 0) {
    return { status: "success", message: "No labels set." };
  }

  const lines = ["Labels:", ...labels.map((item) => `• ${item.id} [${item.label}] ${item.summary}`)];
  return { status: "success", message: lines.join("\n") };
}
