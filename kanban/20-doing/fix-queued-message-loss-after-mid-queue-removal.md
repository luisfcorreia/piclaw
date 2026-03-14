---
id: fix-queued-message-loss-after-mid-queue-removal
title: Fix queued message loss after mid-queue removal
status: doing
priority: high
created: 2026-03-13
updated: 2026-03-14
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - web
  - queue
  - bug
  - recovery
owner: pi
---

# Fix queued message loss after mid-queue removal

## Summary

There is a queue corruption / desynchronization bug in the web channel.

Observed symptoms during a live session:

- a queued item was processed by the backend but did **not** disappear from the web UI queue stack
- subsequent messages that should have queued were instead persisted immediately as normal user turns
- a later message appears to have been dropped entirely (neither queued nor persisted)

The user's current suspicion is that this started immediately after deleting an
item from the middle of the queue in the web UI, which may have corrupted
server-side deferred queue ordering/state and/or client reconciliation.
That observed UI action is the primary reproduction lead and should be treated
as a first-class part of the bug description until disproven.

## Acceptance Criteria

- [ ] Removing a queued item from the middle of the queue does not corrupt server-side queue ordering or UI queue state.
- [ ] Queued messages remain strict FIFO follow-ups and are never processed out of turn while an earlier active turn is still running.
- [ ] The only way a queued item may affect the active turn before its turn arrives is if the user explicitly converts that item into steering.
- [ ] When a queued item is consumed/processed, it disappears from the web UI queue stack promptly and exactly once.
- [ ] Subsequent queue submissions during an active turn are either:
  - successfully enqueued, or
  - intentionally persisted as normal turns when the backend is no longer streaming,
  but are never silently dropped.
- [ ] A message cannot be simultaneously absent from both the queue state and the persisted timeline after submit.
- [ ] Fixture coverage reproduces the remove-middle-queue scenario and proves no message loss / stale UI item remains.

## Implementation Paths

### Path A — Audit and harden server-side deferred queue mutation semantics

Treat server queue mutation as the source of truth and verify that all queue
operations preserve a consistent list when removing an item from the middle,
consuming the head, or re-prepending on failure.

Focus areas:

- deferred queue persistence in `chat_cursors.queued_followups_json`
- `removeQueuedFollowupForAction(...)`
- queue-state SSE/UI sync after remove/consume
- interactions between queued follow-up removal and active turn drain

Pros:
- attacks the most likely source of corruption directly
- keeps current architecture intact

Cons:
- requires careful audit of multiple queue mutation paths

### Path B — Add stronger queue versioning / reconciliation

Add an explicit queue version or sequence number so the client can reconcile
stale queue UI state after remove/consume operations.

Pros:
- stronger UI/server convergence guarantees
- easier to reason about after reconnect or rapid changes

Cons:
- larger protocol surface area
- may be unnecessary if the core server mutation bug is fixed cleanly

## Test Plan

- [ ] Add/extend `piclaw/test/channels/web/web-channel.test.ts`
  - enqueue multiple deferred items
  - remove a middle item
  - continue draining queue
  - assert remaining items preserve order and UI-visible queue state matches server state
- [ ] Add a regression for “processed queue item remains visible in UI” via queue-state / SSE behavior.
- [ ] Add a regression proving later queued submissions are not lost after a prior remove.
- [ ] Run `bun run quality`.
- [ ] Perform a runtime verification without injecting synthetic probe traffic beyond normal user submissions.

## Definition of Done

- [ ] Root cause confirmed in code/tests, not only inferred from symptoms
- [ ] Mid-queue removal regression test added
- [ ] No stale processed queue items remain visible in the queue UI
- [ ] No queued submissions are dropped after queue removal/reordering
- [ ] `bun run quality` passes
- [ ] Ticket moved to `50-done/` only after runtime evidence matches server queue state and DB rows

## Updates

### 2026-03-14
- Lane: `next` → `doing` per explicit user instruction, even though this takes the doing lane above the preferred WIP limit.
- The ticket remains focused on queue corruption/desynchronization after deleting an item from the middle of the queue in the web UI.
- Evidence: live queue/DB observations already captured in this ticket; paired follow-up ticket also moved to `doing`.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-13
- Lane: `next` (new follow-up bug discovered during live queue validation).
- Live evidence observed during the `web:default` session:
  - queued item remained visible in the web UI after backend processing
  - `commit and reload` was expected to queue but was instead persisted immediately as row `7701`
  - `cleanup /workspace/tmp files older than 24h` was expected to queue but was instead persisted immediately as row `7705`
  - `cleanup /workspace/tmp and remove all files older than 24h` appeared to be neither queued nor persisted
- Product invariant clarified by the user: queued messages must never be processed out of turn unless they are explicitly converted to steering.
- Current user suspicion: deleting an item from the middle of the queue in the web UI may have triggered the corruption/desync, and that UI action should be treated as part of the reproduction scenario.
- Evidence references:
  - user request to file bug: message `7706`
  - prior diagnosis: message `7704`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

## Notes

- This may be a separate bug from the active/inactive streaming-state mismatch that causes intended queue submissions to persist immediately.
- It may also share a root cause with queue stack UI desynchronization after remove/consume operations.
- Do not assume the user's suspicion is the sole cause until a fixture reproduces it.

## Links

- `kanban/10-next/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `piclaw/src/channels/web.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/channels/web/followup-placeholders.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
