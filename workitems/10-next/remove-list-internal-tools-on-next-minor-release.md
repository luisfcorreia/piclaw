---
id: remove-list-internal-tools-on-next-minor-release
title: Remove list_internal_tools on the next minor release
status: next
created: 2026-04-16
updated: 2026-04-16
owner: agent
labels:
  - tools
  - discovery
  - deprecation
  - breaking-change
---

# Remove `list_internal_tools` on the next minor release

## Summary

`list_internal_tools` is now deprecated in favor of `list_tools`.

Keep the compatibility alias only until the next **minor** release, then remove it completely so the public discovery surface is reduced to the canonical name.

## Why

- `list_tools` is shorter and clearer.
- Keeping both names indefinitely increases prompt/docs/test surface area.
- The alias is useful for migration, but should not become permanent baggage.

## Scope

On the next minor release:

1. Remove the `list_internal_tools` tool registration.
2. Remove any alias/deprecation messaging from the runtime.
3. Update the default active tool baseline to use `list_tools` only.
4. Update tests to expect only `list_tools`.
5. Remove compatibility wording from docs, prompts, skills, and AGENTS files.
6. Sweep workitems/docs for stale references where appropriate.

## Acceptance criteria

- [ ] `list_internal_tools` is no longer registered at runtime.
- [ ] `list_tools` remains the only built-in tool discovery surface.
- [ ] Default active tools include `list_tools` and no longer include `list_internal_tools`.
- [ ] All tests and docs are updated to the canonical name.
- [ ] No shipped prompts/skills/AGENTS guidance instructs the model to call `list_internal_tools`.
- [ ] Release notes call out the removal clearly.

## Validation

- [ ] `bun test runtime/test/extensions/extensions-internal-tools.test.ts runtime/test/extensions/extensions-tool-activation.test.ts runtime/test/agent-pool/agent-pool-tools.test.ts`
- [ ] `bun run typecheck`
- [ ] repo-wide search for stale references:
  - [ ] `rg -n "list_internal_tools" README.md docs runtime skel workitems`

## Notes

Until that minor release lands, keep the alias behavior explicit:

- `list_tools` is primary
- `list_internal_tools` is compatibility-only
- new docs/tests/features should target `list_tools`
