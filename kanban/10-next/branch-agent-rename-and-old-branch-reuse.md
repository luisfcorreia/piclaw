---
id: branch-agent-rename-and-old-branch-reuse
title: Support renaming branch agents to prior tree branches and reusing archived branches
status: next
priority: high
created: 2026-03-17
updated: 2026-03-17
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - sessions
  - branching
  - ux
  - sqlite
owner: pi
---

# Support renaming branch agents to prior tree branches and reusing archived branches

## Summary

Create a focused product/implementation slice for branch identity lifecycle:

1. users should be able to rename a live branch agent to a meaningful prior tree
   branch identity, and
2. users should be able to deliberately reuse or reopen old archived branches
   rather than being forced into always-new generated handles.

This is a child ticket of the broader multi-chat/session-fork umbrella and
covers only branch naming/reuse lifecycle, not full multi-window architecture.

## Why

The umbrella ticket already ships branch fork/rename/prune primitives, but the
user-facing lifecycle is still incomplete:

- branch handles are often generated first and cleaned up later
- pruned/archived branches disappear from normal picker flows
- there is no explicit, user-facing “reuse this old branch identity/history”
  story

Without this, long-running trees become harder to navigate and reuse.

## Scope

- Branch rename UX/contract for both `display_name` and `@agent` handle.
- Explicit “reuse/reopen archived branch” flow.
- Collision/uniqueness policy when reusing old handles.
- Clear distinction between:
  - creating a new fork
  - reopening an archived branch
  - renaming an active branch to an old identity.

## Acceptance Criteria

- [ ] A user can rename the current branch to a prior branch-style identity
      (display + handle) without breaking branch routing.
- [ ] A user can reopen/reuse an archived branch from branch picker/UI controls.
- [ ] Reopened branches preserve prior timeline/session identity (no accidental
      duplicate-branch creation).
- [ ] Handle uniqueness rules are deterministic and documented for:
  - active-vs-active collisions
  - active-vs-archived collisions
  - restore-time collisions.
- [ ] Branch picker/state labels make branch lifecycle obvious (active,
      archived, reopened).
- [ ] Web/API tests cover rename + archived reuse + collision edge cases.

## Implementation Paths

### Path A — explicit archived-branch restore flow (recommended)
- Add a restore/reopen branch endpoint and UI action.
- Keep archived records in `chat_branches`; toggle lifecycle state instead of
  recreating new branch rows.
- Prefer stable branch identity across archive/restore.

### Path B — alias-only reuse on fresh branch creation
- Always create fresh branches and copy old labels/handles where available.
- Simpler flow, but weaker identity continuity and more history ambiguity.

Path A is preferred because it preserves branch identity and aligns better with
session-tree semantics.

## Test Plan

- [ ] DB tests in `piclaw/test/db/chat-branches.test.ts` for rename/reuse rules.
- [ ] Handler tests in `piclaw/test/channels/web/agent-handlers.test.ts` (or
      equivalent) for restore/reopen API behavior.
- [ ] Web tests for branch picker rename/reopen flow and active-branch switching.
- [ ] Run `cd /workspace/piclaw/piclaw && bun run quality` for any code-bearing
      implementation.

## Definition of Done

- [ ] Rename + archived-branch reuse behavior is documented and shipped.
- [ ] No regressions in `@agent` routing, queueing, or branch-scoped runtime.
- [ ] Umbrella ticket links to this child and marks naming/reuse slice as
      separately tracked.

## Updates

### 2026-03-17
- Created as a focused child ticket from the umbrella
  `parallel-web-chat-windows-with-session-forks` to isolate one concrete user
  need: rename to old tree branch identities and intentionally reuse archived
  branches.

## Links

- `kanban/20-doing/parallel-web-chat-windows-with-session-forks.md`
- `piclaw/piclaw/src/db/chat-branches.ts`
- `piclaw/piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/piclaw/web/src/app.ts`
