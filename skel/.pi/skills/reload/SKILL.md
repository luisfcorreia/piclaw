---
name: reload
description: Reinstall piclaw from workspace source and force-restart the running process. Use after making code changes to piclaw.
distribution: public
---

# Reload Piclaw

Reinstall piclaw from workspace source, then restart the managed process.

> ⚠️ In this container runtime, always install to `/usr/local/lib/bun/install/global/node_modules/piclaw`. Do **not** deploy to `/home/agent/.bun/...` or the running service may keep using an older build.

## Preferred workflow

```bash
cd /workspace/piclaw && make local-install
```

This is the canonical repo path for this environment. It already handles the build, pack, install, and restart sequence correctly.

## Useful variants

Build only:

```bash
cd /workspace/piclaw && make build-piclaw
```

Vendor bundle only:

```bash
cd /workspace/piclaw && make vendor
```

Restart only:

```bash
cd /workspace/piclaw && make restart
```

## Service-manager detection order

The restart flow auto-detects the manager in this order:

| Priority | Check | Restart method |
|---|---|---|
| 0 | `PICLAW_SERVICE_MANAGER` set | use its value directly (`supervisor`, `systemd`, `manual`) |
| 1 | `supervisorctl` exists and a `piclaw` program is registered | `supervisorctl restart piclaw` |
| 2 | `systemctl` exists and a `piclaw.service` user unit exists | `systemctl --user restart piclaw.service` |
| 3 | neither found | manual kill + start fallback |

## Environment variables

### Commonly used

| Variable | Default | Description |
|---|---|---|
| `PICLAW_SERVICE_MANAGER` | auto | Force `supervisor`, `systemd`, or `manual` |
| `PICLAW_RELOAD_ASYNC` | `1` | Set `0` for synchronous foreground mode |

### Rarely needed overrides

| Variable | Default | Description |
|---|---|---|
| `PICLAW_SUPERVISOR_SERVICE` | `piclaw` | Supervisor program name |
| `PICLAW_SUPERVISORCTL_BIN` | `supervisorctl` | supervisorctl binary |
| `PICLAW_SUPERVISORCTL_CONFIG` | auto | Supervisor config path |
| `PICLAW_SYSTEMD_UNIT` | `piclaw.service` | systemd user unit name |
| `PICLAW_WEB_PORT` | `8080` | Port used by the runtime / readiness checks |
| `PICLAW_RELOAD_LOG` | `/tmp/restart-piclaw-force.log` | Async log path |

## Notes

- Prefer `make local-install` over hand-written pack/install/restart sequences.
- Bun and piclaw are installed globally under `/usr/local/lib/bun` in this environment.
- If something goes wrong, inspect `/tmp/restart-piclaw-force.log`.
