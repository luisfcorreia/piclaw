---
id: audit-pr140-cross-instance-ipc-merge-readiness
title: Audit PR #140 cross-instance IPC merge readiness
author: pi
status: review
priority: critical
created: 2026-04-20
updated: 2026-04-20
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - audit
  - review
  - remote
  - ipc
  - security
  - docs
  - testing
owner: pi
---

# Audit PR #140 cross-instance IPC merge readiness

## Summary

PR `#140` (`feat: cross-instance IPC — pairing, proposals, and remote execution`) introduces a large, security-sensitive remote interop surface spanning pairing, signed HTTP requests, mediated proposals, short-circuit execution, result callbacks, persistence, command UX, and a packaged `remote-peer` skill.

The branch is **not merge-ready as audited on 2026-04-20**.

The audit found three independent merge blockers:

1. the branch fails the canonical local merge gate (`make ci-fast`)
2. the branch's own remote interop test suite is not green
3. multiple guarantees in `docs/cross-instance-ipc.md` do not match the implementation

The review focused on both **implementation correctness** and **documentation contract fidelity**. For this feature, the docs are part of the acceptance surface because they define the operator-facing trust and security model.

## Acceptance Criteria

- [ ] `make ci-fast` passes on the PR branch
- [ ] `runtime/test/remote/remote-interop.test.ts` passes
- [ ] `runtime/test/remote/remote-pair-commands.test.ts` passes
- [ ] unrelated churn is removed from the PR (`package-lock.json`, unrelated `.gitignore` changes) unless explicitly justified
- [ ] docs and code agree on the `read-only`, `restricted`, `full`, and `custom` permission profiles
- [ ] docs and code agree on remote execution timeout limits
- [ ] pair-review UX actually shows the fields promised by the docs
- [ ] `/pair history` matches its documented semantics or the docs are narrowed to the implemented scope
- [ ] identifier safety rules are consistent across docs, command UX, and the `remote-peer` skill
- [ ] deployment requirements are documented, including `PICLAW_WEB_EXTERNAL_URL`
- [ ] remote interop configuration variables work as documented, including `.env` support where claimed
- [ ] the final PR reply documents the blocking issues clearly and politely

## Implementation Paths

### Path A — Narrow the implementation to the documented contract (preferred)

Treat `docs/cross-instance-ipc.md` as authoritative and change the implementation to match it.

This path would require at minimum:

1. making `read-only` truly mean `ping/status only`
2. implementing the documented per-profile timeout behavior (`60s` restricted, `180s` full) or otherwise narrowing the feature scope explicitly
3. surfacing the documented pair-review metadata (full callback URL, source address, immutable ID, full fingerprint, and any requested mode/permissions if that concept remains)
4. making `/pair history` actually reflect all requests and outcomes claimed by the docs
5. removing or deferring user-facing `custom` profile UX until explicit allowlists really exist
6. tightening any identifier-routing shortcuts that undermine the anti-spoof guidance

**Why preferred:** the docs define a safer and clearer operator contract than the current implementation.

### Path B — Re-baseline the docs to the current implementation

Treat the branch implementation as the intended behavior and rewrite the docs, skill docs, and command help to match the code exactly.

This path would require at minimum:

1. documenting that `read-only` currently means all read-only tools, not only ping/status
2. documenting that `custom` is deferred and currently falls back to `restricted`
3. documenting the actual timeout behavior if all profiles currently use `60s`
4. removing or softening pair-review claims about fields that are not shown today
5. narrowing `/pair history` claims to what is really queryable today
6. documenting display-name and prefix routing as convenience behavior rather than identity-safe behavior

**Trade-off:** faster editorial convergence, but risks ratifying a broader or less operator-safe contract than intended.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests rerun during audit:
  - [x] `CI=1 make ci-fast` in `/workspace/tmp/review-pr140`
  - [x] `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/remote/remote-interop.test.ts test/remote/remote-pair-commands.test.ts` in `/workspace/tmp/review-pr140/runtime`
- [x] Audit included direct source/doc comparison across:
  - [x] `docs/cross-instance-ipc.md`
  - [x] `docs/architecture.md`
  - [x] `docs/configuration.md`
  - [x] `docs/tools-and-skills.md`
  - [x] `runtime/src/extensions/remote-pair.ts`
  - [x] `runtime/src/remote/*.ts`
  - [x] `runtime/src/db/remote-interop.ts`
  - [x] `runtime/skills/builtin/remote-peer/*`
- [ ] New regression coverage to add is listed in the review checklist below
- [ ] Real-browser smoke pass required? Not for this audit ticket, but manual pair/proposal/revoke smoke validation should happen before merge

## Definition of Done

- [x] Blocking issues are captured with file-level evidence
- [x] repo-level merge gate status is recorded
- [x] dedicated remote interop test status is recorded
- [x] doc/code mismatches are captured
- [x] deployment/config gaps are captured
- [ ] follow-up fixes are implemented on the PR branch
- [ ] follow-up tests are added or updated and pass locally
- [ ] docs and skills are aligned to the final behavior
- [ ] PR receives a reviewer-facing blocking comment set
- [ ] Update history complete with evidence
- [x] Ticket front matter updated

## Blocking Issues

### 1. Canonical CI gate fails on the branch

Local `make ci-fast` on the PR checkout fails.

This is a merge blocker by itself.

Specific regressions include newly introduced silent-catch / best-effort patterns that violate current repository policy, including:

- `runtime/src/agent-pool/run-agent-orchestrator.ts`
- `runtime/src/remote/service.ts`
- `runtime/src/extensions/remote-pair.ts`

### 2. The feature's own remote test suite is not green

Audit run result for the dedicated remote tests:

- `49` passing
- `19` failing
- `2` unhandled errors

Observed failure clusters include:

- pair accept flow timeouts
- pair confirm expectations returning `404`
- signed ping / proposal / execute flows returning `401`
- revoke / trust-epoch expectations failing
- success-message assertions not matching implementation state transitions

This means the feature lacks a stable verification baseline even before broader CI concerns.

### 3. `read-only` profile docs do not match code

`docs/cross-instance-ipc.md` says:

- `read-only` = `ping/status only`

`runtime/src/remote/policy.ts` actually allows all tools whose capability kind is `read-only`.

That is broader than the documented operator contract.

### 4. `custom` profile is exposed as a real option but deferred in code

The docs describe `custom` as an explicit allowlist profile, but later note that it is deferred and currently falls back to `restricted`.

The runtime confirms that fallback behavior in `runtime/src/remote/policy.ts`, while `/pair permissions` still exposes `custom` as a first-class value in `runtime/src/extensions/remote-pair.ts`.

### 5. Timeout docs do not match implementation

`docs/cross-instance-ipc.md` documents:

- `60s` restricted
- `180s` full

But `runtime/src/remote/service-operations.ts` currently uses `60_000` for both mediated execution and short-circuit execution paths.

### 6. Pair-review docs promise fields the runtime does not actually surface

`docs/cross-instance-ipc.md` says the receiver review step shows:

- full URL
- source address
- instance ID
- full fingerprint
- requested mode/permissions

Current runtime behavior does not fully provide this review surface:

- `runtime/src/remote/service-pairing.ts` inbound notification is much narrower
- `runtime/src/extensions/remote-pair.ts` list/review output does not show all promised fields
- requested mode/permissions are not clearly transmitted in Step A at all

### 7. `/pair history` does not match the documented "all requests with mode, status and outcome" contract

The current history path in `runtime/src/extensions/remote-pair.ts` reads from `remote_requests`, which captures inbound mediated proposals.

It does **not** appear to assemble a unified history including:

- short-circuit execute requests
- requester-side result callback records from `remote_result_callbacks`
- all outcomes across both mediated and direct flows

### 8. Identifier safety guidance conflicts with command/skill UX

The docs correctly state that display names are not security identifiers and that sensitive actions should use immutable identifiers.

However, the command surface and shipped `peer.ts` helper still permit routing by:

- display name
- instance ID prefix
- fingerprint

This is convenient, but weakens the consistency of the anti-spoof story, especially when documented alongside strict identity guidance.

### 9. External URL requirement is not documented where operators will look for it

Pair initiation derives the callback base URL from `PICLAW_WEB_EXTERNAL_URL` and otherwise falls back to `http://localhost:<port>`.

That environment variable was not found in `docs/configuration.md` during the audit, despite being practically required for real deployments.

### 10. `.env` support for `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK` looks incomplete

The variable is documented and read later in config resolution, but was not present in the initial `.env` loader allowlist in `runtime/src/core/config.ts`.

This creates risk that a documented configuration knob does not work from `.env` as expected.

### 11. Private-network dev mode appears broader than the docs imply

The docs describe `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1` as skipping private/loopback IP checks.

In `runtime/src/remote/ssrf.ts`, that mode returns early before blocked-hostname checks, which broadens the escape hatch to include things like `localhost` / `.localhost` / `.local` handling.

### 12. The PR includes unrelated churn

Audit of the PR diff found unrelated or suspicious changes that should be dropped or justified:

- `package-lock.json` huge addition at a stale version (`1.7.13` while `package.json` is `1.8.3`)
- unrelated `.gitignore` additions (`workspace/*`, `home*`)

### 13. Canonical docs remain incomplete outside the feature doc

The feature-specific design doc was updated, but the repo-level canonical docs still appear incomplete for this feature area:

- no meaningful remote interop coverage found in `docs/architecture.md`
- no meaningful remote interop / `remote-peer` skill coverage found in `docs/tools-and-skills.md`

## Full Checklist

### Merge gate

- [ ] Rebase/repair until `make ci-fast` passes
- [ ] Make `runtime/test/remote/remote-interop.test.ts` pass
- [ ] Make `runtime/test/remote/remote-pair-commands.test.ts` pass
- [ ] Remove unrelated churn from the PR (`package-lock.json`, `.gitignore`) unless explicitly justified

### Security contract alignment

- [ ] Decide whether `read-only` means `ping/status only` or broader read-only tools
- [ ] Make docs, code, tests, and help text agree on `read-only`
- [ ] Implement real `custom` allowlist support or remove/defer user-facing `custom`
- [ ] Make timeout behavior match docs or update docs to the actual intended limit
- [ ] Align identifier-safety guidance across docs, commands, and skill docs

### Pairing / review UX

- [ ] Make Step B review show the fields promised by the docs
- [ ] Decide whether requested mode/permissions are actually transmitted during pairing
- [ ] Align `/pair accept` semantics across docs, notifications, and parser/help text
- [ ] Add tests for operator-facing pair-review content

### History / auditability

- [ ] Decide what `/pair history` is supposed to include
- [ ] If docs are right, include short-circuit and result-callback records in history
- [ ] If code is right, narrow docs accordingly
- [ ] Ensure final outcomes are queryable and user-visible where promised

### Config / deployment

- [ ] Document `PICLAW_WEB_EXTERNAL_URL`
- [ ] Add a guard or warning when remote interop is enabled without a real external callback URL
- [ ] Ensure `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK` works from `.env` if documented that way
- [ ] Clarify whether allow-private-network also relaxes hostname protections

### SSRF / safety boundaries

- [ ] Decide whether dev mode should permit `localhost` / `.localhost` / `.local`
- [ ] Tighten `runtime/src/remote/ssrf.ts` or document the broader behavior explicitly
- [ ] Add tests for default vs allow-private-network SSRF behavior

### Branch hygiene

- [ ] Remove silent catches / best-effort patterns that violate repository policy
- [ ] Classify every failing remote test as code bug, test drift, or contract change
- [ ] Do not merge until the classification is resolved in green tests and docs

### Missing tests to add or repair

- [ ] config tests for remote interop variables and precedence
- [ ] policy tests for `read-only`, `restricted`, `full`, and `custom`
- [ ] pairing tests for review-state contents, accept/deny/block/revoke, trust epoch, and base URL persistence
- [ ] auth/signature tests for ping, proposal, execute, nonce replay, and trust-epoch mismatch
- [ ] history tests for mediated proposals, short-circuit execution, callbacks, and pagination
- [ ] user-facing tests for `/pair list`, `/pair inbox`, `/pair history`, and `peer.ts` identifier resolution

## Review Comment Set

### Suggested top-level PR reply

> Thanks, Celso — there is a lot of solid work here, especially around the signed-request flow, pairing, callback proofing, mediated proposals, and the default conservative peer state. I did a deep audit of the branch against both the code and the published docs, and I don't think it is ready to merge yet.
>
> The blocking issues are:
>
> 1. the branch currently fails the canonical local merge gate (`make ci-fast`)
> 2. the dedicated remote test suite is not green locally (`49` pass / `19` fail / `2` errors)
> 3. several important guarantees in `docs/cross-instance-ipc.md` do not match the implementation yet
>
> The biggest contract mismatches I found are:
>
> - `read-only` is documented as `ping/status only`, but the runtime currently allows all read-only tools
> - `custom` is exposed in UX/docs even though it is still effectively deferred to `restricted`
> - the docs promise `60s` restricted / `180s` full timeout behavior, but the runtime currently uses `60s` in both execution paths
> - the pair-review docs promise more operator-visible metadata than the current notification/review surfaces actually show
> - `/pair history` is documented as showing all requests and outcomes, but the current implementation does not appear to assemble a unified history across mediated requests, short-circuit execution, and result callbacks
> - the feature depends on `PICLAW_WEB_EXTERNAL_URL`, which I could not find documented in `docs/configuration.md`
>
> I wrote up the full audit and checklist here for tracking:
>
> - `workitems/40-review/audit-pr140-cross-instance-ipc-merge-readiness.md`
>
> I think this can get to a good place, but I would hold merge until the branch is green and the documentation contract is aligned with the final behavior.

### Suggested blocking review comments

#### Blocking 1 — merge gate and branch health

> I don't think this is mergeable yet because the branch is red at the repo-level gate and also red in its own feature-specific tests. Before we discuss smaller contract issues, I think this needs a green baseline:
>
> - `make ci-fast` passes
> - `runtime/test/remote/remote-interop.test.ts` passes
> - `runtime/test/remote/remote-pair-commands.test.ts` passes
>
> Right now the failing clusters include pair-accept/confirm flow issues, unexpected `401` responses on signed paths, and revoke/trust-epoch expectation failures.

#### Blocking 2 — `read-only` profile contract mismatch

> The docs and code disagree on the meaning of `read-only`.
>
> - `docs/cross-instance-ipc.md` says `read-only` = `ping/status only`
> - `runtime/src/remote/policy.ts` currently permits all tools whose capability kind is `read-only`
>
> That is a materially broader permission contract than the docs promise. I think this needs to be resolved before merge either by narrowing the code or rewriting the docs and UX to match the broader behavior.

#### Blocking 3 — `custom` profile is still deferred

> `custom` is currently presented as a first-class profile, but the implementation still falls back to `restricted`.
>
> If explicit allowlists are not implemented yet, I think we should avoid exposing `custom` as a real operator-facing choice until it actually exists, or at minimum make every doc/help surface state clearly that it is deferred.

#### Blocking 4 — timeout docs do not match runtime behavior

> The docs claim `60s` max execution timeout for `restricted` and `180s` for `full`, but the runtime currently appears to use `60_000` in both mediated and short-circuit execution paths.
>
> We should either implement the documented split or change the docs to the actual enforced policy before merge.

#### Blocking 5 — pair review surface is weaker than documented

> The pairing docs say the operator review step should show full callback URL, source address, instance ID, full fingerprint, and requested mode/permissions. The current notification/review surface does not appear to expose that full set of information, and requested mode/permissions do not seem to be clearly transmitted in Step A.
>
> For a security-sensitive trust-establishment flow, I think the review surface and the docs need to agree before merge.

#### Blocking 6 — `/pair history` contract mismatch

> The docs say `/pair history` shows all requests with mode, status, and outcome. The current implementation appears to read mediated `remote_requests`, but not assemble a unified history across short-circuit executions and requester-side result callbacks.
>
> Either the history surface needs to be broadened, or the docs need to be narrowed to the implemented scope.

#### Blocking 7 — deployment/config documentation gap

> This feature appears to rely on `PICLAW_WEB_EXTERNAL_URL` for a usable callback base URL, but I could not find that in `docs/configuration.md`. That makes the deploy path harder than the docs imply and could cause pairing to fall back to localhost-style callback URLs.
>
> I think that variable should be documented before merge, and ideally the runtime should warn when interop is enabled without a real external callback URL.

### Suggested should-fix comments

#### Should-fix 1 — identifier safety consistency

> The security model correctly says display names are not security identifiers, but the helper/skill UX still allows routing by display name and instance-id prefix. Even if that remains acceptable for convenience sends, I think the docs should clearly distinguish convenience routing from identity-safe operations.

#### Should-fix 2 — private-network SSRF wording

> `PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1` is documented as skipping private/loopback IP checks, but the current `ssrf.ts` behavior looks broader because it returns before blocked-hostname checks. Either tighten the code or document the broader relaxation explicitly.

#### Should-fix 3 — unrelated diff cleanup

> The PR currently includes unrelated churn (`package-lock.json` at a stale version and `.gitignore` additions that do not seem tied to the feature). I would strongly prefer dropping those from the diff before merge.

### Suggested follow-up comments

#### Follow-up 1 — canonical docs beyond the feature doc

> Even after the main blockers are fixed, I think this should still update the repo-level canonical docs (`docs/architecture.md`, `docs/tools-and-skills.md`) so the feature is discoverable outside the standalone cross-instance IPC design doc.

#### Follow-up 2 — unified history/audit surface

> The split between `remote_requests` and `remote_result_callbacks` suggests a future follow-up to provide one coherent operator-facing remote history/audit view. Even if that is too much for this PR, I would at least track it explicitly.

## Updates

### 2026-04-20
- Created review-lane audit ticket for PR `#140` after a documentation-vs-implementation review of the branch at `/workspace/tmp/review-pr140`.
- Recorded repo-level merge-gate failure (`make ci-fast`) and the dedicated remote suite result (`49` pass / `19` fail / `2` errors).
- Captured the main doc/code mismatches: permission profile semantics, timeout semantics, pair-review UX, history semantics, identifier safety, deployment/config drift, and SSRF/dev-mode wording.
- Recorded unrelated PR churn in `package-lock.json` and `.gitignore` as a separate cleanup item.
- Appended a GitHub-review-ready comment set so the ticket contains both the audit evidence and the reviewer-facing blocking summary.

## Notes

### Audit conclusion

Do **not** merge PR `#140` as-is.

The feature includes meaningful and substantial work, including signed request handling, pairing, callback proof validation, mediated proposals, and short-circuit gating. However, the branch is not yet safe to merge because its verification story is red and the published operator contract does not consistently match the code.

### Positive implementation notes

The audit did confirm real progress in the branch:

- feature-gated remote interop
- Ed25519 identity and signed request flow
- nonce replay protection
- trust epoch support
- URL-control proof callback path
- mediated proposal queueing
- result callback endpoint
- explicit short-circuit gating
- conservative default accepted peer state (`mediated` + `restricted`)

These strengths do not offset the current blockers, but they do mean the branch is a serious implementation effort rather than speculative scaffolding.

## Links

- PR: `https://github.com/rcarmo/piclaw/pull/140`
- Audit branch checkout: `/workspace/tmp/review-pr140`
- Feature doc: `docs/cross-instance-ipc.md`
- Builtin skill: `runtime/skills/builtin/remote-peer/SKILL.md`
- Helper CLI: `runtime/skills/builtin/remote-peer/peer.ts`
