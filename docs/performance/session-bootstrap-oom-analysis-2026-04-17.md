# Session Bootstrap OOM Analysis — 2026-04-17

## Summary

The 2026-04-17 restart loop was not caused by normal cold-start cost.
It was caused by hydrating a pathological persisted `web:default` session whose JSONL transcript contained very large inline `toolResult` payloads, especially `read` results for images.

At the time of the crash loop, the service pattern was:

1. process starts
2. web server begins listening
3. `web:default` session creation starts immediately
4. process is OOM-killed before the session finishes materializing

Systemd journal during the historical failure showed:

- repeated `Creating new session` for `chatJid="web:default"`
- immediate `OOM killer` termination
- memory peak around **475–477 MB** per failed attempt

The service unit itself had no explicit `MemoryMax`; the kill came from the surrounding memory pressure budget.

---

## Root cause

### Pathological archived session

Archived file:

- `/workspace/.piclaw/data/sessions/web_default/archive/2026-04-06T19-04-37-583Z_c1418a66-90b0-46a9-9aeb-b5d4fbde8e17.jsonl`

Observed properties:

- size: **95,217,421 bytes**
- lines: **18,545**
- many individual JSONL rows between **1.8 MB** and **4.2 MB**

Largest contributors inside the session:

- `toolResult:read`
  - **2,552 entries**
  - **42,816,902 bytes**
- `assistant`
  - **7,921 entries**
  - **32,581,322 bytes**
- `toolResult:bash`
  - **4,920 entries**
  - **10,103,574 bytes**

Total persisted `toolResult` payload size in that session:

- **61,740,505 bytes**

Rows containing `Read image file [image/...` alone accounted for:

- **18 entries**
- **27,225,249 bytes**

### Hydration cost

Isolated session-materialization benchmarks showed the difference between the pathological archived session and the rotated/sanitized successor session.

#### Old archived `web:default`

- elapsed: **~638 ms**
- RSS delta: **409,608,192 bytes**
- heap delta: **201,129,177 bytes**
- external delta: **175,191,869 bytes**
- VmHWM: **568,384 kB**

#### Current trimmed `web:default`

- elapsed: **~248 ms**
- RSS delta: **28,598,272 bytes**
- heap delta: **13,923,674 bytes**
- external delta: **4,578,382 bytes**
- VmHWM: **190,580 kB**

Conclusion:

> The OOM was caused by hydrating a transcript full of oversized inline tool results, not by ordinary session creation.

---

## Mitigations landed

### 1. Rotate the pathological session

`web:default` was manually rotated.
That removed the immediate 95 MB live session file from the active path and sharply reduced retained memory.

### 2. Enable automatic session rotation

Current intended default policy:

- `sessionAutoRotate: true`
- `sessionMaxSizeMb: 32`

This is now reflected in runtime defaults, docs, and config examples.

### 3. Wire the memory-pressure trim path correctly

The cache-trim path now:

- runs on the cleanup timer through the pressure-aware wrapper
- also runs immediately after main-session acquisition under memory pressure

### 4. Add clean startup memory snapshots

A one-shot startup snapshot now writes to:

- `.piclaw/data/startup-memory-snapshots/*.json`

This captures a clean post-start baseline before further chat hydration.

### 5. Sanitize oversized persisted tool results

`runtime/src/agent-pool/session.ts` now applies two protections:

#### Pre-load sanitization

Before `SessionManager.continueRecent(...)` opens the latest session file:

- stream the latest session JSONL line-by-line
- remove inline image blocks from persisted `toolResult` messages
- truncate still-oversized `toolResult` entries to a bounded text summary
- rewrite the session file in place only when sanitization changed content

This prevents old pathological sessions from OOMing on resume.

#### Append-time sanitization

When new session messages are appended:

- future oversized `toolResult` payloads are sanitized before persistence
- giant image/blob payloads no longer get written inline to session JSONL files

This prevents the same failure class from re-accumulating.

---

## Current practical defaults

Recommended fleet defaults:

- `PICLAW_SESSION_AUTO_ROTATE=1`
- `PICLAW_SESSION_MAX_SIZE_MB=32`

Reasoning:

- historical OOM peak: ~475 MB
- clean post-start baseline after fixes: ~222.5 MB RSS
- settled live sample after fixes: ~229.6 MB RSS
- a 64 MB threshold leaves too much room for pathological growth if another large payload class slips through
- 32 MB is a safer operational ceiling without being excessively aggressive

---

## Operational guidance

### For existing deployed Piclaws

Use explicit service env or config overrides:

```bash
PICLAW_SESSION_AUTO_ROTATE=1
PICLAW_SESSION_MAX_SIZE_MB=32
```

### For upstream/default propagation

The source defaults should match the operational recommendation:

- auto-rotate enabled by default
- 32 MB session cap by default

### For future debugging

If session bootstrap OOMs recur, check first:

1. latest session JSONL size
2. number and size of persisted `toolResult` rows
3. whether inline image/blob payloads were stored in the session
4. startup snapshot under `.piclaw/data/startup-memory-snapshots/`

---

## Related files

- `docs/performance/memory-footprint-history.md`
- `docs/performance/memory-progress-2026-04-17.svg`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/agent-pool.ts`
- `runtime/src/runtime/startup.ts`
- `runtime/src/core/config.ts`
