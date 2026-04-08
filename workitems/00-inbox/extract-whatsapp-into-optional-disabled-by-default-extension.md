---
id: extract-whatsapp-into-optional-disabled-by-default-extension
title: Extract WhatsApp into an optional disabled-by-default extension
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - whatsapp
  - channels
  - extension
  - suspendable-hosting
owner: pi
---

# Extract WhatsApp into an optional disabled-by-default extension

## Summary

Carve WhatsApp support out of the default PiClaw runtime and ship it as an
optional extension that is disabled by default.

This should reduce default runtime coupling, make suspendable-hosting support
cleaner, and make the web-first deployment story more explicit.

## Problem Statement

WhatsApp via Baileys is one of the least compatible subsystems for suspendable
hosting because it depends on long-lived connection state and background
runtime continuity.

Even outside Cloudflare, the current shape also couples optional channel logic
into the default runtime footprint more than necessary.

## Desired Behavior

- PiClaw core runtime remains web-first by default.
- WhatsApp support is packaged as an optional extension/module.
- WhatsApp is disabled by default unless explicitly enabled.
- Non-WhatsApp installs avoid channel startup cost, config ambiguity, and hosting constraints.
- Suspendable/cloud-hosted deployments can simply leave the extension disabled or choose a keep-awake mode explicitly.

## Candidate scope

- move channel wiring behind an optional extension boundary
- define explicit enable/disable config for the extension
- keep current no-op behavior semantics for users who do not enable WhatsApp
- document hosting implications and deployment modes

## Acceptance Criteria

- [ ] WhatsApp support is isolated behind an optional extension/module boundary.
- [ ] The default runtime starts with WhatsApp disabled unless explicitly enabled.
- [ ] Existing non-WhatsApp installs continue to work without behavior regressions.
- [ ] WhatsApp-enabled installs still have a documented activation/config story.
- [ ] Suspendable-hosting docs can treat WhatsApp as opt-in rather than an assumed core subsystem.
- [ ] Regression coverage exists for disabled-by-default and enabled-path behavior.

## Implementation Paths

### Path A — packaged optional channel extension (recommended)
1. Extract WhatsApp startup/wiring behind a packaged extension or equivalent optional module boundary.
2. Add explicit enablement config instead of implicit channel startup assumptions.
3. Keep the default install/runtime path web-first with WhatsApp off.

**Pros:**
- cleaner default runtime
- better suspendable-hosting story
- lower default operational complexity

**Cons:**
- requires careful extraction around channel boot and shared interfaces

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] default runtime leaves WhatsApp disabled
  - [ ] explicit enablement activates WhatsApp wiring
  - [ ] non-WhatsApp web-first startup remains unchanged
  - [ ] extension/module absence does not break default runtime startup
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] default web-only startup and explicit WhatsApp-enabled startup both behave as documented

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

### 2026-04-08
- Created as a follow-up requirement to the suspendable-hosting / Cloudflare planning work.
- Explicitly framed as useful both for suspendable hosting and for reducing default runtime coupling even on normal installs.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- This ticket is about deployment shape and runtime isolation, not about redesigning the WhatsApp user experience.
- A keep-awake or alternate-transport story can remain separate follow-up work.

## Links

- `docs/whatsapp.md`
- `docs/architecture.md`
- `runtime/src/core/config.ts`
- `https://github.com/24601/piclawflare/pull/2`
