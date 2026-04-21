/**
 * test/channels/web/post-link-preview-content.test.ts
 *
 * Regression test: message text must remain unchanged when OpenGraph link
 * previews exist. We render preview cards in addition to user text, not instead
 * of URL text.
 */

import { expect, test } from "bun:test";
import "../../helpers.js";
import { buildLinkPreviewBackgroundStyle, extractRecoveryMarkerBlocks, formatRecoveryChipTooltip, getDisplayContent } from "../../../web/src/components/post.ts";

test("getDisplayContent keeps URL text when previews are present", () => {
  const content = "Check this out: https://example.com/article";
  const previews = [
    {
      url: "https://example.com/article",
      title: "Example Article",
    },
  ];

  expect(getDisplayContent(content, previews)).toBe(content);
});

test("getDisplayContent preserves exact formatting (no trim/removal)", () => {
  const content = "https://example.com   \n\n";
  const previews = [{ url: "https://example.com" }];

  expect(getDisplayContent(content, previews)).toBe(content);
});

test("getDisplayContent returns empty string for non-string content", () => {
  expect(getDisplayContent(null as any, [])).toBe("");
  expect(getDisplayContent(undefined as any, [])).toBe("");
});

test("buildLinkPreviewBackgroundStyle keeps image URLs confined to backgroundImage", () => {
  const style = buildLinkPreviewBackgroundStyle("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>');color:red;/*");

  expect(style).toEqual({
    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>');color:red;/*")`,
  });

  if (typeof document !== "undefined") {
    const node = document.createElement("a");
    for (const [name, value] of Object.entries(style || {})) {
      (node.style as any)[name] = value;
    }
    expect(node.style.color).toBe("");
  }
});

test("extractRecoveryMarkerBlocks keeps only recovered recovery markers", () => {
  expect(extractRecoveryMarkerBlocks([
    { type: "recovery_marker", recovered: true, attempts_used: 2 },
    { type: "recovery_marker", recovered: false, attempts_used: 1 },
    { type: "text", text: "hello" },
  ])).toEqual([
    { type: "recovery_marker", recovered: true, attempts_used: 2 },
  ]);
});

test("formatRecoveryChipTooltip describes attempts and classifier", () => {
  expect(formatRecoveryChipTooltip({ attempts_used: 1, classifier: "context_recover" })).toBe("Recovered automatically — context limit exceeded");
  expect(formatRecoveryChipTooltip({ attempts_used: 3, classifier: "api_error" })).toBe("Recovered after 3 attempts — API error");
  expect(formatRecoveryChipTooltip({ attempts_used: 2, classifier: "custom_classifier" })).toBe("Recovered after 2 attempts — custom classifier");
});
