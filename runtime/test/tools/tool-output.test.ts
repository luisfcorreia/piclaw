/**
 * test/tools/tool-output.test.ts – Tests for tool output persistence.
 *
 * Verifies writeToolOutput() stores files to disk and records metadata
 * in the database, and that outputs are retrievable by ID.
 */

import { expect, test, afterEach } from "bun:test";
import { existsSync } from "fs";
import { getTestWorkspace, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("save and search tool output", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../../src/db.js");
  db.initDatabase();

  const toolOutput = await import("../../src/tool-output.js");
  const text = "hello world\nthis is a test\nsearchable content";
  const saved = toolOutput.saveToolOutput(text, { source: "test" });

  expect(existsSync(saved.path)).toBe(true);
  expect(saved.lineCount).toBe(3);

  const snippets = toolOutput.searchToolOutput(saved.id, "searchable", 5);
  expect(snippets.length).toBeGreaterThan(0);

  const none = toolOutput.searchToolOutput(saved.id, "missingword", 5);
  expect(none.length).toBe(0);

  const empty = toolOutput.searchToolOutput(saved.id, "", 5);
  expect(empty.length).toBe(0);
});

test("prune removes old outputs and their FTS rows", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await import("../../src/db.js");
  db.initDatabase();

  const toolOutput = await import("../../src/tool-output.js");
  const oldDate = new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString();
  const saved = toolOutput.saveToolOutput("old output with searchable marker", { createdAt: oldDate });
  expect(existsSync(saved.path)).toBe(true);
  expect(toolOutput.searchToolOutput(saved.id, "marker", 5).length).toBeGreaterThan(0);

  const removed = toolOutput.pruneToolOutputs(4 * 60 * 60 * 1000);
  expect(removed).toBeGreaterThan(0);
  expect(existsSync(saved.path)).toBe(false);
  expect(toolOutput.searchToolOutput(saved.id, "marker", 5)).toEqual([]);
});

test("chunkText hard-splits long lines at the configured chunk size", async () => {
  const toolOutput = await import("../../src/tool-output.js");
  const text = `prefix-${"x".repeat(12)}-suffix`;

  const chunks = toolOutput.chunkText(text, 8);

  expect(chunks).toEqual([
    "prefix-x",
    "xxxxxxxx",
    "xxx-suff",
    "ix",
  ]);
  expect(Math.max(...chunks.map((chunk: string) => chunk.length))).toBe(8);
  expect(chunks.join("")).toBe(text);
});

test("chunkText preserves newline separators, including a trailing newline", async () => {
  const toolOutput = await import("../../src/tool-output.js");
  const text = "alpha\nbeta\n";

  const chunks = toolOutput.chunkText(text, 7);

  expect(chunks).toEqual(["alpha\n", "beta\n"]);
  expect(chunks.join("")).toBe(text);
});
