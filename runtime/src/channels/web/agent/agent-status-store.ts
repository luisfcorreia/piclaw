/**
 * channels/web/agent-status-store.ts – in-memory + persisted web agent status state.
 */

import { getInflightRuns, type InflightRun } from "../../../db.js";

interface AgentStatusStateStore {
  load(): void;
  save(): void;
  setAgentStatus(chatJid: string, status: Record<string, unknown> | null): void;
  getAgentStatuses(): Record<string, Record<string, unknown>>;
}

interface AgentStatusInflightStore {
  getInflightRuns(): Array<Pick<InflightRun, "chatJid" | "startedAt">>;
}

const STATUS_RUNTIME_GENERATION = [
  String(process.pid || "0"),
  Date.now().toString(36),
  Math.random().toString(36).slice(2, 10),
].join(":");

const STATUS_RUNTIME_GENERATION_KEY = "runtime_generation";

function withRuntimeGeneration(status: Record<string, unknown>): Record<string, unknown> {
  return {
    ...status,
    [STATUS_RUNTIME_GENERATION_KEY]: STATUS_RUNTIME_GENERATION,
  };
}

function hasCurrentRuntimeGeneration(status: Record<string, unknown> | null | undefined): boolean {
  if (!status || typeof status !== "object") return false;
  return status[STATUS_RUNTIME_GENERATION_KEY] === STATUS_RUNTIME_GENERATION;
}

function buildRestartRecoveryStatus(inflight: Pick<InflightRun, "startedAt">): Record<string, unknown> {
  return {
    type: "intent",
    kind: "info",
    intent_key: "recovery",
    source: "startup_recovery",
    title: "Recovering interrupted response",
    detail: "Reconstructing runtime state from the persisted inflight marker.",
    blocking: true,
    started_at: inflight.startedAt,
    [STATUS_RUNTIME_GENERATION_KEY]: STATUS_RUNTIME_GENERATION,
  };
}

/** In-memory + persisted lifecycle store for active web agent statuses. */
export class AgentStatusStore {
  private activeAgentStatuses = new Map<string, Record<string, unknown>>();

  constructor(
    private readonly state: AgentStatusStateStore,
    private readonly inflightStore: AgentStatusInflightStore = { getInflightRuns },
  ) {}

  load(): void {
    this.state.load();

    // Persisted agentStatuses are only trustworthy when they were written by
    // the current process generation. After a restart, the durable truth comes
    // from chat_cursors inflight markers, and get() synthesizes a fresh
    // recovery status from that durable state when needed.
    const restored = this.state.getAgentStatuses();
    const nextStatuses = new Map<string, Record<string, unknown>>();
    let mutated = false;

    for (const [jid, status] of Object.entries(restored)) {
      if (hasCurrentRuntimeGeneration(status)) {
        nextStatuses.set(jid, status);
        continue;
      }
      this.state.setAgentStatus(jid, null);
      mutated = true;
    }

    if (mutated) {
      this.state.save();
    }

    this.activeAgentStatuses = nextStatuses;
  }

  update(chatJid: string, status: Record<string, unknown>): void {
    const type = status?.type;
    if (type === "done" || type === "error") {
      this.activeAgentStatuses.delete(chatJid);
      return;
    }

    const stamped = withRuntimeGeneration(status);
    this.activeAgentStatuses.set(chatJid, stamped);
  }

  get(chatJid: string): Record<string, unknown> | null {
    const active = this.activeAgentStatuses.get(chatJid);
    if (active) return active;

    const inflight = this.inflightStore.getInflightRuns().find((entry) => entry.chatJid === chatJid);
    if (!inflight) return null;
    return buildRestartRecoveryStatus(inflight);
  }

  clearPersistedStatuses(): void {
    // Migration cleanup: removes any agentStatuses that were written to
    // router_state by older code. update() no longer persists active statuses,
    // so after one full restart cycle this becomes a no-op.
    const persisted = this.state.getAgentStatuses();
    const chatJids = Object.keys(persisted);
    this.activeAgentStatuses.clear();
    if (chatJids.length === 0) return;
    for (const chatJid of chatJids) {
      this.state.setAgentStatus(chatJid, null);
    }
    this.state.save();
  }
}
