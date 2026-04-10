/// <reference path="./pi-coding-agent.d.ts" />
/**
 * Shared M365 runtime infrastructure.
 *
 * This file intentionally registers **no tools**. Instead, it holds the plumbing used
 * by both extensions in this workspace:
 *
 * - `m365`              → redistributable/core Graph, Teams chat, OneDrive, SharePoint tools
 * - `m365-transcripts`  → private recording/transcript/filmstrip tools
 *
 * The goal of the split is licensing/distribution hygiene: the public extension can
 * stay focused on normal M365 operations, while the private extension can depend on
 * heavier CDP-driven recording logic without forcing that code into the public package.
 *
 * Main responsibilities in this file:
 * 1. Discover / launch Edge with a CDP port.
 * 2. Cache Graph / Teams chatsvc tokens and SharePoint cookies in memory for the
 *    current process only.
 * 3. Expose low-level CDP helpers (`cdpConnect`, `cdpEval`, `cdpWaitFor`, ...).
 * 4. Wrap Microsoft 365 endpoints with opinionated fetch helpers (`graphFetch`,
 *    `chatsvcFetch`, `spoFetch`).
 * 5. Provide higher-level OneDrive / sharing helpers used by the messaging tools.
 *
 * In other words: if `index.ts` contains the user-facing tools, this file contains the
 * transport, auth, browser automation, and file-sharing substrate they all rely on.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { execFileSync, execSync, spawn, type ChildProcess } from "node:child_process";

// ═══════════════════════════════════════════════════════════════════════════
// AUTH LAYER
// ═══════════════════════════════════════════════════════════════════════════




const PROFILE_DIR = path.join(os.tmpdir(), "m365tools-edge-profile");
export const USE_TEMP_EDGE_PROFILE = (process.env["M365_USE_TEMP_EDGE_PROFILE"] ?? "").toLowerCase() === "true";
const M365_YOLO = /^(1|true|yes|on)$/i.test((process.env["PICLAW_M365_YOLO"] ?? "").trim());
export const CDP_PORT_START = 9224;
const TEAMS_CLIENT_ID = "5e3ce6c0-2b1f-4285-8d4b-75ee78787346";
const TEAMS_START_URL = "https://teams.microsoft.com/v2";
const TEAMS_REDIRECT_URI = "https://teams.microsoft.com/go";

// Tenant ID: env override, or auto-discovered from Graph token on first use.
// Default to "common" for multi-tenant login; resolved to actual tenant after first auth.
let _tenantId = process.env["M365_TENANT_ID"] || "";
const CONSUMER_TENANT_ID = "9188040d-6c67-4c5b-b112-36a304b66dad";
let _isConsumer = false;
function getTenantId(): string {
	return _tenantId || "common";
}
function isConsumerAccount(): boolean {
	return _isConsumer;
}
function setTenantIdFromToken(token: string): void {
	if (_tenantId) return; // already set
	try {
		const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
		if (payload.tid) {
			_tenantId = payload.tid;
			_isConsumer = payload.tid === CONSUMER_TENANT_ID;
		}
	} catch { /* best-effort fallback / }
}

// Chatsvc region: auto-discovered from Teams token or environment.
// Teams chatsvc uses regional endpoints (emea, amer, apac, etc.)
let _chatsvcRegion = process.env["M365_CHATSVC_REGION"] || "";
let _chatsvcBaseUrl = "";
function getChatsvcBaseUrl(): string {
	if (_chatsvcBaseUrl) return _chatsvcBaseUrl;
	const region = _chatsvcRegion || "emea"; // fallback until discovered
	return `https://teams.cloud.microsoft/api/chatsvc/${region}/v1`;
}
function setChatsvcFromToken(token: string): void {
	if (_chatsvcRegion) return;
	try {
		// The chatsvc token's aud or the regionGtms claim can indicate region
		const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
		// Check for region hints in various claims
		const skypeRegion = payload.regionGtms || payload.aud || "";
		if (skypeRegion.includes("apac")) _chatsvcRegion = "apac";
		else if (skypeRegion.includes("amer") || skypeRegion.includes("noam")) _chatsvcRegion = "amer";
		else if (skypeRegion.includes("emea")) _chatsvcRegion = "emea";
		// Also check the chatsvcUrl if embedded
		if (payload.chatsvcUrl) {
			_chatsvcBaseUrl = payload.chatsvcUrl.replace(/\/+$/, "");
			const regionMatch = _chatsvcBaseUrl.match(/chatsvc\/([a-z]+)\//);
			if (regionMatch) _chatsvcRegion = regionMatch[1];
		}
	} catch { /* best-effort fallback / }
}

// ── Edge-compatible HTTP headers ────────────────────────────────────────
// All outgoing requests use Edge-family headers so M365 backends treat them
// similarly to real interactive browser traffic.
//
// Windows remains the primary tested host, but the browser locator below also
// accepts explicit overrides and common Edge/Chromium paths on macOS/Linux so
// the extension can be exercised on any desktop platform.

const DEFAULT_EDGE_VERSION = "130.0.0.0";

function parseBrowserVersion(raw: string): string | null {
	const match = String(raw ?? "").match(/(\d+\.\d+\.\d+\.\d+)/);
	return match?.[1] ?? null;
}

function edgeUaPlatformSegment(): string {
	switch (process.platform) {
		case "darwin":
			return "Macintosh; Intel Mac OS X 10_15_7";
		case "linux":
			return "X11; Linux x86_64";
		default:
			return "Windows NT 10.0; Win64; x64";
	}
}

function edgePlatformHeader(): string {
	switch (process.platform) {
		case "darwin":
			return '"macOS"';
		case "linux":
			return '"Linux"';
		default:
			return '"Windows"';
	}
}

function findExecutableOnPath(names: string[]): string | null {
	const pathEntries = String(process.env["PATH"] ?? "")
		.split(path.delimiter)
		.map((entry) => entry.trim())
		.filter(Boolean);
	for (const name of names) {
		for (const entry of pathEntries) {
			const candidate = path.join(entry, name);
			if (fs.existsSync(candidate)) return candidate;
		}
	}
	return null;
}

export function getEdgeVersion(): string {
	try {
		const edgePath = findEdge();
		if (!edgePath) return DEFAULT_EDGE_VERSION;
		const out = execFileSync(edgePath, ["--version"], {
			encoding: "utf-8",
			stdio: ["ignore", "pipe", "ignore"],
			timeout: 3000,
		}).trim();
		return parseBrowserVersion(out) ?? DEFAULT_EDGE_VERSION;
	} catch { /* best-effort fallback / }
	return DEFAULT_EDGE_VERSION;
}

let _edgeVersion: string | null = null;
export function edgeVersion(): string {
	if (!_edgeVersion) _edgeVersion = getEdgeVersion();
	return _edgeVersion;
}

export function edgeUserAgent(): string {
	const ver = edgeVersion();
	const major = ver.split(".")[0];
	return `Mozilla/5.0 (${edgeUaPlatformSegment()}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${major}.0.0.0 Safari/537.36 Edg/${ver}`;
}


export function edgeHeaders(extra?: Record<string, string>): Record<string, string> {
	return {
		"User-Agent": edgeUserAgent(),
		"Accept-Language": "en-US,en;q=0.9",
		"sec-ch-ua": `"Microsoft Edge";v="${edgeVersion().split(".")[0]}", "Chromium";v="${edgeVersion().split(".")[0]}", "Not=A?Brand";v="99"`,
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": edgePlatformHeader(),
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		...extra,
	};
}

// MANDATORY RULE:
// All HTTP(S) requests in this TypeScript extension MUST go through edgeFetch()
// (or a higher-level helper that itself uses edgeFetch, such as graphFetch,
// chatsvcFetch, or spoFetch). Do NOT call fetch() directly for network I/O,
// because requests must carry Edge-like headers for auth/session parity.
export async function edgeFetch(url: string, init: RequestInit = {}, extraHeaders: Record<string, string> = {}): Promise<Response> {
	const mergedHeaders = {
		...edgeHeaders(),
		...(init.headers as Record<string, string> ?? {}),
		...extraHeaders,
	};
	// Default 60s timeout for all network requests — never hang indefinitely
	const signal = init.signal ?? AbortSignal.timeout(60_000);
	return fetch(url, { ...init, headers: mergedHeaders, signal });
}

// ── Helpers ─────────────────────────────────────────────────────────────

export function ensureDir(dir: string) {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function findEdge(): string | null {
	const override = (process.env["M365_EDGE_PATH"] ?? "").trim();
	if (override && fs.existsSync(override)) return override;

	// Browser preference order is always Edge → Chrome → Chromium.
	// That priority is applied consistently across Windows, macOS, Linux,
	// and PATH fallback resolution.
	const platformCandidates = process.platform === "win32"
		? [
			// Edge
			path.join(process.env["ProgramFiles(x86)"] ?? "", "Microsoft/Edge/Application/msedge.exe"),
			path.join(process.env["ProgramFiles"] ?? "", "Microsoft/Edge/Application/msedge.exe"),
			path.join(process.env["LOCALAPPDATA"] ?? "", "Microsoft/Edge/Application/msedge.exe"),
			// Chrome
			path.join(process.env["ProgramFiles(x86)"] ?? "", "Google/Chrome/Application/chrome.exe"),
			path.join(process.env["ProgramFiles"] ?? "", "Google/Chrome/Application/chrome.exe"),
			path.join(process.env["LOCALAPPDATA"] ?? "", "Google/Chrome/Application/chrome.exe"),
			// Chromium
			path.join(process.env["ProgramFiles"] ?? "", "Chromium/Application/chrome.exe"),
			path.join(process.env["LOCALAPPDATA"] ?? "", "Chromium/Application/chrome.exe"),
		]
		: process.platform === "darwin"
			? [
				// Edge
				"/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
				// Chrome
				"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
				// Chromium
				"/Applications/Chromium.app/Contents/MacOS/Chromium",
			]
			: [
				// Edge
				"/usr/bin/microsoft-edge",
				"/usr/bin/microsoft-edge-stable",
				"/usr/bin/msedge",
				// Chrome
				"/usr/bin/google-chrome",
				"/usr/bin/google-chrome-stable",
				// Chromium
				"/usr/bin/chromium",
				"/usr/bin/chromium-browser",
			];

	for (const candidate of platformCandidates) {
		if (candidate && fs.existsSync(candidate)) return candidate;
	}

	const pathNames = process.platform === "win32"
		? [
			"msedge.exe", "msedge", "microsoft-edge.exe", "microsoft-edge",
			"chrome.exe", "chrome", "google-chrome.exe", "google-chrome",
			"chromium.exe", "chromium", "chromium-browser.exe", "chromium-browser",
		]
		: [
			"microsoft-edge", "microsoft-edge-stable", "msedge",
			"google-chrome", "google-chrome-stable", "chrome",
			"chromium", "chromium-browser",
		];
	return findExecutableOnPath(pathNames);
}

export function decodeJwt(token: string): Record<string, any> {
	try {
		const payload = token.split(".")[1];
		const padded = payload + "=".repeat((4 - (payload.length % 4)) % 4);
		return JSON.parse(Buffer.from(padded, "base64url").toString("utf-8"));
	} catch {
		return {};
	}
}

// Localhost/CDP exception: this helper is only for local Edge DevTools endpoints
// (http://localhost:PORT/json...). It is NOT used for external M365 HTTP(S) traffic.
export async function httpGet(url: string, timeoutMs = 3000): Promise<any> {
	const resp = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
	const text = await resp.text();
	try { return JSON.parse(text); } catch { return text; }
}

/** HTTP PUT to a local CDP endpoint (e.g. /json/new). */
export async function httpPut(url: string, timeoutMs = 5000): Promise<any> {
	const resp = await fetch(url, { method: "PUT", signal: AbortSignal.timeout(timeoutMs) });
	const text = await resp.text();
	try { return JSON.parse(text); } catch { return text; }
}

export function sleep(ms: number) {
	return new Promise((r) => setTimeout(r, ms));
}

const BROWSER_PROCESS_NAMES = ["msedge.exe", "chrome.exe", "chromium.exe"];
const BROWSER_COMMAND_HINTS = ["msedge", "microsoft-edge", "chrome", "google-chrome", "chromium", "chromium-browser"];

function listUnixProcesses(): Array<{ pid: number; command: string }> {
	if (process.platform === "win32") return [];
	try {
		const output = execFileSync("ps", ["-ax", "-o", "pid=", "-o", "command="], {
			encoding: "utf-8",
			stdio: ["ignore", "pipe", "ignore"],
			timeout: 5000,
		});
		return output
			.split(/\r?\n/)
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line) => {
				const match = line.match(/^(\d+)\s+(.*)$/);
				if (!match) return null;
				return { pid: Number(match[1]), command: match[2] };
			})
			.filter((entry): entry is { pid: number; command: string } => Boolean(entry) && Number.isFinite(entry.pid) && entry.pid > 0);
	} catch {
		return [];
	}
}

function commandLooksLikeManagedBrowser(command: string): boolean {
	const normalized = command.toLowerCase();
	return BROWSER_COMMAND_HINTS.some((hint) => normalized.includes(hint));
}

function commandHasManagedCdpPort(command: string): boolean {
	return Array.from({ length: 10 }, (_, i) => `--remote-debugging-port=${CDP_PORT_START + i}`)
		.some((flag) => command.includes(flag));
}

function killProcessTree(pid: number | undefined | null) {
	if (!pid || pid <= 0) return;
	try {
		if (process.platform === "win32") {
			execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore", timeout: 5000 });
			return;
		}
		try {
			process.kill(-pid, "SIGKILL");
			return;
		} catch { /* best-effort fallback / }
		try {
			process.kill(pid, "SIGKILL");
		} catch { /* best-effort fallback / }
	} catch { /* best-effort fallback / }
}

function killMatchingUnixBrowserProcesses(predicate: (command: string) => boolean) {
	for (const proc of listUnixProcesses()) {
		if (!commandLooksLikeManagedBrowser(proc.command)) continue;
		if (!predicate(proc.command)) continue;
		killProcessTree(proc.pid);
	}
}

export function killStaleEdge() {
	if (!USE_TEMP_EDGE_PROFILE) return; // Don't kill the user's normal browser session when not using our temp profile.
	try {
		if (process.platform === "win32") {
			execSync(
				`powershell -NoProfile -Command "$browserNames = @('msedge.exe','chrome.exe','chromium.exe'); Get-CimInstance Win32_Process | Where-Object { $_.Name -in $browserNames -and $_.CommandLine -like '*--remote-debugging-port=*' -and $_.CommandLine -like '*m365tools-edge-profile*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"`,
				{ stdio: "ignore", timeout: 10000 },
			);
			return;
		}
		killMatchingUnixBrowserProcesses((command) => command.includes(PROFILE_DIR) || command.includes("m365tools-edge-profile"));
	} catch { /* best-effort fallback / }
}

function killEdgeCdpProcesses() {
	try {
		if (process.platform === "win32") {
			const portsPattern = Array.from({ length: 10 }, (_, i) => CDP_PORT_START + i).join("|");
			const browserNames = BROWSER_PROCESS_NAMES.map((name) => `'${name}'`).join(",");
			execSync(
				`powershell -NoProfile -Command "$browserNames = @(${browserNames}); Get-CimInstance Win32_Process | Where-Object { $_.Name -in $browserNames -and $_.CommandLine -match '--remote-debugging-port=(${portsPattern})' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"`,
				{ stdio: "ignore", timeout: 10000 },
			);
			return;
		}
		killMatchingUnixBrowserProcesses((command) => commandHasManagedCdpPort(command));
	} catch { /* best-effort fallback / }
}

async function inspectCdpPort(port: number): Promise<"absent" | "healthy" | "unhealthy"> {
	let probeTargetId: string | null = null;
	try {
		const version: any = await httpGet(`http://localhost:${port}/json/version`, 2000);
		if (!version || typeof version !== "object") return "unhealthy";
		const targets: any[] = await httpGet(`http://localhost:${port}/json`, 3000);
		if (!Array.isArray(targets)) return "unhealthy";
		const probe: any = await httpPut(`http://localhost:${port}/json/new?${encodeURIComponent("about:blank")}`, 5000);
		probeTargetId = typeof probe?.id === "string" ? probe.id : null;
		if (!probeTargetId && !probe?.webSocketDebuggerUrl) return "unhealthy";
		return "healthy";
	} catch (err: any) {
		const message = String(err?.message ?? err ?? "");
		if (/ECONNREFUSED|fetch failed|connect|network/i.test(message)) return "absent";
		return "unhealthy";
	} finally {
		if (probeTargetId) {
			try { await httpPut(`http://localhost:${port}/json/close/${probeTargetId}`, 3000); } catch { /* best-effort fallback / }
		}
	}
}

async function recycleUnhealthyEdgeCdp() {
	let sawUnhealthy = false;
	for (let p = CDP_PORT_START; p < CDP_PORT_START + 10; p++) {
		const state = await inspectCdpPort(p);
		if (state === "healthy") return;
		if (state === "unhealthy") sawUnhealthy = true;
	}
	if (!sawUnhealthy) return;
	if (USE_TEMP_EDGE_PROFILE) killStaleEdge();
	else killEdgeCdpProcesses();
	await sleep(1500);
}

export async function findFreePort(): Promise<number> {
	for (let p = CDP_PORT_START; p < CDP_PORT_START + 10; p++) {
		const state = await inspectCdpPort(p);
		if (state === "absent") return p;
	}
	throw new Error("No free CDP port");
}

export async function launchEdge(url: string, options?: { forceNewInstance?: boolean }): Promise<{ proc: ChildProcess; port: number }> {
	// For auth flows, we need a real browser window, not just a CDP tab.
	// Despite the historical function name, the launcher now accepts the first
	// compatible browser in our priority order: Edge → Chrome → Chromium.
	const forceNew = options?.forceNewInstance ?? false;

	// If a healthy compatible-browser CDP session already exists and we don't need a new instance, reuse it.
	// This is intentionally stricter than before: stale CDP endpoints are a common cause of
	// auth/transcript weirdness, and killing Edge manually was observed to unblock the tools.
	if (!forceNew) {
		const existingCdp = await findExistingCdpPort();
		if (existingCdp && !USE_TEMP_EDGE_PROFILE) {
			await httpPut(`http://localhost:${existingCdp}/json/new?${encodeURIComponent(url)}`, 5000);
			const dummyProc = { pid: 0, kill: () => {}, unref: () => {} } as any;
			return { proc: dummyProc, port: existingCdp };
		}
	}

	await recycleUnhealthyEdgeCdp();
	killStaleEdge();
	if (USE_TEMP_EDGE_PROFILE) ensureDir(PROFILE_DIR);
	const port = await findFreePort();
	const edgePath = findEdge();
	if (!edgePath) throw new Error("Compatible browser not found (searched Edge, Chrome, then Chromium)");

	const args = [
		`--remote-debugging-port=${port}`,
		...(USE_TEMP_EDGE_PROFILE ? [`--user-data-dir=${PROFILE_DIR}`] : []),
		"--no-first-run",
		"--disable-features=AutomationControlled",
		"--disable-default-apps",
		"--new-window",
		url,
	];
	const proc = spawn(edgePath, args, { detached: true, stdio: "ignore" });
	proc.unref();

	const deadline = Date.now() + 15000;
	while (Date.now() < deadline) {
		for (const p of [port, ...Array.from({ length: 5 }, (_, i) => CDP_PORT_START + i).filter((x) => x !== port)]) {
			if (await inspectCdpPort(p) === "healthy") {
				return { proc, port: p };
			}
		}
		await sleep(500);
	}
	throw new Error("Browser CDP did not start cleanly");
}

export function killProc(proc: ChildProcess) {
	killProcessTree(proc?.pid);
}

// ── Token Cache ─────────────────────────────────────────────────────────

interface TokenData {
	token: string;
	expires_at: number;
	base_url?: string;
	acquired_at?: string;
}

interface CookieData {
	name: string;
	value: string;
	domain: string;
	path?: string;
	secure?: boolean;
	httpOnly?: boolean;
	expires?: number;
}

// In-memory caches only — auth state lives for the lifetime of the current process.
const tokenMemCache: Record<string, TokenData> = {};
const cookieMemCache: Record<string, { cookies: CookieData[]; expiresAt: number }> = {};

function loadToken(source: string): TokenData | null {
	const now = Date.now() / 1000;
	const mem = tokenMemCache[source];
	if (!mem) return null;
	if (mem.expires_at <= now + 300) {
		delete tokenMemCache[source];
		return null;
	}
	if (source === "graph") setTenantIdFromToken(mem.token);
	if (source === "teams_chatsvc") setChatsvcFromToken(mem.token);
	return mem;
}

function saveToken(source: string, token: string, baseUrl?: string) {
	const claims = decodeJwt(token);
	const expiresAt = claims.exp ?? Math.floor(Date.now() / 1000) + 3000;
	tokenMemCache[source] = {
		token,
		expires_at: expiresAt,
		base_url: baseUrl,
		acquired_at: new Date().toISOString(),
	};
}

function cookieExpiresAt(cookies: CookieData[]): number {
	const now = Date.now() / 1000;
	const fedAuth = cookies.find((c) => c.name === "FedAuth");
	return fedAuth?.expires ?? now + 3000;
}

function loadCookies(host: string): CookieData[] | null {
	const now = Date.now() / 1000;
	const mem = cookieMemCache[host];
	if (!mem) return null;
	if (mem.expiresAt <= now + 300) {
		delete cookieMemCache[host];
		return null;
	}
	return mem.cookies;
}

function saveCookies(host: string, cookies: CookieData[]) {
	cookieMemCache[host] = {
		cookies,
		expiresAt: cookieExpiresAt(cookies),
	};
}

function clearTokenCache(source: string) {
	delete tokenMemCache[source];
}

/**
 * Pull the MSAL refresh token directly from the active Teams web client localStorage.
 *
 * This is the most reliable recovery path when cached access tokens have expired but the
 * browser session is still signed in. We can then redeem that refresh token for a fresh
 * Graph or Teams access token without depending on brittle redirect timing.
 */
async function extractTeamsRefreshToken(): Promise<string | null> {
	const existingPort = await findExistingCdpPort();
	if (!existingPort) return null;
	const targets: any[] = await httpGet(`http://localhost:${existingPort}/json`, 3000);
	const teamsV2 = targets.find((t: any) => t.type === "page" && t.url?.includes("teams.cloud.microsoft"));
	if (!teamsV2?.webSocketDebuggerUrl) return null;
	const ws = await connectDebuggerUrl(teamsV2.webSocketDebuggerUrl);
	try {
		const refreshToken = await cdpEval(ws, `(() => {
			const key = Object.keys(localStorage).find(k => k.includes('|refreshtoken|'));
			if (!key) return null;
			try {
				const val = JSON.parse(localStorage.getItem(key));
				return typeof val?.secret === 'string' && val.secret.length > 100 ? val.secret : null;
			} catch {
				return null;
			}
		})()`, false, 5000);
		return typeof refreshToken === "string" && refreshToken.length > 100 ? refreshToken : null;
	} finally {
		try { ws.close(); } catch { /* best-effort fallback / }
	}
}

/**
 * Redeem the Teams client's cached MSAL refresh token for a new access token for the
 * requested resource (`https://graph.microsoft.com`, `https://ic3.teams.office.com`, ...).
 */
async function redeemTeamsRefreshToken(resource: string): Promise<string | null> {
	const refreshToken = await extractTeamsRefreshToken();
	if (!refreshToken) return null;

	const body = new URLSearchParams({
		client_id: TEAMS_CLIENT_ID,
		grant_type: "refresh_token",
		refresh_token: refreshToken,
		resource,
	});

	const resp = await edgeFetch(`https://login.microsoftonline.com/${getTenantId()}/oauth2/token`, {
		method: "POST",
		headers: { "content-type": "application/x-www-form-urlencoded" },
		body: body.toString(),
	});
	if (!resp.ok) return null;
	const data: any = await resp.json();
	return typeof data?.access_token === "string" && data.access_token.length > 100 ? data.access_token : null;
}

// ── CDP WebSocket helpers ───────────────────────────────────────────────

export async function cdpConnect(port: number, urlFilter?: string): Promise<WebSocket> {
	const targets: any[] = await httpGet(`http://localhost:${port}/json`);
	let target = urlFilter ? targets.find((t) => t.type === "page" && t.url?.includes(urlFilter)) : null;
	if (!target) target = targets.find((t) => t.type === "page");
	if (!target?.webSocketDebuggerUrl) throw new Error("No CDP page target");
	return new Promise((resolve, reject) => {
		const ws = new WebSocket(target.webSocketDebuggerUrl);
		ws.addEventListener("open", () => resolve(ws));
		ws.addEventListener("error", () => reject(new Error("WS connect error")));
		setTimeout(() => reject(new Error("WS connect timeout")), 5000);
	});
}

let cdpIdCounter = 0;
export function cdpSend(ws: WebSocket, method: string, params?: any, sessionId?: string): number {
	const id = ++cdpIdCounter;
	const msg: any = { id, method };
	if (params) msg.params = params;
	if (sessionId) msg.sessionId = sessionId;
	ws.send(JSON.stringify(msg));
	return id;
}

export function cdpCollect(ws: WebSocket, timeoutMs: number): Promise<any[]> {
	return new Promise((resolve) => {
		const messages: any[] = [];
		const handler = (event: any) => {
			try {
				messages.push(JSON.parse(typeof event.data === "string" ? event.data : event.data.toString()));
			} catch { /* best-effort fallback / }
		};
		ws.addEventListener("message", handler);
		setTimeout(() => {
			ws.removeEventListener("message", handler);
			resolve(messages);
		}, timeoutMs);
	});
}

/** Evaluate JS in a CDP page and return the result. Handles awaitPromise for async expressions. */
export function cdpEval(ws: WebSocket, expression: string, awaitPromise = false, timeoutMs = 30000): Promise<any> {
	const id = ++cdpIdCounter;
	ws.send(JSON.stringify({ id, method: "Runtime.evaluate", params: { expression, returnByValue: true, awaitPromise } }));
	return new Promise((resolve) => {
		const timer = setTimeout(() => { ws.removeEventListener("message", handler); resolve(null); }, timeoutMs);
		const handler = (event: any) => {
			try {
				const msg = JSON.parse(typeof event.data === "string" ? event.data : event.data.toString());
				if (msg.id === id) { ws.removeEventListener("message", handler); clearTimeout(timer); resolve(msg.result?.result?.value ?? null); }
			} catch { /* best-effort fallback / }
		};
		ws.addEventListener("message", handler);
	});
}

export async function cdpWaitFor(
	ws: WebSocket,
	expression: string,
	predicate: (value: any) => boolean,
	timeoutMs = 30000,
	intervalMs = 500,
): Promise<any> {
	const deadline = Date.now() + timeoutMs;
	let lastValue: any = null;
	while (Date.now() < deadline) {
		lastValue = await cdpEval(ws, expression, false, Math.min(timeoutMs, 10000));
		if (predicate(lastValue)) return lastValue;
		await sleep(intervalMs);
	}
	throw new Error(`Timeout waiting for page state: ${expression.substring(0, 80)}`);
}

interface FreshAuthBrowserSession {
	proc: ChildProcess;
	port: number;
	ws: WebSocket | null;
	tabId: string | null;
	reusedExistingPort: boolean;
}

function escapeConsentHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;");
}

function buildM365ConsentHtml(purpose: string, buttonText = "I understand — continue to sign-in"): string {
	const safePurpose = escapeConsentHtml(purpose);
	const safeButton = escapeConsentHtml(buttonText);
	return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>M365 experimental consent</title>
  <script>
    window.__m365ConsentGo = function () {
      try { window.name = "__m365_consent_approved__"; } catch { /* best-effort fallback / }
      try { document.body.setAttribute("data-m365-approved", "1"); } catch { /* best-effort fallback / }
      try {
        var btn = document.getElementById("m365-consent-continue");
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Opening sign-in...";
          btn.style.opacity = "0.75";
          btn.style.cursor = "progress";
        }
        var status = document.getElementById("m365-consent-status");
        if (status) status.textContent = "Consent received. Opening sign-in...";
      } catch { /* best-effort fallback / }
      try {
        if (typeof window.__m365ConsentApproved === "function") {
          window.__m365ConsentApproved(JSON.stringify({ approved: true, at: Date.now() }));
        }
      } catch { /* best-effort fallback / }
    };
  </script>
</head>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at top,#17304a 0%,#0c1724 42%,#09111b 100%);font:16px/1.45 'Segoe UI',system-ui,-apple-system,sans-serif;color:#e7edf5;">
  <div style="width:min(760px,calc(100vw - 48px));border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:28px 30px 24px;background:rgba(10,16,24,.88);box-shadow:0 30px 80px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.06);backdrop-filter:blur(14px);">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
      <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#4aa3ff,#7b61ff);display:grid;place-items:center;font-size:22px;font-weight:700;box-shadow:0 10px 30px rgba(74,163,255,.28);">M</div>
      <div>
        <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#8fb7de;">M365 tools</div>
        <h1 style="margin:2px 0 0;font-size:28px;line-height:1.15;">Permission needed to continue</h1>
      </div>
    </div>

    <p style="margin:0 0 14px;color:#d2dcea;">
      The requested M365 tool needs a <strong>fresh authentication token or cookie</strong>.
      To obtain it, the agent will open the sign-in flow in your existing browser session and wait for you to complete it.
    </p>

    <div style="display:grid;grid-template-columns:1fr;gap:10px;margin:18px 0 20px;">
      <div style="padding:12px 14px;border-radius:14px;background:#101b28;border:1px solid rgba(255,255,255,.08);">
        <div style="font-weight:600;margin-bottom:4px;">What will happen next</div>
        <div style="color:#c8d4e3;">${safePurpose}</div>
      </div>
      <div style="padding:12px 14px;border-radius:14px;background:#1d1620;border:1px solid rgba(255,255,255,.08);">
        <div style="font-weight:600;margin-bottom:4px;color:#ffd8e1;">Experimental feature notice</div>
        <div style="color:#f0c8d2;">
          These M365 tools are <strong>experimental</strong>. By continuing, you acknowledge that you are using them <strong>at your own risk</strong>.
        </div>
      </div>
    </div>

    <div style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-top:20px;">
      <div id="m365-consent-status" style="color:#8ea3bb;font-size:13px;">Close this tab if you do not want the tool to continue.</div>
      <button id="m365-consent-continue" type="button" onclick="window.__m365ConsentGo()" style="appearance:none;border:0;border-radius:12px;padding:12px 18px;background:linear-gradient(135deg,#58a6ff,#7b61ff);color:white;font-weight:700;font-size:15px;cursor:pointer;box-shadow:0 12px 26px rgba(86,135,255,.32);">${safeButton}</button>
    </div>
  </div>
</body>
</html>`;
}

async function connectDebuggerUrl(wsUrl: string): Promise<WebSocket> {
	return new Promise((resolve, reject) => {
		const ws = new WebSocket(wsUrl);
		ws.addEventListener("open", () => resolve(ws));
		ws.addEventListener("error", () => reject(new Error("WS connect error")));
		setTimeout(() => reject(new Error("WS connect timeout")), 5000);
	});
}

async function findPageTargetById(port: number, tabId: string): Promise<any | null> {
	const targets: any[] = await httpGet(`http://localhost:${port}/json`, 3000);
	return targets.find((t: any) => t.id === tabId && t.type === "page") ?? null;
}

async function waitForConsentTabNavigation(ws: WebSocket, port: number, tabId: string | null, timeoutMs = 15000): Promise<void> {
	const deadline = Date.now() + timeoutMs;
	while (Date.now() < deadline) {
		const href = await cdpEval(ws, "location.href", false, 1500).catch(() => null);
		const title = await cdpEval(ws, "document.title", false, 1500).catch(() => null);
		const bodyFlag = await cdpEval(ws, "document.body?.getAttribute('data-m365-approved')", false, 1500).catch(() => null);
		if (
			typeof href === "string" &&
			href !== "about:blank" &&
			!(typeof title === "string" && title === "M365 experimental consent") &&
			bodyFlag !== "1"
		) {
			return;
		}
		if (tabId) {
			const page = await findPageTargetById(port, tabId).catch(() => null);
			if (!page) throw new Error("Consent tab disappeared during navigation");
			if (typeof page.url === "string" && page.url !== "about:blank") return;
		}
		await sleep(200);
	}
	throw new Error("Consent approved, but navigation did not start in time");
}

/**
 * Fresh-auth consent gate for M365.
 *
 * If `PICLAW_M365_YOLO` is set, auth navigation happens immediately.
 * Otherwise we first show a self-contained consent page in `about:blank`, wait for the
 * user to click through, and only then navigate that same tab to the real auth target.
 *
 * Important detail: the consent page no longer self-navigates. Instead it signals the
 * backend via a CDP binding, and the backend performs `Page.navigate` itself. That
 * makes approval deterministic and removes the previous timing race.
 */
async function prepareFreshAuthBrowserSession(
	targetUrl: string,
	purpose: string,
	options: { forceNewInstance?: boolean; consentTimeoutMs?: number; buttonText?: string } = {},
): Promise<FreshAuthBrowserSession> {
	if (M365_YOLO) {
		const launched = await launchEdge(targetUrl, { forceNewInstance: options.forceNewInstance });
		return { ...launched, ws: null, tabId: null, reusedExistingPort: launched.proc.pid === 0 };
	}

	const existingPort = !options.forceNewInstance ? await findExistingCdpPort() : null;
	const reusedExistingPort = !!existingPort && !USE_TEMP_EDGE_PROFILE;
	const dummyProc = { pid: 0, kill: () => {}, unref: () => {} } as any as ChildProcess;
	const launched = reusedExistingPort
		? { proc: dummyProc, port: existingPort! }
		: await launchEdge("about:blank", { forceNewInstance: options.forceNewInstance });

	let target: any = null;
	if (reusedExistingPort) {
		target = await httpPut(`http://localhost:${launched.port}/json/new?${encodeURIComponent("about:blank")}`, 5000);
	} else {
		const targets: any[] = await httpGet(`http://localhost:${launched.port}/json`, 3000);
		target = targets.find((t: any) => t.type === "page" && t.url === "about:blank")
			?? await httpPut(`http://localhost:${launched.port}/json/new?${encodeURIComponent("about:blank")}`, 5000);
	}
	if (!target?.webSocketDebuggerUrl) throw new Error("Could not open consent tab");

	const ws = await connectDebuggerUrl(target.webSocketDebuggerUrl);
	cdpSend(ws, "Page.enable");
	cdpSend(ws, "Runtime.enable");
	const addBindingId = cdpSend(ws, "Runtime.addBinding", { name: "__m365ConsentApproved" });
	const bindingMsgs = await cdpCollect(ws, 300);
	const bindingError = bindingMsgs.find((m) => m.id === addBindingId && m.error);
	if (bindingError) {
		try { ws.close(); } catch { /* best-effort fallback / }
		throw new Error(`Could not register consent binding: ${bindingError.error?.message ?? "unknown error"}`);
	}
	await cdpEval(ws, `document.open();document.write(${JSON.stringify(buildM365ConsentHtml(purpose, options.buttonText))});document.close();true`, false, 5000);
	await cdpWaitFor(ws, `typeof window.__m365ConsentApproved`, (v) => v === "function", 5000, 100);

	const deadline = Date.now() + (options.consentTimeoutMs ?? 10 * 60 * 1000);
	while (Date.now() < deadline) {
		const msgs = await cdpCollect(ws, 750);
		const approvedEvent = msgs.find((m) => m.method === "Runtime.bindingCalled" && m.params?.name === "__m365ConsentApproved");
		if (approvedEvent) {
			cdpSend(ws, "Page.navigate", { url: targetUrl });
			await waitForConsentTabNavigation(ws, launched.port, target.id ?? null, 15000);
			return { ...launched, ws, tabId: target.id ?? null, reusedExistingPort };
		}
		if (target.id) {
			const page = await findPageTargetById(launched.port, target.id).catch(() => null);
			if (!page) {
				try { ws.close(); } catch { /* best-effort fallback / }
				throw new Error("User closed the consent tab before approval");
			}
		}
	}

	try { ws.close(); } catch { /* best-effort fallback / }
	if (launched.proc && launched.proc.pid && USE_TEMP_EDGE_PROFILE) killProc(launched.proc);
	throw new Error("User consent timed out waiting for approval");
}

// ── Helpers shared with m365-transcripts extension ────

export interface MeetingMediaCard {
	sharingUrl: string;
	recordingTitle: string;
	recordingFileName: string;
	driveId: string | null;
	itemId: string | null;
	isComplete?: boolean;
}

export function decodeXmlText(value: string): string {
	return value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export function teamsHtmlFromText(value: string): string {
	return escapeHtml(value).replace(/\r?\n/g, "<br/>");
}

export function markdownInlineToTeamsHtml(value: string): string {
	let s = escapeHtml(value);
	s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
	s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
	s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
	s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
	return s;
}

export function markdownToTeamsHtml(markdown: string): string {
	const lines = markdown.replace(/\r\n/g, "\n").split("\n");
	const out: string[] = [];
	let inUl = false;
	let inOl = false;

	const closeLists = () => {
		if (inUl) {
			out.push("</ul>");
			inUl = false;
		}
		if (inOl) {
			out.push("</ol>");
			inOl = false;
		}
	};

	for (const raw of lines) {
		const line = raw.trimEnd();
		if (!line.trim()) {
			closeLists();
			continue;
		}

		const heading = line.match(/^(#{1,6})\s+(.+)$/);
		if (heading) {
			closeLists();
			const level = Math.min(heading[1].length + 1, 6);
			out.push(`<h${level}>${markdownInlineToTeamsHtml(heading[2])}</h${level}>`);
			continue;
		}

		const ul = line.match(/^\s*[-*]\s+(.+)$/);
		if (ul) {
			if (!inUl) {
				if (inOl) {
					out.push("</ol>");
					inOl = false;
				}
				out.push("<ul>");
				inUl = true;
			}
			out.push(`<li>${markdownInlineToTeamsHtml(ul[1])}</li>`);
			continue;
		}

		const ol = line.match(/^\s*\d+[.)]\s+(.+)$/);
		if (ol) {
			if (!inOl) {
				if (inUl) {
					out.push("</ul>");
					inUl = false;
				}
				out.push("<ol>");
				inOl = true;
			}
			out.push(`<li>${markdownInlineToTeamsHtml(ol[1])}</li>`);
			continue;
		}

		closeLists();
		out.push(`<p>${markdownInlineToTeamsHtml(line)}</p>`);
	}

	closeLists();
	return out.join("\n");
}

export function buildReferenceAttachmentMessageBody(attachmentUrl: string, attachmentName: string, message?: string) {
	const attachmentId = `ref-${Date.now().toString(36)}`;
	const messageHtml = message?.trim() ? `<div>${teamsHtmlFromText(message)}</div>` : "";
	const bodyContent = `${messageHtml}<attachment id="${attachmentId}"></attachment>`;
	return {
		body: { contentType: "html", content: bodyContent },
		attachments: [
			{
				id: attachmentId,
				contentType: "reference",
				contentUrl: attachmentUrl,
				name: attachmentName,
				content: null,
				thumbnailUrl: null,
			},
		],
	};
}

export async function uploadMarkdownToAttachments(markdown: string, fileName: string): Promise<any> {
	return uploadBufferToOneDrive(Buffer.from(markdown, "utf-8"), "Attachments", fileName, "text/markdown; charset=utf-8", true);
}

export function selectMeetingMediaCard(messages: any[]): MeetingMediaCard {
	// Only consider actual recording/transcript media messages — NOT regular file shares
	const mediaMsgs = messages.filter((m: any) => {
		const content = typeof m?.content === "string" ? m.content : "";
		if (!content) return false;
		// Must be a recording or transcript message type, OR contain recording-specific markers
		const isRecordingType = m.messagetype === "RichText/Media_CallRecording" || m.messagetype === "RichText/Media_CallTranscript";
		const hasRecordingMarker = content.includes('type="Video.2/CallRecording.1"') || content.includes("onedriveForBusinessTranscript") || content.includes("onedriveForBusinessVideo");
		return isRecordingType || hasRecordingMarker;
	});
	if (mediaMsgs.length === 0) throw new Error("No recap/recording card found in this meeting chat");

	// Extract ALL recording candidates
	const candidates: MeetingMediaCard[] = [];
	for (const msg of mediaMsgs) {
		const content = typeof msg.content === "string" ? msg.content : "";
		const hrefMatch = content.match(/href="(https:\/\/[^\"]+sharepoint[^\"]+)"/);
		if (!hrefMatch) continue;
		const titleMatch = content.match(/<Title>([^<]+)<\/Title>/);
		const nameMatch = content.match(/<OriginalName v="([^"]+)"/);
		const driveIdMatch = content.match(/driveId="([^"]+)"/);
		const driveItemIdMatch = content.match(/driveItemId="([^"]+)"/);
		const isComplete = content.includes('status="Success"') || content.includes("onedriveForBusinessTranscript");
		candidates.push({
			sharingUrl: hrefMatch[1],
			recordingTitle: titleMatch ? decodeXmlText(titleMatch[1]) : "",
			recordingFileName: nameMatch ? decodeXmlText(nameMatch[1]) : "",
			driveId: driveIdMatch?.[1] ?? null,
			itemId: driveItemIdMatch?.[1] ?? null,
			isComplete: isComplete,
		});
	}

	if (candidates.length === 0) throw new Error("No SharePoint sharing link found in recap/recording cards");

	// If multiple candidates, store them all for listing
	if (candidates.length > 1) {
		(selectMeetingMediaCard as any).__candidates = candidates;
	}

	// Prefer completed recordings, return first completed or first overall
	return candidates.find(c => c.isComplete) ?? candidates[0];
}

export function decodeUrlRepeatedly(value: string, maxRounds = 3): string {
	let current = value;
	for (let i = 0; i < maxRounds; i++) {
		try {
			const decoded = decodeURIComponent(current);
			if (decoded === current) break;
			current = decoded;
		} catch {
			break;
		}
	}
	return current;
}

export function toShareId(url: string): string {
	return Buffer.from(url).toString("base64").replace(/=+$/, "").replace(/\//g, "_").replace(/\+/g, "-");
}

function resolveDocumentSourceUrl(inputUrl: string): { originalUrl: string; resolvedUrl: string; source: string } {
	const originalUrl = inputUrl.trim();
	const parsed = new URL(originalUrl);

	if (parsed.hostname.includes("teams.microsoft.com")) {
		const candidates = [
			parsed.searchParams.get("objectUrl"),
			parsed.searchParams.get("url"),
			parsed.searchParams.get("fileUrl"),
			parsed.searchParams.get("downloadUrl"),
		].filter(Boolean) as string[];

		for (const candidate of candidates) {
			const decoded = decodeUrlRepeatedly(candidate);
			if (/https:\/\/[^\s]+sharepoint\.com\//i.test(decoded)) {
				return { originalUrl, resolvedUrl: decoded, source: "teams-link" };
			}
		}

		const objectUrlMatch = decodeUrlRepeatedly(originalUrl).match(/https:\/\/[^\s]+sharepoint\.com\/[^\s"'<>]+/i);
		if (objectUrlMatch) return { originalUrl, resolvedUrl: objectUrlMatch[0], source: "teams-link" };
		throw new Error("Could not resolve underlying SharePoint URL from Teams link");
	}

	if (parsed.hostname.includes("sharepoint.com")) {
		return { originalUrl, resolvedUrl: originalUrl, source: "sharepoint-link" };
	}

	throw new Error(`Unsupported document URL host: ${parsed.hostname}`);
}

export async function getDocumentLinkMetadata(inputUrl: string): Promise<any> {
	const resolved = resolveDocumentSourceUrl(inputUrl);
	const shareId = toShareId(resolved.resolvedUrl);
	const driveItem: any = await graphFetch(`shares/u!${shareId}/driveItem?$select=id,name,webUrl,size,parentReference,file,folder,package`);

	let thumbnail: any = null;
	let thumbnailUrl: string | null = null;
	let thumbnailError: string | null = null;
	try {
		thumbnail = await graphFetch(`shares/u!${shareId}/driveItem/thumbnails/0`);
		thumbnailUrl = thumbnail.large?.url ?? thumbnail.medium?.url ?? thumbnail.small?.url ?? null;
	} catch (err: any) {
		thumbnailError = err?.message ?? String(err);
	}

	return {
		filename: driveItem.name,
		documentUrl: driveItem.webUrl ?? resolved.resolvedUrl,
		previewImageUrl: thumbnailUrl,
		originalUrl: resolved.originalUrl,
		resolvedUrl: resolved.resolvedUrl,
		source: resolved.source,
		driveItem: {
			id: driveItem.id,
			size: driveItem.size,
			mimeType: driveItem.file?.mimeType ?? null,
			driveId: driveItem.parentReference?.driveId ?? null,
			siteId: driveItem.parentReference?.siteId ?? null,
		},
		thumbnails: thumbnail ? {
			small: thumbnail.small ?? null,
			medium: thumbnail.medium ?? null,
			large: thumbnail.large ?? null,
		} : null,
		thumbnailError,
	};
}

export async function findExistingCdpPort(): Promise<number | null> {
	let sawUnhealthy = false;
	for (let p = CDP_PORT_START; p < CDP_PORT_START + 10; p++) {
		const state = await inspectCdpPort(p);
		if (state === "healthy") return p;
		if (state === "unhealthy") sawUnhealthy = true;
	}
	if (sawUnhealthy) {
		if (USE_TEMP_EDGE_PROFILE) killStaleEdge();
		else killEdgeCdpProcesses();
		await sleep(1500);
	}
	return null;
}


// ── Transcript extraction moved to m365-transcripts extension ────


// ── Graph Token (OAuth2 SSO) ────────────────────────────────────────────

/**
 * Acquire a Microsoft Graph bearer token.
 *
 * Strategy:
 * - first reuse a still-valid in-memory token from the current process
 * - otherwise drive the user's existing Edge profile via CDP so we inherit their
 *   normal corporate sign-in state instead of running a separate OAuth device flow
 * - if a token is obtained, keep it in memory and also learn the tenant id from the
 *   JWT so later calls stop using the generic `common` tenant endpoint
 *
 * This is the main auth path for Graph-backed tools (`m365_mail`, `m365_calendar`,
 * `m365_onedrive`, etc.).
 */
export async function acquireGraphToken(): Promise<string> {
	// ── Method 0: Extract Graph token from Teams v2 (teams.cloud.microsoft) localStorage ──
	// Teams v2 caches MSAL tokens in localStorage. This is faster and more reliable
	// than the OAuth redirect flow, and the token has richer scopes.
	try {
		const existingPort = await findExistingCdpPort();
		if (existingPort) {
			const targets: any[] = await httpGet(`http://localhost:${existingPort}/json`, 3000);
			const teamsV2 = targets.find((t: any) => t.type === "page" && t.url?.includes("teams.cloud.microsoft"));
			if (teamsV2?.webSocketDebuggerUrl) {
				const ws = new WebSocket(teamsV2.webSocketDebuggerUrl);
				await new Promise<void>((resolve, reject) => {
					ws.addEventListener("open", () => resolve());
					ws.addEventListener("error", () => reject(new Error("WS error")));
					setTimeout(() => reject(new Error("ws timeout")), 5000);
				});
				const extractResult = await cdpEval(ws, `(() => {
					const keys = Object.keys(localStorage);
					for (const k of keys) {
						if (!k.includes('accesstoken')) continue;
						try {
							const val = JSON.parse(localStorage.getItem(k));
							if (!val.secret) continue;
							const parts = val.secret.split('.');
							if (parts.length !== 3) continue;
							const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
							if (payload.aud === 'https://graph.microsoft.com' && payload.exp > Date.now()/1000 + 300) {
								return val.secret;
							}
						} catch { /* best-effort fallback / }
					}
					return null;
				})()`, false, 5000);
				try { ws.close(); } catch { /* best-effort fallback / }
				if (extractResult && typeof extractResult === "string" && extractResult.length > 100) {
					saveToken("graph", extractResult);
					return extractResult;
				}
			}
		}
	} catch { /* best-effort fallback / }

	// ── Method 1: Redeem Teams refresh token for Graph access ──
	try {
		const refreshed = await redeemTeamsRefreshToken("https://graph.microsoft.com");
		if (refreshed) {
			saveToken("graph", refreshed);
			return refreshed;
		}
	} catch { /* best-effort fallback / }

	// ── Method 1+: OAuth implicit flow redirect (fallback) ──
	const nonce = Math.random().toString(36).substring(2);
	const authUrl =
		`https://login.microsoftonline.com/${getTenantId()}/oauth2/authorize` +
		`?response_type=token` +
		`&client_id=${TEAMS_CLIENT_ID}` +
		`&resource=${encodeURIComponent("https://graph.microsoft.com")}` +
		`&redirect_uri=${encodeURIComponent(TEAMS_REDIRECT_URI)}` +
		`&nonce=${nonce}`;

	const { proc, port, ws: preparedWs } = await prepareFreshAuthBrowserSession(
		authUrl,
			"The agent will navigate this tab to the sign-in page required to refresh authentication for Graph-backed M365 actions such as mail, calendar, OneDrive, and SharePoint.",
		);
	try {
		// Install a script that captures the access_token from the redirect URL fragment
		// before the page navigates away
		const ws = preparedWs ?? await cdpConnect(port);
		cdpSend(ws, "Page.enable");
		cdpSend(ws, "Page.addScriptToEvaluateOnNewDocument", {
			source: `if (location.hash && location.hash.includes('access_token=')) { window.__oauthToken = location.hash.match(/access_token=([^&]+)/)?.[1] ?? null; }`
		});

		// Also evaluate current pages immediately in case redirect already happened
		const deadline = Date.now() + 90000;
		while (Date.now() < deadline) {
			await sleep(1000);
			try {
				// Method 1: Check all page URLs from /json (works if redirect is slow)
				const targets: any[] = await httpGet(`http://localhost:${port}/json`, 3000);
				for (const page of targets.filter((t: any) => t.type === "page" && t.url)) {
					const match = page.url.match(/access_token=([^&]+)/);
					if (match) {
						const token = decodeURIComponent(match[1]);
						saveToken("graph", token);
						try { ws.close(); } catch { /* best-effort fallback / }
						return token;
					}
					if (page.url.match(/error=/) && page.url.match(/login\.microsoftonline/)) {
						const errMatch = page.url.match(/error=([^&]+)/);
						throw new Error(`OAuth error: ${decodeURIComponent(errMatch?.[1] ?? "unknown")}`);
					}
				}

				// Method 2: Evaluate location.href on all page targets (catches hash fragments)
				for (const page of targets.filter((t: any) => t.type === "page" && t.webSocketDebuggerUrl)) {
					try {
						const pageWs = await cdpConnect(port, page.url?.includes("teams.microsoft.com") ? "teams.microsoft.com" : page.url?.includes("teams.cloud.microsoft") ? "teams.cloud.microsoft" : undefined);
						const href = await cdpEval(pageWs, "location.href", false, 3000);
						try { pageWs.close(); } catch { /* best-effort fallback / }
						if (typeof href === "string") {
							const hrefMatch = href.match(/access_token=([^&]+)/);
							if (hrefMatch) {
								const token = decodeURIComponent(hrefMatch[1]);
								saveToken("graph", token);
								try { ws.close(); } catch { /* best-effort fallback / }
								return token;
							}
						}
					} catch { /* best-effort fallback / }
				}

				// Method 3: Check if any page captured the token via addScriptToEvaluateOnNewDocument
				const captured = await cdpEval(ws, "window.__oauthToken", false, 2000);
				if (captured && typeof captured === "string" && captured.length > 50) {
					const token = decodeURIComponent(captured);
					saveToken("graph", token);
					try { ws.close(); } catch { /* best-effort fallback / }
					return token;
				}

				// Method 4: Recovery — check for blocking dialogs (e.g., "Continue", "Accept", consent prompts)
				// These can appear on login.microsoftonline.com or other intermediate pages and block the redirect.
				for (const page of targets.filter((t: any) => t.type === "page" && t.webSocketDebuggerUrl)) {
					try {
						const pageWs = await cdpConnect(port, page.url?.includes("login.microsoftonline") ? "login.microsoftonline" : (page.url?.includes("teams.microsoft") ? "teams.microsoft" : undefined));
						const clickResult = await cdpEval(pageWs, `(() => {
							const visible = (el) => {
								if (!el) return false;
								const s = getComputedStyle(el);
								const r = el.getBoundingClientRect();
								return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
							};
							const candidates = [...document.querySelectorAll('input[type="submit"], input[type="button"], button, [role="button"]')].filter(visible);
							const patterns = /^(continue|accept|yes|next|sign in|submit|allow|ok|got it)$/i;
							for (const el of candidates) {
								const text = (el.value || el.textContent || el.getAttribute('aria-label') || '').trim();
								if (patterns.test(text)) {
									el.click();
									return 'clicked: ' + text;
								}
							}
							const msButton = document.getElementById('idSIButton9') || document.getElementById('idBtn_Accept');
							if (msButton && visible(msButton)) {
								msButton.click();
								return 'clicked-ms-button: ' + (msButton.textContent || msButton.value || msButton.id).trim();
							}
							return null;
						})()`, false, 3000);
						try { pageWs.close(); } catch { /* best-effort fallback / }
						if (clickResult) {
							await sleep(2000);
						}
					} catch { /* best-effort fallback / }
				}

				const refreshed = await redeemTeamsRefreshToken("https://graph.microsoft.com");
				if (refreshed) {
					saveToken("graph", refreshed);
					try { ws.close(); } catch { /* best-effort fallback / }
					return refreshed;
				}
			} catch (e: any) {
				if (e.message.startsWith("OAuth")) throw e;
			}
		}
		try { ws.close(); } catch { /* best-effort fallback / }
		throw new Error("Graph token acquisition timed out");
	} finally {
		if (proc && proc.pid && USE_TEMP_EDGE_PROFILE) killProc(proc);
	}
}

// ── Chatsvc Token (CDP Network interception) ────────────────────────────

/**
 * Acquire the Teams chatsvc token by observing real browser traffic.
 *
 * Unlike Graph, chatsvc is not something we can cleanly request with a normal public
 * OAuth flow. The reliable path is to attach to the logged-in Teams web client in Edge,
 * watch network requests, and copy the authorization header + regional base URL.
 *
 * This is why the Teams chat tools are CDP-assisted even though their final calls are
 * just HTTPS requests: the hard part is getting the same auth context as the browser.
 */
export async function acquireChatsvcToken(): Promise<{ token: string; baseUrl: string }> {
	// ── Method 0: Extract chatsvc token from Teams v2 localStorage ──
	// Teams v2 caches MSAL tokens including chatsvcagg tokens in localStorage.
	// This is faster and more reliable than CDP network interception.
	try {
		const existingPort = await findExistingCdpPort();
		if (existingPort) {
			const targets: any[] = await httpGet(`http://localhost:${existingPort}/json`, 3000);
			const teamsV2 = targets.find((t: any) => t.type === "page" && t.url?.includes("teams.cloud.microsoft"));
			if (teamsV2?.webSocketDebuggerUrl) {
				const ws = new WebSocket(teamsV2.webSocketDebuggerUrl);
				await new Promise<void>((resolve, reject) => {
					ws.addEventListener("open", () => resolve());
					ws.addEventListener("error", () => reject(new Error("WS error")));
					setTimeout(() => reject(new Error("ws timeout")), 5000);
				});
				const extractResult = await cdpEval(ws, `(() => {
					const keys = Object.keys(localStorage).filter(k => k.includes('accesstoken'));
					let best = null;
					let bestExp = 0;
					for (const k of keys) {
						try {
							const val = JSON.parse(localStorage.getItem(k));
							if (!val.secret) continue;
							const parts = val.secret.split('.');
							if (parts.length !== 3) continue;
							const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
							// Prefer Teams.AccessAsUser.All (ic3) — works for chatsvc and has longer TTL
							// Also accept chatsvcagg as fallback
							const scp = payload.scp || '';
							const aud = payload.aud || '';
							const isTeamsAccess = scp.includes('Teams.AccessAsUser.All');
							const isChatsvcAgg = aud.includes('chatsvcagg');
							if ((isTeamsAccess || isChatsvcAgg) && payload.exp > Date.now()/1000 + 300) {
								// Prefer Teams.AccessAsUser.All over chatsvcagg (score higher)
								const score = (isTeamsAccess ? 1000000 : 0) + payload.exp;
								if (score > bestExp) {
									bestExp = score;
									best = val.secret;
								}
							}
						} catch { /* best-effort fallback / }
					}
					return best;
				})()`, false, 5000);
				try { ws.close(); } catch { /* best-effort fallback / }
				if (extractResult && typeof extractResult === "string" && extractResult.length > 100) {
					setChatsvcFromToken(extractResult);
					const baseUrl = getChatsvcBaseUrl();
					saveToken("teams_chatsvc", extractResult, baseUrl);
					return { token: extractResult, baseUrl };
				}
			}
		}
	} catch { /* best-effort fallback / }

	// ── Method 1: Redeem Teams refresh token for fresh Teams access ──
	try {
		const refreshed = await redeemTeamsRefreshToken("https://ic3.teams.office.com");
		if (refreshed) {
			setChatsvcFromToken(refreshed);
			const baseUrl = getChatsvcBaseUrl();
			saveToken("teams_chatsvc", refreshed, baseUrl);
			return { token: refreshed, baseUrl };
		}
	} catch { /* best-effort fallback / }

	// ── Method 1+: OAuth implicit flow for Teams.AccessAsUser.All ──
	// When Teams is open but its cached localStorage tokens are expired, ask AAD for a
	// fresh token for the Teams resource directly instead of hoping passive network
	// interception will observe one in time.
	const nonce = Math.random().toString(36).substring(2);
	const teamsAuthUrl =
		`https://login.microsoftonline.com/${getTenantId()}/oauth2/authorize` +
		`?response_type=token` +
		`&client_id=${TEAMS_CLIENT_ID}` +
		`&resource=${encodeURIComponent("https://ic3.teams.office.com")}` +
		`&redirect_uri=${encodeURIComponent(TEAMS_REDIRECT_URI)}` +
		`&nonce=${nonce}`;

	const oauth = await prepareFreshAuthBrowserSession(
		teamsAuthUrl,
		"The agent will navigate this tab to the page required to refresh authentication for Teams chat operations and request a fresh token for Teams messaging.",
	);
	try {
		const ws = oauth.ws ?? await cdpConnect(oauth.port);
		cdpSend(ws, "Page.enable");
		cdpSend(ws, "Page.addScriptToEvaluateOnNewDocument", {
			source: `if (location.hash && location.hash.includes('access_token=')) { window.__oauthToken = location.hash.match(/access_token=([^&]+)/)?.[1] ?? null; }`,
		});

		const deadline = Date.now() + 90000;
		while (Date.now() < deadline) {
			await sleep(1000);
			try {
				const targets: any[] = await httpGet(`http://localhost:${oauth.port}/json`, 3000);
				for (const page of targets.filter((t: any) => t.type === "page" && t.url)) {
					const match = page.url.match(/access_token=([^&]+)/);
					if (match) {
						const token = decodeURIComponent(match[1]);
						const claims = decodeJwt(token);
						if ((claims.aud ?? "").includes("ic3.teams.office.com") || (claims.aud ?? "").includes("chatsvcagg") || (claims.scp ?? "").includes("Teams.AccessAsUser.All")) {
							setChatsvcFromToken(token);
							const baseUrl = getChatsvcBaseUrl();
							saveToken("teams_chatsvc", token, baseUrl);
							try { ws.close(); } catch { /* best-effort fallback / }
							return { token, baseUrl };
						}
					}
					if (page.url.match(/error=/) && page.url.match(/login\.microsoftonline/)) {
						const errMatch = page.url.match(/error=([^&]+)/);
						throw new Error(`Teams OAuth error: ${decodeURIComponent(errMatch?.[1] ?? "unknown")}`);
					}
				}

				const captured = await cdpEval(ws, "window.__oauthToken", false, 2000);
				if (captured && typeof captured === "string" && captured.length > 50) {
					const token = decodeURIComponent(captured);
					const claims = decodeJwt(token);
					if ((claims.aud ?? "").includes("ic3.teams.office.com") || (claims.aud ?? "").includes("chatsvcagg") || (claims.scp ?? "").includes("Teams.AccessAsUser.All")) {
						setChatsvcFromToken(token);
						const baseUrl = getChatsvcBaseUrl();
						saveToken("teams_chatsvc", token, baseUrl);
						try { ws.close(); } catch { /* best-effort fallback / }
						return { token, baseUrl };
					}
				}

				for (const page of targets.filter((t: any) => t.type === "page" && t.webSocketDebuggerUrl)) {
					try {
						const pageWs = await cdpConnect(oauth.port, page.url?.includes("login.microsoftonline") ? "login.microsoftonline" : page.url?.includes("teams.microsoft") ? "teams.microsoft" : page.url?.includes("teams.cloud.microsoft") ? "teams.cloud.microsoft" : undefined);
						const clickResult = await cdpEval(pageWs, `(() => {
							const visible = (el) => { if (!el) return false; const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
							const candidates = [...document.querySelectorAll('input[type="submit"], input[type="button"], button, [role="button"]')].filter(visible);
							const patterns = /^(continue|accept|yes|next|sign in|submit|allow|ok|got it)$/i;
							for (const el of candidates) { const text = (el.value || el.textContent || el.getAttribute('aria-label') || '').trim(); if (patterns.test(text)) { el.click(); return 'clicked: ' + text; } }
							const msButton = document.getElementById('idSIButton9') || document.getElementById('idBtn_Accept');
							if (msButton && visible(msButton)) { msButton.click(); return 'clicked-ms-button: ' + (msButton.textContent || msButton.value || msButton.id).trim(); }
							return null;
						})()`, false, 3000);
						try { pageWs.close(); } catch { /* best-effort fallback / }
						if (clickResult) await sleep(2000);
					} catch { /* best-effort fallback / }
				}

				const refreshed = await redeemTeamsRefreshToken("https://ic3.teams.office.com");
				if (refreshed) {
					setChatsvcFromToken(refreshed);
					const baseUrl = getChatsvcBaseUrl();
					saveToken("teams_chatsvc", refreshed, baseUrl);
					try { ws.close(); } catch { /* best-effort fallback / }
					return { token: refreshed, baseUrl };
				}
			} catch (e: any) {
				if (e.message.startsWith("Teams OAuth")) throw e;
			}
		}
		try { ws.close(); } catch { /* best-effort fallback / }
		// fall through to network interception fallback if OAuth never yielded a token
	} finally {
		if (oauth.proc && oauth.proc.pid && USE_TEMP_EDGE_PROFILE) killProc(oauth.proc);
	}

	// ── Method 2: CDP network interception (last fallback) ──
	const { proc, port, ws: preparedWs } = await prepareFreshAuthBrowserSession(
		TEAMS_START_URL,
		"The agent will navigate this tab to the page required to refresh authentication for Teams chat operations and then observe browser requests to capture the token needed for chatsvc calls.",
	);
	try {
		await sleep(5000); // let Teams load

		const ws = preparedWs ?? await cdpConnect(port, "teams");
		cdpSend(ws, "Network.enable");
		cdpSend(ws, "Page.navigate", { url: TEAMS_START_URL });
		await sleep(1000);

		// Collect network events looking for Teams.AccessAsUser.All token
		let token: string | null = null;
		let baseUrl: string | null = null;
		const deadline = Date.now() + 30000;

		while (Date.now() < deadline && !token) {
			const msgs = await cdpCollect(ws, 2000);
			for (const msg of msgs) {
				if (token) break;
				const hdrs = msg.params?.request?.headers ?? msg.params?.headers;
				if (!hdrs) continue;
				const auth = hdrs.Authorization ?? hdrs.authorization;
				if (!auth?.startsWith("Bearer ") || auth.length < 100) continue;

				const tkn = auth.substring(7);
				const claims = decodeJwt(tkn);
				if ((claims.scp ?? "").includes("Teams.AccessAsUser.All") || (claims.aud ?? "").includes("ic3.teams.office.com") || (claims.aud ?? "").includes("chatsvcagg")) {
					token = tkn;
				}
				const url = msg.params?.request?.url ?? "";
				if (!baseUrl && url.match(/\/api\/chatsvc\/[^/]+\/v1/)) {
					baseUrl = url.match(/(https:\/\/[^/]+\/api\/chatsvc\/[^/]+\/v1)/)?.[1] ?? null;
				}
			}
		}

		ws.close();
		if (!token) throw new Error("Chatsvc token not captured");
		if (!baseUrl) {
			setChatsvcFromToken(token);
			baseUrl = getChatsvcBaseUrl();
		}
		saveToken("teams_chatsvc", token, baseUrl);
		return { token, baseUrl };
	} finally {
		if (USE_TEMP_EDGE_PROFILE) killProc(proc);
	}
}

// ── SPO Cookies (CDP Network.getCookies) ────────────────────────────────

/**
 * Capture SharePoint Online cookies for a specific host.
 *
 * We intentionally scope cookies per SharePoint hostname because recordings and files
 * can live on different geos / tenants / OneDrives. Reusing the wrong cookie jar is a
 * common reason for confusing `Access denied` failures, especially with shared meeting
 * recordings hosted on another user's OneDrive.
 */
export async function acquireSPOCookies(siteUrl: string): Promise<CookieData[]> {
	const host = new URL(siteUrl).host;
	const { proc, port, ws: preparedWs, tabId, reusedExistingPort } = await prepareFreshAuthBrowserSession(
		siteUrl,
		`The agent will navigate this tab to the SharePoint page required to refresh browser cookies for ${host}. Those cookies are needed to access files or recordings hosted on that site.`,
	);

	let ws: WebSocket | null = null;
	try {
		await sleep(6000);
		ws = preparedWs ?? await cdpConnect(port, host);
		const id = cdpSend(ws, "Network.getCookies", { urls: [`https://${host}`] });
		const msgs = await cdpCollect(ws, 5000);

		const resp = msgs.find((m) => m.id === id && m.result?.cookies);
		if (!resp) throw new Error("No cookies captured");

		const cookies: CookieData[] = resp.result.cookies.map((c: any) => ({
			name: c.name,
			value: c.value,
			domain: c.domain,
			path: c.path,
			secure: c.secure,
			httpOnly: c.httpOnly,
			expires: c.expires,
		}));

		saveCookies(host, cookies);
		return cookies;
	} finally {
		try { ws?.close(); } catch { /* best-effort fallback / }
		// Close the SPO tab we opened (prevent tab accumulation)
		if (tabId) {
			try { await httpPut(`http://localhost:${port}/json/close/${tabId}`, 3000); } catch { /* best-effort fallback / }
		} else if (reusedExistingPort) {
			try {
				const tabs: any[] = await httpGet(`http://localhost:${port}/json`, 3000);
				const spoTab = tabs.find((t: any) => t.type === "page" && t.url?.includes(host));
				if (spoTab) await httpPut(`http://localhost:${port}/json/close/${spoTab.id}`, 3000);
			} catch { /* best-effort fallback / }
		}
		if (proc && proc.pid && USE_TEMP_EDGE_PROFILE) killProc(proc);
	}
}

// ── Public API ──────────────────────────────────────────────────────────

export const auth = {
	async getGraphToken(force = false): Promise<string> {
		if (!force) {
			const cached = loadToken("graph");
			if (cached) return cached.token;
		}
		return acquireGraphToken();
	},

	async getChatsvcAuth(force = false): Promise<{ token: string; baseUrl: string }> {
		if (!force) {
			const cached = loadToken("teams_chatsvc");
			if (cached?.token && cached.base_url) return { token: cached.token, baseUrl: cached.base_url };
		}
		return acquireChatsvcToken();
	},

	async getSPOCookieHeader(siteUrl: string, force = false): Promise<string> {
		const host = new URL(siteUrl).host;
		let cookies = force ? null : loadCookies(host);
		if (!cookies) cookies = await acquireSPOCookies(siteUrl);
		return cookies.map((c) => `${c.name}=${c.value}`).join("; ");
	},

	getCacheStatus() {
		const now = Date.now() / 1000;
		const graph = loadToken("graph");
		const chatsvc = loadToken("teams_chatsvc");
		for (const source of Object.keys(tokenMemCache)) loadToken(source);
		for (const host of Object.keys(cookieMemCache)) loadCookies(host);
		const spoSites = Object.keys(cookieMemCache).length;

		return {
			graph: !!graph,
			graphMinutes: graph ? Math.round((graph.expires_at - now) / 60) : 0,
			chatsvc: !!chatsvc,
			chatsvcMinutes: chatsvc ? Math.round((chatsvc.expires_at - now) / 60) : 0,
			spoSites,
		};
	},

	clearAll() {
		clearTokenCache("graph");
		clearTokenCache("teams_chatsvc");
		for (const key of Object.keys(cookieMemCache)) delete cookieMemCache[key];
	},
};


// ═══════════════════════════════════════════════════════════════════════════
// GRAPH FETCH
// NOTE: This helper is mandatory for Graph HTTP requests and MUST remain
// edgeFetch()-backed so Edge headers are always injected.
// ═══════════════════════════════════════════════════════════════════════════




/**
 * Thin opinionated wrapper over Microsoft Graph.
 *
 * Responsibilities beyond a plain `fetch`:
 * - ensures we have a valid cached Graph token
 * - chooses `v1.0` vs `beta`
 * - applies Edge-like headers where useful
 * - normalises request bodies and error reporting for tool code
 *
 * Tool implementations are expected to pass Graph-relative paths (`me/messages`,
 * `sites/...`, `shares/...`) rather than full URLs.
 */
export async function graphFetch(
	path: string,
	options: {
		method?: string;
		body?: any;
		rawBody?: BodyInit;
		version?: string;
		headers?: Record<string, string>;
		responseType?: "json" | "text" | "response";
	} = {},
) {
	const token = await auth.getGraphToken();
	const base = `https://graph.microsoft.com/${options.version ?? "v1.0"}`;
	const url = path.startsWith("http") ? path : `${base}/${path.replace(/^\//, "")}`;
	const headers: Record<string, string> = {
		Authorization: `Bearer ${token}`,
		ConsistencyLevel: "eventual",
		...(options.rawBody ? {} : { "Content-Type": "application/json" }),
		...(options.headers ?? {}),
	};
	const requestBody = options.rawBody !== undefined ? options.rawBody : (options.body !== undefined ? JSON.stringify(options.body) : undefined);
	const responseType = options.responseType ?? "json";
	const run = async () => edgeFetch(url, {
		method: options.method ?? "GET",
		headers,
		body: requestBody,
	}, { "sec-fetch-site": "cross-site" });
	const handle = async (resp: Response) => {
		if (!resp.ok) throw new Error(`Graph ${resp.status}: ${await resp.text()}`);
		if (responseType === "response") return resp;
		if (responseType === "text") return resp.text();
		return resp.json();
	};
	const resp = await run();
	if (resp.status === 401) {
		const freshToken = await auth.getGraphToken(true);
		headers.Authorization = `Bearer ${freshToken}`;
		return handle(await run());
	}
	return handle(resp);
}


// ═══════════════════════════════════════════════════════════════════════════
// TEAMS CHATSVC FETCH
// NOTE: This helper is mandatory for chatsvc HTTP requests and MUST remain
// edgeFetch()-backed so Edge headers are always injected.
// ═══════════════════════════════════════════════════════════════════════════




/**
 * Call the Teams chatsvc API using the token and regional base URL captured from the
 * live browser session.
 *
 * The rest of the extension treats this like a normal REST client, but under the hood
 * the region (`emea`, `amer`, `apac`, ...) matters. That is why `acquireChatsvcToken`
 * stores both the token and the discovered base URL.
 */
export async function chatsvcFetch(endpoint: string, options: { method?: string; body?: any; params?: Record<string, string> } = {}) {
	const { token, baseUrl } = await auth.getChatsvcAuth();
	let url = `${baseUrl}${endpoint}`;
	if (options.params) {
		const qs = Object.entries(options.params)
			.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
			.join("&");
		url += (url.includes("?") ? "&" : "?") + qs;
	}
	const headers: Record<string, string> = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};
	const resp = await edgeFetch(url, {
		method: options.method ?? "GET",
		headers,
		body: options.body ? JSON.stringify(options.body) : undefined,
	}, { "sec-fetch-site": "cross-site" });
	if (resp.status === 401) {
		const fresh = await auth.getChatsvcAuth(true);
		headers.Authorization = `Bearer ${fresh.token}`;
		const retry = await edgeFetch(url, {
			method: options.method ?? "GET",
			headers,
			body: options.body ? JSON.stringify(options.body) : undefined,
		}, { "sec-fetch-site": "cross-site" });
		if (!retry.ok) throw new Error(`Chatsvc ${retry.status}: ${await retry.text()}`);
		return retry.json();
	}
	if (!resp.ok) throw new Error(`Chatsvc ${resp.status}: ${await resp.text()}`);
	return resp.json();
}


// ═══════════════════════════════════════════════════════════════════════════
// SHAREPOINT FETCH + DOWNLOAD
// NOTE: This helper is mandatory for SPO/ODSP HTTP requests and MUST remain
// edgeFetch()-backed so Edge headers are always injected.
// ═══════════════════════════════════════════════════════════════════════════




/**
 * Call the SharePoint REST API for a specific site using cookies captured for that host.
 *
 * We keep this separate from Graph because some operations are easier / only available
 * through classic SharePoint REST semantics, and because shared-recording access often
 * behaves more like a browser-cookie problem than a delegated Graph-token problem.
 */
export async function spoFetch(siteUrl: string, apiPath: string): Promise<any> {
	const cookieHeader = await auth.getSPOCookieHeader(siteUrl);
	const url = apiPath.startsWith("http") ? apiPath : `${siteUrl}${apiPath}`;
	const headers: Record<string, string> = {
		Cookie: cookieHeader,
		Accept: "application/json",
	};
	const resp = await edgeFetch(url, { headers });
	if (resp.status === 401) {
		const freshCookies = await auth.getSPOCookieHeader(siteUrl, true);
		headers.Cookie = freshCookies;
		const retry = await edgeFetch(url, { headers });
		if (!retry.ok) throw new Error(`SPO ${retry.status}: ${await retry.text()}`);
		return retry.json();
	}
	if (!resp.ok) throw new Error(`SPO ${resp.status}: ${await resp.text()}`);
	return resp.json();
}

export async function spoDownload(siteUrl: string, filePath: string, outFile?: string): Promise<{ file: string; size: number }> {
	const encoded = filePath.replace(/ /g, "%20").replace(/^\//, "");
	const parentPath = encoded.replace(/\/[^/]+$/, "");
	const fileName = path.basename(filePath);
	const dest = outFile ?? path.join(process.cwd(), fileName);

	// ── Primary: SPO REST API ──
	try {
		const apiPath = `/_api/v2.0/drive/root:/${parentPath}:/children?select=name,id,size,@content.downloadUrl`;
		const result = await spoFetch(siteUrl, apiPath);
		const item = (result.value ?? []).find((i: any) => i.name === fileName);
		if (item) {
			const downloadUrl = item["@content.downloadUrl"];
			if (downloadUrl) {
				const resp = await edgeFetch(downloadUrl);
				if (resp.ok) {
					const buffer = Buffer.from(await resp.arrayBuffer());
					fs.writeFileSync(dest, buffer);
					return { file: dest, size: buffer.length };
				}
			}
		}
	} catch (spoErr: any) {
		// SPO REST failed (403 org policy, 401, etc.) — fall through to Graph
	}

	// ── Fallback: Graph API via site drive ──
	try {
		// Resolve site → drive → item
		const siteHost = new URL(siteUrl).hostname;
		const sitePath = new URL(siteUrl).pathname.replace(/\/$/, "");
		const site: any = await graphFetch(`sites/${siteHost}:${sitePath}?$select=id`);
		const drives: any = await graphFetch(`sites/${site.id}/drives?$select=id,name&$top=10`);
		const drive = drives.value?.[0]; // Default document library
		if (!drive) throw new Error("No drives found on site");

		const item: any = await graphFetch(`drives/${drive.id}/root:/${filePath.replace(/^\//, "")}?$select=id,name,size,@microsoft.graph.downloadUrl`);
		const dlUrl = item["@microsoft.graph.downloadUrl"];
		if (!dlUrl) throw new Error("No download URL from Graph");

		const resp = await edgeFetch(dlUrl);
		if (!resp.ok) throw new Error(`Graph download failed: ${resp.status}`);
		const buffer = Buffer.from(await resp.arrayBuffer());
		fs.writeFileSync(dest, buffer);
		return { file: dest, size: buffer.length };
	} catch (graphErr: any) {
		throw new Error(`Download failed — SPO REST and Graph both failed for ${filePath}: ${graphErr.message}`);
	}
}

/**
 * Download a file by driveId + itemId via Graph @microsoft.graph.downloadUrl.
 * Shared helper used by sync, transcript, and any tool that has resolved drive item IDs.
 */
export async function downloadDriveItem(driveId: string, itemId: string, dest: string): Promise<{ file: string; size: number }> {
	const item: any = await graphFetch(`drives/${driveId}/items/${itemId}?$select=name,size,@microsoft.graph.downloadUrl`);
	const dlUrl = item["@microsoft.graph.downloadUrl"];
	if (!dlUrl) throw new Error(`No download URL for item ${itemId}`);
	const resp = await edgeFetch(dlUrl);
	if (!resp.ok) throw new Error(`Download failed: ${resp.status}`);
	const buffer = Buffer.from(await resp.arrayBuffer());
	fs.writeFileSync(dest, buffer);
	return { file: dest, size: buffer.length };
}

function normalizeDriveFolderPath(folderPath?: string): string {
	return (folderPath ?? "")
		.replace(/\\/g, "/")
		.replace(/^\/+/, "")
		.replace(/\/+$/, "")
		.trim();
}

export async function ensureOneDriveFolder(folderPath?: string): Promise<any> {
	const normalized = normalizeDriveFolderPath(folderPath);
	if (!normalized) return graphFetch("me/drive/root?$select=id,name,webUrl,folder");

	let current: any = await graphFetch("me/drive/root?$select=id,name,webUrl,folder");
	for (const segment of normalized.split("/").filter(Boolean)) {
		const children = await graphFetch(`me/drive/items/${current.id}/children?$select=id,name,webUrl,folder&$top=200`);
		let next = (children.value ?? []).find((item: any) => item.name === segment && item.folder);
		if (!next) {
			next = await graphFetch(`me/drive/items/${current.id}/children`, {
				method: "POST",
				body: {
					name: segment,
					folder: {},
					"@microsoft.graph.conflictBehavior": "fail",
				},
			});
		}
		current = next;
	}
	return current;
}

function quickXorHashBase64(buffer: Buffer): string {
	const hash = new Uint8Array(20);
	const bitWidth = 160;
	const shift = 11;

	for (let i = 0; i < buffer.length; i++) {
		const b = buffer[i];
		const bitPos = (i * shift) % bitWidth;
		const bytePos = Math.floor(bitPos / 8);
		const bitOffset = bitPos % 8;

		hash[bytePos] ^= (b << bitOffset) & 0xff;
		hash[(bytePos + 1) % 20] ^= (b >> (8 - bitOffset)) & 0xff;
		if (bitOffset > 5) {
			hash[(bytePos + 2) % 20] ^= (b >> (16 - bitOffset)) & 0xff;
		}
	}

	let length = buffer.length;
	for (let i = 0; i < 8; i++) {
		hash[20 - 8 + i] ^= length & 0xff;
		length = Math.floor(length / 256);
	}

	return Buffer.from(hash).toString("base64");
}

async function findOneDriveChildByName(parentId: string, name: string): Promise<any | null> {
	const children = await graphFetch(`me/drive/items/${parentId}/children?$select=id,name,size,webUrl,parentReference,file,folder&$top=200`);
	return (children.value ?? []).find((item: any) => item.name === name) ?? null;
}

async function listOneDriveChildren(parentId: string): Promise<any[]> {
	const children = await graphFetch(`me/drive/items/${parentId}/children?$select=id,name,size,webUrl,parentReference,file,folder&$top=200`);
	return children.value ?? [];
}

function itemQuickXorHash(item: any): string | null {
	return item?.file?.hashes?.quickXorHash ?? null;
}

async function downloadDriveItemBuffer(itemId: string, driveId?: string): Promise<Buffer> {
	const endpoint = driveId ? `drives/${driveId}/items/${itemId}/content` : `me/drive/items/${itemId}/content`;
	const response = await graphFetch(endpoint, { method: "GET", responseType: "response" });
	const arr = await response.arrayBuffer();
	return Buffer.from(arr);
}

async function fileContentMatches(item: any, candidate: Buffer): Promise<boolean> {
	const itemId = item?.id;
	if (!itemId) return false;
	const driveId = item?.parentReference?.driveId;
	try {
		const remoteBuffer = await downloadDriveItemBuffer(itemId, driveId);
		return remoteBuffer.equals(candidate);
	} catch {
		return false;
	}
}

async function findOneDriveDuplicateByMetadata(parentId: string, candidate: Buffer): Promise<any | null> {
	const targetHash = quickXorHashBase64(candidate);
	const targetSize = candidate.length;
	const children = await listOneDriveChildren(parentId);
	for (const item of children) {
		if (item?.folder) continue;
		if ((item?.size ?? -1) !== targetSize) continue;
		if (itemQuickXorHash(item) !== targetHash) continue;
		if (await fileContentMatches(item, candidate)) return item; // strict second-step verify
	}
	return null;
}

/**
 * Upload a buffer into the current user's OneDrive, with optional content-based dedupe.
 *
 * The Teams-facing helper tools use this to avoid re-uploading the same generated file
 * over and over again. The quick-XOR hash / size / content checks are deliberately more
 * conservative than a filename-only check because the same logical artifact is often
 * regenerated under similar names during iterative work.
 */
export async function uploadBufferToOneDrive(
	buffer: Buffer,
	folderPath = "Attachments",
	fileName?: string,
	contentType = "application/octet-stream",
	preferExisting = true,
	strictDedupeByContent = true,
): Promise<any> {
	const MAX_SIMPLE = 4 * 1024 * 1024; // 4 MB — Graph simple upload limit

	const parent = await ensureOneDriveFolder(folderPath);
	const targetName = fileName?.trim() || `upload-${Date.now()}`;
	const targetQuickXor = quickXorHashBase64(buffer);

	if (preferExisting) {
		const existingByName = await findOneDriveChildByName(parent.id, targetName);
		if (existingByName && !existingByName.folder) {
			if (!strictDedupeByContent) return { ...existingByName, reusedExistingFile: true, dedupeMode: "name" };
			if ((existingByName.size ?? -1) === buffer.length && itemQuickXorHash(existingByName) === targetQuickXor) {
				if (await fileContentMatches(existingByName, buffer)) {
					return { ...existingByName, reusedExistingFile: true, dedupeMode: "name+metadata+content" };
				}
			}
		}
	}

	if (preferExisting && strictDedupeByContent) {
		const duplicate = await findOneDriveDuplicateByMetadata(parent.id, buffer);
		if (duplicate) return { ...duplicate, reusedExistingFile: true, dedupeMode: "metadata+content" };
	}

	if (buffer.length <= MAX_SIMPLE) {
		const uploaded = await graphFetch(`me/drive/items/${parent.id}:/${encodeURIComponent(targetName)}:/content`, {
			method: "PUT",
			rawBody: buffer as any,
			headers: { "Content-Type": contentType },
		});
		return { ...uploaded, reusedExistingFile: false, dedupeMode: "none" };
	}

	// Large file: use resumable upload session (supports up to 250 MB)
	const session = await graphFetch(`me/drive/items/${parent.id}:/${encodeURIComponent(targetName)}:/createUploadSession`, {
		method: "POST",
		body: { item: { "@microsoft.graph.conflictBehavior": "replace", name: targetName } },
	});
	const uploadUrl = session.uploadUrl;
	if (!uploadUrl) throw new Error("Failed to create upload session");

	const CHUNK_SIZE = 3_932_160; // 3.75 MB — must be multiple of 320 KiB
	let offset = 0;
	let result: any = null;
	while (offset < buffer.length) {
		const end = Math.min(offset + CHUNK_SIZE, buffer.length);
		const chunk = buffer.subarray(offset, end);
		const resp = await edgeFetch(uploadUrl, {
			method: "PUT",
			headers: {
				"Content-Length": String(chunk.length),
				"Content-Range": `bytes ${offset}-${end - 1}/${buffer.length}`,
			},
			body: chunk as any,
			signal: AbortSignal.timeout(120_000),
		});
		if (!resp.ok) throw new Error(`Upload chunk failed: ${resp.status} ${await resp.text()}`);
		result = await resp.json();
		offset = end;
	}
	return { ...result, reusedExistingFile: false, dedupeMode: "none" };
}

export async function uploadFileToOneDrive(
	localPath: string,
	folderPath = "Attachments",
	fileName?: string,
	preferExisting = true,
	strictDedupeByContent = true,
): Promise<any> {
	const resolvedLocalPath = path.resolve(localPath);
	if (!fs.existsSync(resolvedLocalPath)) throw new Error(`Local file not found: ${resolvedLocalPath}`);
	const stat = fs.statSync(resolvedLocalPath);
	if (!stat.isFile()) throw new Error(`Local path is not a file: ${resolvedLocalPath}`);
	const targetName = fileName?.trim() || path.basename(resolvedLocalPath);
	const buffer = fs.readFileSync(resolvedLocalPath);
	return uploadBufferToOneDrive(buffer, folderPath, targetName, "application/octet-stream", preferExisting, strictDedupeByContent);
}

export async function getExistingReadOnlyShareLink(itemId: string, driveId?: string): Promise<any | null> {
	const endpoint = driveId
		? `drives/${driveId}/items/${itemId}/permissions?$select=id,roles,link,shareId`
		: `me/drive/items/${itemId}/permissions?$select=id,roles,link,shareId`;
	const permissions = await graphFetch(endpoint);
	for (const permission of permissions.value ?? []) {
		const roles = permission.roles ?? [];
		const link = permission.link;
		const isReadOnly = link?.type === "view" || (Array.isArray(roles) && roles.includes("read"));
		if (link?.webUrl && isReadOnly) return permission;
	}
	return null;
}

export async function createOneDriveShareLink(itemId: string, type = "view", scope = "organization", driveId?: string): Promise<any> {
	const endpoint = driveId ? `drives/${driveId}/items/${itemId}/createLink` : `me/drive/items/${itemId}/createLink`;
	return graphFetch(endpoint, {
		method: "POST",
		body: { type, scope },
	});
}

export async function ensureReadOnlyShareUrl(itemId: string, scope = "organization", driveId?: string): Promise<{ permission: any; reusedExistingLink: boolean }> {
	const existing = await getExistingReadOnlyShareLink(itemId, driveId);
	if (existing?.link?.webUrl) return { permission: existing, reusedExistingLink: true };
	const created = await createOneDriveShareLink(itemId, "view", scope, driveId);
	return { permission: created, reusedExistingLink: false };
}

export async function resolveDriveItemFromDocumentUrl(inputUrl: string): Promise<{ itemId: string; driveId?: string; fileName: string; webUrl?: string }> {
	const resolved = resolveDocumentSourceUrl(inputUrl);
	const shareId = toShareId(resolved.resolvedUrl);
	const driveItem: any = await graphFetch(`shares/u!${shareId}/driveItem?$select=id,name,webUrl,parentReference`);
	if (!driveItem?.id) throw new Error("Could not resolve document URL to drive item");
	return {
		itemId: driveItem.id,
		driveId: driveItem.parentReference?.driveId,
		fileName: driveItem.name ?? "file",
		webUrl: driveItem.webUrl,
	};
}

export async function sendReferenceCardForItem(params: {
	chatId: string;
	itemId: string;
	driveId?: string;
	attachmentName: string;
	message?: string;
	scope?: string;
}): Promise<{ messageId: string | null; shareUrl: string; reusedExistingLink: boolean }> {
	const { permission, reusedExistingLink } = await ensureReadOnlyShareUrl(params.itemId, params.scope ?? "organization", params.driveId);
	const shareUrl = permission?.link?.webUrl;
	if (!shareUrl) throw new Error("Could not create a read-only share URL for file");

	const msg = await graphFetch(`chats/${encodeURIComponent(params.chatId)}/messages`, {
		method: "POST",
		body: buildReferenceAttachmentMessageBody(shareUrl, params.attachmentName, params.message),
	});

	return { messageId: msg?.id ?? null, shareUrl, reusedExistingLink };
}


// ═══════════════════════════════════════════════════════════════════════════
// EXTENSION ENTRY POINT
// ═══════════════════════════════════════════════════════════════════════════




export function requireEnterprise(toolName: string): void {
	if (isConsumerAccount()) {
		throw new Error(`${toolName} requires a Microsoft 365 work/school account.`);
	}
}

export function requireTeams(toolName: string): void {
	if (isConsumerAccount()) {
		throw new Error(`${toolName} requires Teams chat access which is not available for personal Microsoft accounts.`);
	}
}

export function truncate(text: string, max = 40000) {
	if (text.length <= max) return text;
	return text.substring(0, max) + `\n\n[Truncated at ${max} chars]`;
}
