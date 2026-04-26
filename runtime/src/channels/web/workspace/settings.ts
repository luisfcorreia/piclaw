import { getConfigPath } from "../../../core/config.js";
import { readJsonConfig, writeJsonConfig } from "../../../core/config-store.js";

export interface WorkspaceScanSettings {
  treeMaxDepth: number;
  treeMaxEntries: number;
}

export interface WorkspaceScanSettingsInput {
  treeMaxDepth?: unknown;
  treeMaxEntries?: unknown;
}

export const DEFAULT_WORKSPACE_TREE_MAX_DEPTH = 4;
export const DEFAULT_WORKSPACE_TREE_MAX_ENTRIES = 5000;
const MIN_WORKSPACE_TREE_MAX_DEPTH = 1;
const MAX_WORKSPACE_TREE_MAX_DEPTH = 8;
const MIN_WORKSPACE_TREE_MAX_ENTRIES = 250;
const MAX_WORKSPACE_TREE_MAX_ENTRIES = 5000;

function normalizeOptionalInt(value: unknown, min: number, max: number): number | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return undefined;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function readWorkspaceSettingsConfig(): Record<string, unknown> {
  const config = readJsonConfig(getConfigPath());
  const web = config.web && typeof config.web === "object"
    ? config.web as Record<string, unknown>
    : null;
  const workspace = web?.workspace && typeof web.workspace === "object"
    ? web.workspace as Record<string, unknown>
    : null;
  return workspace || {};
}

export function getWorkspaceScanSettings(): WorkspaceScanSettings {
  const workspace = readWorkspaceSettingsConfig();
  const treeMaxDepth = normalizeOptionalInt(
    workspace.treeMaxDepth ?? workspace.tree_max_depth,
    MIN_WORKSPACE_TREE_MAX_DEPTH,
    MAX_WORKSPACE_TREE_MAX_DEPTH,
  ) ?? DEFAULT_WORKSPACE_TREE_MAX_DEPTH;
  const treeMaxEntries = normalizeOptionalInt(
    workspace.treeMaxEntries ?? workspace.tree_max_entries,
    MIN_WORKSPACE_TREE_MAX_ENTRIES,
    MAX_WORKSPACE_TREE_MAX_ENTRIES,
  ) ?? DEFAULT_WORKSPACE_TREE_MAX_ENTRIES;
  return { treeMaxDepth, treeMaxEntries };
}

export function saveWorkspaceScanSettings(input: WorkspaceScanSettingsInput): WorkspaceScanSettings {
  const nextTreeMaxDepth = normalizeOptionalInt(input.treeMaxDepth, MIN_WORKSPACE_TREE_MAX_DEPTH, MAX_WORKSPACE_TREE_MAX_DEPTH);
  const nextTreeMaxEntries = normalizeOptionalInt(input.treeMaxEntries, MIN_WORKSPACE_TREE_MAX_ENTRIES, MAX_WORKSPACE_TREE_MAX_ENTRIES);

  const config = readJsonConfig(getConfigPath());
  const web = config.web && typeof config.web === "object"
    ? { ...(config.web as Record<string, unknown>) }
    : {};
  const workspace = web.workspace && typeof web.workspace === "object"
    ? { ...(web.workspace as Record<string, unknown>) }
    : {};

  if (nextTreeMaxDepth !== undefined) {
    delete workspace.tree_max_depth;
    workspace.treeMaxDepth = nextTreeMaxDepth;
  }

  if (nextTreeMaxEntries !== undefined) {
    delete workspace.tree_max_entries;
    workspace.treeMaxEntries = nextTreeMaxEntries;
  }

  if (Object.keys(workspace).length > 0) {
    web.workspace = workspace;
  } else {
    delete web.workspace;
  }

  if (Object.keys(web).length > 0) {
    config.web = web;
  } else {
    delete config.web;
  }

  writeJsonConfig(getConfigPath(), config);
  return getWorkspaceScanSettings();
}
