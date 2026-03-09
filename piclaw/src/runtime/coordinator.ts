/**
 * runtime/coordinator.ts – Runtime message-loop orchestration helpers.
 */

import type { AgentPool } from "../agent-pool.js";
import type { WhatsAppChannel } from "../channels/whatsapp.js";
import type { AgentQueue } from "../queue.js";
import { processMessages, runMessageLoop } from "./message-loop.js";
import type { RuntimeState } from "./state.js";

export type StartRuntimeLoopDeps = {
  queue: AgentQueue;
  state: RuntimeState;
  agentPool: AgentPool;
  whatsapp: WhatsAppChannel;
  assistantName: string;
  triggerPattern: RegExp;
  pollIntervalMs: number;
  runMessageLoopFn?: typeof runMessageLoop;
  processMessagesFn?: typeof processMessages;
};

/**
 * Start the runtime polling loop with message-processing dependencies bound.
 */
export async function startRuntimeLoop(deps: StartRuntimeLoopDeps): Promise<void> {
  const runMessageLoopImpl = deps.runMessageLoopFn ?? runMessageLoop;
  const processMessagesImpl = deps.processMessagesFn ?? processMessages;

  await runMessageLoopImpl({
    queue: deps.queue,
    state: deps.state,
    assistantName: deps.assistantName,
    pollIntervalMs: deps.pollIntervalMs,
    processMessages: (chatJid) =>
      processMessagesImpl(chatJid, {
        agentPool: deps.agentPool,
        whatsapp: deps.whatsapp,
        state: deps.state,
        assistantName: deps.assistantName,
        triggerPattern: deps.triggerPattern,
      }),
  });
}
