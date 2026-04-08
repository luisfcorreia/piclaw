---
id: bundle-mcp-cli
title: Bundle mcp-cli for local MCP server management
status: done
priority: medium
created: 2026-03-11
updated: 2026-04-08
completed: 2026-04-08
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - tooling
  - mcp
  - cli
  - container
owner: pi
---

# Bundle mcp-cli for local MCP server management

## Summary

Bundle [philschmid/mcp-cli](https://github.com/philschmid/mcp-cli) into the
piclaw container so MCP (Model Context Protocol) servers can be managed
locally.

The first pass should focus on:
- making `mcp-cli` available in the container PATH
- defining a piclaw-owned config location under `.piclaw/mcp/`
- documenting host-native installation separately
- adding a helper skill or equivalent guidance for common MCP workflows

This ticket is about **consuming/managing external or local MCP servers**, not
exposing piclaw itself as an MCP server.

## Problem Statement

MCP is becoming a standard way to expose tools/resources to agents, but piclaw
currently has no bundled MCP management CLI.

That creates a gap between:
- wanting to experiment with external MCP servers,
- wanting a reproducible local config layout inside the container,
- and wanting a guided workflow consistent with the rest of piclaw.

## Research findings (2026-04-06)

Verified from upstream project metadata and a local dry run:

- upstream repo: `philschmid/mcp-cli`
- implementation: **Bun-based TypeScript CLI**
- upstream package metadata declares `engines.bun >=1.0.0`
- upstream README supports both:
  - install script / prebuilt binary path
  - `bun install -g https://github.com/philschmid/mcp-cli`
- latest release currently publishes:
  - `mcp-cli-linux-x64`
  - `mcp-cli-darwin-x64`
  - `mcp-cli-darwin-arm64`
  - **no Linux arm64 binary in the latest release assets**
- actual current command surface is:
  - bare `mcp-cli` → list servers/tools
  - `mcp-cli info <server>`
  - `mcp-cli info <server> <tool>`
  - `mcp-cli grep <pattern>`
  - `mcp-cli call <server> <tool> [json]`
- upstream native config search expects `mcp_servers.json` in:
  - current working directory, or
  - `~/.config/mcp/`
- local validation in this x86_64 container confirmed:
  - downloaded `mcp-cli-linux-x64` runs
  - `--version` works
  - `--help` works
  - a trivial config file is read and the CLI returns a structured connection error when the target server exits immediately

## V1 scope decision

Lock v1 to:

- **container-first** install and validation
- raw `mcp-cli` available in PATH
- piclaw-owned config file at `/workspace/.piclaw/mcp/mcp_servers.json`
- helper guidance focused on:
  - list/discovery
  - schema inspection
  - basic tool invocation
- host-native installation documented, but not required for the first shipped slice

## Out of scope for v1

- exposing piclaw itself as an MCP server
- building a full MCP extension/runtime bridge inside piclaw
- rich GUI management for MCP servers
- opinionated server templates beyond a minimal starter config/examples
- broad MCP auth/session orchestration beyond what `mcp-cli` already supports

## Desired Behavior

- `mcp-cli` is available in the container PATH.
- Piclaw has a canonical MCP config home at `.piclaw/mcp/`.
- The recommended piclaw config file is:
  - `/workspace/.piclaw/mcp/mcp_servers.json`
- Common tasks are documented or wrapped by a helper skill:
  - discover/list available servers and tools
  - inspect a server/tool schema
  - call a tool with JSON arguments
- Host-native installation instructions exist separately.
- Architecture limitations or install fallbacks are documented explicitly.

## Acceptance Criteria

- [ ] `mcp-cli` binary/command available in container PATH.
- [ ] Host-native install instructions documented separately.
- [ ] Default piclaw config location is defined as `/workspace/.piclaw/mcp/mcp_servers.json`.
- [ ] Piclaw guidance explains the mismatch between upstream default config discovery and piclaw's preferred `.piclaw/mcp/` location.
- [ ] Verify basic commands work in the container:
  - [ ] `mcp-cli --version`
  - [ ] `mcp-cli --help`
  - [ ] `mcp-cli --config /workspace/.piclaw/mcp/mcp_servers.json`
  - [ ] `mcp-cli info <server>` on a known test config
  - [ ] `mcp-cli call <server> <tool> <json>` on a known test config or documented local sample
- [ ] Add install step to Dockerfile and/or bootstrap-container flow as appropriate.
- [ ] Add a helper skill or equivalent guidance for common local MCP server management workflows.
- [ ] Bun/container compatibility is explicitly verified or limitations are documented.
- [ ] Linux arm64 behavior is covered by the same Bun-first install path rather than a separate binary-only exception path.

## Install strategy options

### Path A — pinned source install via Bun (recommended)
1. Install from the upstream git repo using Bun during container/bootstrap setup.
2. Keep the raw `mcp-cli` command available in PATH.
3. Use piclaw docs/helper tooling to always pass `--config /workspace/.piclaw/mcp/mcp_servers.json`.

**Pros:**
- best fit for a Bun-oriented container
- avoids depending on upstream prebuilt binary coverage for every architecture
- simpler multi-arch story if Bun can build/install it cleanly

**Cons:**
- depends on upstream repo layout/installability remaining stable
- less self-contained than a pinned release binary

### Path B — direct piclaw integration wrapper over Bun-installed mcp-cli
1. Install `mcp-cli` via Bun as the only supported runtime path.
2. Expose common MCP workflows through a thin piclaw-owned wrapper/skill or built-in helper.
3. Keep the raw `mcp-cli` available for direct use, but make piclaw guidance default to the integrated path.

**Pros:**
- preserves one Bun-first install story
- reduces repetitive flags/config boilerplate for routine use
- leaves room for deeper future integration without changing install assumptions

**Cons:**
- broader than simple bundling
- needs clearer ownership between raw CLI access and piclaw-managed UX

## Recommended Path

Path A as the baseline contract: **always Bun-first**.

If the first implementation pass already touches enough piclaw-owned UX, treat
Path B as a direct follow-on and possibly fold the common workflows into a thin
integrated wrapper instead of keeping the feature as documentation-only around a
raw third-party CLI.

Reason:
- piclaw already ships Bun globally in the container
- upstream is Bun-native
- current upstream release assets are not sufficient for a clean multi-arch
  binary-only strategy
- a single Bun-first story is simpler than binary-vs-source branching

## Piclaw integration decisions to lock

### Config location
Upstream expects `mcp_servers.json` in CWD or `~/.config/mcp/`, but piclaw wants
state under `.piclaw/`.

For v1, prefer:
- canonical file: `/workspace/.piclaw/mcp/mcp_servers.json`
- helper skill / docs invoke `mcp-cli --config /workspace/.piclaw/mcp/mcp_servers.json`

This avoids depending on cwd and avoids hiding config in the home directory.

### Helper skill scope
The helper skill should cover only the practical first workflows:
- initialize or validate `.piclaw/mcp/mcp_servers.json`
- list/discover tools (`mcp-cli -d` or equivalent)
- inspect schema (`mcp-cli info server/tool`)
- call a tool (`mcp-cli call server/tool '{...}'`)
- explain common errors and config placement

## Likely implementation surfaces

- `Dockerfile`
  - image-time Bun-first install path if this should ship in the base container
- `/workspace/.pi/skills/bootstrap-container/SKILL.md`
  - bootstrap-time install/check guidance
- `notes/preferences/agent.md`
  - already indicates Bun preference for scripts/tooling
- future MCP helper skill directory under `.pi/skills/` or piclaw skill surfaces
- possible direct integration surface if common MCP flows are wrapped instead of left as raw CLI-only guidance

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Upstream release assets remain incomplete across architectures | low | ignore binary-first packaging and keep Bun-first install as the baseline strategy |
| Upstream config defaults conflict with piclaw workspace conventions | medium | always use explicit `--config /workspace/.piclaw/mcp/mcp_servers.json` in docs/helper flows |
| Raw `mcp-cli` UX is too low-level for routine use | low | add a thin helper skill with common tasks/examples |
| Bun/global install path drifts over time | medium | pin repo/tag/commit and validate via explicit commands in CI/bootstrap |

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing checks to rerun are listed:
  - [ ] container/bootstrap validation path
  - [ ] Dockerfile image build (if image-time install is chosen)
- [ ] New validation to add is listed:
  - [ ] install succeeds in the current x86_64 container
  - [ ] config file under `.piclaw/mcp/` is recognized when passed via `--config`
  - [ ] list/info/call flows behave as expected against a known sample config
  - [ ] the Bun-first install path behaves consistently across the supported piclaw container architectures
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] no browser pass required for v1 CLI-only install

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

### 2026-04-08
- Lane change: `10-next` → `50-done` by user direction.
- Closed as **superseded / not-done**.
- Rationale:
  - PiClaw now ships `pi-mcp-adapter` instead of bundling raw `mcp-cli`.
  - The adapter provides the user-facing MCP workflow we actually want: bundled runtime integration, `mcp` tool access, slash commands, project-local config, and docs/skill guidance.
  - Keeping this ticket open would now be misleading because the product need was satisfied through a different implementation path.
- Practical outcome:
  - supported MCP path: `pi-mcp-adapter`
  - preferred config: `.pi/mcp.json`
  - starter example: `.pi/mcp.json.example`
  - raw `mcp-cli` is not required by the shipped MCP integration.

### 2026-04-06
- Follow-up clarification from board review: the install strategy is now locked to **Bun-first** rather than keeping a binary-first fallback path open as a co-equal option.
- Updated the ticket to treat raw release binaries as validation evidence only, not the preferred shipping contract.
- Kept one intentional product-level choice open: whether the first shipped slice stops at bundling + helper guidance or immediately adds a thin piclaw-owned integration layer over the Bun-installed CLI.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-04-06
- Refinement pass completed using upstream project metadata plus a local dry run in the current x86_64 container.
- Verified upstream facts relevant to implementation:
  - `mcp-cli` is Bun-based and can be installed from source via Bun
  - latest release publishes `mcp-cli-linux-x64` but does **not** currently publish a Linux arm64 binary asset
  - actual command surface is `info` / `grep` / `call` plus bare listing, not the earlier placeholder `list/run/inspect` wording
  - upstream config discovery is CWD or `~/.config/mcp/`, so piclaw needs an explicit `.piclaw/mcp/` convention rather than assuming native defaults match
- Local dry-run evidence:
  - downloaded upstream `mcp-cli-linux-x64`
  - confirmed `--version` and `--help`
  - confirmed the CLI reads a supplied config file and returns a structured connection failure when the configured test server exits immediately
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the remaining open design choice is whether the first shipped slice stops at bundling + helper guidance or immediately adds a thin piclaw-owned integration layer over the Bun-installed CLI.

### 2026-04-06
- Board quality review: added the missing readiness score for the current planning state.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 2, deps: 0, risk: 1)
- Gap: install method, Bun/container compatibility, and concrete runtime validation steps are still open enough that dependencies remain unmapped.

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- Still awaiting install-method and Bun/container compatibility research before promotion into active implementation.

### 2026-03-12
- Board quality review: ticket already had a clear summary and rough acceptance criteria; kept in inbox pending install-method research.
- Refined from 5-question pass:
  - target container install for v1, with host instructions only
  - include both install and initial wiring
  - use `.piclaw/mcp/` as the default config location
  - add a helper skill for common workflows
  - scope stays on consuming MCP servers rather than exposing piclaw as one
  - explicitly verify whether install/runtime works cleanly in the Bun-oriented environment

## Notes

- This ticket is specifically about bundling and managing `mcp-cli`, not building a deeper MCP runtime bridge inside piclaw.
- That scope is now superseded in practice by bundling `pi-mcp-adapter` instead of the raw `mcp-cli` executable.
- The stronger long-term design question around MCP-style discovery ergonomics for internal tools is tracked separately.
- The current upstream project already aligns well with piclaw's Bun-oriented environment, which makes it a good fit technically even if config/location conventions need adaptation.

## Implementation Paths Considered (historical)

- This ticket was closed as superseded rather than implemented directly.
- PiClaw now ships `pi-mcp-adapter` as the supported MCP integration surface, including:
  - bundled package dependency
  - automatic session extension loading
  - the `mcp` proxy tool
  - `/mcp` and `/mcp-auth` slash commands
  - project-local starter config at `.pi/mcp.json.example`
  - MCP guidance in the seeded workspace skills/docs
- `mcp-cli` is therefore no longer the preferred product path for MCP access in PiClaw.
- If raw standalone CLI management is still wanted later, it should come back as a smaller follow-up ticket with a clearly separate justification from the shipped adapter path.

## Links

- `Dockerfile`
- `/workspace/.pi/skills/bootstrap-container/SKILL.md`
- `notes/preferences/agent.md`
- `workitems/00-inbox/adopt-mcp-style-discovery-for-internal-tools.md`
