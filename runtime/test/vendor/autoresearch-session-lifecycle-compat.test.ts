import { expect, test } from "bun:test";
import { readFileSync } from "fs";
import { resolve } from "path";

test("vendored pi-autoresearch uses current Pi session lifecycle events", () => {
  const source = readFileSync(
    resolve(import.meta.dir, "../../vendor/autoresearch/extensions/pi-autoresearch/index.ts"),
    "utf8",
  );

  expect(source).toContain('pi.on("session_start"');
  expect(source).toContain('pi.on("session_before_fork"');
  expect(source).not.toContain('pi.on("session_switch"');
  expect(source).not.toContain('pi.on("session_fork"');
});
