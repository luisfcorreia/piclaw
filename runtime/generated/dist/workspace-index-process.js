import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { closeDatabase, initDatabase } from "./db.js";
import { getWorkspaceIndexStatus, refreshWorkspaceIndex } from "./workspace-search.js";
import { createLogger } from "./utils/logger.js";
const log = createLogger("workspace-index-process");
const INDEXING_STALE_MS = 5 * 60 * 1000;
const ENTRY_PATH = resolve(import.meta.dir, "./workspace-index-process.ts");
export const DISABLE_BACKGROUND_WORKSPACE_INDEX_ENV = "PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX";
export const AGGRESSIVE_WORKSPACE_INDEX_MEMORY_ENV = "PICLAW_AGGRESSIVE_WORKSPACE_INDEX_MEMORY";
let spawnWorkspaceIndexProcessImpl = (command, args, options) => spawn(command, args, options);
let activeWorkspaceIndexChild = null;
let finalizeWorkspaceIndexProcessImpl = () => {
    closeDatabase({ shrinkMemory: true });
    try {
        const gc = globalThis.gc;
        if (typeof gc === "function")
            gc();
    }
    catch {
        // Best-effort cleanup only.
    }
    try {
        const bunGc = globalThis.Bun?.gc;
        if (typeof bunGc === "function")
            bunGc(true);
    }
    catch {
        // Best-effort cleanup only.
    }
};
function isIndexStateFresh(updatedAt) {
    if (!updatedAt)
        return false;
    const updatedMs = Date.parse(updatedAt);
    if (!Number.isFinite(updatedMs))
        return false;
    return Date.now() - updatedMs < INDEXING_STALE_MS;
}
function isChildStillActive(child) {
    if (!child)
        return false;
    return child.exitCode === null && !child.killed;
}
function buildArgs(params) {
    const args = [ENTRY_PATH];
    const scope = typeof params.scope === "string" && params.scope.trim() ? params.scope.trim() : "all";
    args.push("--scope", scope);
    if (typeof params.max_kb === "number" && Number.isFinite(params.max_kb)) {
        args.push("--max-kb", String(Math.trunc(params.max_kb)));
    }
    return args;
}
function parseArgs(args) {
    const parsed = {};
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === "--scope") {
            parsed.scope = args[i + 1];
            i += 1;
            continue;
        }
        if (arg.startsWith("--scope=")) {
            parsed.scope = arg.slice("--scope=".length);
            continue;
        }
        if (arg === "--max-kb") {
            const value = Number(args[i + 1]);
            if (Number.isFinite(value))
                parsed.max_kb = value;
            i += 1;
            continue;
        }
        if (arg.startsWith("--max-kb=")) {
            const value = Number(arg.slice("--max-kb=".length));
            if (Number.isFinite(value))
                parsed.max_kb = value;
        }
    }
    return parsed;
}
export function shouldLaunchWorkspaceIndexProcess(params = {}) {
    if (process.env[DISABLE_BACKGROUND_WORKSPACE_INDEX_ENV] === "1")
        return false;
    if (isChildStillActive(activeWorkspaceIndexChild))
        return false;
    const status = getWorkspaceIndexStatus({ scope: params.scope });
    if (status.state === "ready")
        return false;
    if (status.state === "indexing" && isIndexStateFresh(status.updated_at))
        return false;
    return true;
}
export function launchWorkspaceIndexProcess(params = {}) {
    if (!shouldLaunchWorkspaceIndexProcess(params))
        return false;
    const child = spawnWorkspaceIndexProcessImpl(process.execPath, buildArgs(params), {
        cwd: process.cwd(),
        env: {
            ...process.env,
            [AGGRESSIVE_WORKSPACE_INDEX_MEMORY_ENV]: "1",
        },
        stdio: "ignore",
    });
    activeWorkspaceIndexChild = child;
    child.once("exit", () => {
        if (activeWorkspaceIndexChild === child) {
            activeWorkspaceIndexChild = null;
        }
    });
    child.once("error", (error) => {
        log.warn("Workspace index process failed", {
            operation: "workspace_index_process.spawn",
            err: error,
        });
        if (activeWorkspaceIndexChild === child) {
            activeWorkspaceIndexChild = null;
        }
    });
    child.unref();
    log.info("Launched background workspace index process", {
        operation: "workspace_index_process.launch",
        pid: child.pid,
        scope: typeof params.scope === "string" && params.scope.trim() ? params.scope.trim() : "all",
        maxKb: params.max_kb ?? null,
    });
    return true;
}
export async function runWorkspaceIndexProcessFromArgs(args = process.argv.slice(2)) {
    const params = parseArgs(args);
    initDatabase();
    try {
        await refreshWorkspaceIndex({ scope: params.scope, max_kb: params.max_kb });
    }
    finally {
        await finalizeWorkspaceIndexProcessImpl();
    }
}
export function setWorkspaceIndexSpawnForTests(factory) {
    spawnWorkspaceIndexProcessImpl = factory ?? ((command, args, options) => spawn(command, args, options));
}
export function setWorkspaceIndexProcessFinalizeForTests(finalizer) {
    finalizeWorkspaceIndexProcessImpl = finalizer ?? (() => {
        closeDatabase({ shrinkMemory: true });
        try {
            const gc = globalThis.gc;
            if (typeof gc === "function")
                gc();
        }
        catch {
            // Best-effort cleanup only.
        }
        try {
            const bunGc = globalThis.Bun?.gc;
            if (typeof bunGc === "function")
                bunGc(true);
        }
        catch {
            // Best-effort cleanup only.
        }
    });
}
export function resetWorkspaceIndexLauncherForTests() {
    activeWorkspaceIndexChild = null;
    spawnWorkspaceIndexProcessImpl = (command, args, options) => spawn(command, args, options);
    setWorkspaceIndexProcessFinalizeForTests(null);
}
if (import.meta.main) {
    runWorkspaceIndexProcessFromArgs().catch((error) => {
        log.error("Workspace index process failed", {
            operation: "workspace_index_process.run",
            err: error,
        });
        process.exitCode = 1;
    });
}
