/**
 * web/workspace/file-service.ts – File read/write operations for the explorer.
 *
 * Provides file content retrieval, creation, directory listing, and file
 * writing with path safety validation (must be within workspace root).
 *
 * Consumers: web/handlers/workspace.ts delegates file operations here.
 */

import { existsSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from "fs";
import { readdir } from "fs/promises";
import path from "path";
import { gunzipSync } from "zlib";

import { Zip, ZipDeflate, ZipPassThrough } from "fflate";

import { createMedia } from "../../../db.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { MAX_ATTACH_BYTES, MAX_EDIT_BYTES, MAX_PREVIEW_BYTES, MAX_UPLOAD_BYTES } from "./constants.js";
import { contentTypeForPath, detectBinary, formatMtime, isImageFile, isTextFile } from "./file-utils.js";
import { isHiddenPath, resolveWorkspacePath, shouldIgnorePath, toRelativePath } from "./paths.js";

const log = createLogger("web.workspace.file-service");

interface ArchiveEntrySummary {
  name: string;
  compressedSize: number | null;
  uncompressedSize: number;
  isDirectory: boolean;
}

function parseZipEntries(buffer: Buffer, maxEntries = 200): { entries: ArchiveEntrySummary[]; totalEntries: number; truncated: boolean } {
  const eocdSignature = 0x06054b50;
  const cdSignature = 0x02014b50;
  const minEocdSize = 22;
  const maxCommentSize = 0xffff;
  const searchStart = Math.max(0, buffer.length - (minEocdSize + maxCommentSize));

  let eocdOffset = -1;
  for (let offset = buffer.length - minEocdSize; offset >= searchStart; offset -= 1) {
    if (buffer.readUInt32LE(offset) === eocdSignature) {
      eocdOffset = offset;
      break;
    }
  }
  if (eocdOffset < 0) {
    throw new Error("ZIP end-of-central-directory record not found");
  }

  const entryCount = buffer.readUInt16LE(eocdOffset + 10);
  const centralDirectoryOffset = buffer.readUInt32LE(eocdOffset + 16);

  const entries: ArchiveEntrySummary[] = [];
  let offset = centralDirectoryOffset;
  let totalEntries = 0;

  while (offset + 46 <= buffer.length && totalEntries < entryCount) {
    if (buffer.readUInt32LE(offset) !== cdSignature) break;
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const uncompressedSize = buffer.readUInt32LE(offset + 24);
    const fileNameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const externalAttrs = buffer.readUInt32LE(offset + 38);
    const nameStart = offset + 46;
    const nameEnd = nameStart + fileNameLength;
    if (nameEnd > buffer.length) break;
    const name = buffer.toString("utf8", nameStart, nameEnd);
    const isDirectory = name.endsWith("/") || ((externalAttrs >>> 16) & 0o170000) === 0o040000;
    totalEntries += 1;
    if (entries.length < maxEntries) {
      entries.push({
        name,
        compressedSize,
        uncompressedSize,
        isDirectory,
      });
    }
    offset = nameEnd + extraLength + commentLength;
  }

  return {
    entries,
    totalEntries,
    truncated: totalEntries > entries.length,
  };
}

function isTarGzPath(filePath: string): boolean {
  const lower = filePath.toLowerCase();
  return lower.endsWith(".tar.gz") || lower.endsWith(".tgz");
}

function parseTarEntries(buffer: Buffer, maxEntries = 200): { entries: ArchiveEntrySummary[]; totalEntries: number; truncated: boolean } {
  const entries: ArchiveEntrySummary[] = [];
  let offset = 0;
  let totalEntries = 0;

  while (offset + 512 <= buffer.length) {
    const header = buffer.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) break;

    const rawName = header.toString("utf8", 0, 100).replace(/\0.*$/, "");
    const rawPrefix = header.toString("utf8", 345, 500).replace(/\0.*$/, "");
    const sizeOctal = header.toString("utf8", 124, 136).replace(/\0.*$/, "").trim();
    const typeFlag = header.toString("utf8", 156, 157) || "0";
    const size = sizeOctal ? parseInt(sizeOctal.replace(/\s/g, ""), 8) || 0 : 0;
    const name = rawPrefix ? `${rawPrefix}/${rawName}` : rawName;
    const isDirectory = typeFlag === "5" || name.endsWith("/");

    if (!name) break;

    totalEntries += 1;
    if (entries.length < maxEntries) {
      entries.push({
        name,
        compressedSize: null,
        uncompressedSize: size,
        isDirectory,
      });
    }

    offset += 512 + Math.ceil(size / 512) * 512;
  }

  return {
    entries,
    totalEntries,
    truncated: totalEntries > entries.length,
  };
}

function formatArchiveListing(label: string, relPath: string, stats: { size: number }, parsed: { entries: ArchiveEntrySummary[]; totalEntries: number; truncated: boolean }): string {
  const lines = [
    `${label}: ${relPath}`,
    `Entries: ${parsed.totalEntries}`,
    `Archive size: ${stats.size} bytes`,
    "",
  ];

  for (const entry of parsed.entries) {
    const kind = entry.isDirectory ? "dir " : "file";
    const compressionLabel = entry.compressedSize != null && entry.compressedSize !== entry.uncompressedSize
      ? `, ${entry.compressedSize} B compressed`
      : "";
    const sizeLabel = entry.isDirectory ? "" : ` (${entry.uncompressedSize} B${compressionLabel})`;
    lines.push(`${kind}  ${entry.name}${sizeLabel}`);
  }

  if (parsed.truncated) {
    lines.push("");
    lines.push(`… showing first ${parsed.entries.length} entries of ${parsed.totalEntries}.`);
  }

  return lines.join("\n");
}

function normalizeEntryName(raw: string | null | undefined): string | null {
  const name = (raw || "").trim();
  if (!name || name === "." || name === "..") return null;
  if (name.includes("/") || name.includes("\\")) return null;
  const base = path.basename(name);
  if (base !== name) return null;
  return name;
}

/** File read/write service for the workspace explorer API. */
export class WorkspaceFileService {
  getFile(
    pathParam: string | null,
    maxParam?: string | null,
    modeParam?: string | null
  ): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) {
        return { status: 400, body: { error: "Path is a directory" } };
      }

      const relPath = toRelativePath(targetPath);
      const contentType = contentTypeForPath(targetPath);
      const isImage = isImageFile(targetPath);
      const ext = path.extname(targetPath).toLowerCase();

      if (isImage) {
        const rawUrl = `/workspace/raw?path=${encodeURIComponent(relPath)}`;
        return {
          status: 200,
          body: {
            path: relPath,
            name: path.basename(targetPath),
            kind: "image",
            content_type: contentType,
            size: stats.size,
            mtime: formatMtime(stats),
            url: rawUrl,
          },
        };
      }

      const maxParsed = parseInt(maxParam || "", 10);
      const isEditMode = modeParam === "edit";
      const maxLimit = isEditMode ? MAX_EDIT_BYTES : MAX_PREVIEW_BYTES;
      const maxBytes = Number.isFinite(maxParsed)
        ? Math.min(Math.max(maxParsed, 1024), maxLimit)
        : isEditMode
          ? maxLimit
          : 20000;

      if (isEditMode && stats.size > MAX_EDIT_BYTES) {
        return { status: 400, body: { error: "File too large to edit" } };
      }

      const buffer = readFileSync(targetPath, { encoding: null }) as Buffer;

      if (!isEditMode && (ext === ".zip" || isTarGzPath(targetPath))) {
        try {
          const isZip = ext === ".zip";
          const parsed = isZip ? parseZipEntries(buffer) : parseTarEntries(gunzipSync(buffer));
          return {
            status: 200,
            body: {
              path: relPath,
              name: path.basename(targetPath),
              kind: "text",
              content_type: contentType,
              size: stats.size,
              mtime: formatMtime(stats),
              text: formatArchiveListing(isZip ? "ZIP archive" : "tar.gz archive", relPath, stats, parsed),
              truncated: parsed.truncated,
            },
          };
        } catch {
          return {
            status: 200,
            body: {
              path: relPath,
              name: path.basename(targetPath),
              kind: "binary",
              content_type: contentType,
              size: stats.size,
              mtime: formatMtime(stats),
              truncated: false,
            },
          };
        }
      }

      const slice = buffer.subarray(0, maxBytes);
      const truncated = buffer.length > maxBytes;

      if (!isTextFile(targetPath) && detectBinary(slice)) {
        return {
          status: isEditMode ? 400 : 200,
          body: isEditMode
            ? { error: "Binary file cannot be edited" }
            : {
                path: relPath,
                name: path.basename(targetPath),
                kind: "binary",
                content_type: contentType,
                size: stats.size,
                mtime: formatMtime(stats),
                truncated,
              },
        };
      }

      let text = slice.toString("utf-8");
      if (path.extname(targetPath).toLowerCase() === ".json") {
        try {
          text = JSON.stringify(JSON.parse(text), null, 2);
        } catch (error) {
          debugSuppressedError(log, "Workspace JSON preview was invalid; returning raw text.", error, {
            operation: "get_file.invalid_json_preview",
            targetPath,
          });
        }
      }

      return {
        status: 200,
        body: {
          path: relPath,
          name: path.basename(targetPath),
          kind: "text",
          content_type: contentType,
          size: stats.size,
          mtime: formatMtime(stats),
          text,
          truncated,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to read file" } };
    }
  }

  getRaw(
    pathParam: string | null,
    download = false,
  ): { status: number; body: string | Blob; contentType?: string; filePath?: string; size?: number; filename?: string; download?: boolean } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: "Invalid path" };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) return { status: 400, body: "Path is a directory" };
      const contentType = contentTypeForPath(targetPath);
      const file = Bun.file(targetPath);
      return {
        status: 200,
        body: file,
        contentType,
        filePath: targetPath,
        size: stats.size,
        filename: path.basename(targetPath),
        download,
      };
    } catch {
      return { status: 404, body: "Not found" };
    }
  }

  attachFile(pathParam: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) return { status: 400, body: { error: "Path is a directory" } };
      if (stats.size > MAX_ATTACH_BYTES) {
        return { status: 400, body: { error: "File too large to attach" } };
      }

      const dataBuf = readFileSync(targetPath);
      const filename = path.basename(targetPath);
      const contentType = contentTypeForPath(targetPath);
      const mediaId = createMedia(filename, contentType, new Uint8Array(dataBuf), null, {
        size: stats.size,
        kind: "file",
        source_path: targetPath,
      });

      return {
        status: 200,
        body: {
          media_id: mediaId,
          filename,
          size: stats.size,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to attach file" } };
    }
  }

  async uploadFile(
    pathParam: string | null,
    file: File,
    overwrite = false
  ): Promise<{ status: number; body: unknown }> {
    const targetDir = resolveWorkspacePath(pathParam);
    if (!targetDir) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetDir);
      if (!stats.isDirectory()) {
        return { status: 400, body: { error: "Path is not a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "Directory not found" } };
    }

    const rawName = typeof file?.name === "string" ? file.name : "";
    const filename = path.basename(rawName || `upload-${Date.now()}`);
    if (!filename) return { status: 400, body: { error: "Missing filename" } };

    const size = typeof file?.size === "number" ? file.size : 0;
    if (size > MAX_UPLOAD_BYTES) {
      return { status: 400, body: { error: "File too large to upload" } };
    }

    const destPath = path.join(targetDir, filename);
    const existed = existsSync(destPath);
    if (existed && !overwrite) {
      return { status: 409, body: { error: "File already exists", code: "file_exists" } };
    }
    if (existed) {
      const existing = statSync(destPath);
      if (existing.isDirectory()) {
        return { status: 400, body: { error: "Path is a directory" } };
      }
    }

    try {
      await Bun.write(destPath, file);
      const updated = statSync(destPath);
      if (updated.size > MAX_UPLOAD_BYTES) {
        try { unlinkSync(destPath); } catch (err) {
          log.warn("Failed to remove oversized upload", {
            operation: "upload.cleanup_oversized_file",
            destPath,
            err,
          });
        }
        return { status: 400, body: { error: "File too large to upload" } };
      }
      const relPath = toRelativePath(destPath);
      return {
        status: 200,
        body: {
          path: relPath,
          name: filename,
          size: updated.size,
          overwritten: existed,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to upload file" } };
    }
  }

  createFile(
    pathParam: string | null,
    nameParam: string | null,
    content: string
  ): { status: number; body: unknown } {
    const targetDir = resolveWorkspacePath(pathParam);
    if (!targetDir) return { status: 400, body: { error: "Invalid path" } };

    const filename = normalizeEntryName(nameParam);
    if (!filename) return { status: 400, body: { error: "Invalid filename" } };

    if (typeof content !== "string") {
      return { status: 400, body: { error: "Missing file content" } };
    }

    try {
      const stats = statSync(targetDir);
      if (!stats.isDirectory()) {
        return { status: 400, body: { error: "Path is not a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "Directory not found" } };
    }

    const size = Buffer.byteLength(content, "utf-8");
    if (size > MAX_EDIT_BYTES) {
      return { status: 400, body: { error: "File too large to edit" } };
    }

    const destPath = path.join(targetDir, filename);
    if (existsSync(destPath)) {
      return { status: 409, body: { error: "File already exists", code: "file_exists" } };
    }

    try {
      writeFileSync(destPath, content, "utf-8");
      const updated = statSync(destPath);
      const relPath = toRelativePath(destPath);
      return {
        status: 200,
        body: {
          path: relPath,
          name: filename,
          size: updated.size,
          mtime: formatMtime(updated),
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to create file" } };
    }
  }

  renameFile(pathParam: string | null, nameParam: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    const relPath = toRelativePath(targetPath);
    if (relPath === ".") {
      return { status: 400, body: { error: "Cannot rename workspace root" } };
    }

    const filename = normalizeEntryName(nameParam);
    if (!filename) return { status: 400, body: { error: "Invalid filename" } };

    try {
      statSync(targetPath);
    } catch {
      return { status: 404, body: { error: "File not found" } };
    }

    const parentDir = path.dirname(targetPath);
    const nextPath = path.join(parentDir, filename);
    if (nextPath === targetPath) {
      return {
        status: 200,
        body: {
          path: relPath,
          name: filename,
        },
      };
    }

    if (existsSync(nextPath)) {
      return { status: 409, body: { error: "File already exists", code: "file_exists" } };
    }

    try {
      renameSync(targetPath, nextPath);
      const nextRel = toRelativePath(nextPath);
      return {
        status: 200,
        body: {
          path: nextRel,
          name: filename,
          old_path: relPath,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to rename file" } };
    }
  }

  moveEntry(pathParam: string | null, targetParam: string | null): { status: number; body: unknown } {
    const sourcePath = resolveWorkspacePath(pathParam);
    if (!sourcePath) return { status: 400, body: { error: "Invalid path" } };

    const relSource = toRelativePath(sourcePath);
    if (relSource === ".") {
      return { status: 400, body: { error: "Cannot move workspace root" } };
    }

    const targetDir = resolveWorkspacePath(targetParam);
    if (!targetDir) return { status: 400, body: { error: "Invalid target" } };

    try {
      const stats = statSync(targetDir);
      if (!stats.isDirectory()) {
        return { status: 400, body: { error: "Target is not a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "Target directory not found" } };
    }

    let sourceStats;
    try {
      sourceStats = statSync(sourcePath);
    } catch {
      return { status: 404, body: { error: "File not found" } };
    }

    const filename = path.basename(sourcePath);
    const nextPath = path.join(targetDir, filename);

    if (nextPath === sourcePath) {
      return {
        status: 200,
        body: {
          path: relSource,
          name: filename,
        },
      };
    }

    if (sourceStats.isDirectory()) {
      const relTarget = toRelativePath(targetDir);
      if (relTarget === relSource || relTarget.startsWith(`${relSource}/`)) {
        return { status: 400, body: { error: "Cannot move a folder into itself" } };
      }
    }

    if (existsSync(nextPath)) {
      return { status: 409, body: { error: "Target already exists", code: "file_exists" } };
    }

    try {
      renameSync(sourcePath, nextPath);
      const nextRel = toRelativePath(nextPath);
      return {
        status: 200,
        body: {
          path: nextRel,
          name: filename,
          old_path: relSource,
          target: toRelativePath(targetDir),
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to move entry" } };
    }
  }

  updateFile(pathParam: string | null, content: string): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    if (typeof content !== "string") {
      return { status: 400, body: { error: "Missing file content" } };
    }

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) {
        return { status: 400, body: { error: "Path is a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "File not found" } };
    }

    const size = Buffer.byteLength(content, "utf-8");
    if (size > MAX_EDIT_BYTES) {
      return { status: 400, body: { error: "File too large to edit" } };
    }

    try {
      writeFileSync(targetPath, content, "utf-8");
      const updated = statSync(targetPath);
      const relPath = toRelativePath(targetPath);
      return {
        status: 200,
        body: {
          path: relPath,
          name: path.basename(targetPath),
          size: updated.size,
          mtime: formatMtime(updated),
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to write file" } };
    }
  }

  deleteFile(pathParam: string | null): { status: number; body: unknown } {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetPath);
      if (stats.isDirectory()) {
        return { status: 400, body: { error: "Path is a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "File not found" } };
    }

    try {
      unlinkSync(targetPath);
      const relPath = toRelativePath(targetPath);
      return {
        status: 200,
        body: {
          path: relPath,
          name: path.basename(targetPath),
          deleted: true,
        },
      };
    } catch {
      return { status: 500, body: { error: "Failed to delete file" } };
    }
  }

  async downloadZip(
    pathParam: string | null,
    includeHidden = false
  ): Promise<{ status: number; body: unknown; filename?: string }> {
    const targetDir = resolveWorkspacePath(pathParam);
    if (!targetDir) return { status: 400, body: { error: "Invalid path" } };

    try {
      const stats = statSync(targetDir);
      if (!stats.isDirectory()) {
        return { status: 400, body: { error: "Path is not a directory" } };
      }
    } catch {
      return { status: 404, body: { error: "Directory not found" } };
    }

    const rootName = path.basename(targetDir) || "workspace";
    const zipRoot = rootName.replace(/[\\/]+/g, "").trim() || "workspace";

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const zip = new Zip();
        zip.ondata = (err, data, final) => {
          if (err) {
            controller.error(err);
            return;
          }
          controller.enqueue(data);
          if (final) controller.close();
        };

        const addDir = async (absDir: string, zipBase: string) => {
          const entries = await readdir(absDir, { withFileTypes: true });
          for (const entry of entries) {
            const absPath = path.join(absDir, entry.name);
            if (shouldIgnorePath(absPath)) continue;
            if (!includeHidden && isHiddenPath(absPath)) continue;
            const zipPath = `${zipBase}/${entry.name}`;
            if (entry.isDirectory()) {
              const dirEntry = new ZipPassThrough(`${zipPath}/`);
              zip.add(dirEntry);
              dirEntry.push(new Uint8Array(), true);
              await addDir(absPath, zipPath);
            } else if (entry.isFile()) {
              const deflate = new ZipDeflate(zipPath);
              zip.add(deflate);
              const file = Bun.file(absPath);
              const fileStream = file.stream();
              for await (const chunk of fileStream) {
                const data = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk as ArrayBuffer);
                deflate.push(data, false);
              }
              deflate.push(new Uint8Array(), true);
            }
          }
        };

        try {
          const rootEntry = new ZipPassThrough(`${zipRoot}/`);
          zip.add(rootEntry);
          rootEntry.push(new Uint8Array(), true);
          await addDir(targetDir, zipRoot);
          zip.end();
        } catch (error) {
          log.warn("Failed to stream workspace zip archive", {
            operation: "download_zip.stream",
            targetDir,
            err: error,
          });
          controller.error(error);
        }
      },
    });

    return {
      status: 200,
      body: stream,
      filename: `${zipRoot}.zip`,
    };
  }
}
