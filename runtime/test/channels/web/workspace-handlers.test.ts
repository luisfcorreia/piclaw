import { expect, test } from "bun:test";
import "../../helpers.js";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { handleWorkspaceRaw } from "../../../src/channels/web/handlers/workspace.js";
import { WORKSPACE_DIR } from "../../../src/core/config.js";

function setupWorkspaceFile() {
  const prefix = `workspace-raw-handler-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const base = join(WORKSPACE_DIR, prefix);
  mkdirSync(base, { recursive: true });
  const filePath = join(base, "download me.txt");
  writeFileSync(filePath, "hello\n", "utf8");
  return {
    prefix,
    cleanup: () => rmSync(base, { recursive: true, force: true }),
  };
}

test("handleWorkspaceRaw adds attachment headers when download=1", async () => {
  const { prefix, cleanup } = setupWorkspaceFile();
  try {
    const response = handleWorkspaceRaw(new Request(
      `https://example.com/workspace/raw?path=${encodeURIComponent(`${prefix}/download me.txt`)}&download=1`,
      { method: "GET" },
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Disposition")).toBe('attachment; filename="download me.txt"');
    expect(await response.text()).toBe("hello\n");
  } finally {
    cleanup();
  }
});
