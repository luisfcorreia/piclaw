# Release process

## Publishing

Pushing a version tag triggers `.github/workflows/publish.yml` and publishes multi-arch GHCR images:

- `ghcr.io/rcarmo/piclaw:<tag>`
- `ghcr.io/rcarmo/piclaw:latest`

## Cutting a release

The authoritative workflow is documented in the [cut-release skill](/workspace/.pi/skills/cut-release/SKILL.md), which covers:

- Gathering the delta and drafting release notes
- Local rebuild and CI verification (`make build-piclaw && make ci-fast`)
- Version bump, commit, tag, push
- Remote CI monitoring after push
- GitHub release publishing
- Hotfix retag flow (moving a tag after post-release fixes)
- Local install and restart

### Quick path

```bash
make bump-patch    # or make bump-minor
make push
```

This bumps `VERSION` and `package.json`, commits, tags, and pushes. The CI workflow builds and publishes Docker images for AMD64 and ARM64.

### Full path (recommended)

Always verify locally before pushing:

```bash
make build-piclaw   # full rebuild
make ci-fast        # must show 0 fail
git add -A && git commit -m 'release: <Movie Name> vX.Y.Z'
git tag -a vX.Y.Z -m 'PiClaw vX.Y.Z — <Movie Name>'
git push origin main vX.Y.Z
```

Then monitor CI and publish the GitHub release via the API (see skill for details).

For manual release-image verification outside GitHub Actions, the repo-owned smoke contract is:

```bash
IMAGE_REF=ghcr.io/rcarmo/piclaw:vX.Y.Z \
PLATFORM=linux/amd64 \
EXPECTED_BUN_VERSION=$(tr -d '[:space:]' < BUN_VERSION) \
EXPECTED_RESTIC_VERSION=$(tr -d '[:space:]' < RESTIC_VERSION) \
make publish-smoke
```

Boundary note:
- publish smoke is intentionally repo-owned (`make publish-smoke`)
- release/tag/workflow/package pruning remains GitHub-native in `.github/workflows/publish.yml`
  because it depends directly on Actions context and GitHub APIs

## Release naming

Each release gets a cult/classic movie name. See the [cut-release skill](/workspace/.pi/skills/cut-release/SKILL.md) for the full convention and workflow.

## Container runtime compatibility

PiClaw works with any OCI-compliant runtime.

- **Preferred image source:** `ghcr.io/rcarmo/piclaw`
- **Primary target:** Docker / Docker Desktop
- Also works with Apple Containers, Podman, nerdctl, and similar runtimes
