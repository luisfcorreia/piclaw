import { CronExpressionParser } from "cron-parser";
import { SCHEDULER_POLL_INTERVAL, TIMEZONE } from "./config.js";
import type { AgentPool } from "./agent-pool.js";
import { getDueTasks, getTaskById, logTaskRun, updateTaskAfterRun } from "./db.js";
import { AgentQueue } from "./queue.js";
import { formatOutbound } from "./router.js";
import type { ScheduledTask } from "./types.js";

export interface SchedulerDeps {
  queue: AgentQueue;
  agentPool: AgentPool;
  sendMessage: (jid: string, text: string) => Promise<void>;
  sendNudge?: (text: string) => Promise<void>;
}

async function executeTask(task: ScheduledTask, deps: SchedulerDeps): Promise<void> {
  // Re-check task status (may have been paused/cancelled while queued)
  const fresh = getTaskById(task.id);
  if (!fresh || fresh.status !== "active") return;

  const start = Date.now();
  let result: string | null = null;
  let error: string | null = null;
  try {
    const out = await deps.agentPool.runAgent(task.prompt, task.chat_jid);
    if (out.status === "error") { error = out.error || "Unknown"; }
    else if (out.result) { result = out.result; const t = formatOutbound(result); if (t) { await deps.sendMessage(task.chat_jid, t); await deps.sendNudge?.(t); } }
  } catch (e) { error = e instanceof Error ? e.message : String(e); }

  logTaskRun({ task_id: task.id, run_at: new Date().toISOString(), duration_ms: Date.now() - start, status: error ? "error" : "success", result, error });

  let nextRun: string | null = null;
  if (task.schedule_type === "cron") nextRun = CronExpressionParser.parse(task.schedule_value, { tz: TIMEZONE }).next().toISOString();
  else if (task.schedule_type === "interval") nextRun = new Date(Date.now() + parseInt(task.schedule_value, 10)).toISOString();
  updateTaskAfterRun(task.id, nextRun, error ? `Error: ${error}` : (result?.slice(0, 200) || "Completed"));
}

let started = false;
export function startSchedulerLoop(deps: SchedulerDeps): void {
  if (started) return;
  started = true;
  console.log("[scheduler] Started");
  const loop = async () => {
    try {
      for (const task of getDueTasks()) {
        const cur = getTaskById(task.id);
        if (!cur || cur.status !== "active") continue;
        deps.queue.enqueueTask(cur.id, () => executeTask(cur, deps));
      }
    } catch (e) { console.error("[scheduler]", e); }
    setTimeout(loop, SCHEDULER_POLL_INTERVAL);
  };
  loop();
}
