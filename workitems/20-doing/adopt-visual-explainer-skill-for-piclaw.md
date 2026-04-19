---
id: adopt-visual-explainer-skill-for-piclaw
title: Adopt visual-explainer as a Piclaw-native visual-artifact skill
status: doing
priority: high
created: 2026-04-19
updated: 2026-04-19
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - skills
  - visual-design
  - visual-explainer
  - html
  - artifacts
  - diagrams
  - charts
  - mermaid
  - vendoring
  - widget
  - web
owner: pi
blocked-by: []
---

# Adopt visual-explainer as a Piclaw-native visual-artifact skill

## Summary

Adopt the core philosophy and skill structure from
[`nicobailon/visual-explainer`](https://github.com/nicobailon/visual-explainer)
and adapt it thoroughly to the Piclaw environment: its vendored libraries,
workspace model, widget/viewer surfaces, and existing visual-design profile.

This is **not** a straight vendoring ticket. The goal is to produce a
**Piclaw-native visual-artifact skill** that:

1. teaches the agent to generate polished self-contained HTML pages for
   diagrams, reviews, tables, explainers, and slide decks
2. uses Piclaw's already-vendored libraries instead of CDN assumptions
3. follows the existing visual-design profile and preferences
4. is explicitly referenced by every other skill that creates visual artifacts

## Background

The evaluation of `visual-explainer` confirmed:

- the project is primarily an **agent skill + prompt/template bundle**, not a
  reusable JS library
- it produces self-contained HTML files meant to be viewed in a browser
- it relies on browser-side CDN-loaded dependencies for Mermaid, Chart.js, and
  Google Fonts
- its prompt/template/reference assets are MIT-licensed and well-structured

The recommended Piclaw path is: **adapt selectively**, not embed wholesale.

## Piclaw environment to target

### Already vendored and available at `/static/js/vendor/`

| Library | Version | Path | License |
|---|---|---|---|
| **beautiful-mermaid** (Mermaid) | 1.1.3 | `/static/js/vendor/beautiful-mermaid.js` | MIT |
| **ECharts** | 5.6 | `/static/js/vendor/echarts/echarts.min.js` | Apache-2.0 |
| **D3** | 7.9 | `/static/js/vendor/d3/d3.min.js` | ISC |
| **Babylon.js** | 7.x | `/static/js/vendor/babylon/babylon.js` | Apache-2.0 |
| **KaTeX** | — | `/static/js/vendor/katex.min.js` | MIT |

### Already available in Piclaw rendering

- Mermaid rendering in timeline messages (via `beautiful-mermaid`)
- KaTeX math blocks in Markdown
- Dashboard widgets with full access to vendored libraries

### Existing visual-design profile

- `/workspace/.pi/skills/visual-design/SKILL.md`
- `/workspace/notes/preferences/visual-design.md`

The new skill must be **consistent with** the visual-design profile and should
reference it explicitly.

## Scope

### In scope

1. **Create a new Piclaw-native visual-artifact skill** adapted from the
   upstream philosophy, prompt workflow, templates, and reference material.

2. **Replace all CDN/external-dependency assumptions** with Piclaw vendored
   library paths:
   - Mermaid → `/static/js/vendor/beautiful-mermaid.js`
   - Charts → `/static/js/vendor/echarts/echarts.min.js` (replaces Chart.js)
   - D3 → `/static/js/vendor/d3/d3.min.js`
   - KaTeX → `/static/js/vendor/katex.min.js`
   - 3D (if relevant) → `/static/js/vendor/babylon/babylon.js`

3. **Evaluate and optionally vendor one or two quality display fonts**
   (freely licensed) for improved typography in generated artifacts.
   Candidates should:
   - be available under OFL/MIT/Apache-2.0
   - be self-contained WOFF2 files
   - include at minimum a body and a mono pairing
   - be added through the existing vendor asset pipeline

4. **Adapt templates and references** to:
   - use Piclaw's vendored library paths
   - follow the visual-design profile defaults
   - target workspace output paths (`/workspace` or a conventional output dir)
   - open results through Piclaw's existing surfaces (workspace file viewer,
     `open_workspace_file`, or `send_dashboard_widget` for smaller artifacts)

5. **Make the visual-artifact skill a cross-reference for all skills that
   produce visual outputs**, including at minimum:
   - `visual-design` (the existing styling defaults skill)
   - `azure-cost-chart`
   - `azure-metrics-chart`
   - `azure-subscription-diagram`
   - `graphite-power-chart`
   - `token-chart`
   - `adaptive-cards-authoring` (for visual consistency of card layouts)
   - Any future skill that generates charts, diagrams, HTML reports, or
     slide decks

6. **Include adapted command/prompt templates** for the highest-value modes:
   - architecture/system explainer
   - diff review
   - plan review / fact check
   - data table / comparison
   - slide deck
   - project recap

### Out of scope

- vendoring the upstream repository as a runtime dependency
- the Vercel share/deploy path
- surf-cli AI image generation
- supporting Claude Code or Codex plugin packaging
- replacing existing Piclaw Mermaid or KaTeX rendering in the timeline (those
  are independent surfaces, not affected by this skill)

## Font vendoring decision

### Policy
One or two high-quality display font families are acceptable for generated
artifacts. They should be:

- freely licensed (OFL / MIT / Apache-2.0)
- vendored as self-hosted WOFF2 in the asset pipeline
- referenced through CSS `@font-face` in templates, not external CDN `<link>`

### Candidates to evaluate

Good pairings from the upstream skill (adapted to freely-licensed fonts):

| Pairing | Body | Mono | License |
|---|---|---|---|
| IBM Plex | IBM Plex Sans | IBM Plex Mono | OFL |
| DM Sans + Fira Code | DM Sans | Fira Code | OFL |
| Plus Jakarta Sans + JetBrains Mono | Plus Jakarta Sans | JetBrains Mono | OFL |

Final selection should be discussed before vendoring. Two families (one sans,
one mono) is the expected maximum.

## Cross-referencing other skills

Every skill that produces visual artifacts should include a reference like:

```markdown
## Visual output standards

When generating charts, diagrams, HTML pages, or other visual artifacts, follow:

- `/workspace/.pi/skills/visual-artifact-generator/SKILL.md` for rendering
  workflow, templates, and vendored library usage
- `/workspace/.pi/skills/visual-design/SKILL.md` for palette, typography, and
  layout defaults
- `/workspace/notes/preferences/visual-design.md` for the saved preference
  profile
```

The cross-reference should be added to each listed skill as part of this ticket.

## Acceptance Criteria

- [ ] A new Piclaw-native visual-artifact skill exists under `.pi/skills/`.
- [ ] The skill adapts the upstream SKILL.md workflow, references, and templates
      to Piclaw's vendored library environment.
- [ ] All library references use Piclaw vendored paths, not external CDNs.
- [ ] The visual-design profile is explicitly referenced and followed.
- [ ] At least the top 4 command/prompt modes are adapted and usable.
- [ ] Font vendoring decision is recorded: which fonts (if any) are added, and
      the license/path for each.
- [ ] Every existing skill that creates visual artifacts includes a
      cross-reference to the new skill.
- [ ] Generated artifacts open correctly through at least one Piclaw surface
      (workspace file viewer, `open_workspace_file`, or
      `send_dashboard_widget`).
- [ ] The skill is tested by generating at least one representative artifact
      per adapted command mode.

## Implementation slices

Each slice below is a concrete deliverable that can be implemented, tested, and
cross-referenced independently. They are ordered by dependency and value.

### Slice 0 — foundation: core skill + reference adaptation

Create the top-level Piclaw-native visual-artifact skill that replaces all CDN
assumptions with vendored paths, references the visual-design profile, and
establishes the rendering workflow, anti-slop guidance, and template conventions.

Outputs:
- `.pi/skills/visual-artifact-generator/SKILL.md`
- `.pi/skills/visual-artifact-generator/references/css-patterns.md`
- `.pi/skills/visual-artifact-generator/references/libraries.md`
- `.pi/skills/visual-artifact-generator/references/responsive-nav.md`
- `.pi/skills/visual-artifact-generator/references/slide-patterns.md`

All adapted to use:
- `/static/js/vendor/beautiful-mermaid.js` (not CDN Mermaid)
- `/static/js/vendor/echarts/echarts.min.js` (replaces Chart.js)
- `/static/js/vendor/d3/d3.min.js`
- `/static/js/vendor/katex.min.js`
- vendored fonts (once selected)
- visual-design profile defaults

### Slice 1 — sub-skill: architecture / system explainer

Adapt the `generate-web-diagram` command to produce architecture overviews,
system diagrams, and flow visualizations using Piclaw's vendored Mermaid and
CSS patterns.

Aligns with existing skills:
- `azure-subscription-diagram` already generates SVG architecture diagrams
- the new sub-skill generalises that to any system/topic

Outputs:
- `.pi/skills/visual-artifact-generator/commands/generate-web-diagram.md`
- `.pi/skills/visual-artifact-generator/templates/architecture.html`
- `.pi/skills/visual-artifact-generator/templates/mermaid-flowchart.html`

### Slice 2 — sub-skill: data table / comparison

Adapt the data-table template for styled HTML tables, comparisons, audits,
feature matrices, and status reports.

Aligns with existing patterns:
- `token-chart`, `azure-cost-chart`, `graphite-power-chart` already produce
  data visualisations
- the new sub-skill covers the structured-table case that those chart skills
  do not address

Outputs:
- `.pi/skills/visual-artifact-generator/commands/generate-data-table.md`
- `.pi/skills/visual-artifact-generator/templates/data-table.html`

### Slice 3 — sub-skill: diff review

Adapt the `diff-review` command to produce visual before/after comparisons
with architecture diagrams, code review panels, and decision logs.

New for Piclaw — no existing skill covers this.

Outputs:
- `.pi/skills/visual-artifact-generator/commands/diff-review.md`

### Slice 4 — sub-skill: plan review / fact check

Adapt the `plan-review` and `fact-check` commands for plan-vs-codebase
comparison and document accuracy verification.

New for Piclaw — complements the existing `kanban-management` quality scoring
by providing a visual output surface for plan audits.

Outputs:
- `.pi/skills/visual-artifact-generator/commands/plan-review.md`
- `.pi/skills/visual-artifact-generator/commands/fact-check.md`

### Slice 5 — sub-skill: slide deck

Adapt the `generate-slides` command to produce magazine-quality slide decks
using vendored libraries.

New for Piclaw — no existing skill generates slide decks.

Outputs:
- `.pi/skills/visual-artifact-generator/commands/generate-slides.md`
- `.pi/skills/visual-artifact-generator/templates/slide-deck.html`

### Slice 6 — sub-skill: project recap

Adapt the `project-recap` command to produce a mental-model snapshot for
context switching.

Aligns with existing skills:
- `situate-daily-notes` already produces daily situation reports
- the new sub-skill produces a richer visual artefact for the same purpose

Outputs:
- `.pi/skills/visual-artifact-generator/commands/project-recap.md`

### Slice 6a — sub-skill: draw.io diagram generation

Teach the agent to generate `.drawio` XML files directly in the workspace
following the visual-design profile, then open them through the existing
self-hosted draw.io editor pane.

Piclaw already ships a full draw.io editor (`runtime/extensions/viewers/drawio-editor/`)
that handles `.drawio` files. This sub-skill adds the **generation** half:
produce well-structured `.drawio` XML diagrams programmatically, using the
visual-design profile for layout, colors, and typography defaults.

Aligns with existing surfaces:
- draw.io editor pane already handles viewing/editing
- `azure-subscription-diagram` already generates SVG; this generalises to the
  richer `.drawio` format that supports layers, pages, and interactive editing

Outputs:
- `.pi/skills/visual-artifact-generator/commands/generate-drawio-diagram.md`
- `.pi/skills/visual-artifact-generator/references/drawio-patterns.md`
  (covering: XML structure, style strings, supported shapes, color/font mapping
  from visual-design defaults, multi-page diagrams, recommended layouts)

### Slice 7 — font vendoring

Evaluate, select, and vendor one sans + one mono font family (OFL/MIT) as
self-hosted WOFF2 assets.

Outputs:
- font preview HTML artifact for user review
- `/static/fonts/<family>/` with WOFF2 files (after approval)
- meta.json for each vendored font
- CSS `@font-face` snippet in skill references

**Process:**
1. generate a side-by-side font preview page showing the top candidates
   rendered with representative content (headings, body text, code blocks,
   data tables, diagram labels) in both light and dark themes
2. present the preview for user review and selection before committing to
   vendor any font assets
3. once approved, vendor the chosen WOFF2 files through the existing asset
   pipeline

### Slice 8 — cross-reference pass

Add explicit visual-output-standards cross-references to every existing skill
that creates visual artifacts:

- `visual-design`
- `azure-cost-chart`
- `azure-metrics-chart`
- `azure-subscription-diagram`
- `graphite-power-chart`
- `token-chart`
- `adaptive-cards-authoring`
- `situate-daily-notes` (situation report visuals)
- `kanban-management` (board card presentation)

### Slice 9 — ship skills and validate artifacts end to end

Once the sub-skills and templates are authored, each must be:

1. **shipped into the workspace** under `.pi/skills/visual-artifact-generator/`
   so the agent can discover and use them
2. **smoke-tested** by generating at least one representative artifact per
   command mode:
   - architecture explainer
   - data table
   - diff review
   - plan review
   - slide deck
   - project recap
3. **previewed** through at least one Piclaw surface:
   - `open_workspace_file` for workspace HTML files
   - `send_dashboard_widget` for smaller inline artifacts
4. **validated** for vendored library loading:
   - Mermaid renders correctly
   - ECharts renders correctly
   - vendored fonts load correctly (if added)
   - dark/light theme switching works
5. **committed and pushed** so the skill bundle is available in the repo

This slice is the integration gate: nothing is considered done until the
skill files are shipped, the artifacts render correctly, and the libraries
load from vendored paths.

Outputs:
- all skill files committed
- one artifact per command mode generated and previewed
- validation evidence recorded in `## Updates`

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [x] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- any vendored-asset packaging checks (`make build-piclaw` or equivalent)
- skill loading/discovery tests if they validate `.pi/skills/`

### New regression coverage to add
- generated artifact opens in at least one Piclaw viewer surface
- vendored library paths resolve correctly in generated HTML
- font references resolve when vendored

### Real-browser smoke surface
- generate one architecture explainer and one data-table artifact
- open each through the workspace file viewer or `open_workspace_file`
- verify vendored library loading (Mermaid renders, ECharts renders)
- verify font loading if vendored fonts are added

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-19 — Slices 1–6a implemented
- Shipped all command/prompt templates:
  - `commands/generate-web-diagram.md` (Slice 1 — architecture/system explainer)
  - `commands/generate-data-table.md` (Slice 2 — data table/comparison)
  - `commands/diff-review.md` (Slice 3 — diff review)
  - `commands/plan-review.md` (Slice 4 — plan review)
  - `commands/fact-check.md` (Slice 4 — fact check)
  - `commands/generate-slides.md` (Slice 5 — slide deck)
  - `commands/project-recap.md` (Slice 6 — project recap)
  - `commands/generate-drawio-diagram.md` (Slice 6a — draw.io generation)
- Each command references vendored library paths, the visual-design profile,
  and the appropriate reference material from Slice 0.
- Next: Slice 7 (font preview + vendoring), then Slice 8 (cross-reference
  pass), then Slice 9 (ship + validate end to end).

### 2026-04-19 — Slice 0 implemented
- Shipped the foundation skill and all references:
  - `.pi/skills/visual-artifact-generator/SKILL.md`
  - `references/libraries.md` (Mermaid, ECharts, D3, KaTeX, Babylon — all vendored paths)
  - `references/css-patterns.md` (theme structure, cards, grids, tables, animations, anti-patterns)
  - `references/responsive-nav.md` (sticky sidebar TOC, mobile horizontal scroll)
  - `references/slide-patterns.md` (section-based slide deck structure)
  - `references/drawio-patterns.md` (XML structure, style mapping, visual-design profile alignment)
- All library references use Piclaw vendored paths — no CDN dependencies.
- Visual-design profile is explicitly cross-referenced in the main SKILL.md.
- Next: implement command/prompt templates (Slices 1–6a).

### 2026-04-19
- Created from the upstream evaluation and user direction to adopt the core
  skill philosophy, adapt it to Piclaw's vendored libraries and environment,
  and make it the cross-referenced standard for all visual-artifact-producing
  skills.
- Refined into 9 concrete implementation slices (0–8), each producing
  specific deliverables aligned with existing Piclaw skills:
  - Slice 0: foundation (core skill + references adapted to vendored libs)
  - Slice 1: architecture / system explainer (aligns with `azure-subscription-diagram`)
  - Slice 2: data table / comparison (complements existing chart skills)
  - Slice 3: diff review (new for Piclaw)
  - Slice 4: plan review / fact check (complements `kanban-management`)
  - Slice 5: slide deck (new for Piclaw)
  - Slice 6: project recap (aligns with `situate-daily-notes`)
  - Slice 7: font vendoring
  - Slice 8: cross-reference pass across all visual-artifact skills
- Supersedes the evaluation-only ticket
  `evaluate-visual-explainer-for-piclaw.md`.
- Key decisions locked:
  - **adopt and adapt**, not embed or vendor as a runtime
  - use vendored Mermaid/ECharts/D3/KaTeX/Babylon instead of CDN
  - evaluate one or two display font families for vendoring
  - cross-reference from all visual-artifact skills
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- The upstream anti-slop guidance (forbidden fonts, forbidden colors, forbidden
  animations) is valuable and should be preserved or adapted, not discarded.
- The existing `visual-design` skill remains the **style defaults** reference.
  The new skill is the **rendering workflow and template** reference. They are
  complementary, not competing.

## Links

- `https://github.com/nicobailon/visual-explainer`
- `/workspace/.pi/skills/visual-design/SKILL.md`
- `/workspace/notes/preferences/visual-design.md`
- `docs/vendored-widget-libraries.md`
- `workitems/00-inbox/evaluate-visual-explainer-for-piclaw.md` (superseded)
- `/workspace/visual-explainer-feasibility-presentation-2026-04-19.html`
