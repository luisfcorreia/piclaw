/**
 * extensions/azure-openai-api.ts – Stable extension-facing API for Azure OpenAI helpers.
 *
 * Centralizes imports used by `extensions/integrations/azure-openai.ts` so the extension entrypoint
 * does not depend directly on fragile deep implementation paths.
 */
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OPENAI_RESPONSES_SHARED_RELATIVE_PATH = join("@mariozechner", "pi-ai", "dist", "providers", "openai-responses-shared.js");
export function resolvePiAiResponsesSharedModulePath(startDir = __dirname) {
    let dir = startDir;
    for (let i = 0; i < 10; i += 1) {
        const candidate = join(dir, "node_modules", OPENAI_RESPONSES_SHARED_RELATIVE_PATH);
        if (existsSync(candidate))
            return candidate;
        const parent = dirname(dir);
        if (parent === dir)
            break;
        dir = parent;
    }
    throw new Error(`Unable to resolve ${OPENAI_RESPONSES_SHARED_RELATIVE_PATH} from ${startDir}`);
}
const { convertResponsesMessages, convertResponsesTools, processResponsesStream, } = await import(pathToFileURL(resolvePiAiResponsesSharedModulePath()).href);
export { applyToolCallLimit } from "../utils/azure-tool-call-limit.js";
/** Re-exported response-input conversion helper from pi-ai internals. */
export { convertResponsesMessages, convertResponsesTools, processResponsesStream };
/**
 * Build base stream options for simple stream wrappers.
 * Mirrors pi-ai's simple-options behavior without requiring extension-side deep imports.
 */
export function buildBaseOptions(model, options, apiKey) {
    return {
        temperature: options?.temperature,
        maxTokens: options?.maxTokens || Math.min(model.maxTokens, 32000),
        signal: options?.signal,
        apiKey: apiKey || options?.apiKey,
        cacheRetention: options?.cacheRetention,
        sessionId: options?.sessionId,
        headers: options?.headers,
        onPayload: options?.onPayload,
        maxRetryDelayMs: options?.maxRetryDelayMs,
        metadata: options?.metadata,
    };
}
/** Clamp unsupported reasoning levels for providers that do not accept `xhigh`. */
export function clampReasoning(effort) {
    return effort === "xhigh" ? "high" : effort;
}
