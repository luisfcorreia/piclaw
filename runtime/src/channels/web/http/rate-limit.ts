/**
 * web/http/rate-limit.ts – Sliding-window request rate limiter for web routes.
 */

import { getClientKey } from "./client.js";

const RATE_PRUNE_INTERVAL_MS = 10 * 60 * 1000;

const rateBuckets = new Map<string, number[]>();
let lastRatePrune = Date.now();
let maxWindowSeenMs = 0;

function pruneRateBuckets(now: number): void {
  if (now - lastRatePrune < RATE_PRUNE_INTERVAL_MS) return;
  lastRatePrune = now;

  const cutoff = now - Math.max(maxWindowSeenMs, 1);
  for (const [key, entries] of rateBuckets.entries()) {
    const live = entries.filter((ts) => ts > cutoff);
    if (live.length === 0) {
      rateBuckets.delete(key);
    } else {
      rateBuckets.set(key, live);
    }
  }
}

/** Core rate-limit check using an explicit client key (test-friendly). */
export function isRateLimitedForClient(
  clientKey: string,
  bucket: string,
  windowMs: number,
  limit: number,
  now = Date.now()
): boolean {
  maxWindowSeenMs = Math.max(maxWindowSeenMs, windowMs);
  pruneRateBuckets(now);

  const key = `${clientKey}:${bucket}`;
  const cutoff = now - windowMs;
  const entries = rateBuckets.get(key) || [];
  const trimmed = entries.filter((ts) => ts > cutoff);
  trimmed.push(now);
  rateBuckets.set(key, trimmed);
  return trimmed.length > limit;
}

/** Request-scoped rate-limit helper used by web request routing. */
export function isRateLimited(req: Request, bucket: string, windowMs: number, limit: number): boolean {
  return isRateLimitedForClient(getClientKey(req), bucket, windowMs, limit);
}

/** Test helper: clear in-memory limiter state. */
export function resetRateLimiterStateForTests(): void {
  rateBuckets.clear();
  lastRatePrune = Date.now();
  maxWindowSeenMs = 0;
}
