---
id: add-next-wake-alarm-coordinator-and-scheduler-bridge
title: Add a next-wake alarm coordinator and scheduler bridge
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - runtime
  - scheduler
  - hosting
  - suspendable-hosting
owner: pi
---

# Add a next-wake alarm coordinator and scheduler bridge

## Summary

Introduce a host-agnostic next-wake coordination primitive so PiClaw can tell a
suspendable host the earliest future time it must be awake again.

The initial producer will likely be the scheduled-task system, but the design
should support future wake sources without redesign.

## Problem Statement

PiClaw knows about future work in multiple places, but today there is no clean
runtime seam that says:

- what is the earliest future wake-up time?
- which subsystem requested it?
- how should that be surfaced to a host lifecycle adapter?

Suspendable platforms need that answer to avoid sleeping through due work.

## Desired Behavior

- Runtime exposes a single “next wake” query/registration surface.
- Scheduled tasks can publish their next due time to that surface.
- Future subsystems can register wake times without coupling to a specific host.
- Host adapters can ask for the earliest wake time and schedule platform alarms.

## Acceptance Criteria

- [ ] A runtime-level alarm coordinator abstraction exists.
- [ ] Scheduled-task logic can publish / refresh the earliest next wake time.
- [ ] Registrations can be updated and removed safely.
- [ ] The earliest wake time is available to host lifecycle adapters.
- [ ] Regression coverage exists for dedupe, update, removal, and expiry behavior.

## Implementation Paths

### Path A — source-keyed earliest-wins coordinator (recommended)
1. Add a coordinator keyed by source id.
2. Allow register/update/remove by source.
3. Compute the earliest future wake time on demand.
4. Bridge the scheduler into the coordinator first.

**Pros:**
- simple and extensible
- supports future subsystems cleanly
- keeps host-specific scheduling logic outside core runtime

**Cons:**
- requires clear ownership of registration lifecycle

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] earliest registration wins
  - [ ] updating a source changes the computed earliest wake
  - [ ] removing a source recalculates correctly
  - [ ] expired / past registrations are ignored
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] scheduled task survives host sleep and runs after wake

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-08
- Created from `piclawflare` review as the main reusable timer primitive behind suspendable hosting.
- Scoped to stay host-agnostic and scheduler-first rather than Cloudflare-specific.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- The coordinator should not itself schedule platform alarms; it should only expose the earliest required wake time.
- Keep this reusable for future reminders, delayed retries, or other deferred runtime jobs.

## Links

- `docs/runtime-flows.md`
- `runtime/src/task-scheduler.ts`
- `https://github.com/24601/piclawflare/blob/main/runtime/src/cloudflare/alarm-coordinator.ts`
