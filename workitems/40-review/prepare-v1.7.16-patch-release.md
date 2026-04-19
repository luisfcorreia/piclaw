---
id: prepare-v1.7.16-patch-release
title: Prepare v1.7.16 patch release
status: review
priority: medium
created: 2026-04-16
updated: 2026-04-19
target_release: v1.7.16
tags:
  - work-item
  - kanban
  - release
  - patch
owner: pi
blocked-by: []
---

# Prepare v1.7.16 patch release

## Summary

Prepare the next patch release after `v1.7.15` by reviewing the shipped delta, deciding whether the current dirty working tree belongs in scope, drafting release notes, and lining up the validation/publish checklist before any tag move or version bump.

## Current release-prep snapshot

### Tagged baseline
- Latest tag: `v1.7.15`
- Latest tag target at prep start: `e2a3f9ce`

### Committed delta since `v1.7.15`
- correlated backend `Server-Timing` / request timing on hot web paths
- non-blocking web model refresh during runtime hydration
- M365 Teams app entry URL correction
- web code block copy button fix
- observability / OTel follow-up ticket

### Additional uncommitted candidate tranche at prep start
- queue retry/status timing follow-up in the web channel
- status-duration UI changes
- autoresearch/session-shutdown regression coverage
- rebuilt `editor.bundle.*` and `login.bundle.*` assets

## Scope

This prep ticket should answer three practical questions before release day:

1. **What is actually in the candidate patch?**
   - committed delta since `v1.7.15`
   - any uncommitted local tranche that should be explicitly included or excluded
2. **What must be documented?**
   - user-visible release notes draft
   - any supporting docs/workitem movement needed to keep the paper trail honest
3. **What must be validated before tagging?**
   - full local tests
   - rebuilt web bundle / generated outputs if required
   - clean working tree
   - push / tag / release readiness

## Acceptance Criteria

- [ ] Delta review is written down with committed vs uncommitted scope called out explicitly.
- [ ] A patch-release notes draft exists for review before tagging.
- [ ] Relevant supporting workitems are updated or moved so follow-up work is not left implicit.
- [ ] Candidate release scope is reduced to a clean working tree.
- [ ] Full release validation passes locally (`make build-piclaw`, `make test`, `make ci-fast`).
- [ ] Version bump, tag, push, and GitHub release are ready to execute without guesswork.

## Candidate release themes

- web responsiveness and observability
- model refresh / hydration latency improvements
- code-copy correctness and smaller web UX fixes
- M365 entry-point correctness
- follow-up infrastructure for broader observability

## Risks / open questions

- [ ] Decide whether the current dirty working tree belongs in `v1.7.16` or should be split out.
- [ ] Confirm rebuilt generated/dist artifacts are in sync with the final source scope.
- [ ] Confirm whether any manual browser smoke is needed for code-copy buttons and timing surfaces.

## Test Plan

### Existing tests to rerun
- [ ] `make build-piclaw`
- [ ] `make test`
- [ ] `make ci-fast`

### Regression coverage to add or confirm
- [ ] bug replay coverage for the code-block copy-button fix
- [ ] interaction / state coverage for non-blocking model refresh and status-duration rendering
- [ ] request/perf tracing coverage for correlated backend timing surfaces
- [ ] session-shutdown/autoresearch regression coverage if the dirty tranche stays in scope

### Regression classes that apply
- **Bug replay / known-regression test** — code-block copy buttons and any reported copy-path regression
- **Interaction scenario test** — model refresh / status-duration UI timing and visible state transitions
- **Restore / reconnect matrix test** — only if the release keeps the session-shutdown/autoresearch tranche
- **Docs/config only** — the observability follow-up ticket itself does not require new runtime regression coverage

### Real-browser smoke note
- [ ] Narrow browser smoke recommended for code-copy buttons and hot-path timing visibility if the final patch keeps the web tranche together.

## Definition of Done

- [ ] Release scope is explicitly decided and clean
- [ ] Release notes draft is ready for human review
- [ ] Supporting tickets/docs are updated to match scope
- [ ] Local release gate is green
- [ ] Ticket front matter and updates reflect the actual outcome

## Updates

### 2026-04-19
- Moved doing → review via board batch action.

### 2026-04-16
- Started patch-release prep after `v1.7.15`.
- Reviewed the committed delta and recorded the current uncommitted candidate tranche separately so we do not accidentally tag a patch based on vibes.
- Promoted this prep work into `20-doing` because the next patch now has enough concrete scope to justify active coordination rather than passive note-taking.
- Immediate next step: decide whether to keep the dirty working tree in the candidate release or trim/split it before final validation.

## Links

- `workitems/10-next/investigate-observability-and-otel-exporter.md`
- `VERSION`
- `package.json`
