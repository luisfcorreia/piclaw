/**
 * test/cli-keychain.test.ts – Tests for the CLI keychain sub-command.
 *
 * Exercises `piclaw keychain set/get/list/delete` via handleCliOptions()
 * in a temp workspace, verifying encrypted storage and retrieval.
 */

import { afterAll, expect, test } from "bun:test";
import { createTempWorkspace, setEnv, importFresh } from "./helpers.js";

const ws = createTempWorkspace("piclaw-cli-keychain-");
const restore = setEnv({
  PICLAW_WORKSPACE: ws.workspace,
  PICLAW_STORE: ws.store,
  PICLAW_DATA: ws.data,
  PICLAW_KEYCHAIN_KEY: "cli-key",
});

const { handleCliOptions } = await importFresh<typeof import("../src/cli.js")>("../src/cli.js");
const { getKeychainEntry } = await importFresh<typeof import("../src/secure/keychain.js")>(
  "../src/secure/keychain.js"
);

afterAll(() => {
  restore();
  ws.cleanup();
});

test("cli keychain set and delete", async () => {
  const handledSet = await handleCliOptions([
    "keychain",
    "set",
    "cli/foo/bar",
    "--type",
    "token",
    "--secret",
    "cli-secret",
    "--username",
    "cli-user",
  ]);

  expect(handledSet).toBe(true);
  const entry = await getKeychainEntry("cli/foo/bar");
  expect(entry.secret).toBe("cli-secret");
  expect(entry.username).toBe("cli-user");

  const handledDelete = await handleCliOptions(["keychain", "delete", "cli/foo/bar"]);
  expect(handledDelete).toBe(true);

  await expect(getKeychainEntry("cli/foo/bar")).rejects.toThrow("Keychain entry not found");
});

test("cli keychain list orders entries", async () => {
  await handleCliOptions([
    "keychain",
    "set",
    "cli/zeta",
    "--secret",
    "secret-z",
  ]);
  await handleCliOptions([
    "keychain",
    "set",
    "cli/alpha",
    "--secret",
    "secret-a",
  ]);

  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (...args: any[]) => {
    logs.push(args.map(String).join(" "));
  };

  try {
    await handleCliOptions(["keychain", "list"]);
  } finally {
    console.log = originalLog;
  }

  const output = logs[logs.length - 1] || "[]";
  const entries = JSON.parse(output);
  const names = entries.map((entry: any) => entry.name);
  expect(names).toEqual(["cli/alpha", "cli/zeta"]);
});

test("cli keychain errors when disabled", async () => {
  const restoreDisabled = setEnv({ PICLAW_KEYCHAIN_KEY: undefined, PICLAW_KEYCHAIN_KEY_FILE: undefined });

  const errors: string[] = [];
  const originalError = console.error;
  console.error = (...args: any[]) => {
    errors.push(args.map(String).join(" "));
  };

  try {
    const handled = await handleCliOptions(["keychain", "get", "cli/alpha"]);
    expect(handled).toBe(true);
  } finally {
    console.error = originalError;
    restoreDisabled();
  }

  expect(errors.some((line) => line.includes("Keychain is disabled"))).toBe(true);
});
