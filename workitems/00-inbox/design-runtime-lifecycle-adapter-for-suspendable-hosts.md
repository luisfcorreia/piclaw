---
id: design-runtime-lifecycle-adapter-for-suspendable-hosts
title: Design a runtime lifecycle adapter for suspendable hosts
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - runtime
  - hosting
  - suspendable-hosting
  - architecture
owner: pi
---

# Design a runtime lifecycle adapter for suspendable hosts

## Summary

Define a narrow host lifecycle adapter boundary so core PiClaw can cooperate
with suspendable platforms without embedding provider-specific logic directly in
normal runtime flows.

This is the architecture ticket that should decide where lifecycle seams live,
what the host is allowed to ask the runtime, and which responsibilities stay in
core versus in a host-specific adapter.

## Problem Statement

If suspend/resume behavior is wired directly into normal request routing,
scheduler, SSE, and IPC paths, the core runtime becomes hard to reason about
and hard to port.

PiClaw needs a small, explicit contract for things like:

- readiness
- activity / idleness
- prepare-for-sleep
- next required wake time
- post-wake recovery / resumption hooks

## Desired Behavior

- Core runtime exposes a narrow lifecycle-facing interface.
- Host-specific adapters consume that interface without leaking platform details into unrelated code.
- Existing local/container installs remain unaffected when no lifecycle adapter is enabled.
- The seam is generic enough for Cloudflare and any future suspendable host.

## Candidate adapter responsibilities

- query runtime readiness
- query activity / idle safety
- request graceful pre-sleep flush/save behavior
- query earliest wake time
- inject wake-compatible IPC/control payloads
- optionally notify runtime about wake/resume events

## Acceptance Criteria

- [ ] A concrete lifecycle adapter contract is documented.
- [ ] Core/runtime-owned responsibilities are separated from host-adapter responsibilities.
- [ ] At least one target integration path (Cloudflare) can be implemented against the contract.
- [ ] Existing local deployments do not require the adapter.
- [ ] Follow-up implementation tickets can point to this contract instead of re-deciding architecture.

## Implementation Paths

### Path A — explicit runtime-host contract (recommended)
1. Write down the lifecycle contract first.
2. Add minimal core hooks and wiring points.
3. Implement the Cloudflare adapter against the contract.

**Pros:**
- prevents provider logic from spreading through core runtime
- easier to review and test
- more reusable for future hosting targets

**Cons:**
- extra design step before shipping the first platform adapter

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
  - [ ] adapter-disabled path is inert
  - [ ] lifecycle hooks expose stable contract behavior
  - [ ] readiness / prepare-sleep / next-wake semantics are covered
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] suspend-host cold start and reconnect behavior using the final adapter

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
- Created after reviewing `piclawflare` and deciding the key upstreaming challenge is architectural containment, not just feature parity.
- This should be resolved before large platform-specific lifecycle patches are merged into core.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep this focused on contract design and runtime seam placement, not on a specific Cloudflare implementation file layout.
- The contract should be understandable to both runtime maintainers and platform-adapter maintainers.

## Links

- `docs/architecture.md`
- `docs/runtime-flows.md`
- `https://github.com/24601/piclawflare/pull/2`
