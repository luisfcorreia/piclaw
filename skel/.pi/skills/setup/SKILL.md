---
name: setup
description: Initialize a new project in the workspace. Scaffold a small Bun/TypeScript project directly or use a framework-native generator when the project type is explicit.
distribution: public
---

# Setup

Use this skill when the user wants a fresh project scaffold in the current workspace.

## Preflight

Before creating anything:

1. Inspect the workspace root.
2. If it already contains project files, ask whether to reuse them, add missing scaffolding only, or start in a subdirectory.
3. If `.git/` already exists, do **not** run `git init` again.
4. If the user names a framework that is not covered below, ask for the exact stack before scaffolding.

## Default scaffold matrix

| Project type | Default command | Notes |
|---|---|---|
| TypeScript library | `bun init` | Default choice when the user just says “new project”. |
| CLI tool | `bun init` | Add `src/cli.ts` or equivalent entrypoint after init if needed. |
| Script/tooling repo | `bun init` | Good for one-off automations and local utilities. |
| React/Vite app | `bun create vite . --template react-ts` | Use only when the user explicitly asks for Vite/React. |
| Next.js app | `bunx create-next-app@latest . --ts --eslint --app --use-bun` | Use only when the user explicitly asks for Next.js. |
| Hono API | `bunx create-hono@latest .` | Confirm the runtime target if the generator prompts for one. |
| Unknown / other framework | ask first | Do not guess between framework generators. |

If the chosen generator wants to create a new directory but the user wants the current directory, pass the current directory explicitly or scaffold into a new subdirectory and move only if safe.

## Required project files

Create or confirm these:

- `package.json`
- `tsconfig.json` for TypeScript projects
- `Makefile`
- `AGENTS.md`
- `.gitignore`
- `.pi/skills/` only if the project actually needs project-local skills

## Makefile target semantics

If you create a `Makefile`, define these targets with predictable meanings:

- `install` → install dependencies (`bun install`)
- `build` → run the project build if one exists (`bun run build`)
- `lint` → run the project linter if one exists (`bun run lint`)
- `test` → run the project tests if one exists (`bun run test`)
- `check` → the main verification target; at minimum run lint + test
- `clean` → remove generated artifacts such as `dist`, `coverage`, `.turbo`, or other scaffold-specific outputs

If the scaffold does not define `build`, `lint`, or `test` scripts yet, make that explicit in the generated file rather than pretending they exist.

## Minimal `AGENTS.md` template

Use a stub like this and fill it with project-specific values:

```md
# <project name>

## Purpose
- One sentence on what this repo does.

## Stack
- Runtime: Bun / Node / browser / other
- Language: TypeScript / JavaScript / other
- Frameworks: <list>

## Common commands
- Install: `<command>`
- Build: `<command>`
- Test: `<command>`
- Lint: `<command>`
- Run locally: `<command>`

## Key paths
- Source: `<path>`
- Tests: `<path>`
- Generated artifacts: `<path>`
- Config files: `<paths>`

## Notes for future agents
- Project-specific constraints
- Deployment or runtime caveats
- What not to touch casually
```

## Workflow

1. Choose the scaffold command from the matrix.
2. Run the scaffold only after confirming the target directory is safe.
3. Add or normalise the required project files.
4. Initialise git only if `.git/` does not already exist.
5. Make the first commit only after verification passes.

## Verification

Do not stop after file creation. Verify the scaffold:

1. `bun install` succeeds.
2. `make check` passes, or run the equivalent build/lint/test commands if no Makefile exists yet.
3. Fix obvious scaffold breakage before declaring success.

## Notes

- Prefer Bun over npm/yarn unless the chosen framework requires otherwise.
- Default to TypeScript unless the user asks for a different language.
- Simpler scaffolds beat framework-heavy guesses.
