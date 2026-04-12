---
id: add-compact-capability-summaries-to-list-internal-tools
title: Add compact capability summaries to list_internal_tools
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
  - ux
  - context
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Add compact capability summaries to list_internal_tools

## Summary

Extend `list_internal_tools` so the default response becomes more useful for
progressive discovery without dumping full schemas up front.

The first slice should add compact, stable summary metadata that helps an agent
answer:

- what the tool is for
- whether it is discovery-only, mutating, or mixed
- whether activation is required
- how expensive/detailed it is likely to be

## Desired Outcome

A caller can use `list_internal_tools` as a practical stage-1/stage-2 discovery
surface instead of just a raw inventory list.

## Acceptance Criteria

- [ ] `list_internal_tools` returns compact capability summaries by default.
- [ ] Each result includes a stable high-level summary field.
- [ ] Each result includes enough metadata to distinguish at least:
  - [ ] read-only vs mutating vs mixed
  - [ ] always-on vs activatable
  - [ ] lightweight vs heavier setup/detail cost
- [ ] Default output stays compact and does not include full parameter schemas.
- [ ] Existing callers of `list_internal_tools` remain compatible.
- [ ] Focused regression coverage exists for the new summary/result shape.

## Implementation Path

1. Define a minimal metadata shape for discovery-oriented summaries.
2. Populate it for current internal tools.
3. Extend `list_internal_tools` output without forcing schema expansion.
4. Add tests for compact result shape and backward compatibility.

## Test Plan

- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
  - [ ] default `list_internal_tools` output includes summary metadata
  - [ ] output stays compact without schema bloat
  - [ ] older result consumers do not break

## Definition of Done

- [ ] Acceptance criteria satisfied
- [ ] Tests passing locally
- [ ] Update history complete
- [ ] Ticket front matter updated

## Updates

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the first concrete capability-summary slice.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
- `README.md`
- `docs/runtime-flows.md`
