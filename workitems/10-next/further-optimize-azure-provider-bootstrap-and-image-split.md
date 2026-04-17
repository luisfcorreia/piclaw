---
id: further-optimize-azure-provider-bootstrap-and-image-split
title: Further optimize Azure provider bootstrap and image split
status: next
priority: high
created: 2026-04-17
updated: 2026-04-17
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - memory
  - performance
  - startup
  - azure
  - providers
  - cold-path
owner: smith
blocked-by: []
---

# Further optimize Azure provider bootstrap and image split

## Summary

Continue the Azure-specific cold-path work after the first successful provider-bootstrap/session-shim split.

Current evidence shows the Azure provider/session path was a real remaining startup cost and that moving provider bootstrap to process startup plus replacing the bundled session path with `azure-openai-session` produced a measurable improvement in fresh-process cold-session cost.

The next tranche should focus on reducing **Azure process-start import weight** and cleaning up the remaining coupling between:
- provider bootstrap / token refresh
- context repair logic
- image generation commands (`/image`, `/flux`)
- large image/helper code that does not belong on the provider import path

The preferred outcome is a smaller, clearer Azure provider module that handles registration and Azure text-model behavior, while image generation lives in a separate module or extension that is only imported when those commands are actually used.

## Acceptance Criteria

- [ ] Azure provider bootstrap remains process-scoped rather than ordinary-session-scoped.
- [ ] `runtime/extensions/integrations/azure-openai.ts` no longer owns Azure image generation helpers directly; `/image` and `/flux` move to a separate module or extension.
- [ ] Ordinary web chat session creation does not import Azure image-generation code on the cold path.
- [ ] Azure model discovery and routing remain correct for:
  - static-key proxy mode
  - managed-identity mode
  - Foundry text models
  - optional AOAI2 secondary endpoint
- [ ] Azure context-repair behavior remains correct for replayed tool-call IDs.
- [ ] Image-generation UX remains functional:
  - placeholder post creation/update
  - generated file persistence
  - user-facing error formatting
- [ ] Fresh-process cold-session measurement is re-run and recorded, with the delta called out explicitly versus the current post-shim Azure baseline.
- [ ] Any remaining large Azure cold-path cost that cannot be removed in this tranche is documented with evidence and split into follow-up work.

## Implementation Paths

### Path A — Separate Azure image commands from provider bootstrap (recommended)

Split `/image` and `/flux` support into a dedicated module, likely one of:
- `runtime/extensions/integrations/azure-openai-images.ts`
- `runtime/extensions/integrations/azure-openai-images-session/index.ts`

Move out of the provider file:
- image argument parsing
- size snapping / Foundry image sizing helpers
- image generation HTTP/API helpers
- placeholder post/update helpers
- generated-file formatting helpers
- command registration

Keep in the provider file only what is needed for:
- text-model/provider registration
- token management
- Azure-specific stream/routing behavior
- context repair

Why first:
- this is the cleanest way to lower provider import weight now that provider bootstrap is process-level.

### Path B — Tighten Azure bootstrap lifecycle boundaries

Review whether the provider bootstrap helper can be made smaller or more declarative by splitting:
- provider metadata/model lists
- token bootstrap / refresh
- model capability refresh

Potential outcome:
- smaller bootstrap helper module for process startup
- heavy request/streaming code left out of startup import path where possible

Why second:
- this may further reduce process-start cost after the image split is removed from the provider file.

### Path C — Re-measure and re-rank remaining Azure cost

After the split lands, repeat:
- source-tree fresh-process cold-session measurement
- live post-reload measurement after install/restart

Compare against current Azure-tranche baseline:
- source-tree cold session after provider-bootstrap/session-shim split: **~169 ms / ~26.9 MB RSS delta / 41 tools**

Why third:
- the next decision should be based on measured residual cost, not intuition.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
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
- `runtime/test/runtime/provider-bootstrap.test.ts`
- `runtime/test/extensions/session-shutdown-hooks.test.ts`
- `runtime/test/extensions/azure-openai-routing.test.ts`
- `runtime/test/extensions/azure-openai-retry-after.test.ts`
- `runtime/test/extensions/azure-openai-session.test.ts`
- `bunx tsc --noEmit -p runtime/tsconfig.json`

### New regression coverage to add
- image command registration after the split
- image placeholder/update-post path after the split
- image error formatting / provider-label behavior after the split
- proof that ordinary session bootstrap no longer imports the image module on the cold path

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

### 2026-04-17
- Created as a follow-up to the active cold-session bootstrap work after the Azure provider-bootstrap/session-shim split produced a measurable improvement.
- Current evidence to preserve:
  - Azure path before the split contributed roughly **~41 ms / ~4 MB RSS** in the source-tree cold-session benchmark.
  - After moving provider bootstrap to process startup and replacing the bundled session path with `azure-openai-session`, the source-tree cold-session spot check improved to roughly **169 ms / 26.9 MB RSS delta / 41 tools**.
- This follow-up narrows scope to the next likely Azure-specific win: split image-generation code out of the provider module and re-measure.
- Quality score: 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1) ★★★★☆

## Notes

- Keep the `runtime/src` ↔ `runtime/extensions` import boundary safe. Process bootstrap from `runtime/src` should continue to use runtime-side lazy import contracts instead of direct typed imports from `runtime/extensions`.
- Avoid re-introducing session-scoped Azure provider refresh as part of the image split.
- The current active parent ticket is still:
  - `workitems/20-doing/reduce-cold-session-bootstrap-memory-and-eager-extension-load.md`

## Links

- Parent cold-path ticket: `workitems/20-doing/reduce-cold-session-bootstrap-memory-and-eager-extension-load.md`
- Parent RAM work: `workitems/20-doing/runtime-ram-optimization-opportunities-2026-04-17.md`
- Memory history: `docs/performance/memory-footprint-history.md`
- Azure provider implementation: `runtime/extensions/integrations/azure-openai.ts`
- Azure session shim: `runtime/extensions/integrations/azure-openai-session/index.ts`
