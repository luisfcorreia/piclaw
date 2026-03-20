import { expect, test } from "bun:test";
import "../../helpers.js";
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { join } from "path";

import { WORKSPACE_DIR } from "../../../src/core/config.js";
import { getWorkspaceGitBranch } from "../../../src/channels/web/workspace/git-branch.js";

function makeWorkspaceDir(prefix: string) {
  const base = join(WORKSPACE_DIR, `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  mkdirSync(base, { recursive: true });
  return {
    base,
    cleanup() {
      rmSync(base, { recursive: true, force: true });
    },
  };
}

test("getWorkspaceGitBranch returns nearest enclosing repo branch for a file path", () => {
  const { base, cleanup } = makeWorkspaceDir("workspace-branch");
  try {
    mkdirSync(join(base, ".git"), { recursive: true });
    mkdirSync(join(base, "src"), { recursive: true });
    writeFileSync(join(base, "src", "app.ts"), "export {};\n", "utf8");

    const result = getWorkspaceGitBranch(
      join(base, "src", "app.ts").replace(`${WORKSPACE_DIR}/`, ""),
      () => "feature/demo\n"
    );

    expect(result).toEqual({
      branch: "feature/demo",
      repoPath: base.replace(`${WORKSPACE_DIR}/`, ""),
    });
  } finally {
    cleanup();
  }
});

test("getWorkspaceGitBranch returns null when no repo is found", () => {
  const { base, cleanup } = makeWorkspaceDir("workspace-no-branch");
  try {
    writeFileSync(join(base, "notes.txt"), "hello\n", "utf8");
    const relPath = join(base, "notes.txt").replace(`${WORKSPACE_DIR}/`, "");
    expect(getWorkspaceGitBranch(relPath, () => "main\n")).toBeNull();
  } finally {
    cleanup();
  }
});

test("getWorkspaceGitBranch returns null when git branch lookup fails", () => {
  const { base, cleanup } = makeWorkspaceDir("workspace-branch-fail");
  try {
    mkdirSync(join(base, ".git"), { recursive: true });
    const relPath = base.replace(`${WORKSPACE_DIR}/`, "");
    const result = getWorkspaceGitBranch(relPath, () => {
      throw new Error("git failed");
    });
    expect(result).toBeNull();
  } finally {
    cleanup();
  }
});
