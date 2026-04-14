/**
 * bun-runner – registers a Bun script execution tool.
 *
 * Runs workspace Bun scripts directly (no shell), with optional argv and cwd.
 * Stdout is discarded by default, but can be captured explicitly.
 * Large captured outputs are stored as searchable tool-output logs.
 */
import { Type } from "@sinclair/typebox";
import { registerToolStatusHintProvider } from "../tool-status-hints.js";
import { runBunScript } from "../tools/bun-runner.js";
import { buildSubprocessExecutionHint } from "../utils/process-spawn.js";
const BUN_STATUS_ICON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 4.8C8.6 6.6 4 8.6 3.2 12c-.9 3.6 3.2 7.2 8.8 7.2s9.7-3.6 8.8-7.2C20 8.6 15.4 6.6 12 4.8Z"></path><path d="M12 4.8c-.7 1-1.1 2-1.4 3.1"></path><path d="M12 4.8c.1 1.1.3 2.1.6 3.1"></path><ellipse cx="8.2" cy="12.6" rx="1.5" ry="1.55" fill="currentColor" stroke="none"></ellipse><ellipse cx="15.8" cy="12.6" rx="1.5" ry="1.55" fill="currentColor" stroke="none"></ellipse><circle cx="7.7" cy="12.1" r="0.44" fill="white" stroke="none"></circle><circle cx="15.3" cy="12.1" r="0.44" fill="white" stroke="none"></circle><path d="M9.2 15.6c.7.8 1.7 1.2 2.8 1.2s2.1-.4 2.8-1.2"></path></svg>`;
const BunRunSchema = Type.Object({
    script: Type.String({ description: "Workspace-relative script file to execute with Bun (for example `runtime/scripts/foo.ts`)." }),
    args: Type.Optional(Type.Array(Type.String(), { description: "Arguments passed to the script. No shell parsing is performed." })),
    cwd: Type.Optional(Type.String({ description: "Working directory relative to the workspace (defaults to the workspace root)." })),
    timeout_sec: Type.Optional(Type.Integer({ description: "Timeout in seconds.", minimum: 1, maximum: 3600 })),
    capture_stdout: Type.Optional(Type.Boolean({ description: "Capture stdout instead of discarding it. Large captured output is stored as searchable tool-output logs." })),
});
function readTrimmedString(...values) {
    for (const value of values) {
        if (typeof value === "string" && value.trim())
            return value.trim();
    }
    return null;
}
registerToolStatusHintProvider({
    id: "bun_run",
    buildHints: ({ toolName, args }) => {
        if (toolName !== "bun_run")
            return null;
        const record = args && typeof args === "object" ? args : null;
        const script = readTrimmedString(record?.script);
        if (!script)
            return null;
        return {
            key: "bun_run",
            icon_svg: BUN_STATUS_ICON_SVG,
            label: script,
            title: `Bun script • ${script}`,
            kind: "script",
        };
    },
});
export function buildBunRunHint(platform = process.platform) {
    return [
        "## Direct Bun scripts",
        "Use bun_run to execute a workspace Bun script directly without a shell.",
        "Pass script arguments as an array; do not rely on shell features like pipes or redirects.",
        "Stdout is discarded by default; set capture_stdout=true when you need bounded inline output or searchable stored output.",
        buildSubprocessExecutionHint(platform),
    ].join("\n");
}
export function buildBunRunDescription(platform = process.platform) {
    return `Run a workspace Bun script directly with optional arguments and cwd. No shell parsing, piping, or redirects; stderr is always captured, stdout can be captured optionally with large outputs stored as searchable tool-output logs. ${buildSubprocessExecutionHint(platform)}`;
}
export function buildBunRunPromptSnippet(platform = process.platform) {
    return `bun_run: execute a workspace Bun script directly with optional arguments and cwd, capturing stderr and optionally capturing stdout with searchable large-output storage. ${buildSubprocessExecutionHint(platform)}`;
}
function formatArgs(args) {
    if (args.length === 0)
        return "(none)";
    return args.map((arg) => JSON.stringify(arg)).join(" ");
}
function formatBytes(bytes) {
    if (!Number.isFinite(bytes))
        return "0 B";
    if (bytes < 1024)
        return `${bytes} B`;
    if (bytes < 1024 * 1024)
        return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function buildStreamSection(label, stream) {
    if (!stream.captured) {
        return [`${label}: discarded`];
    }
    if (stream.storedOutputId) {
        const sizeBytes = stream.storedOutputBytes ?? stream.bytes;
        const lineCount = stream.storedOutputLines ?? stream.lineCount;
        return [
            `${label} stored as tool-output:${stream.storedOutputId} (${lineCount} lines, ${formatBytes(sizeBytes)}).`,
            stream.storedOutputPreview ? `Preview:\n${stream.storedOutputPreview}` : null,
            `Use search_tool_output with handle "${stream.storedOutputId}" and a query to retrieve relevant snippets.`,
        ].filter((line) => Boolean(line));
    }
    if (stream.text) {
        return [`${label}:`, stream.text];
    }
    return [`${label}: (empty)`];
}
function buildResultText(result) {
    const status = result.exitCode === 0
        ? `bun_run completed successfully for ${result.scriptDisplayPath}.`
        : `bun_run finished with exit code ${result.exitCode ?? "unknown"} for ${result.scriptDisplayPath}.`;
    const sections = [
        [
            status,
            `cwd: ${result.cwdDisplayPath}`,
            `args: ${formatArgs(result.args)}`,
        ].join("\n"),
        buildStreamSection("stdout", result.stdout).join("\n"),
        buildStreamSection("stderr", result.stderr).join("\n"),
    ];
    return sections.join("\n\n");
}
export const bunRunner = (pi) => {
    pi.on("before_agent_start", async (event) => ({
        systemPrompt: `${event.systemPrompt}\n\n${buildBunRunHint()}`,
    }));
    pi.registerTool({
        name: "bun_run",
        label: "bun_run",
        description: buildBunRunDescription(),
        promptSnippet: buildBunRunPromptSnippet(),
        parameters: BunRunSchema,
        async execute(_toolCallId, params, signal) {
            try {
                const result = await runBunScript({
                    script: params.script,
                    args: params.args,
                    cwd: params.cwd,
                    timeoutSec: params.timeout_sec,
                    captureStdout: params.capture_stdout,
                }, signal);
                return {
                    content: [{ type: "text", text: buildResultText(result) }],
                    details: {
                        ok: result.exitCode === 0,
                        script: result.scriptDisplayPath,
                        cwd: result.cwdDisplayPath,
                        args: result.args,
                        bun_path: result.bunPath,
                        exit_code: result.exitCode,
                        capture_stdout: result.captureStdout,
                        stdout: result.stdout.text,
                        stdout_captured: result.stdout.captured,
                        stdout_bytes: result.stdout.bytes,
                        stdout_lines: result.stdout.lineCount,
                        stdout_truncated: false,
                        stdout_stored_output_id: result.stdout.storedOutputId,
                        stdout_stored_output_path: result.stdout.storedOutputPath,
                        stdout_stored_output_bytes: result.stdout.storedOutputBytes,
                        stdout_stored_output_lines: result.stdout.storedOutputLines,
                        stderr: result.stderr.text,
                        stderr_bytes: result.stderr.bytes,
                        stderr_lines: result.stderr.lineCount,
                        stderr_truncated: false,
                        stderr_stored_output_id: result.stderr.storedOutputId,
                        stderr_stored_output_path: result.stderr.storedOutputPath,
                        stderr_stored_output_bytes: result.stderr.storedOutputBytes,
                        stderr_stored_output_lines: result.stderr.storedOutputLines,
                    },
                };
            }
            catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                const timedOut = message.startsWith("timeout:");
                const aborted = message === "aborted";
                return {
                    content: [{
                            type: "text",
                            text: timedOut
                                ? `bun_run timed out after ${params.timeout_sec ?? 120}s while running ${params.script}.`
                                : aborted
                                    ? `bun_run was aborted while running ${params.script}.`
                                    : `bun_run failed: ${message}`,
                        }],
                    details: {
                        ok: false,
                        script: params.script,
                        cwd: params.cwd || ".",
                        args: Array.isArray(params.args) ? params.args : [],
                        timeout_sec: params.timeout_sec ?? 120,
                        capture_stdout: Boolean(params.capture_stdout),
                        timed_out: timedOut,
                        aborted,
                        error: message,
                    },
                };
            }
        },
    });
};
