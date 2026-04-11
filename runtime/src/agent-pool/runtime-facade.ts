/**
 * agent-pool/runtime-facade.ts – Lightweight runtime/status/control helpers for AgentPool.
 *
 * Extracts session-status lookups, model registry access, slash/control routing,
 * and queued-message mutations so AgentPool can remain a thinner orchestrator.
 */

import type { AgentSession, AgentSessionRuntime, ModelRegistry, AuthStorage } from "@mariozechner/pi-coding-agent";

import { applyControlCommand, type AgentControlCommand, type AgentControlResult } from "../agent-control/index.js";
import { detectChannel } from "../router.js";
import { executeSlashCommand } from "./slash-command.js";
import { getProviderUsage } from "./provider-usage.js";
import { resolveModelLabel } from "../utils/model-utils.js";
import { withChatContext } from "../core/chat-context.js";
import type { PoolEntry } from "./session-manager.js";

function truncateText(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + "\u2026";
}

function extractTextPreview(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  for (const block of content) {
    if (!block || typeof block !== "object") continue;
    const b = block as Record<string, unknown>;
    if (b.type === "text" && typeof b.text === "string") return b.text;
  }
  return "";
}

function getToolCallName(content: unknown): string | null {
  if (!Array.isArray(content)) return null;
  for (const block of content) {
    if (!block || typeof block !== "object") continue;
    const b = block as Record<string, unknown>;
    if (b.type === "toolCall" && typeof b.name === "string") return b.name;
  }
  return null;
}

function describeTreeEntry(entry: Record<string, unknown>): string {
  switch (entry.type) {
    case "message": {
      const msg = (entry.message && typeof entry.message === "object")
        ? (entry.message as Record<string, unknown>)
        : {};
      const role = typeof msg.role === "string" ? msg.role : "message";
      if (role === "toolResult") {
        const toolName = typeof msg.toolName === "string" ? msg.toolName : "tool";
        return `toolResult: ${toolName}`;
      }
      const text = extractTextPreview(msg.content);
      if (text) return `${role}: \"${truncateText(text, 80)}\"`;
      const toolCallName = getToolCallName(msg.content);
      if (toolCallName) return `${role}: [tool ${toolCallName}]`;
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

/** Structured model option returned to the web model picker. */
export interface AvailableModelOption {
  label: string;
  provider: string;
  id: string;
  name: string | null;
  context_window: number | null;
  reasoning: boolean;
}

/** Shape returned by available-model inspection. */
export interface AvailableModelsResult {
  current: string | null;
  models: string[];
  model_options: AvailableModelOption[];
  thinking_level: string | null;
  supports_thinking: boolean;
  provider_usage: Awaited<ReturnType<typeof getProviderUsage>>;
}

/** Dependencies required by AgentRuntimeFacade. */
export interface AgentRuntimeFacadeOptions {
  pool: Map<string, PoolEntry>;
  getOrCreateRuntime: (chatJid: string) => Promise<AgentSessionRuntime>;
  modelRegistry: ModelRegistry;
  authStorage: AuthStorage;
  clearAttachments: (chatJid: string) => void;
  refreshRuntime: (chatJid: string, runtime: AgentSessionRuntime) => Promise<void>;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
  onError?: (message: string, details: Record<string, unknown>) => void;
  applyControlCommandFn?: typeof applyControlCommand;
  executeSlashCommandFn?: typeof executeSlashCommand;
}

/**
 * Provides session-runtime helpers that do not belong in the core prompt loop.
 */
export class AgentRuntimeFacade {
  constructor(private readonly options: AgentRuntimeFacadeOptions) {}

  async applyControlCommand(chatJid: string, command: AgentControlCommand): Promise<AgentControlResult> {
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

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    const model = session.model;
    return model ? `${model.provider}/${model.id}` : null;
  }

  async getAvailableModels(chatJid: string): Promise<AvailableModelsResult> {
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    const registry = (session as AgentSession & { modelRegistry?: ModelRegistry }).modelRegistry ?? this.options.modelRegistry;
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
    const currentModel = session.model ? `${session.model.provider}/${session.model.id}` : null;
    const thinkingLevel = session.thinkingLevel ?? null;
    const supportsThinking = typeof (session as AgentSession & { supportsThinking?: () => boolean }).supportsThinking === "function"
      ? (session as AgentSession & { supportsThinking: () => boolean }).supportsThinking()
      : Boolean(session.model?.reasoning);
    const providerUsage = session.model?.provider
      ? await getProviderUsage(this.options.authStorage, session.model.provider)
      : null;
    return {
      current: currentModel,
      models,
      model_options: modelOptions,
      thinking_level: thinkingLevel,
      supports_thinking: supportsThinking,
      provider_usage: providerUsage,
    };
  }

  getContextUsageForChat(chatJid: string): {
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null {
    const entry = this.options.pool.get(chatJid);
    if (!entry) return null;
    return entry.runtime.session.getContextUsage() ?? null;
  }

  getSessionTreeForChat(chatJid: string): { leafId: string | null; nodes: unknown[] } | null {
    const entry = this.options.pool.get(chatJid);
    if (!entry) return null;
    const sm = entry.runtime.session.sessionManager;
    const leafId = sm.getLeafId();
    const roots = sm.getTree();
    const serialise = (node: any): unknown => ({
      id: node.entry.id,
      parentId: node.entry.parentId ?? null,
      type: node.entry.type,
      timestamp: node.entry.timestamp,
      label: node.label ?? null,
      active: node.entry.id === leafId,
      preview: describeTreeEntry(node.entry),
      children: (node.children || []).map(serialise),
    });
    return { leafId, nodes: roots.map(serialise) };
  }

  async saveSessionPosition(chatJid: string): Promise<string | null> {
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    return session.sessionManager.getLeafId();
  }

  async restoreSessionPosition(chatJid: string, leafId: string | null): Promise<void> {
    if (leafId === null) return;
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    const currentLeaf = session.sessionManager.getLeafId();
    if (currentLeaf === leafId) return;
    try {
      await session.navigateTree(leafId);
    } catch (err) {
      this.options.onError?.("Failed to restore session position", {
        operation: "restore_session_position",
        chatJid,
        leafId,
        err,
      });
    }
  }

  hasProviderModels(provider: string): boolean {
    return this.options.modelRegistry.getAll().some((model) => model.provider === provider);
  }

  registerModelProvider(providerName: string, config: Parameters<ModelRegistry["registerProvider"]>[1]): void {
    this.options.modelRegistry.registerProvider(providerName, config);
  }

  resolveModelInput(input: string): { model?: string; error?: string } {
    return resolveModelLabel(this.options.modelRegistry, input);
  }

  isStreaming(chatJid: string): boolean {
    return this.options.pool.get(chatJid)?.runtime.session.isStreaming ?? false;
  }

  isActive(chatJid: string): boolean {
    const session = this.options.pool.get(chatJid)?.runtime.session;
    if (!session) return false;
    return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
  }

  async queueStreamingMessage(
    chatJid: string,
    text: string,
    behavior: "steer" | "followUp",
  ): Promise<{ queued: boolean; error?: string }> {
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    if (!session.isStreaming) return { queued: false };

    const channel = detectChannel(chatJid);
    try {
      return await withChatContext(chatJid, channel, async () => {
        await session.prompt(text, { streamingBehavior: behavior });
        return { queued: true };
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { queued: false, error: message };
    }
  }

  async removeQueuedFollowupMessage(chatJid: string, queuedContent?: string): Promise<boolean> {
    const session = (await this.options.getOrCreateRuntime(chatJid)).session;
    if (!session.isStreaming) return false;

    const followups = [...session.getFollowUpMessages()];
    if (followups.length === 0) return false;

    const normalized = typeof queuedContent === "string" ? queuedContent.trim() : "";
    let removeIndex = -1;
    if (normalized) {
      removeIndex = followups.findIndex((item) => item === queuedContent || item.trim() === normalized);
    }
    if (removeIndex < 0) removeIndex = 0;

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
    } catch (err) {
      this.options.onWarn?.("Failed to remove queued follow-up", {
        operation: "remove_queued_follow_up",
        chatJid,
        err,
      });
      return false;
    }
  }

  async applySlashCommand(chatJid: string, rawText: string): Promise<AgentControlResult> {
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
