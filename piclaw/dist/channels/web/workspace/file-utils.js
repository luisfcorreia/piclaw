/**
 * web/workspace/file-utils.ts – File type detection and path helpers.
 *
 * Provides utility functions for detecting text/image files by extension
 * and for determining if a path is safe for serving.
 *
 * Consumers: web/workspace/file-service.ts, web/workspace/tree.ts.
 */
import path from "path";
import { IMAGE_EXTS, TEXT_EXTS } from "./constants.js";
export function contentTypeForPath(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case ".md":
            return "text/markdown";
        case ".txt":
        case ".log":
        case ".conf":
        case ".ini":
            return "text/plain";
        case ".sh":
            return "text/x-shellscript";
        case ".json":
            return "application/json";
        case ".yaml":
        case ".yml":
            return "text/yaml";
        case ".toml":
            return "text/toml";
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".ts":
        case ".tsx":
            return "text/typescript";
        case ".jsx":
            return "text/jsx";
        case ".svg":
            return "image/svg+xml";
        case ".png":
            return "image/png";
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".gif":
            return "image/gif";
        case ".webp":
            return "image/webp";
        default:
            return "application/octet-stream";
    }
}
export function isTextFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return TEXT_EXTS.has(ext);
}
export function isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return IMAGE_EXTS.has(ext);
}
export function formatMtime(stats) {
    if (!stats.mtime)
        return null;
    return stats.mtime.toISOString();
}
export function detectBinary(buffer) {
    const max = Math.min(buffer.length, 4096);
    for (let i = 0; i < max; i += 1) {
        if (buffer[i] === 0)
            return true;
    }
    return false;
}
