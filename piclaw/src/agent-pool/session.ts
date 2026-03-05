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

import { mkdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  type AgentSession,
  createAgentSession,
  DefaultResourceLoader,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../core/config.js";
import { builtinExtensionFactories } from "../extensions/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Bundled extension paths that are loaded when their activation env vars
 * are present.  The files live inside the piclaw package tree so that
 * node_modules resolution (for @mariozechner/pi-ai internals etc.) works.
 */
const OPTIONAL_EXTENSIONS: { path: string; envGate: string }[] = [
  { path: resolve(__dirname, "../../extensions/azure-openai.ts"), envGate: "AOAI_BASE_URL" },
];

function getBundledExtensionPaths(): string[] {
  return OPTIONAL_EXTENSIONS
    .filter(({ envGate }) => !!process.env[envGate])
    .map(({ path }) => path);
}

/** Ensure the session directory exists for a chat and return its path. */
export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

/**
 * Create a fully-configured pi-agent session for the given chat.
 * Loads workspace resources (AGENTS.md, skills, extensions, prompt templates)
 * and resumes the most recent session tree.
 */
export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: unknown[];
  }
): Promise<AgentSession> {
  const chatSessionDir = ensureSessionDir(chatJid);
  const resourceLoader = new DefaultResourceLoader({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    settingsManager: options.settingsManager,
    extensionFactories: builtinExtensionFactories,
    additionalExtensionPaths: getBundledExtensionPaths(),
  });
  await resourceLoader.reload();

  const { session } = await createAgentSession({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    authStorage: options.authStorage,
    modelRegistry: options.modelRegistry,
    settingsManager: options.settingsManager,
    resourceLoader,
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
    tools: options.tools as any,
  });

  return session;
}

/** Replace characters that are unsafe for filesystem paths. */
export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
