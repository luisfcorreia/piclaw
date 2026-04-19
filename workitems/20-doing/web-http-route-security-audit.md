---
id: web-http-route-security-audit
title: Security audit of all web HTTP routes and middleware
status: doing
priority: high
created: 2026-04-11
updated: 2026-04-19
target_release: next
tags:
  - security
  - web
  - audit
---

## Summary

Comprehensive security review of every HTTP route exposed by the web channel,
including auth gates, CSRF protection, rate limiting, CSP headers, input
validation, and access control.

## Motivation

The web channel has grown significantly — viewers, editors, terminal, VNC,
extension routes, agent control, workspace file access, media uploads, and
SSE streaming. A systematic audit ensures no route is missing auth, no
endpoint accepts unbounded input, and security headers are consistent.

## Scope

### Route inventory
- [ ] Enumerate all routes from `request-router-service.ts` dispatch chain
- [ ] Map each route to its auth requirement (public / session / internal-secret)
- [ ] Verify `route-flags.ts` classifications are complete and correct

### Auth & access control
- [ ] All non-public routes require valid session or internal secret
- [ ] TOTP/WebAuthn endpoints cannot be bypassed
- [ ] Agent control endpoints validate session ownership
- [ ] Workspace file routes enforce path traversal protection (`STATIC_DIR` prefix check)
- [ ] Media upload routes validate file type and size

### CSRF & origin validation
- [ ] `request-origin.ts` correctly rejects cross-origin requests
- [ ] State-mutating endpoints (POST/PUT/DELETE) enforce CSRF tokens or origin checks
- [ ] SSE connections validate session before streaming

### Rate limiting
- [ ] `rate-limit-rules.ts` covers all sensitive endpoints (login, TOTP, passkey)
- [ ] Rate limits are not trivially bypassable (IP rotation, header spoofing)
- [ ] Agent message submission has reasonable throughput limits

### Security headers
- [ ] `security.ts` applies consistent headers to all responses
- [ ] CSP policy reviewed for widget iframe, editor, viewer contexts
- [ ] HSTS, X-Frame-Options, X-Content-Type-Options present

### Input validation
- [ ] JSON body parsing has size limits (`json-body.ts`)
- [ ] Query parameters are validated/sanitized before use
- [ ] File paths are canonicalized and checked against allowed roots
- [ ] WebSocket upgrade paths validate auth before upgrade

### Viewer/editor routes
- [ ] CSV viewer, PDF viewer, image viewer, video viewer — all auth-gated
- [ ] Office viewer route validates file existence before serving
- [ ] Editor vendor route only serves allowed vendor files
- [ ] No directory listing or path enumeration possible

### Extension routes
- [ ] `extension-routes.ts` validates extension identity
- [ ] Extension-served content has appropriate CSP
- [ ] No extension can access another extension's data

### Terminal & VNC
- [ ] Terminal WebSocket requires valid session
- [ ] VNC bridge validates target and session
- [ ] No command injection via terminal session parameters

## Acceptance criteria

- [ ] Route inventory spreadsheet/table with auth classification
- [ ] All findings documented with severity rating
- [ ] Critical/high issues fixed before marking done
- [ ] Medium/low issues filed as follow-up tickets
