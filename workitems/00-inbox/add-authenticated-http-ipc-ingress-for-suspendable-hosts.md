---
id: add-authenticated-http-ipc-ingress-for-suspendable-hosts
title: Add an authenticated HTTP IPC ingress for suspendable hosts
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
  - ipc
  - hosting
  - suspendable-hosting
  - remote-interop
owner: pi
---

# Add an authenticated HTTP IPC ingress for suspendable hosts

## Summary

Add an authenticated HTTP ingress for PiClaw IPC payloads so platforms that
cannot rely on file-watcher wake behavior can still inject work safely.

This should complement, not replace, the existing file-based IPC flow.

## Problem Statement

Current IPC assumptions are local-runtime-centric:

- writable filesystem
- local watcher loop
- process already awake to observe file changes

Those assumptions are weak on suspendable or edge-routed hosts. A host may need
a wake-compatible HTTP path that can deliver the same logical payloads the file
IPC layer already understands.

## Desired Behavior

- PiClaw exposes an authenticated internal HTTP ingress for IPC-style payloads.
- Accepted payloads map onto existing IPC/runtime execution paths where possible.
- The ingress is safe-by-default and fail-closed when not configured.
- Local installs can continue using file-based IPC unchanged.

## Candidate initial payload classes

- queue / resume-pending style message injection
- scheduled task wake triggers
- remote host wake helpers
- internal platform control payloads that are already modeled in IPC terms

## Acceptance Criteria

- [ ] A narrow authenticated HTTP IPC ingress exists.
- [ ] The ingress is explicitly internal-only and fail-closed when secrets/config are missing.
- [ ] Accepted payloads reuse existing IPC/runtime semantics where possible.
- [ ] File-based IPC remains supported.
- [ ] Regression coverage exists for auth, validation, and dispatch behavior.

## Implementation Paths

### Path A — internal HTTP bridge into existing IPC handlers (recommended)
1. Define a minimal authenticated endpoint.
2. Validate payload shape tightly.
3. Route accepted payloads into existing IPC handler logic.
4. Keep transport concerns separate from command semantics.

**Pros:**
- reuse of existing runtime behavior
- good fit for sleep/wake hosting
- low conceptual duplication

**Cons:**
- requires careful boundary hardening and auth review

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] unauthorized requests are rejected
  - [ ] missing-secret configuration fails closed
  - [ ] valid payload reaches existing IPC dispatch path
  - [ ] invalid payload is rejected clearly
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] wake-compatible internal message/task injection on a sleeping host target

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
- Created from `piclawflare` review as a likely necessary portability layer for suspendable hosts.
- Scoped as a complement to file-based IPC, not a replacement.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Reuse the existing IPC model and queue semantics where possible.
- Coordinate with the broader mailbox/inter-instance IPC direction rather than inventing a second unrelated async command model.

## Links

- `docs/cross-instance-ipc.md`
- `docs/runtime-flows.md`
- `workitems/00-inbox/mailbox-system-for-inter-instance-ipc.md`
- `https://github.com/24601/piclawflare/blob/main/runtime/src/cloudflare/cf-endpoints.ts`
