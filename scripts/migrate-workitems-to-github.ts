#!/usr/bin/env bun
/**
 * scripts/migrate-workitems-to-github.ts
 *
 * Migrates file-based workitem kanban to GitHub Issues.
 * Idempotent: re-running skips files already in migrate-state.json.
 *
 * Usage:
 *   bun scripts/migrate-workitems-to-github.ts --dry-run --lanes 50-done
 *   bun scripts/migrate-workitems-to-github.ts --lanes 50-done --limit 50
 *   bun scripts/migrate-workitems-to-github.ts --lanes 50-done,30-done,40-review,20-doing,10-next,00-inbox
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, resolve } from "path";

const REPO = "rcarmo/piclaw";
const WORKITEMS_DIR = resolve(import.meta.dir, "../workitems");
const STATE_FILE = resolve(import.meta.dir, "migrate-state.json");
const DELAY_MS = 200; // between API calls

// Lane → project status + issue state
const LANE_CONFIG: Record<string, { status: string; closed: boolean }> = {
  "50-done":   { status: "Done",        closed: true },
  "30-done":   { status: "Done",        closed: true },
  "40-review": { status: "In Review",   closed: false },
  "20-doing":  { status: "In Progress", closed: false },
  "10-next":   { status: "Next",        closed: false },
  "00-inbox":  { status: "Inbox",       closed: false },
};

// Frontmatter tag → GitHub label prefix mapping
const TAG_TO_AREA: Record<string, string> = {
  web: "area:web", "web-ui": "area:web", runtime: "area:runtime",
  extensions: "area:extensions", workspace: "area:workspace",
  tools: "area:tools", sessions: "area:sessions", docs: "area:docs",
  packaging: "area:packaging", security: "area:security",
  "desktop-automation": "area:desktop-automation", m365: "area:m365",
  shell: "area:shell", container: "area:container", providers: "area:providers",
};
const TAG_TO_TYPE: Record<string, string> = {
  refactor: "type:refactor", audit: "type:audit", release: "type:release",
  research: "type:research", evaluation: "type:research",
  feature: "type:feature", bug: "type:bug",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function parseFrontmatter(text: string): Record<string, unknown> {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm: Record<string, unknown> = {};
  let currentKey = "";
  let inList = false;
  const list: string[] = [];
  for (const line of m[1].split("\n")) {
    const listItem = line.match(/^\s+- (.+)/);
    const keyVal = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (listItem) {
      list.push(listItem[1].trim());
      inList = true;
    } else {
      if (inList && currentKey) { fm[currentKey] = [...list]; list.length = 0; inList = false; }
      if (keyVal) { currentKey = keyVal[1]; fm[currentKey] = keyVal[2].trim().replace(/^["']|["']$/g, ""); inList = false; }
    }
  }
  if (inList && currentKey) fm[currentKey] = [...list];
  return fm;
}

function issueBody(text: string): string {
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return text;
  return text.slice(end + 5).trim();
}

function buildLabels(fm: Record<string, unknown>): string[] {
  const labels: string[] = [];
  const p = String(fm.priority ?? "");
  if (p && ["critical","high","medium","low"].includes(p)) labels.push(`priority:${p}`);
  const tags: string[] = Array.isArray(fm.tags) ? (fm.tags as string[]) : [];
  for (const tag of tags) {
    if (TAG_TO_AREA[tag]) labels.push(TAG_TO_AREA[tag]);
    if (TAG_TO_TYPE[tag]) labels.push(TAG_TO_TYPE[tag]);
  }
  const blockedBy = Array.isArray(fm["blocked-by"]) ? fm["blocked-by"] as string[] : [];
  if (blockedBy.length > 0 && blockedBy.some(b => b.trim())) labels.push("blocked");
  return [...new Set(labels)];
}

async function ghApi(token: string, method: string, path: string, body?: unknown) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub API ${method} ${path} → ${res.status}: ${err}`);
  }
  return res.json();
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

// ── Main ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const limitArg = args.find(a => a.startsWith("--limit="))?.split("=")[1]
  ?? args[args.indexOf("--limit") + 1];
const limit = limitArg ? parseInt(limitArg) : Infinity;
const lanesArg = args.find(a => a.startsWith("--lanes="))?.split("=")[1]
  ?? args[args.indexOf("--lanes") + 1]
  ?? "50-done,30-done,40-review,20-doing,10-next,00-inbox";
const lanes = lanesArg.split(",").map(s => s.trim());
const token = process.env.GITHUB_PICLAW_BOT_PAT ?? process.env.GITHUB_TOKEN ?? "";
if (!token) throw new Error("No GitHub token found in GITHUB_PICLAW_BOT_PAT or GITHUB_TOKEN");

// Load state
const state: Record<string, number> = existsSync(STATE_FILE)
  ? JSON.parse(readFileSync(STATE_FILE, "utf8"))
  : {};

let created = 0;
let skipped = 0;

for (const lane of lanes) {
  const cfg = LANE_CONFIG[lane];
  if (!cfg) { console.error(`Unknown lane: ${lane}`); continue; }

  const dir = join(WORKITEMS_DIR, lane);
  const files = readdirSync(dir)
    .filter(f => f.endsWith(".md") && f !== "README.md")
    .sort(); // sort gives approximate chronological order for dated filenames

  // For 50-done, sort by created: date in frontmatter
  const withMeta = files.map(fname => {
    const text = readFileSync(join(dir, fname), "utf8");
    const fm = parseFrontmatter(text);
    return { fname, text, fm };
  });
  if (lane === "50-done" || lane === "30-done") {
    withMeta.sort((a, b) => String(a.fm.created ?? "").localeCompare(String(b.fm.created ?? "")));
  }

  console.log(`\n── ${lane} (${withMeta.length} files) ──`);

  for (const { fname, text, fm } of withMeta) {
    if (created >= limit) { console.log("  [limit reached]"); break; }
    const key = `${lane}/${fname}`;
    if (state[key]) { skipped++; console.log(`  SKIP ${fname} → #${state[key]}`); continue; }

    const title = String(fm.title ?? fname.replace(".md", "")).replace(/^["']|["']$/g, "");
    const labels = buildLabels(fm);
    const body = issueBody(text);

    if (dryRun) {
      console.log(`  DRY  ${fname}`);
      console.log(`       title: ${title}`);
      console.log(`       labels: ${labels.join(", ") || "(none)"}`);
      console.log(`       closed: ${cfg.closed} | status: ${cfg.status}`);
      created++;
      continue;
    }

    try {
      // 1. Create issue
      const issue = await ghApi(token, "POST", `/repos/${REPO}/issues`, {
        title,
        body,
        labels,
      }) as { number: number; html_url: string };

      // 2. Close if done
      if (cfg.closed) {
        await sleep(DELAY_MS);
        await ghApi(token, "PATCH", `/repos/${REPO}/issues/${issue.number}`, {
          state: "closed",
          state_reason: "completed",
        });
      }

      state[key] = issue.number;
      writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
      console.log(`  OK   ${fname} → #${issue.number} ${issue.html_url}`);
      created++;
    } catch (err) {
      console.error(`  ERR  ${fname}: ${err}`);
    }

    await sleep(DELAY_MS);
  }
}

console.log(`\nDone. created=${created} skipped=${skipped} total=${Object.keys(state).length}`);
if (!dryRun) console.log(`State written to: ${STATE_FILE}`);
