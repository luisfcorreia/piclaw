import { expect, test } from "bun:test";

import {
  inspectBlankTurnSessionDelta,
  isBlankTurnSessionDelta,
  snapshotSessionEntryCount,
} from "../../src/agent-pool/blank-turn-detection.js";

test("snapshotSessionEntryCount returns null when session entries are unavailable", () => {
  expect(snapshotSessionEntryCount({})).toBeNull();
  expect(snapshotSessionEntryCount({ sessionManager: {} })).toBeNull();
});

test("detects blank-turn session deltas that append only user messages", () => {
  const entries = [
    { type: "message", message: { role: "user" } },
    { type: "message", message: { role: "assistant" } },
    { type: "message", message: { role: "user" } },
    { type: "message", message: { role: "user" } },
  ];
  const session = {
    sessionManager: {
      getEntries: () => entries,
    },
  };

  const baseline = 2;
  const delta = inspectBlankTurnSessionDelta(session, baseline);

  expect(delta).not.toBeNull();
  expect(delta?.appendedEntryCount).toBe(2);
  expect(delta?.appendedUserMessageCount).toBe(2);
  expect(delta?.appendedAssistantMessageCount).toBe(0);
  expect(delta?.appendedToolResultMessageCount).toBe(0);
  expect(delta?.latestAppendedRole).toBe("user");
  expect(isBlankTurnSessionDelta(delta)).toBe(true);
});

test("does not flag deltas that include an assistant reply", () => {
  const session = {
    sessionManager: {
      getEntries: () => [
        { type: "message", message: { role: "user" } },
        { type: "message", message: { role: "assistant" } },
      ],
    },
  };

  const delta = inspectBlankTurnSessionDelta(session, 1);
  expect(delta?.appendedUserMessageCount).toBe(0);
  expect(delta?.appendedAssistantMessageCount).toBe(1);
  expect(isBlankTurnSessionDelta(delta)).toBe(false);
});

test("does not flag deltas that include tool results", () => {
  const session = {
    sessionManager: {
      getEntries: () => [
        { type: "message", message: { role: "user" } },
        { type: "message", message: { role: "toolResult" } },
      ],
    },
  };

  const delta = inspectBlankTurnSessionDelta(session, 0);
  expect(delta?.appendedUserMessageCount).toBe(1);
  expect(delta?.appendedToolResultMessageCount).toBe(1);
  expect(isBlankTurnSessionDelta(delta)).toBe(false);
});
