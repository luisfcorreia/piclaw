/**
 * smart-compaction.ts – Selective-fragment compaction extension.
 *
 * Intercepts `session_before_compact` and builds a focused summary by
 * extracting key fragments from the conversation instead of sending the
 * full serialized history to the LLM.
 *
 * Benefits over built-in full-pass compaction:
 *   - Cheaper for long sessions (only selected fragments enter context)
 *   - Better "lost in the middle" resistance (head + tail + complaints + decisions)
 *   - Deterministic session-type detection and no-op filtering
 *   - Pivot-aware: detects topic shifts and separates active vs background context (A1)
 *   - No new dependencies (no `just-bash` / virtual FS)
 *
 * Session isolation:
 *   The `session_before_compact` event is fired per-AgentSession.  The event
 *   payload (`preparation.messagesToSummarize`, `branchEntries`) is already
 *   scoped to the compacting session's branch.  Each session gets its own
 *   extension instance (factory is called per resource-loader reload), and
 *   this extension captures no cross-session state, so parallel sessions
 *   compact independently.
 *
 * Falls through to built-in compaction when:
 *   - conversation is short (< SELECTIVE_THRESHOLD messages)
 *   - no model/provider credentials are available in Pi Agent settings
 *   - LLM call fails or produces an inadequate summary
 */

import type { ExtensionAPI, ExtensionFactory, FileOperations } from "@mariozechner/pi-coding-agent";
import { convertToLlm } from "@mariozechner/pi-coding-agent";
import { completeSimple } from "@mariozechner/pi-ai";
import type { Message } from "@mariozechner/pi-ai";
import type { CompactionResult } from "@mariozechner/pi-coding-agent";
import { resolveModelRequestAuth } from "../utils/model-auth.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("ext.smart-compaction");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Minimum message count before selective extraction kicks in.
 *  Below this the built-in full-pass is fine. */
const SELECTIVE_THRESHOLD = 40;

/** Hard cap on chars fed to the LLM prompt. */
const MAX_PROMPT_CHARS = 60_000;

/** Per-tool-result truncation limit when serializing. */
const TOOL_RESULT_MAX_CHARS = 1_500;

/** How many recent messages to always include verbatim. */
const TAIL_MESSAGES = 30;

/** Char budget for the backwards-walk recent context. */
const RECENT_CONTEXT_BUDGET_CHARS = 25_000;

/** Char budget for kept-message context (what survives compaction). */
const KEPT_CONTEXT_BUDGET_CHARS = 8_000;

/** How many earliest user turns to include for goal context. */
const HEAD_USER_TURNS = 3;

/** Context messages to pin around a detected topic-shift boundary. */
const TOPIC_SHIFT_CONTEXT_BEFORE = 2;
const TOPIC_SHIFT_CONTEXT_AFTER = 6;

/** Context messages to pin after the latest user request (separate from shift). */
const LATEST_REQUEST_CONTEXT_AFTER = 12;

/** Preview length for embedded user-topic snippets. */
const USER_PREVIEW_MAX_CHARS = 300;

/** Minimum acceptable summary length (chars). */
const MIN_SUMMARY_CHARS = 100;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Compute final read-only / modified file lists from FileOperations. */
function fileListsFromOps(fileOps: FileOperations): {
  readFiles: string[];
  modifiedFiles: string[];
} {
  const modified = new Set([...fileOps.written, ...fileOps.edited]);
  const readOnly = [...fileOps.read].filter((f) => !modified.has(f));
  return { readFiles: filterJunkPaths(readOnly), modifiedFiles: [...modified] };
}

/**
 * Filter out paths that are noise rather than meaningful project context.
 * These are temp files, device nodes, session logs, and similar paths that
 * clutter the read-files list without helping the LLM understand the project.
 */
const JUNK_PATH_PATTERNS: RegExp[] = [
  /^\/dev\//,                          // device nodes (/dev/stdin, /dev/null)
  /^\/tmp\//,                          // temp files
  /^\/var\/log\//,                     // log files
  /^\/proc\//,                         // proc filesystem
  /^\/sys\//,                          // sys filesystem
  /\/\.cache\//,                       // cache dirs
  /\/node_modules\//,                  // node_modules
  /\.jsonl$/,                          // session log files
  /\/\.pi\/agent\/sessions\//,         // pi session files
  /\/\.pi\/agent\/models\.json$/,      // pi model config
  /\/\.pi\/agent\/settings\.json$/,    // pi settings
  /\/bun\.lock$/,                      // lockfiles
  /\/package-lock\.json$/,
  /\.wasm$/,                           // binary blobs
  /\.map$/,                            // source maps
  /\.min\.js$/,                        // minified bundles
  /\.bundle\.(js|css)$/,               // bundles
  /\.meta\.json$/,                     // meta files
];

/**
 * Compress a list of file paths by factoring out the longest common prefix
 * and grouping by directory. Saves tokens when paths share deep prefixes.
 *
 * Example:
 *   /workspace/piclaw/runtime/web/src/ui/app.ts
 *   /workspace/piclaw/runtime/web/src/ui/theme.ts
 *   /workspace/piclaw/runtime/web/src/components/post.ts
 *   /workspace/piclaw/runtime/test/web/app.test.ts
 * →
 *   base: /workspace/piclaw/runtime/
 *   web/src/ui/: app.ts, theme.ts
 *   web/src/components/: post.ts
 *   test/web/: app.test.ts
 */
function compressFilePaths(paths: string[]): string {
  if (paths.length === 0) return "(none)";
  if (paths.length <= 3) return paths.join("\n");

  // Find longest common prefix ending at a /
  let prefix = paths[0];
  for (let i = 1; i < paths.length; i++) {
    while (!paths[i].startsWith(prefix)) {
      const slash = prefix.lastIndexOf("/", prefix.length - 2);
      if (slash < 0) { prefix = ""; break; }
      prefix = prefix.slice(0, slash + 1);
    }
    if (!prefix) break;
  }

  // Group by directory relative to prefix
  const groups = new Map<string, string[]>();
  for (const p of paths) {
    const rel = prefix ? p.slice(prefix.length) : p;
    const lastSlash = rel.lastIndexOf("/");
    const dir = lastSlash >= 0 ? rel.slice(0, lastSlash + 1) : "";
    const file = lastSlash >= 0 ? rel.slice(lastSlash + 1) : rel;
    if (!groups.has(dir)) groups.set(dir, []);
    groups.get(dir)!.push(file);
  }

  const lines: string[] = [];
  if (prefix) lines.push(`base: ${prefix}`);
  for (const [dir, files] of [...groups.entries()].sort()) {
    if (files.length === 1) {
      lines.push(`${dir}${files[0]}`);
    } else {
      lines.push(`${dir || "./"}: ${files.join(", ")}`);
    }
  }
  return lines.join("\n");
}

function filterJunkPaths(paths: string[]): string[] {
  return paths.filter((p) => !JUNK_PATH_PATTERNS.some((re) => re.test(p)));
}

function extractText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return (content as any[])
    .filter((b) => b?.type === "text" && typeof b?.text === "string")
    .map((b) => b.text)
    .join("\n")
    .trim();
}

// ---------------------------------------------------------------------------
// Synthetic message detection
// ---------------------------------------------------------------------------

/**
 * Prefixes used by pi upstream's convertToLlm to wrap compaction/branch
 * summaries as user-role messages. We must skip these in every function
 * that looks for real user turns.
 */
const SYNTHETIC_USER_PREFIXES = [
  "The conversation history before this point was compacted into the following summary:",
  "The following is a summary of a branch that this conversation came back from:",
];

/** True when a user-role LLM message is actually a synthetic summary wrapper. */
function isSyntheticUserMessage(msg: Message): boolean {
  if (msg.role !== "user") return false;
  const text = extractText(msg.content);
  return SYNTHETIC_USER_PREFIXES.some((prefix) => text.startsWith(prefix));
}

/** True when an LLM user-role message came from a real human user turn. */
function isRealUserMessage(msg: Message, idx: number, humanUserIndexes?: Set<number>): boolean {
  if (msg.role !== "user") return false;
  if (isSyntheticUserMessage(msg)) return false;
  const text = extractText(msg.content).trim();
  if (!text || text.startsWith("/")) return false;
  return humanUserIndexes ? humanUserIndexes.has(idx) : true;
}

type SourceMessage = {
  role: string;
  content?: unknown;
  excludeFromContext?: boolean;
};

function isRealUserSourceMessage(msg: SourceMessage): boolean {
  if (msg.role !== "user") return false;
  const text = extractText(msg.content).trim();
  return !!text && !text.startsWith("/");
}

function convertMessagesWithMetadata(sourceMessages: SourceMessage[]): {
  llmMessages: Message[];
  humanUserIndexes: Set<number>;
} {
  const llmMessages: Message[] = [];
  const humanUserIndexes = new Set<number>();

  for (const source of sourceMessages) {
    const converted = convertToLlm([source as any]);
    if (converted.length === 0) continue;
    const start = llmMessages.length;
    llmMessages.push(...converted);
    if (isRealUserSourceMessage(source)) {
      for (let i = 0; i < converted.length; i++) {
        humanUserIndexes.add(start + i);
      }
    }
  }

  return { llmMessages, humanUserIndexes };
}

function buildPreview(text: string, maxChars = USER_PREVIEW_MAX_CHARS): string {
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
}

/** Serialize one LLM message to a compact readable line. */
function serializeMessage(msg: Message, idx: number, humanUserIndexes?: Set<number>): string {
  if (msg.role === "user") {
    if (isSyntheticUserMessage(msg)) {
      // Don't dump the full compaction/branch summary into excerpts.
      // A brief marker is enough — the previous summary is already in the prompt.
      return `[${idx}|CompactionSummary]: (previous compaction summary — see Previous Summary section)`;
    }
    const text = extractText(msg.content);
    if (!text) return "";
    return humanUserIndexes?.has(idx)
      ? `[${idx}|User]: ${text}`
      : `[${idx}|Context]: ${text}`;
  }
  if (msg.role === "assistant") {
    const parts: string[] = [];
    for (const block of msg.content as any[]) {
      if (block.type === "text") parts.push(block.text);
      else if (block.type === "toolCall") {
        const args = block.arguments ?? {};
        const summary = args.path ?? args.command ?? JSON.stringify(args);
        const trunc =
          typeof summary === "string" && summary.length > 120
            ? summary.slice(0, 117) + "..."
            : summary;
        parts.push(`→ ${block.name}(${trunc})`);
      }
    }
    return parts.length ? `[${idx}|Assistant]: ${parts.join(" | ")}` : "";
  }
  if (msg.role === "toolResult") {
    const text = extractText(msg.content);
    if (!text) return "";
    const trunc =
      text.length > TOOL_RESULT_MAX_CHARS
        ? text.slice(0, TOOL_RESULT_MAX_CHARS) +
          `\n… (${text.length - TOOL_RESULT_MAX_CHARS} chars truncated)`
        : text;
    return `[${idx}|ToolResult:${(msg as any).toolName ?? "?"}]: ${trunc}`;
  }
  return "";
}

/**
 * Compress a tool call + result pair into a single compact outcome line.
 * Keeps tool name and key arg, plus a brief outcome summary.
 */
function serializeToolCompact(assistantMsg: Message, resultMsg: Message | null, idx: number): string {
  const calls: string[] = [];
  for (const block of (assistantMsg.content as any[])) {
    if (block.type === "toolCall") {
      const args = block.arguments ?? {};
      const keyArg = args.path ?? args.command ?? args.pattern ?? args.query ?? null;
      const argStr = typeof keyArg === "string"
        ? (keyArg.length > 80 ? keyArg.slice(0, 77) + "..." : keyArg)
        : "";
      calls.push(`${block.name}(${argStr})`);
    }
    if (block.type === "text" && block.text?.trim()) {
      const t = block.text.trim();
      calls.push(t.length > 150 ? t.slice(0, 147) + "..." : t);
    }
  }
  if (calls.length === 0) return "";

  let outcome = "";
  if (resultMsg) {
    const text = extractText(resultMsg.content).trim();
    if (text) {
      // Extract just the first meaningful line or error indicator
      const firstLine = text.split("\n").find(l => l.trim().length > 0) || "";
      outcome = firstLine.length > 120 ? firstLine.slice(0, 117) + "..." : firstLine;
    }
  }

  return outcome
    ? `[${idx}|Tool]: ${calls.join("; ")} → ${outcome}`
    : `[${idx}|Tool]: ${calls.join("; ")}`;
}

/**
 * Walk backwards from the end of the message array, capturing user intent
 * with full fidelity while aggressively compressing tool call/result pairs.
 *
 * Returns a set of message indices to include, plus pre-rendered compact
 * versions for tool pairs (overrides the normal serializeMessage output).
 */
function selectRecentContextBackwards(
  messages: Message[],
  humanUserIndexes?: Set<number>,
): { included: Set<number>; compactOverrides: Map<number, string> } {
  const included = new Set<number>();
  const compactOverrides = new Map<number, string>();
  let budget = RECENT_CONTEXT_BUDGET_CHARS;

  let i = messages.length - 1;
  while (i >= 0 && budget > 0) {
    const msg = messages[i];

    if (msg.role === "user") {
      if (isSyntheticUserMessage(msg)) {
        // Compaction/branch summaries are synthetic — skip, don't eat budget
        i--;
        continue;
      }
      // Keep user-role context, but only real human turns are labeled as User.
      const line = serializeMessage(msg, i, humanUserIndexes);
      included.add(i);
      budget -= line.length;
      i--;
      continue;
    }

    if (msg.role === "assistant") {
      const hasToolCalls = Array.isArray(msg.content) &&
        (msg.content as any[]).some((b: any) => b.type === "toolCall");
      const hasText = Array.isArray(msg.content) &&
        (msg.content as any[]).some((b: any) => b.type === "text" && b.text?.trim());

      if (hasToolCalls) {
        // Find the corresponding tool result ahead
        const resultIdx = i + 1 < messages.length && messages[i + 1].role === "toolResult" ? i + 1 : null;
        const compact = serializeToolCompact(msg, resultIdx !== null ? messages[resultIdx] : null, i);
        if (compact) {
          included.add(i);
          compactOverrides.set(i, compact);
          if (resultIdx !== null) {
            included.add(resultIdx); // mark result as consumed
            compactOverrides.set(resultIdx, ""); // skip separate rendering
          }
          budget -= compact.length;
        }
        i--;
        continue;
      }

      if (hasText) {
        // Assistant explanatory text — keep full
        const line = serializeMessage(msg, i, humanUserIndexes);
        included.add(i);
        budget -= line.length;
        i--;
        continue;
      }
    }

    if (msg.role === "toolResult") {
      // Orphaned tool result not yet consumed by assistant handler above.
      // Skip — it will be captured when the backwards walk reaches the
      // assistant message that issued the call.
      i--;
      continue;
    }

    i--;
  }

  return { included, compactOverrides };
}

// ---------------------------------------------------------------------------
// Fragment selection
// ---------------------------------------------------------------------------

/** Detect session type from tool-call patterns and user messages. */
function detectSessionType(
  messages: Message[],
  humanUserIndexes?: Set<number>,
): "implementation" | "exploration" | "discussion" | "debugging" {
  let hasWrite = false;
  let hasEdit = false;
  let hasRead = false;
  let hasBash = false;
  let errorMentions = 0;

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    if (msg.role === "assistant") {
      for (const block of msg.content as any[]) {
        if (block.type !== "toolCall") continue;
        const name: string = block.name;
        if (name === "write") hasWrite = true;
        else if (name === "edit") hasEdit = true;
        else if (name === "read") hasRead = true;
        else if (name === "bash" || name === "exec_batch") hasBash = true;
      }
    } else if (isRealUserMessage(msg, i, humanUserIndexes)) {
      const text = extractText(msg.content).toLowerCase();
      if (
        /\b(error|bug|broken|doesn't work|still wrong|fix|issue)\b/.test(
          text,
        )
      ) {
        errorMentions++;
      }
    }
  }

  if (errorMentions >= 2) return "debugging";
  if (hasWrite || hasEdit) return "implementation";
  if (hasRead || hasBash) return "exploration";
  return "discussion";
}

/** Indices of user messages that look like complaints. */
function findUserComplaints(messages: Message[], humanUserIndexes?: Set<number>): number[] {
  const out: number[] = [];
  for (let i = 0; i < messages.length; i++) {
    if (!isRealUserMessage(messages[i], i, humanUserIndexes)) continue;
    const text = extractText(messages[i].content).toLowerCase();
    if (
      /\b(doesn't work|still broken|still wrong|not working|bug|issue|error|failed|broken|fix)\b/.test(
        text,
      )
    ) {
      out.push(i);
    }
  }
  return out;
}

/** First non-slash-command, non-synthetic user message. */
function findFirstUserRequest(
  messages: Message[],
  humanUserIndexes?: Set<number>,
): { index: number; text: string } | null {
  for (let i = 0; i < messages.length; i++) {
    if (!isRealUserMessage(messages[i], i, humanUserIndexes)) continue;
    const text = extractText(messages[i].content).trim();
    return { index: i, text };
  }
  return null;
}

/** Latest non-slash-command, non-synthetic user message. */
function findLatestUserRequest(
  messages: Message[],
  humanUserIndexes?: Set<number>,
): { index: number; text: string } | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (!isRealUserMessage(messages[i], i, humanUserIndexes)) continue;
    const text = extractText(messages[i].content).trim();
    return { index: i, text };
  }
  return null;
}

/** Collect the last N non-slash-command, non-synthetic user turns (newest first). */
function findRecentUserTurns(
  messages: Message[],
  maxTurns = 5,
  humanUserIndexes?: Set<number>,
): { index: number; text: string }[] {
  const turns: { index: number; text: string }[] = [];
  for (let i = messages.length - 1; i >= 0 && turns.length < maxTurns; i--) {
    if (!isRealUserMessage(messages[i], i, humanUserIndexes)) continue;
    const text = extractText(messages[i].content).trim();
    turns.push({ index: i, text });
  }
  return turns;
}

// A1 requirement: pre-prompt compaction must stop biasing the next turn toward
// an older topic when the user has clearly pivoted. We keep this heuristic local
// to piclaw rather than changing upstream compaction because:
//   1. the stale-topic failure is product-specific and evidence-driven here,
//   2. we already own the `session_before_compact` override point, and
//   3. we want deterministic guardrails before the summary ever reaches the next run.
//
// The goal is not perfect topic modeling. It is a conservative detector for the
// common failure mode: the summary says "continue X" even though the newest user
// instruction has switched to Y. We therefore combine:
//   - strong explicit pivot cues ("new topic", "ignore that", "unrelated", ...) that
//     fire independently because they are unambiguous intent signals, and
//   - weak cues ("instead", "switch", "back to", ...) that are common in normal
//     coding conversation and only count as evidence when paired with low lexical
//     overlap between adjacent user turns — this avoids false positives like
//     "use a Map instead of an array" or "add a switch statement".
//
// If this detector fires, newer context gets promoted to "active" and older
// context is demoted to "historical/background" unless recent excerpts reaffirm it.

/** Strong cues: unambiguous topic-shift intent — fire independently. */
const STRONG_PIVOT_CUE_REGEX = /\b(new topic|different (?:topic|issue|problem)|ignore (?:that|this|previous|above|the earlier)|unrelated)\b/i;

/**
 * Weak cues: common in normal coding talk — only count when also supported by
 * low lexical overlap between adjacent user turns.
 */
const WEAK_PIVOT_CUE_REGEX = /\b(switch(?:ing)?(?:\s+back)?(?:\s+to)|instead\b|separately|moving on|back to|let'?s focus on|now for|another thing)\b/i;

const TOPIC_STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "do", "for", "from", "get", "go",
  "help", "i", "if", "in", "into", "is", "it", "its", "let", "lets", "me", "my", "need", "now",
  "of", "on", "or", "our", "please", "set", "so", "that", "the", "their", "then", "these", "this",
  "to", "up", "use", "using", "we", "with", "work", "you",
]);

interface UserTurn {
  index: number;
  text: string;
  tokens: Set<string>;
}

interface TopicShiftSignal {
  current: UserTurn;
  previous: UserTurn;
  reasons: string[];
  overlap: number;
}

function tokenizeTopicText(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9_\-\s]/g, " ")
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 3 && !TOPIC_STOP_WORDS.has(token)),
  );
}

function findUserTurns(messages: Message[], humanUserIndexes?: Set<number>): UserTurn[] {
  const turns: UserTurn[] = [];
  for (let i = 0; i < messages.length; i++) {
    if (!isRealUserMessage(messages[i], i, humanUserIndexes)) continue;
    const text = extractText(messages[i].content).trim();
    if (!text || text.startsWith("/")) continue;
    turns.push({ index: i, text, tokens: tokenizeTopicText(text) });
  }
  return turns;
}

function computeTokenOverlap(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const token of a) {
    if (b.has(token)) intersection++;
  }
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

function detectRecentTopicShift(messages: Message[], humanUserIndexes?: Set<number>): TopicShiftSignal | null {
  const userTurns = findUserTurns(messages, humanUserIndexes);
  for (let i = userTurns.length - 1; i >= 1; i--) {
    const current = userTurns[i];
    const previous = userTurns[i - 1];
    const reasons: string[] = [];

    // Strong cues fire independently — they are unambiguous intent.
    const strongMatch = current.text.match(STRONG_PIVOT_CUE_REGEX);
    if (strongMatch?.[0]) {
      reasons.push(`strong pivot cue: "${strongMatch[0]}"`);
    }

    // Compute lexical overlap (needed by both weak-cue and standalone-overlap checks).
    const overlap = computeTokenOverlap(current.tokens, previous.tokens);
    const bothSubstantial = current.tokens.size >= 4 && previous.tokens.size >= 4;

    // Weak cues only count when paired with very low lexical overlap (<= 0.05).
    // Normal coding turns on the same task can have Jaccard as low as 0.06
    // (e.g. "Refactor the auth middleware..." → "Use a Map instead of an array
    // for the token cache..."). We use 0.05 for weak cues to avoid those.
    if (!strongMatch) {
      const weakMatch = current.text.match(WEAK_PIVOT_CUE_REGEX);
      if (weakMatch?.[0] && bothSubstantial && overlap <= 0.05) {
        reasons.push(`weak pivot cue: "${weakMatch[0]}" + low lexical overlap (${overlap.toFixed(2)})`);
      }
    }

    // Standalone low overlap (no cue at all) fires only at an even stricter
    // threshold: truly disjoint vocabulary (Jaccard ~0) is a strong signal on
    // its own, but natural task-continuation variation can easily hit 0.06.
    if (reasons.length === 0 && bothSubstantial && overlap === 0) {
      reasons.push(`zero lexical overlap between substantial turns`);
    }

    if (reasons.length > 0) {
      return { current, previous, reasons, overlap };
    }
  }
  return null;
}

/** Indices of assistant messages with substantial explanatory text. */
function findKeyDecisionMessages(
  messages: Message[],
  exclude: Set<number>,
): number[] {
  const indices: number[] = [];
  for (let i = 0; i < messages.length; i++) {
    if (exclude.has(i)) continue;
    if (messages[i].role !== "assistant") continue;
    const textBlocks = (messages[i].content as any[]).filter(
      (b: any) => b.type === "text",
    );
    const totalText = textBlocks.map((b: any) => b.text as string).join("")
      .length;
    if (totalText > 300 && textBlocks.length > 0) {
      indices.push(i);
    }
  }
  // Sample at most 5, evenly distributed
  if (indices.length > 5) {
    const step = Math.floor(indices.length / 5);
    return indices.filter((_, i) => i % step === 0).slice(0, 5);
  }
  return indices;
}

// ---------------------------------------------------------------------------
// Prompt construction
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are a conversation summarizer creating a structured context checkpoint that another LLM will use to continue the work.

IMPORTANT RULES:
1. Session Type Detection: If you only see "read" tool calls → this is EXPLORATION, not implementation. Only claim files were modified if write/edit tool calls succeeded.
2. Done vs In-Progress: If user reported issues after a change ("doesn't work", "still broken"), mark it as In Progress, NOT Done.
3. Exact Names: Use EXACT variable/function/parameter names from the code.
4. File Lists: Only list files that were actually written/edited successfully. Don't list files that were only read.
5. No-op Filtering: Don't count "Applied: 0" or "No changes applied" as modifications.
6. Topic Pivots: If the prompt identifies a recent topic shift, treat the newest topic as the active lane. Older summary content becomes historical/background unless reaffirmed in recent excerpts.
7. Active vs Background: Put stale or superseded work under Historical / Background Context instead of keeping it as Goal or In Progress.

Use this EXACT format:

## Goal
[What the user is trying to accomplish overall]

## Current Active Topic
- [Newest active thread to continue right now, or "(none)"]

## Historical / Background Context
- [Earlier threads that still matter, or "(none)"]

## Constraints & Preferences
- [Constraints/preferences mentioned by user, or "(none)"]

## Progress
### Done
- [x] [Completed tasks]

### In Progress
- [ ] [Current work]

### Blocked
- [Issues preventing progress, if any]

## Key Decisions
- **[Decision]**: [Brief rationale]

## Next Steps
1. [What remains]

## Critical Context
- [Important state/context needed to continue]

Keep each section concise. Preserve exact file paths, function names, and error messages.`;

interface SelectivePromptInput {
  tokensBefore: number;
  previousSummary?: string;
  fileOps: FileOperations;
  /** Compact summary of the kept (surviving) messages. */
  keptMessagesSummary?: string;
  /** Compact excerpt of the dropped prefix of a split current turn, if any. */
  turnPrefixSummary?: string;
}

function buildSelectivePrompt(
  allMessages: Message[],
  input: SelectivePromptInput,
  customInstructions?: string,
  topicShift?: TopicShiftSignal | null,
  humanUserIndexes?: Set<number>,
): string {
  const total = allMessages.length;
  const sessionType = detectSessionType(allMessages, humanUserIndexes);
  const firstRequest = findFirstUserRequest(allMessages, humanUserIndexes);
  const latestRequest = findLatestUserRequest(allMessages, humanUserIndexes);
  const recentUserTurns = findRecentUserTurns(allMessages, 5, humanUserIndexes);
  // topicShift is pre-computed by the caller to avoid a redundant full scan.
  const shift = topicShift ?? null;
  const complaints = findUserComplaints(allMessages, humanUserIndexes);
  const { readFiles, modifiedFiles } = fileListsFromOps(input.fileOps);

  // A1 requirement: always preserve enough context to distinguish the newest
  // active topic from older background material.
  //
  // Strategy: walk BACKWARDS from the end with a char budget, compressing
  // tool call/result pairs into compact outcome lines. This captures far more
  // user turns (intent) than a fixed tail window that wastes budget on verbose
  // tool output. Then pin head, complaints, and topic-shift boundaries.
  const { included: recentIncluded, compactOverrides } = selectRecentContextBackwards(allMessages, humanUserIndexes);
  const included = new Set<number>(recentIncluded);

  // 1. Head — first few user turns for goal context
  const headEnd = Math.min(HEAD_USER_TURNS * 3, total);
  for (let i = 0; i < headEnd; i++) included.add(i);

  // 2. User complaints + surrounding context
  for (const idx of complaints) {
    for (
      let j = Math.max(0, idx - 1);
      j <= Math.min(total - 1, idx + 3);
      j++
    ) {
      included.add(j);
    }
  }

  // 3. Topic-shift boundary — pin turns on both sides of the pivot
  if (shift) {
    for (
      let j = Math.max(0, shift.previous.index - TOPIC_SHIFT_CONTEXT_BEFORE);
      j <= Math.min(total - 1, shift.current.index + TOPIC_SHIFT_CONTEXT_AFTER);
      j++
    ) {
      included.add(j);
    }
  }

  // 4. Key decision messages from the middle
  const decisions = findKeyDecisionMessages(allMessages, included);
  for (const idx of decisions) {
    included.add(idx);
    for (let j = idx - 1; j >= Math.max(0, idx - 2); j--) {
      included.add(j);
      if (isRealUserMessage(allMessages[j], j, humanUserIndexes)) break;
    }
  }

  const sec: string[] = [];

  sec.push(`## Session Metadata`);
  sec.push(`- Total messages: ${total}`);
  sec.push(`- Session type: ${sessionType}`);
  sec.push(`- Tokens before compaction: ${input.tokensBefore}`);
  if (firstRequest) {
    sec.push(`- First user request: "${buildPreview(firstRequest.text)}"`);
  }
  if (latestRequest) {
    sec.push(`- Latest user request: message ${latestRequest.index} → "${buildPreview(latestRequest.text)}"`);
  }
  if (complaints.length > 0) {
    sec.push(`- User complaints at message indices: ${complaints.join(", ")}`);
  }

  // A1 requirement: the prompt must tell the compaction model which topic is
  // active *before* it sees the previous summary. Otherwise the older summary
  // can dominate the merge and resurrect stale work as if it were current.
  sec.push(`\n## Detected Active Topic (from latest messages)`);
  if (recentUserTurns.length > 0) {
    sec.push(`Recent user instructions (newest first):`);
    for (const turn of recentUserTurns) {
      sec.push(`- [msg ${turn.index}]: "${buildPreview(turn.text)}"`);
    }
    if (latestRequest) {
      sec.push(`- Treat message ${latestRequest.index} as the current active instruction.`);
    }
  } else if (latestRequest) {
    sec.push(`- Treat message ${latestRequest.index} as the newest active user instruction: "${buildPreview(latestRequest.text)}"`);
  } else {
    sec.push(`- (none)`);
  }

  // Show what the user is working on in the KEPT messages (the ones that
  // survive compaction and will follow the summary in context). This is
  // critical: messagesToSummarize only contains what's being discarded,
  // so without this section the LLM has no visibility into the most recent work.
  if (input.keptMessagesSummary) {
    sec.push(`\n## Kept Messages (survive compaction — these represent the CURRENT work)`);
    sec.push(`The following excerpts are in the kept window and will remain in context after compaction. They represent what the user is CURRENTLY working on now, including surviving user turns, assistant/tool progress, and other retained context:`);
    sec.push(input.keptMessagesSummary);
    sec.push(`\nIMPORTANT: The summary you produce must reflect this current work as the active topic, not older topics from the messages being discarded.`);
  }

  if (input.turnPrefixSummary) {
    sec.push(`\n## Split Turn Prefix (discarded prefix of the CURRENT turn)`);
    sec.push(`The compacted window cut through an in-progress turn. The following excerpt is the dropped prefix of that current turn and is needed to understand the kept suffix:`);
    sec.push(input.turnPrefixSummary);
  }

  sec.push(`\n## Historical / Background Context Handling`);
  if (shift) {
    sec.push(`- Recent topic shift detected between user messages ${shift.previous.index} → ${shift.current.index}.`);
    sec.push(`- Previous topic preview: "${buildPreview(shift.previous.text)}"`);
    sec.push(`- New active topic preview: "${buildPreview(shift.current.text)}"`);
    sec.push(`- Shift signals: ${shift.reasons.join("; ")}.`);
    sec.push(`- Treat earlier summary content as background unless it is reaffirmed after message ${shift.current.index}.`);
  } else {
    sec.push(`- No explicit topic shift cue detected. Determine the active topic from the Detected Active Topic and Kept Messages sections above.`);
    sec.push(`- If the kept messages show different work than the previous summary's active topic, update accordingly.`);
  }

  sec.push(`\n## Files Modified (verified from tool results)`);
  if (modifiedFiles.length > 0) {
    sec.push(compressFilePaths(modifiedFiles));
  } else {
    sec.push(`- (none)`);
  }

  sec.push(`\n## Files Read (not modified)`);
  if (readFiles.length > 0) {
    sec.push(compressFilePaths(readFiles));
  } else {
    sec.push(`- (none)`);
  }

  if (input.previousSummary) {
    sec.push(`\n## Previous Summary (merge new information into this)`);
    sec.push(`(Note: the following is the PREVIOUS compaction summary. Its "Current Active Topic" may be outdated — use the Detected Active Topic section above to determine the actual active topic.)`);
    sec.push(input.previousSummary);
  }

  if (customInstructions?.trim()) {
    sec.push(`\n## User Compaction Note`);
    sec.push(`The user passed this instruction to /compact. Use it to guide focus, but don't treat it as the session's main goal.`);
    sec.push(`"${customInstructions.trim()}"`);
  }

  sec.push(`\n## Conversation Excerpts`);
  sec.push(
    `(Selected fragments from ${total} messages \u2014 backwards walk with compressed tool calls, head, complaints${
      shift ? ", topic-shift boundary" : ""
    }, and key decisions)\n`,
  );

  const sorted = [...included].sort((a, b) => a - b);
  let lastIdx = -1;
  let chars = 0;

  for (const idx of sorted) {
    if (chars > MAX_PROMPT_CHARS) {
      sec.push(`\n\u2026 (prompt limit reached, ${sorted.length - sorted.indexOf(idx)} more selected messages omitted)`);
      break;
    }
    if (lastIdx >= 0 && idx > lastIdx + 1) {
      sec.push(`\n--- [${idx - lastIdx - 1} messages omitted] ---\n`);
    }
    // Use compact override if available (compressed tool pairs)
    const override = compactOverrides.get(idx);
    const line = override !== undefined ? override : serializeMessage(allMessages[idx], idx, humanUserIndexes);
    if (line) {
      sec.push(line);
      chars += line.length;
    }
    lastIdx = idx;
  }

  const instruction = shift
    ? `A recent topic shift was detected. Update the summary so the newest topic becomes the Current Active Topic. Move older work that is not reaffirmed after message ${shift.current.index} into Historical / Background Context instead of keeping it as the Goal or current in-progress work.`
    : input.previousSummary
      ? `Update the previous summary with the new information from these conversation excerpts. Preserve existing information and add new progress, decisions, and context.`
      : `Summarize these conversation excerpts into a structured context checkpoint. Focus on what matters for continuing the work.`;

  return sec.join("\n") + `\n\n---\n\n${instruction}`;
}

// ---------------------------------------------------------------------------
// No-op detection
// ---------------------------------------------------------------------------

/**
 * Detect compaction windows where an LLM call is unnecessary.
 *
 * Two patterns are detected:
 *
 * 1. **Split-turn continuation** — The compaction window contains zero user
 *    messages (the agent was executing a long tool-call sequence that hit the
 *    token limit mid-turn). The previous summary already describes the goal
 *    and progress; we just append a mechanical file-ops delta.
 *
 * 2. **Minimal content** — Very little user input (<100 chars) and no file
 *    modifications. The previous summary is still valid.
 *
 * A1 caveat: this optimisation is only safe when the tiny user input is *not*
 * actually a topic pivot (for example: "new topic: Azure streaming"). Reusing
 * the previous summary in that situation is exactly how stale-topic bias leaks
 * into the next turn. We therefore disable the minimal-content fast path when
 * the newest user message looks like a pivot.
 *
 * Returns a `{ compaction }` result to short-circuit the LLM path, or
 * `null` to fall through to selective/built-in compaction.
 */
function tryNoOpCompaction(
  llmMessages: Message[],
  preparation: {
    previousSummary?: string;
    fileOps: FileOperations;
    isSplitTurn?: boolean;
  },
  firstKeptEntryId: string,
  tokensBefore: number,
  topicShift: TopicShiftSignal | null,
  humanUserIndexes: Set<number>,
  currentWorkHints: {
    hasKeptUserContext: boolean;
    hasTurnPrefixHumanUser: boolean;
  },
  ctx: { ui: { notify: (msg: string, level?: "info" | "warning" | "error") => void } },
): { compaction: CompactionResult } | null {
  const { previousSummary, fileOps } = preparation;

  // We can only do no-op if there IS a previous summary to reuse
  if (!previousSummary || previousSummary.length < MIN_SUMMARY_CHARS) {
    return null;
  }

  // Count real user messages (non-slash-command, non-synthetic)
  let userMessageCount = 0;
  let userTotalChars = 0;
  for (let i = 0; i < llmMessages.length; i++) {
    const msg = llmMessages[i];
    if (isRealUserMessage(msg, i, humanUserIndexes)) {
      const text = extractText(msg.content);
      userMessageCount++;
      userTotalChars += text.length;
    }
  }

  const { readFiles, modifiedFiles } = fileListsFromOps(fileOps);
  const hasModifications = modifiedFiles.length > 0;
  // topicShift is pre-computed by the caller.

  // ── Pattern 1: Split-turn continuation ────────────────────────────
  // Zero user messages in the discarded window can still be unsafe if the
  // dropped prefix of the current turn contains a fresh user instruction.
  if (preparation.isSplitTurn && userMessageCount === 0 && !currentWorkHints.hasTurnPrefixHumanUser) {
    const delta = buildMechanicalDelta(llmMessages, modifiedFiles, readFiles);
    const summary = appendDeltaToSummary(previousSummary, delta, fileOps);

    ctx.ui.notify(
      `No-op compaction: split-turn continuation (0 user msgs, ${llmMessages.length} tool msgs) → reused summary + delta`,
      "info",
    );

    return {
      compaction: { summary, firstKeptEntryId, tokensBefore },
    };
  }

  // ── Pattern 2: Minimal content ────────────────────────────────────
  // Tiny user input, no modifications → usually nothing new to capture.
  // But if that tiny input is a pivot cue, we must force the LLM path so the
  // summary can demote the stale topic and promote the new one.
  if (
    userTotalChars < 100 &&
    !hasModifications &&
    !topicShift &&
    !currentWorkHints.hasKeptUserContext &&
    !currentWorkHints.hasTurnPrefixHumanUser
  ) {
    const summary = updateFileLists(previousSummary, fileOps);

    ctx.ui.notify(
      `No-op compaction: minimal content (${userTotalChars} user chars, 0 modifications) → reused summary`,
      "info",
    );

    return {
      compaction: { summary, firstKeptEntryId, tokensBefore },
    };
  }

  return null;
}

/**
 * Build a compact mechanical description of what happened in a split-turn
 * window (tool calls only, no user messages).
 */
function buildMechanicalDelta(
  messages: Message[],
  modifiedFiles: string[],
  readFiles: string[],
): string {
  // Count tool calls by type
  const toolCounts: Record<string, number> = {};
  for (const msg of messages) {
    if (msg.role === "assistant" && Array.isArray(msg.content)) {
      for (const block of msg.content as any[]) {
        if (block.type === "toolCall") {
          const name = block.name as string;
          toolCounts[name] = (toolCounts[name] || 0) + 1;
        }
      }
    }
  }

  const parts: string[] = [];
  parts.push(
    `Continued execution: ${messages.length} messages (split-turn, no new user input)`,
  );

  const toolSummary = Object.entries(toolCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([name, count]) => `${name}×${count}`)
    .join(", ");
  if (toolSummary) parts.push(`Tool calls: ${toolSummary}`);

  if (modifiedFiles.length > 0) {
    const shown = modifiedFiles.slice(0, 10);
    parts.push(`Files modified: ${shown.join(", ")}${modifiedFiles.length > 10 ? ` (+${modifiedFiles.length - 10} more)` : ""}`);
  }

  if (readFiles.length > 0) {
    parts.push(`Files read: ${readFiles.length} files`);
  }

  return parts.join("\n");
}

/**
 * Append a mechanical delta to the previous summary, preserving structure.
 * Also updates the file lists at the end.
 */
function appendDeltaToSummary(
  previousSummary: string,
  delta: string,
  fileOps: FileOperations,
): string {
  // Strip old file-list tags from previous summary — we'll re-append fresh ones
  let base = previousSummary
    .replace(/<read-files>[\s\S]*?<\/read-files>/g, "")
    .replace(/<modified-files>[\s\S]*?<\/modified-files>/g, "")
    .trimEnd();

  // Insert delta before Critical Context or at the end
  const criticalIdx = base.lastIndexOf("## Critical Context");
  if (criticalIdx > 0) {
    base =
      base.slice(0, criticalIdx) +
      `\n### Split-Turn Continuation\n${delta}\n\n` +
      base.slice(criticalIdx);
  } else {
    base += `\n\n### Split-Turn Continuation\n${delta}`;
  }

  return appendFileLists(base, fileOps);
}

/**
 * Update file lists in a summary without changing anything else.
 */
function updateFileLists(summary: string, fileOps: FileOperations): string {
  const base = summary
    .replace(/<read-files>[\s\S]*?<\/read-files>/g, "")
    .replace(/<modified-files>[\s\S]*?<\/modified-files>/g, "")
    .trimEnd();

  return appendFileLists(base, fileOps);
}

/**
 * Append deterministic file-list tags to a summary string.
 */
function appendFileLists(base: string, fileOps: FileOperations): string {
  const { readFiles, modifiedFiles } = fileListsFromOps(fileOps);
  const parts: string[] = [base];

  if (readFiles.length > 0) {
    parts.push(`\n<read-files>\n${compressFilePaths(readFiles)}\n</read-files>`);
  }
  if (modifiedFiles.length > 0) {
    parts.push(
      `\n<modified-files>\n${compressFilePaths(modifiedFiles)}\n</modified-files>`,
    );
  }

  return parts.join("\n");
}

function normalizeSerializedLine(line: string): string {
  return line.replace(/^\[\d+\|([^\]]+)\]:\s*/, "[$1]: ");
}

function compactInlineText(text: string, maxChars = 240): string {
  return buildPreview(text.replace(/\s+/g, " ").trim(), maxChars);
}

function serializeKeptEntryMessage(message: SourceMessage, nextMessage?: SourceMessage): string[] {
  const lines: string[] = [];

  if (message.role === "assistant") {
    const assistantCtx = convertMessagesWithMetadata([message]);
    const assistantLlm = assistantCtx.llmMessages[0];
    const hasToolCalls = Array.isArray((assistantLlm as any)?.content) &&
      ((assistantLlm as any).content as any[]).some((b: any) => b.type === "toolCall");

    if (assistantLlm && hasToolCalls) {
      let resultLlm: Message | null = null;
      if (nextMessage?.role === "toolResult") {
        resultLlm = convertMessagesWithMetadata([nextMessage]).llmMessages[0] ?? null;
      }
      const compact = serializeToolCompact(assistantLlm, resultLlm, 0);
      if (compact) return [normalizeSerializedLine(compact)];
    }
  }

  const ctx = convertMessagesWithMetadata([message]);
  for (let i = 0; i < ctx.llmMessages.length; i++) {
    const line = serializeMessage(ctx.llmMessages[i], i, ctx.humanUserIndexes);
    if (line) lines.push(normalizeSerializedLine(line));
  }

  return lines;
}

/**
 * Extract a compact summary of the kept window (the entries that survive
 * compaction) from the full session entries. This tells the LLM what current
 * work will remain in context after the new summary, including user turns,
 * assistant/tool progress, branch summaries, and extension custom messages.
 */
function extractKeptMessagesSummary(
  branchEntries: any[],
  firstKeptEntryId: string,
): { summary: string; hasHumanUser: boolean } {
  let foundKept = false;
  const lines: string[] = [];
  let hasHumanUser = false;

  for (let i = 0; i < branchEntries.length; i++) {
    const entry = branchEntries[i];
    if (entry.id === firstKeptEntryId) foundKept = true;
    if (!foundKept) continue;
    if (entry.type === "compaction") continue;

    if (entry.type === "message" && entry.message) {
      const message = entry.message as SourceMessage;
      if (isRealUserSourceMessage(message)) hasHumanUser = true;

      const nextMessage =
        entry.message?.role === "assistant" &&
        branchEntries[i + 1]?.type === "message" &&
        branchEntries[i + 1]?.message?.role === "toolResult"
          ? (branchEntries[i + 1].message as SourceMessage)
          : undefined;

      const serialized = serializeKeptEntryMessage(message, nextMessage);
      if (serialized.length > 0) lines.push(...serialized);
      if (nextMessage) i++;
      continue;
    }

    if (entry.type === "custom_message") {
      const text = extractText(entry.content).trim();
      if (!text) continue;
      lines.push(`[Context:${entry.customType ?? "custom"}]: ${compactInlineText(text, 400)}`);
      continue;
    }

    if (entry.type === "branch_summary") {
      const summary = typeof entry.summary === "string" ? entry.summary.trim() : "";
      if (!summary) continue;
      lines.push(`[BranchSummary]: ${compactInlineText(summary, 400)}`);
    }
  }

  if (lines.length === 0) return { summary: "", hasHumanUser };

  const selected: string[] = [];
  let chars = 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    if (!line) continue;
    if (selected.length > 0 && chars + line.length > KEPT_CONTEXT_BUDGET_CHARS) break;
    selected.push(line);
    chars += line.length;
  }

  selected.reverse();
  return { summary: selected.join("\n"), hasHumanUser };
}

function buildTurnPrefixSummary(
  turnPrefixMessages: Message[],
  humanUserIndexes: Set<number>,
): string {
  if (turnPrefixMessages.length === 0) return "";

  const { included, compactOverrides } = selectRecentContextBackwards(
    turnPrefixMessages,
    humanUserIndexes,
  );
  const sorted = [...included].sort((a, b) => a - b);
  const lines: string[] = [];
  let chars = 0;

  for (const idx of sorted) {
    const line = compactOverrides.get(idx) ?? serializeMessage(turnPrefixMessages[idx], idx, humanUserIndexes);
    if (!line) continue;
    lines.push(line);
    chars += line.length;
    if (chars >= 4_000) break;
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Extension factory
// ---------------------------------------------------------------------------

export const smartCompaction: ExtensionFactory = (pi: ExtensionAPI) => {
  // Guard: only activate inside piclaw, not inside plain pi.
  const isPiclaw = !!(
    process.env.PICLAW_WORKSPACE ||
    process.env.PICLAW_INTERNAL_SECRET ||
    process.env.PICLAW_WEB_INTERNAL_SECRET
  );
  if (!isPiclaw) {
    return;
  }

  pi.on("session_before_compact", async (event, ctx) => {
    const { preparation, signal, customInstructions, branchEntries } = event;
    const {
      messagesToSummarize,
      tokensBefore,
      firstKeptEntryId,
      previousSummary,
      settings,
    } = preparation;

    if (messagesToSummarize.length === 0) return;

    ctx.ui.setWorkingIndicator({ frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"], intervalMs: 90 });
    ctx.ui.setWorkingMessage(`Smart compaction: scanning ${messagesToSummarize.length} messages…`);

    try {
      // Capture the signal reference from the event. The upstream
      // `_compactionAbortController` can be cleared by a concurrent `compact()`
      // call's finally block while our async handler is in flight. By capturing
      // the signal here we can check `.aborted` reliably and return `{ cancel }`
      // instead of falling through — which would crash upstream when it accesses
      // the already-cleared controller.
      const abortSignal = signal;

      // ── Compute topic-shift signal once for all downstream paths ──────
      // Both tryNoOpCompaction (to gate the minimal-content fast path) and
      // buildSelectivePrompt (to annotate the compaction prompt) need this.
      // We preserve source-message provenance so synthetic upstream user-role
      // wrappers (branch/compaction summaries, custom messages, bashExecution)
      // don't get mistaken for real human user turns.
      const { llmMessages, humanUserIndexes } = convertMessagesWithMetadata(
        messagesToSummarize as SourceMessage[],
      );

      // Check abort early — a concurrent compact() may have already cancelled us.
      if (abortSignal.aborted) return { cancel: true };

      const topicShift = detectRecentTopicShift(llmMessages, humanUserIndexes);

      log.debug("Pivot detection result", {
        detected: !!topicShift,
        reasons: topicShift?.reasons ?? [],
        overlap: topicShift?.overlap ?? null,
        messageCount: llmMessages.length,
      });

      // Extract kept-messages context from branchEntries so the LLM knows
      // what the user is currently working on (kept messages survive compaction).
      const keptContext = branchEntries
        ? extractKeptMessagesSummary(branchEntries, firstKeptEntryId)
        : { summary: "", hasHumanUser: false };
      const keptMessagesSummary = keptContext.summary;
      const turnPrefixContext = preparation.isSplitTurn && preparation.turnPrefixMessages.length > 0
        ? convertMessagesWithMetadata(preparation.turnPrefixMessages as SourceMessage[])
        : null;
      const turnPrefixSummary = turnPrefixContext
        ? buildTurnPrefixSummary(
            turnPrefixContext.llmMessages,
            turnPrefixContext.humanUserIndexes,
          )
        : "";

      // ── No-op detection ──────────────────────────────────────────────
      // Skip the LLM call entirely when we can produce a good summary
      // mechanically. This saves ~60-110s and 100-270k input tokens.
      const noOpResult = tryNoOpCompaction(
        llmMessages,
        preparation,
        firstKeptEntryId,
        tokensBefore,
        topicShift,
        humanUserIndexes,
        {
          hasKeptUserContext: keptContext.hasHumanUser,
          hasTurnPrefixHumanUser: !!turnPrefixContext && turnPrefixContext.humanUserIndexes.size > 0,
        },
        ctx,
      );
      if (noOpResult) return noOpResult;

      // Short conversations → built-in full-pass is fine
      if (messagesToSummarize.length < SELECTIVE_THRESHOLD) return;

      ctx.ui.setWorkingMessage(`Smart compaction: extracting signal from ${messagesToSummarize.length} messages…`);
      ctx.ui.notify(
        `Smart compaction: ${messagesToSummarize.length} msgs → selective extraction`,
        "info",
      );

      const promptText = buildSelectivePrompt(
        llmMessages,
        { tokensBefore, previousSummary, fileOps: preparation.fileOps, keptMessagesSummary, turnPrefixSummary },
        customInstructions,
        topicShift,
        humanUserIndexes,
      );

      ctx.ui.notify(
        `Prompt: ${Math.round(promptText.length / 1000)}k chars (vs ~${Math.round(tokensBefore / 1000)}k tokens full)`,
        "info",
      );

      // Model — use the session's own model (already session-scoped)
      const model = ctx.model;
      if (!model) {
        ctx.ui.notify("No model available for smart compaction", "warning");
        return;
      }
      const auth = await resolveModelRequestAuth(ctx.modelRegistry as any, model);
      if (!auth.ok) {
        ctx.ui.notify("Compaction model is not configured in Pi Agent settings (run `pi /login`)", "warning");
        return;
      }

      const messages: Message[] = [
        {
          role: "user",
          content: [{ type: "text", text: promptText }],
          timestamp: Date.now(),
        },
      ];

      const maxTokens = Math.floor(0.8 * settings.reserveTokens);
      const completionOptions = (model as any).reasoning
        ? { maxTokens, signal: abortSignal, apiKey: auth.apiKey, reasoning: "high" as const }
        : { maxTokens, signal: abortSignal, apiKey: auth.apiKey };

      try {
        ctx.ui.setWorkingMessage("Smart compaction: generating selective summary…");
        const response = await completeSimple(
          model,
          { systemPrompt: SYSTEM_PROMPT, messages },
          completionOptions,
        );

        if (response.stopReason === "error") {
          ctx.ui.notify(
            `Smart compaction LLM error: ${(response as any).errorMessage || "unknown"}`,
            "warning",
          );
          return; // fall through to built-in
        }

        const summary = response.content
          .filter((c: any) => c.type === "text")
          .map((c: any) => c.text)
          .join("\n")
          .trim();

        if (summary.length < MIN_SUMMARY_CHARS) {
          ctx.ui.notify(
            "Smart compaction summary too short, falling back to built-in",
            "warning",
          );
          return;
        }

        if (abortSignal.aborted) return { cancel: true };

        // Append deterministic file sections (same format as built-in)
        const { readFiles, modifiedFiles } = fileListsFromOps(
          preparation.fileOps,
        );
        let fullSummary = summary;
        if (
          !summary.includes("<read-files>") &&
          !summary.includes("<modified-files>")
        ) {
          const parts: string[] = [];
          if (readFiles.length > 0) {
            parts.push(`\n<read-files>\n${compressFilePaths(readFiles)}\n</read-files>`);
          }
          if (modifiedFiles.length > 0) {
            parts.push(
              `\n<modified-files>\n${compressFilePaths(modifiedFiles)}\n</modified-files>`,
            );
          }
          if (parts.length) fullSummary += "\n" + parts.join("\n");
        }

        ctx.ui.notify("Smart compaction complete ✓", "info");

        return {
          compaction: {
            summary: fullSummary,
            firstKeptEntryId,
            tokensBefore,
          } satisfies CompactionResult,
        };
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (!abortSignal.aborted) {
          ctx.ui.notify(`Smart compaction error: ${msg}`, "warning");
        }
        // If aborted, return cancel so upstream doesn't access the
        // potentially-cleared _compactionAbortController.
        if (abortSignal.aborted) return { cancel: true };
        return; // fall through to built-in
      }
    } finally {
      ctx.ui.setWorkingMessage(undefined);
      ctx.ui.setWorkingIndicator({ frames: [] });
    }
  });
};
