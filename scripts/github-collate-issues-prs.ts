#!/usr/bin/env bun
/**
 * SCRIPT_JDOC:
 * {
 *   "summary": "Collect GitHub issues and pull requests into normalized JSON and Markdown digests, while maintaining a rolling repository metrics history in YAML.",
 *   "aliases": ["github digest", "collate issues prs", "github metrics history"],
 *   "domains": ["github", "reporting", "issues", "pull-requests", "analytics"],
 *   "verbs": ["collect", "collate", "report", "trend", "history"],
 *   "nouns": ["issues", "pull requests", "repos", "digest", "history", "stars"],
 *   "keywords": ["github", "issues", "prs", "markdown", "json", "yaml", "snapshot", "star", "trend"],
 *   "guidance": [
 *     "Skips private repositories by default; pass --include-private to opt in.",
 *     "Writes normalized JSON, Markdown, and optional YAML history artifacts for follow-up plotting.",
 *     "History is incremental: each scheduled run appends one metric snapshot per repository."
 *   ],
 *   "examples": [
 *     "bun run scripts/github-collate-issues-prs.ts --state open",
 *     "bun run scripts/github-collate-issues-prs.ts --state all --owner rcarmo --include-private",
 *     "bun run scripts/github-collate-issues-prs.ts --history-yaml /workspace/notes/reference/github-repo-metrics-history.yml"
 *   ],
 *   "kind": "read-only",
 *   "weight": "standard",
 *   "role": "entrypoint"
 * }
 */
/**
 * github-collate-issues-prs.ts
 *
 * Collect issues + pull requests across GitHub repositories visible to the
 * current token, write a normalized JSON snapshot, render a Markdown report,
 * and maintain a YAML-backed rolling history of issue/PR/star metrics for
 * trend charting.
 *
 * Auth env vars (first match wins):
 * - GITHUB_TOKEN
 * - GITHUB_PICLAW_BOT_PAT
 * - GH_TOKEN
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import * as YAML from "js-yaml";

type RepoRecord = {
  id: number;
  full_name: string;
  private: boolean;
  archived: boolean;
  fork: boolean;
  html_url: string;
  default_branch: string;
  stargazers_count: number;
  owner: { login: string };
  permissions?: Record<string, boolean>;
};

type IssueApiRecord = {
  number: number;
  title: string;
  state: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  user?: { login?: string } | null;
  labels?: Array<{ name?: string } | null>;
  assignees?: Array<{ login?: string } | null>;
  body?: string | null;
  pull_request?: unknown;
};

type PullApiRecord = {
  number: number;
  title: string;
  state: string;
  draft: boolean;
  html_url: string;
  created_at: string;
  updated_at: string;
  user?: { login?: string } | null;
  labels?: Array<{ name?: string } | null>;
  assignees?: Array<{ login?: string } | null>;
  body?: string | null;
  head?: { ref?: string } | null;
  base?: { ref?: string } | null;
};

type CollatedItem = {
  repo: string;
  repo_url: string;
  repo_private: boolean;
  repo_archived: boolean;
  type: "issue" | "pull_request";
  number: number;
  title: string;
  state: string;
  draft: boolean;
  url: string;
  author: string;
  created_at: string;
  updated_at: string;
  labels: string[];
  assignees: string[];
  body_preview: string;
  head_ref?: string;
  base_ref?: string;
};

type RepoSummary = {
  full_name: string;
  html_url: string;
  private: boolean;
  archived: boolean;
  fork: boolean;
  default_branch: string;
  stars: number;
  issues: number;
  pull_requests: number;
  total: number;
};

type MetricDeltas = {
  issues: number;
  pull_requests: number;
  stars: number;
};

type HistorySnapshot = {
  at: string;
  issues: number;
  pull_requests: number;
  stars: number;
  deltas: MetricDeltas;
};

type RepoHistoryRecord = {
  full_name: string;
  html_url: string;
  private: boolean;
  archived: boolean;
  fork: boolean;
  default_branch: string;
  points: HistorySnapshot[];
};

type RepoMetricsHistory = {
  generated_at: string;
  version: number;
  points: number;
  repos: RepoHistoryRecord[];
};

type RepoTrend = {
  full_name: string;
  html_url: string;
  stars: number;
  issues: number;
  pull_requests: number;
  deltas: MetricDeltas;
  points: HistorySnapshot[];
};

type Report = {
  generated_at: string;
  state: "open" | "closed" | "all";
  include_archived: boolean;
  include_forks: boolean;
  include_private: boolean;
  owner_filters: string[];
  recent_activity_hours: number | null;
  totals: {
    repos_scanned: number;
    repos_with_items: number;
    total_items: number;
    total_issues: number;
    total_pull_requests: number;
    repos_with_star_changes: number;
    repos_with_star_gains: number;
  };
  repos: RepoSummary[];
  items: CollatedItem[];
};

type Options = {
  state: "open" | "closed" | "all";
  outputDir: string;
  outputJson?: string;
  outputMarkdown?: string;
  historyYaml?: string;
  includeArchived: boolean;
  includeForks: boolean;
  includePrivate: boolean;
  ownerFilters: string[];
  maxRepos?: number;
  activeWithinHours?: number;
  historyPoints: number;
  chartPoints: number;
};

const DEFAULT_HISTORY_POINTS = 120;
const DEFAULT_CHART_POINTS = 30;

function readOption(argv: string[], name: string): string | undefined {
  const index = argv.indexOf(name);
  if (index < 0) return undefined;
  const next = argv[index + 1];
  if (!next || next.startsWith("--")) return undefined;
  return next;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function readOptions(argv: string[]): Options {
  const stateCandidate = readOption(argv, "--state");
  const state = stateCandidate === "closed" || stateCandidate === "all" ? stateCandidate : "open";
  const outputDir = resolve(readOption(argv, "--output-dir") || "/workspace/tmp/github-collate");
  const outputJson = readOption(argv, "--output-json");
  const outputMarkdown = readOption(argv, "--output-markdown");
  const historyYaml = readOption(argv, "--history-yaml");
  const includeArchived = argv.includes("--include-archived");
  const includeForks = argv.includes("--include-forks");
  const includePrivate = argv.includes("--include-private");
  const ownerFilters = argv
    .flatMap((arg, index) => arg === "--owner" ? [argv[index + 1]] : [])
    .filter((value): value is string => Boolean(value && !value.startsWith("--")))
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  const maxReposRaw = readOption(argv, "--max-repos");
  const maxRepos = parsePositiveInt(maxReposRaw, Infinity);
  const activeWithinHours = Number.parseInt(readOption(argv, "--active-within-hours") ?? "", 10);
  const historyPoints = parsePositiveInt(readOption(argv, "--history-points"), DEFAULT_HISTORY_POINTS);
  const chartPoints = parsePositiveInt(readOption(argv, "--chart-points"), DEFAULT_CHART_POINTS);

  return {
    state,
    outputDir,
    outputJson,
    outputMarkdown,
    historyYaml,
    includeArchived,
    includeForks,
    includePrivate,
    ownerFilters,
    maxRepos: Number.isFinite(maxRepos) && maxRepos < Infinity ? maxRepos : undefined,
    activeWithinHours: Number.isFinite(activeWithinHours) && activeWithinHours > 0 ? activeWithinHours : undefined,
    historyPoints,
    chartPoints,
  };
}

function requireGithubToken(): string {
  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PICLAW_BOT_PAT || process.env.GH_TOKEN || "";
  if (!token.trim()) {
    throw new Error("Missing GitHub token. Set GITHUB_TOKEN, GITHUB_PICLAW_BOT_PAT, or GH_TOKEN.");
  }
  return token.trim();
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson<T>(token: string, url: string): Promise<{ data: T; headers: Headers }> {
  let attempt = 0;
  while (true) {
    attempt += 1;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "piclaw-github-collate-script",
      },
    });

    if (response.ok) {
      return { data: await response.json() as T, headers: response.headers };
    }

    if ((response.status === 403 || response.status === 429) && attempt < 4) {
      const retryAfter = Number(response.headers.get("retry-after"));
      const resetEpoch = Number(response.headers.get("x-ratelimit-reset"));
      const delayMs = Number.isFinite(retryAfter) && retryAfter > 0
        ? retryAfter * 1000
        : Number.isFinite(resetEpoch) && resetEpoch > 0
          ? Math.max(1000, (resetEpoch * 1000) - Date.now())
          : 2000 * attempt;
      await sleep(delayMs);
      continue;
    }

    const body = await response.text().catch(() => "");
    throw new Error(`GitHub API request failed (${response.status}) for ${url}\n${body}`.trim());
  }
}

function parseLinkHeader(header: string | null): Record<string, string> {
  const result: Record<string, string> = {};
  if (!header) return result;
  for (const part of header.split(",")) {
    const match = part.match(/<([^>]+)>;\s*rel="([^"]+)"/);
    if (!match) continue;
    result[match[2]] = match[1];
  }
  return result;
}

async function fetchAllPages<T>(token: string, url: string): Promise<T[]> {
  const items: T[] = [];
  let nextUrl: string | undefined = url;
  while (nextUrl) {
    const { data, headers } = await fetchJson<T[]>(token, nextUrl);
    items.push(...data);
    const links = parseLinkHeader(headers.get("link"));
    nextUrl = links.next;
  }
  return items;
}

async function fetchAllPagesAllowEmptyOnNotFound<T>(token: string, url: string): Promise<T[]> {
  try {
    return await fetchAllPages<T>(token, url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error || "");
    if (message.includes("GitHub API request failed (404)") || message.includes("GitHub API request failed (410)")) {
      return [];
    }
    throw error;
  }
}

function previewBody(value: string | null | undefined, maxChars = 160): string {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  return normalized.length <= maxChars ? normalized : `${normalized.slice(0, maxChars - 1)}…`;
}

function labelNames(value: Array<{ name?: string } | null> | undefined): string[] {
  return (value || [])
    .map((entry) => typeof entry?.name === "string" ? entry.name.trim() : "")
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function assigneeNames(value: Array<{ login?: string } | null> | undefined): string[] {
  return (value || [])
    .map((entry) => typeof entry?.login === "string" ? entry.login.trim() : "")
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function normalizeIssue(repo: RepoRecord, record: IssueApiRecord): CollatedItem | null {
  if (record.pull_request) return null;
  return {
    repo: repo.full_name,
    repo_url: repo.html_url,
    repo_private: repo.private,
    repo_archived: repo.archived,
    type: "issue",
    number: record.number,
    title: String(record.title || "").trim(),
    state: String(record.state || "").trim(),
    draft: false,
    url: String(record.html_url || "").trim(),
    author: String(record.user?.login || "").trim(),
    created_at: String(record.created_at || "").trim(),
    updated_at: String(record.updated_at || "").trim(),
    labels: labelNames(record.labels),
    assignees: assigneeNames(record.assignees),
    body_preview: previewBody(record.body),
  };
}

function normalizePull(repo: RepoRecord, record: PullApiRecord): CollatedItem {
  return {
    repo: repo.full_name,
    repo_url: repo.html_url,
    repo_private: repo.private,
    repo_archived: repo.archived,
    type: "pull_request",
    number: record.number,
    title: String(record.title || "").trim(),
    state: String(record.state || "").trim(),
    draft: Boolean(record.draft),
    url: String(record.html_url || "").trim(),
    author: String(record.user?.login || "").trim(),
    created_at: String(record.created_at || "").trim(),
    updated_at: String(record.updated_at || "").trim(),
    labels: labelNames(record.labels),
    assignees: assigneeNames(record.assignees),
    body_preview: previewBody(record.body),
    head_ref: String(record.head?.ref || "").trim() || undefined,
    base_ref: String(record.base?.ref || "").trim() || undefined,
  };
}

function normalizeNumber(value: unknown): number {
  const num = Number(value);
  if (!Number.isFinite(num)) return 0;
  return Math.max(0, Math.round(num));
}

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function escapeCell(value: string): string {
  return String(value || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function escapeMarkdown(value: string): string {
  return String(value || "").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function escapeXml(value: string): string {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function compactIso(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function toDisplayDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";
  return `${String(parsed.getUTCFullYear())}-${String(parsed.getUTCMonth() + 1).padStart(2, "0")}-${String(parsed.getUTCDate()).padStart(2, "0")}`;
}

function buildSparklineSvg(points: HistorySnapshot[], title: string, width = 640, height = 180): string {
  if (points.length === 0) {
    return [
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
      `<rect x="0" y="0" width="${width}" height="${height}" fill="#0b1020"/>`,
      `<text x="${width / 2}" y="${height / 2}" fill="#94a3b8" text-anchor="middle" font-size="14" font-family="system-ui,-apple-system,Segoe UI,sans-serif">No history yet</text>`,
      `</svg>`,
    ].join("");
  }

  const labels = points.map((point) => toDisplayDate(point.at));
  const values = points.map((point) => point.stars);
  const minRaw = Math.min(...values);
  const maxRaw = Math.max(...values);
  const delta = maxRaw - minRaw;
  const pad = Math.max(1, Math.ceil(delta * 0.15));
  const minY = Math.max(0, minRaw - pad);
  const maxY = maxRaw + pad;

  const left = 42;
  const right = 12;
  const top = 28;
  const bottom = 34;
  const chartW = width - left - right;
  const chartH = height - top - bottom;
  const step = chartW / Math.max(1, points.length - 1);

  const mapX = (index: number) => left + index * step;
  const mapY = (value: number) => top + chartH * (1 - (value - minY) / Math.max(1, maxY - minY));

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${mapX(index).toFixed(2)} ${mapY(point.stars).toFixed(2)}`)
    .join(" ");

  const last = points[points.length - 1];
  const first = points[0];

  const lines: string[] = [];
  lines.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`);
  lines.push(`<title>${escapeXml(title)}</title>`);
  lines.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="12" fill="#0b1020"/>`);
  lines.push(`<rect x="${left}" y="${top}" width="${chartW}" height="${chartH}" fill="#111827"/>`);
  lines.push(`<text x="${left}" y="${18}" fill="#e2e8f0" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13">${escapeXml(title)} • ${last.stars}★</text>`);

  // Grid & axis labels
  const minTick = minY;
  const maxTick = maxY;
  const midTick = (maxTick + minTick) / 2;
  const ticks = [minTick, midTick, maxTick];
  for (const tickValue of ticks) {
    const y = top + (tickValue - maxTick) * (chartH / (maxY - minY || 1)) * -1;
    const label = Math.round(tickValue).toString();
    lines.push(`<line x1="${left}" y1="${y.toFixed(2)}" x2="${width - right}" y2="${y.toFixed(2)}" stroke="#1f2937" stroke-width="1" />`);
    lines.push(`<text x="${left - 6}" y="${(y + 4).toFixed(2)}" fill="#9ca3af" text-anchor="end" font-size="11" font-family="monospace">${escapeXml(label)}</text>`);
  }

  lines.push(`<path d="${path}" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`);
  const baseY = mapY(Math.max(minY, minY));
  lines.push(`<path d="${path} L ${mapX(points.length - 1).toFixed(2)} ${baseY.toFixed(2)} L ${mapX(0).toFixed(2)} ${baseY.toFixed(2)} Z" fill="#38bdf80f" stroke="none"/>`);

  for (let index = 0; index < points.length; index += 1) {
    if (index % 2 === 1 && index !== points.length - 1) continue;
    const point = points[index];
    const x = mapX(index).toFixed(2);
    const y = mapY(point.stars).toFixed(2);
    lines.push(`<circle cx="${x}" cy="${y}" r="3" fill="#f8fafc" stroke="#0ea5e9" stroke-width="1.5" />`);
  }

  lines.push(`<text x="${left}" y="${height - 10}" fill="#94a3b8" font-size="10" font-family="system-ui,-apple-system,Segoe UI,sans-serif">${escapeXml(labels[0] || "")}</text>`);
  lines.push(`<text x="${width - right}" y="${height - 10}" text-anchor="end" fill="#94a3b8" font-size="10" font-family="system-ui,-apple-system,Segoe UI,sans-serif">${escapeXml(labels[labels.length - 1] || "")}</text>`);
  if (first && last) {
    const from = first.stars;
    const to = last.stars;
    const delta = to - from;
    lines.push(`<text x="${width - right}" y="${22}" text-anchor="end" fill="#22c55e" font-size="11" font-family="system-ui,-apple-system,Segoe UI,sans-serif">${delta >= 0 ? "+" : ""}${delta.toLocaleString()}★ in ${labels.length - 1} step${labels.length - 2 === 1 ? "" : "s"}</text>`);
  }
  lines.push("</svg>");
  return lines.join("");
}

function svgDataUrl(svg: string): string {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

function renderMarkdown(report: Report, trends: RepoTrend[], chartPoints: number): string {
  const lines: string[] = [];
  const starChanges = trends.filter((trend) => trend.deltas.stars !== 0);
  const starGains = starChanges
    .filter((trend) => trend.deltas.stars > 0)
    .sort((a, b) => b.deltas.stars - a.deltas.stars)
    .slice(0, 20);

  lines.push("# GitHub issues + PR digest");
  lines.push("");
  lines.push(`Generated: ${report.generated_at}`);
  lines.push("");

  lines.push("## Recently changed star counts");
  lines.push("");
  if (starChanges.length === 0) {
    lines.push("No repository changed star count in this run.");
    lines.push("");
  } else {
    lines.push("| Repo | Current stars | Delta | Issues | PRs | URL |\n|---|---:|---:|---:|---:|---|");
    for (const trend of starChanges.sort((a, b) => Math.abs(b.deltas.stars) - Math.abs(a.deltas.stars))) {
      const delta = trend.deltas.stars;
      const sign = delta > 0 ? `+${delta}` : String(delta);
      lines.push(`| ${escapeCell(trend.full_name)} | ${trend.stars.toLocaleString()} | ${sign} | ${trend.issues} | ${trend.pull_requests} | [repo](${trend.html_url}) |`);
    }
    lines.push("");

    if (starGains.length > 0) {
      lines.push("### Star trend (new stars)");
      lines.push("");
      for (const trend of starGains) {
        const chartWindow = trend.points.slice(-Math.max(2, chartPoints));
        const current = trend.stars;
        const previous = current - trend.deltas.stars;
        const delta = trend.deltas.stars;
        const chart = buildSparklineSvg(chartWindow, `${trend.full_name} star trend`);
        lines.push(`#### [${escapeMarkdown(trend.full_name)}](${trend.html_url})`);
        lines.push(`- Current: **${current.toLocaleString()}** stars (from **${Math.max(0, previous).toLocaleString()}**, **${delta > 0 ? "+" : ""}${delta}** this run)`);
        lines.push(`- Open items: ${trend.issues} issues / ${trend.pull_requests} PRs`);
        lines.push(`![${escapeMarkdown(trend.full_name)} stars trend](${svgDataUrl(chart)})`);
        lines.push("");
      }
    }
  }

  lines.push("## Summary");
  lines.push("");
  lines.push(`- State filter: \`${report.state}\``);
  if (report.recent_activity_hours) {
    lines.push(`- Activity window: **last ${report.recent_activity_hours}h** by created/updated time`);
  }
  lines.push(`- Repos scanned: **${report.totals.repos_scanned}**`);
  lines.push(`- Included private repos: **${report.include_private ? "yes" : "no"}**`);
  lines.push(`- Repos with items: **${report.totals.repos_with_items}**`);
  lines.push(`- Total items: **${report.totals.total_items}**`);
  lines.push(`- Issues: **${report.totals.total_issues}**`);
  lines.push(`- Pull requests: **${report.totals.total_pull_requests}**`);
  lines.push(`- Repos with star movement: **${report.totals.repos_with_star_changes}**`);
  lines.push(`- Repos with new stars: **${report.totals.repos_with_star_gains}**`);
  lines.push("");

  if (report.repos.length > 0) {
    lines.push("## Repo summary");
    lines.push("");
    lines.push("| Repo | Stars | Issues | PRs | Total |");
    lines.push("|---|---:|---:|---:|---:|");
    for (const repo of report.repos) {
      lines.push(`| ${escapeCell(repo.full_name)} | ${repo.stars} | ${repo.issues} | ${repo.pull_requests} | ${repo.total} |`);
    }
    lines.push("");
  }

  lines.push("## Collated items");
  lines.push("");
  if (report.items.length === 0) {
    lines.push("| Updated | Repo | Type | # | Title | Author | Labels | URL |");
    lines.push("|---|---|---|---:|---|---|---|---|");
    lines.push("| — | — | — | — | No matching items | — | — | — |");
    lines.push("");
    return lines.join("\n");
  }

  const itemsByRepo = new Map<string, CollatedItem[]>();
  for (const item of report.items) {
    const existing = itemsByRepo.get(item.repo) || [];
    existing.push(item);
    itemsByRepo.set(item.repo, existing);
  }

  for (const repo of report.repos) {
    const repoItems = itemsByRepo.get(repo.full_name) || [];
    if (repoItems.length === 0) continue;
    const issues = repoItems.filter((item) => item.type === "issue");
    const pullRequests = repoItems.filter((item) => item.type === "pull_request");

    lines.push(`### [${escapeCell(repo.full_name)}](${repo.html_url})`);
    lines.push("");

    if (issues.length > 0) {
      lines.push("#### Issues");
      lines.push("");
      lines.push("| Updated | # | Title | Author | Labels | URL |");
      lines.push("|---|---:|---|---|---|---|");
      for (const item of issues) {
        const labels = item.labels.length > 0 ? item.labels.join(", ") : "—";
        lines.push(
          `| ${escapeCell(compactIso(item.updated_at))} | ${item.number} | ${escapeCell(item.title)} | ${escapeCell(item.author || "—")} | ${escapeCell(labels)} | [#${item.number}](${item.url}) |`,
        );
      }
      lines.push("");
    }

    if (pullRequests.length > 0) {
      lines.push("#### Pull requests");
      lines.push("");
      lines.push("| Updated | # | Title | Author | Labels | URL |");
      lines.push("|---|---:|---|---|---|---|");
      for (const item of pullRequests) {
        const labels = item.labels.length > 0 ? item.labels.join(", ") : "—";
        const title = item.draft ? `${item.title} (draft)` : item.title;
        lines.push(
          `| ${escapeCell(compactIso(item.updated_at))} | ${item.number} | ${escapeCell(title)} | ${escapeCell(item.author || "—")} | ${escapeCell(labels)} | [#${item.number}](${item.url}) |`,
        );
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

function loadHistory(path: string): RepoMetricsHistory {
  if (!existsSync(path)) {
    return {
      generated_at: new Date().toISOString(),
      version: 1,
      points: DEFAULT_HISTORY_POINTS,
      repos: [],
    };
  }

  try {
    const raw = readFileSync(path, "utf8");
    const parsed = YAML.load(raw) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object") {
      return {
        generated_at: new Date().toISOString(),
        version: 1,
        points: DEFAULT_HISTORY_POINTS,
        repos: [],
      };
    }

    const reposRaw = Array.isArray((parsed as any).repos) ? (parsed as any).repos as unknown[] : [];
    const repos = reposRaw.flatMap((repo: unknown): RepoHistoryRecord[] => {
      if (!repo || typeof repo !== "object") return [];
      const typed = repo as Record<string, unknown>;
      const fullName = normalizeString(typed.full_name);
      if (!fullName) return [];
      const pointRaw = Array.isArray((typed as any).points) ? (typed as any).points as unknown[] : [];
      const points = pointRaw
        .map((point: unknown): HistorySnapshot | null => {
          if (!point || typeof point !== "object") return null;
          const rawPoint = point as Record<string, unknown>;
          const at = normalizeString(rawPoint.at);
          if (!at) return null;
          const issues = normalizeNumber(rawPoint.issues);
          const pullRequests = normalizeNumber(rawPoint.pull_requests);
          const stars = normalizeNumber(rawPoint.stars);
          const deltasCandidate = typeof rawPoint.deltas === "object" && rawPoint.deltas !== null
            ? rawPoint.deltas as Record<string, unknown>
            : null;
          return {
            at,
            issues,
            pull_requests: pullRequests,
            stars,
            deltas: {
              issues: normalizeNumber(deltasCandidate?.issues),
              pull_requests: normalizeNumber(deltasCandidate?.pull_requests),
              stars: normalizeNumber(deltasCandidate?.stars),
            },
          };
        })
        .filter((point): point is HistorySnapshot => Boolean(point));

      return [{
        full_name: fullName,
        html_url: normalizeString(typed.html_url),
        private: Boolean((typed as any).private),
        archived: Boolean((typed as any).archived),
        fork: Boolean((typed as any).fork),
        default_branch: normalizeString(typed.default_branch),
        points,
      }];
    });

    const parsedVersion = Number.isFinite(Number((parsed as any).version)) ? Number((parsed as any).version) : 1;
    const parsedPoints = Number.isFinite(Number((parsed as any).points)) ? Number((parsed as any).points) : DEFAULT_HISTORY_POINTS;
    return {
      generated_at: normalizeString((parsed as any).generated_at) || new Date().toISOString(),
      version: Math.max(1, parsedVersion),
      points: Math.max(10, Math.round(parsedPoints)),
      repos,
    };
  } catch {
    return {
      generated_at: new Date().toISOString(),
      version: 1,
      points: DEFAULT_HISTORY_POINTS,
      repos: [],
    };
  }
}

function ensureRepoHistoryLimit(points: HistorySnapshot[], limit: number): HistorySnapshot[] {
  if (points.length <= limit) return points;
  return points.slice(points.length - limit);
}

function upsertRepoHistory(
  history: RepoMetricsHistory,
  summaries: RepoSummary[],
  generatedAt: string,
  historyPoints: number,
): RepoTrend[] {
  const repoMap = new Map(history.repos.map((repo) => [repo.full_name, repo]));
  const updated: RepoTrend[] = [];

  for (const repo of summaries) {
    const existing = repoMap.get(repo.full_name) || {
      full_name: repo.full_name,
      html_url: repo.html_url,
      private: repo.private,
      archived: repo.archived,
      fork: repo.fork,
      default_branch: repo.default_branch,
      points: [],
    };

    const previous = existing.points[existing.points.length - 1];
    const deltas: MetricDeltas = {
      issues: previous ? repo.issues - previous.issues : 0,
      pull_requests: previous ? repo.pull_requests - previous.pull_requests : 0,
      stars: previous ? repo.stars - previous.stars : 0,
    };

    const point: HistorySnapshot = {
      at: generatedAt,
      issues: repo.issues,
      pull_requests: repo.pull_requests,
      stars: repo.stars,
      deltas,
    };
    existing.points = ensureRepoHistoryLimit([...existing.points, point], historyPoints);

    if (!repoMap.has(repo.full_name)) {
      history.repos.push(existing);
      repoMap.set(repo.full_name, existing);
    }

    updated.push({
      full_name: repo.full_name,
      html_url: repo.html_url,
      stars: repo.stars,
      issues: repo.issues,
      pull_requests: repo.pull_requests,
      deltas,
      points: [...existing.points],
    });
  }

  history.generated_at = generatedAt;
  history.version = Math.max(1, history.version);
  history.points = historyPoints;
  return updated.sort((a, b) => a.full_name.localeCompare(b.full_name));
}

async function mapWithConcurrency<T, R>(
  values: readonly T[],
  concurrency: number,
  mapper: (value: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(values.length);
  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(values[index], index);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, values.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function isRecentlyActive(item: CollatedItem, nowMs: number, activeWithinHours?: number): boolean {
  if (!activeWithinHours || activeWithinHours <= 0) return true;
  const cutoff = nowMs - (activeWithinHours * 60 * 60 * 1000);
  const createdMs = Date.parse(item.created_at) || 0;
  const updatedMs = Date.parse(item.updated_at) || 0;
  return createdMs >= cutoff || updatedMs >= cutoff;
}

async function collectRepoItems(
  token: string,
  repo: RepoRecord,
  state: Options["state"],
  activeWithinHours?: number,
  nowMs = Date.now(),
): Promise<{ repo: RepoSummary; items: CollatedItem[] }> {
  const [owner = "", name = ""] = String(repo.full_name || "").split("/");
  if (!owner || !name) {
    throw new Error(`Invalid GitHub repo full_name: ${repo.full_name}`);
  }
  const issuesUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}/issues?state=${state}&per_page=100`;
  const pullsUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}/pulls?state=${state}&per_page=100`;

  const [issueRecords, pullRecords] = await Promise.all([
    fetchAllPagesAllowEmptyOnNotFound<IssueApiRecord>(token, issuesUrl),
    fetchAllPagesAllowEmptyOnNotFound<PullApiRecord>(token, pullsUrl),
  ]);

  const items = [
    ...issueRecords.map((record) => normalizeIssue(repo, record)).filter((record): record is CollatedItem => Boolean(record)),
    ...pullRecords.map((record) => normalizePull(repo, record)),
  ]
    .filter((item) => isRecentlyActive(item, nowMs, activeWithinHours))
    .sort((left, right) => {
      const leftTs = Date.parse(left.updated_at) || 0;
      const rightTs = Date.parse(right.updated_at) || 0;
      if (rightTs !== leftTs) return rightTs - leftTs;
      if (left.repo !== right.repo) return left.repo.localeCompare(right.repo);
      return left.number - right.number;
    });

  return {
    repo: {
      full_name: repo.full_name,
      html_url: repo.html_url,
      private: repo.private,
      archived: repo.archived,
      fork: repo.fork,
      default_branch: repo.default_branch,
      stars: normalizeNumber(repo.stargazers_count),
      issues: items.filter((item) => item.type === "issue").length,
      pull_requests: items.filter((item) => item.type === "pull_request").length,
      total: items.length,
    },
    items,
  };
}

function ensureParentDir(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
}

function timestampSlug(date = new Date()): string {
  return date.toISOString().replace(/[:.]/g, "-");
}

function normalizeHistoryYamlPath(outputDir: string, explicitPath: string | undefined): string {
  if (explicitPath && explicitPath.trim()) {
    return resolve(explicitPath);
  }
  return resolve(outputDir, "github-repo-metrics-history.yml");
}

async function main(): Promise<void> {
  const options = readOptions(process.argv.slice(2));
  const token = requireGithubToken();
  const historyYaml = normalizeHistoryYamlPath(options.outputDir, options.historyYaml);

  const repos = await fetchAllPages<RepoRecord>(
    token,
    "https://api.github.com/user/repos?affiliation=owner,collaborator,organization_member&per_page=100&sort=full_name&direction=asc",
  );

  let filteredRepos = repos.filter((repo) => {
    if (!options.includeArchived && repo.archived) return false;
    if (!options.includeForks && repo.fork) return false;
    if (!options.includePrivate && repo.private) return false;
    if (options.ownerFilters.length > 0) {
      const owner = String(repo.owner?.login || "").trim().toLowerCase();
      return options.ownerFilters.includes(owner);
    }
    return true;
  });

  filteredRepos = filteredRepos.sort((a, b) => a.full_name.localeCompare(b.full_name));
  if (options.maxRepos && filteredRepos.length > options.maxRepos) {
    filteredRepos = filteredRepos.slice(0, options.maxRepos);
  }

  const nowMs = Date.now();
  const generatedAt = new Date(nowMs).toISOString();
  const perRepo = await mapWithConcurrency(
    filteredRepos,
    6,
    async (repo) => collectRepoItems(token, repo, options.state, options.activeWithinHours, nowMs),
  );

  const repoSummariesAll = perRepo.map((entry) => entry.repo);
  const repoSummariesWithItems = repoSummariesAll
    .filter((repo) => repo.total > 0)
    .sort((a, b) => b.total - a.total || a.full_name.localeCompare(b.full_name));

  const items = perRepo
    .flatMap((entry) => entry.items)
    .sort((a, b) => {
      const leftTs = Date.parse(a.updated_at) || 0;
      const rightTs = Date.parse(b.updated_at) || 0;
      if (rightTs !== leftTs) return rightTs - leftTs;
      if (a.repo !== b.repo) return a.repo.localeCompare(b.repo);
      if (a.type !== b.type) return a.type.localeCompare(b.type);
      return a.number - b.number;
    });

  const history = loadHistory(historyYaml);
  const trends = upsertRepoHistory(history, repoSummariesAll, generatedAt, options.historyPoints);
  const starChanges = trends.filter((trend) => trend.deltas.stars !== 0);
  const starGains = trends.filter((trend) => trend.deltas.stars > 0);

  const report: Report = {
    generated_at: generatedAt,
    state: options.state,
    include_archived: options.includeArchived,
    include_forks: options.includeForks,
    include_private: options.includePrivate,
    owner_filters: options.ownerFilters,
    recent_activity_hours: options.activeWithinHours ?? null,
    totals: {
      repos_scanned: filteredRepos.length,
      repos_with_items: repoSummariesWithItems.length,
      total_items: items.length,
      total_issues: items.filter((item) => item.type === "issue").length,
      total_pull_requests: items.filter((item) => item.type === "pull_request").length,
      repos_with_star_changes: starChanges.length,
      repos_with_star_gains: starGains.length,
    },
    repos: repoSummariesWithItems,
    items,
  };

  const slug = timestampSlug();
  const jsonPath = resolve(options.outputJson || join(options.outputDir, `github-items-${options.state}-${slug}.json`));
  const markdownPath = resolve(options.outputMarkdown || join(options.outputDir, `github-items-${options.state}-${slug}.md`));
  const markdown = renderMarkdown(report, trends, options.chartPoints);

  ensureParentDir(jsonPath);
  ensureParentDir(markdownPath);
  ensureParentDir(historyYaml);
  writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  writeFileSync(markdownPath, `${markdown}\n`, "utf8");
  writeFileSync(historyYaml, `${YAML.dump(history, { lineWidth: 120, noRefs: true })}\n`, "utf8");

  console.log(JSON.stringify({
    json: jsonPath,
    markdown: markdownPath,
    history: historyYaml,
    totals: report.totals,
  }, null, 2));
}

await main();
