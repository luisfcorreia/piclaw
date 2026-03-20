import { expect, test } from "bun:test";

import { shouldShowComposeAgentAffordance } from "../../web/src/ui/compose-layout.js";

test("shows compose agent affordance when the footer is wide enough", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 760,
    visibleAgentCount: 2,
    hasContextIndicator: true,
  })).toBe(true);
});

test("hides compose agent affordance when the footer is too narrow", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 540,
    visibleAgentCount: 2,
    hasContextIndicator: true,
  })).toBe(false);
});

test("hides compose agent affordance when there are no visible agents", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 900,
    visibleAgentCount: 0,
    hasContextIndicator: true,
  })).toBe(false);
});
