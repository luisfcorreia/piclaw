# PiClaw v1.5.7 — "Groundhog Day"

Same morning, slightly better choices.

## Features

- **`/login` 3-card flow (experimental)** — provider picker → auth form → model
  activation, delivered as adaptive cards. Sixth iteration. Still experimental.
  OAuth no longer blocks the event loop like a barbarian.
- **`/theme list` redesign** — centralised theme metadata into `ui-theme-data.ts`,
  proper table formatting, and theme command output now surfaces in the web UI.
- **Compose `@` button polish** — consistent highlight behaviour across all
  compose action buttons. No more weird active glow.
- **Docs refresh** — missing skills, env vars, tool names, and tables filled in.

## The voice mode incident

Added speech input and terse speech output. Fixed iOS webapp fallback.
Reverted the lot. Three commits, zero survivors. We'll be back.

## Under the hood

- `/login` OAuth uses async `Promise.race` instead of `Atomics.wait`.
- Theme metadata extracted to single source of truth.
- Close-of-day skill updated.
- Cache buster stamps refreshed.

## Known issues

- `/login` is experimental. If it does something odd, `/model` still works fine.

## Upgrade

No migration. Pull, restart, hard-refresh if the CSS looks stale.
