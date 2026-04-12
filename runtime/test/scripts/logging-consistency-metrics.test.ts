import { expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

import { getLoggingConsistencyMetrics } from "../../scripts/logging-consistency-metrics.ts";

function writeFile(root: string, relPath: string, content: string): void {
  const full = join(root, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

test("logging consistency metrics count missing operation, missing err, and direct suppressed debug sites", () => {
  const root = mkdtempSync(join(tmpdir(), "logging-consistency-"));

  writeFile(root, "runtime/src/a.ts", `
    const err = new Error("boom");
    log.warn("missing operation", { err });
    try { risky(); } catch (error) { log.error("caught but missing err", { operation: "demo.fail", cause: error }); }
    log.debug("suppressed fallback", { suppressed: true, err, operation: "demo.debug" });
    debugSuppressedError(log, "ok", err, { operation: "demo.ok" });
    log.error("good", { err, operation: "demo.good" });
  `);

  const metrics = getLoggingConsistencyMetrics([join(root, "runtime/src")]);
  expect(metrics.warnErrorWithoutOperation).toBe(1);
  expect(metrics.caughtWarnErrorWithoutErr).toBe(1);
  expect(metrics.directSuppressedDebugSites).toBe(1);
  expect(metrics.inconsistentLoggingSites).toBe(3);
});
