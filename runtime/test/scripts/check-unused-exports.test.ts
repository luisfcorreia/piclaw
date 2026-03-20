import { describe, expect, test } from "bun:test";
import { findUnexpectedUnusedExports, parseUnusedExports } from "../../scripts/check-unused-exports.ts";

describe("check-unused-exports", () => {
  test("parseUnusedExports filters used-in-module noise", () => {
    const output = [
      "src/a.ts:10 - one",
      "src/b.ts:20 - two (used in module)",
      "",
      "src/c.ts:30 - three",
    ].join("\n");

    expect(parseUnusedExports(output)).toEqual(["src/a.ts:10 - one", "src/c.ts:30 - three"]);
  });

  test("findUnexpectedUnusedExports returns only non-allowlisted entries", () => {
    const entries = [
      "src/db.ts:31 - getMediaIdsForMessage",
      "src/something.ts:1 - badExport",
    ];

    expect(findUnexpectedUnusedExports(entries)).toEqual(["src/something.ts:1 - badExport"]);
  });
});
