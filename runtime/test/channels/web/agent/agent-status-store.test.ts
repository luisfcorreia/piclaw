import { describe, expect, test } from "bun:test";
import { AgentStatusStore } from "../../../../src/channels/web/agent/agent-status-store.js";

describe("web agent status store", () => {
  test("load clears persisted statuses from a previous runtime generation when no inflight run exists", () => {
    const calls: string[] = [];
    const state = {
      load: () => {
        calls.push("load");
      },
      save: () => {
        calls.push("save");
      },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        calls.push(`set:${chatJid}:${status ? "status" : "null"}`);
      },
      getAgentStatuses: () => ({
        "web:1": { type: "intent", title: "Thinking" },
        "web:2": { type: "intent", intent_key: "compaction", title: "Compacting context", started_at: "2026-03-14T14:00:00.000Z" },
      }),
    };

    const store = new AgentStatusStore(state, { getInflightRuns: () => [] });
    store.load();

    expect(calls).toEqual([
      "load",
      "set:web:1:null",
      "set:web:2:null",
      "save",
    ]);
    expect(store.get("web:1")).toBeNull();
    expect(store.get("web:2")).toBeNull();
  });

  test("update is in-memory only — no persistence calls", () => {
    const saveCalls: number[] = [];
    const setStatusCalls: Array<{ chatJid: string; status: Record<string, unknown> | null }> = [];

    const state = {
      load: () => {},
      save: () => { saveCalls.push(1); },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        setStatusCalls.push({ chatJid, status });
      },
      getAgentStatuses: () => ({}),
    };

    const store = new AgentStatusStore(state, { getInflightRuns: () => [] });

    store.update("web:1", { type: "intent", title: "Thinking" });
    expect(store.get("web:1")).toMatchObject({ type: "intent", title: "Thinking" });

    store.update("web:1", { type: "done" });
    expect(store.get("web:1")).toBeNull();

    // Phase 3: update() must not touch persistence at all
    expect(saveCalls.length).toBe(0);
    expect(setStatusCalls.length).toBe(0);
  });

  test("get derives a fresh recovery status from durable inflight state after restart", () => {
    const calls: string[] = [];
    const state = {
      load: () => {
        calls.push("load");
      },
      save: () => {
        calls.push("save");
      },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        calls.push(`set:${chatJid}:${status ? "status" : "null"}`);
      },
      getAgentStatuses: () => ({
        "web:compact": {
          type: "intent",
          intent_key: "compaction",
          title: "Compacting context",
          started_at: "2026-03-14T14:00:00.000Z",
          runtime_generation: "old-runtime",
        },
      }),
    };

    const store = new AgentStatusStore(state, {
      getInflightRuns: () => [{ chatJid: "web:compact", startedAt: "2026-03-14T14:00:00.000Z" }],
    });
    store.load();

    expect(calls).toEqual([
      "load",
      "set:web:compact:null",
      "save",
    ]);
    expect(store.get("web:compact")).toMatchObject({
      type: "intent",
      intent_key: "recovery",
      title: "Recovering interrupted response",
      started_at: "2026-03-14T14:00:00.000Z",
      source: "startup_recovery",
    });
  });

  test("clearPersistedStatuses removes legacy router_state entries and clears in-memory state", () => {
    const cleared: string[] = [];
    let saveCount = 0;

    const persistedMap = new Map<string, Record<string, unknown>>([
      ["web:1", { type: "intent", title: "Stale" }],
      ["web:2", { type: "tool_call", title: "Stale tool" }],
    ]);

    const state = {
      load: () => {},
      save: () => { saveCount += 1; },
      setAgentStatus: (chatJid: string, status: Record<string, unknown> | null) => {
        if (!status) {
          cleared.push(chatJid);
          persistedMap.delete(chatJid);
        } else {
          persistedMap.set(chatJid, status);
        }
      },
      getAgentStatuses: () => Object.fromEntries(persistedMap.entries()),
    };

    const store = new AgentStatusStore(state, { getInflightRuns: () => [] });
    store.clearPersistedStatuses();

    expect(cleared.sort()).toEqual(["web:1", "web:2"]);
    expect(saveCount).toBe(1);
    expect(store.get("web:1")).toBeNull();
    expect(store.get("web:2")).toBeNull();
  });
});
