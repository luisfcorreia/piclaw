/**
 * web/workspace/constants.ts – Shared constants for the workspace explorer.
 *
 * Defines excluded directories, file extension sets, and size limits
 * used by the tree builder, file service, and watcher.
 *
 * Consumers: All web/workspace/*.ts modules.
 */
export const EXCLUDE_DIRS = new Set([
    "node_modules",
    ".git",
    "dist",
    "build",
    "output",
    ".cache",
    ".venv",
    "tmp",
    "coverage",
]);
export const MAX_TREE_ENTRIES = 2000;
export const MAX_PREVIEW_BYTES = 64 * 1024;
export const MAX_ATTACH_BYTES = 25 * 1024 * 1024;
export const MAX_UPLOAD_BYTES = 50 * 1024 * 1024;
export const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
export const TEXT_EXTS = new Set([
    ".md",
    ".txt",
    ".log",
    ".json",
    ".yaml",
    ".yml",
    ".toml",
    ".ini",
    ".conf",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".css",
    ".html",
    ".sh",
    ".py",
    ".go",
    ".rs",
    ".c",
    ".cpp",
    ".h",
    ".hpp",
    ".java",
    ".kt",
    ".swift",
    ".sql",
]);
