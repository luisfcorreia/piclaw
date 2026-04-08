---
id: extract-runtime-activity-service-for-suspendable-hosts
title: Extract a runtime activity service for suspendable hosts
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - runtime
  - hosting
  - suspendable-hosting
  - observability
owner: pi
---

# Extract a runtime activity service for suspendable hosts

## Summary

Introduce a host-agnostic runtime activity service that tracks whether PiClaw is
safe to idle, suspend, or stop.

This should be extracted as a core primitive rather than a Cloudflare-specific
helper so it can support:

- suspendable hosting targets
- safe restart / shutdown decisions
- operator diagnostics
- future idle-aware runtime behavior

## Problem Statement

PiClaw currently has many long-lived or bursty activity sources, but no single
runtime-owned place that answers:

- what work is currently in progress?
- does any current activity forbid suspend/stop?
- is the process idle except for passive browser listeners?

Without that, any host-level sleep decision is ad hoc and fragile.

## Desired Behavior

- Core runtime exposes an activity registry / query surface.
- Subsystems can register and unregister structured activity signals.
- Idle status can distinguish between:
  - active work that blocks suspend
  - passive connections that may time out
  - fully idle runtime state
- The service can be left disabled or inert when no host adapter needs it.

## Candidate activity classes

Start with at least:

- agent run
- side prompt
- SSE client
- terminal session
- VNC session
- scheduled task execution
- IPC processing
- file upload
- autoresearch / long-running subprocess work
- extension-owned long-running work

## Acceptance Criteria

- [ ] A core activity service abstraction exists in mainline runtime code.
- [ ] Activity signals are structured and typed rather than ad hoc booleans.
- [ ] The service can report whether runtime state is suspend-safe.
- [ ] SSE / passive browser presence has an explicit idle policy.
- [ ] At least the highest-risk subsystems are integrated with register/unregister hooks.
- [ ] Regression coverage exists for idle vs busy classification.

## Implementation Paths

### Path A — central passive registry (recommended)
1. Add a singleton/runtime-owned activity registry.
2. Let subsystems register/unregister activity by kind and id.
3. Add a read-only status snapshot API for host adapters and diagnostics.

**Pros:**
- simple mental model
- reusable outside Cloudflare
- avoids circular ownership between runtime subsystems

**Cons:**
- requires careful cleanup discipline in try/finally paths

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] idle with no activity
  - [ ] busy with active agent/task/session work
  - [ ] SSE-only idle timeout semantics
  - [ ] cleanup on try/finally failure paths
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] verify browser reconnect / idle state after chat page open and inactivity

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
- Created from `piclawflare` review as the most reusable host-agnostic idea in the fork.
- Intentionally scoped as a core runtime primitive first, not a Cloudflare-only service.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep this independent from a specific HTTP endpoint shape; transport/exposure can be layered later.
- Prefer explicit activity registration over inferred heuristics where possible.

## Links

- `docs/runtime-flows.md`
- `docs/architecture.md`
- `https://github.com/24601/piclawflare/blob/main/runtime/src/cloudflare/activity-service.ts`
