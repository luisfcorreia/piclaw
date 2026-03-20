import { afterEach, describe, expect, test } from "bun:test";
import {
  isRateLimitedForClient,
  resetRateLimiterStateForTests,
} from "../../../src/channels/web/http/rate-limit.js";

afterEach(() => {
  resetRateLimiterStateForTests();
});

describe("web http rate-limit", () => {
  test("allows up to limit and blocks next request", () => {
    const now = 1_000_000;
    expect(isRateLimitedForClient("ip1", "bucket", 60_000, 2, now)).toBe(false);
    expect(isRateLimitedForClient("ip1", "bucket", 60_000, 2, now + 1)).toBe(false);
    expect(isRateLimitedForClient("ip1", "bucket", 60_000, 2, now + 2)).toBe(true);
  });

  test("separates different buckets", () => {
    const now = 2_000_000;
    expect(isRateLimitedForClient("ip1", "a", 60_000, 1, now)).toBe(false);
    expect(isRateLimitedForClient("ip1", "a", 60_000, 1, now + 1)).toBe(true);

    expect(isRateLimitedForClient("ip1", "b", 60_000, 1, now + 2)).toBe(false);
  });

  test("window expiry clears old entries", () => {
    const start = 3_000_000;
    expect(isRateLimitedForClient("ip1", "bucket", 100, 1, start)).toBe(false);
    expect(isRateLimitedForClient("ip1", "bucket", 100, 1, start + 50)).toBe(true);
    expect(isRateLimitedForClient("ip1", "bucket", 100, 1, start + 150)).toBe(false);
  });
});
