#!/usr/bin/env bun
/**
 * index.ts – Application entry point.
 *
 * Checks for CLI sub-commands (keychain, --help, --version) first.
 * If none match, starts the full runtime (database, channels, agent pool,
 * IPC watcher, task scheduler, and web server).
 */

import { handleCliOptions } from "./cli.js";
import { main } from "./runtime.js";

const handled = await handleCliOptions();
if (handled) {
  process.exit(0);
}

main().catch((err) => {
  console.error("[piclaw] Fatal:", err);
  process.exit(1);
});
