---
id: retune-session-ttl-and-pressure-defaults
title: Retune session TTL and pressure defaults
status: doing
priority: medium
created: 2026-04-18
updated: 2026-04-19
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - memory
  - performance
  - runtime
  - sessions
  - config
owner: smith
blocked-by: []
---

# Retune session TTL and pressure defaults

## Summary

The first runtime-RAM tranche already changed the session-retention behavior materially:
- recent-chat warmup is lightweight
- main-session pool default cap is 2
- pressure-mode entry threshold is 384 MB
- pressure-mode pool cap is 1

The remaining policy question is whether the default idle TTLs and pressure defaults are still conservative now that the runtime settles much lower after restart.

Current defaults to re-evaluate:
- main idle TTL: **3 minutes**
- side idle TTL: **1 minute**
- cleanup interval: **30 seconds**
- pressure threshold: **384 MB RSS**
- pressure-mode main-session pool cap: **1**

## Acceptance Criteria

- [ ] New default TTL/pressure values are either chosen with evidence or explicitly left unchanged with rationale.
- [ ] The steady-state impact of the new defaults is measured after restart/settle.
- [ ] The new defaults do not regress normal chat reconnect/branch/session behavior.
- [ ] All env overrides continue to work and remain covered by tests.

## Implementation Paths

### Path A — Re-measure with candidate defaults
- compare the current defaults with one tighter TTL candidate
- measure post-reload settle behavior and resident-session counts

### Path B — Preserve UX invariants
- keep exemptions for active streaming / bash / compaction sessions
- ensure reconnect behavior still feels stable for active chats

### Path C — Lock the chosen defaults with tests
- add or update tests for any changed default behavior
- preserve env-override precedence semantics

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/agent-pool/agent-pool.test.ts`
- `runtime/test/agent-pool/session-manager.test.ts`
- `runtime/test/channels/web/system-metrics.test.ts`
- `bunx tsc --noEmit -p runtime/tsconfig.json`

### New regression coverage to add
- default TTL/default pressure behavior if any default changes land
- env override precedence if any defaults move

## Definition of Done

- [ ] Default values chosen or explicitly kept with rationale
- [ ] Regression coverage added/updated and passing
- [ ] Type check clean
- [ ] Post-reload measurement recorded
- [ ] Ticket front matter updated

## Updates

### 2026-04-19
- Moved next → doing via board batch action.

### 2026-04-18
- Created as a follow-up to `runtime-ram-optimization-opportunities-2026-04-17` after the main-session budget and pressure-trigger changes landed.
- The parent tranche proved the runtime can settle near **276 MB RSS / 275 MB PSS** after restart, so TTL/pressure retuning is now a narrower policy decision instead of a speculative first response to the crash-prone VM.

## Links

- Parent ticket: `workitems/50-done/runtime-ram-optimization-opportunities-2026-04-17.md`
- Session manager: `runtime/src/agent-pool/session-manager.ts`
- Agent pool: `runtime/src/agent-pool.ts`
- System metrics endpoint: `runtime/src/channels/web/agent/system-metrics.ts`
