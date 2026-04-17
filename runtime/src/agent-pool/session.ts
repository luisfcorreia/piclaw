/**
 * agent-pool/session.ts – pi-agent session creation and directory management.
 *
 * Handles the setup of per-chat agent sessions:
 *   - Creates the session directory under SESSIONS_DIR for each chat JID.
 *   - Configures the resource loader with workspace extensions and skills.
 *   - Uses SessionManager.continueRecent() to resume from the most recent
 *     session tree leaf (conversation context persistence).
 *
 * Consumers:
 *   - agent-pool.ts calls createDefaultSession() to initialise or replace
 *     the agent session for a chat.
 *   - ensureSessionDir() is also used by agent-control/handlers/session.ts.
 */

import { mkdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  type AgentSessionRuntime,
  type CreateAgentSessionRuntimeFactory,
  type ExtensionFactory,
  createAgentSessionFromServices,
  createAgentSessionRuntime,
  createAgentSessionServices,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../core/config.js";
import { buildChannelSystemPromptAppendix } from "../channels/formatting.js";
import { detectChannel } from "../router.js";
import { builtinExtensionFactories } from "../extensions/index.js";
import { bindImmediateToolActivation } from "./tool-activation-live-update.js";
import { ensureExtensionNodeModulesLink } from "./session-node-modules-link.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const AGENT_DIR = getAgentDir();
const EMPTY_STRING_ARRAY: string[] = [];
const BUNDLED_EXTENSION_PATHS_CACHE = new Map<string, string[]>();
const CHANNEL_SYSTEM_PROMPT_APPENDIX_CACHE = new Map<string, string>();
const APPEND_SYSTEM_PROMPT_OVERRIDE_CACHE = new Map<string, (base: string[]) => string[]>();
let cachedExtensionNodeModulesDir: string | null | undefined;
let ensuredExtensionNodeModulesLinkTarget: string | null | undefined;

type AgentSessionCreateOptions = {
  tools: NonNullable<NonNullable<Parameters<typeof createAgentSessionFromServices>[0]>["tools"]>;
  extensionFactories?: ExtensionFactory[];
};

/**
 * Bundled extension paths that are loaded when their activation env vars
 * are present.  The files live inside the piclaw package tree so that
 * node_modules resolution (for @mariozechner/pi-ai internals etc.) works.
 *
 * Because bun may hoist dependencies, we create a node_modules symlink
 * next to the extensions directory pointing to the nearest real
 * node_modules so that jiti's fallback resolution finds packages like
 * @mariozechner/pi-ai/dist/providers/*.
 */
const EXTENSIONS_DIR = resolve(__dirname, "../../extensions");

type OptionalBundledExtension = {
  path: string;
  envGate?: string;
  platforms?: NodeJS.Platform[];
  channels?: string[];
};

const OPTIONAL_EXTENSIONS: OptionalBundledExtension[] = [
  { path: resolve(EXTENSIONS_DIR, "integrations", "azure-openai.ts"), envGate: "AOAI_BASE_URL" },
  { path: resolve(EXTENSIONS_DIR, "integrations", "context-mode.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "bun-runner", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "keychain", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "ssh", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "proxmox", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "portainer", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "integrations", "mcp-status-hints", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "browser", "cdp-browser", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "platform", "windows", "powershell", "index.ts"), platforms: ["win32"] },
  { path: resolve(EXTENSIONS_DIR, "platform", "windows", "win-ui", "index.ts"), platforms: ["win32"] },
  { path: resolve(EXTENSIONS_DIR, "viewers", "office-viewer", "index.ts"), channels: ["web"] },
  { path: resolve(EXTENSIONS_DIR, "integrations", "office-tools", "index.ts") },
  { path: resolve(EXTENSIONS_DIR, "viewers", "drawio-editor", "index.ts"), channels: ["web"] },
  { path: resolve(EXTENSIONS_DIR, "experimental", "m365", "index.ts"), envGate: "PICLAW_ENABLE_M365_EXPERIMENTAL" },
];

const PACKAGED_EXTENSION_ENTRIES = [
  { packageName: "pi-mcp-adapter", entry: "index.ts" },
] as const;

function getBundledExtensionEnvSignature(chatJid?: string): string {
  const channel = chatJid ? detectChannel(chatJid) ?? "" : "";
  return [
    `platform=${process.platform}`,
    `channel=${channel}`,
    ...OPTIONAL_EXTENSIONS.map(({ envGate, platforms, channels }) => {
      const envPart = envGate ? `${envGate}=${process.env[envGate] ? "1" : "0"}` : "always=1";
      const platformPart = platforms?.length ? `platforms=${platforms.join(",")}` : "platforms=all";
      const channelPart = channels?.length ? `channels=${channels.join(",")}` : "channels=all";
      return `${envPart};${platformPart};${channelPart}`;
    }),
  ].join("|");
}

/** Walk up from startDir looking for a node_modules that contains @mariozechner/pi-ai. */
function findNodeModules(startDir: string): string | null {
  let dir = startDir;
  for (let i = 0; i < 10; i++) {
    const candidate = join(dir, "node_modules");
    if (existsSync(join(candidate, "@mariozechner", "pi-ai"))) return candidate;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function resolvePackagedExtensionEntries(nodeModulesDir: string | null): string[] {
  if (!nodeModulesDir) return EMPTY_STRING_ARRAY;

  const resolved: string[] = [];
  for (const candidate of PACKAGED_EXTENSION_ENTRIES) {
    const entryPath = join(nodeModulesDir, candidate.packageName, candidate.entry);
    if (existsSync(entryPath)) {
      resolved.push(entryPath);
    }
  }
  return resolved;
}

function getExtensionNodeModulesDir(): string | null {
  if (cachedExtensionNodeModulesDir !== undefined) {
    return cachedExtensionNodeModulesDir;
  }
  cachedExtensionNodeModulesDir = findNodeModules(EXTENSIONS_DIR);
  return cachedExtensionNodeModulesDir;
}

function ensureBundledExtensionNodeModulesLink(nodeModulesDir: string | null): void {
  if (!nodeModulesDir) return;
  if (ensuredExtensionNodeModulesLinkTarget === nodeModulesDir) return;
  ensureExtensionNodeModulesLink(EXTENSIONS_DIR, nodeModulesDir);
  ensuredExtensionNodeModulesLinkTarget = nodeModulesDir;
}

function getBundledExtensionPaths(chatJid?: string): string[] {
  const cacheKey = getBundledExtensionEnvSignature(chatJid);
  const cached = BUNDLED_EXTENSION_PATHS_CACHE.get(cacheKey);
  if (cached) return cached;

  const channel = chatJid ? detectChannel(chatJid) : undefined;
  const nodeModulesDir = getExtensionNodeModulesDir();
  const paths = OPTIONAL_EXTENSIONS
    .filter(({ envGate }) => !envGate || !!process.env[envGate])
    .filter(({ platforms }) => !platforms || platforms.includes(process.platform))
    .filter(({ channels }) => !channels || !!channel && channels.includes(channel))
    .map(({ path }) => path);
  paths.push(...resolvePackagedExtensionEntries(nodeModulesDir));
  if (paths.length === 0) {
    BUNDLED_EXTENSION_PATHS_CACHE.set(cacheKey, EMPTY_STRING_ARRAY);
    return EMPTY_STRING_ARRAY;
  }

  // Ensure a node_modules symlink exists next to the extensions dir
  // so jiti can resolve deep package imports.
  ensureBundledExtensionNodeModulesLink(nodeModulesDir);
  BUNDLED_EXTENSION_PATHS_CACHE.set(cacheKey, paths);
  return paths;
}

function getChannelSystemPromptAppendix(chatJid?: string): string {
  const channel = chatJid ? detectChannel(chatJid) : undefined;
  const cacheKey = channel ?? "";
  const cached = CHANNEL_SYSTEM_PROMPT_APPENDIX_CACHE.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }
  const appendix = buildChannelSystemPromptAppendix(channel) ?? "";
  CHANNEL_SYSTEM_PROMPT_APPENDIX_CACHE.set(cacheKey, appendix);
  return appendix;
}

function getAppendSystemPromptOverride(channelSystemPromptAppendix: string): ((base: string[]) => string[]) | undefined {
  if (!channelSystemPromptAppendix) return undefined;
  const cached = APPEND_SYSTEM_PROMPT_OVERRIDE_CACHE.get(channelSystemPromptAppendix);
  if (cached) return cached;
  const appendOverride = (base: string[]) => [...base, channelSystemPromptAppendix];
  APPEND_SYSTEM_PROMPT_OVERRIDE_CACHE.set(channelSystemPromptAppendix, appendOverride);
  return appendOverride;
}

/** Ensure the session directory exists for a chat and return its path. */
export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

/** Ensure a named auxiliary session directory exists for a chat and return its path. */
export function ensureNamedSessionDir(chatJid: string, name: string): string {
  const dir = join(SESSIONS_DIR, `${sanitiseJid(chatJid)}__${sanitiseJid(name)}`);
  mkdirSync(dir, { recursive: true });
  return dir;
}

/**
 * Create a fully-configured pi-agent session for the given chat.
 * Loads workspace resources (AGENTS.md, skills, extensions, prompt templates)
 * and resumes the most recent session tree.
 */
export async function createSessionInDir(
  sessionDir: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    customTools?: unknown[];
    extensionFactories?: ExtensionFactory[];
    chatJid?: string;
  }
): Promise<AgentSessionRuntime> {
  const channelSystemPromptAppendix = getChannelSystemPromptAppendix(options.chatJid);
  const appendSystemPromptOverride = getAppendSystemPromptOverride(channelSystemPromptAppendix);
  const additionalExtensionPaths = getBundledExtensionPaths(options.chatJid);

  const createRuntime: CreateAgentSessionRuntimeFactory = async ({ cwd, sessionManager, sessionStartEvent }) => {
    const services = await createAgentSessionServices({
      cwd,
      agentDir: AGENT_DIR,
      authStorage: options.authStorage,
      modelRegistry: options.modelRegistry,
      settingsManager: options.settingsManager,
      resourceLoaderOptions: {
        extensionFactories: options.extensionFactories?.length
          ? [...builtinExtensionFactories, ...options.extensionFactories]
          : builtinExtensionFactories,
        additionalExtensionPaths,
        ...(appendSystemPromptOverride ? { appendSystemPromptOverride } : {}),
      },
    });

    return {
      ...(await createAgentSessionFromServices({
        services,
        sessionManager,
        sessionStartEvent,
        tools: options.tools,
        customTools: options.customTools as any,
      })),
      services,
      diagnostics: services.diagnostics,
    };
  };

  const runtime = await createAgentSessionRuntime(createRuntime, {
    cwd: WORKSPACE_DIR,
    agentDir: AGENT_DIR,
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, sessionDir),
  });

  bindImmediateToolActivation(runtime.session as any);
  return runtime;
}

export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    customTools?: unknown[];
    extensionFactories?: ExtensionFactory[];
  }
): Promise<AgentSessionRuntime> {
  const chatSessionDir = ensureSessionDir(chatJid);
  return createSessionInDir(chatSessionDir, {
    ...options,
    chatJid,
  });
}

/**
 * Prime lightweight per-chat startup caches without creating a live runtime.
 * This keeps recent-chat background prewarm cheap while still front-loading
 * deterministic filesystem and extension-resolution work.
 */
export async function lightweightPrewarmSession(
  chatJid: string,
  options: {
    getSessionExtensionFactories?: (chatJid: string) => Promise<ExtensionFactory[]>;
  } = {},
): Promise<void> {
  ensureSessionDir(chatJid);
  const appendix = getChannelSystemPromptAppendix(chatJid);
  void getAppendSystemPromptOverride(appendix);
  void getBundledExtensionPaths(chatJid);
  await options.getSessionExtensionFactories?.(chatJid);
}

/** Replace characters that are unsafe for filesystem paths. */
export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
