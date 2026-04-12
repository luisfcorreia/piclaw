---
id: enforce-centralized-logging-for-suppressed-errors
title: Enforce centralized logging for suppressed errors
status: done
priority: high
created: 2026-04-12
updated: 2026-04-12
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - quality
  - logging
  - error-handling
  - runtime
owner: pi
blocked-by: []
---

# Enforce centralized logging for suppressed errors

## Summary

Standardize intentionally swallowed failures on the centralized runtime logging helpers and stop allowing empty or comment-only `catch` blocks to remain in the codebase.

The preferred default for best-effort cleanup and expected teardown races is:

- `debugSuppressedError(log, "message", error, { ...context })`

Escalate only when the failure is materially user-visible or indicates a broken invariant:

- `log.warn(...)`
- `log.error(...)`

## Problem Statement

The repo already has centralized logging helpers in `runtime/src/utils/logger.ts`, but many call sites still bypass them via:

- `catch {}`
- comment-only catches
- ad hoc swallowing without structured context
- inconsistent choices between debug/warn/error for similar best-effort paths

This causes two problems:

1. low-signal failures disappear entirely
2. logging behavior is inconsistent across runtime modules

## Desired Behavior

- Empty and comment-only catches are removed from product/runtime code.
- Best-effort suppression paths use `debugSuppressedError(...)` by default.
- `log.warn(...)` is used only for meaningful degradation or fallback.
- `log.error(...)` is used only for actionable failure / broken invariants.
- The silent-swallow checker remains strict and is not weakened.
- New code follows the same convention consistently.

## Scope

Initial focus:

- runtime/server code paths that still have empty or comment-only catches
- helper modules where logging policy should be obvious and reusable
- hot paths currently being touched by the silent-swallow cleanup effort

Out of scope for this slice:

- wholesale redesign of the logger API
- changing log transport / sink behavior
- weakening the silent-swallow audit to permit comment-only catches

## Acceptance Criteria

- [x] Remaining empty/comment-only catches in active runtime cleanup tranches are replaced with explicit centralized logging or real handling.
- [x] `debugSuppressedError(...)` is used as the default for intentional best-effort suppression paths.
- [x] New or updated tests cover any helper/API changes needed for standardized logging behavior.
- [x] `bun run runtime/scripts/silent-swallow-metrics.ts --check` remains strict and documents the preferred remediation path.
- [x] At least one follow-up note/update records where `warn`/`error` is still intentionally preferred over `debugSuppressedError(...)`.

## Implementation Notes

Preferred policy:

- Expected cleanup race / teardown / fallback probe:
  - `debugSuppressedError(log, "message", error, { ...context })`
- Recoverable degradation with user/operational impact:
  - `log.warn("message", { err: error, ...context })`
- Broken invariant or failed required action:
  - `log.error("message", { err: error, ...context })`

Avoid:

- empty `catch {}`
- comment-only catches
- raw `console.*`
- inconsistent message/context shapes for similar failure classes

## Test Plan

- Re-run focused tests for each touched module.
- Re-run the silent-swallow metrics check after each tranche.
- Prefer small targeted validation slices over one giant repo-wide refactor.

## Definition of Done

- [x] Acceptance criteria satisfied
- [x] Focused tests added/updated and passing
- [x] Silent-swallow metrics rechecked
- [x] Work item updates recorded with evidence
- [x] Follow-up tickets created for deferred areas, if needed

## Updates

### 2026-04-12
- Implemented and merged in commit `8aedc640` after the logging-consistency autoresearch salvage.
- Centralized logging policy is now enforced across the touched runtime helper tranches:
  - best-effort suppression defaults to `debugSuppressedError(...)`
  - recoverable degradation keeps `log.warn(...)` with structured `operation` and `err`
  - invariant/required-action failures keep `log.error(...)` with structured `operation` and `err`
- Added focused coverage for the new benchmark and request-guard logging paths.
- Verified locally with:
  - `bun run runtime/scripts/logging-consistency-metrics.ts`
  - `bun run runtime/scripts/silent-swallow-metrics.ts --check`
  - full runtime test suite passing on the clean merge state
- Final metric evidence:
  - `inconsistent_logging_sites=0`
  - `warn_error_without_operation=0`
  - `caught_warn_error_without_err=0`
  - `direct_suppressed_debug_sites=0`
  - `repo_silent_catch_blocks=0`
  - `repo_silent_promise_catches=0`
  - `runtime_core_silent_catches=0`

### 2026-04-12
- Created from user direction during the current silent-swallow cleanup push.
- Current execution preference clarified:
  - prefer `debugSuppressedError(...)` for intentional best-effort catches
  - keep `warn`/`error` for real degradation or invariants
  - comment-only catches must still be fixed, not tolerated
- This ticket complements the active cleanup/autoresearch work rather than replacing the existing repo-wide silent-swallow enforcement.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `runtime/src/utils/logger.ts`
- `runtime/scripts/silent-swallow-metrics.ts`
- `runtime/scripts/audit-comment-only-catches.ts`
