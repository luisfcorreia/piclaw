/**
 * scripts/stamp-cache-buster.ts
 *
 * Replaces all `?v=<digits>` cache-buster query strings in index.html
 * with a fresh unix-epoch-seconds timestamp.  Also stamps the vendor
 * importmap URL with a content-hash so browser caches bust when the
 * vendor bundle changes.  Run automatically at the end of `build:web`.
 */

import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const INDEX = resolve(import.meta.dir, "../web/static/index.html");
const stamp = Math.floor(Date.now() / 1000).toString();

const original = readFileSync(INDEX, "utf-8");
let html = original;

// 1. Stamp ?v= tokens on static bundle references.
//    Match both numeric stamps (?v=1234567890) and the build-time placeholder.
html = html.replace(/\?v=(?:\d+|__APP_ASSET_VERSION__)/g, `?v=${stamp}`);

// 2. Stamp the vendor importmap URL so browser caches bust on content changes.
//    Use the vendor bundle's sha256 prefix from the metadata file when available,
//    fall back to the build timestamp.
const VENDOR_META = resolve(import.meta.dir, "../extensions/viewers/editor/vendor/codemirror.meta.json");
let vendorStamp = stamp;
try {
  if (existsSync(VENDOR_META)) {
    const meta = JSON.parse(readFileSync(VENDOR_META, "utf-8"));
    if (meta.sha256) vendorStamp = meta.sha256.slice(0, 12);
  }
} catch (e) {
  console.warn(`[cache-buster] failed to read vendor metadata: ${e instanceof Error ? e.message : e}`);
}
html = html.replace(
  /(\/editor-vendor\/codemirror\.js)(\?v=[^"]*)?/g,
  `$1?v=${vendorStamp}`,
);

if (html !== original) {
  writeFileSync(INDEX, html, "utf-8");
  console.log(`[cache-buster] stamped index.html → v=${stamp}, vendor=${vendorStamp}`);
} else {
  console.log(`[cache-buster] no tokens changed in index.html`);
}
