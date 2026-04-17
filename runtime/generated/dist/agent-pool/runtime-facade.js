/**
 * agent-pool/runtime-facade.ts – Lightweight runtime/status/control helpers for AgentPool.
 *
 * Extracts session-status lookups, model registry access, slash/control routing,
 * and queued-message mutations so AgentPool can remain a thinner orchestrator.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { applyControlCommand } from "../agent-control/index.js";
import { formatThinkingLevelForDisplay } from "../agent-control/agent-control-helpers.js";
import { SESSIONS_DIR } from "../core/config.js";
import { detectChannel } from "../router.js";
import { executeSlashCommand } from "./slash-command.js";
import { peekProviderUsage, warmProviderUsage } from "./provider-usage.js";
import { resolveModelLabel } from "../utils/model-utils.js";
import { createLogger } from "../utils/logger.js";
import { withChatContext } from "../core/chat-context.js";
import { sanitiseJid } from "./session.js";
const log = createLogger("agent-pool.runtime-facade");
const persistedModelStateCache = new Map();
function truncateText(text, maxLen) {
    if (text.length <= maxLen)
        return text;
    return text.slice(0, maxLen - 1) + "\u2026";
}
function extractTextPreview(content) {
    if (typeof content === "string")
        return content;
    if (!Array.isArray(content))
        return "";
    for (const block of content) {
        if (!block || typeof block !== "object")
            continue;
        const b = block;
        if (b.type === "text" && typeof b.text === "string")
            return b.text;
    }
    return "";
}
function getPersistedSessionState(chatJid) {
    const sessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
    if (!existsSync(sessionDir)) {
        persistedModelStateCache.delete(chatJid);
        return { current: null, thinkingLevel: null };
    }
    const latestFile = readdirSync(sessionDir)
        .filter((entry) => entry.endsWith(".jsonl"))
        .sort()
        .pop();
    if (!latestFile) {
        persistedModelStateCache.delete(chatJid);
        return { current: null, thinkingLevel: null };
    }
    const fullPath = join(sessionDir, latestFile);
    let signature = fullPath;
    try {
        const stat = statSync(fullPath);
        signature = `${fullPath}:${stat.size}:${Math.round(stat.mtimeMs)}`;
    }
    catch {
        persistedModelStateCache.delete(chatJid);
        return { current: null, thinkingLevel: null };
    }
    const cached = persistedModelStateCache.get(chatJid);
    if (cached?.signature === signature) {
        return { current: cached.current, thinkingLevel: cached.thinkingLevel };
    }
    let current = null;
    let thinkingLevel = null;
    try {
        const lines = readFileSync(fullPath, "utf8").split(/\r?\n/);
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed)
                continue;
            let entry;
            try {
                entry = JSON.parse(trimmed);
            }
            catch {
                continue;
            }
            if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
                current = `${entry.provider}/${entry.modelId}`;
                continue;
            }
            if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
                thinkingLevel = entry.thinkingLevel;
                continue;
            }
            if (entry?.type === "message" && entry.message?.role === "assistant" && typeof entry.message?.provider === "string" && typeof entry.message?.model === "string") {
                current = `${entry.message.provider}/${entry.message.model}`;
            }
        }
    }
    catch {
        current = null;
        thinkingLevel = null;
    }
    persistedModelStateCache.set(chatJid, { signature, current, thinkingLevel });
    return { current, thinkingLevel };
}
function parseTranscriptPromptEnvelope(raw) {
    const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
    if (!normalized || (!normalized.startsWith("Channel:") && !normalized.startsWith("Messages:") && !/^.+\s@\s.+:\n/m.test(normalized))) {
        return null;
    }
    const lines = normalized.split("\n");
    const messages = [];
    let index = 0;
    while (index < lines.length) {
        const line = lines[index];
        if (!line.trim()) {
            index += 1;
            continue;
        }
        if (line.startsWith("Channel:")) {
            index += 1;
            continue;
        }
        if (line === "Messages:") {
            index += 1;
            continue;
        }
        const headerMatch = line.match(/^(.*?)\s@\s(.*?):$/);
        if (!headerMatch) {
            index += 1;
            continue;
        }
        const sender = headerMatch[1].trim();
        const time = headerMatch[2].trim();
        index += 1;
        const bodyLines = [];
        while (index < lines.length) {
            const current = lines[index];
            if (!current.trim()) {
                const following = lines[index + 1] || "";
                if (/^.+\s@\s.+:$/.test(following)) {
                    index += 1;
                    break;
                }
                bodyLines.push("");
                index += 1;
                continue;
            }
            if (/^.+\s@\s.+:$/.test(current) && !current.startsWith("  "))
                break;
            bodyLines.push(current.startsWith("  ") ? current.slice(2) : current);
            index += 1;
        }
        messages.push({ sender, time, text: bodyLines.join("\n").trim() });
    }
    return messages.length > 0 ? messages : null;
}
function formatPromptEnvelopePreview(raw) {
    const messages = parseTranscriptPromptEnvelope(raw);
    if (!messages || messages.length === 0)
        return null;
    const lines = messages.map((message) => {
        const sender = message.sender.trim() || "user";
        const time = message.time.trim();
        const text = message.text.trim();
        const prefix = time ? `${sender} (${time})` : sender;
        return text ? `${prefix}: ${text}` : prefix;
    });
    const preview = lines.join("\n\n").trim();
    const rowPreview = messages.map((message) => message.text.trim()).filter(Boolean).join("\n\n").trim();
    return {
        preview,
        rowPreview: rowPreview || preview,
    };
}
function getToolCallName(content) {
    if (!Array.isArray(content))
        return null;
    for (const block of content) {
        if (!block || typeof block !== "object")
            continue;
        const b = block;
        if (b.type === "toolCall" && typeof b.name === "string")
            return b.name;
    }
    return null;
}
function parseToolArgs(block) {
    // Try all known field names for tool arguments
    for (const key of ["input", "args", "arguments"]) {
        const val = block[key];
        if (!val)
            continue;
        if (typeof val === "object" && val !== null)
            return val;
        if (typeof val === "string") {
            try {
                const parsed = JSON.parse(val);
                if (parsed && typeof parsed === "object")
                    return parsed;
            }
            catch (err) {
                log.debug("Failed to parse tool arguments JSON.", { err, key, valuePreview: truncateText(val, 120) });
            }
        }
    }
    // Try partialJson field
    if (typeof block.partialJson === "string") {
        try {
            const parsed = JSON.parse(block.partialJson);
            if (parsed && typeof parsed === "object")
                return parsed;
        }
        catch (err) {
            log.debug("Failed to parse partial tool JSON.", { err, valuePreview: truncateText(block.partialJson, 120) });
        }
    }
    return null;
}
function formatToolInput(toolName, args) {
    const trunc = (s, max) => s.length > max ? s.slice(0, max - 1) + "\u2026" : s;
    switch (toolName) {
        case "bash":
        case "bun_run": {
            const cmd = typeof args.command === "string" ? args.command : null;
            return cmd ? trunc(cmd, 500) : JSON.stringify(args).slice(0, 200);
        }
        case "read":
        case "read_file": {
            let s = typeof args.path === "string" ? args.path : "";
            if (typeof args.offset === "number")
                s += `:${args.offset}`;
            if (typeof args.limit === "number")
                s += `-${(args.offset || 0) + args.limit}`;
            return s || JSON.stringify(args).slice(0, 200);
        }
        case "write":
        case "write_file": {
            const p = typeof args.path === "string" ? args.path : "";
            const contentLen = typeof args.content === "string" ? args.content.length : 0;
            return contentLen ? `${p} (${contentLen} chars)` : p || JSON.stringify(args).slice(0, 200);
        }
        case "edit":
        case "edit_file": {
            const p = typeof args.path === "string" ? args.path : (typeof args.file === "string" ? args.file : "");
            const old = typeof args.oldText === "string" ? args.oldText : (typeof args.old_string === "string" ? args.old_string : "");
            if (old)
                return `${p}  \u2016 ${trunc(old.split("\n")[0], 80)} \u2192 \u2026`;
            return p || JSON.stringify(args).slice(0, 200);
        }
        case "search_workspace":
        case "grep":
        case "rg": {
            const q = typeof args.query === "string" ? args.query : (typeof args.pattern === "string" ? args.pattern : "");
            const p = typeof args.path === "string" ? ` in ${args.path}` : "";
            return q ? `"${trunc(q, 80)}"${p}` : JSON.stringify(args).slice(0, 200);
        }
        case "messages": {
            const action = typeof args.action === "string" ? args.action : "";
            const q = typeof args.query === "string" ? ` "${trunc(args.query, 60)}"` : "";
            return `${action}${q}` || JSON.stringify(args).slice(0, 200);
        }
        case "keychain": {
            const action = typeof args.action === "string" ? args.action : "";
            const name = typeof args.name === "string" ? ` ${args.name}` : "";
            return `${action}${name}` || JSON.stringify(args).slice(0, 200);
        }
        default: {
            // Generic: show key=value pairs, skip large values
            const parts = [];
            for (const [k, v] of Object.entries(args)) {
                if (typeof v === "string" && v.length > 120) {
                    parts.push(`${k}: ${trunc(v.split("\n")[0], 80)}`);
                }
                else if (typeof v === "string") {
                    parts.push(`${k}: ${v}`);
                }
                else {
                    parts.push(`${k}: ${JSON.stringify(v).slice(0, 60)}`);
                }
            }
            return trunc(parts.join(", "), 500);
        }
    }
}
function formatToolInputFull(toolName, args) {
    switch (toolName) {
        case "bash":
        case "bun_run":
            return typeof args.command === "string" ? args.command : JSON.stringify(args, null, 2);
        case "read":
        case "read_file": {
            let s = typeof args.path === "string" ? args.path : "";
            if (typeof args.offset === "number")
                s += `:${args.offset}`;
            if (typeof args.limit === "number")
                s += `-${(args.offset || 0) + args.limit}`;
            return s || JSON.stringify(args, null, 2);
        }
        case "write":
        case "write_file": {
            const p = typeof args.path === "string" ? args.path : "";
            const content = typeof args.content === "string" ? args.content : "";
            return content ? `${p}\n\n${content}` : p || JSON.stringify(args, null, 2);
        }
        case "edit":
        case "edit_file": {
            const p = typeof args.path === "string" ? args.path : (typeof args.file === "string" ? args.file : "");
            const old = typeof args.oldText === "string" ? args.oldText : (typeof args.old_string === "string" ? args.old_string : "");
            const nw = typeof args.newText === "string" ? args.newText : (typeof args.new_string === "string" ? args.new_string : "");
            const edits = Array.isArray(args.edits) ? args.edits : null;
            if (edits) {
                return `${p}\n\n${edits.map((e, i) => `[${i + 1}] - ${e.oldText || e.old_string || ''}\n    + ${e.newText || e.new_string || ''}`).join('\n')}`;
            }
            if (old || nw)
                return `${p}\n\n- ${old}\n+ ${nw}`;
            return p || JSON.stringify(args, null, 2);
        }
        default:
            return JSON.stringify(args, null, 2);
    }
}
function getToolCallInput(content) {
    if (!Array.isArray(content))
        return null;
    for (const block of content) {
        if (!block || typeof block !== "object")
            continue;
        const b = block;
        if (b.type !== "toolCall")
            continue;
        const toolName = typeof b.name === "string" ? b.name : "";
        const args = parseToolArgs(b);
        if (args)
            return formatToolInput(toolName, args);
    }
    return null;
}
function getToolCallInputFull(content) {
    if (!Array.isArray(content))
        return null;
    for (const block of content) {
        if (!block || typeof block !== "object")
            continue;
        const b = block;
        if (b.type !== "toolCall")
            continue;
        const toolName = typeof b.name === "string" ? b.name : "";
        const args = parseToolArgs(b);
        if (args)
            return formatToolInputFull(toolName, args);
    }
    return null;
}
function getEntryMeta(entry) {
    const meta = {};
    if (entry.type !== "message")
        return meta;
    const msg = (entry.message && typeof entry.message === "object")
        ? entry.message
        : {};
    const role = typeof msg.role === "string" ? msg.role : null;
    if (role)
        meta.role = role;
    if (role === "toolResult" && typeof msg.toolName === "string")
        meta.toolName = msg.toolName;
    const toolCallName = getToolCallName(msg.content);
    if (toolCallName)
        meta.toolName = toolCallName;
    // Tool call input (compact for row, full for sidebar)
    const toolInput = getToolCallInput(msg.content);
    if (toolInput)
        meta.toolInput = toolInput;
    const toolInputFull = getToolCallInputFull(msg.content);
    if (toolInputFull)
        meta.toolInputFull = toolInputFull;
    const text = extractTextPreview(msg.content);
    if (text) {
        const promptEnvelopePreview = role === "user" ? formatPromptEnvelopePreview(text) : null;
        if (promptEnvelopePreview) {
            meta.contentLength = promptEnvelopePreview.preview.length;
            meta.detail = promptEnvelopePreview.preview;
            meta.previewText = promptEnvelopePreview.rowPreview;
            meta.rawDetail = text;
            meta.rawContentLength = text.length;
        }
        else {
            meta.contentLength = text.length;
            meta.detail = text;
        }
    }
    const thinking = msg.thinking;
    if (thinking) {
        const thinkingText = typeof thinking === "string" ? thinking : extractTextPreview(thinking);
        if (thinkingText && thinkingText.length > 0) {
            meta.hasThinking = true;
            meta.thinkingLength = thinkingText.length;
        }
    }
    return meta;
}
function describeTreeEntry(entry) {
    switch (entry.type) {
        case "message": {
            const msg = (entry.message && typeof entry.message === "object")
                ? entry.message
                : {};
            const role = typeof msg.role === "string" ? msg.role : "message";
            if (role === "toolResult") {
                const toolName = typeof msg.toolName === "string" ? msg.toolName : "tool";
                return `toolResult: ${toolName}`;
            }
            const text = extractTextPreview(msg.content);
            if (text) {
                const promptEnvelopePreview = role === "user" ? formatPromptEnvelopePreview(text) : null;
                const previewText = promptEnvelopePreview?.rowPreview || text;
                return `${role}: \"${truncateText(previewText, 80)}\"`;
            }
            const toolCallName = getToolCallName(msg.content);
            if (toolCallName)
                return `${role}: [tool ${toolCallName}]`;
            return role;
        }
        case "compaction":
            return `[compaction]`;
        case "branch_summary":
            return `[branch summary]`;
        case "thinking_level_change":
            return `[thinking ${entry.thinkingLevel}]`;
        case "model_change":
            return `[model ${entry.provider}/${entry.modelId}]`;
        case "label":
            return `[label ${entry.label || "clear"}]`;
        case "session_info":
            return `[session ${entry.name || "(unnamed)"}]`;
    }
    return "[entry]";
}
/**
 * Provides session-runtime helpers that do not belong in the core prompt loop.
 */
export class AgentRuntimeFacade {
    options;
    constructor(options) {
        this.options = options;
    }
    async applyControlCommand(chatJid, command) {
        const runtime = await this.options.getOrCreateRuntime(chatJid);
        const session = runtime.session;
        const channel = detectChannel(chatJid);
        const apply = this.options.applyControlCommandFn ?? applyControlCommand;
        const result = await withChatContext(chatJid, channel, () => apply(runtime, this.options.modelRegistry, command));
        if (runtime.session !== session) {
            await this.options.refreshRuntime(chatJid, runtime);
        }
        return result;
    }
    async getCurrentModelLabel(chatJid) {
        const session = (await this.options.getOrCreateRuntime(chatJid)).session;
        const model = session.model;
        return model ? `${model.provider}/${model.id}` : null;
    }
    async getAvailableModels(chatJid) {
        // Passive UI refreshes should not hydrate a cold runtime just to render
        // model state for the picker.
        const session = this.options.pool.get(chatJid)?.runtime.session ?? null;
        const persistedState = session ? { current: null, thinkingLevel: null } : getPersistedSessionState(chatJid);
        const registry = session?.modelRegistry ?? this.options.modelRegistry;
        registry.refresh();
        const available = registry.getAvailable();
        const modelOptions = available.map((model) => ({
            label: `${model.provider}/${model.id}`,
            provider: model.provider,
            id: model.id,
            name: typeof model.name === "string" && model.name.trim() ? model.name.trim() : null,
            context_window: typeof model.contextWindow === "number" && Number.isFinite(model.contextWindow) && model.contextWindow > 0
                ? model.contextWindow
                : null,
            reasoning: Boolean(model.reasoning),
        }));
        const models = modelOptions.map((model) => model.label);
        const currentModel = session?.model ? `${session.model.provider}/${session.model.id}` : persistedState.current;
        const currentModelOption = currentModel ? modelOptions.find((model) => model.label === currentModel) ?? null : null;
        const thinkingLevel = session?.thinkingLevel ?? persistedState.thinkingLevel ?? null;
        const supportsThinking = session && typeof session.supportsThinking === "function"
            ? session.supportsThinking()
            : Boolean(session?.model?.reasoning ?? currentModelOption?.reasoning);
        const providerUsage = session?.model?.provider
            ? (peekProviderUsage(session.model.provider, { allowStale: true }) ?? null)
            : null;
        if (session?.model?.provider) {
            void warmProviderUsage(this.options.authStorage, session.model.provider);
        }
        const thinkingProvider = session?.model?.provider ?? currentModelOption?.provider ?? null;
        const thinkingLevelLabel = thinkingLevel && thinkingProvider
            ? formatThinkingLevelForDisplay(thinkingLevel, thinkingProvider)
            : thinkingLevel;
        return {
            current: currentModel,
            models,
            model_options: modelOptions,
            thinking_level: thinkingLevel,
            thinking_level_label: thinkingLevelLabel,
            supports_thinking: supportsThinking,
            provider_usage: providerUsage,
        };
    }
    getContextUsageForChat(chatJid) {
        const entry = this.options.pool.get(chatJid);
        if (!entry)
            return null;
        return entry.runtime.session.getContextUsage() ?? null;
    }
    getSessionTreeForChat(chatJid) {
        const entry = this.options.pool.get(chatJid);
        if (!entry)
            return null;
        const sm = entry.runtime.session.sessionManager;
        const leafId = sm.getLeafId();
        const roots = sm.getTree();
        // Iterative DFS to avoid stack overflow on deep linear chains
        const flatNodes = [];
        const stack = [];
        for (let i = roots.length - 1; i >= 0; i--)
            stack.push(roots[i]);
        while (stack.length > 0) {
            const node = stack.pop();
            flatNodes.push({
                id: node.entry.id,
                parentId: node.entry.parentId ?? null,
                type: node.entry.type,
                timestamp: node.entry.timestamp,
                label: node.label ?? null,
                active: node.entry.id === leafId,
                preview: describeTreeEntry(node.entry),
                childCount: (node.children || []).length,
                ...getEntryMeta(node.entry),
            });
            const children = node.children || [];
            for (let i = children.length - 1; i >= 0; i--)
                stack.push(children[i]);
        }
        return { leafId, nodes: flatNodes, flat: true, total: flatNodes.length };
    }
    async saveSessionPosition(chatJid) {
        const session = (await this.options.getOrCreateRuntime(chatJid)).session;
        return session.sessionManager.getLeafId();
    }
    async restoreSessionPosition(chatJid, leafId) {
        if (leafId === null)
            return;
        const session = (await this.options.getOrCreateRuntime(chatJid)).session;
        const currentLeaf = session.sessionManager.getLeafId();
        if (currentLeaf === leafId)
            return;
        try {
            await session.navigateTree(leafId);
        }
        catch (err) {
            this.options.onError?.("Failed to restore session position", {
                operation: "restore_session_position",
                chatJid,
                leafId,
                err,
            });
        }
    }
    hasProviderModels(provider) {
        return this.options.modelRegistry.getAll().some((model) => model.provider === provider);
    }
    registerModelProvider(providerName, config) {
        this.options.modelRegistry.registerProvider(providerName, config);
    }
    resolveModelInput(input) {
        return resolveModelLabel(this.options.modelRegistry, input);
    }
    isStreaming(chatJid) {
        return this.options.pool.get(chatJid)?.runtime.session.isStreaming ?? false;
    }
    isActive(chatJid) {
        const session = this.options.pool.get(chatJid)?.runtime.session;
        if (!session)
            return false;
        return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
    }
    async queueStreamingMessage(chatJid, text, behavior) {
        const session = (await this.options.getOrCreateRuntime(chatJid)).session;
        if (!session.isStreaming)
            return { queued: false };
        const channel = detectChannel(chatJid);
        try {
            return await withChatContext(chatJid, channel, async () => {
                await session.prompt(text, { streamingBehavior: behavior });
                return { queued: true };
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            return { queued: false, error: message };
        }
    }
    async removeQueuedFollowupMessage(chatJid, queuedContent) {
        const session = (await this.options.getOrCreateRuntime(chatJid)).session;
        if (!session.isStreaming)
            return false;
        const followups = [...session.getFollowUpMessages()];
        if (followups.length === 0)
            return false;
        const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
        let removeIndex = -1;
        if (normalized) {
            removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
        }
        if (removeIndex < 0)
            removeIndex = 0;
        const channel = detectChannel(chatJid);
        try {
            return await withChatContext(chatJid, channel, async () => {
                const cleared = session.clearQueue();
                const nextFollowups = cleared.followUp.filter((_, idx) => idx !== removeIndex);
                for (const steer of cleared.steering) {
                    await session.prompt(steer, { streamingBehavior: "steer" });
                }
                for (const followup of nextFollowups) {
                    await session.prompt(followup, { streamingBehavior: "followUp" });
                }
                return true;
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to remove queued follow-up", {
                operation: "remove_queued_follow_up",
                chatJid,
                err,
            });
            return false;
        }
    }
    async applySlashCommand(chatJid, rawText) {
        this.options.clearAttachments(chatJid);
        const runtime = await this.options.getOrCreateRuntime(chatJid);
        const session = runtime.session;
        const channel = detectChannel(chatJid);
        const exec = this.options.executeSlashCommandFn ?? executeSlashCommand;
        const result = await withChatContext(chatJid, channel, () => exec(session, chatJid, rawText));
        if (runtime.session !== session) {
            await this.options.refreshRuntime(chatJid, runtime);
        }
        this.options.clearAttachments(chatJid);
        return result;
    }
}
