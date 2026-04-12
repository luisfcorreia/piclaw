---
id: open-workspace-file-web-tool
title: Add a built-in web tool to open workspace files in the editor
status: done
priority: medium
created: 2026-04-11
updated: 2026-04-12
completed: 2026-04-12
tags:
  - work-item
  - kanban
  - web
  - tools
  - editor
  - ui
owner: pi
---

# Add a built-in web tool to open workspace files in the editor

## Summary

Add a first-class built-in agent tool that can ask the active web UI to open a
workspace file in the editor, either in the current tab or in a separate popout
window.

The implementation should stay web-only, validate workspace-relative file
paths, and refuse popout requests when the browser viewport is too small to
support another usable editor window.

This is a focused product slice, not a full resolution of the broader
extension-UI contract question.

## Acceptance Criteria

- [x] A built-in tool exists for opening a workspace file from the active web
      session.
- [x] The tool validates workspace-relative file paths and rejects missing or
      invalid targets.
- [x] The tool supports opening in the editor tab and in a popout window.
- [x] Popout requests are blocked when the browser reports insufficient screen
      real estate.
- [x] Browser-side request handling uses the existing web UI bridge rather than
      an ad hoc global-only path.
- [x] Tool behavior is documented in the public tools documentation.
- [x] Regression coverage exists for the tool path, the browser action path,
      and deterministic built-in tool registration.

## Implementation Paths

### Implemented path
1. Add `open_workspace_file` as a built-in runtime tool.
2. Route the request through the existing web UI request bridge using a typed
   `custom` request payload.
3. Handle the browser-side request in the web app and reuse existing
   editor-tab/pane-popout actions.
4. Enforce the popout viewport guard in the browser before attempting to open a
   separate editor window.
5. Update public tool documentation and deterministic baselines.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [x] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [x] Real-browser smoke pass required? If yes, record the surface

### Tests run
- [x] `bun test runtime/test/extensions/open-workspace-file.test.ts`
- [x] `bun test runtime/test/web/app-extension-ui-browser-actions.test.ts`
- [x] `bun test runtime/test/channels/web/ui-context.test.ts`
- [x] `bun test runtime/test/agent-pool/agent-pool-tools.test.ts`
- [x] `bun test runtime/test/extensions/extension-hook-determinism.test.ts`
- [x] `bun test runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- [x] `bun run quality`
- [x] Real-browser smoke: verified `target: "tab"` opens a file; verified
      `target: "popout"` is blocked on a too-small viewport with a user-facing
      failure result.

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-12 (closed)
- Lane change: `40-review` → `50-done`.
- Closeout review confirmed the shipped implementation already satisfies the ticket scope:
  - public docs were updated in `docs/tools-and-skills.md`
  - deferred broader browser/extension UI work remains tracked separately in `workitems/00-inbox/define-first-class-extension-ui-surface-for-piclaw-extensions.md`
- No additional code changes were required beyond the already validated implementation and recorded smoke evidence.

### 2026-04-11
- Implemented `open_workspace_file` as a built-in web-only tool that opens a
  validated workspace file in the editor tab or a popout window.
- Reused the existing web UI bridge with a typed custom request payload instead
  of inventing a separate browser action channel.
- Added a browser-side viewport guard so popout requests fail safely on small
  screens instead of forcing an unusable extra window.
- Added regression coverage for the tool, browser action handling, and
  deterministic built-in tool registration baselines.
- Updated `docs/tools-and-skills.md` with the new built-in tool.
- Validation evidence:
  - `00646633` — `Add web tool for opening workspace files in editor`
  - live verification in the web UI:
    - `open_workspace_file(path="piclaw/docs/azure/azure-openai-extension.md", target="tab")` succeeded
    - `open_workspace_file(path="piclaw/docs/tools-and-skills.md", target="popout")` returned `Browser viewport is too small for a separate editor window.`

## Notes

The broader architectural question of what the long-term extension/browser UI
surface should be remains tracked separately. This ticket intentionally ships a
small, concrete built-in tool on top of the current bridge.

## Links

- `docs/tools-and-skills.md`
- `runtime/src/extensions/open-workspace-file.ts`
- `runtime/web/src/ui/app-extension-ui-browser-actions.ts`
- `runtime/src/channels/web/theming/ui-bridge.ts`
- `workitems/00-inbox/define-first-class-extension-ui-surface-for-piclaw-extensions.md`
- https://github.com/rcarmo/piclaw/commit/006466336db1440179032de10f6c61c192d6f82f
