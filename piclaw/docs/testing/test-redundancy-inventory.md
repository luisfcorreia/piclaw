# Test redundancy inventory (web/runtime suites)

Date: 2026-03-09
Scope: `test/channels/web/*.test.ts`, `test/runtime/*.test.ts`

## Goal

Identify high-frequency duplicated test scaffolding and low-signal overlap so we can reduce maintenance cost without weakening regression coverage.

## Method

- Manual scan of web/runtime test files.
- Lightweight duplicate-snippet sampling across trimmed non-empty lines (4-line windows) to find repeated setup patterns.
- Focused on *fixture/setup duplication* rather than assertions that intentionally repeat across endpoints.

## Findings (top candidates)

### 1) Repeated JSON response helper scaffolding

Observed in multiple files (`agent-status.test.ts`, `content-endpoints.test.ts`, `identity-endpoints.test.ts`, `totp-auth.test.ts`, `ui-endpoints.test.ts`, `webauthn-auth.test.ts`, `webauthn-enrol-page.test.ts`):

- Repeated `json: (payload, status = 200) => new Response(JSON.stringify(payload), { ... })` blocks.

Action candidate:

- Add shared test helper (e.g., `test/channels/web/helpers/http.ts`) with `jsonResponse(payload, status)` and context adapter helpers.

Risk: Low (mechanical cleanup).

---

### 2) Repeated route-flags fixture shape in HTTP dispatch tests

Most visible in:

- `http-dispatch-auth.test.ts`
- `http-dispatch-shell.test.ts`

Large repeated `RouteFlags` object literal defaults are duplicated and partially overridden.

Action candidate:

- Add `buildRouteFlags(overrides)` fixture helper in shared dispatch test helpers.

Risk: Low/Medium (ensure defaults remain explicit in tests that rely on flag combinations).

---

### 3) Repeated env/workspace setup-teardown patterns

Observed in:

- `web-channel.test.ts`
- `workspace-service.test.ts`
- similar restore-env patterns in `link-previews.test.ts`, `runtime/scheduler.test.ts`

Action candidate:

- Extract shared setup utility for env restore + workspace cleanup lifecycle.

Risk: Medium (test isolation must remain explicit and deterministic).

---

### 4) Repeated JSON request body scaffolding

Observed in auth/ui/post tests:

- Repeated `new Request(..., { method: "POST", body: JSON.stringify(...), headers: { "Content-Type": "application/json" } })`.

Action candidate:

- Add helper `jsonRequest(url, method, body)` used in endpoint tests.

Risk: Low.

---

### 5) Similar threshold validation tests in security-hardening

`security-hardening.test.ts` contains parallel threshold tests for different parsers (`parsePostPayload`, `parseAgentMessageRequest`) with duplicated test names and similar assertions.

Action candidate:

- Consider small table-driven helper to preserve both parser checks while reducing duplication.

Risk: Medium (readability tradeoff; keep clarity first).

## Non-goals for dedupe

Do **not** dedupe away:

- Security-critical endpoint behavior checks where redundancy acts as defense-in-depth.
- Coverage that intentionally validates the same constraint through separate code paths.
- Tests whose explicitness is more valuable than abstraction.

## Proposed tranche sequence

1. Add shared web test helpers for JSON response/request creation.
2. Refactor HTTP dispatch tests to shared `RouteFlags` fixture builder.
3. Refactor env/workspace setup helpers with strict teardown guarantees.
4. Re-run full suite and verify no coverage regressions in security/web/runtime hotspots.
