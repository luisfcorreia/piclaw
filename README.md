# `piclaw` — your self-hosted AI workspace

![PiClaw](docs/icon-256.png)

PiClaw packages the [Pi Coding Agent](https://github.com/badlogic/pi-mono) into a self-hosted workspace with a streaming web UI, multi-provider LLM support, persistent state, and a growing collection of built-in tools — code editor, terminal, VNC client, document viewers, kanban boards, and autonomous experiment loops.

It is built for people who want a practical, stateful agent they can run locally or in a container without stitching together half a dozen separate services.

## Why PiClaw

![Demo Animation](docs/demo.gif)

- **Streaming web UI** — real-time chat with Markdown, KaTeX, Mermaid, and Adaptive Cards
- **Persistent agent state** — SQLite-backed messages, media, tasks, token usage, encrypted keychain, and session-scoped SSH / Proxmox / Portainer profiles
- **Workspace-native workflow** — browse files, preview documents, upload attachments, edit code, reference files in prompts, and optionally flip core tools to a remote SSH host for the current session
- **Built-in tools** — Ghostty-based terminal, code editor, Office/PDF/CSV/image/video viewers, draw.io, kanban board and mindmap editors, VNC client, browser automation, and agent-only infrastructure tools for SSH, Proxmox, and Portainer
- **Agent control features** — steering, queued follow-ups, threading, side prompts, autoresearch experiment loops, and scheduled tasks
- **Context conservation by default** — small always-active tool baseline, lazy tool activation, compact capability introspection, and opt-in examples for higher-detail workflow help
- **Optional auth and channels** — passkeys/TOTP for the web UI, plus optional WhatsApp integration

## Quick start

```bash
mkdir -p ./home ./workspace

docker run -d \
  --name piclaw \
  --restart unless-stopped \
  -p 8080:8080 \
  -e PICLAW_WEB_PORT=8080 \
  -v "$(pwd)/home:/config" \
  -v "$(pwd)/workspace:/workspace" \
  ghcr.io/rcarmo/piclaw:latest
```

Open `http://localhost:8080` and type `/login` to configure your LLM provider.

| Mount | Container path | Contents |
|---|---|---|
| Home | `/config` | Agent home (`.pi/`, `.gitconfig`, `.bashrc`) |
| Workspace | `/workspace` | Projects, notes, and piclaw state |

> [!WARNING]
> Never delete `/workspace/.piclaw/store/messages.db`. It contains chat history, media, and task state.

> [!IMPORTANT]
> You do **not** need to set provider API keys in piclaw environment variables. PiClaw reuses provider credentials configured in Pi Agent settings.

## Web UI

PiClaw is single-user, mobile-friendly, and streams updates over SSE.

### Chat

- Thought and draft panels during streaming
- Live steering and queued follow-ups
- Adaptive Cards with persisted submissions
- `/btw` side conversations
- File attachments, link previews, and threaded turns
- Themes and tinting via `/theme` and `/tint`
- Mobile-friendly layout with webapp manifest

### Workspace

- Sidebar file browser with auto-refresh and drag-and-drop upload
- File-reference pills in prompts
- Folder sizes in the starburst explorer

### Editor

- CodeMirror 6 with syntax highlighting for JS/TS, Python, Go, JSON, CSS, HTML, YAML, SQL, XML/SVG, Markdown, and Shell
- Search and replace, dirty-state tracking, line wrapping
- Lazy-loaded local bundle — no CDN dependency


### Terminal

- Ghostty-based web terminal — a real shell in the browser, not a simulation
- Runs as a dock panel or a standalone tab
- Detachable into popout windows with live session transfer
- Disabled by default; enable with `PICLAW_WEB_TERMINAL_ENABLED=1`

### Viewers

- **Draw.io** — self-hosted editor with SVG/PNG/XML export back to workspace
- **Office documents** — `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, `.odp`
- **CSV/TSV** — dedicated table viewer
- **PDF, images, video** — inline viewers
- **Kanban boards** — `*.kanban.md` in a drag-and-drop board editor (Obsidian Kanban compatible)
- **Mindmaps** — `*.mindmap.yaml` in a D3/SVG visual editor
- **VNC remote display** — connect to remote machines from a tab (experimental)

### Automation

- **`cdp_browser`** — Chromium/Edge/Chrome automation via CDP for navigation, JS evaluation, DOM clicking, and screenshots
- **`win_*` tools** — Windows-only desktop automation via Win32 FFI for window enumeration, screenshots, element inspection, clicking, typing, and process management. No-ops on non-Windows platforms.

## Configuration

Key environment variables:

| Variable | Default | Purpose |
|---|---|---|
| `PICLAW_WEB_PORT` | `8080` | Web UI port |
| `PICLAW_WEB_TERMINAL_ENABLED` | `0` | Enable the authenticated Ghostty-based web terminal |
| `PICLAW_WEB_TOTP_SECRET` | _(empty)_ | Base32 TOTP secret; enables login gate (or initialize with `/totp`) |
| `PICLAW_WEB_PASSKEY_MODE` | `totp-fallback` | `totp-fallback`, `passkey-only`, or `totp-only` |
| `PICLAW_ASSISTANT_NAME` | `PiClaw` | Display name in the UI |
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypted secret storage |
| `PICLAW_TRUST_PROXY` | `0` | Enable when behind a reverse proxy or tunnel |

For the full list, auth setup (TOTP/passkeys), session-scoped SSH-backed remote tools, reverse proxy configuration, and SSHFS/FUSE support, see [docs/configuration.md](docs/configuration.md).

## Other install methods

### Install without Docker

```bash
bun add -g github:rcarmo/piclaw
```

Experimental. Linux/macOS/Windows. See [docs/install-from-repo.md](docs/install-from-repo.md).

### Build from source

See [docs/development.md](docs/development.md).

## Documentation

**Setup & operations**
- [Configuration](docs/configuration.md) — environment variables, auth, reverse proxy, SSHFS
- [Install from repo](docs/install-from-repo.md) — Bun-based Docker-free install
- [Release process](docs/release.md) — versioning, tagging, publishing

**Architecture & internals**
- [Architecture](docs/architecture.md)
- [Runtime flows](docs/runtime-flows.md)
- [Storage model](docs/storage.md)
- [Web pane extensions](docs/web-pane-extensions.md)
- [Extension UI contract](docs/extension-ui-contract.md)

**Reference**
- [Tools and skills](docs/tools-and-skills.md) — includes the uniform `ssh` / `proxmox` / `portainer` control surface (`discover`, `capabilities`, `recommend`, `request`, `workflow`) and the context-conserving discovery flow
- [Keychain](docs/keychain.md)
- [WhatsApp](docs/whatsapp.md)
- [Cross-instance interop](docs/cross-instance-ipc.md)
- [Development](docs/development.md)

## Credits

- [rcarmo/agentbox](https://github.com/rcarmo/agentbox)
- [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- [badlogic/pi-mono](https://github.com/badlogic/pi-mono)
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — autonomous experiment loop by Tobi Lutke and David Cortés (vendored under `runtime/vendor/autoresearch/`)

## Licence

MIT
