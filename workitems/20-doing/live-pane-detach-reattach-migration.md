---
id: live-pane-detach-reattach-migration
title: Add live detach/reattach pane migration across standalone web windows
status: doing
priority: high
created: 2026-03-31
updated: 2026-03-31
target_release: next
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - web-ui
  - panes
  - windows
  - architecture
  - safari
owner: pi
---

# Add live detach/reattach pane migration across standalone web windows

## Summary

Users expect true detach/reattach behavior for panes, not just reopen-in-window.

Today Piclaw's standalone pane windows reopen a pane by path and transfer some
serialized state. That is useful, but it is not the same as moving the live
pane instance between windows. This ticket defines a bounded v1 for **live pane
migration** where multiple panes can be detached into separate standalone
windows and later reattached back into the main app, with exactly one active
owner window per pane.

The v1 approach should extend the existing pane registry, pane instance, tab
store, and pop-out orchestration rather than introducing a full IDE-style
docking/layout manager.

## Problem Statement

The current reopen model is not enough for the user expectation of “Open in
Window” behaving like a true detach/reattach operation.

Observable gaps today:

- a pop-out is fundamentally a reopened copy, not the same live pane owner
- ephemeral runtime/UI state may be serialized only partially or not at all
- reattaching is not modeled as ownership transfer back into the main shell
- ownership is implicit rather than explicit, so the UX cannot cleanly show
  “this pane lives over there right now”

The goal is to make detachable panes feel like movable live surfaces rather
than reloadable previews of the same content.

## v1 Scope

### In scope
- multi-pane live detach into separate standalone browser windows
- live reattach back into the main app
- any pane type should participate through a generic host contract
- single-owner enforcement: one live owner window per pane instance
- explicit detached/reattach UI states in the main shell and pop-out shell
- safe fallback to the existing reopen model when live transfer is unsupported
  or the handshake fails
- Safari support as a required supported browser for the v1 contract

### Out of scope for v1
- full drag/drop docking or layout manager
- cross-device or cross-browser migration
- simultaneous shared control of one pane instance
- server-backed detached-pane registry
- guaranteeing the same live instance after full browser refresh
- guaranteeing the same live instance after the main window closes
- rewriting the entire pane extension API in one step
- pane-specific bespoke migration logic where the generic host layer can work

## Constraints

- Keep the current reopen-in-window flow as the compatibility fallback.
- Use same-origin browser windows only.
- Detach must be user-triggered and respect normal popup restrictions.
- Do not place sensitive session/runtime material in URLs beyond opaque
  short-lived identifiers.
- No backend/runtime registry for v1 unless the browser-only ownership model
  proves impossible; the preferred v1 design is browser-memory only.
- Because v1 is browser-memory only, refresh/main-window-close continuity may
  degrade to a safe fallback reopen/reattach flow rather than preserving the
  exact same live owner instance.

## Recommended Implementation Path

### Path A — generic host ownership transfer layer first
Build the ownership-transfer layer before optimizing any individual pane type.

Core ideas:
- assign each detachable pane a stable `paneInstanceId`
- keep `panePath` as the logical content key
- introduce explicit owner/non-owner state in the pane host layer
- detach by transferring ownership of the mounted pane instance to a pop-out
  host shell where possible
- reattach by transferring ownership back to the main shell
- if live transfer cannot complete, fall back safely to today's reopen model

### Proposed slices

#### Slice 1 — ownership model and placeholders
- add `paneInstanceId` lifecycle tracking
- represent attached/detached ownership in tab/pane state
- render non-owner placeholders in the shell instead of live duplicates
- add explicit Reattach affordance

#### Slice 2 — browser window handshake
- add same-origin detach/reattach handshake between owner and target windows
- validate pane identity and ownership claims
- handle popup-blocked and failed-handoff cases safely

#### Slice 3 — generic pane host transfer contract
- extend the pane instance / host contract with minimal transfer hooks
- avoid broad extension API rewrite; add the smallest useful ownership methods
- keep unsupported panes on fallback reopen behavior

#### Slice 4 — close/reattach recovery
- unexpected pop-out close returns ownership to the main app when possible
- failed reattach keeps the detached pane authoritative and offers retry
- preserve backward compatibility with existing pop-out URLs

#### Slice 5 — browser verification, including Safari
- verify detach/reattach semantics in Chromium/Firefox/Safari
- document any browser-imposed safe fallback where strict live continuity is
  impossible without violating the no-backend-registry constraint

## Acceptance Criteria

- [ ] A user can detach multiple panes into separate standalone windows.
- [ ] Each detached pane has exactly one live owner at a time.
- [ ] Reattach returns control to the main app without reopening from scratch
      when live transfer succeeds.
- [ ] The main shell shows a clear non-owner/detached state instead of a live
      duplicate when the pane lives in another window.
- [ ] Unsupported panes or failed handoff fall back safely to the existing
      reopen-in-window behavior.
- [ ] Detached-window close is handled safely and predictably.
- [ ] Existing pop-out URLs remain backward-compatible.
- [ ] Safari has a verified v1 path for the supported contract, with any
      browser-imposed fallbacks explicitly documented.

## Failure Behavior

- Popup blocked → keep the pane in place, show retry guidance.
- Detach handshake fails after popup opens → keep the pane in the original
  window; show failure state safely.
- Reattach handshake fails → keep the pane in the detached window; show retry.
- Detached window closes unexpectedly → automatically reattach when possible.
- Main window closes while panes are detached → browser-memory v1 may fall back
  to safe recovery rather than guaranteeing the same live instance.
- Detached-window refresh → browser-memory v1 may fall back to safe recovery
  rather than guaranteeing restoration of the same live instance.

## Test Plan

### Focused web tests
- [ ] pane ownership state machine
- [ ] detach handshake success/failure
- [ ] reattach handshake success/failure
- [ ] fallback to reopen model
- [ ] single-owner enforcement
- [ ] unexpected pop-out close recovery
- [ ] tab strip / shell UI state for detached panes
- [ ] backward compatibility for existing pop-out URLs

### Browser/integration tests
- [ ] detach two or more panes
- [ ] reattach in different order
- [ ] close detached window and verify safe recovery
- [ ] verify unsupported/failed live detach falls back cleanly
- [ ] Safari verification pass

### Validation commands
- [ ] targeted `bun test ...`
- [ ] `bun run build:web`
- [ ] `bun run lint`
- [ ] `bun run typecheck`

## Updates

### 2026-03-31
- Lane change: `10-next` → `20-doing`.
- Started **Slice 1 — ownership model and placeholders** and the first piece of **Slice 2 — browser window handshake**.
- Implemented the first host-layer detach scaffolding in the web UI:
  - opaque `pane_instance_id` / `pane_window_id` transfer params for standalone pane windows
  - detached-tab and detached-dock placeholder states in the main shell
  - explicit `Reattach` actions in the main shell and pane pop-out shell
  - detach-aware tab-strip affordances and context-menu reattach action
  - opener-based reattach messaging plus basic closed-window recovery polling
  - detach-claim handshake scaffolding so the source window now records a pending detach and only marks the pane detached after the pop-out claims ownership with matching opaque ids
  - compatibility fallback retained in `popOutPane(...)` when detach-aware registration is not used
- Added focused regression coverage in:
  - `runtime/test/web/pane-detach-state.test.ts`
  - `runtime/test/web/pane-detach-transfer.test.ts`
  - `runtime/test/web/app-window-actions.test.ts`
  - `runtime/test/web/app-pane-mode-render.test.ts`
- Validation completed:
  - `bun test runtime/test/web/pane-detach-state.test.ts runtime/test/web/pane-detach-transfer.test.ts runtime/test/web/app-window-actions.test.ts runtime/test/web/app-pane-mode-render.test.ts runtime/test/web/app-main-shell-render.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
- Added the first generic pane-host transfer contract slice:
  - `PaneContext.transferState`
  - `PaneInstance.exportHostTransferState?()`
  - opaque `pane_transfer` payload storage/consumption for pop-out bootstraps
  - editor is the first adopter through the generic host-transfer path
- Added pane lifecycle hooks around detach/attach:
  - `PaneInstance.beforeDetachFromHost?()`
  - `PaneInstance.afterAttachToHost?()`
  - detach flow now invokes the hook before preparing transfer data
  - host mount flow now invokes the hook after attaching a pane to the new host
  - editor is the first adopter of the lifecycle hooks
- Added the first live transfer-capable pane-instance path:
  - `PaneInstance.moveHost?(container, context)`
  - same-origin source windows can register live-transfer-capable pane instances behind the opaque detach ids
  - pop-out boot now attempts to claim and move a live pane instance before falling back to normal remount
  - editor is the first adopter of `moveHost(...)`, reusing the same pane instance object while rebuilding its host DOM in the target window
- Added the first runtime-heavy second adopter:
  - VNC now implements the detach/attach lifecycle hooks plus `moveHost(...)`
  - the existing VNC shell/root DOM is relocated into the target host container instead of remounting a fresh pane instance when live move succeeds
- Added terminal as another live-transfer adopter:
  - terminal now implements the detach/attach lifecycle hooks plus `moveHost(...)`
  - the existing terminal shell/root DOM is relocated into the target host container and host-specific listeners/observers are rebound to the new window/document when live move succeeds
- Remaining gap for later slices: this is now a real transfer-capable pane-instance path for supported panes, but not yet universal same-runtime migration across all pane types.

## Definition of Done

- [ ] Multi-pane live detach/reattach works for the supported generic host path.
- [ ] Exactly one owner window controls a live pane instance at a time.
- [ ] Successful live reattach avoids reopening from scratch.
- [ ] Detached-pane UI makes ownership state obvious.
- [ ] Existing reopen-based pop-out behavior still works as fallback.
- [ ] Targeted tests, `build:web`, `lint`, and `typecheck` pass.
- [ ] Safari support is verified for the supported contract, or any browser
      limitations are documented as explicit safe fallbacks.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Browser-only ownership is fragile | refresh/close recovery is weaker without a server registry | keep reopen fallback, document continuity limits |
| “Any pane” is broader than editor-only transfer | some pane types may not expose enough lifecycle hooks | start with generic host contract and degrade unsupported panes safely |
| Safari parity may constrain browser APIs | ownership/channel behavior may differ | verify early; avoid APIs with weak Safari support |
| Duplicate-owner bugs would be confusing/dangerous | two live controllers for one pane breaks invariants | single-owner state machine + focused tests |
| Large architectural surface | touches pane host, tab model, routing, and pop-out shell | ship in slices; do host lifecycle first |

## Refinement Notes

1. Problem statement: users expect true detach/reattach behavior.
2. Primary user/workflow: any web user; any pane may be detached.
3. Success criteria: same live owner semantics, reattach, safe close recovery,
   one owner at a time, intact unsaved/runtime state, instant-feeling UX.
4. MVP behavior: multi-pane live windowing.
5. Out of scope: none of the initial candidate exclusions were accepted, but v1
   later explicitly avoids full docking, server registry, cross-device/shared
   ownership, and guaranteed same-instance recovery across refresh/main-window
   close because of the browser-memory-only constraint.
6. In-scope surfaces: pane registry/host lifecycle, tab store, pop-out routing,
   app shell, pane instance contract, reattach UI, standalone shell; backend
   excluded for v1.
7. Platform constraints: Safari required; same-origin browser windows.
8. Failure behavior: blocked popup keeps pane local; failed detach keeps source
   owner; failed reattach keeps detached owner; unexpected close should recover
   safely; refresh/main-close may degrade to safe fallback.
9. Persistence: browser-memory only for v1, with relaxed continuity guarantees.
10. Alignment: extend pane registry + pane instance + pop-out orchestration;
    add ownership transfer layer; avoid full layout manager.
11. Lowest-risk first slice: host lifecycle / ownership transfer first.
12. Avoid for v1: full docking manager, cross-device migration, shared control,
    server registry, guaranteed same-instance recovery after refresh/main-close,
    bespoke per-pane rewrites, sweeping API rewrite.
13. Identity: stable `paneInstanceId`; logical `panePath`; single owner only.
14. Inputs/outputs: detach, reattach, close, popup blocked, handshake
    outcomes; output is moved ownership and explicit detached UI state.
15. Existing behavior: current reopen-in-window remains fallback.
16. Performance: detach/reattach should feel near-instant and not burden normal
    tab switching.
17. Security: same-origin only, short-lived opaque ids, auth/session preserved,
    stale/mismatched claims rejected.
18. Export/share: nothing new; live ownership state is runtime-only.
19. Proof: focused web tests, browser/integration tests, Safari verification,
    build/lint/typecheck.
20. Closure: multi-pane detach/reattach works with clear ownership and safe
    fallback behavior.

## Links

- `workitems/50-done/pop-out-terminal-or-tab-into-new-window.md`
- `workitems/50-done/allow-any-editor-tab-to-open-in-a-standalone-pop-out-window.md`
- `runtime/web/src/ui/app-window-actions.ts`
- `runtime/web/src/ui/app-branch-pane-orchestration.ts`
- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/src/panes/pane-types.ts`
- `runtime/web/src/panes/pane-registry.ts`
- `runtime/web/src/panes/tab-store.ts`
