import { expect, test } from "bun:test";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { writeAgentLog } from "../../src/agent-pool/logging.js";

test("writeAgentLog writes a timestamped agent log file", () => {
  const logsDir = mkdtempSync(join(tmpdir(), "piclaw-agent-log-"));

  try {
    writeAgentLog(logsDir, "chat:test", 1234, false, "hello world", null);

    const files = readdirSync(logsDir);
    expect(files).toHaveLength(1);
    expect(files[0]).toStartWith("agent-");
    const content = readFileSync(join(logsDir, files[0]!), "utf-8");
    expect(content).toContain("Chat: chat:test");
    expect(content).toContain("Duration: 1234ms");
    expect(content).toContain("hello world");
  } finally {
    rmSync(logsDir, { recursive: true, force: true });
  }
});

test("writeAgentLog suppresses write failures", () => {
  const missingDir = join(tmpdir(), `piclaw-agent-log-missing-${Date.now().toString(36)}`);
  expect(() => writeAgentLog(missingDir, "chat:test", 50, true, null, "boom")).not.toThrow();
});
