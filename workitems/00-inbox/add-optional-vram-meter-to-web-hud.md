---
id: add-optional-vram-meter-to-web-hud
title: Add optional VRAM meter to the web system HUD
status: inbox
created: 2026-04-12
updated: 2026-04-12
tags:
  - work-item
  - kanban
  - web
  - telemetry
  - gpu
owner: 
---

# Add optional VRAM meter to the web system HUD

## Summary

Extend the top-right web system meters HUD so it can show a `VRAM` sparkline and percentage when GPU memory telemetry is available. Keep this explicitly best-effort and optional: CPU/RAM/swap must continue to work with no GPU dependencies, and the HUD should hide the VRAM row when no supported telemetry source is available.

The current environment does not expose an obvious GPU telemetry surface (`nvidia-smi`, `rocm-smi`, `intel_gpu_top`, `/dev/dri` were absent during initial inspection), so the implementation should be capability-driven rather than assuming a GPU is present.

## Acceptance Criteria

- [ ] The system metrics backend can report optional VRAM usage fields without affecting CPU/RAM/swap reporting.
- [ ] The web HUD renders a `VRAM` row only when valid GPU memory telemetry is available.
- [ ] The HUD remains stable and visually compact when the VRAM row is absent.
- [ ] GPU telemetry discovery is best-effort and does not log noisy errors when unsupported.
- [ ] At least one concrete provider path is implemented and validated (recommended: NVIDIA first).
- [ ] Unsupported platforms/vendors degrade gracefully with no broken UI and no failing requests.
- [ ] The `/meters` command behavior remains unchanged.

## Implementation Paths

### Path A — NVIDIA-first provider
- Probe for `nvidia-smi`
- Read total/used memory for the active GPU or aggregate across visible GPUs
- Return:
  - `vram_percent`
  - `vram_series`
  - `vram_total_bytes`
  - `vram_used_bytes`
  - `gpu_provider`
- Show `VRAM` row only when values are present

### Path B — Multi-provider adapter
- Add provider abstraction with ordered probes, e.g.:
  - NVIDIA via `nvidia-smi`
  - AMD via `rocm-smi`
  - Intel/Linux via an available DRM or vendor-specific surface if reliable
- Normalize all providers into one optional metrics shape
- Keep provider-specific parsing isolated from the main HUD logic

### Path C — Environment-gated rollout
- Ship behind capability detection and optional config toggle if needed
- Prefer hidden-by-default unless telemetry is confirmed

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/channels/web/system-metrics.test.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- `runtime/test/channels/web/ui-meters-commands.test.ts`
- `runtime/test/web/compose-box.test.ts`
- `bun run typecheck`
- `make build-web`

### New regression coverage to add
- [ ] Parser/unit tests for each supported GPU telemetry provider
- [ ] Backend tests for optional VRAM fields present/absent
- [ ] HUD rendering test for conditional `VRAM` row display
- [ ] Aggregation/selection test if multiple GPUs are exposed
- [ ] No-GPU smoke case ensuring no row and no endpoint failure

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

### 2026-04-12
- Created from follow-up discussion after shipping the CPU/RAM/swap web HUD.
- Captured the constraint that GPU telemetry is not universally available from standard Node/OS APIs and must be best-effort.
- Recorded the initial environment observation that no obvious GPU telemetry surface was exposed in the current container.

## Notes

- Do not make VRAM support a hard dependency for the web HUD.
- Prefer capability detection over platform guessing.
- Keep the UI compact; avoid widening the HUD more than necessary.
- If multiple GPUs are present, decide whether to aggregate, pick the active device, or expose only the first visible adapter.

## Links

- `runtime/src/channels/web/agent/system-metrics.ts`
- `runtime/web/src/components/system-meters-hud.ts`
- `runtime/web/static/css/shell.css`
- `runtime/test/channels/web/system-metrics.test.ts`
