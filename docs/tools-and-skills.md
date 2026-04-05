# Tools and skills

This document lists the tools and skills exposed to the agent, plus common slash commands.

## Agent tools

Core tools (from `pi`):

- `read` — read files
- `bash` — run shell commands
- `edit` — replace exact text
- `write` — write files

Piclaw keeps a small always-active baseline and lazily enables other tools on demand. This is one of the main context-conservation strategies: keep default tool exposure small, promote only what the current turn needs, and prefer compact discovery surfaces before expanding into detailed schemas or examples.
Default always-active set:

- `read`
- `edit`
- `write`
- `bash` on Linux/macOS, or `powershell` on Windows
- `list_internal_tools`
- `activate_tools`
- `reset_active_tools`
- `attach_file`
- `messages`
- `keychain`
- `exit_process`

Newly activated tools become available immediately to subsequent tool/model steps in the same turn. For critical actions, keep the needed tool in the default baseline or promote it with config.

You can extend that baseline with `.piclaw/config.json`:

```json
{
  "tools": {
    "additionalDefaultTools": ["search_workspace"]
  }
}
```

`piclaw` extensions:

- `attach_file` — attach a workspace file for download in the web UI (cards appear automatically; use `attachment:<filename>` only for inline embeds)
- `messages` — unified message CRUD tool with `action`:
  - `search` (FTS + hashtag + optional time filtering)
  - `get` (lookup by `row_ids` with context)
  - `add` (insert a row, optionally attaching media)
  - `delete` (thread-cascade delete, optional `dry_run`, optional `force`)
- `search_workspace` — full‑text search across notes + skills (FTS, with aggressive cleanup and size limits)
- `get_model_state` — show current model, thinking level, and context usage
- `list_models` — list available models/providers
- `switch_model` — switch to a different model
- `switch_thinking` — change thinking level (off → xhigh)
- `keychain` — list, get, set, and delete encrypted keychain entries
- `schedule_task` — schedule agent prompts or shell commands (cron, interval, or one-shot)
- `introspect_sql` — run read-only SQL queries against the messages database
- `list_internal_tools` — list available tools with descriptions, active-state markers, and toolset membership
- `activate_tools` — activate one or more available tools for the current session
- `reset_active_tools` — restore the configured default active-tool set for the current session
- `open_office_viewer` — open an Office document (`.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, `.odp`) in the built-in JS Office viewer (`/office-viewer/*`)
- `open_drawio_editor` — open a `.drawio` diagram file in the self-hosted draw.io editor (creates the file if it doesn't exist)
- `send_adaptive_card` — post an agent-owned Adaptive Card message in the web UI timeline
- `send_dashboard_widget` — post the built-in host-backed live dashboard widget to the web UI timeline
- `exec_batch` — run multiple shell commands and return concise summaries for each
- `powershell` — Windows-only replacement for the default shell tool; active instead of `bash` on Windows hosts
- `exit_process` — gracefully terminate piclaw so Supervisor restarts it; kept always active because lifecycle control should not depend on same-turn lazy activation
- `ssh` — get, set, or clear the session-scoped SSH profile used by remote-backed core tools (`read`, `write`, `edit`, `bash`)
- `proxmox` — get, set, or clear the session-scoped Proxmox API profile, perform ad-hoc Proxmox API requests, or run common VM/task/metrics workflows with keychain-backed token auth
- `portainer` — get, set, or clear the session-scoped Portainer API profile, perform ad-hoc Portainer API requests, or run common endpoint/stack/container workflows with keychain-backed token auth

`messages` `search` accepts `query`, `chat_jid` (or `*`/`all`), `role`, `after`, `before`, `since`, `limit`, `offset`, and `details_max_chars` for controlling detail payloads.
`messages` `get` accepts `row_ids`, optional `chat_jid`, `role`, `context_before`, `context_after`, and `details_max_chars`.
`messages` `add` accepts `content`, optional `chat_jid`, `type` (`user` or `agent`), and `media_ids`.
`messages` `delete` accepts `row_ids` and optional `chat_jid`, `force`, and `dry_run`.

Infrastructure tools follow one shared pattern:
- session-scoped profile actions: `get` / `set` / `clear`
- low-context discovery: `discover`
- compact introspection: `capabilities` / `workflow_help`
- intent routing: `recommend`
- raw escape hatch: `request`
- curated orchestration: `workflow`

That shared shape improves tool discoverability and keeps prompt usage down: the agent can ask what exists, narrow by family or intent, inspect just one workflow, and only then expand into concrete execution parameters.

`ssh` uses the profile half of that model for remote-backed core tools. `proxmox` and `portainer` implement the full pattern.

`ssh` accepts:
- `action` — `get`, `set`, or `clear`
- `chat_jid` — optional override; defaults to the current chat
- `ssh_target` — `user@host` or `user@host:/remote/path`
- `ssh_port` — optional port (default `22`)
- `private_key_keychain` — keychain entry containing the private key
- `known_hosts_keychain` — optional keychain entry containing `known_hosts`; empty string clears it
- `strict_host_key_checking` — `yes`, `accept-new`, or `no`

When a live session already exists, `ssh set` and `ssh clear` apply immediately to subsequent tool/model steps in the same turn.

`proxmox` accepts:
- `action` — `get`, `set`, `clear`, `discover`, `capabilities`, `workflow_help`, `recommend`, `request`, or `workflow`
- `chat_jid` — optional override; defaults to the current chat
- `base_url` — Proxmox API base URL (typically `https://host:8006/api2/json`); if omitted on `set`, the tool will try to discover a likely existing instance from env/keychain hints
- `api_token_keychain` — keychain entry containing the Proxmox API token credentials; if omitted on `set`, the tool will try to discover a likely default token entry
- `allow_insecure_tls` — allow self-signed/insecure TLS for requests (default `true`)
- `method` — HTTP method for `action=request` (`GET`, `POST`, `PUT`, `DELETE`)
- `path` — relative Proxmox API path for `action=request`
- `query` — optional query-string parameters for `action=request`
- `body` — optional request body for `action=request`
- `body_mode` — `form` or `json` body encoding for `action=request`
- `workflow` — named workflow for `action=workflow` or `action=workflow_help`
- `category` — optional workflow family filter for `action=capabilities` or `action=recommend`
- `include_workflows` — include detailed workflow entries for `action=capabilities`; defaults to `false` unless `category` is set
- `include_examples` — include generated example payloads for `action=workflow_help`
- `intent` — short goal description for `action=recommend`
- `max_recommendations` — max items for `action=recommend` (default `3`)
- `vmid` — VMID for VM/LXC workflows and provisioning flows
- `node` — optional explicit node for VM/LXC/task/storage workflows; required for create/download flows
- `storage` — storage name for storage/backup workflows and `metrics.storage`
- `upid` — UPID for task workflows
- `backup_volid` — backup volid/archive identifier for `backup.restore`
- `storage_type` — storage backend type for `storage.create` (for example `dir`, `nfs`, `lvmthin`, `zfspool`)
- `timeout_ms` / `poll_ms` — polling controls for workflow execution
- `force` — stop-force option for workflows like `vm.stop` or `lxc.stop`
- `target` — desired `{ status, qmpstatus }` for `vm.wait_state`
- `timeframe` — metrics timeframe such as `hour`, `day`, or `week`
- `cf` — metrics consolidation function such as `AVERAGE` or `MAX`
- `metric` / `metrics` — retain only the requested metric keys from metrics workflow results
- `snapshot_name` — snapshot name for `vm.snapshot.*`
- `description` — optional description for snapshot/clone workflows
- `name` / `hostname` — friendly guest names for `vm.create` / `lxc.create`
- `memory` / `cores` / `sockets` — common create-workflow sizing fields
- `ostype` / `net0` — common create-workflow convenience fields
- `ostemplate` / `rootfs` / `password` / `ssh_public_keys` / `unprivileged` — common `lxc.create` inputs
- `config` — advanced extra Proxmox form fields for create/storage workflows (for example `scsi0`, `path`, `content`, `features`)
- `newid` / `new_name` — target VMID/name for `vm.clone`
- `target_node` / `target_storage` — target placement hints for `vm.clone` and `vm.migrate`
- `full` — full-clone option for `vm.clone`
- `online` / `with_local_disks` — migration options for `vm.migrate`
- `mode` / `compress` — backup options for `backup.create`
- `slot` / `iso_volume` — VM cdrom slot and existing ISO volid for `vm.iso.attach` / `vm.iso.detach`
- `disk` / `size` — disk identifier and target size for disk workflows such as `vm.disk.resize`
- `download_url` / `filename` / `content` — inputs for `storage.download_url`
- `checksum` / `checksum_algorithm` / `compression` / `verify_certificates` — optional integrity and transfer controls for `storage.download_url`
- `command` / `command_args` / `input_data` — guest-agent exec inputs for `vm.agent.exec`
- `limit` — result limit for list-style workflows like `task.list`
- `lines` — line count for `node.log`

Supported workflows today:
- `cluster.status`
- `vm.resolve_node`
- `vm.status`
- `vm.inspect`
- `vm.create`
- `vm.start`
- `vm.stop`
- `vm.resume`
- `vm.restart`
- `vm.ip`
- `vm.migrate`
- `vm.iso.attach`
- `vm.iso.detach`
- `vm.disk.resize`
- `vm.disk.detach`
- `vm.disk.remove`
- `lxc.resolve_node`
- `lxc.status`
- `lxc.inspect`
- `lxc.create`
- `lxc.start`
- `lxc.stop`
- `lxc.restart`
- `lxc.ip`
- `node.list`
- `node.inspect`
- `node.log`
- `node.reboot`
- `node.shutdown`
- `storage.list`
- `storage.inspect`
- `storage.content.list`
- `storage.create`
- `storage.download_url`
- `backup.list`
- `backup.create`
- `backup.restore`
- `task.list`
- `task.status`
- `task.log`
- `task.wait`
- `vm.wait_state`
- `vm.snapshot.list`
- `vm.snapshot.create`
- `vm.snapshot.rollback`
- `vm.snapshot.delete`
- `vm.clone`
- `vm.template.create`
- `vm.agent.exec`
- `vm.agent.osinfo`
- `vm.agent.fsinfo`
- `vm.agent.users`
- `metrics.node`
- `metrics.vm`
- `metrics.storage`

The `proxmox` tool deliberately keeps both a raw `request` path and a higher-level `workflow` path. `action=capabilities` is compact by default: it returns workflow-family summaries unless you set `category` and/or `include_workflows`. `action=recommend` gives a short intent-based workflow shortlist. `action=workflow_help` returns required/optional fields plus `recommended_for`, `see_also`, and `guidance`; set `include_examples=true` only when you want generated example payloads. This makes the tool both discoverable and context-efficient. A good default operator flow is: `discover` (optional) → `capabilities` or `recommend` → `workflow_help` → `workflow`, falling back to raw `request` only when the native workflow surface is too specialized or not yet modeled.

`portainer` accepts:
- `action` — `get`, `set`, `clear`, `discover`, `capabilities`, `workflow_help`, `recommend`, `request`, or `workflow`
- `chat_jid` — optional override; defaults to the current chat
- `base_url` — Portainer base URL (typically `https://host:9443`); if omitted on `set`, the tool will try to discover a likely existing instance from keychain/env hints
- `api_token_keychain` — keychain entry containing the Portainer API token secret; if omitted on `set`, the tool will try to discover a likely default token entry
- `allow_insecure_tls` — allow self-signed/insecure TLS for requests (default `true`)
- `method` — HTTP method for `action=request` (`GET`, `POST`, `PUT`, `DELETE`)
- `path` — relative Portainer API path for `action=request`
- `query` — optional query-string parameters for `action=request`
- `body` — optional request body for `action=request`
- `body_mode` — `json` or `text` body encoding for `action=request`
- `headers` — optional extra request headers for `action=request`
- `workflow` — named workflow for `action=workflow` or `action=workflow_help`
- `category` — optional workflow family filter for `action=capabilities` or `action=recommend`
- `include_workflows` — include detailed workflow entries for `action=capabilities`; defaults to `false` unless `category` is set
- `include_examples` — include generated example payloads for `action=workflow_help`
- `intent` — short goal description for `action=recommend`
- `max_recommendations` — max items for `action=recommend` (default `3`)
- `endpoint_id` — endpoint ID for endpoint/stack/container/network workflows
- `stack_id` — stack ID for stack workflows
- `container_id` — container ID/prefix for container workflows
- `network_id` — network ID/prefix for network workflows
- `name` — generic lookup name for endpoint/container/network workflows, or a fallback image/volume name where applicable
- `image` — image reference for image workflows
- `volume_name` — volume name for `volume.inspect`
- `stack_name` — stack name for stack workflows
- `stack_file_content` — compose content for stack create/update workflows
- `unmanaged` — only keep unmanaged containers for `container.list`
- `force` — force deletion for `container.delete`, `container.upgrade` cleanup, or `image.delete`
- `all_unused` — prune all unused images for `image.prune`, not just dangling ones
- `tail` — tail line count for `container.logs`
- `timestamps` — include timestamps for `container.logs`
- `timeout_sec` — stop/restart timeout seconds for container workflows including `container.upgrade`
- `command` / `command_args` — bounded exec inputs for `container.exec`
- `driver` / `internal` / `attachable` / `enable_ipv6` / `labels` / `options` — network/volume creation inputs
- `names` — container names for bulk workflows like `container.upgrade_many`

Portainer follows the same discovery pattern as Proxmox: `discover` (optional) → `capabilities` or `recommend` → `workflow_help` → `workflow`, with raw `request` reserved for API areas that are still too broad or niche to model directly. The result is the same balance: high discoverability without forcing full workflow enumeration into every turn.

Supported Portainer workflows today:
- `endpoint.list`
- `endpoint.resolve`
- `endpoint.inspect`
- `endpoint.ping`
- `endpoint.docker_info`
- `endpoint.docker_version`
- `endpoint.system_df`
- `stack.list`
- `stack.resolve`
- `stack.file`
- `stack.create_standalone`
- `stack.update`
- `stack.pull_and_update`
- `stack.delete`
- `container.list`
- `container.resolve`
- `container.inspect`
- `container.compose`
- `container.start`
- `container.stop`
- `container.restart`
- `container.logs`
- `container.mounts`
- `container.exec`
- `container.upgrade`
- `container.upgrade_many`
- `container.delete`
- `image.list`
- `image.inspect`
- `image.pull`
- `image.delete`
- `image.prune`
- `image.update_check`
- `network.list`
- `network.inspect`
- `network.create`
- `network.delete`
- `volume.list`
- `volume.inspect`
- `volume.create`
- `volume.delete`
- `volume.prune`

The `portainer` tool follows the same contract as `proxmox`: chat-scoped profile actions, a raw `request` path for ad-hoc API calls, and a named `workflow` path for common operational flows. `action=capabilities` is compact by default: it returns workflow-family summaries unless you set `category` and/or `include_workflows`. `action=recommend` gives a short intent-based workflow shortlist. `action=workflow_help` returns required/optional fields plus `recommended_for`, `see_also`, and `guidance`; set `include_examples=true` only when you want generated example payloads. For standalone containers, `container.upgrade` now bakes in the expected base flow: pull the target image, recreate in place, and roll back if the replacement fails to start.

`search_workspace` accepts:
- `query` — FTS query text
- `scope` — `notes`, `skills`, or `all` (default)
- `limit`, `offset`
- `refresh` — re-index notes/skills before searching (default `true`)
- `max_kb` — max file size to index (default 512KB, clamped 16–2048KB)

The workspace index is **aggressively cleaned** on each refresh:
- deleted files are removed from the index
- oversized files are dropped immediately

## Skills

Skills live under:

- Project scope: `/workspace/.pi/skills`
- Global scope: `/home/agent/.pi/agent/skills`

Each skill keeps its script alongside its `SKILL.md` for portability. Current set:

| Skill | Purpose |
|------|---------|
| `debug` | Diagnose container issues and environment setup |
| `setup` | Scaffold a new project with Bun + Makefile |
| `reload` | Force-restart `piclaw` after code changes (tarball install, not symlinks) |
| `playwright` | Local Playwright browser automation |
| `schedule` | Create/modify scheduled tasks via IPC |
| `send-message` | Send chat messages immediately via IPC (supports optional `media` attachments via `media` array) |
| `token-chart` | Generate token usage charts (from `token_usage`); supports `--mode provider-model` for per-provider/model breakdowns |
| `graphite-power-chart` | Generate Zigbee/Graphite charts for the web timeline |
| `web-search` | Search the web via SearXNG and convert pages to Markdown |
| `web-search-summary` | Search via SearXNG with auto-summarised results |
| `twitter-summary` | Fetch a user's recent tweets via Playwright + Nitter |
| `feed-digest` | Build a deduped Markdown digest from an RSS/Atom feed index |
| `bootstrap-container` | Validate required tools and install missing dependencies |
| `extension-design` | Design and audit Pi extensions safely |
| `extension-troubleshoot` | Diagnose and fix extension issues (imports, DB init, watcher perms) |
| `kanban-management` | Manage the project workitems board: ideation, triage, quality scoring, definition-of-done tracking |
| `adaptive-cards-authoring` | Author Adaptive Cards for structured web interactions |
| `close-of-day` | End-of-day sweep: situate, backup, timeline cleanup, daily-notes summarisation |
| `export-timeline-pdf` | Export a chat timeline to PDF via Playwright |
| `feature-refinement-flow` | Structured 20-question refinement flow before implementation |
| `situate-daily-notes` | Situation report and Obsidian-style daily summary notes |
| `timeline-cleanup` | Delete low-value timeline messages by keyword patterns |
| `proxmox-management` | Manage Proxmox VM lifecycle, USB mapping passthrough, and backup-restore moves |

`kanban-management` intentionally keeps its public name for now, but repo-local board paths in this project now live under `workitems/`. Visual/editor semantics such as `*.kanban.md` remain intentionally named.

For agent-driven work, prefer the native `proxmox` tool first. The old packaged Proxmox/Portainer helper CLIs were removed once the chat-scoped native tools and shared workflow engines became the canonical path. For shell-oriented Proxmox lifecycle work that still belongs in the skill layer, use the remaining `proxmox-management` skill wrappers instead.

## Web extension UI note

For web-facing extension work, prefer the following order of surfaces:

1. **Pane extensions** for substantial mounted UI
2. **Adaptive Cards / timeline messages** for structured conversational UI
3. **`extension_ui_*` bridge events** for lightweight browser-session integrations

See [extension-ui-contract.md](extension-ui-contract.md) and [web-pane-extensions.md](web-pane-extensions.md) for the current contract.

## Slash commands

Direct commands (no LLM round-trip):

| Command | Purpose |
|---------|---------|
| `/model [provider/model]` (alias `/models`) | Select model or list available models |
| `/cycle-model [back]` | Cycle to the next available model |
| `/thinking [level]` | Show or set thinking level |
| `/cycle-thinking` | Cycle thinking level |
| `/theme [name]` | Set UI theme (use `/theme list` to see options) |
| `/tint [#hex|name|off]` | Tint the default light/dark UI (e.g. `/tint #3b82f6`, `/tint orange`) |
| `/state` | Show current session state |
| `/stats` | Show session token and cost stats |
| `/context` (alias `/ctx`) | Show context window usage |
| `/last` | Show last assistant response |
| `/compact [instructions]` | Manually compact the session |
| `/auto-compact on\|off` | Toggle auto-compaction |
| `/auto-retry on\|off` | Toggle auto-retry |
| `/abort` | Abort the current response |
| `/abort-retry` | Abort retry backoff |
| `/abort-bash` | Abort running bash command |
| `/shell <cmd>` | Run a shell command and return output |
| `/bash <cmd>` | Run a shell command and add output to context |
| `/queue <msg>` | Queue a follow-up message (one at a time) |
| `/queue-all <msg>` | Queue a follow-up message (batch all) |
| `/steering-mode all\|one` | Set steering mode |
| `/followup-mode all\|one` | Set follow-up mode |
| `/session-name [name]` | Set or show the session name |
| `/new-session` | Start a new session |
| `/switch-session <file>` | Switch to a session file |
| `/fork` | Fork from a previous message |
| `/forks` | List forkable messages |
| `/tree` | List the session tree and navigate branches |
| `/label` | Set or clear a label on a tree entry |
| `/labels` | List labelled entries |
| `/agent-name [name]` | Set or show the agent display name |
| `/agent-avatar [url]` | Set or show the agent avatar URL |
| `/user-name [name]` | Set or show your display name |
| `/user-avatar [url]` | Set or show your avatar URL |
| `/user-github <url>` | Set your name/avatar from a GitHub profile |
| `/export-html` | Export session to HTML |
| `/passkey [enrol|list|delete]` | Manage passkeys (enrolment link, list, delete) |
| `/totp` / `/totp reset <code>` | Open the single-card TOTP setup/secondary/reset flow; commit only after confirmation |
| `/qr <text>` | Generate a QR code for text or a URL |
| `/search <query>` | Search notes and skills in the workspace |
| `/restart` | Restart the agent and stop subprocesses |
| `/commands` | List available commands |
| `/btw <question>` | Open a side-conversation panel in the web UI and stream an answer without interrupting the main chat |
| `/tasks [filter]` | List scheduled tasks (via extension) |
| `/scheduled [filter]` | Alias for `/tasks` |

> [!NOTE]
> Provider auth works via `pi /login` in the terminal or the experimental `/login` card flow in the web UI.
> The card-based `/login` flow supports GitHub Copilot, Codex, and standard OpenAI providers. Anthropic is untested. The terminal remains the reliable fallback.

`/search` performs a workspace full‑text search (notes + skills) without calling the LLM:

```
/search "graphite power"
/search --scope notes restic
/search --scope skills --no-refresh "search_workspace"
/search --scope notes --limit 20 --offset 20 "token pricing"
```

Supported flags: `--scope notes|skills|all`, `--limit`, `--offset`, `--refresh`, `--no-refresh`, `--max-kb`.

Adaptive Card and side-conversation helpers are intentionally explicit web-facing affordances:
- `send_adaptive_card` is the preferred internal tool for posting agent-owned Adaptive Cards in the web UI without routing through a local slash command.
- card submissions are persisted as structured `adaptive_card_submission` blocks, so the timeline can render compact receipt UI and finished cards can display their submitted values read-only.
- `/btw` is currently a thin consumer of the side-prompt substrate: it streams a side answer in the web panel, reseeds from current main-chat context, and only injects back into the main chat when explicitly requested.
- `/btw` currently reuses the chat's model/thinking context but is still prompt-only rather than a full side tool-using agent loop.
- `/context` reports current context-window usage; the compose-footer indicator is refreshed on reconnect and when returning to the tab so the compaction affordance stays current.

## Skill pipeline

Skills create tasks via IPC JSON files. Each task can optionally specify a `model` field (e.g. `anthropic/claude-sonnet-4-20250514`) to run on a cheaper or different model than the user's current one. The scheduler handles model switching and restoration automatically.

Tasks are isolated from the user's conversation using the **session tree** — the scheduler saves the tree position before execution and navigates back afterwards. This prevents the task's prompt/response from appearing in the user's conversation context while still preserving it in a side branch for inspection via `/tree`. See [runtime-flows.md](runtime-flows.md) for the full flow.

Model names are validated at task creation time — invalid or ambiguous model identifiers are rejected before the task is persisted.

```mermaid
flowchart LR
  Skill[Skill script] --> IPC[IPC file]
  IPC --> Scheduler[Task scheduler]
  Scheduler --> Tree[Save/restore tree position]
  Tree --> Pool[AgentPool]
  Pool --> Channel[Web UI / WhatsApp]
```
