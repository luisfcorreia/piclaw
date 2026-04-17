#!/usr/bin/env bun
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

type TemplateConfig = {
  width: number;
  height: number;
  title: string;
  subtitle_prefix: string;
  live_summary_title: string;
  cold_rss_title: string;
  cold_elapsed_title: string;
  max_bars: number;
};

type ColdRow = {
  timestamp: string;
  commit: string;
  dirty: string;
  scenario: string;
  elapsedMs: number;
  rssDeltaMb: number;
  toolCount: number | null;
  notes: string;
};

type LiveRow = {
  timestamp: string;
  commit: string;
  dirty: string;
  scenario: string;
  rssMb: number;
  pssMb: number | null;
  cgroupMb: number | null;
  vmhwmMb: number | null;
  heapUsedMb: number | null;
  externalMb: number | null;
  cachedMain: number | null;
  activeChats: number | null;
  prewarmQueue: number | null;
  notes: string;
};

type TableRow = Record<string, string>;

const DEFAULT_TEMPLATE: TemplateConfig = {
  width: 1200,
  height: 780,
  title: "Piclaw RAM reduction progress",
  subtitle_prefix: "Generated from docs/performance/memory-footprint-history.md",
  live_summary_title: "Current live service snapshot",
  cold_rss_title: "Cold-session RSS delta (MB)",
  cold_elapsed_title: "Cold-session elapsed time (ms)",
  max_bars: 8,
};

function parseArgs(argv: string[]) {
  const options = {
    input: "docs/performance/memory-footprint-history.md",
    output: "docs/performance/memory-progress-2026-04-17.svg",
    template: "docs/performance/memory-progress.template.json",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === "--input" && next) {
      options.input = next;
      i += 1;
      continue;
    }
    if (arg === "--output" && next) {
      options.output = next;
      i += 1;
      continue;
    }
    if (arg === "--template" && next) {
      options.template = next;
      i += 1;
      continue;
    }
  }

  return options;
}

function parseMarkdownTableSection(markdown: string, heading: string): TableRow[] {
  const lines = markdown.split(/\r?\n/);
  const headingIndex = lines.findIndex((line) => line.trim() === heading.trim());
  if (headingIndex < 0) return [];

  let start = headingIndex + 1;
  while (start < lines.length && !lines[start].trim().startsWith("|")) start += 1;
  if (start + 1 >= lines.length) return [];

  const header = splitTableLine(lines[start]);
  const rows: TableRow[] = [];
  for (let i = start + 2; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim().startsWith("|")) break;
    const cells = splitTableLine(line);
    if (cells.length === 0) continue;
    const row: TableRow = {};
    for (let col = 0; col < header.length; col += 1) {
      row[header[col]] = cells[col] ?? "";
    }
    rows.push(row);
  }
  return rows;
}

function splitTableLine(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function stripMarkdown(value: string): string {
  return String(value || "")
    .replace(/`/g, "")
    .replace(/\*$/g, "")
    .trim();
}

function parseNumberCell(value: string): number | null {
  const normalized = stripMarkdown(value).replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  if (!match) return null;
  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseIntCell(value: string): number | null {
  const parsed = parseNumberCell(value);
  return parsed === null ? null : Math.round(parsed);
}

function shortScenarioLabel(scenario: string): [string, string] {
  const value = scenario.toLowerCase();
  if (value.includes("empty-workspace")) return ["Empty", "baseline"];
  if (value.includes("before removing workspace-local extensions")) return ["Before", "ext rm"];
  if (value.includes("after removing workspace-local extensions")) return ["After", "ext rm"];
  if (value.includes("background indexing disabled")) return ["BG", "indexer"];
  if (value.includes("redundant per-session startup hooks")) return ["Hook", "trim"];
  if (value.includes("bundled-extension gating") && value.includes("non-web")) return ["Gate", "non-web"];
  if (value.includes("bundled-extension gating") && value.includes("web")) return ["Gate", "web"];
  if (value.includes("lazy-loading") || value.includes("lazy-loaded") || value.includes("office/cdp")) return ["Lazy", "heavy"];
  if (value.includes("aggressive") && value.includes("index")) return ["Indexer", "trim"];

  const words = stripMarkdown(scenario)
    .replace(/benchmark/gi, "")
    .replace(/real/gi, "")
    .replace(/workspace/gi, "")
    .replace(/cold-session/gi, "")
    .split(/\s+/)
    .filter(Boolean);
  return [words[0] ?? "Step", words[1] ?? "update"];
}

function parseColdRows(markdown: string): ColdRow[] {
  return parseMarkdownTableSection(markdown, "## Fresh-process cold-session benchmarks")
    .map((row) => ({
      timestamp: stripMarkdown(row["Timestamp (UTC)"] ?? ""),
      commit: stripMarkdown(row["Commit"] ?? ""),
      dirty: stripMarkdown(row["Dirty"] ?? ""),
      scenario: stripMarkdown(row["Scenario"] ?? ""),
      elapsedMs: parseNumberCell(row["Elapsed"] ?? "") ?? 0,
      rssDeltaMb: parseNumberCell(row["RSS delta"] ?? "") ?? 0,
      toolCount: parseIntCell(row["Tool count"] ?? ""),
      notes: stripMarkdown(row["Notes"] ?? ""),
    }))
    .filter((row) => row.scenario && row.elapsedMs > 0 && row.rssDeltaMb > 0);
}

function parseLiveRows(markdown: string): LiveRow[] {
  return parseMarkdownTableSection(markdown, "## Live service snapshots")
    .map((row) => ({
      timestamp: stripMarkdown(row["Timestamp (UTC)"] ?? ""),
      commit: stripMarkdown(row["Commit"] ?? ""),
      dirty: stripMarkdown(row["Dirty"] ?? ""),
      scenario: stripMarkdown(row["Scenario"] ?? ""),
      rssMb: parseNumberCell(row["RSS"] ?? "") ?? 0,
      pssMb: parseNumberCell(row["PSS"] ?? ""),
      cgroupMb: parseNumberCell(row["cgroup current"] ?? ""),
      vmhwmMb: parseNumberCell(row["VmHWM"] ?? ""),
      heapUsedMb: parseNumberCell(row["Heap used"] ?? ""),
      externalMb: parseNumberCell(row["External"] ?? ""),
      cachedMain: parseIntCell(row["Cached main"] ?? ""),
      activeChats: parseIntCell(row["Active chats"] ?? ""),
      prewarmQueue: parseIntCell(row["Prewarm queue"] ?? ""),
      notes: stripMarkdown(row["Notes"] ?? ""),
    }))
    .filter((row) => row.scenario && row.rssMb > 0);
}

function niceCeil(maxValue: number, tickCount: number): number {
  if (!(maxValue > 0)) return 1;
  const roughStep = maxValue / Math.max(1, tickCount);
  const power = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const normalized = roughStep / power;
  const stepBase = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  const step = stepBase * power;
  return Math.ceil(maxValue / step) * step;
}

function formatPercentDelta(from: number, to: number): string {
  if (!(from > 0)) return "0.0%";
  const pct = ((to - from) / from) * 100;
  const rounded = Math.round(pct * 10) / 10;
  return `${rounded > 0 ? "+" : ""}${rounded.toFixed(1)}%`;
}

function formatNumber(value: number, digits = 1): string {
  return value.toFixed(digits).replace(/\.0$/, "");
}

function escapeXml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderBars(rows: ColdRow[], values: number[], chart: { x: number; y: number; width: number; height: number; maxValue: number; fill: string; labelY: number; className: string; }) {
  const count = rows.length;
  const gap = 16;
  const barWidth = Math.max(24, (chart.width - gap * (count - 1)) / Math.max(1, count));
  const result: string[] = [];

  for (let index = 0; index < count; index += 1) {
    const value = values[index] ?? 0;
    const barHeight = chart.maxValue > 0 ? (value / chart.maxValue) * chart.height : 0;
    const x = chart.x + index * (barWidth + gap);
    const y = chart.y + chart.height - barHeight;
    result.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}" rx="10" fill="${chart.fill}"/>`);
    result.push(`<text x="${(x + barWidth / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" text-anchor="middle" class="value">${escapeXml(formatNumber(value))}</text>`);

    const [line1, line2] = shortScenarioLabel(rows[index].scenario);
    result.push(`<text x="${(x + barWidth / 2).toFixed(1)}" y="${chart.labelY}" text-anchor="middle" class="small">${escapeXml(line1)}</text>`);
    result.push(`<text x="${(x + barWidth / 2).toFixed(1)}" y="${chart.labelY + 16}" text-anchor="middle" class="small">${escapeXml(line2)}</text>`);
  }

  return result.join("\n");
}

function renderGrid(chart: { x: number; y: number; width: number; height: number; maxValue: number; tickCount: number; axisX: number; }) {
  const lines: string[] = [];
  for (let tick = 0; tick <= chart.tickCount; tick += 1) {
    const ratio = tick / chart.tickCount;
    const y = chart.y + chart.height - ratio * chart.height;
    const value = (chart.maxValue / chart.tickCount) * tick;
    lines.push(`<line x1="${chart.x}" y1="${y.toFixed(1)}" x2="${chart.x + chart.width}" y2="${y.toFixed(1)}" stroke="#233045" stroke-width="1"/>`);
    lines.push(`<text x="${chart.axisX}" y="${(y + 4).toFixed(1)}" class="axis">${escapeXml(formatNumber(value))}</text>`);
  }
  return lines.join("\n");
}

function renderSvg(config: TemplateConfig, inputPath: string, coldRows: ColdRow[], liveRows: LiveRow[]): string {
  if (coldRows.length === 0) {
    throw new Error("No fresh-process cold-session benchmark rows found in memory history.");
  }

  const displayedColdRows = coldRows.slice(-config.max_bars);
  const latestCold = displayedColdRows[displayedColdRows.length - 1];
  const baselineCold = coldRows.find((row) => !/empty-workspace/i.test(row.scenario)) ?? coldRows[0];
  const latestLive = liveRows[liveRows.length - 1] ?? null;

  const rssValues = displayedColdRows.map((row) => row.rssDeltaMb);
  const elapsedValues = displayedColdRows.map((row) => row.elapsedMs);
  const rssMax = niceCeil(Math.max(...rssValues), 3);
  const elapsedMax = niceCeil(Math.max(...elapsedValues), 4);
  const rssChange = formatPercentDelta(baselineCold.rssDeltaMb, latestCold.rssDeltaMb);
  const elapsedChange = formatPercentDelta(baselineCold.elapsedMs, latestCold.elapsedMs);
  const subtitleCommit = latestCold.commit || latestLive?.commit || "(unknown commit)";
  const liveSummary = latestLive
    ? `${formatNumber(latestLive.rssMb)} MB RSS${latestLive.pssMb !== null ? ` · ${formatNumber(latestLive.pssMb)} MB PSS` : ""}`
    : "No live-service snapshot recorded yet";
  const liveDetail = latestLive
    ? `${latestLive.cachedMain ?? 0} cached main · ${latestLive.activeChats ?? 0} active chats · ${latestLive.prewarmQueue ?? 0} prewarm queue`
    : "Append a live snapshot row to populate this card.";

  const rssGrid = renderGrid({ x: 80, y: 300, width: 480, height: 220, maxValue: rssMax, tickCount: 3, axisX: 38 });
  const elapsedGrid = renderGrid({ x: 650, y: 300, width: 480, height: 220, maxValue: elapsedMax, tickCount: 4, axisX: 610 });
  const rssBars = renderBars(displayedColdRows, rssValues, { x: 95, y: 300, width: 420, height: 220, maxValue: rssMax, fill: "url(#barBlue)", labelY: 546, className: "rss" });
  const elapsedBars = renderBars(displayedColdRows, elapsedValues, { x: 665, y: 300, width: 420, height: 220, maxValue: elapsedMax, fill: "url(#barGreen)", labelY: 546, className: "elapsed" });

  const footerLines = [
    `• Cold-session RSS delta: ${formatNumber(baselineCold.rssDeltaMb)} MB → ${formatNumber(latestCold.rssDeltaMb)} MB (${rssChange}).`,
    `• Cold-session elapsed: ${formatNumber(baselineCold.elapsedMs, 0)} ms → ${formatNumber(latestCold.elapsedMs, 0)} ms (${elapsedChange}).`,
    latestLive
      ? `• Latest live snapshot: ${formatNumber(latestLive.rssMb)} MB RSS${latestLive.pssMb !== null ? ` / ${formatNumber(latestLive.pssMb)} MB PSS` : ""}.`
      : "• No live-service snapshot recorded yet in the history file.",
    `• Latest milestone: ${latestCold.scenario}.`,
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(config.title)}</title>
  <desc id="desc">Cold-session bootstrap progress and live-service memory history from ${escapeXml(inputPath)}.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
    <style>
      .h1 { font: 700 28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #f8fafc; }
      .h2 { font: 700 18px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #e5e7eb; }
      .body { font: 13px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #cbd5e1; }
      .small { font: 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #94a3b8; }
      .axis { font: 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #94a3b8; }
      .value { font: 700 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #f8fafc; }
    </style>
  </defs>

  <rect x="0" y="0" width="${config.width}" height="${config.height}" fill="url(#bg)"/>

  <text x="40" y="48" class="h1">${escapeXml(config.title)}</text>
  <text x="40" y="74" class="body">${escapeXml(config.subtitle_prefix)} · latest commit ${escapeXml(subtitleCommit)} · ${displayedColdRows.length} cold-session points</text>

  <g filter="url(#shadow)">
    <rect x="40" y="100" width="350" height="110" rx="18" fill="#111827" stroke="#1f2937"/>
    <rect x="425" y="100" width="350" height="110" rx="18" fill="#111827" stroke="#1f2937"/>
    <rect x="810" y="100" width="350" height="110" rx="18" fill="#111827" stroke="#1f2937"/>
  </g>

  <text x="62" y="134" class="small">Real workspace cold-session RSS delta</text>
  <text x="62" y="172" class="h1" fill="#60a5fa">${escapeXml(rssChange)}</text>
  <text x="62" y="194" class="body">${escapeXml(formatNumber(baselineCold.rssDeltaMb))} MB → ${escapeXml(formatNumber(latestCold.rssDeltaMb))} MB</text>

  <text x="447" y="134" class="small">Real workspace cold-session elapsed time</text>
  <text x="447" y="172" class="h1" fill="#34d399">${escapeXml(elapsedChange)}</text>
  <text x="447" y="194" class="body">${escapeXml(formatNumber(baselineCold.elapsedMs, 0))} ms → ${escapeXml(formatNumber(latestCold.elapsedMs, 0))} ms</text>

  <text x="832" y="134" class="small">${escapeXml(config.live_summary_title)}</text>
  <text x="832" y="172" class="h1" fill="#f8fafc">${escapeXml(liveSummary)}</text>
  <text x="832" y="194" class="body">${escapeXml(liveDetail)}</text>

  <g filter="url(#shadow)">
    <rect x="40" y="240" width="550" height="340" rx="22" fill="#111827" stroke="#1f2937"/>
    <rect x="610" y="240" width="550" height="340" rx="22" fill="#111827" stroke="#1f2937"/>
  </g>

  <text x="60" y="274" class="h2">${escapeXml(config.cold_rss_title)}</text>
  <text x="630" y="274" class="h2">${escapeXml(config.cold_elapsed_title)}</text>

  ${rssGrid}
  ${elapsedGrid}
  ${rssBars}
  ${elapsedBars}

  <g filter="url(#shadow)">
    <rect x="40" y="620" width="1120" height="130" rx="22" fill="#111827" stroke="#1f2937"/>
  </g>
  <text x="60" y="652" class="h2">Generated summary</text>
  <text x="60" y="678" class="body">${escapeXml(footerLines[0])}</text>
  <text x="60" y="700" class="body">${escapeXml(footerLines[1])}</text>
  <text x="60" y="722" class="body">${escapeXml(footerLines[2])}</text>
  <text x="60" y="744" class="body">${escapeXml(footerLines[3])}</text>
</svg>`;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const projectRoot = path.resolve(import.meta.dir, "..", "..");
  const inputPath = path.resolve(projectRoot, options.input);
  const outputPath = path.resolve(projectRoot, options.output);
  const templatePath = path.resolve(projectRoot, options.template);

  const markdown = readFileSync(inputPath, "utf8");
  const template = Bun.file(templatePath).exists()
    ? { ...DEFAULT_TEMPLATE, ...JSON.parse(readFileSync(templatePath, "utf8")) as Partial<TemplateConfig> }
    : DEFAULT_TEMPLATE;

  const coldRows = parseColdRows(markdown);
  const liveRows = parseLiveRows(markdown);
  const svg = renderSvg(template, path.relative(projectRoot, inputPath), coldRows, liveRows);
  writeFileSync(outputPath, svg);
  console.log(JSON.stringify({ output: path.relative(projectRoot, outputPath), cold_rows: coldRows.length, live_rows: liveRows.length }, null, 2));
}

main();
