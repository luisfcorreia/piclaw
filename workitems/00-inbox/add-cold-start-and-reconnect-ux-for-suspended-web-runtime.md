---
id: add-cold-start-and-reconnect-ux-for-suspended-web-runtime
title: Add cold-start and reconnect UX for a suspended web runtime
status: inbox
priority: medium
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - hosting
  - suspendable-hosting
  - ux
owner: pi
---

# Add cold-start and reconnect UX for a suspended web runtime

## Summary

Add explicit web UX for cold starts, wake-in-progress states, and reconnects on
suspendable hosts.

Instead of looking broken while a sleeping runtime wakes up, the browser should
show a clear state transition and recover cleanly once the backend is ready.

## Problem Statement

On suspendable hosts, a normal web load may hit one of several transient states:

- runtime still starting
- runtime waking from sleep
- SSE reconnect in progress
- post-wake requests briefly unavailable

Without explicit UX, these look like random failures or stale pages.

## Desired Behavior

- Browser gets a clear “waking up / starting” experience when appropriate.
- The UI retries or reconnects intentionally instead of looking frozen.
- SSE reconnect and post-wake refresh behavior are explicit and resilient.
- Non-suspendable/local installs do not suffer extra noise.

## Candidate surfaces

- wake page or waking panel before full app availability
- clearer reconnect state in the app shell
- post-wake timeline refresh / session recovery cues
- recoverable messaging around temporarily unavailable endpoints

## Acceptance Criteria

- [ ] A cold-start/wake-in-progress UX exists for suspendable deployments.
- [ ] SSE reconnect behavior after wake is intentional and tested.
- [ ] The browser lands in a good post-wake state without manual reload in the common path.
- [ ] Local/non-suspendable installs do not regress.
- [ ] Real-browser smoke coverage exists for the final wake/reconnect path.

## Implementation Paths

### Path A — explicit wake state + reconnect recovery (recommended)
1. Add a wake/loading surface for suspended hosts.
2. Make reconnect logic explicit in the web app.
3. Re-sync critical app state after backend readiness returns.

**Pros:**
- better UX
- easier debugging
- matches operator expectations on cold-started hosts

**Cons:**
- requires coordination between hosting adapter and web client

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] waking page / waking state appears when backend is unavailable but expected to recover
  - [ ] SSE reconnect after wake rehydrates visible state
  - [ ] browser does not get stuck on stale loading state after backend readiness returns
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] first load from sleeping host, wake transition, timeline recovery, and subsequent chat send

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
- Created from `piclawflare` review because the wake page / reconnect behavior is one of the most visible product differences on suspendable hosts.
- Scoped separately from platform plumbing so UX quality is not lost in infrastructure work.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- This ticket should not hard-code a specific Cloudflare page design; focus on user-facing state transitions and recovery behavior.
- Prefer explicit “waking up” states over silent polling where feasible.

## Links

- `docs/architecture.md`
- `runtime/web/src/app.ts`
- `runtime/src/channels/web/sse/sse.ts`
- `https://github.com/24601/piclawflare/blob/main/cloudflare/src/wake-page.ts`
