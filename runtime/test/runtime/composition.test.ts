import { describe, expect, test } from "bun:test";
import {
  createRuntimeCoreServices,
  registerRuntimeShutdownSignals,
  type RuntimeSignalRegistrar,
} from "../../src/runtime/composition.js";
import { RuntimeState } from "../../src/runtime/state.js";

describe("runtime composition helpers", () => {
  test("createRuntimeCoreServices builds fresh queue/agentPool/state instances", () => {
    const first = createRuntimeCoreServices({ dataDir: "/tmp/runtime-a" });
    const second = createRuntimeCoreServices({ dataDir: "/tmp/runtime-b" });

    expect(first.queue).toBeTruthy();
    expect(first.agentPool).toBeTruthy();
    expect(first.state).toBeInstanceOf(RuntimeState);

    expect(second.queue).toBeTruthy();
    expect(second.agentPool).toBeTruthy();
    expect(second.state).toBeInstanceOf(RuntimeState);

    expect(first.queue).not.toBe(second.queue);
    expect(first.agentPool).not.toBe(second.agentPool);
    expect(first.state).not.toBe(second.state);
  });

  test("createRuntimeCoreServices honors injected factories and dataDir", () => {
    let seenDataDir = "";
    const queue = {} as never;
    const agentPool = {} as never;
    const state = {} as RuntimeState;

    const core = createRuntimeCoreServices({
      dataDir: "/tmp/custom-runtime",
      createQueue: () => queue,
      createAgentPool: () => agentPool,
      createState: (dataDir) => {
        seenDataDir = dataDir;
        return state;
      },
    });

    expect(core.queue).toBe(queue);
    expect(core.agentPool).toBe(agentPool);
    expect(core.state).toBe(state);
    expect(seenDataDir).toBe("/tmp/custom-runtime");
  });

  test("registerRuntimeShutdownSignals wires SIGTERM/SIGINT handlers", async () => {
    const listeners = new Map<string, () => void>();
    const registrar: RuntimeSignalRegistrar = {
      on: (event, listener) => {
        listeners.set(event, listener);
      },
    };

    const calls: string[] = [];
    const shutdown = async (signal: string) => {
      calls.push(signal);
    };

    registerRuntimeShutdownSignals(registrar, shutdown);

    expect(listeners.has("SIGTERM")).toBe(true);
    expect(listeners.has("SIGINT")).toBe(true);

    listeners.get("SIGTERM")?.();
    listeners.get("SIGINT")?.();

    await Promise.resolve();

    expect(calls).toEqual(["SIGTERM", "SIGINT"]);
  });
});
