---
id: create-homebrew-linuxbrew-formula-for-piclaw
title: Create a Homebrew / Linuxbrew formula for one-line piclaw installation
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - packaging
  - homebrew
  - linuxbrew
  - install
  - ux
  - distribution
owner: pi
blocked-by: []
---

# Create a Homebrew / Linuxbrew formula for one-line piclaw installation

## Summary

Provide a Homebrew (macOS) and Linuxbrew (Linux) formula so users can install
piclaw with a single command:

```bash
brew install rcarmo/piclaw/piclaw
```

The current install paths are Docker or `bun add -g github:rcarmo/piclaw`,
both of which require prior Bun or Docker knowledge. A `brew install` path is
the lowest-friction entry point for developers on macOS and Linux who already
have Homebrew.

## Problem Statement

- Docker is the primary production install but requires Docker knowledge
- `bun add -g github:rcarmo/piclaw` requires Bun already installed
- Neither path is a single-command "YOLO install" for developers
- Homebrew is the de-facto standard for this kind of CLI tool on macOS/Linux
- No tap or formula exists today

## Desired Behavior

```bash
brew tap rcarmo/piclaw          # add the tap once
brew install piclaw              # install

# or in one step with a custom tap:
brew install rcarmo/piclaw/piclaw
```

After install:
- `piclaw` binary in PATH
- `brew upgrade piclaw` updates to the latest release
- Uninstall via `brew uninstall piclaw`
- Works on macOS (Intel + Apple Silicon) and Linux (via Linuxbrew)

## Design decisions to make

### 1. Formula approach vs cask

- **Formula** — preferred; compiles or installs from source/binary
- **Cask** — for macOS app bundles; not appropriate here

### 2. Dependency: Bun

Piclaw requires Bun at runtime. Options:

- **Option A** — declare `depends_on "oven-sh/bun/bun"` in the formula
  - clean; `brew install piclaw` installs Bun automatically
  - Bun has an official Homebrew formula: `brew install bun`

- **Option B** — bundle a portable Bun binary inside the formula
  - heavier; avoids the dependency declaration
  - not recommended

- **Option C** — shell wrapper that checks for Bun and errors helpfully
  - lightweight stopgap; poor UX

**Recommended: Option A** — declare the Bun dependency.

### 3. Tap vs core formula

- **Tap (`rcarmo/homebrew-piclaw`)** — faster to ship; no Homebrew core review
  - users add with `brew tap rcarmo/piclaw`
  - or use inline `brew install rcarmo/piclaw/piclaw`
- **Homebrew core** — high-traffic but requires maintenance contracts, license
  review, and formula standards compliance
  - consider after the tap is stable

**Recommended: start with a tap**, promote to core later if warranted.

### 4. Source formula vs binary bottle

- **Source formula** — runs `bun install` / `bun build` from the repo
  - portable; no pre-built binaries to manage
  - slow on first install (Bun compilation is fast but still takes time)
- **Binary bottle** — pre-built artifacts uploaded to GitHub releases or a CDN
  - fast install; requires CI to build per-platform bottles
  - more maintenance

**Recommended: source formula first**, add bottles later once the tap is stable.

## Acceptance Criteria

- [ ] A new GitHub repo `rcarmo/homebrew-piclaw` exists with the tap and formula.
- [ ] `brew tap rcarmo/piclaw && brew install piclaw` installs piclaw on macOS
  (Intel and Apple Silicon) and Linux (via Linuxbrew).
- [ ] The formula declares the Bun dependency correctly.
- [ ] `piclaw --version` works after install.
- [ ] `brew upgrade piclaw` fetches the latest tag.
- [ ] `brew uninstall piclaw` removes cleanly.
- [ ] The formula is tested with `brew audit --new-formula piclaw`.
- [ ] Install instructions are added to `docs/install-from-repo.md` and `README.md`.

## Implementation Paths

### Path A — minimal tap + source formula (recommended)

1. Create `rcarmo/homebrew-piclaw` repo.
2. Write `Formula/piclaw.rb`:
   - `url` pointing to the latest release tarball or the repo
   - `depends_on "bun"`
   - `install` block that runs `bun install && bun build` or uses the packed tarball
3. Test locally with `brew install --build-from-source ./Formula/piclaw.rb`
4. Publish and update README/docs.

### Path B — tap + binary bottles via CI

Same as Path A, plus:

5. Add GitHub Actions workflow to build bottles for each platform on release.
6. Upload bottles as GitHub release assets or to a CDN.
7. Attach bottle block to the formula.

## Formula sketch

```ruby
class Piclaw < Formula
  desc "Self-hosted AI workspace with streaming web UI and multi-provider LLM support"
  homepage "https://github.com/rcarmo/piclaw"
  url "https://github.com/rcarmo/piclaw/archive/refs/tags/v#{version}.tar.gz"
  sha256 "..." # updated per release

  license "MIT"

  depends_on "bun"

  def install
    system "bun", "install", "--frozen-lockfile"
    system "bun", "run", "build:web"
    # Install the piclaw binary
    bin.install "path/to/piclaw" => "piclaw"
  end

  test do
    system "#{bin}/piclaw", "--version"
  end
end
```

> Note: the exact install block depends on how piclaw's build/entry point works
> with Homebrew's sandbox. The `pack` / `local-install` Makefile targets and
> `bun add -g` path need to be adapted for Homebrew's expected `bin.install`
> pattern.

## Additional considerations

- **Version pinning**: the formula should track tagged releases, not `main`
- **Workspace defaults**: piclaw expects `/workspace` to exist; document that
  users should configure `PICLAW_WORKSPACE` via a launchd plist or `.env`
- **Service management**: macOS users may want `brew services start piclaw`
  — a `.plist` service definition could be added to the formula

## Test Plan

- [ ] `brew install --build-from-source` passes on macOS (Intel + ARM).
- [ ] `brew install --build-from-source` passes on Linux with Linuxbrew.
- [ ] `brew audit --new-formula piclaw` is clean.
- [ ] `piclaw --version` returns the expected version string after install.
- [ ] `brew upgrade piclaw` succeeds after a version bump.

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Formula repo is public and documented
- [ ] Install instructions updated in README.md and docs/install-from-repo.md
- [ ] `brew audit` passes
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-21
- Created from user request for a one-line YOLO install via Homebrew/Linuxbrew.
- Key decision locked: start with a tap (`rcarmo/homebrew-piclaw`) rather than
  Homebrew core; add Bun as a declared dependency rather than bundling.
- Main open question: how the piclaw `pack` / `bun add -g` flow maps to
  Homebrew's expected `bin.install` sandbox model — needs a test installation.
- Quality: ★★★☆☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

## Links

- https://docs.brew.sh/Formula-Cookbook
- https://docs.brew.sh/Taps
- `docs/install-from-repo.md`
- `Makefile` (`pack`, `local-install` targets)
- `package.json` (version, bin entry)
- `BUN_VERSION` (currently `1.3.11`)
