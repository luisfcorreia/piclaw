# Kanban Archive

This directory preserves the file-based kanban tooling and templates that were
the authoritative workitem store before migration to GitHub Issues.

## Contents

| File | Origin | Description |
|---|---|---|
| `work-item-template.md` | `workitems/_templates/work-item.md` | Standard frontmatter template for workitems |
| `kanban-management-SKILL.md` | `.pi/skills/kanban-management/SKILL.md` | Smith skill for managing the board end-to-end |
| `kanban-board-svg.ts` | `.pi/skills/kanban-management/kanban-board-svg.ts` | SVG board rendering script |
| `sample.kanban.md` | `notes/sample.kanban.md` | Sample kanban note |
| `marketing.kanban.md` | `notes/marketing.kanban.md` | Marketing kanban note |

## Why archived

Workitem management migrated to GitHub Issues + GitHub Projects (v2).
See `docs/github-issues-migration-plan.md` for the migration plan.

The lane directories (`00-inbox/`, `10-next/`, etc.) remain in place as a
read-only historical record. All new work items go through GitHub Issues.

## Archived

2026-04-22
