---
id: add-on-demand-detail-help-for-internal-tools
title: Add on-demand detail/help expansion for internal tools
status: next
created: 2026-04-12
updated: 2026-04-12
priority: medium
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - help
  - schema
  - context
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Add on-demand detail/help expansion for internal tools

## Summary

Add an explicit stage-3 detail/help surface for internal tools so exact
parameters, schema, examples, and caveats are only expanded when requested.

The goal is to avoid full-detail output by default while still making precise
usage available on demand.

## Desired Outcome

The internal-tool flow becomes:

1. discover / shortlist
2. capability summary
3. explicit detail/help expansion
4. activate / use

## Acceptance Criteria

- [ ] A clear detail/help expansion step exists for internal tools.
- [ ] Exact parameters and examples are only returned when explicitly requested.
- [ ] The detail surface works with the compact discovery/recommendation flow.
- [ ] The detail surface is consistent with current activation semantics.
- [ ] Focused regression coverage exists for summary-vs-detail behavior.

## Implementation Path

1. Decide whether to extend `list_internal_tools` with an opt-in detail mode or
   add a dedicated help surface.
2. Ensure compact discovery output never eagerly expands full schema.
3. Return exact parameters/examples only behind explicit detail requests.
4. Add tests for compact-vs-detailed output boundaries.

## Test Plan

- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
  - [ ] compact mode omits schema details
  - [ ] detail mode returns full help/schema
  - [ ] examples are opt-in only

## Definition of Done

- [ ] Acceptance criteria satisfied
- [ ] Tests passing locally
- [ ] Update history complete
- [ ] Ticket front matter updated

## Updates

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the explicit detail/help stage.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
