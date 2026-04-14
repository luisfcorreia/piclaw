import { expect, test } from "bun:test";
import "../../helpers.js";
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { handleWorkspaceRaw } from "../../../src/channels/web/handlers/workspace.js";
import { WORKSPACE_DIR } from "../../../src/core/config.js";

function setupWorkspaceFile(filename = "download me.txt", content = "hello\n") {
  const prefix = `workspace-raw-handler-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const base = join(WORKSPACE_DIR, prefix);
  mkdirSync(base, { recursive: true });
  const filePath = join(base, filename);
  writeFileSync(filePath, content, "utf8");
  return {
    prefix,
    filename,
    cleanup: () => rmSync(base, { recursive: true, force: true }),
  };
}

test("handleWorkspaceRaw adds attachment headers when download=1", async () => {
  const { prefix, filename, cleanup } = setupWorkspaceFile();
  try {
    const response = handleWorkspaceRaw(new Request(
      `https://example.com/workspace/raw?path=${encodeURIComponent(`${prefix}/${filename}`)}&download=1`,
      { method: "GET" },
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Disposition")).toBe(`attachment; filename="${filename}"`);
    expect(await response.text()).toBe("hello\n");
  } finally {
    cleanup();
  }
});

test("handleWorkspaceRaw allows inline HTML styling and scripts for workspace HTML previews", async () => {
  const { prefix, filename, cleanup } = setupWorkspaceFile(
    "styled-preview.html",
    '<!doctype html><html><head><style>body{background:#123;color:#fff}</style></head><body><script>window.__ok=1</script><h1>Styled</h1></body></html>',
  );
  try {
    const response = handleWorkspaceRaw(new Request(
      `https://example.com/workspace/raw?path=${encodeURIComponent(`${prefix}/${filename}`)}`,
      { method: "GET" },
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/html");
    expect(response.headers.get("Content-Security-Policy")).toContain("script-src 'self' 'unsafe-inline'");
    expect(response.headers.get("Content-Security-Policy")).toContain("style-src 'self' 'unsafe-inline'");
    expect(await response.text()).toContain("Styled");
  } finally {
    cleanup();
  }
});
