---
id: investigate-pi-computer-use-and-expand-cross-platform-desktop-automation
title: Investigate pi-computer-use and expand desktop automation beyond Windows
status: inbox
priority: medium
created: 2026-04-21
updated: 2026-04-21
target_release: later
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - tools
  - automation
  - desktop
  - cross-platform
  - macos
  - linux
  - windows
  - evaluation
owner: pi
blocked-by: []
---

# Investigate pi-computer-use and expand desktop automation beyond Windows

## Summary

Piclaw currently ships a full Windows-native desktop automation surface
(`win_*` tools via `runtime/extensions/platform/windows/win-ui/`), but has no
equivalent for macOS or Linux desktops.

[`injaneity/pi-computer-use`](https://github.com/injaneity/pi-computer-use) is
an upstream Pi extension that adds cross-platform computer-use capabilities.
This ticket tracks evaluating it as a Piclaw integration target and planning
what cross-platform desktop automation would look like.

## Problem Statement

The current state:
- `win_*` tools cover Windows-specific UI automation (Win32 FFI: window
  enumeration, screenshots, element inspection, clicking, typing)
- `cdp_browser` covers browser automation via CDP (cross-platform, Chrome-based)
- no first-class macOS or Linux desktop automation

This leaves macOS and Linux users with CDP-only automation and no way to
interact with native desktop apps outside a browser.

## Reference

- Upstream: https://github.com/injaneity/pi-computer-use
- Existing Windows surface: `runtime/extensions/platform/windows/win-ui/index.ts`
- Existing CDP tool: `runtime/src/extensions/cdp-browser.ts`

## Evaluation focus

1. What does `pi-computer-use` actually provide?
   - screenshot capture (cross-platform)
   - mouse/keyboard injection
   - accessibility tree inspection
   - any platform-specific native bindings vs pure CDP/virtual input
2. Does it overlap with existing `win_*` or `cdp_browser` tooling?
3. Is it a direct Pi extension or does it require custom adapter work?
4. What platform coverage does it have (macOS, Linux, Windows)?
5. What dependencies does it introduce (Playwright, xdotool, AppleScript, etc.)?
6. Can it be integrated without breaking the current Windows-native path?

## Desired Behavior

After this work, Piclaw should have a clear answer to:

- Whether to adopt `pi-computer-use` directly, adapt it, or use it as reference
- What the `win_*` → cross-platform generalization path looks like
- Whether to unify under a single `desktop_*` surface or keep
  platform-specific tools
- What the macOS-first and Linux-first automation paths look like

## Proposed cross-platform surface sketch

If the evaluation is positive, a potential unified surface could be:

| Tool | Purpose | Platform |
|---|---|---|
| `desktop_screenshot` | Capture screen/region | all |
| `desktop_find_elements` | Accessibility tree query | all |
| `desktop_click` | Click at coordinates or element | all |
| `desktop_type_text` | Inject keyboard input | all |
| `desktop_scroll` | Scroll at position | all |
| `desktop_key_combo` | Send key combo | all |
| `win_*` | Windows-native Win32 FFI operations | Windows only |

## Acceptance Criteria

- [ ] `pi-computer-use` is evaluated for architecture, platform coverage, and
      dependencies.
- [ ] The overlap / conflict with existing `win_*` and `cdp_browser` tools is
      documented.
- [ ] A recommendation is made: adopt, adapt, reference-only, or reject.
- [ ] If promising, a concrete follow-up implementation ticket exists.
- [ ] The existing `win_*` tooling remains unchanged.

## Implementation Paths

### Path A — adopt pi-computer-use as a Piclaw extension
Wrap or adapt upstream as a Piclaw-native extension.

### Path B — reference-only, build Piclaw-native cross-platform tools
Use upstream as design reference, implement Piclaw-native using Playwright
(CDP+automation) or OS-specific accessibility APIs.

### Path C — expose cdp_browser more fully for desktop use cases
Extend `cdp_browser` for non-browser CDP targets and native-app automation
where available.

## Test Plan

- [ ] Evaluation completed and documented.
- [ ] Recommendation recorded with rationale.
- [ ] If implementing: test on at least macOS + Windows.

## Definition of Done

- [ ] Evaluation documented in `## Updates`
- [ ] Recommendation recorded
- [ ] Follow-up ticket created if proceeding
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Created from user request to evaluate `pi-computer-use` and plan cross-platform
  desktop automation expansion.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- https://github.com/injaneity/pi-computer-use
- `runtime/extensions/platform/windows/win-ui/index.ts`
- `runtime/src/extensions/cdp-browser.ts`
