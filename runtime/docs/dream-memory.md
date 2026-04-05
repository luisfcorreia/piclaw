# Dream and AutoDream

PiClaw has two related memory-maintenance features:

- `Dream` — manual `/dream [days]`
- `AutoDream` — the built-in nightly maintenance cycle

Both now run as **out-of-band agent turns** on a dedicated temporary `dream:` channel.
That channel is cleaned up after the run, so Dream work does not remain as a normal persisted chat/session.

## Core behavior

Dream is now **model-driven**.

The model follows the original 4-phase Dream flow:

1. **Orient** — load startup memory first and inspect the existing daily/memory state
2. **Signal** — gather only the narrow confirming evidence needed for suspected drift
3. **Consolidate** — merge, normalize dates, and correct contradictions at the source
4. **Prune and Index** — prune stale pointers, add references to newly important memories, and keep the compact memory index clean

The model is responsible for deciding what is relevant.
Do not treat Dream as a fixed rule-based length filter.

## Narrow search criteria

Dream follows Claude-style rough search behavior during the **Signal** phase and looks for new information worth persisting:

1. inspect the existing daily/memory files first
2. inspect memories that appear drifted or contradicted
3. only then do **narrow** transcript/message searches for terms already suspected to matter
4. do **not** exhaustively sweep transcript history

In PiClaw this means Dream should prefer:

- `notes/daily/*.md`
- `notes/memory/*`
- narrow `messages.search` queries
- `search_workspace` for note lookup

## Trigger modes

### Dream

Manual slash command:

```text
/dream
/dream 7
/dream 30
```

Behavior:

- creates a pre-Dream backup of `notes/daily/` and `notes/memory/`
- refreshes/seeds in-window daily note files from the messages database before the model starts
- queues an out-of-band Dream run
- no visible user message is injected
- the Dream run executes on a temporary `dream:` channel
- a visible agent summary is posted back to the original chat when done

### AutoDream

Built-in scheduled task:

- task id: `builtin-dream-midnight`
- task kind: `internal`
- schedule: cron `0 0 * * *`

Behavior:

- creates a pre-Dream backup of `notes/daily/` and `notes/memory/`
- refreshes/seeds in-window daily note files from the messages database before the model starts
- runs in the background on a temporary `dream:` channel
- executes silently unless you inspect logs/task results
- cleans up the temporary dream channel after the run

## AutoDream gating

AutoDream is bounded to behave more like Claude's periodic consolidation.

It only runs when both are true:

- at least **24 hours** have passed since the last consolidation
- at least **6 sessions** have occurred since the last consolidation

If those gates are not met, AutoDream skips the cycle.

## Files touched

Dream is allowed to modify only the Dream note surfaces:

- `notes/daily/*.md`
- `notes/daily/*.agent.json`
- `notes/memory/days/*.md` (optional sparse episodic memory files; do not mirror every daily note)
- `notes/memory/user.md`
- `notes/memory/feedback.md`
- `notes/memory/project.md`
- `notes/memory/reference.md`
- `notes/memory/current-state.json`
- `notes/memory/recent-context.md`
- `notes/memory/MEMORY.md`

Dream must not modify project code, tests, or unrelated config.

## Ordered sequence

Dream/AutoDream should complete work in this order:

1. **Orient** — load startup memory (`notes/memory/MEMORY.md`, `notes/index.md`) and inspect recent daily/memory files
2. **Signal** — run narrow message searches only for already suspected terms
3. **Consolidate** — update the summary for each daily note in scope, edit durable memory files in `notes/memory/`, and keep aligned derived outputs truthful
4. **Prune and Index** — remove stale pointers, add references to newly important memories, shorten overly verbose index lines, and let the runtime refresh workspace FTS indexing at the very end

`notes/memory/MEMORY.md` should point to `notes/memory/days/*.md` only when a sparse episodic day-memory file actually exists. Otherwise it should point back to the corresponding `notes/daily/*.md` note.

Runtime/sidecar refresh no longer materializes `notes/memory/days/*.md` automatically from daily notes; that subtree is model-owned and intentionally sparse.

## Startup memory contract

At session start, PiClaw loads the compact memory/index layer first:

- `notes/memory/MEMORY.md`
- `notes/index.md`
- `notes/preferences/agent.md` when present

Deeper files are opened only when needed.

## Search / indexing

Dream ends with a runtime-owned workspace FTS index refresh.
Runtime also handles the pre-run backup and the deterministic daily-note seeding pass before the model turn begins.

That means after Dream/AutoDream completes:

- newly updated memory files are searchable immediately
- no separate manual refresh is required
- `search_workspace` and `refresh_workspace_index` operate over the configured FTS roots

Default FTS roots are:

- `notes`
- `.pi/skills`

These roots are configurable via `.piclaw/config.json` (`tools.workspaceSearchRoots`) or `PICLAW_WORKSPACE_SEARCH_ROOTS`.

## Temporary dream channel

Dream runs on a dedicated temporary chat/session namespace like `dream:...`.

Requirements:

- no visible user message should be injected into the main chat
- the dream channel should be used only for the background Dream turn
- dream messages/session data should be removed after the cycle ends
- only the final agent summary should return to the source chat for manual `/dream`
