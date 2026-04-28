# Observability

PiClaw supports structured observability through a log-sink contract that any addon can use to export traces, metrics, and exceptions to external backends without modifying the runtime.

## How it works

The runtime emits structured JSON log records to stdout/stderr via `createLogger()`. Every record with an `operation` field is a telemetry-grade event:

```typescript
interface LogRecord {
  ts: string;           // ISO timestamp
  level: string;        // "debug" | "info" | "warn" | "error"
  module: string;       // e.g. "agent-pool.run-orchestrator"
  message: string;      // human-readable description
  operation?: string;   // machine-readable key — the stable contract
  chatJid?: string;     // which chat session
  [key: string]: unknown; // additional context (model, durationMs, classifier, etc.)
}
```

### Log sink API

Any code running in the piclaw process can subscribe to structured log records:

```typescript
import { addLogSink, removeLogSink, type LogSink, type LogRecord } from "piclaw/runtime/src/utils/logger.js";

const mySink: LogSink = (record: LogRecord) => {
  if (record.operation === "run_agent.complete") {
    // create a span, push a metric, etc.
  }
};

addLogSink(mySink);     // start receiving records
removeLogSink(mySink);  // stop
```

- Sinks receive every log record after it has been written to stdout/stderr.
- Sink callbacks must not throw — errors are silently swallowed.
- The `operation` field is the stable key. Match on it. Everything else is context.
- If no sink is registered, there is zero overhead beyond the normal JSON logging.

### Why this design

- **The runtime never imports OTel.** It just logs structured records.
- **Any addon** can subscribe and interpret those records however it wants — OTel spans, Datadog, Prometheus, a local SQLite store, or nothing.
- **No coupling.** The runtime doesn't know what's listening. The addon doesn't need runtime code changes.
- **Pairing.** Turn-level spans are built by matching `run_agent.prompt` → `run_agent.complete` (or error) via `chatJid`. The addon keeps an in-memory map of inflight turns.

## Operation reference

### Agent turn lifecycle

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `run_agent.prompt` | info | `chatJid`, `model`, `promptLength` | Agent turn starts |
| `run_agent.prompt_resolved` | info | `chatJid`, `promptDurationMs`, `sessionIsStreaming` | `session.prompt()` resolves |
| `run_agent.complete` | info | `chatJid`, `model`, `durationMs`, `outputChars`, `recoveryAttemptsUsed` | Turn finishes successfully |
| `run_agent` | error | `chatJid`, `model`, `durationMs`, `errorMessage` | Turn fails fatally |
| `run_agent.attempt_failed` | warn | `chatJid`, `errorText`, `classifier`, `recoveryStrategy` | Recovery attempt fails |
| `run_agent.no_terminal_reply` | warn | `chatJid`, `detail`, `hadToolActivity`, `blankTurnDelta` | Provider stopped without a reply |
| `run_agent.blank_turn_delta` | warn | `chatJid`, `detail`, `blankTurnDelta` | Session delta contains only user messages |
| `run_agent.recovery_compact` | info | `chatJid` | Compaction triggered during recovery |
| `run_agent.tool_use_budget_abort` | warn | `chatJid`, `assistantToolUseMessageCount`, `toolUseMessageBudget` | Tool budget exceeded |

### Tool calls

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `tool.call.start` | info | `chatJid`, `toolName`, `toolCallId` | Tool execution begins |
| `tool.call.end` | info | `chatJid`, `toolName`, `toolCallId`, `isError`, `durationMs` | Tool execution finishes |

### Web channel

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `handle_agent_message` | info | `chatJid`, `mode`, `isStreaming`, `contentPreview` | User message received |
| `process_chat.select_message` | info | `chatJid`, `processingMessageId`, `pendingMessageCount` | Message selected for processing |
| `process_chat.finalize_successful_run` | info | `chatJid`, cursor state | Turn persisted and finalized |
| `process_chat.no_output_recovery_stalled` | warn | `chatJid`, `title`, `recovery` | Turn ended without output during recovery |
| `process_chat.no_output_blank_failed` | warn | `chatJid`, `hadDraft`, `recovery` | Turn produced no output at all |

### Session lifecycle

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `get_or_create.create_main_session` | info | `chatJid`, `poolSize` | New session created |
| `evict_idle.main_session` | info | `chatJid` | Idle session evicted |
| `evict_idle.side_session` | info | `chatJid` | Side session evicted |
| `memory_pressure.mode_change` | info | `rssBytes`, threshold | Memory pressure toggled |

### Compaction and rotation

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `maybe_auto_compact_session_before_prompt` | info | `chatJid`, `contextTokens`, `contextWindow` | Pre-prompt compaction triggered |
| `maybe_auto_rotate_session` | info | `chatJid`, `previousSize`, `trigger` | Session file auto-rotated |

### Dream

| Operation | Level | Key fields | Emitted when |
|---|---|---|---|
| `dream.complete` | info | `chatJid`, `mode`, `days`, `durationMs` | Dream maintenance finishes |
| `acquire_dream_lock.reap_stale` | warn | `path`, `ownerPid` | Stale Dream lock reaped |
| `run_dream_agent_turn.fallback_refresh` | warn | `chatJid`, `error`, `recovery` | Dream model pass failed |

## First-party addon: `@rcarmo/piclaw-addon-observability`

The observability addon uses this log-sink contract to export telemetry to Azure Application Insights and local Graphite. See the [addon README](https://github.com/rcarmo/piclaw-addons/tree/main/addons/observability) for configuration, data schemas, and deployment instructions.

### What it produces

| Log operation | OTel Span | Graphite metric |
|---|---|---|
| `run_agent.prompt` → `run_agent.complete` | `agent.turn` (paired by chatJid) | `agent.turn.count`, `agent.turn.duration_ms`, `agent.turn.success` |
| `run_agent.prompt` → `run_agent` (error) | `agent.turn` (ERROR + exception) | `agent.turn.count`, `agent.turn.error` |
| `run_agent.no_terminal_reply` | `agent.turn` (ERROR) | `agent.turn.error` |
| `run_agent.attempt_failed` | `provider.error` (exception) | `recovery.attempts`, `provider.error.<classifier>` |
| `tool.call.end` | `tool.call` (child of `agent.turn`) | `tool.<name>.count`, `tool.<name>.duration_ms` |
| `dream.complete` | `dream` | `dream.duration_ms` |
| `get_or_create.create_main_session` | — | `session.created` |
| `evict_idle.*` | — | `session.evicted` |
| Any warn/error with `operation` | `log.warn` / `log.error` | — |

### Azure Application Insights features

| Feature | What it shows |
|---|---|
| **Application Map** | All piclaw instances with dependency links |
| **Failures blade** | Errors grouped by `cloud_RoleInstance` (instance name) |
| **Transaction Search** | Individual turn traces with tool-call children |
| **Live Metrics Stream** | Real-time request rate, exceptions, CPU/memory per instance |

### Graphite query examples

```
piclaw.*.agent.turn.error          # errors across all instances
piclaw.smith.tool.*.duration_ms    # all tool durations on smith
piclaw.relay.provider.error.*      # all provider errors on relay
piclaw.*.session.created           # session creation rate fleet-wide
```

## Writing a custom observability addon

Any addon can implement the same pattern:

1. `require("piclaw/runtime/src/utils/logger.js")` to get `addLogSink` / `removeLogSink`
2. Register a sink on `session_start`, remove it on `session_shutdown`
3. Match on `record.operation` to decide what to export
4. Pair `run_agent.prompt` → `run_agent.complete` via `chatJid` for turn-level spans
5. Use `tool.call.end` for individual tool call telemetry

The runtime guarantees:

- Every `run_agent.prompt` will eventually be followed by `run_agent.complete` or `run_agent` (error) for the same `chatJid` (unless the process crashes).
- `tool.call.start` / `tool.call.end` pairs are emitted for every tool execution within a turn.
- `dream.complete` fires once per Dream maintenance pass.
- All warn/error records with an `operation` field represent actionable events.
