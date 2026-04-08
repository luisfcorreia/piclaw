---
id: evaluate-and-add-cloudflare-hosting-target
title: Evaluate and add a Cloudflare hosting target
status: inbox
priority: high
created: 2026-04-08
updated: 2026-04-08
target_release: later
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - cloudflare
  - hosting
  - deployment
  - suspendable-hosting
owner: pi
---

# Evaluate and add a Cloudflare hosting target

## Summary

Evaluate the feasible Cloudflare deployment shapes for PiClaw, choose one, and
implement the first supported target.

Acceptable candidate shapes include:

- Worker-only for a narrow gateway / helper layer
- Worker + Durable Object + Cloudflare Container for the full runtime
- another Cloudflare split that preserves PiClaw’s runtime assumptions safely

## Problem Statement

We want PiClaw to be runnable on Cloudflare infrastructure, but the exact shape
must be chosen deliberately.

PiClaw currently assumes:

- long-lived Bun process
- local filesystem state
- SQLite
- background coordination mechanisms that are not naturally Workers-native

So the Cloudflare path must be selected based on real runtime constraints rather
than brand-level platform preference.

## Decision questions

- Can any meaningful subset run in Worker-only form, and if so, which subset?
- Does the full runtime require Cloudflare Containers in practice?
- What should live in the edge gateway vs the container runtime?
- How are auth, wake, readiness, and scheduled wake-ups handled?
- What is the operator story for config, secrets, logs, and upgrades?

## Desired Behavior

- A concrete Cloudflare deployment target is selected and documented.
- The chosen target has a clear architecture boundary and deployment story.
- The final solution can wake, serve requests, and recover from cold start predictably.
- The deployment target is explicit about unsupported features or required modes.

## Acceptance Criteria

- [ ] The Cloudflare deployment shape decision is documented with tradeoffs.
- [ ] A first supported Cloudflare target is implemented.
- [ ] Deploy/install/operator docs exist for that target.
- [ ] Cold start, readiness, wake, and scheduled wake behavior are verified.
- [ ] Known unsupported or limited features are documented.

## Implementation Paths

### Path A — evaluate shapes, then implement the least-wrong supported target (recommended)
1. Compare Worker-only vs Worker+Container vs mixed approaches.
2. Choose the shape that best matches PiClaw’s runtime assumptions.
3. Implement the chosen deployment target behind the lifecycle adapter boundary.
4. Add docs, configuration examples, and smoke validation.

**Pros:**
- avoids forcing the runtime into the wrong platform shape
- produces a clearer operator story
- compatible with future platform evolution

**Cons:**
- slower than assuming Containers from the start

## Candidate implementation outputs

Depending on the chosen shape, this may include:

- Cloudflare Worker gateway
- Durable Object lifecycle manager
- Cloudflare Container config / build path
- health / readiness hooks
- wake page / wake proxy behavior
- scheduler / alarm integration
- deployment guide and smoke script

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed:
  - [ ] readiness and wake path
  - [ ] scheduled wake path
  - [ ] auth/internal secret protection for platform endpoints
  - [ ] reconnect after cold start
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] first-load wake, chat send, scheduled wake, and restart/reconnect behavior on the chosen Cloudflare target

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
- Created from `piclawflare` review plus follow-up clarification that the end goal is a Cloudflare-hosted target whether that lands as Workers, Containers, or a mixed architecture.
- Kept as a separate decision/implementation ticket so the hosting-shape choice stays explicit instead of being hidden inside core-runtime refactors.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Prefer a clear, supportable first target over an overly ambitious “run everywhere on Cloudflare” claim.
- If the answer is “Worker-only for gateway pieces, Container for full runtime,” document that directly and avoid pretending otherwise.

## Links

- `docs/architecture.md`
- `docs/configuration.md`
- `docs/reverse-proxy.md`
- `https://github.com/24601/piclawflare`
- `https://github.com/24601/piclawflare/pull/2`
