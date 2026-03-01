import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { formatCompactNumber, formatCurrency } from "../agent-control-helpers.js";
import { CONTROL_COMMAND_DEFINITIONS } from "../command-registry.js";

type StateCommand = Extract<AgentControlCommand, { type: "state" }>;
type StatsCommand = Extract<AgentControlCommand, { type: "stats" }>;
type ContextCommand = Extract<AgentControlCommand, { type: "context" }>;
type LastCommand = Extract<AgentControlCommand, { type: "last" }>;
type CommandsCommand = Extract<AgentControlCommand, { type: "commands" }>;

export async function handleState(session: AgentSession, _command: StateCommand): Promise<AgentControlResult> {
  const modelLabel = session.model ? `${session.model.provider}/${session.model.id}` : "none";
  const steeringCount = session.getSteeringMessages().length;
  const followUpCount = session.getFollowUpMessages().length;
  const lines = [
    `Model: ${modelLabel}`,
    `Thinking level: ${session.thinkingLevel}${session.supportsThinking() ? "" : " (thinking off)"}`,
    `Streaming: ${session.isStreaming ? "yes" : "no"}`,
    `Compacting: ${session.isCompacting ? "yes" : "no"}`,
    `Retrying: ${session.isRetrying ? "yes" : "no"}`,
    `Auto-compaction: ${session.autoCompactionEnabled ? "on" : "off"}`,
    `Auto-retry: ${session.autoRetryEnabled ? "on" : "off"}`,
    `Steering mode: ${session.steeringMode}`,
    `Follow-up mode: ${session.followUpMode}`,
    `Pending messages: ${session.pendingMessageCount} (steer ${steeringCount}, follow-up ${followUpCount})`,
    `Session id: ${session.sessionId}`,
    `Session name: ${session.sessionName || "none"}`,
    `Session file: ${session.sessionFile || "none"}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleStats(session: AgentSession, _command: StatsCommand): Promise<AgentControlResult> {
  const stats = session.getSessionStats();
  const tokens = stats.tokens;
  const lines = [
    "Session stats:",
    `• Messages: ${stats.userMessages} user, ${stats.assistantMessages} assistant, ${stats.toolResults} tool results (${stats.totalMessages} total)`,
    `• Tool calls: ${stats.toolCalls}`,
    `• Tokens: input ${formatCompactNumber(tokens.input)}, output ${formatCompactNumber(tokens.output)}, cache read ${formatCompactNumber(tokens.cacheRead)}, cache write ${formatCompactNumber(tokens.cacheWrite)}, total ${formatCompactNumber(tokens.total)}`,
    `• Cost: ${formatCurrency(stats.cost)}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleContext(session: AgentSession, _command: ContextCommand): Promise<AgentControlResult> {
  const usage = session.getContextUsage();
  if (!usage) {
    return { status: "error", message: "Context usage unavailable (no model configured)." };
  }
  if (usage.tokens === null) {
    return {
      status: "success",
      message: `Context usage: unknown. Context window: ${formatCompactNumber(usage.contextWindow)}.`,
    };
  }
  const percent = usage.percent ?? (usage.tokens / usage.contextWindow) * 100;
  return {
    status: "success",
    message: `Context usage: ${formatCompactNumber(usage.tokens)} / ${formatCompactNumber(usage.contextWindow)} (${percent.toFixed(1)}%).`,
  };
}

export async function handleLast(session: AgentSession, _command: LastCommand): Promise<AgentControlResult> {
  const last = session.getLastAssistantText();
  if (!last) {
    return { status: "error", message: "No assistant messages yet." };
  }
  return { status: "success", message: `Last assistant response:\n\n${last}` };
}

export async function handleCommands(session: AgentSession, _command: CommandsCommand): Promise<AgentControlResult> {
  const lines: string[] = ["Available commands:"];
  const addLine = (name: string, description?: string) => {
    const suffix = description ? ` - ${description}` : "";
    lines.push(`• ${name}${suffix}`);
  };

  for (const command of CONTROL_COMMAND_DEFINITIONS) {
    addLine(command.name, command.description);
  }

  const extensionRunner = session.extensionRunner;
  if (extensionRunner) {
    const extCommands = extensionRunner.getRegisteredCommandsWithPaths();
    for (const entry of extCommands) {
      const name = entry.command?.name;
      if (!name) continue;
      const description = entry.command.description || `extension (${entry.extensionPath})`;
      addLine(`/${name}`, description);
    }
  }

  for (const template of session.promptTemplates) {
    const description = template.description || "prompt template";
    addLine(`/${template.name}`, description);
  }

  const skills = session.resourceLoader.getSkills().skills;
  for (const skill of skills) {
    const description = skill.description || "skill";
    addLine(`/skill:${skill.name}`, description);
  }

  return {
    status: "success",
    message: lines.join("\n"),
  };
}
