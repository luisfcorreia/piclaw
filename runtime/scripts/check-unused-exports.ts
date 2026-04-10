#!/usr/bin/env bun

import { spawnSync } from "bun";

/** Baseline unused-export entries accepted until upstream/dynamic loading catches up. */
const ALLOWED_UNUSED_EXPORTS = new Set([
  "src/channels/web/http/client.ts:9 - firstHeaderValue",
  "src/channels/web/http/extension-routes.ts:74 - clearExtensionRoutes",
  "src/channels/web/http/extension-routes.ts:79 - getRegisteredRoutes",
  "src/channels/web/http/extension-routes.ts:82 - clearExtensionRoutes",
  "src/channels/web/http/extension-routes.ts:87 - getRegisteredRoutes",
  "src/channels/web/http/rate-limit.ts:54 - resetRateLimiterStateForTests",
  "src/channels/web/ui-context.ts:23 - bindSessionUiContext",
  "src/channels/web/workspace/service.ts:14 - createWorkspaceUpdateThrottle",
  "src/channels/web/workspace/service.ts:15 - WorkspaceUpdate",
  "src/core/chat-context.ts:49 - getChatContext",
  "src/core/config.ts:316 - getLoggingConfig",
  "src/db.ts:103 - DEFAULT_PASSKEY_USER_ID",
  "src/db.ts:119 - deleteWebSession",
  "src/db.ts:123 - ChatInfo",
  "src/db.ts:125 - InteractionContentMeta",
  "src/db.ts:126 - InteractionData",
  "src/db.ts:128 - MediaRecord",
  "src/db.ts:54 - getTaskRunLogs",
  "src/db.ts:54 - LinkPreviewImageCacheRecord",
  "src/db.ts:60 - deleteToolOutputById",
  "src/db.ts:63 - getTaskRunLogs",
  "src/db.ts:87 - hasAgentRepliesAfter",
  "src/db.ts:82 - FailedRunRecord",
  "src/db.ts:90 - upsertRemotePeer",
  "src/db.ts:91 - getRemotePeer",
  "src/db.ts:92 - updateRemotePeer",
  "src/db.ts:93 - createPairRequest",
  "src/db.ts:94 - getPairRequestById",
  "src/db.ts:95 - getPendingPairRequest",
  "src/db.ts:96 - updatePairRequestStatus",
  "src/db.ts:97 - storeRemoteRequest",
  "src/db.ts:98 - updateRemoteRequest",
  "src/db.ts:99 - getRemoteRequestById",
  "src/db.ts:100 - logRemoteAudit",
  "src/db/chat-branches.ts:106 - listChatBranches",
  "src/db.ts:55 - getTaskRunLogs",
  "src/db/remote-interop.ts:220 - getRemoteRequestById",
  "src/db/tasks.ts:139 - getTaskRunLogs",
  "src/db.ts:102 - deleteWebSession",
  "src/db.ts:106 - ChatInfo",
  "src/db.ts:107 - InteractionContentMeta",
  "src/db.ts:108 - InteractionData",
  "src/db.ts:109 - deleteWebSession",
  "src/db.ts:110 - deleteWebSession",
  "src/db.ts:110 - MediaRecord",
  "src/db.ts:107 - deleteWebSession",
  "src/db.ts:111 - ChatInfo",
  "src/db.ts:112 - InteractionContentMeta",
  "src/db.ts:113 - InteractionData",
  "src/db.ts:113 - ChatInfo",
  "src/db.ts:114 - InteractionContentMeta",
  "src/db.ts:114 - ChatInfo",
  "src/db.ts:115 - InteractionData",
  "src/db.ts:115 - InteractionContentMeta",
  "src/db.ts:115 - MediaRecord",
  "src/db.ts:116 - InteractionData",
  "src/db.ts:117 - MediaRecord",
  "src/db.ts:118 - MediaRecord",
  "src/db.ts:31 - getMediaIdsForMessage",
  "src/db.ts:45 - getTaskRunLogs",
  "src/db.ts:50 - deleteToolOutputById",
  "src/db.ts:51 - deleteToolOutputById",
  "src/db.ts:70 - FailedRunRecord",
  "src/db.ts:72 - FailedRunRecord",
  "src/db.ts:73 - FailedRunRecord",
  "src/db.ts:73 - upsertRemotePeer",
  "src/db.ts:74 - getRemotePeer",
  "src/db.ts:75 - updateRemotePeer",
  "src/db.ts:76 - createPairRequest",
  "src/db.ts:77 - getPairRequestById",
  "src/db.ts:78 - getPendingPairRequest",
  "src/db.ts:79 - updatePairRequestStatus",
  "src/db.ts:80 - storeRemoteRequest",
  "src/db.ts:80 - upsertRemotePeer",
  "src/db.ts:81 - updateRemoteRequest",
  "src/db.ts:81 - getRemotePeer",
  "src/db.ts:81 - upsertRemotePeer",
  "src/db.ts:82 - getRemoteRequestById",
  "src/db.ts:82 - updateRemotePeer",
  "src/db.ts:82 - getRemotePeer",
  "src/db.ts:83 - logRemoteAudit",
  "src/db.ts:83 - createPairRequest",
  "src/db.ts:83 - updateRemotePeer",
  "src/db.ts:84 - getPairRequestById",
  "src/db.ts:84 - createPairRequest",
  "src/db.ts:85 - getPendingPairRequest",
  "src/db.ts:85 - getPairRequestById",
  "src/db.ts:86 - DEFAULT_PASSKEY_USER_ID",
  "src/db.ts:86 - updatePairRequestStatus",
  "src/db.ts:86 - getPendingPairRequest",
  "src/db.ts:87 - storeRemoteRequest",
  "src/db.ts:87 - updatePairRequestStatus",
  "src/db.ts:88 - updateRemoteRequest",
  "src/db.ts:88 - storeRemoteRequest",
  "src/db.ts:89 - getRemoteRequestById",
  "src/db.ts:89 - updateRemoteRequest",
  "src/db.ts:90 - logRemoteAudit",
  "src/db.ts:90 - getRemoteRequestById",
  "src/db.ts:91 - logRemoteAudit",
  "src/db.ts:93 - DEFAULT_PASSKEY_USER_ID",
  "src/db.ts:94 - DEFAULT_PASSKEY_USER_ID",
  "src/db.ts:78 - upsertRemotePeer",
  "src/db.ts:79 - getRemotePeer",
  "src/db.ts:80 - updateRemotePeer",
  "src/db.ts:81 - createPairRequest",
  "src/db.ts:82 - getPairRequestById",
  "src/db.ts:83 - getPendingPairRequest",
  "src/db.ts:84 - updatePairRequestStatus",
  "src/db.ts:85 - storeRemoteRequest",
  "src/db.ts:86 - updateRemoteRequest",
  "src/db.ts:87 - getRemoteRequestById",
  "src/db.ts:88 - logRemoteAudit",
  "src/db.ts:91 - DEFAULT_PASSKEY_USER_ID",
  "src/db/router-state.ts:33 - deleteRouterState",
  "src/extensions/azure-openai-api.ts:14 - applyToolCallLimit",
  "src/secure/keychain.ts:96 - setKeyMaterialProviderForTests",
  "src/extensions/azure-openai-api.ts:51 - buildBaseOptions",
  "src/extensions/azure-openai-api.ts:71 - clampReasoning",
  "src/extensions/context-mode-api.ts:10 - createToolOutputSearchTool",
  "src/extensions/context-mode-api.ts:14 - buildPreview",
  "src/extensions/context-mode-api.ts:15 - readToolOutputFile",
  "src/extensions/context-mode-api.ts:16 - saveToolOutput",
  "src/extensions/context-mode-api.ts:17 - startToolOutputCleanup",
  "src/extensions/context-mode-api.ts:9 - createBatchExecTool",
  "src/remote/identity.ts:88 - resetInteropIdentityForTests",
  "src/remote/identity.ts:93 - exportPublicKey",
  "src/remote/limits.ts:13 - DEFAULT_MAX_TOOL_CALLS_RESTRICTED",
  "src/remote/limits.ts:15 - DEFAULT_MAX_TOOL_CALLS_FULL",
  "src/remote/limits.ts:17 - DEFAULT_MAX_EXECUTION_SEC_RESTRICTED",
  "src/remote/limits.ts:19 - DEFAULT_MAX_EXECUTION_SEC_FULL",
  "src/remote/signature.ts:48 - signRequest",
  "src/agent-pool/provider-usage.ts:254 - clearProviderUsageCache",
  "src/agent-pool.ts:61 - TurnOutput",
  "src/task-scheduler.ts:78 - getSchedulerMetrics",
  "src/task-scheduler.ts:83 - resetSchedulerMetricsForTests",
  "src/types.ts:15 - ChatConfig",
  "src/utils/ids.ts:20 - createId",
  "src/utils/process-tracker.ts:37 - listTrackedProcesses",
  "src/db.ts:146 - ProxmoxConfig",
  "src/db.ts:147 - ProxmoxConfigClearResult",
  "src/db.ts:148 - ProxmoxConfigSetResult",
  "src/db.ts:149 - PortainerConfig",
  "src/db.ts:150 - PortainerConfigClearResult",
  "src/db.ts:151 - PortainerConfigSetResult",
  "src/db.ts:70 - listSshConfigs",
  "src/db.ts:76 - listProxmoxConfigs",
  "src/db.ts:82 - listPortainerConfigs",
  "src/extensions/bun-runner.ts:103 - bunRunner",
  "src/extensions/keychain-tools.ts:100 - keychainTools",
  "src/extensions/portainer.ts:724 - portainerTool",
  "src/extensions/proxmox.ts:855 - proxmoxTool",
  "src/extensions/request-batch.ts:17 - BatchedRequestItem",
  "src/extensions/request-batch.ts:27 - RequestBatchControls",
  "src/extensions/ssh-core.ts:1055 - createSshCoreExtension",
  "src/extensions/ssh-core.ts:913 - setSshConnectionResolverForTests",
  "src/extensions/ssh-core.ts:76 - setPersistentSshSpawnForTests",
  "src/extensions/ssh-core.ts:82 - setPersistentSshInterruptGraceMsForTests",
  "src/extensions/ssh.ts:69 - sshTool",
  "src/portainer/client.ts:159 - setPortainerRequestExecutorForTests",
  "src/proxmox/client.ts:247 - setProxmoxCurlExecutorForTests",
  "src/secure/shell-secrets.ts:125 - redactKeychainSecretsInValue",
  "src/secure/shell-secrets.ts:170 - buildInjectedPosixCommand",
  "src/secure/shell-secrets.ts:174 - buildInjectedPowerShellCommand",
  "src/tools/tracked-bash.ts:248 - createTrackedPowerShellOperations",
]);

export function normalizeUnusedExportEntry(entry: string): string {
  const match = entry.match(/^(.*?):\d+\s+-\s+(.*)$/);
  if (!match) return entry;
  const [, filePath, exportName] = match;
  return `${filePath} - ${exportName}`;
}

const NORMALIZED_ALLOWED_UNUSED_EXPORTS = new Set(
  Array.from(ALLOWED_UNUSED_EXPORTS, (entry) => normalizeUnusedExportEntry(entry))
);

export function parseUnusedExports(tsPruneOutput: string): string[] {
  return tsPruneOutput
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.includes("(used in module)"))
    .sort();
}

export function findUnexpectedUnusedExports(entries: string[]): string[] {
  return entries
    .filter((entry) => !NORMALIZED_ALLOWED_UNUSED_EXPORTS.has(normalizeUnusedExportEntry(entry)))
    .sort();
}

if (import.meta.main) {
  const proc = spawnSync(["bunx", "ts-prune", "-p", "tsconfig.json"], {
    stdout: "pipe",
    stderr: "pipe",
  });

  if (proc.exitCode !== 0) {
    console.error("[unused-exports] ts-prune failed:");
    console.error(proc.stderr.toString());
    process.exit(proc.exitCode ?? 1);
  }

  const entries = parseUnusedExports(proc.stdout.toString());
  const unexpected = findUnexpectedUnusedExports(entries);

  if (unexpected.length > 0) {
    console.error("[unused-exports] unexpected unused exports detected:");
    for (const entry of unexpected) {
      console.error(` - ${entry}`);
    }
    process.exit(1);
  }

  console.log(`[unused-exports] ok (${entries.length} allowlisted entries)`);
}
