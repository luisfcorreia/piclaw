import { describe, expect, test } from "bun:test";
import {
  buildTreeNavigationPayload,
  describeSessionTreeHostUpdate,
  parseTreeNavigationCommand,
  resolveTreeSelectionId,
} from "../../web/src/components/session-tree-widget.js";

describe("session tree widget helpers", () => {
  test("buildTreeNavigationPayload keeps the tree pane open while submitting", () => {
    expect(buildTreeNavigationPayload("entry-1", false)).toEqual({
      text: "/tree entry-1",
      navigateTargetId: "entry-1",
      summarize: false,
    });

    expect(buildTreeNavigationPayload("entry-1", true)).toEqual({
      text: "/tree entry-1 --summarize",
      navigateTargetId: "entry-1",
      summarize: true,
    });
  });

  test("parseTreeNavigationCommand extracts target and summarize flag", () => {
    expect(parseTreeNavigationCommand("/tree entry-1")).toEqual({ targetId: "entry-1", summarize: false });
    expect(parseTreeNavigationCommand("/tree entry-2 --summarize")).toEqual({ targetId: "entry-2", summarize: true });
    expect(parseTreeNavigationCommand("/tree --summarize")).toBeNull();
    expect(parseTreeNavigationCommand("/model gpt-5")).toBeNull();
  });

  test("resolveTreeSelectionId prefers current selection, then preferred target, then active leaf", () => {
    const rows = [
      { id: "root", active: false },
      { id: "branch-a", active: false },
      { id: "branch-b", active: true },
    ];

    expect(resolveTreeSelectionId(rows, "branch-a", "branch-b", "branch-b")).toBe("branch-a");
    expect(resolveTreeSelectionId(rows, "missing", "branch-a", "branch-b")).toBe("branch-a");
    expect(resolveTreeSelectionId(rows, null, "missing", "branch-b")).toBe("branch-b");
    expect(resolveTreeSelectionId(rows, null, null, null)).toBe("branch-b");
    expect(resolveTreeSelectionId([], null, null, null)).toBeNull();
  });

  test("describeSessionTreeHostUpdate schedules refreshes for sent and queued tree commands", () => {
    expect(describeSessionTreeHostUpdate({
      type: "submit_sent",
      preview: "/tree entry-1 --summarize",
    })).toEqual({
      tone: "info",
      text: "Running /tree entry-1 --summarize",
      refreshDelays: [500, 1500, 3500, 8000],
    });

    expect(describeSessionTreeHostUpdate({
      type: "submit_queued",
      preview: "/tree entry-2",
    })).toEqual({
      tone: "info",
      text: "Queued /tree entry-2",
      refreshDelays: [1200, 3200, 7000, 12000],
    });

    expect(describeSessionTreeHostUpdate({
      type: "submit_failed",
      error: "boom",
    })).toEqual({
      tone: "error",
      text: "Tree command failed: boom",
      refreshDelays: [],
    });
  });
});
