---
id: derive-tool-weight-from-runtime-signals
title: Derive tool weight from runtime signals instead of static registry
status: inbox
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
  - dx
owner:
parent: adopt-mcp-style-discovery-for-internal-tools
---

# Derive tool weight from runtime signals instead of static registry

## Summary

The `weight` field in `tool-capabilities.ts` is currently static because
`ToolInfo` (from `getAllTools()`) exposes only `name`, `description`,
`parameters`, and `sourceInfo` — no execution-cost signal.

If the upstream `ToolDefinition` or `ToolInfo` contract ever gains a
`cost` / `weight` / `tier` hint, or if we instrument tool execution
timing, the static `weight` entries could be replaced with runtime
derivation — the same way `activation` is already derived from
`getDefaultActiveToolNames()` and `summary` falls back to the tool's
own `description`.

## Possible Approaches

### A — Upstream contract extension
If pi-coding-agent adds an optional `weight` or `tier` field to
`ToolDefinition`, we could read it from `getAllTools()` and drop the
static map entries.

### B — Instrumented median latency
Track per-tool P50 execution time over a sliding window. Classify:
- <100ms → lightweight
- 100ms–2s → standard
- >2s → heavy

Requires a persistence layer (SQLite or in-memory ring buffer).

### C — Parameter schema heuristics
Tools with `timeout` parameters or large output caps are likely heavier.
Tools with no parameters or only simple string params are likely lighter.
Better than description keyword matching but still imperfect.

## Acceptance Criteria

- [ ] `weight` is derived from runtime data for at least the common tools.
- [ ] Static fallback remains for tools without enough runtime signal.
- [ ] Existing tests continue to pass.

## Notes

- `kind` (read-only/mutating/mixed) is harder to derive — description
  keyword heuristics fail for `edit`, `find`, and `introspect_sql`.
  That likely stays static unless the upstream contract adds it.

## Links

- `workitems/50-done/add-compact-capability-summaries-to-list-internal-tools.md`
- `runtime/src/extensions/tool-capabilities.ts`
- `runtime/src/extensions/internal-tools.ts`
