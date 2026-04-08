---
id: cloudflare-suspendable-runtime-and-hosting
title: "Master: suspendable runtime architecture and Cloudflare hosting target"
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - master
  - hosting
  - cloudflare
  - runtime
  - suspendable-hosting
owner: pi
blocked-by:
  - extract-runtime-activity-service-for-suspendable-hosts
  - add-next-wake-alarm-coordinator-and-scheduler-bridge
  - add-authenticated-http-ipc-ingress-for-suspendable-hosts
  - design-runtime-lifecycle-adapter-for-suspendable-hosts
  - add-cold-start-and-reconnect-ux-for-suspended-web-runtime
  - audit-suspend-incompatible-features-and-operating-modes
  - extract-whatsapp-into-optional-disabled-by-default-extension
  - evaluate-and-add-cloudflare-hosting-target
---

# Master: suspendable runtime architecture and Cloudflare hosting target

## Summary

Track the work required to make PiClaw portable to suspendable / wake-on-demand
hosting environments and to add a concrete Cloudflare deployment target.

The key goal is not just “make Cloudflare work once”, but to extract the useful
host-agnostic ideas from `24601/piclawflare` into mainline PiClaw in a way that
improves runtime portability, observability, and operational safety.

## Important scope boundary

This umbrella should assume that PiClaw remains a long-lived Bun runtime with
local filesystem state and SQLite unless an explicit later design proves
otherwise.

The Cloudflare target may end up being one of:

- Worker-only for a narrow edge/gateway slice
- Worker + Durable Object + Cloudflare Container for the full runtime
- another mixed Cloudflare hosting split if that proves cleaner

This umbrella should therefore focus first on the runtime seams and hosting
adapter boundary, then make the Cloudflare shape an explicit decision rather
than hard-coding it prematurely.

## Why this matters

Useful ideas identified in `piclawflare`:

- generic wake-on-HTTP model instead of per-endpoint wake plumbing
- central runtime activity registry for safe idle/sleep decisions
- next-wake / alarm coordination as a host-agnostic primitive
- HTTP IPC ingress for platforms where file-watcher wakeup is insufficient
- cold-start UX rather than opaque startup failures
- explicit operating modes for features that cannot survive suspend/resume
- reduction of default runtime coupling for suspend-sensitive channels like WhatsApp

These ideas are valuable even outside Cloudflare.

## Objectives

- Define suspend/resume-friendly runtime seams in core PiClaw.
- Minimize platform-specific code in the main runtime.
- Introduce a clean adapter boundary for host lifecycle integrations.
- Preserve current local/container installs without regressions.
- Enable a realistic Cloudflare Worker + Container deployment target.

## Non-goals

- Rewriting PiClaw into a stateless Workers-native app
- Replacing SQLite with a Cloudflare-native database in v1
- Making every existing integration suspend-safe in the first slice
- Shipping WhatsApp/Baileys as suspend-compatible without explicit mode limits

## Proposed execution order

1. Extract host-agnostic activity and wake-time primitives.
2. Add lifecycle adapter seams and authenticated HTTP IPC ingress.
3. Audit suspend-incompatible subsystems and define operating modes.
4. Add web cold-start / reconnect UX.
5. Build the Cloudflare-specific Worker/DO/Container integration on top.
6. Document and smoke-test the deployment target end to end.

## Acceptance Criteria

- [ ] The useful host-agnostic runtime abstractions are defined and landed.
- [ ] Platform-specific Cloudflare code is isolated behind a narrow adapter boundary.
- [ ] A Cloudflare Worker + Container deployment target exists and is documented.
- [ ] Idle/sleep decisions are based on explicit runtime activity tracking.
- [ ] Scheduled wake-ups and async ingress paths survive container sleep.
- [ ] Known incompatible features have documented operating modes or guards.
- [ ] Local/Linux container installs remain supported without behavioral regressions.

## Implementation Paths

### Path A — host-agnostic core + Cloudflare adapter (recommended)
1. Extract reusable runtime primitives into core.
2. Keep Cloudflare-specific lifecycle code in its own package/tree.
3. Add only the minimum core hooks required for suspendable hosting.

**Pros:**
- keeps mainline architecture portable
- reusable for other sleep/wake hosts later
- lower long-term maintenance cost

**Cons:**
- more design work up front
- slower than simply copying the fork

### Path B — merge Cloudflare-specific implementation directly into core
1. Port the fork mostly as-is.
2. Refactor only after the platform works.

**Pros:**
- faster path to a proof of concept

**Cons:**
- higher coupling to one hosting platform
- harder to reason about long term
- more likely to leak provider-specific assumptions into core runtime behavior

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed across child tickets.
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] wake page, cold start, SSE reconnect, scheduled wake, and post-wake timeline behavior

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Child tickets

- `extract-runtime-activity-service-for-suspendable-hosts`
- `add-next-wake-alarm-coordinator-and-scheduler-bridge`
- `add-authenticated-http-ipc-ingress-for-suspendable-hosts`
- `design-runtime-lifecycle-adapter-for-suspendable-hosts`
- `add-cold-start-and-reconnect-ux-for-suspended-web-runtime`
- `audit-suspend-incompatible-features-and-operating-modes`
- `extract-whatsapp-into-optional-disabled-by-default-extension`
- `evaluate-and-add-cloudflare-hosting-target`

## Updates

### 2026-04-08
- Created after reviewing `24601/piclawflare` and identifying both reusable host-agnostic runtime ideas and a plausible Cloudflare deployment shape.
- Scope intentionally split between core abstractions and the Cloudflare-specific adapter so the work can land incrementally.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Treat “Cloudflare support” as an explicit architecture decision item: Worker-only where realistic, Worker + Container where required, or a mixed split if that produces the safest deployable result.
- Existing inter-instance and IPC work should be reused where possible instead of creating a second unrelated async ingress model.

## Links

- `docs/architecture.md`
- `docs/runtime-flows.md`
- `docs/cross-instance-ipc.md`
- `workitems/00-inbox/mailbox-system-for-inter-instance-ipc.md`
- `https://github.com/24601/piclawflare`
- `https://github.com/24601/piclawflare/pull/2`
