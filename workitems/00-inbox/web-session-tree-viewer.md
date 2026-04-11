---
id: web-session-tree-viewer
title: Add an interactive session tree viewer to the web UI
status: inbox
priority: high
created: 2026-04-11
tags:
  - work-item
  - kanban
  - ui
  - web
  - feature
estimate: L
risk: medium
owner: pi
---

# Add an interactive session tree viewer to the web UI

## Summary

The TUI has an interactive session tree viewer that lets users navigate branches,
see labels, identify the active leaf, and jump to any entry. The web UI has
nothing equivalent — `/tree` renders plain indented text with no interactivity.

Add a visual session tree component to the web UI that matches (and improves on)
the TUI experience.

## Current Behavior

- `/tree` returns plain text with indented `• entryId description [label] ← active` lines
- No click-to-navigate, no branch visualization, no entry preview
- Users must manually copy entry IDs and run `/tree <entryId>` to navigate

## Target Behavior

An interactive session tree pane/card that:

1. Shows the full session tree with branch structure visually
2. Highlights the current active leaf
3. Shows labels inline
4. Supports click/tap to select an entry
5. Previews the selected entry content (role, truncated text, tool calls)
6. Allows navigation to a selected entry (with confirmation)
7. Supports summarize-on-navigate option

## Implementation Options

### Option A: Adaptive Card (simplest, limited interactivity)

- Render the tree as a nested `ColumnSet` with `Action.Submit` buttons per entry
- Works within the existing card infrastructure
- Limited: no real tree drawing, no expand/collapse, static snapshot

### Option B: Dashboard Widget (richest, self-contained)

- Use `send_dashboard_widget` with a self-contained HTML tree renderer
- Full interactivity: expand/collapse, hover preview, click-to-navigate via `piclawWidget.submit()`
- Can use SVG or CSS for branch lines
- Best match for the TUI tree experience

### Option C: Dedicated pane extension (most integrated)

- Register a `WebPaneExtension` like the VNC or editor panes
- Opens in a tab alongside the timeline
- Persists across interactions, can live-update
- Most work, but most native-feeling

**Recommended: Option B first**, then promote to Option C if it proves useful.

## Data Flow

### Existing API surface

The upstream `pi-coding-agent` already exposes everything needed:

- `sessionManager.getTree()` → array of `SessionTreeNode` with:
  - `entry: { id, parentId, type, timestamp, ... }`
  - `label: string | undefined`
  - `children: SessionTreeNode[]`
- `sessionManager.getLeafId()` → current active entry
- `session.navigateTree(targetId, options)` → navigate to an entry

### New: HTTP endpoint for tree data

Add a lightweight endpoint (e.g. `GET /session/tree?chat_jid=...`) that returns
the tree as JSON. The widget fetches this on open and can refresh on demand.

Response shape:
```json
{
  "leafId": "abc123",
  "nodes": [
    {
      "id": "abc123",
      "parentId": null,
      "type": "message",
      "role": "user",
      "preview": "What is the weather?",
      "label": "start",
      "active": true,
      "children": [...]
    }
  ]
}
```

### Navigation via widget bridge

When the user clicks "Navigate" on an entry:
```js
piclawWidget.submit({ text: `/tree ${entryId}` });
```

## Visual Design

- Tree lines: CSS `border-left` + connectors, similar to git log `--graph`
- Active node: accent-color highlight
- Labels: inline pill/badge
- Entry types: role icon (user 👤, assistant 🤖, tool 🔧, compaction 📦, etc.)
- Compact by default, expand subtrees on click
- Dark/light theme aware via CSS variables

## Acceptance Criteria

- [ ] Session tree is renderable in the web UI with branch structure
- [ ] Active leaf is visually highlighted
- [ ] Labels are shown inline
- [ ] Click/tap on an entry shows a preview
- [ ] Navigate action sends `/tree <entryId>` back to the chat
- [ ] Works on mobile (scrollable, touch targets)
- [ ] Does not require upstream pi-coding-agent changes (uses existing getTree/navigateTree)

## Implementation Notes

- `runtime/src/agent-control/handlers/tree.ts` has the existing text renderer and all the entry-description logic — reuse `describeEntry()` server-side
- `runtime/src/channels/web/theming/ui-bridge.ts` already wires `navigateTree` through `commandContextActions`
- Tree data serialization should strip large content payloads (only send preview text)
- Consider pagination for very large trees (>500 entries)

## Links

- `runtime/src/agent-control/handlers/tree.ts` — existing /tree handler
- `runtime/src/channels/web/theming/ui-bridge.ts` — navigateTree wiring
- `pi-coding-agent/dist/core/session-manager.js` — getTree(), getLeafId(), navigateTree()
- `/workspace/.pi/skills/adaptive-cards-authoring/SKILL.md` — card authoring guide
