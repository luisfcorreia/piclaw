---
id: repair-clean-worktree-tooling-and-reload-contract
title: Repair clean-worktree tooling and reload contract
status: review
priority: high
created: 2026-03-29
updated: 2026-03-30
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - tooling
  - worktrees
  - reload
  - quality
owner: pi
blocked-by: []
---

# Repair clean-worktree tooling and reload contract

## Summary

Fresh clean worktrees, sandbox copies, and autoresearch environments originally showed two related operational problems:

1. repo-local commands could fail with tool-resolution errors such as `tsc: command not found` and `eslint: command not found`, especially when package scripts `cd runtime` and relied on PATH / dependency layout assumptions that did not always hold in copied or alternate checkout roots
2. the reload/install contract between docs and implementation was unclear

This ticket now tracks the stabilized outcome: clean-worktree validation is repaired, and the reload/install contract has been simplified so `make local-install` is install-only while restart remains an explicit separate step (`make restart` or agent-driven `exit_process`).

This ticket should make worktree-based validation and reload behavior reliable in the authoritative container environment:

- host/runtime: container
- service manager: Supervisor
- canonical workspace: `/workspace`
- canonical global Bun root: `/usr/local/lib/bun`

The goal is not to redesign packaging. It is to make clean worktrees and agent-driven reloads deterministic, documented, and consistent with the code that actually ships.

## Acceptance Criteria

- [ ] A fresh clean worktree or sandbox copy can run the standard validation commands without `tsc` / `eslint` resolution failures.
- [ ] `bun run lint`, `bun run typecheck`, and `bun run build:web` work from a clean worktree without depending on hidden host state.
- [ ] The documented reload contract matches the implemented one:
  - [ ] `make local-install` is install-only
  - [ ] restart remains an explicit separate step (`make restart` or agent-driven `exit_process`)
  - [ ] reload skill/docs reflect the real supported flow
- [ ] The container reload path continues to install into `/usr/local/lib/bun/install/global/node_modules/piclaw` and does not depend on workspace-local Bun roots.
- [ ] The fix does not reintroduce repo-local `.bun/` cache commits or require tracked cache state for successful builds.
- [ ] Validation evidence is recorded from at least one clean worktree or sandbox-style checkout.

## Implementation Paths

### Path A — Fix the implementation to match a simpler explicit contract (implemented)
- Normalize Bun/tool invocation so worktree-local `bun run ...` resolves `tsc` and `eslint` reliably after `cd runtime`.
- Make `make local-install` install-only.
- Keep restart as a separate explicit action (`make restart` or agent-driven `exit_process`).
- Keep the install destination aligned with the current container runtime (`/usr/local/lib/bun`, Supervisor).

Why this won:
- removes hidden side effects from `make local-install`
- makes agent-driven and manual reload flows easier to reason about
- keeps worktree/autoresearch behavior closest to normal repo usage

### Path B — Preserve `local-install` restart behavior behind flags
- Keep `local-install` responsible for both install and optional restart.
- Continue documenting environment-variable switches such as `PICLAW_SKIP_RESTART`.

Why this lost:
- keeps extra branching in the primary install target
- makes the contract harder to explain than a clean install-only target

## Test Plan

- [ ] Create or use a fresh clean worktree / sandbox checkout.
- [ ] From that checkout, run:
  - [ ] `bun run lint`
  - [ ] `bun run typecheck`
  - [ ] `bun run build:web`
- [ ] Verify no `tsc: command not found` or `eslint: command not found` failures occur.
- [ ] Validate the chosen reload contract:
  - [ ] run `make local-install` and confirm install succeeds without restarting
  - [ ] confirm docs/skill guidance now use `make local-install` for install and `make restart` / `exit_process` for restart
- [ ] Confirm the install destination remains `/usr/local/lib/bun/install/global/node_modules/piclaw` in this container.
- [ ] Record any remaining follow-up gaps in `## Updates`.

## Definition of Done

- [ ] Clean worktree validation is reproducibly green for the standard commands.
- [ ] Reload docs and implementation no longer disagree.
- [ ] The container-specific install/restart contract is explicit and preserved.
- [ ] No `.bun/`-style repo-local cache dependency is required for the fixed workflow.
- [ ] Evidence and commands are recorded in `## Updates`.

## Updates

### 2026-03-30
- Follow-up cleanup per explicit user request: simplified the contract further so `make local-install` no longer branches on restart behavior at all.
- Updated implementation/docs/skill together:
  - `Makefile` `local-install` is now install-only
  - `/workspace/.pi/skills/reload/SKILL.md` now uses `make local-install` for agent-driven installs and `make local-install && make restart` for manual shell reloads
  - `docs/development.md` now describes `make local-install` as install-only and keeps `make restart` explicit
- This makes the reload/install contract easier to reason about than the earlier `PICLAW_SKIP_RESTART` flag-based variant.
- Review focus from here: close out against the simpler contract rather than the earlier skip-restart wording.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Lane change: `20-doing` → `40-review` during board cleanup because the implementation evidence now covers the ticket’s intended Path A scope.
- Review focus from here: confirm the recorded evidence is sufficient for closeout rather than continue treating this as an active implementation ticket.
- Existing evidence carried forward into review:
  - `runtime/scripts/repo-dev-command.ts` now runs repo-owned `build`, `lint`, and `typecheck` through deterministic repo-local tool paths instead of cwd-sensitive bare `tsc` / `eslint`
  - root `package.json` scripts were updated to call that helper
  - focused coverage landed in `runtime/test/scripts/repo-dev-command.test.ts`
  - `cd runtime && bun test test/scripts/vendor-workflow.test.ts test/scripts/repo-dev-command.test.ts` → `5 pass, 0 fail`
  - repo checkout: `bun run lint` and `bun run typecheck` → exit `0`
  - fresh detached worktree with `node_modules/` removed each time:
    - `bun run lint` → exit `0`
    - `bun run typecheck` → exit `0`
    - `bun run build:web` → exit `0`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Continued active implementation on branch `feature/repair-clean-worktree-tooling-and-reload-contract`.
- Path A tranche landed locally:
  - added `runtime/scripts/repo-dev-command.ts` to run repo-owned `build`, `lint`, and `typecheck` through deterministic repo-local tool paths instead of cwd-sensitive bare `tsc` / `eslint`
  - updated root `package.json` scripts to call that helper
  - at that stage, `Makefile` `local-install` temporarily used a `PICLAW_SKIP_RESTART=1` flag-based contract before the later simplification to install-only
  - added focused coverage in `runtime/test/scripts/repo-dev-command.test.ts`
- Validation evidence so far:
  - `cd runtime && bun test test/scripts/vendor-workflow.test.ts test/scripts/repo-dev-command.test.ts` → `5 pass, 0 fail`
  - repo checkout: `bun run lint` and `bun run typecheck` → exit `0`
  - fresh detached worktree with `node_modules/` removed each time:
    - `bun run lint` → exit `0`
    - `bun run typecheck` → exit `0`
    - `bun run build:web` → exit `0`
- Non-destructive reload-contract smoke was initially recorded under the earlier flag-based contract before the later install-only simplification.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-30
- Lane change: `10-next` → `20-doing` because implementation of Path A has started.
- Fresh detached worktree validation reproduced the remaining failures exactly:
  - `bun run build:web` now succeeds from a clean worktree after the earlier vendor self-heal work
  - `bun run lint` still fails by falling through to system `eslint` 6.4.0 instead of the repo toolchain
  - `bun run typecheck` still fails with `tsc: command not found`
- Implementation intent for this tranche: add a repo-owned dependency/bootstrap command path for build/lint/typecheck so clean worktrees do not depend on cwd-sensitive PATH lookup, and implement the missing `PICLAW_SKIP_RESTART` contract in `make local-install`.
- Note: this ticket is now active alongside the newly added CI simplification ticket because the user explicitly requested both tracking and implementation work in the same session.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created after board prioritization and Adaptive Card selection of **Worktree Tooling** as the next refactor focus.
- Captured the two concrete pain points already observed during recent refactor/autoresearch work:
  - clean worktrees can fail with `tsc: command not found` / `eslint: command not found`
  - the reload skill documents `PICLAW_SKIP_RESTART=1 make local-install`, but the current `Makefile` does not implement that contract yet
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- Recent `.bun/` secret-scanning cleanup solved the history problem, but this ticket is about runtime/tooling determinism rather than Git history.
- Keep identity continuity explicit while implementing:
  - active runtime is the container
  - Supervisor is the service manager
  - `/workspace` is authoritative
  - `/usr/local/lib/bun` is the canonical Bun root
- The already-completed `vendor-beautiful-mermaid-for-clean-worktrees` ticket reduced one clean-worktree failure class; this ticket should address the remaining command-resolution and reload-contract gaps.

## Links

- `/workspace/.pi/skills/reload/SKILL.md`
- `Makefile`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `workitems/50-done/vendor-beautiful-mermaid-for-clean-worktrees.md`
