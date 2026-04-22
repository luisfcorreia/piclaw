# Workitem → GitHub Issues Migration

This document describes the complete process for migrating the file-based
workitem kanban in `workitems/` to GitHub Issues + GitHub Projects (v2) on
`rcarmo/piclaw`.

## Contents

1. [Background](#1-background)
2. [Corpus](#2-corpus)
3. [GitHub setup (manual)](#3-github-setup-manual)
4. [Label taxonomy](#4-label-taxonomy)
5. [Data model mapping](#5-data-model-mapping)
6. [Running the migration script](#6-running-the-migration-script)
7. [Migration order](#7-migration-order)
8. [Post-migration housekeeping](#8-post-migration-housekeeping)
9. [Decisions log](#9-decisions-log)

---

## 1. Background

Workitems have lived as Markdown files in `workitems/{lane}/` with YAML
frontmatter since the project started. This works well for agent-assisted
authoring but has no native notification, mention, cross-reference, or
milestone tracking.

The migration replaces the file kanban with **GitHub Issues** as the primary
work-tracking surface, retaining the file tree as a read-only historical
archive.

**What does NOT change:**
- The `workitems/` directory stays in the repo as an archive
- The frontmatter schema is the canonical reference (not deleted)
- Existing content (acceptance criteria, implementation notes, test plans) is
  preserved verbatim as the issue body

---

## 2. Corpus

| Lane | Count | Meaning |
|---|---|---|
| `50-done` | 182 | Completed work — migrated as **closed** issues |
| `40-review` | 14 | In review — migrated as **open** issues |
| `30-done` | 8 | Internally resolved — migrated as **closed** issues |
| `20-doing` | 8 | Active work — migrated as **open** issues |
| `10-next` | 23 | Queued — migrated as **open** issues |
| `00-inbox` | 49 | Backlog — migrated as **open** issues |
| **Total** | **284** | |

Priority distribution: high (101), medium (144), critical (5), low (16)  
Estimate distribution: M (123), L (42), S (40), XL (11), XS (1)

---

## 3. GitHub setup (manual)

The following steps must be done once by the repo owner (`rcarmo`). The
`piclaw-bot` token does not have permission to create projects on a personal
account.

### 3.1 Create the GitHub Project

1. Go to https://github.com/rcarmo?tab=projects
2. Click **New project** → **Board**
3. Name: **Piclaw Kanban**
4. Visibility: Public (or Private — your choice)

### 3.2 Add Status field values

In the project **Settings → Fields → Status**, set the values to exactly:

| Value | Maps from lane |
|---|---|
| `Inbox` | `00-inbox` |
| `Next` | `10-next` |
| `In Progress` | `20-doing` |
| `In Review` | `40-review` |
| `Done` | `30-done`, `50-done` |

### 3.3 Add custom fields

In project **Settings → Fields → Add field**:

| Field name | Type | Options |
|---|---|---|
| `Estimate` | Single select | XS, S, M, L, XL |
| `Risk` | Single select | low, medium, high |
| `Source file` | Text | — |

### 3.4 Link repo to project

In project **Settings → Manage access → Add repository** → select
`rcarmo/piclaw`.

### 3.5 Note the project number

Once created, the project URL will be:
`https://github.com/users/rcarmo/projects/<NUMBER>`

The project number is needed to wire project-field updates into the migration
script (Phase 2 enhancement — not required for the initial closed-issue batch).

---

## 4. Label taxonomy

Labels were created on `rcarmo/piclaw` as part of the migration setup.

### Priority

| Label | Colour | Meaning |
|---|---|---|
| `priority:critical` | 🔴 `#b60205` | Must ship; blocks other work |
| `priority:high` | 🟠 `#d93f0b` | High priority |
| `priority:medium` | 🟡 `#fbca04` | Normal priority |
| `priority:low` | 🟢 `#0e8a16` | Do later |

> Note: legacy labels `priority:p0` and `priority:p1` exist from before the
> migration. They are kept for backwards compatibility but new issues use the
> word-form labels.

### Area

| Label | Meaning |
|---|---|
| `area:web` | Web UI, HTTP routes, service worker, browser behaviour |
| `area:runtime` | Core runtime, sessions, lifecycle, orchestration |
| `area:extensions` | Extension system and extension-provided tools |
| `area:workspace` | Workspace explorer, file editing |
| `area:providers` | Model/provider login, auth, provider integrations |
| `area:container` | Container image, entrypoint, runtime-manager |
| `area:shell` | Shell execution and injected shell env |
| `area:tools` | Agent tools and tool discovery |
| `area:sessions` | Session lifecycle, branches, persistence |
| `area:docs` | Documentation and guides |
| `area:packaging` | Release, install, and distribution |
| `area:security` | Security, auth hardening |
| `area:desktop-automation` | Desktop UI automation and computer-use |
| `area:m365` | Microsoft 365 and Graph integrations |

### Type

| Label | Meaning |
|---|---|
| `type:feature` | New feature or capability |
| `type:bug` | Bug or regression |
| `type:refactor` | Code quality or structural improvement |
| `type:audit` | Audit, review, or investigation |
| `type:docs` | Documentation only |
| `type:release` | Release preparation or versioning |
| `type:research` | Research, feasibility, or evaluation |

### State

| Label | Meaning |
|---|---|
| `blocked` | Blocked by another issue or external dependency |
| `deferred` | Intentionally deferred; not currently active |

---

## 5. Data model mapping

### Frontmatter → GitHub Issue

| Frontmatter field | GitHub target | Notes |
|---|---|---|
| `title` | Issue title | Stripped of surrounding quotes |
| Body (after `---`) | Issue body | Verbatim Markdown |
| `priority: high` | Label `priority:high` | critical/high/medium/low |
| `tags: [web, refactor]` | Labels `area:web`, `type:refactor` | Via TAG_TO_AREA and TAG_TO_TYPE maps |
| `blocked-by: [...]` | Label `blocked` | Applied if list is non-empty |
| `estimate` | Project field `Estimate` | XS/S/M/L/XL |
| `risk` | Project field `Risk` | low/medium/high |
| `id` / filename | Project field `Source file` | For traceability back to the file |

### Lane → GitHub state

| Lane | Issue state | Project status |
|---|---|---|
| `50-done` | closed (`completed`) | Done |
| `30-done` | closed (`completed`) | Done |
| `40-review` | open | In Review |
| `20-doing` | open | In Progress |
| `10-next` | open | Next |
| `00-inbox` | open | Inbox |

### Sort order

Done lanes (`50-done`, `30-done`) are sorted by the `created:` frontmatter
field ascending — oldest issue first — so GitHub issue numbers roughly track
creation date. All other lanes are sorted alphabetically by filename.

---

## 6. Running the migration script

### Requirements

- Bun (`bun --version`)
- `GITHUB_PICLAW_BOT_PAT` in the environment (injected automatically in this workspace)

### Location

```
scripts/migrate-workitems-to-github.ts
```

### State file

The script writes `scripts/migrate-state.json` after every successful issue
creation. This file maps `"lane/filename.md"` → GitHub issue number. Re-running
the script skips any file already in this map — making the script fully
idempotent.

```json
{
  "50-done/audit-proxy-sensitive-web-flows.md": 1,
  "50-done/azure-model-routing-and-stability.md": 2
}
```

**Commit `migrate-state.json` to the repo** after each batch so the mapping
is durable across sessions.

### Flags

| Flag | Default | Description |
|---|---|---|
| `--dry-run` | off | Print what would be created; make no API calls |
| `--lanes <list>` | all 6 lanes | Comma-separated lane names to process |
| `--limit <n>` | unlimited | Max issues to create in this run |

### Usage examples

```bash
# Preview the first 10 items from 50-done
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --dry-run --lanes 50-done --limit 10

# Migrate 50-done in batches of 50
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --lanes 50-done --limit 50

# Re-run to continue from where you left off (skips already-migrated)
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --lanes 50-done

# Migrate all active lanes at once
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts \
  --lanes 40-review,20-doing,10-next,00-inbox
```

### Output

```
── 50-done (182 files) ──
  OK   audit-proxy-sensitive-web-flows.md → #1 https://github.com/rcarmo/piclaw/issues/1
  OK   azure-model-routing-and-stability.md → #2 https://github.com/rcarmo/piclaw/issues/2
  SKIP document-cloudflare-tunnel-reverse-proxy-setup.md → #3   ← already migrated
  ERR  some-file.md: GitHub API POST ... → 422: ...             ← label doesn't exist

Done. created=49 skipped=1 total=50
State written to: /workspace/piclaw/scripts/migrate-state.json
```

### Rate limits

The GitHub API allows ~5 000 requests/hour for authenticated users. Each issue
creation uses ~2 calls (create + optional close). At 200ms delay between
issues, migrating all 284 items takes approximately 2 minutes and uses ~570
API calls — well within limits.

### Error handling

- API errors are printed and skipped; the script continues to the next item.
- The state file is written after every successful creation — a crash mid-run
  loses at most one item.
- Any skipped items can be retried by re-running; idempotency ensures no
  duplicates.

---

## 7. Migration order

Run phases in this order. Each phase is a separate command; verify before
proceeding.

### Phase 1 — Closed items: `50-done` (182 items)

```bash
# Dry run first
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --dry-run --lanes 50-done --limit 20

# Migrate in batches of 50, committing state after each batch
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --lanes 50-done --limit 50
git add scripts/migrate-state.json && git commit -m "migrate: 50-done batch 1 (issues #1–#50)"

# Repeat until 50-done is fully migrated (4 batches)
```

Spot-check after each batch: open 3–5 random issues, verify title, body, and
labels match the source file.

### Phase 2 — Closed items: `30-done` (8 items)

```bash
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts --lanes 30-done
git add scripts/migrate-state.json && git commit -m "migrate: 30-done complete"
```

### Phase 3 — Active items (open issues)

```bash
GITHUB_TOKEN=$GITHUB_PICLAW_BOT_PAT \
  bun scripts/migrate-workitems-to-github.ts \
  --lanes 40-review,20-doing,10-next,00-inbox
git add scripts/migrate-state.json && git commit -m "migrate: all active lanes complete"
```

### Phase 4 — Set project fields (after GitHub Project is created)

Once the project is created and its number is known, a second pass can set
`Status`, `Estimate`, and `Risk` fields via the GraphQL Projects API. This
can be added to the script or run as a separate step.

---

## 8. Post-migration housekeeping

Once all 284 items are in `migrate-state.json`:

### 8.1 Verify counts

```bash
jq 'length' scripts/migrate-state.json   # should be 284
```

### 8.2 Add WORKITEMS.md

Create `WORKITEMS.md` at the repo root:

```markdown
# Workitems

Work is tracked in [GitHub Issues](https://github.com/rcarmo/piclaw/issues).

The `workitems/` directory is a **read-only archive** of the previous
file-based kanban. Do not add new files there.
```

### 8.3 Lock the workitems directory

Add a CI check (GitHub Actions) that fails if any new `.md` files appear in
`workitems/` outside `_archive/` and `_templates/`:

```yaml
# .github/workflows/workitems-lock.yml
name: Workitems lock
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 2 }
      - name: No new workitem files
        run: |
          NEW=$(git diff --name-only HEAD~1 HEAD -- 'workitems/**/*.md' \
            | grep -v '_archive\|_templates' || true)
          if [ -n "$NEW" ]; then
            echo "New files in workitems/ are not allowed after GitHub Issues migration:"
            echo "$NEW"
            exit 1
          fi
```

### 8.4 Update kanban-management skill

Edit `.pi/skills/kanban-management/SKILL.md` to note that file-based kanban
is archived and point to GitHub Issues.

### 8.5 Update README contributing section

Point contributors to GitHub Issues for new work items.

---

## 9. Decisions log

| # | Decision | Rationale |
|---|---|---|
| 1 | Tap first, not Homebrew core | Homebrew core review is slow; tap ships immediately |
| 2 | `priority:word` labels, not `p0/p1` | More readable; `p0`/`p1` kept for backwards compat |
| 3 | `30-done` → closed, same as `50-done` | Both represent completed work; lane distinction not worth preserving in GitHub |
| 4 | `blocked-by:` list → `blocked` label | Cross-reference issue numbers not known until after migration; link text preserved in body |
| 5 | Project must be created manually by owner | GitHub API rejects project creation on behalf of another user, even with `project` scope |
| 6 | Sort `50-done`/`30-done` by `created:` date | Gives GitHub issue numbers rough chronological meaning |
| 7 | Body = everything after second `---` | Preserves full Markdown content including all sections |

---

## Related files

| File | Purpose |
|---|---|
| `scripts/migrate-workitems-to-github.ts` | Migration script |
| `scripts/migrate-state.json` | Issue number map (written during migration) |
| `workitems/_archive/` | Archived kanban tooling and templates |
| `workitems/_archive/work-item-template.md` | Original frontmatter schema |
| `workitems/_archive/kanban-management-SKILL.md` | Original kanban agent skill |
| `.github/ISSUE_TEMPLATE/workitem.md` | New issue template |
| `docs/github-issues-migration-plan.md` | Planning document (superseded by this doc) |
