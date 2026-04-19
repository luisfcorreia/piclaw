---
id: add-scheduled-task-update-and-reschedule-tool
title: Add scheduled-task update and reschedule tool
status: next
priority: medium
created: 2026-04-13
updated: 2026-04-19
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - scheduling
  - tools
  - runtime
  - tasks
owner: pi
blocked-by: []
---

# Add scheduled-task update and reschedule tool

## Summary

Add a supported task-mutation tool for routine scheduled-task changes such as
pause, resume, cancel, and delay/reschedule, so agents no longer need to write
raw IPC payloads for simple task management.

This is the follow-up mutation slice from
`assess-first-class-scheduled-task-inspection-surface`.

## Desired Behavior

- Agents can update an existing scheduled task through a supported tool surface.
- Routine changes do not require direct IPC file writes.
- The update surface shares canonical task lookup behavior with the task
  inspection/query surface.

## V1 scope

- update by task id
- supported operations:
  - pause
  - resume
  - cancel/delete
  - delay/reschedule by new `schedule_value`
  - optional prompt/model/cwd/timeout updates if already supported safely
- return the updated task summary and next-run state

## Out of scope

- redesigning scheduler execution
- bulk task mutation
- new dedicated UI beyond existing command/card flows

## Acceptance Criteria

- [ ] A supported internal mutation/update surface exists for scheduled tasks.
- [ ] Pause/resume/cancel and delay/reschedule are supported without raw IPC file writes.
- [ ] Validation remains consistent with current scheduler/IPC expectations.
- [ ] The result returns the updated task status and next-run information.
- [ ] Focused regression coverage exists for each supported mutation path.

## Implementation Paths

### Path A — tool over canonical update service (recommended)
1. Reuse canonical task lookup/update helpers.
2. Add a task update tool with bounded actions.
3. Keep raw IPC support for external scripts, but not as the preferred agent path.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/extensions/extensions-scheduled-tasks.test.ts`
- `runtime/test/ipc/ipc.test.ts`
- `runtime/test/agent-pool/agent-pool-tools.test.ts`
- `runtime/test/scheduled-task-query-service.test.ts`
- `bun run typecheck`

### New regression coverage to add
- supported tool mutation contract tests for:
  - pause
  - resume
  - cancel/delete
  - reschedule / next-run recompute
- validation parity tests against existing IPC/task-validation behavior
- command/tool summary output tests for updated task state where applicable

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

### 2026-04-19
- Agent audit completed from board batch action.
- Findings:
  - the former blocker `add-scheduled-task-inspection-tool-and-shared-query-service` is already resolved in `50-done/`, so this ticket no longer needs a `blocked-by` entry
  - scope is appropriately bounded for a first mutation slice
  - test plan needed concrete rerun targets and regression additions, now added
- Recommendation: keep in `10-next/` but treat as implementation-ready for promotion once the team wants the mutation half of scheduled-task management.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-19
- Queued for agent audit (board batch action). Agent should review quality score, acceptance criteria, and test plan.

### 2026-04-13
- Split out as the mutation follow-up after the scheduled-task inspection assessment clarified that rescheduling and pause/resume changes are a separate missing capability from pure inspection.

## Links

- `workitems/20-doing/assess-first-class-scheduled-task-inspection-surface.md`
- `workitems/50-done/add-scheduled-task-inspection-tool-and-shared-query-service.md`
- `runtime/src/ipc.ts`
- `runtime/src/db/tasks.ts`
