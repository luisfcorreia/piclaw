---
id: adopt-mcp-style-discovery-for-internal-tools
title: Adopt MCP-style discovery for internal tools
status: next
priority: medium
created: 2026-04-05
updated: 2026-04-12
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - ux
  - context
  - mcp
owner: pi
---

# Adopt MCP-style discovery for internal tools

## Summary

Emulate the compact discovery approach used by `mcp-cli` across piclaw's
internal tool surface so tool selection becomes more consistent, more
progressive, and less context-expensive.

Today we already have parts of this story:
- `list_internal_tools`
- `activate_tools`
- small always-on baseline tools
- compact infra discovery flows like `discover → capabilities/recommend → workflow_help → workflow`

But the internal-tool experience is still inconsistent:
- some tools are effectively “all details up front”
- some discovery flows are optimized for progressive disclosure while others are not
- capability discovery, fit-for-intent recommendation, activation, and detailed schema help are not expressed through one shared model
- the system does not yet expose a clearly layered discovery path for internal tools comparable to the MCP-style mental model

## Problem Statement

Piclaw already values context conservation and progressive discovery, but that
discipline is strongest in the infra surfaces and weaker in the general
internal-tool story.

The result is that internal tools can still feel like:
- “list everything, then manually inspect,”
- rather than a structured progression from lightweight discovery to detailed
  activation.

This ticket tracks the design/evaluation work needed to make internal-tool
discovery feel like a first-class protocol surface: compact overview first,
targeted detail second, activation last.

## Current model to build from

Existing primitives already suggest the right direction:

- baseline always-active tools are intentionally small
- `list_internal_tools` gives an inventory surface
- `activate_tools` applies same-turn tool promotion
- infra tools already follow a documented staged flow:
  - `discover`
  - `capabilities` / `recommend`
  - `workflow_help`
  - `workflow`

The gap is that internal-tool discovery does not yet expose an equally clear
staged contract.

## Target staged discovery model

For internal tools, the desired operator/agent flow should become:

`discover/recommend` → `capabilities/summary` → `details/help/schema` → `activate/use`

### Stage 1 — discover / recommend
Answer:
- what tool families exist?
- which ones fit the current intent?
- what is likely worth activating?

### Stage 2 — capabilities / summary
Answer:
- what can this tool or family do at a high level?
- what is the rough action taxonomy?
- how “expensive” is it in context/setup terms?

### Stage 3 — details / help / schema
Answer only when requested:
- exact parameters
- detailed schema
- examples
- caveats

### Stage 4 — activate / use
Only after the previous steps narrow the candidate set:
- activate the tool(s)
- call the tool or guided helper surface

## First-slice scope decision

Do **not** try to redesign the whole tool system in one step.

The first useful slice should be limited to:

1. defining the internal metadata/contract needed for compact discovery
2. deciding how existing surfaces (`list_internal_tools`, `activate_tools`) map into that contract
3. identifying one minimal user-facing addition such as:
   - recommendation output
   - compact capability summaries
   - explicit detail/help expansion

## Out of scope for the first slice

- making internal tools literally speak MCP
- replacing the existing tool runtime entirely
- deep UI redesign before the staged contract is clear
- solving every tool-family inconsistency in one release

## Acceptance Criteria

- [x] The current internal-tool discovery flow is inventoried end to end.
- [x] Current pain points are documented with concrete examples of context waste or inconsistent progressive disclosure.
- [x] A proposed MCP-style discovery model is defined for internal tools.
- [x] The proposed model clearly separates:
  - [x] compact discovery / recommendation
  - [x] capability summaries
  - [x] detailed help / schema / examples
  - [x] activation / use
- [x] The model explains how existing tools such as `list_internal_tools` and `activate_tools` fit, change, or get wrapped.
- [x] The model explicitly supports context saving and progressive disclosure as primary goals.
- [x] The first implementation slice is selected explicitly.
- [x] Follow-up implementation tickets are split if the work spans runtime APIs, prompt guidance, tool metadata, and UI/docs.

## Implementation Paths

### Path A — thin compatibility layer over existing internal-tool primitives (recommended first slice)
1. Keep `list_internal_tools` and `activate_tools` as the substrate.
2. Add a compact recommendation/discovery layer on top.
3. Add a narrower “details/help” step that only expands when requested.
4. Update prompt/docs so the preferred flow becomes consistent.

**Pros:**
- lower risk
- preserves current runtime primitives
- easiest migration path
- good first proof of the staged model

**Cons:**
- may leave underlying metadata inconsistent
- can become a UX convention rather than a true contract if not followed up

### Path B — first-class internal-tool discovery contract
1. Define a shared discovery contract for internal tools similar in spirit to the MCP-style flow.
2. Add explicit metadata for categories, intent fit, activation requirements, cost/context weight, and help granularity.
3. Expose compact recommendation/capability surfaces separately from full schema/detail surfaces.
4. Align prompt guidance and runtime behavior around the same staged flow.

**Pros:**
- clearer long-term model
- better consistency across tool families
- stronger context-conservation story

**Cons:**
- broader runtime and prompt-touching design work
- likely needs staged rollout

## Recommended Path

Use Path A as the first practical implementation slice, but shape it so the
result can evolve cleanly into Path B.

That means this umbrella should produce:
- the staged model
- the mapping from today's primitives to that model
- a narrow first implementation ticket

## Split follow-up tickets

This umbrella is now split into these concrete next-step tickets:

1. **Compact capability summaries**
   - `workitems/10-next/add-compact-capability-summaries-to-list-internal-tools.md`
2. **Intent-based recommendation surface**
   - `workitems/10-next/add-intent-based-recommendation-for-internal-tools.md`
3. **On-demand detail/help expansion**
   - `workitems/10-next/add-on-demand-detail-help-for-internal-tools.md`
4. **Prompt/docs alignment**
   - `workitems/10-next/align-prompt-and-doc-guidance-with-staged-tool-discovery.md`

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Discovery flow is validated against representative intents (for example: scheduling, infra access, message search, chart generation, auth/setup).
- [ ] Compact discovery responses are shown to reduce unnecessary schema/context output.
- [ ] The chosen first implementation slice is small enough to test independently.
- [ ] Real-browser smoke pass required? If yes, record the surface.

## Definition of Done

- [x] Discovery problem statement and target contract are documented clearly.
- [x] The staged discovery flow for internal tools is defined.
- [x] Existing primitives (`list_internal_tools`, `activate_tools`, related help surfaces) are mapped into the new model.
- [x] A first implementation slice is chosen explicitly.
- [x] Follow-up implementation tickets are created for runtime/docs/prompt splits.
- [x] Update history includes concrete examples and recommended next actions.
- [x] Ticket is refined enough to move to `10-next/` or split into smaller ready slices.

## Updates

### 2026-04-12
- Evidence audit after confirming that core discovery/activation primitives are already live:
  - runtime/doc evidence:
    - `README.md` documents the small always-active baseline, lazy activation, and compact capability introspection.
    - `docs/runtime-flows.md` documents the staged infra discovery flow `discover → capabilities/recommend → workflow_help → workflow`.
  - runtime/tool evidence:
    - `list_internal_tools`, `activate_tools`, and `reset_active_tools` are present as the general internal-tool substrate.
  - related completed work:
    - `workitems/50-done/internal-tools-naming-consistency-audit.md`
    - `workitems/50-done/internal-fts-tooling-agent-friendly.md`
- Audit pass after confirming that core discovery/activation primitives are already live:
  - `list_internal_tools`
  - `activate_tools`
  - `reset_active_tools`
- Additional already-landed supporting work:
  - `workitems/50-done/internal-tools-naming-consistency-audit.md` closed with an inventory of 22 internal tools and a normalized verb-first naming convention.
  - `workitems/50-done/internal-fts-tooling-agent-friendly.md` improved agent-facing search ergonomics, which is adjacent to tool-selection/discovery usability.
  - `README.md` and `docs/runtime-flows.md` now explicitly document the small always-active baseline, same-turn activation, compact capability introspection, and the staged infra flow `discover → capabilities/recommend → workflow_help → workflow`.
- Conclusion from the audit:
  - the substrate is implemented
  - the MCP-style umbrella itself is **not** done
- Implemented today / can be treated as complete for this umbrella's starting assumptions:
  - tool inventory exists
  - same-turn activation exists
  - reset/deactivation surface exists
  - infra-family staged discovery patterns exist and are documented
  - context-conservation guidance exists in docs
- Still missing for this ticket:
  - a unified internal-tool staged discovery contract beyond the infra/tool-family-specific flows
  - explicit compact recommendation output for the general internal-tool surface
  - shared capability-summary metadata for internal tools
  - an explicit details/help/schema expansion step layered over general internal-tool discovery
  - a chosen concrete first implementation ticket split out from this umbrella
- Split concrete next-step tickets with clearly defined outcomes:
  - `workitems/10-next/add-compact-capability-summaries-to-list-internal-tools.md`
  - `workitems/10-next/add-intent-based-recommendation-for-internal-tools.md`
  - `workitems/10-next/add-on-demand-detail-help-for-internal-tools.md`
  - `workitems/10-next/align-prompt-and-doc-guidance-with-staged-tool-discovery.md`
- Updated recommendation after audit: treat `add-compact-capability-summaries-to-list-internal-tools` as the first executable slice, then layer recommendation and detail/help on top.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-06
- Lane change: `00-inbox` → `10-next`.
- Promoted after refinement because the staged discovery contract, first-slice direction, and likely follow-up split are now explicit enough for roadmap prioritization.
- Immediate next step: choose the exact first implementation ticket, most likely compact recommendation/capability summaries layered over `list_internal_tools` and `activate_tools`.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-06
- Refinement pass completed to turn this from a broad discovery idea into a staged umbrella with an explicit first-slice plan.
- Locked the target discovery flow to:
  - discover/recommend
  - capabilities/summary
  - details/help/schema
  - activate/use
- Clarified that the first useful slice should stay thin and build on the current primitives rather than redesigning the whole tool runtime at once.
- Identified the likely split into metadata, recommendation surface, detail/help surface, and prompt/docs alignment tickets.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the remaining step is to choose the concrete first implementation ticket (most likely compact recommendation/summaries over current internal-tool primitives).

### 2026-04-05
- Created from request to emulate the discovery mechanism/mental model of `mcp-cli` across internal tools.
- Primary goal is consistency in context saving and progressive disclosure, not merely adding another listing command.
- This should align with the existing context-conserving discovery direction already documented for infra surfaces, while extending the same design discipline to internal tools.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

## Notes

- This is related to, but broader than, the existing `bundle-mcp-cli` ticket.
- The key design question is not “make internal tools literally speak MCP”, but “adopt the same staged discovery ergonomics and compactness where it improves operator/agent behavior.”
- Likely areas involved:
  - tool metadata shape
  - recommendation surfaces
  - schema/help rendering
  - activation semantics
  - prompt guidance for preferred discovery order

## Links

- `workitems/10-next/bundle-mcp-cli.md`
- `workitems/10-next/add-compact-capability-summaries-to-list-internal-tools.md`
- `workitems/10-next/add-intent-based-recommendation-for-internal-tools.md`
- `workitems/10-next/add-on-demand-detail-help-for-internal-tools.md`
- `workitems/10-next/align-prompt-and-doc-guidance-with-staged-tool-discovery.md`
- `README.md`
- `docs/runtime-flows.md`
- `docs/tools-and-skills.md`
