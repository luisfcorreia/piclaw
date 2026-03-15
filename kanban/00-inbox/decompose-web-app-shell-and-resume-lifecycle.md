---
id: decompose-web-app-shell-and-resume-lifecycle
title: Decompose web app shell and return-to-app lifecycle handling
status: inbox
priority: medium
created: 2026-03-15
updated: 2026-03-15
target_release: next-minor
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
owner: pi
---

# Decompose web app shell and return-to-app lifecycle handling

## Summary

`piclaw/web/src/app.ts` has grown to roughly 2.7k lines and now mixes chat orchestration, branch/window management, SSE handling, return-to-app refresh logic, queue reconciliation, viewport/PWA recovery, and general UI shell state. The recent audit/refactoring pass extracted one low-risk helper (`ui/optional-api.ts`) but confirmed that further cleanup should happen as a dedicated follow-up rather than being buried inside a hygiene ticket.

## Acceptance Criteria

- [ ] Extract at least one focused submodule/hook from `web/src/app.ts` without behavioural change.
- [ ] Return-to-app / wake / resume lifecycle logic is grouped coherently instead of being scattered across the shell.
- [ ] Queue reconciliation helpers stay isolated from unrelated viewport/windowing logic.
- [ ] Tests cover any extracted helpers or hooks.
- [ ] `bun run build:web` and relevant focused tests pass.

## Implementation Paths

### Path A — Lifecycle-first decomposition (recommended)
Extract the wake/resume/focus/pageshow/visibility handling into a dedicated UI helper/hook, then peel off another cluster if warranted.

### Path B — State-domain decomposition
Split `app.ts` by domain (branch/windowing, queue state, BTW/adaptive cards, shell lifecycle).

## Test Plan

- [ ] Focused web tests for any extracted helper/hook
- [ ] `bun run build:web`
- [ ] Relevant queue/window/mobile viewport tests

## Definition of Done

- [ ] One or more coherent helpers/hooks extracted
- [ ] No behaviour regressions introduced
- [ ] Audit ticket links back here as the intentional deeper follow-up

## Updates

### 2026-03-15
- Created during the post-release code audit after confirming `web/src/app.ts` had reached ~2691 lines and now mixes several distinct concerns.
- Explicitly spun out so the hygiene/audit pass can close with concrete low-risk wins instead of absorbing a broader shell rewrite.

## Notes

- This is intentionally a follow-up refactor ticket, not part of the same tranche as the current audit cleanup.

## Links

- `kanban/20-doing/post-release-code-audit.md`
- `piclaw/web/src/app.ts`
