---
id: add-intent-based-recommendation-for-internal-tools
title: Add intent-based recommendation for internal tools
status: next
created: 2026-04-12
updated: 2026-04-12
priority: medium
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - recommendation
  - ux
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Add intent-based recommendation for internal tools

## Summary

Add a lightweight recommendation surface for internal tools so an agent can ask
"what tool fits this intent?" before activating or inspecting everything.

This should be the internal-tool counterpart to the compact `recommend` flows
already used by infra integrations.

## Desired Outcome

Given a short intent like:

- search notes
- inspect recent messages
- attach a file
- schedule something
- inspect SQL tables

Piclaw can return a short ranked shortlist of likely tools instead of forcing a
full inventory scan.

## Acceptance Criteria

- [ ] A recommendation surface exists for internal tools.
- [ ] The result is compact and shortlist-oriented.
- [ ] Results explain why each tool is a fit at a high level.
- [ ] Results distinguish between already-active tools and tools that require activation.
- [ ] The recommendation surface does not return full schema/details by default.
- [ ] Focused regression coverage exists for representative intents.

## Implementation Path

1. Choose whether this lands as an extension of `list_internal_tools` or a new
   helper surface.
2. Define a small intent-to-tool matching strategy.
3. Return ranked compact recommendations with short reasons.
4. Add tests for representative intents and fallback behavior.

## Test Plan

- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
  - [ ] search-oriented intent
  - [ ] file/workspace intent
  - [ ] scheduling intent
  - [ ] message/history intent
  - [ ] unknown intent fallback

## Definition of Done

- [ ] Acceptance criteria satisfied
- [ ] Tests passing locally
- [ ] Update history complete
- [ ] Ticket front matter updated

## Updates

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the compact recommendation slice.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
- `README.md`
- `docs/runtime-flows.md`
