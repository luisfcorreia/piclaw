---
id: audit-suspend-incompatible-features-and-operating-modes
title: Audit suspend-incompatible features and define operating modes
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - hosting
  - suspendable-hosting
  - operations
  - channels
owner: pi
---

# Audit suspend-incompatible features and define operating modes

## Summary

Audit current PiClaw features that do not tolerate host suspension well and
explicitly define supported operating modes for suspendable hosting targets.

The goal is to be honest and deliberate about what can sleep safely, what must
keep the host awake, and what needs a different transport model.

## Problem Statement

Some PiClaw features assume a continuously running process or long-lived
connections. Examples likely include:

- WhatsApp via Baileys
- terminal sessions
- VNC sessions
- tmux/autoresearch subprocesses
- file watchers
- some extension-owned background processes

Trying to treat all of these as equally suspend-safe will produce fragile or
misleading deployments.

## Desired Behavior

- Suspend-sensitive subsystems are identified explicitly.
- Each has a documented operating mode for suspendable hosts, such as:
  - unsupported / disabled
  - keep-awake required
  - reconnectable after wake
  - alternate transport required
- User-facing and operator-facing docs reflect those constraints.

## Acceptance Criteria

- [ ] A suspend-compatibility audit exists for major subsystems.
- [ ] Each incompatible or risky feature has a defined operating mode.
- [ ] User-visible behavior and operator docs are updated accordingly.
- [ ] Follow-up tickets are created for any major unsupported gaps that should be solved later.
- [ ] The audit explicitly decides whether WhatsApp remains core runtime functionality or moves behind an optional extension boundary.

## Implementation Paths

### Path A — explicit compatibility matrix (recommended)
1. Audit long-lived connections and background work.
2. Classify each by suspend behavior.
3. Define deployment modes and guardrails.
4. Create follow-up tickets only where the gap is worth solving.

**Pros:**
- reduces hidden assumptions
- improves deployment honesty
- keeps the Cloudflare effort grounded in real constraints

**Cons:**
- may surface uncomfortable non-goals that need clear communication

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
- [ ] New regression coverage to add is listed where mode guards are implemented.
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] verify guardrails for disabled / keep-awake-only features on a suspendable deployment

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
- Created from `piclawflare` review because feature-mode honesty is required before any suspendable deployment target can be called supported.
- Initial focus areas called out from the fork review: Baileys, terminal/VNC, autoresearch/tmux, file watching, and reconnect-sensitive sessions.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- This ticket can close with a documented compatibility matrix and explicit operating modes even if some gaps remain unsolved.
- “Unsupported on suspendable hosts” is an acceptable outcome when documented clearly.
- If the WhatsApp extraction decision is already clear, point this ticket at `extract-whatsapp-into-optional-disabled-by-default-extension` rather than re-deciding the implementation shape here.

## Links

- `docs/architecture.md`
- `docs/runtime-flows.md`
- `docs/whatsapp.md`
- `https://github.com/24601/piclawflare/pull/2`
