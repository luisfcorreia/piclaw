---
id: continue-decompose-web-app-shell-toward-500-lines
title: Continue decomposing the web app shell toward 500 lines
status: doing
priority: high
created: 2026-03-29
updated: 2026-03-29
estimate: XL
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - quality
owner: pi
blocked-by: []
---

# Continue decomposing the web app shell toward 500 lines

## Summary

`runtime/web/src/app.ts` has now been reduced to about 2420 lines, but the long-term target is far lower: the shell should eventually become a thin coordinator of roughly 500 lines, delegating almost all domain logic to typed modules. This follow-up should optimize for dramatic size reduction through larger behavior-level extractions rather than incremental helper cleanup.

## Acceptance Criteria

- [ ] Extract one or more large coherent orchestration domains from `runtime/web/src/app.ts` into dedicated typed modules.
- [ ] Reduce `runtime/web/src/app.ts` materially again from the new 2420-line baseline.
- [ ] Preserve existing web shell behavior and payload shapes.
- [ ] Add focused tests for each new seam.
- [ ] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Thin-shell architecture push
Drive `app.ts` toward a small orchestration entrypoint by moving remaining authenticated boot/load flows, branch/pane lifecycle coordination, and major event routing/render blocks into domain modules.

### Path B — Major render/event partitioning
Split the shell into a few larger render/event/controller seams rather than many helper-sized modules so the remaining top-level file approaches composition-only responsibilities.

## Test Plan

- [ ] Add focused tests under `runtime/test/web/` for each newly extracted helper/module.
- [ ] Run focused web tests covering the new seams plus the existing app-shell seam suite.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run lint`.
- [ ] Run `bun run typecheck`.
- [ ] Run `bun run check:stale-dist`.

## Definition of Done

- [ ] New seam(s) are landed on `main`.
- [ ] `runtime/web/src/app.ts` is materially smaller than the 2420-line starting point.
- [ ] Validation evidence is recorded in `## Updates`.
- [ ] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Merged back autoresearch branch `autoresearch/exp-mnc0gztp-go8e` into `main` after a much larger modular tranche focused on orchestration domains and reusable shell utilities.
- New typed seams landed in this tranche:
  - `runtime/web/src/ui/app-chat-refresh-lifecycle.ts`
  - `runtime/web/src/ui/app-sidepanel-orchestration.ts`
  - `runtime/web/src/ui/app-compose-reference-orchestration.ts`
  - `runtime/web/src/ui/app-view-refresh-lifecycle.ts`
  - `runtime/web/src/ui/app-realtime-lifecycle-orchestration.ts`
  - `runtime/web/src/ui/app-agent-status-lifecycle.ts`
  - `runtime/web/src/ui/app-chat-pane-runtime-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-view-actions.ts`
  - `runtime/web/src/ui/app-agent-activity-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-scroll-orchestration.ts`
  - `runtime/web/src/ui/app-location-navigation.ts`
  - `runtime/web/src/ui/app-shell-render-router.ts`
  - `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
- Current size reduction in this ticket after the latest merge-back: `runtime/web/src/app.ts` `2160 → 1332` lines.
- Validation for the merged branch state:
  - focused web tests → `171 pass, 0 fail`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Largest new modules in this tranche remained bounded (`app-branch-pane-lifecycle-actions.ts` 659 lines, `app-realtime-lifecycle-orchestration.ts` 342 lines, `app-agent-status-lifecycle.ts` 256 lines), so the reduction came from several coherent domains rather than a replacement mega-module.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Merged back autoresearch branch `autoresearch/exp-mnbz6zwp-ccqw` into `main` after a more modular tranche focused on functional groupings instead of a single replacement module.
- New typed seams landed in this tranche:
  - `runtime/web/src/ui/app-boot-load-orchestration.ts`
  - `runtime/web/src/ui/app-branch-pane-orchestration.ts`
  - `runtime/web/src/ui/app-agent-status-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-actions.ts`
  - `runtime/web/src/ui/app-btw-orchestration.ts`
  - `runtime/web/src/ui/app-shell-ref-utils.ts`
- Current size reduction in this ticket after the latest merge-back: `runtime/web/src/app.ts` `2420 → 2160` lines.
- Validation for the merged branch state:
  - focused web tests → `151 pass, 0 fail`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Largest new modules in this tranche remained bounded (`app-agent-status-orchestration.ts` 338 lines, `app-timeline-actions.ts` 243 lines, `app-btw-orchestration.ts` 213 lines), avoiding the earlier mega-module failure mode.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created immediately after `workitems/50-done/continue-decompose-web-app-shell-below-2500-lines.md` landed a larger tranche and reduced `runtime/web/src/app.ts` to about `2420` lines.
- The true target for future passes is now explicit: drive `runtime/web/src/app.ts` toward roughly `500` lines, not just the next nearby threshold.
- Starting point already includes the latest typed seams:
  - `app-main-shell-render.ts`
  - `app-pane-mode-render.ts`
  - `app-sse-events.ts`
  - `app-status-refresh-orchestration.ts`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Likely next seams:
- remaining boot/load and refresh orchestration
- branch/pane lifecycle coordination that still lives in `app.ts`
- top-level render/composition responsibilities that can move into larger shell modules
- any lingering event-routing clusters still embedded inline

## Links

- `workitems/50-done/continue-decompose-web-app-shell-below-2500-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
