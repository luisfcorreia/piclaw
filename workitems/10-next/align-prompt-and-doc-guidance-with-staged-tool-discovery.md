---
id: align-prompt-and-doc-guidance-with-staged-tool-discovery
title: Align prompt and docs guidance with staged internal-tool discovery
status: next
created: 2026-04-12
updated: 2026-04-12
priority: low
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - tools
  - discovery
  - docs
  - prompts
owner: pi
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Align prompt and docs guidance with staged internal-tool discovery

## Summary

Once the compact discovery slices are in place, update prompt and docs guidance
so the preferred internal-tool flow is consistently described as:

`discover/recommend` → `capabilities/summary` → `details/help` → `activate/use`

## Desired Outcome

Agents and maintainers stop treating tool discovery as "list everything first"
and instead follow the compact staged flow by default.

## Acceptance Criteria

- [ ] Prompt/docs guidance reflects the staged internal-tool discovery order.
- [ ] Guidance clearly distinguishes discovery from activation.
- [ ] Guidance references the compact recommendation/capability surfaces once
      they exist.
- [ ] Existing wording that encourages bulk detail output is revised where needed.

## Implementation Path

1. Audit current prompt/docs guidance.
2. Update the preferred order for internal-tool discovery.
3. Link the compact discovery and detail/help surfaces explicitly.
4. Add notes/examples only where they reduce ambiguity.

## Test Plan

- [ ] Manual doc/prompt audit completed
- [ ] Follow-up references are correct and consistent

## Definition of Done

- [ ] Acceptance criteria satisfied
- [ ] Relevant docs/prompts updated
- [ ] Update history complete
- [ ] Ticket front matter updated

## Updates

### 2026-04-12
- Split from `adopt-mcp-style-discovery-for-internal-tools` as the docs/prompt alignment slice.

## Links

- `workitems/10-next/adopt-mcp-style-discovery-for-internal-tools.md`
- `README.md`
- `docs/runtime-flows.md`
