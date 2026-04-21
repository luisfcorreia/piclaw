/**
 * agent-pool/run-agent-orchestrator.ts – Main runAgent prompt lifecycle orchestration.
 */
import { decideAutomaticRecovery, getAutomaticRecoveryConfig, } from "./automatic-recovery.js";
import { getAgentRuntimeConfig, getSessionStorageConfig } from "../core/config.js";
import { detectChannel } from "../router.js";
import { pruneOrphanToolResults } from "./orphan-tool-results.js";
import { writeAgentLog } from "./logging.js";
import { getSessionFileLineCount, getSessionFileSize, rotateSession } from "../session-rotation.js";
import { withChatContext } from "../core/chat-context.js";
import { formatTimeoutDuration, resolveSessionIdleMaxWaitMs, waitForSessionIdle, } from "./prompt-utils.js";
import { inspectBlankTurnSessionDelta, isBlankTurnSessionDelta, snapshotSessionEntryCount, } from "./blank-turn-detection.js";
async function maybeAutoRotateSession(session, runtime, chatJid, options) {
    const sessionStorageConfig = getSessionStorageConfig();
    const autoRotateEnabled = sessionStorageConfig.autoRotate
        || ["1", "true", "yes", "on"].includes((process.env.PICLAW_SESSION_AUTO_ROTATE || "").trim().toLowerCase());
    if (!autoRotateEnabled)
        return session;
    const envThresholdMb = parseInt(process.env.PICLAW_SESSION_MAX_SIZE_MB || "", 10);
    const thresholdBytes = Number.isFinite(envThresholdMb) && envThresholdMb > 0
        ? envThresholdMb * 1024 * 1024
        : sessionStorageConfig.maxSizeBytes;
    const sessionFileSize = getSessionFileSize(session.sessionFile);
    const sessionFileLines = getSessionFileLineCount(session.sessionFile);
    const exceedsSize = sessionFileSize !== null && sessionFileSize >= thresholdBytes;
    const exceedsLines = sessionStorageConfig.maxLines > 0
        && sessionFileLines !== null
        && sessionFileLines >= sessionStorageConfig.maxLines;
    if (!exceedsSize && !exceedsLines)
        return session;
    if (session.isStreaming || session.isCompacting || session.isRetrying) {
        const idleMaxWaitMs = resolveSessionIdleMaxWaitMs(session);
        try {
            await waitForSessionIdle(session, 10, (result) => {
                options.onInfo?.("Oversized session settled before auto-rotation", {
                    operation: "maybe_auto_rotate_session.wait_for_idle",
                    chatJid,
                    waitMs: result.totalWaitMs,
                    settleTicks: result.settleTicks,
                });
            }, idleMaxWaitMs);
        }
        catch (error) {
            options.onWarn?.("Auto-rotation skipped", {
                operation: "maybe_auto_rotate_session",
                chatJid,
                reason: error instanceof Error ? error.message : String(error),
            });
            return session;
        }
    }
    const result = await rotateSession(session, runtime, { reason: "automatic" });
    if (result.status === "success") {
        options.onInfo?.("Auto-rotated oversized session", {
            operation: "maybe_auto_rotate_session",
            chatJid,
            previousSize: result.previousSize ?? sessionFileSize,
            previousLines: sessionFileLines,
            nextSize: result.nextSize ?? "unknown",
            trigger: exceedsLines ? "lines" : "size",
        });
        return runtime.session;
    }
    options.onWarn?.("Auto-rotation skipped", {
        operation: "maybe_auto_rotate_session",
        chatJid,
        reason: result.message,
    });
    return session;
}
function estimateMessageTokens(message) {
    if (!message || typeof message !== "object")
        return 0;
    const countText = (value) => {
        if (typeof value === "string")
            return value.length;
        if (!Array.isArray(value))
            return 0;
        let chars = 0;
        for (const block of value) {
            if (!block || typeof block !== "object")
                continue;
            if (block.type === "text" && typeof block.text === "string")
                chars += block.text.length;
            if (block.type === "thinking" && typeof block.thinking === "string")
                chars += block.thinking.length;
            if (block.type === "toolCall") {
                chars += typeof block.name === "string" ? block.name.length : 0;
                if (block.arguments !== undefined)
                    chars += JSON.stringify(block.arguments).length;
            }
            if (block.type === "image")
                chars += 4800;
        }
        return chars;
    };
    switch (message.role) {
        case "assistant":
        case "custom":
        case "toolResult":
            return Math.ceil(countText(message.content) / 4);
        case "user":
            return Math.ceil(countText(message.content) / 4);
        case "bashExecution": {
            const chars = (typeof message.command === "string" ? message.command.length : 0)
                + (typeof message.output === "string" ? message.output.length : 0);
            return Math.ceil(chars / 4);
        }
        case "branchSummary":
        case "compactionSummary":
            return Math.ceil(((typeof message.summary === "string" ? message.summary.length : 0)) / 4);
        default:
            return 0;
    }
}
function estimateContextTokensFromSession(session) {
    const usage = session.getContextUsage?.();
    if (typeof usage?.tokens === "number")
        return usage.tokens;
    const context = session.sessionManager.buildSessionContext();
    return context.messages.reduce((total, message) => total + estimateMessageTokens(message), 0);
}
/** Fallback context window when the model does not report one.
 *  Conservative enough to trigger compaction before most models overflow. */
const DEFAULT_FALLBACK_CONTEXT_WINDOW = 128_000;
function getModelContextWindow(session) {
    const model = session.model;
    const contextWindow = typeof model?.contextWindow === "number"
        ? model.contextWindow
        : typeof model?.contextLength === "number"
            ? model.contextLength
            : null;
    if (typeof contextWindow !== "number" || !Number.isFinite(contextWindow) || contextWindow <= 0) {
        return null;
    }
    return contextWindow;
}
function getSessionStateErrorMessage(session) {
    const errorMessage = session.agent?.state?.errorMessage;
    return typeof errorMessage === "string" && errorMessage.trim() ? errorMessage.trim() : null;
}
async function maybeAutoCompactSessionBeforePrompt(session, chatJid, options, onEvent) {
    if (session.isStreaming || session.isCompacting || session.isRetrying)
        return;
    const reportedContextWindow = getModelContextWindow(session);
    const contextWindow = reportedContextWindow ?? DEFAULT_FALLBACK_CONTEXT_WINDOW;
    if (!reportedContextWindow) {
        options.onWarn?.("Model does not report contextWindow; using fallback for pre-prompt compaction", {
            operation: "maybe_auto_compact_session_before_prompt.fallback_context_window",
            chatJid,
            fallbackContextWindow: DEFAULT_FALLBACK_CONTEXT_WINDOW,
            modelId: session.model?.id ?? null,
            provider: session.model?.provider ?? null,
        });
    }
    const settingsManager = session.settingsManager;
    const settings = typeof settingsManager?.getCompactionSettings === "function"
        ? settingsManager.getCompactionSettings()
        : null;
    // Piclaw manages compaction at safe pre-prompt boundaries regardless of
    // upstream auto-compaction being disabled.  Only bail when there is no
    // settings object at all (no model / no session).
    if (!settings)
        return;
    try {
        const contextTokens = estimateContextTokensFromSession(session);
        // Inline threshold check — bypasses upstream settings.enabled flag since
        // piclaw disables upstream auto-compaction and owns the compaction schedule.
        const reserveTokens = settings.reserveTokens ?? 16384;
        if (contextTokens <= contextWindow - reserveTokens)
            return;
        options.onInfo?.("Auto-compacting session before prompt", {
            operation: "maybe_auto_compact_session_before_prompt",
            chatJid,
            contextTokens,
            contextWindow,
            reserveTokens: settings.reserveTokens ?? null,
        });
        // Upstream 0.67.6 removed compaction_start/end events from the manual
        // compact() path. Emit them locally so the web UI still shows the
        // "Compacting context" status pill during what can be a 30-60s operation.
        onEvent?.({ type: "compaction_start", reason: "threshold" });
        try {
            await session.compact();
            onEvent?.({
                type: "compaction_end",
                reason: "threshold",
                result: undefined,
                aborted: false,
                willRetry: false,
            });
        }
        catch (compactError) {
            const aborted = compactError instanceof Error &&
                (compactError.message === "Compaction cancelled" || compactError.name === "AbortError");
            onEvent?.({
                type: "compaction_end",
                reason: "threshold",
                result: undefined,
                aborted,
                willRetry: false,
                errorMessage: aborted ? undefined : `Pre-prompt compaction failed: ${compactError instanceof Error ? compactError.message : String(compactError)}`,
            });
            throw compactError;
        }
    }
    catch (error) {
        options.onWarn?.("Pre-prompt auto-compaction skipped", {
            operation: "maybe_auto_compact_session_before_prompt",
            chatJid,
            error,
        });
    }
}
function buildRecoveryDiagnosticEntry(phase, attempt, classifier, strategy, reason, error, elapsedMs, snapshot) {
    return {
        phase,
        attempt,
        classifier,
        strategy,
        reason,
        error,
        elapsedMs,
        hadToolActivity: Boolean(snapshot.hadToolActivity),
        hadPartialOutput: Boolean(snapshot.hadPartialOutput),
        hadCompletedTurnOutput: Boolean(snapshot.hadCompletedTurnOutput),
        sawCompactionIntent: Boolean(snapshot.sawCompactionIntent),
        compactionErrorMessage: snapshot.compactionErrorMessage ?? null,
    };
}
function buildRecoveryMetadata(attemptsUsed, totalElapsedMs, recovered, exhausted, lastClassifier, strategyHistory, diagnostics) {
    return {
        attemptsUsed,
        totalElapsedMs,
        recovered,
        exhausted,
        lastClassifier,
        strategyHistory,
        diagnostics,
    };
}
function emitAgentSessionEvent(onEvent, event) {
    onEvent?.(event);
}
async function runRecoveryCompaction(session, chatJid, runOptions, options) {
    options.onInfo?.("Compacting before automatic recovery retry", {
        operation: "run_agent.recovery_compact",
        chatJid,
    });
    emitAgentSessionEvent(runOptions.onEvent, { type: "compaction_start", reason: "overflow" });
    try {
        await session.compact();
        emitAgentSessionEvent(runOptions.onEvent, {
            type: "compaction_end",
            reason: "overflow",
            result: undefined,
            aborted: false,
            willRetry: true,
        });
        return { ok: true };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const aborted = error instanceof Error && (error.name === "AbortError" || error.message === "Compaction cancelled");
        emitAgentSessionEvent(runOptions.onEvent, {
            type: "compaction_end",
            reason: "overflow",
            result: undefined,
            aborted,
            willRetry: false,
            errorMessage: aborted ? undefined : `Recovery compaction failed: ${errorMessage}`,
        });
        return { ok: false, errorMessage };
    }
}
async function runPromptAttempt(prompt, chatJid, session, timeoutMs, runOptions, options, totalRunStartedAt) {
    let hadToolActivity = false;
    let hadPartialOutput = false;
    let hadCompletedTurnOutput = false;
    let compactionErrorMessage = null;
    let sawCompactionIntent = false;
    const sessionEntryBaseline = snapshotSessionEntryCount(session);
    const originalOnTurnComplete = runOptions.onTurnComplete;
    const onTurnComplete = originalOnTurnComplete
        ? ((turn) => {
            hadCompletedTurnOutput = hadCompletedTurnOutput || !!(turn.text || turn.attachments.length > 0);
            originalOnTurnComplete(turn);
        })
        : undefined;
    const tracker = options.turnCoordinator.createTracker(chatJid, onTurnComplete);
    const wrappedOnEvent = (event) => {
        if (event.type === "message_update") {
            const messageEvent = event.assistantMessageEvent;
            if (messageEvent?.type === "text_delta" && typeof messageEvent.delta === "string" && messageEvent.delta.length > 0) {
                hadPartialOutput = true;
            }
        }
        if (event.type === "tool_execution_start"
            || event.type === "tool_execution_update"
            || event.type === "tool_execution_end") {
            hadToolActivity = true;
        }
        if (event.type === "compaction_start") {
            sawCompactionIntent = true;
        }
        if (event.type === "compaction_end") {
            const errorMessage = event.errorMessage;
            if (typeof errorMessage === "string" && errorMessage.trim()) {
                compactionErrorMessage = errorMessage.trim();
            }
        }
        runOptions.onEvent?.(event);
    };
    const unsub = options.turnCoordinator.subscribe(session, chatJid, tracker, wrappedOnEvent);
    const { timeoutId, timedOutRef, completedRef } = options.turnCoordinator.startPromptTimeout(session, chatJid, timeoutMs);
    const finishPromptTimeout = () => {
        if (!completedRef.value)
            completedRef.value = true;
        if (timeoutId)
            clearTimeout(timeoutId);
    };
    let promptThrownError = null;
    try {
        await session.prompt(prompt);
        finishPromptTimeout();
        options.onInfo?.("session.prompt() resolved", {
            operation: "run_agent.prompt_resolved",
            chatJid,
            promptDurationMs: Date.now() - totalRunStartedAt,
            sessionIsStreaming: Boolean(session.isStreaming),
            sessionIsCompacting: Boolean(session.isCompacting),
            sessionIsRetrying: Boolean(session.isRetrying),
        });
        const idleMaxWaitMs = resolveSessionIdleMaxWaitMs(session);
        await waitForSessionIdle(session, 10, (result) => {
            options.onInfo?.("Session settled after prompt", {
                operation: "run_agent.wait_for_session_idle",
                chatJid,
                maxWaitMs: idleMaxWaitMs,
                ...result,
            });
        }, idleMaxWaitMs);
    }
    catch (error) {
        promptThrownError = error instanceof Error ? error.message : String(error);
    }
    finally {
        finishPromptTimeout();
        unsub();
    }
    const finalText = tracker.getFinalText();
    hadPartialOutput = hadPartialOutput || !!finalText;
    const finalAttachments = options.takeAttachments(chatJid);
    const timedOut = timedOutRef.value;
    const latentStateError = !finalText ? getSessionStateErrorMessage(session) : null;
    let output;
    if (timedOut) {
        output = { status: "error", result: null, error: `Timed out after ${formatTimeoutDuration(timeoutMs)}` };
    }
    else if (promptThrownError) {
        output = { status: "error", result: null, error: promptThrownError };
    }
    else {
        const turnError = tracker.getError();
        if (turnError) {
            output = { status: "error", result: null, error: turnError.errorMessage };
        }
        else if (latentStateError) {
            output = { status: "error", result: null, error: latentStateError };
        }
        else {
            const blankTurnDelta = inspectBlankTurnSessionDelta(session, sessionEntryBaseline);
            if (!finalText
                && finalAttachments.length === 0
                && !hadCompletedTurnOutput
                && !hadPartialOutput
                && !hadToolActivity
                && isBlankTurnSessionDelta(blankTurnDelta)) {
                const detail = [
                    `${blankTurnDelta?.appendedUserMessageCount ?? 0} user message(s)`,
                    `${blankTurnDelta?.appendedAssistantMessageCount ?? 0} assistant message(s)`,
                    `${blankTurnDelta?.appendedToolResultMessageCount ?? 0} tool-result message(s)`,
                ].join(", ");
                options.onWarn?.("Prompt resolved with a blank user-only session delta", {
                    operation: "run_agent.blank_turn_delta",
                    chatJid,
                    detail,
                    blankTurnDelta,
                });
                output = {
                    status: "error",
                    result: null,
                    error: `Prompt completed without emitting an assistant reply before finalization (${detail}).`,
                };
            }
            else {
                output = {
                    status: "success",
                    result: finalText || null,
                    attachments: finalAttachments.length ? finalAttachments : undefined,
                };
            }
        }
    }
    return {
        output,
        snapshot: {
            hadToolActivity,
            hadPartialOutput,
            hadCompletedTurnOutput,
            compactionErrorMessage,
            sawCompactionIntent,
        },
    };
}
/** Run a prompt against the persistent session for one chat. */
export async function runAgentPrompt(prompt, chatJid, runOptions, options) {
    const startTime = Date.now();
    options.clearAttachments(chatJid);
    try {
        const runtime = await options.getOrCreateRuntime(chatJid);
        let session = runtime.session;
        session = await maybeAutoRotateSession(session, runtime, chatJid, options);
        await maybeAutoCompactSessionBeforePrompt(session, chatJid, options, runOptions.onEvent);
        pruneOrphanToolResults(session, chatJid);
        const forkBaseLeafId = typeof session.sessionManager?.getLeafId === "function"
            ? session.sessionManager.getLeafId()
            : null;
        options.setActiveForkBaseLeaf(chatJid, forkBaseLeafId ?? null);
        options.onInfo?.("Prompting session", {
            operation: "run_agent.prompt",
            chatJid,
            promptLength: prompt.length,
        });
        const timeoutMs = typeof runOptions.timeoutMs === "number" ? runOptions.timeoutMs : getAgentRuntimeConfig().timeoutMs;
        const channel = detectChannel(chatJid);
        const recoveryConfig = getAutomaticRecoveryConfig();
        let recoveryAttemptsUsed = 0;
        let lastClassifier = null;
        const strategyHistory = [];
        const recoveryDiagnostics = [];
        let recoveryBudgetStartedAt = null;
        const getRecoveryBudgetElapsedMs = () => (recoveryBudgetStartedAt == null ? 0 : Math.max(0, Date.now() - recoveryBudgetStartedAt));
        return await withChatContext(chatJid, channel, async () => {
            while (true) {
                const attempt = await runPromptAttempt(prompt, chatJid, session, timeoutMs, runOptions, options, startTime);
                if (attempt.output.status === "success") {
                    const duration = Date.now() - startTime;
                    const finalText = typeof attempt.output.result === "string" ? attempt.output.result : null;
                    const recoveryMeta = recoveryAttemptsUsed > 0
                        ? buildRecoveryMetadata(recoveryAttemptsUsed, duration, true, false, lastClassifier, strategyHistory, recoveryDiagnostics)
                        : null;
                    writeAgentLog(options.logsDir, chatJid, duration, false, finalText, null, recoveryMeta);
                    options.onInfo?.("Agent run completed", {
                        operation: "run_agent.complete",
                        chatJid,
                        durationMs: duration,
                        outputChars: finalText?.length ?? 0,
                        recoveryAttemptsUsed,
                        recovered: recoveryAttemptsUsed > 0,
                    });
                    if (recoveryAttemptsUsed > 0) {
                        emitAgentSessionEvent(runOptions.onEvent, {
                            type: "recovery_end",
                            outcome: "recovered",
                            attemptsUsed: recoveryAttemptsUsed,
                            classifier: lastClassifier,
                        });
                        attempt.output.recovery = buildRecoveryMetadata(recoveryAttemptsUsed, duration, true, false, lastClassifier, strategyHistory, recoveryDiagnostics);
                    }
                    return attempt.output;
                }
                const errorText = attempt.output.error || "Agent error";
                const decision = decideAutomaticRecovery({
                    config: recoveryConfig,
                    errorText,
                    recoveryAttemptsUsed,
                    elapsedMs: getRecoveryBudgetElapsedMs(),
                    snapshot: attempt.snapshot,
                });
                lastClassifier = decision.classifier;
                options.onWarn?.("Agent attempt failed", {
                    operation: "run_agent.attempt_failed",
                    chatJid,
                    errorText,
                    classifier: decision.classifier,
                    recoveryAttemptsUsed,
                    recoveryStrategy: decision.strategy,
                    reason: decision.reason,
                });
                recoveryDiagnostics.push(buildRecoveryDiagnosticEntry("attempt_failure", recoveryAttemptsUsed + 1, decision.classifier, decision.strategy, decision.reason, errorText, Date.now() - startTime, attempt.snapshot));
                if (!decision.recover || !decision.strategy) {
                    const duration = Date.now() - startTime;
                    const recoveryMeta = recoveryAttemptsUsed > 0
                        ? buildRecoveryMetadata(recoveryAttemptsUsed, duration, false, true, lastClassifier, strategyHistory, recoveryDiagnostics)
                        : null;
                    writeAgentLog(options.logsDir, chatJid, duration, false, null, errorText, recoveryMeta);
                    if (recoveryAttemptsUsed > 0) {
                        emitAgentSessionEvent(runOptions.onEvent, {
                            type: "recovery_end",
                            outcome: "exhausted",
                            attemptsUsed: recoveryAttemptsUsed,
                            classifier: decision.classifier,
                            errorMessage: errorText,
                        });
                        attempt.output.recovery = buildRecoveryMetadata(recoveryAttemptsUsed, duration, false, true, lastClassifier, strategyHistory, recoveryDiagnostics);
                    }
                    return attempt.output;
                }
                if (recoveryBudgetStartedAt == null) {
                    recoveryBudgetStartedAt = Date.now();
                }
                recoveryAttemptsUsed += 1;
                strategyHistory.push(decision.strategy);
                emitAgentSessionEvent(runOptions.onEvent, {
                    type: "recovery_start",
                    classifier: decision.classifier,
                    strategy: decision.strategy,
                    attempt: recoveryAttemptsUsed,
                    maxAttempts: recoveryConfig.maxAttempts,
                    totalBudgetMs: recoveryConfig.totalBudgetMs,
                    reason: decision.reason,
                });
                if (decision.strategy === "compact_then_retry") {
                    const compactionResult = await runRecoveryCompaction(session, chatJid, runOptions, options);
                    if (!compactionResult.ok) {
                        const compactDecision = decideAutomaticRecovery({
                            config: recoveryConfig,
                            errorText: compactionResult.errorMessage,
                            recoveryAttemptsUsed,
                            elapsedMs: getRecoveryBudgetElapsedMs(),
                            snapshot: {
                                hadToolActivity: false,
                                hadPartialOutput: attempt.snapshot.hadPartialOutput,
                                hadCompletedTurnOutput: attempt.snapshot.hadCompletedTurnOutput,
                                compactionErrorMessage: compactionResult.errorMessage,
                                sawCompactionIntent: true,
                            },
                        });
                        lastClassifier = compactDecision.classifier;
                        if (!compactDecision.recover || compactDecision.strategy !== "retry") {
                            recoveryDiagnostics.push(buildRecoveryDiagnosticEntry("compaction_failure", recoveryAttemptsUsed, compactDecision.classifier, compactDecision.strategy, compactDecision.reason, compactionResult.errorMessage, Date.now() - startTime, {
                                hadToolActivity: false,
                                hadPartialOutput: attempt.snapshot.hadPartialOutput,
                                hadCompletedTurnOutput: attempt.snapshot.hadCompletedTurnOutput,
                                compactionErrorMessage: compactionResult.errorMessage,
                                sawCompactionIntent: true,
                            }));
                            const duration = Date.now() - startTime;
                            const recoveryMeta = buildRecoveryMetadata(recoveryAttemptsUsed, duration, false, true, lastClassifier, strategyHistory, recoveryDiagnostics);
                            writeAgentLog(options.logsDir, chatJid, duration, false, null, compactionResult.errorMessage, recoveryMeta);
                            emitAgentSessionEvent(runOptions.onEvent, {
                                type: "recovery_end",
                                outcome: "exhausted",
                                attemptsUsed: recoveryAttemptsUsed,
                                classifier: compactDecision.classifier,
                                errorMessage: compactionResult.errorMessage,
                            });
                            return {
                                status: "error",
                                result: null,
                                error: compactionResult.errorMessage,
                                recovery: buildRecoveryMetadata(recoveryAttemptsUsed, duration, false, true, lastClassifier, strategyHistory, recoveryDiagnostics),
                            };
                        }
                    }
                }
                options.clearAttachments(chatJid);
            }
        });
    }
    catch (err) {
        options.clearAttachments(chatJid);
        const duration = Date.now() - startTime;
        const errorMsg = err instanceof Error ? err.message : String(err);
        writeAgentLog(options.logsDir, chatJid, duration, false, null, errorMsg, null);
        options.onError?.("Agent run failed", {
            operation: "run_agent",
            chatJid,
            durationMs: duration,
            errorMessage: errorMsg,
            err,
        });
        return { status: "error", result: null, error: errorMsg };
    }
    finally {
        options.clearActiveForkBaseLeaf(chatJid);
    }
}
