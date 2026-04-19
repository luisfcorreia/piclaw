---
id: codebase-quality-cleanup-2026
title: "Master: codebase quality cleanup & refactoring (2026-Q1)"
status: doing
priority: critical
created: 2026-03-23
updated: 2026-04-19
tags:
  - master
  - refactor
  - quality
  - quality-assessment
owner: pi
blocked-by: []
---

# Master: codebase quality cleanup & refactoring (2026-Q1)

## Summary

Tracking ticket for the major piclaw codebase cleanup and refactoring effort, based on the [quality assessment of 2026-03-23](../docs/quality-assessment-2026-03-23.md).

**Current grade: B** — target: **B+/A-** after P0+P1 completion.

## Assessment highlights

| Metric | Current |
|---|---|
| Server source | 211 files, 34,988 lines |
| Client source | 73 files, 21,881 lines |
| Tests | 1,118/1,123 passing (99.6%) |
| Type safety | 91 `any` (0.26%) — excellent |
| Documentation | 97% JSDoc coverage — excellent |
| Silent swallow guard | 0 empty `catch {}` / 0 empty promise swallows — guard clean |
| God-class risk | 2 files > 1,400 lines — critical |

## Current blocking tickets

These are the open tickets that still block this umbrella from closing.

### P0 — Critical structural refactors

_All previously tracked structural blockers are now in `50-done/`._

### Active supporting quality work

_All previously tracked P1 supporting tickets are now in `50-done/`._

### Former blockers now resolved

| Ticket | Current status | Outcome |
|---|---|---|
| `fix-failing-tests-stale-assertions` | done | Closed after verifying the stale failures no longer reproduced |
| `audit-silent-catch-blocks` | done | Completed and moved out of the blocker chain |
| `add-tests-core-config-and-keychain` | done | Coverage work landed and no longer blocks the umbrella |
| `finish-config-injection-and-mutable-identity-cleanup` | done | Config-consumer cleanup and mutable-identity seam work landed |
| `audit-exported-jsdoc-coverage-and-comment-quality` | done | Documentation review gate was re-established and closed |
| `split-webchannel-god-class` | done | WebChannel was reduced to a thin 128-line coordinator shell over extracted services |
| `split-agentpool-god-class` | done | AgentPool was reduced to a thin 322-line coordinator over extracted session/tool/turn services |
| `enforce-centralized-logging-for-suppressed-errors` | done | Runtime/server suppressed-error handling was standardized on centralized logging helpers and silent-swallow metrics were revalidated |

## Follow-up work (P2/P3 — not blocking)

These are desirable but not required to close this ticket:

| Priority | Ticket | Item |
|---|---|---|
| P2 | `adopt-pino-structured-logging` | Adopt structured logging and explicit error-handling guards |
| P2 | `normalize-browser-logging-policy-and-web-console-usage` | Normalize browser/client logging policy and replace ad hoc web `console.*` usage where appropriate |
| P2 | `split-core-config-into-domain-submodules` | Reduce `runtime/src/core/config.ts` below the umbrella threshold by extracting coherent config submodules |
| P2 | `group-web-channel-flat-files` | Group 56 flat files into sub-directories |
| P2 | `extract-typed-config-objects` | Extract 45 constants into typed config objects *(done — follow-up now tracked by `finish-config-injection-and-mutable-identity-cleanup`)* |
| P3 | `continue-decompose-web-app-shell-toward-500-lines` | Completed — `runtime/web/src/app.ts` now sits at 493 lines on `main` |
| P3 | `split-web-styles-monolith` | Completed — layered stylesheet split landed and final smoke confirmation closed the tranche |
| P3 | — | Fix `ipc.ts → MediaService` dependency direction violation |

## Completion criteria

- [x] All current blocker tickets are in `50-done/`
- [x] Full test suite passes (0 failures)
- [ ] No file in `src/` exceeds 800 lines
- [ ] No class exceeds 400 lines
- [x] Silent catch ratio is below 1:1 (more named than silent)
- [ ] `core/` and `secure/` test coverage ≥ 50%
- [ ] Re-run quality assessment and confirm grade improvement

## Updates

### 2026-04-19
- Queued for agent audit (board batch action). Agent should review quality score, acceptance criteria, and test plan.

### 2026-04-13
- Closed the last active P1 supporting ticket by confirming `enforce-centralized-logging-for-suppressed-errors` is already in `50-done/`.
- Promoted the remaining browser/client-side logging consistency gap into its own explicit follow-up ticket:
  - `workitems/10-next/normalize-browser-logging-policy-and-web-console-usage.md`
- Added the next concrete structural quality slice for implementation:
  - `workitems/10-next/split-core-config-into-domain-submodules.md`
- The umbrella now has no active supporting quality ticket in flight; remaining work is criteria-driven plus optional P2/P3 follow-ups.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Re-ran the silent-swallow audit via `bun run check:silent-swallows`; current repo metrics are:
  - `repo_silent_catch_blocks=0`
  - `repo_files_with_silent_catches=0`
  - `repo_silent_promise_catches=0`
  - `runtime_core_silent_catches=0`
- Re-ran the deterministic quality baseline via `bun run audit:baseline-quality-deterministic` after refreshing the audit script's subgroup map for two newer web tests (`drawio-pane` and `tool-git-context`) and updating the matching audit test expectations.
- Fresh baseline-quality results are fully green:
  - `failed_root_gates=0`
  - `failed_deterministic_groups=0`
  - `flaky_groups_after_3x_rerun=0`
  - `followup_tickets_needed=0`
  - `stability_gap_count=0`
- Artifact evidence: `artifacts/baseline-quality-deterministic/2026-03-30T11-04-08Z/summary.md`
- Criteria update: the silent-catch / silent-swallow gate is now satisfied, but the final "re-run quality assessment and confirm grade improvement" checkbox should remain open until the narrative report-card style assessment is refreshed explicitly.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Board reassessment after CSS closeout:
  - moved `continue-decompose-web-app-shell-toward-500-lines` from `40-review` to `50-done` because the thin-shell target is fully achieved on `main` and the attempted follow-up cleanup produced no better mergeable tranche
  - moved `split-web-styles-monolith` from `40-review` to `50-done` after final smoke confirmation and board closeout
  - kept `adaptive-card-submissions-outside-web-default-to-default-session` in `50-done`
- Remaining quality bottlenecks are now concentrated in other oversized files rather than `runtime/web/src/app.ts`, notably:
  - `runtime/web/src/components/workspace-explorer.ts` (`2370` lines)
  - `runtime/web/src/components/compose-box.ts` (`1912` lines)
  - `runtime/src/extensions/autoresearch-supervisor.ts` (`1291` lines)
  - `runtime/src/channels/web/handlers/agent.ts` (`1206` lines)
  - `runtime/web/src/components/post.ts` (`1089` lines)
  - VNC/API/config surfaces including `vnc-pane.ts`, `remote-display-vnc.ts`, `vnc-harness.ts`, `api.ts`, and `core/config.ts`
- Criteria note: the remaining `src > 800 lines` gate should be interpreted carefully because vendored/embedded source like `runtime/web/src/vendor/mindmap-editor-source.ts` can distort the metric and may need explicit exclusion in the next quality-assessment refresh.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-29
- Closed out the last two tracked P0 blocker tickets by moving `split-webchannel-god-class` and `split-agentpool-god-class` from `40-review/` to `50-done/`.
- The umbrella `blocked-by` list is now empty because every explicitly tracked blocker has landed.
- Converted the remaining P3 placeholder follow-ups into explicit tickets:
  - `workitems/10-next/continue-decompose-web-app-shell.md`
  - `workitems/10-next/split-web-styles-monolith.md`
- Remaining work under this umbrella is now criteria-driven rather than blocker-driven:
  - reduce the remaining >800-line source files
  - reduce any remaining >400-line classes
  - improve the silent-catch ratio
  - refresh quality-assessment evidence
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Fixed the last two known full-suite failures under this umbrella:
  - isolated in-memory SQLite reuse by workspace identity in `runtime/src/db/connection.ts`, which stopped cross-test keychain leakage between CLI and runtime suites
  - made cron timezone resolution honor live `process.env.TZ` in `runtime/src/task-scheduler-utils.ts` and `runtime/src/ipc.ts`, which fixed the UTC scheduler expectation under test
- Validation now passes end-to-end:
  - `cd runtime && bun test` → `1307 pass`, `1 skip`, `0 fail`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run build`
  - `bun run check:stale-dist`
- Completion criteria update: the umbrella can now truthfully mark the full-suite gate as passed, though the ticket still cannot close until the remaining review-stage blockers are done and the structural/file-size criteria are met.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Picked this umbrella back up after pushing `main` through `b0bfb379`.
- Refreshed the blocker chain to match the actual board state:
  - `split-webchannel-god-class` and `split-agentpool-god-class` are the only remaining tracked blockers, both in `40-review/`
  - `finish-config-injection-and-mutable-identity-cleanup` and `audit-exported-jsdoc-coverage-and-comment-quality` were removed from `blocked-by` because they are already in `50-done/`
- Revalidated the current quality gate state:
  - full web-channel regression suite still passes via `bun test test/channels/web`
  - full runtime suite is **not** yet green: `cd runtime && bun test` currently reports 2 failing tests (`stores, updates, lists, and deletes entries across supported types` and `computeNextRun handles invalid cron and timezone`)
- Immediate next execution focus under this umbrella is no longer structural extraction; it is review/closeout of the two god-class tickets plus cleanup of the remaining full-suite failures before the umbrella can move toward review.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-29
- Refreshed blocker status after the WebChannel shell split moved from `20-doing` to `40-review`.
- The umbrella now has both structural god-class blockers (`split-webchannel-god-class` and `split-agentpool-god-class`) sitting in review instead of active implementation.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-29
- Refreshed blocker status again after promoting `split-webchannel-god-class` from `10-next` to `20-doing` as the next active P0 refactor.
- The umbrella now has one structural blocker in active implementation (`split-webchannel-god-class`) and one in review (`split-agentpool-god-class`).
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-29
- Refreshed blocker status after the AgentPool refactor tranche moved `split-agentpool-god-class` from active implementation to `40-review`.
- The umbrella now treats the AgentPool god-class split as review-stage work instead of an untouched P0 blocker, while `split-webchannel-god-class` remains the other open structural blocker.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-28
- Lane change: `30-blocked` → `20-doing` via web blocked-card decision.
- Blocked-lane outcome recorded from the adaptive-card submission: **Move to Doing**.
- This decision reactivates the quality umbrella despite its open blocker chain; downstream blocker cleanup should now be tracked from active work instead of pure blocked status.

### 2026-03-27
- Refreshed the blocker chain after repo-status audit.
- Removed stale blockers that are already in `50-done/`: `fix-failing-tests-stale-assertions`, `audit-silent-catch-blocks`, and `add-tests-core-config-and-keychain`.
- Repointed the active config-quality dependency to `finish-config-injection-and-mutable-identity-cleanup` and the documentation-quality dependency to `audit-exported-jsdoc-coverage-and-comment-quality`.
- Updated the open refactor size callouts so the umbrella matches current repo reality (`WebChannel`: 1,905 lines; `AgentPool`: 1,632 lines).
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Links

- [Full quality assessment report](../docs/quality-assessment-2026-03-23.md)
