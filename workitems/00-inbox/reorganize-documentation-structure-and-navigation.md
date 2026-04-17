---
id: reorganize-documentation-structure-and-navigation
title: Reorganize documentation structure and navigation
status: inbox
priority: medium
created: 2026-04-17
updated: 2026-04-17
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - docs
  - information-architecture
  - navigation
owner: pi
blocked-by: []
---

# Reorganize documentation structure and navigation

## Summary

Reorganize the repo documentation so it is easier to browse by intent
(setup, operations, architecture, reference, platform-specific notes) instead of
requiring readers to guess file names or scan a flat `docs/` directory.

The goal is not to rewrite all content. The first goal is to improve the
**information architecture**, landing pages, naming consistency, and cross-links
so the current docs become easier to find and maintain.

## Problem Statement

The current docs set has grown organically and now mixes several kinds of
content in the top-level `docs/` directory:

- setup/install guides
- runtime/architecture internals
- feature/reference docs
- platform-specific notes
- archived or helper material
- media/assets mixed alongside content pages

That creates a few problems:

- readers have to infer where a topic should live
- related topics are not always grouped together
- top-level `docs/` is noisier than necessary
- README links and doc-to-doc links are harder to keep consistent over time
- new docs do not have a clear placement model

## Desired Behavior

- Documentation is grouped by clear top-level intent.
- The README and docs landing structure make it obvious where to go next.
- Platform-specific notes (for example Azure) live in predictable places.
- Assets/helpers/archive material are separated cleanly from reader-facing docs.
- Existing links keep working or are updated in one pass.
- The new structure is documented so future docs additions follow the same model.

## Candidate target structure

A likely first-pass structure could be:

- `docs/setup/`
  - install, configuration, reverse proxy, auth/bootstrap material
- `docs/operations/`
  - release, runtime operations, recovery, maintenance
- `docs/architecture/`
  - runtime flows, storage model, extension contracts, interop internals
- `docs/reference/`
  - tools and skills, keychain, MCP, platform capability reference
- `docs/platforms/`
  - Azure, WhatsApp, M365, OS/platform-specific deployment notes
- `docs/archive/`
  - historical/retained docs not part of the primary navigation
- `docs/assets/`
  - images/diagrams/media used by docs pages

This exact layout is only a starting point; the ticket should lock a minimal
structure before moving many files.

## Acceptance Criteria

- [ ] The current docs inventory is grouped by intent/category.
- [ ] A proposed target information architecture is defined.
- [ ] Top-level landing/navigation guidance is updated accordingly.
- [ ] Files moved during the first pass land in predictable category folders.
- [ ] README and doc cross-links are updated to the new structure.
- [ ] Asset/helper/archive placement is clarified explicitly.
- [ ] A short placement rule exists for future docs additions.
- [ ] Link integrity is checked after the reorganization.

## Implementation Paths

### Path A — IA first, then bounded moves (recommended)
1. Inventory current docs and group them by intent.
2. Define the target folder/navigation model.
3. Move only the clearest docs in the first tranche.
4. Update README + major landing links.
5. Leave ambiguous docs in place until a second pass if needed.

**Pros:**
- lower risk of churn
- avoids a giant rename-only pass without clear rules
- easier to review

**Cons:**
- may leave a temporary hybrid layout after the first pass

### Path B — Big-bang full docs tree reshuffle
1. Define the new structure.
2. Move everything in one pass.
3. Fix links afterwards.

**Pros:**
- cleaner end state immediately

**Cons:**
- much higher link-break / review risk
- harder to validate incrementally

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Likely validation
- manual link audit from `README.md`
- grep for stale doc paths after moves
- docs index / landing-page review
- any doc-link or packaging checks that reference moved files

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
- Created from user request to add an explicit ticket for documentation reorganization.
- Framed as an information-architecture and navigation cleanup first, not a blanket docs rewrite.
- Quality: ★★★☆☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

## Notes

Prefer a bounded IA-first pass. The first tranche should optimize discoverability
and maintenance without creating unnecessary churn in stable external links.

## Links

- `README.md`
- `docs/`
- `docs/azure/`
- `docs/archive/`
- `docs/helpers/`
