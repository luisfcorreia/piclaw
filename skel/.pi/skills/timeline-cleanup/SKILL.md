---
name: timeline-cleanup
description: Delete low-value messages from the web timeline by keyword patterns. Protects messages with user-uploaded images. Optionally vacuums the DB afterward.
distribution: private
---

# Timeline Cleanup

Delete low-value timeline messages by pattern, with attachment protection by default.

Default chat scope:

- if `chatJid` is omitted, the cleanup targets `web:default`
- for `web:*` chats, the helper resolves the **full web session scope** (root chat plus branches)

## Usage

Cleanup is available both as an import and as a CLI.

### Import

```typescript
import { cleanupTimeline } from "/workspace/.pi/skills/timeline-cleanup/cleanup.ts";

const result = await cleanupTimeline({
  patterns: ["reload", "compaction"],
  // dryRun: true,
  // includeMedia: false,
  // vacuum: false,
  // beforeRowid: 99999,
  // chatJid: "web:default",
  // maxLength: 300,
  // senderFilter: "web-agent",
  // throttleMs: 1100,
  // retryOn429: true,
  // maxRetries: 2,
});
```

### CLI

```bash
bun run /workspace/.pi/skills/timeline-cleanup/cleanup.ts \
  --patterns "reload,compaction,compacting" \
  --before 5000 \
  --dry-run
```

## Result shape

`cleanupTimeline()` returns a `CleanupResult` shaped like:

```ts
{
  matched: number,
  skipped: number,
  deleted: number,
  failed: number,
  dbSizeBefore: string,
  dbSizeAfter: string
}
```

`cleanupAll()` returns a record of those per built-in pattern group.

## Built-in pattern groups

Use `cleanupAll()` for a full housekeeping pass:

```typescript
import { cleanupAll } from "/workspace/.pi/skills/timeline-cleanup/cleanup.ts";
const results = await cleanupAll({ beforeRowid: 5000, dryRun: true });
```

| Group | Patterns | Sender | Max length |
|---|---|---|---|
| **Reloads** | `reload`, `supervisorctl restart`, `restart-piclaw`, `local-install`, `bun pm pack` | any | 500 |
| **Compaction** | `compaction`, `compacting`, `auto-compact` | any | 500 |
| **Greetings (user)** | exact: `hey`, `hello`, `hi`, `Hello?`, `hey there`, etc. | user | 30 |
| **Agent intros** | `Hey! ...`, `Hello! ...`, `good to see you`, `ready to help` | agent | 300 |
| **Slash commands** | lines starting with `/` | any | 50 |
| **Slash responses** | `Unknown command:`, `Current model:`, `Switched...model`, `Switching...model`, `Model switched`, `Cycle model`, `Cycle thinking`, `Thinking level`, `Thinking set`, `Supports thinking` | agent | 300 |
| **One-word acks** | exact: `yes`, `ok`, `go`, `done`, `well?`, `so?`, etc. | any | 30 |
| **Transition filler** | `let me check`, `let me look`, `now let me`, etc. | agent | 200 |
| **Version bumps** | `bumped version`, `tagged v0.`, `bump patch` | any | 300 |
| **Build/lint/test** | `make lint`, `make test`, `bun run build`, `pass...0 fail` | any | 300 |
| **Git operations** | `git add`, `git commit -m`, `git push`, `git status` | any | 200 |
| **Package installs** | `bun install`, `bun add`, `bun update`, `packages installed` | any | 300 |

## Behaviour

- delete operations are throttled by default (`1100ms`) with optional retry on HTTP 429 responses
- media-bearing messages are skipped unless `--include-media` is set
- vacuuming is optional and only makes sense after actual deletions

## Vacuum

Vacuuming requires exclusive DB access. The helper can copy the DB to `/tmp`, vacuum the copy, swap it in, and restart piclaw briefly.

## Environment

- `PICLAW_STORE` — message DB parent directory (default `/workspace/.piclaw/store`)
- `PICLAW_WEB_PORT` — web server port (default `8080`)
- `PICLAW_INTERNAL_SECRET` / `PICLAW_WEB_INTERNAL_SECRET` — internal API auth

## Related

- `close-of-day` uses the same cleanup strategy as part of end-of-day maintenance.
