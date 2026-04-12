/**
 * web/workspace/watcher.ts – Filesystem watcher for workspace changes.
 *
 * Uses Node's fs.watch() to monitor the workspace directory for file
 * changes. When a change is detected, it invalidates the tree cache
 * and broadcasts an SSE event so the web UI can refresh.
 *
 * Consumers: web/workspace/service.ts calls startWorkspaceWatcher().
 */

import path from "path";
import { readdirSync, statSync, watch } from "fs";
import type { FSWatcher } from "fs";

import { WORKSPACE_DIR } from "../../../core/config.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { buildTree, compressPaths } from "./tree.js";
import { resolveWorkspacePath, shouldIgnoreWatchPath, toRelativePath } from "./paths.js";

const log = createLogger("web.workspace-watcher");
export const DEFAULT_WORKSPACE_WATCH_DEPTH = 4;

/** Describes a detected workspace file change for SSE broadcast. */
export type WorkspaceUpdate = {
  path: string;
  root: unknown;
  truncated: boolean;
  /** Concrete workspace-relative paths that triggered this subtree refresh. */
  changed_paths?: string[];
};

/** Create a throttled callback for workspace change events. */
export function createWorkspaceUpdateThrottle(
  onUpdate: (updates: WorkspaceUpdate[]) => void,
  throttleMs = 1000
) {
  let lastEmit = 0;
  let throttleTimer: ReturnType<typeof setTimeout> | null = null;
  let pendingUpdates: Map<string, WorkspaceUpdate> | null = null;

  const emitUpdates = (updates: WorkspaceUpdate[]) => {
    if (!updates.length) return;
    lastEmit = Date.now();
    onUpdate(updates);
  };

  const schedule = (updates: WorkspaceUpdate[]) => {
    const now = Date.now();
    const elapsed = now - lastEmit;
    if (elapsed >= throttleMs) {
      emitUpdates(updates);
      return;
    }
    if (!pendingUpdates) pendingUpdates = new Map();
    for (const update of updates) {
      const existing = pendingUpdates.get(update.path);
      if (existing) {
        const changedPaths = new Set<string>([
          ...(Array.isArray(existing.changed_paths) ? existing.changed_paths : []),
          ...(Array.isArray(update.changed_paths) ? update.changed_paths : []),
        ]);
        pendingUpdates.set(update.path, {
          ...update,
          changed_paths: Array.from(changedPaths),
        });
        continue;
      }
      pendingUpdates.set(update.path, update);
    }
    if (throttleTimer) return;
    throttleTimer = setTimeout(() => {
      throttleTimer = null;
      const merged = pendingUpdates ? Array.from(pendingUpdates.values()) : [];
      pendingUpdates = null;
      emitUpdates(merged);
    }, Math.max(throttleMs - elapsed, 0));
  };

  const clear = () => {
    if (throttleTimer) {
      clearTimeout(throttleTimer);
      throttleTimer = null;
    }
    pendingUpdates = null;
  };

  return { schedule, clear };
}

/** Start watching the workspace directory for changes via fs.watch(). */
export function startWorkspaceWatcher(
  onUpdate: (updates: WorkspaceUpdate[]) => void,
  includeHidden: () => boolean
): { close: () => Promise<void> } {
  const pending = new Map<string, Set<string>>();
  let flushTimer: ReturnType<typeof setTimeout> | null = null;
  const throttler = createWorkspaceUpdateThrottle(onUpdate, 1000);
  const watchers = new Map<string, FSWatcher>();
  const maxDepth = DEFAULT_WORKSPACE_WATCH_DEPTH;

  const queuePath = (absPath: string) => {
    if (shouldIgnoreWatchPath(absPath, includeHidden())) return;
    const rel = toRelativePath(absPath);
    const target = rel === "." ? "." : toRelativePath(path.dirname(absPath));
    const changedPaths = pending.get(target) ?? new Set<string>();
    changedPaths.add(rel);
    pending.set(target, changedPaths);
    if (flushTimer) return;
    flushTimer = setTimeout(() => {
      flushTimer = null;
      const pendingEntries = Array.from(pending.entries());
      pending.clear();
      const targets = compressPaths(pendingEntries.map(([target]) => target));
      if (!targets.length) return;
      const updates: WorkspaceUpdate[] = [];
      for (const relPath of targets) {
        const abs = resolveWorkspacePath(relPath);
        if (!abs) continue;
        try {
          const state = { count: 0, truncated: false };
          const depth = relPath === "." ? 4 : 3;
          const root = buildTree(abs, depth, state, { includeHidden: includeHidden() });
          const changedPathSet = new Set<string>();
          for (const [pendingTarget, relPaths] of pendingEntries) {
            if (relPath === "." || pendingTarget === relPath || pendingTarget.startsWith(`${relPath}/`)) {
              for (const changedPath of relPaths) changedPathSet.add(changedPath);
            }
          }
          updates.push({
            path: relPath,
            root,
            truncated: state.truncated,
            changed_paths: Array.from(changedPathSet),
          });
        } catch (err) {
          debugSuppressedError(log, "Workspace watch refresh skipped a path that disappeared mid-refresh.", err, {
            operation: "workspace_watcher.queue_path.build_tree",
            relPath,
          });
        }
      }
      throttler.schedule(updates);
    }, 300);
  };

  const removeWatcher = (dir: string) => {
    for (const [key, watcher] of Array.from(watchers.entries())) {
      if (key === dir || key.startsWith(`${dir}${path.sep}`)) {
        try {
          watcher.close();
        } catch (err) {
          debugSuppressedError(log, "Workspace watcher handle was already closed during watcher churn.", err, {
            operation: "workspace_watcher.remove_watcher.close",
            dir: key,
          });
        }
        watchers.delete(key);
      }
    }
  };

  const addWatcher = (dir: string, depth: number) => {
    if (depth < 0) return;
    if (shouldIgnoreWatchPath(dir, includeHidden())) return;
    if (watchers.has(dir)) return;

    try {
      const watcher = watch(dir, { persistent: true }, (eventType, filename: string | Buffer | null) => {
        const name = filename ? filename.toString() : "";
        const targetPath = name ? path.join(dir, name) : dir;
        queuePath(targetPath);

        if (eventType === "rename" && name) {
          try {
            const stats = statSync(targetPath);
            if (stats.isDirectory()) {
              addWatcher(targetPath, depth - 1);
            }
          } catch {
            removeWatcher(targetPath);
          }
        }
      });

      watcher.on("error", (error) => {
        log.warn("Workspace watcher fs.watch error", {
          operation: "workspace_watcher.add_watcher.fs_watch_error",
          dir,
          err: error,
        });
        removeWatcher(dir);
      });

      watchers.set(dir, watcher);
    } catch (error) {
      log.warn("Failed to watch workspace directory", {
        operation: "workspace_watcher.add_watcher.watch_directory",
        dir,
        err: error,
      });
      return;
    }

    if (depth === 0) return;
    let entries: Array<{ name: string; isDirectory: () => boolean }>;
    try {
      entries = readdirSync(dir, { withFileTypes: true }) as Array<{ name: string; isDirectory: () => boolean }>;
    } catch (err) {
      debugSuppressedError(log, "Workspace watcher could not enumerate a directory while recursing.", err, {
        operation: "workspace_watcher.add_watcher.readdir",
        dir,
      });
      return;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const child = path.join(dir, entry.name);
      addWatcher(child, depth - 1);
    }
  };

  addWatcher(WORKSPACE_DIR, maxDepth);
  log.info("Workspace watcher ready", {
    operation: "workspace_watcher.start",
    includeHidden: includeHidden(),
    maxDepth,
    watchCount: watchers.size,
  });

  return {
    close: async () => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
      throttler.clear();
      pending.clear();
      const watchCount = watchers.size;
      for (const watcher of watchers.values()) {
        try {
          watcher.close();
        } catch (err) {
          debugSuppressedError(log, "Workspace watcher handle was already closed during shutdown.", err, {
            operation: "workspace_watcher.stop.close",
          });
        }
      }
      watchers.clear();
      log.info("Workspace watcher stopped", {
        operation: "workspace_watcher.stop",
        watchCount,
      });
    },
  };
}
