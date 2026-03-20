/**
 * execute-concurrency.test.ts – Unit tests for remote execute admission tracking.
 */

import { describe, expect, test } from "bun:test";
import { RemoteExecuteConcurrency } from "../../src/remote/execute-concurrency.js";

describe("remote execute concurrency tracker", () => {
  test("enforces max total and max per-peer limits", () => {
    const tracker = new RemoteExecuteConcurrency(2, 1);

    expect(tracker.isAtLimit("peer-a")).toBeFalse();
    tracker.acquire("peer-a");

    expect(tracker.isAtLimit("peer-a")).toBeTrue();
    expect(tracker.isAtLimit("peer-b")).toBeFalse();

    tracker.acquire("peer-b");

    expect(tracker.isAtLimit("peer-a")).toBeTrue();
    expect(tracker.isAtLimit("peer-b")).toBeTrue();
    expect(tracker.isAtLimit("peer-c")).toBeTrue();
  });

  test("release clears counters and tolerates extra release calls", () => {
    const tracker = new RemoteExecuteConcurrency(3, 2);

    tracker.acquire("peer-a");
    tracker.acquire("peer-a");
    expect(tracker.isAtLimit("peer-a")).toBeTrue();

    tracker.release("peer-a");
    expect(tracker.isAtLimit("peer-a")).toBeFalse();

    tracker.release("peer-a");
    tracker.release("peer-a");
    expect(tracker.isAtLimit("peer-a")).toBeFalse();
  });
});
