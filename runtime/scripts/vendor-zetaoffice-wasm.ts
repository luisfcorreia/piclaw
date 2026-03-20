#!/usr/bin/env bun
/**
 * vendor-zetaoffice-wasm.ts — Download ZetaOffice WASM assets from CDN.
 *
 * Downloads the LibreOffice WASM runtime (soffice.wasm, soffice.js,
 * soffice.data, qtloader.js, soffice.data.js.metadata) from the official
 * ZetaOffice CDN at cdn.zetaoffice.net.
 *
 * Pattern follows vendor-firacode-nerd-font.ts (CDN download + metadata).
 * The CDN serves Brotli-compressed responses; this script requests
 * decompressed content for local serving.
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

const CDN_BASE = "https://cdn.zetaoffice.net/zetaoffice_latest";
const CDN_VERSION = "latest"; // CDN uses a rolling "latest" tag

const CACHE_DIR = resolve(process.cwd(), ".cache", "vendor", "zetaoffice-wasm");
const OUTPUT_DIR = "extensions/office-viewer/vendor";
const METADATA_FILE = resolve(process.cwd(), OUTPUT_DIR, "zetaoffice-wasm.meta.json");

const WASM_FILES = [
  { name: "soffice.wasm", contentType: "application/wasm" },
  { name: "soffice.js", contentType: "application/javascript" },
  { name: "soffice.data", contentType: "application/octet-stream" },
  { name: "soffice.data.js.metadata", contentType: "application/json" },
  { name: "qtloader.js", contentType: "application/javascript" },
] as const;

function sha256ForFile(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

async function downloadFile(url: string, destPath: string): Promise<void> {
  mkdirSync(dirname(destPath), { recursive: true });
  const cachePath = resolve(CACHE_DIR, destPath.split("/").pop()!);

  // Use cache if available
  if (existsSync(cachePath)) {
    const bytes = readFileSync(cachePath);
    writeFileSync(destPath, bytes);
    return;
  }

  const response = await fetch(url, {
    headers: {
      "User-Agent": "piclaw-vendor-workflow",
      // Request decompressed content — CDN serves Brotli by default
      "Accept-Encoding": "identity",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: HTTP ${response.status}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());

  // Validate WASM magic bytes if applicable
  if (destPath.endsWith(".wasm")) {
    if (bytes[0] !== 0x00 || bytes[1] !== 0x61 || bytes[2] !== 0x73 || bytes[3] !== 0x6d) {
      throw new Error(
        `Downloaded ${url} does not have valid WASM magic bytes. ` +
        `Got: ${Array.from(bytes.slice(0, 4)).map(b => b.toString(16).padStart(2, "0")).join(" ")}. ` +
        `The CDN may be serving Brotli-compressed content. ` +
        `Ensure fetch decompresses the response.`
      );
    }
  }

  // Write to both output and cache
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(cachePath, bytes);
  writeFileSync(destPath, bytes);
}

async function main(): Promise<void> {
  const logPrefix = "[vendor:zetaoffice-wasm]";

  const outputs: Array<{
    cdn_url: string;
    output_file: string;
    content_type: string;
    sha256: string;
    size_bytes: number;
  }> = [];

  for (const file of WASM_FILES) {
    const url = `${CDN_BASE}/${file.name}`;
    const outputPath = resolve(process.cwd(), OUTPUT_DIR, file.name);
    process.stdout.write(`${logPrefix} downloading ${file.name}...\n`);
    await downloadFile(url, outputPath);

    const sha = sha256ForFile(outputPath);
    const size = readFileSync(outputPath).byteLength;
    outputs.push({
      cdn_url: url,
      output_file: relative(process.cwd(), outputPath),
      content_type: file.contentType,
      sha256: sha,
      size_bytes: size,
    });
    process.stdout.write(`${logPrefix}   ${file.name}: ${(size / 1048576).toFixed(1)} MB (sha256: ${sha.substring(0, 12)}...)\n`);
  }

  const metadata = {
    manifest_id: "zetaoffice-wasm",
    package_name: "zetaoffice-wasm",
    package_version: CDN_VERSION,
    package_license: "MPL-2.0",
    package_repository: "https://github.com/niccokunzmann/zetajs",
    source_url: CDN_BASE,
    output_file: outputs[0]?.output_file ?? null,
    output_files: outputs,
    metadata_file: relative(process.cwd(), METADATA_FILE),
    sha256: outputs[0]?.sha256 ?? null,
    size_bytes: outputs[0]?.size_bytes ?? null,
    total_size_bytes: outputs.reduce((sum, o) => sum + o.size_bytes, 0),
  };

  mkdirSync(dirname(METADATA_FILE), { recursive: true });
  writeFileSync(METADATA_FILE, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");

  const totalMb = (metadata.total_size_bytes / 1048576).toFixed(1);
  process.stdout.write([
    `${logPrefix} downloaded ${outputs.length} files (${totalMb} MB total)`,
    `${logPrefix} CDN: ${CDN_BASE}`,
    `${logPrefix} metadata: ${relative(process.cwd(), METADATA_FILE)}`,
  ].join("\n") + "\n");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
