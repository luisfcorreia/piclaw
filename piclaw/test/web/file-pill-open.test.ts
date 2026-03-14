import { describe, expect, test } from "bun:test";

import { resolveFilePillOpenAction } from "../../web/src/ui/file-pill-open.js";

describe("resolveFilePillOpenAction", () => {
  test("opens a workspace path when editor is visible and a pane resolves", () => {
    const result = resolveFilePillOpenAction("notes/todo.md", {
      editorOpen: true,
      resolvePane: ({ path, mode }) => ({ id: `${mode}:${path}` }),
    });

    expect(result).toEqual({ kind: "open", path: "notes/todo.md" });
  });

  test("returns a warning toast when the editor pane is hidden", () => {
    const result = resolveFilePillOpenAction("notes/todo.md", {
      editorOpen: false,
      resolvePane: () => ({ id: "editor" }),
    });

    expect(result).toEqual({
      kind: "toast",
      title: "Editor pane is not open",
      detail: "Open the editor pane to open files from pills.",
      level: "warning",
    });
  });

  test("returns a warning toast for protocol/external paths", () => {
    const result = resolveFilePillOpenAction("https://example.com/file.md", {
      editorOpen: true,
      resolvePane: () => ({ id: "editor" }),
    });

    expect(result).toEqual({
      kind: "toast",
      title: "Cannot open external path from file pill",
      detail: "Use an in-workspace file path.",
      level: "warning",
    });
  });

  test("returns a warning toast when no editor can handle the path", () => {
    const result = resolveFilePillOpenAction("assets/archive.bin", {
      editorOpen: true,
      resolvePane: () => null,
    });

    expect(result).toEqual({
      kind: "toast",
      title: "No editor available",
      detail: "No editor can open: assets/archive.bin",
      level: "warning",
    });
  });

  test("treats resolver failures as a safe warning instead of throwing", () => {
    const result = resolveFilePillOpenAction("notes/todo.md", {
      editorOpen: true,
      resolvePane: () => {
        throw new Error("broken resolver");
      },
    });

    expect(result).toEqual({
      kind: "toast",
      title: "No editor available",
      detail: "No editor can open: notes/todo.md",
      level: "warning",
    });
  });

  test("ignores non-string pill payloads safely", () => {
    const result = resolveFilePillOpenAction(null, {
      editorOpen: true,
      resolvePane: () => ({ id: "editor" }),
    });

    expect(result).toEqual({ kind: "ignore" });
  });

  test("warns on empty string payloads", () => {
    const result = resolveFilePillOpenAction("   ", {
      editorOpen: true,
      resolvePane: () => ({ id: "editor" }),
    });

    expect(result).toEqual({
      kind: "toast",
      title: "No file selected",
      detail: "Use a valid file path from a file pill.",
      level: "warning",
    });
  });
});
