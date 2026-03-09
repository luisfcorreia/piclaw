import { describe, expect, test } from "bun:test";
import { startRuntimeLoop } from "../../src/runtime/coordinator.js";

describe("runtime coordinator", () => {
  test("binds message processing deps and delegates to runMessageLoop", async () => {
    const queue = {} as any;
    const state = {} as any;
    const agentPool = {} as any;
    const whatsapp = {} as any;

    let capturedLoopDeps: any;
    let capturedChatJid: string | null = null;
    let capturedMessageDeps: any;

    const runMessageLoopFn = async (deps: any) => {
      capturedLoopDeps = deps;
    };

    const processMessagesFn = async (chatJid: string, deps: any) => {
      capturedChatJid = chatJid;
      capturedMessageDeps = deps;
      return true;
    };

    await startRuntimeLoop({
      queue,
      state,
      agentPool,
      whatsapp,
      assistantName: "Pi",
      triggerPattern: /@Pi/i,
      pollIntervalMs: 1234,
      runMessageLoopFn: runMessageLoopFn as any,
      processMessagesFn: processMessagesFn as any,
    });

    expect(capturedLoopDeps.queue).toBe(queue);
    expect(capturedLoopDeps.state).toBe(state);
    expect(capturedLoopDeps.assistantName).toBe("Pi");
    expect(capturedLoopDeps.pollIntervalMs).toBe(1234);

    await capturedLoopDeps.processMessages("chat:1");
    expect(capturedChatJid).toBe("chat:1");
    expect(capturedMessageDeps.agentPool).toBe(agentPool);
    expect(capturedMessageDeps.whatsapp).toBe(whatsapp);
    expect(capturedMessageDeps.state).toBe(state);
    expect(capturedMessageDeps.assistantName).toBe("Pi");
    expect(capturedMessageDeps.triggerPattern).toBeInstanceOf(RegExp);
  });
});
