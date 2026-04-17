import { getKeychainEntry, listKeychainEntries, resolveKeychainPlaceholders } from "../secure/keychain.js";
import { buildInjectedExecCommand, redactKeychainSecretsInText } from "../secure/shell-secrets.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";
const log = createLogger("proxmox.client");
const DEFAULT_STATUS_MARKER = "__PICLAW_PROXMOX_STATUS__:";
export const DEFAULT_PROXMOX_POLL_MS = 2_000;
export const DEFAULT_PROXMOX_TIMEOUT_MS = 120_000;
async function defaultCurlExecutor(command) {
    const proc = Bun.spawnSync(command, {
        cwd: process.cwd(),
        stdout: "pipe",
        stderr: "pipe",
        env: process.env,
    });
    return {
        exitCode: proc.exitCode,
        stdout: proc.stdout.toString(),
        stderr: proc.stderr.toString(),
    };
}
let curlExecutor = defaultCurlExecutor;
const DEFAULT_PROXMOX_KEYCHAIN = process.env.PICLAW_PROXMOX_TOKEN_KEYCHAIN || "proxmox/piclaw-management-token";
const DEFAULT_PROXMOX_BASE_URL = process.env.PVE_BASE || process.env.PICLAW_PROXMOX_BASE || "https://192.168.1.10:8006/api2/json";
/** Override/reset the curl executor for tests. */
export function setProxmoxCurlExecutorForTests(executor) {
    curlExecutor = executor ?? defaultCurlExecutor;
}
function normalizeBaseUrl(value) {
    const trimmed = value.trim().replace(/\/+$/, "");
    if (!trimmed) {
        throw new Error("Proxmox base_url is required.");
    }
    return trimmed;
}
function normalizeApiPath(value) {
    const trimmed = value.trim();
    if (!trimmed) {
        throw new Error("Proxmox request path is required.");
    }
    let next = trimmed;
    if (/^https?:\/\//i.test(next)) {
        throw new Error("Use a relative Proxmox API path, not an absolute URL.");
    }
    if (next.startsWith("/api2/json/")) {
        next = next.slice("/api2/json".length);
    }
    else if (next === "/api2/json") {
        next = "/";
    }
    if (!next.startsWith("/")) {
        next = `/${next}`;
    }
    return next;
}
function isScalar(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function appendParam(search, key, value) {
    if (value == null)
        return;
    if (Array.isArray(value)) {
        for (const item of value)
            appendParam(search, key, item);
        return;
    }
    if (isScalar(value)) {
        search.append(key, String(value));
        return;
    }
    search.append(key, JSON.stringify(value));
}
function toSearchParams(value) {
    const search = new URLSearchParams();
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        return search;
    }
    for (const [key, entry] of Object.entries(value)) {
        appendParam(search, key, entry);
    }
    return search;
}
function splitStatusMarker(stdout) {
    const markerIndex = stdout.lastIndexOf(`\n${DEFAULT_STATUS_MARKER}`);
    const raw = markerIndex >= 0 ? stdout.slice(markerIndex + 1).trim() : "";
    if (!raw.startsWith(DEFAULT_STATUS_MARKER)) {
        throw new Error("Proxmox request did not return an HTTP status marker.");
    }
    const status = parseInt(raw.slice(DEFAULT_STATUS_MARKER.length), 10);
    if (!Number.isFinite(status)) {
        throw new Error("Proxmox request returned an invalid HTTP status marker.");
    }
    const bodyText = markerIndex >= 0 ? stdout.slice(0, markerIndex) : "";
    return { bodyText, status };
}
function parseResponseBody(text) {
    const trimmed = text.trim();
    if (!trimmed)
        return null;
    try {
        return JSON.parse(trimmed);
    }
    catch {
        return trimmed;
    }
}
function parseTokenSecret(secret) {
    const trimmed = secret.trim();
    if (!trimmed)
        return null;
    try {
        const parsed = JSON.parse(trimmed);
        if (typeof parsed?.username === "string" && parsed.username.trim() && typeof parsed?.secret === "string" && parsed.secret.trim()) {
            return { username: parsed.username.trim(), secret: parsed.secret.trim() };
        }
    }
    catch (err) {
        debugSuppressedError(log, "Failed to parse Proxmox token secret as JSON; falling back to string formats.", err, {
            operation: "proxmox.parse_token_secret.parse_json",
        });
    }
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex > 0) {
        const username = trimmed.slice(0, equalsIndex).trim();
        const tokenSecret = trimmed.slice(equalsIndex + 1).trim();
        if (username && tokenSecret) {
            return { username, secret: tokenSecret };
        }
    }
    return null;
}
function asRecord(value, label) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`Proxmox API returned an invalid payload for ${label}.`);
    }
    return value;
}
function getPayloadData(payload, label) {
    const record = asRecord(payload, label);
    if (record.errors || record.error) {
        throw new Error(`Proxmox API error for ${label}: ${JSON.stringify(payload)}`);
    }
    return record.data ?? null;
}
function normalizePositiveInt(value, fallback) {
    return Number.isFinite(value) && value > 0 ? Math.trunc(value) : fallback;
}
function requireVmid(value, workflow) {
    if (!Number.isFinite(value) || value <= 0) {
        throw new Error(`Workflow ${workflow} requires vmid.`);
    }
    return Math.trunc(value);
}
function requireText(value, field, workflow) {
    const trimmed = typeof value === "string" ? value.trim() : "";
    if (!trimmed) {
        throw new Error(`Workflow ${workflow} requires ${field}.`);
    }
    return trimmed;
}
function normalizeLimit(value, fallback) {
    return Number.isFinite(value) && value > 0 ? Math.trunc(value) : fallback;
}
function asFlatRecord(value, field, workflow) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`Workflow ${workflow} requires ${field} to be an object when provided.`);
    }
    return value;
}
function cleanRecord(value) {
    return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}
function normalizeConfigMap(value, field, workflow) {
    if (value === undefined)
        return {};
    return cleanRecord(asFlatRecord(value, field, workflow));
}
function normalizeStorageType(value, workflow) {
    const trimmed = requireText(value, "storage_type", workflow);
    return trimmed;
}
function normalizeDownloadContent(value) {
    const trimmed = typeof value === "string" ? value.trim() : "";
    if (trimmed === "vztmpl" || trimmed === "import")
        return trimmed;
    return "iso";
}
function normalizeSlot(value, field, workflow) {
    const trimmed = requireText(value, field, workflow);
    if (!/^(ide[0-3]|sata[0-5]|scsi[0-9]|scsi1[0-9]|scsi2[0-9]|scsi30|virtio[0-9]|virtio1[0-5])$/i.test(trimmed)) {
        if (!/^(efidisk0|tpmstate0)$/i.test(trimmed)) {
            throw new Error(`Workflow ${workflow} received unsupported slot/disk identifier: ${trimmed}`);
        }
    }
    return trimmed;
}
function decodeBase64Text(value) {
    const text = typeof value === "string" ? value.trim() : "";
    if (!text)
        return "";
    const normalized = text.replace(/\s+/g, "");
    if (!/^[A-Za-z0-9+/=]+$/.test(normalized) || normalized.length % 4 !== 0) {
        return text;
    }
    try {
        const decoded = Buffer.from(normalized, "base64").toString("utf8");
        const reencoded = Buffer.from(decoded, "utf8").toString("base64").replace(/=+$/g, "");
        if (reencoded !== normalized.replace(/=+$/g, "")) {
            return text;
        }
        return decoded;
    }
    catch {
        return text;
    }
}
function normalizeMetricsQuery(input) {
    const timeframe = typeof input.timeframe === "string" && input.timeframe.trim() ? input.timeframe.trim() : "hour";
    const cf = typeof input.cf === "string" && input.cf.trim() ? input.cf.trim().toUpperCase() : "AVERAGE";
    return { timeframe, cf };
}
function normalizeMetricNames(input) {
    const values = new Set();
    if (typeof input.metric === "string" && input.metric.trim()) {
        values.add(input.metric.trim());
    }
    if (Array.isArray(input.metrics)) {
        for (const entry of input.metrics) {
            if (typeof entry === "string" && entry.trim()) {
                values.add(entry.trim());
            }
        }
    }
    return [...values];
}
function normalizeMetricsPoints(data, selectedMetrics) {
    const rows = Array.isArray(data) ? data : [];
    const metricSet = new Set(selectedMetrics);
    const points = rows
        .filter((row) => !!row && typeof row === "object" && !Array.isArray(row))
        .map((row) => {
        const point = {};
        for (const [key, value] of Object.entries(row)) {
            if (key === "time") {
                point[key] = value;
                continue;
            }
            if (selectedMetrics.length === 0 || metricSet.has(key)) {
                point[key] = value;
                metricSet.add(key);
            }
        }
        return point;
    });
    return { metrics: [...metricSet], points };
}
async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}
/** Resolve a Proxmox API token from a keychain entry. */
export async function resolveProxmoxToken(apiTokenKeychain) {
    const entry = await getKeychainEntry(apiTokenKeychain);
    if (entry.username?.trim() && entry.secret.trim()) {
        return { username: entry.username.trim(), secret: entry.secret.trim() };
    }
    const parsed = parseTokenSecret(entry.secret);
    if (parsed) {
        return parsed;
    }
    throw new Error(`Keychain entry ${apiTokenKeychain} must provide a username and secret for Proxmox API auth.`);
}
export async function discoverProxmoxInstances() {
    const envBase = (process.env.PVE_BASE || process.env.PICLAW_PROXMOX_BASE || "").trim() || null;
    const keychains = listKeychainEntries()
        .map((entry) => entry.name)
        .filter((name) => name.startsWith("proxmox/"));
    const candidates = [];
    for (const name of keychains) {
        try {
            await resolveProxmoxToken(name);
            candidates.push({
                source: name === DEFAULT_PROXMOX_KEYCHAIN ? "default-keychain" : "keychain",
                base_url: envBase || (name === DEFAULT_PROXMOX_KEYCHAIN ? DEFAULT_PROXMOX_BASE_URL : null),
                api_token_keychain: name,
                allow_insecure_tls: true,
            });
        }
        catch (err) {
            debugSuppressedError(log, "Skipping unusable Proxmox discovery keychain entry.", err, {
                operation: "proxmox.discover_instances.resolve_token",
                apiTokenKeychain: name,
            });
        }
    }
    const uniqueCandidates = candidates.filter((candidate, index, array) => array.findIndex((entry) => entry.api_token_keychain === candidate.api_token_keychain && entry.base_url === candidate.base_url) === index);
    const defaultCandidate = uniqueCandidates.find((candidate) => candidate.api_token_keychain === DEFAULT_PROXMOX_KEYCHAIN)
        ?? uniqueCandidates[0]
        ?? (envBase
            ? {
                source: "env",
                base_url: envBase,
                api_token_keychain: DEFAULT_PROXMOX_KEYCHAIN,
                allow_insecure_tls: true,
            }
            : null);
    return {
        default_candidate: defaultCandidate,
        candidates: uniqueCandidates,
    };
}
/** Execute a Proxmox API request using keychain-backed token auth. */
export async function requestProxmoxApi(config, request) {
    const baseUrl = normalizeBaseUrl(config.base_url);
    const path = normalizeApiPath(request.path);
    const method = request.method;
    const query = toSearchParams(request.query);
    const url = `${baseUrl}${path}${query.size ? `?${query.toString()}` : ""}`;
    const token = await resolveProxmoxToken(config.api_token_keychain);
    const command = [
        "curl",
        "-sS",
        ...(config.allow_insecure_tls ? ["-k"] : []),
        "-H",
        `Authorization: PVEAPIToken=${token.username}=${token.secret}`,
        "-H",
        "Accept: application/json",
        "-X",
        method,
    ];
    if (request.body !== undefined) {
        if (request.body_mode === "json") {
            command.push("-H", "Content-Type: application/json", "--data-raw", JSON.stringify(request.body));
        }
        else {
            const form = toSearchParams(request.body);
            command.push("-H", "Content-Type: application/x-www-form-urlencoded");
            command.push("--data-raw", form.toString());
        }
    }
    command.push("-w", `\n${DEFAULT_STATUS_MARKER}%{http_code}`);
    command.push(url);
    const result = await curlExecutor(command);
    if (result.exitCode !== 0) {
        const stderr = result.stderr.trim() || `curl failed with exit code ${result.exitCode}`;
        throw new Error(await redactKeychainSecretsInText(stderr));
    }
    const { bodyText, status } = splitStatusMarker(result.stdout);
    const body = parseResponseBody(bodyText);
    if (status >= 400) {
        const redactedBody = await redactKeychainSecretsInText(typeof body === "string" ? body : JSON.stringify(body));
        throw new Error(`Proxmox API ${method} ${path} failed with HTTP ${status}: ${redactedBody}`);
    }
    return {
        status,
        body,
        raw_body: bodyText,
        path,
        method,
    };
}
export class ProxmoxClient {
    config;
    constructor(config) {
        this.config = config;
    }
    async request(request) {
        return requestProxmoxApi(this.config, request);
    }
    async getClusterStatus() {
        const response = await this.request({ method: "GET", path: "/cluster/status" });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async listClusterResources(type) {
        const response = await this.request({
            method: "GET",
            path: "/cluster/resources",
            ...(type ? { query: { type } } : {}),
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async listVmResources() {
        const resources = await this.listClusterResources("vm");
        return resources;
    }
    async listNodes() {
        return this.listClusterResources("node");
    }
    async getNodeStatus(node) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/status`,
        });
        const data = getPayloadData(response.body, response.path);
        return data && typeof data === "object" && !Array.isArray(data) ? data : {};
    }
    async getNodeLog(node, input = {}) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/syslog`,
            query: { limit: normalizeLimit(input.lines, 100) },
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async runNodePowerAction(node, command) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/status`, {
            body: { command },
            body_mode: "form",
        });
        return { command, upid, wait_supported: false };
    }
    async listStorages(node) {
        if (!node)
            return this.listClusterResources("storage");
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/storage`,
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async getStorageStatus(node, storage) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/storage/${encodeURIComponent(storage)}/status`,
        });
        const data = getPayloadData(response.body, response.path);
        return data && typeof data === "object" && !Array.isArray(data) ? data : {};
    }
    async listStorageContent(node, storage, content) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/storage/${encodeURIComponent(storage)}/content`,
            ...(content ? { query: { content } } : {}),
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async listBackups(node, storage) {
        return this.listStorageContent(node, storage, "backup");
    }
    async listTasks(node, input = {}) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/tasks`,
            query: {
                ...(typeof input.vmid === "number" && input.vmid > 0 ? { vmid: Math.trunc(input.vmid) } : {}),
                limit: normalizeLimit(input.limit, 25),
            },
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async getTaskStatus(node, upid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/tasks/${encodeURIComponent(upid)}/status`,
        });
        const data = getPayloadData(response.body, response.path);
        return data && typeof data === "object" && !Array.isArray(data) ? data : {};
    }
    async getTaskLog(node, upid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/tasks/${encodeURIComponent(upid)}/log`,
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async findVm(vmid) {
        const resources = await this.listVmResources();
        const match = resources.find((entry) => Number(entry.vmid) === vmid && entry.type === "qemu");
        if (!match?.node) {
            throw new Error(`Could not resolve Proxmox node for VM ${vmid}.`);
        }
        return {
            ...match,
            vmid,
            node: match.node,
        };
    }
    async findLxc(vmid) {
        const resources = await this.listVmResources();
        const match = resources.find((entry) => Number(entry.vmid) === vmid && entry.type === "lxc");
        if (!match?.node) {
            throw new Error(`Could not resolve Proxmox node for LXC ${vmid}.`);
        }
        return {
            ...match,
            vmid,
            node: match.node,
        };
    }
    async getVmStatus(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/current`,
        });
        const data = asRecord(getPayloadData(response.body, response.path) ?? {}, response.path);
        return {
            name: typeof data.name === "string" ? data.name : null,
            vmid,
            node,
            status: typeof data.status === "string" ? data.status : null,
            qmpstatus: typeof data.qmpstatus === "string" ? data.qmpstatus : null,
            uptime: typeof data.uptime === "number" && Number.isFinite(data.uptime) ? data.uptime : null,
            agent: typeof data.agent === "number" && Number.isFinite(data.agent) ? data.agent : null,
        };
    }
    async getVmConfig(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/config`,
        });
        const data = getPayloadData(response.body, response.path);
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            return {};
        }
        return data;
    }
    async getLxcStatus(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/lxc/${vmid}/status/current`,
        });
        const data = asRecord(getPayloadData(response.body, response.path) ?? {}, response.path);
        return {
            name: typeof data.name === "string" ? data.name : null,
            vmid,
            node,
            status: typeof data.status === "string" ? data.status : null,
            qmpstatus: null,
            uptime: typeof data.uptime === "number" && Number.isFinite(data.uptime) ? data.uptime : null,
            agent: null,
        };
    }
    async getLxcConfig(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/lxc/${vmid}/config`,
        });
        const data = getPayloadData(response.body, response.path);
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            return {};
        }
        return data;
    }
    async submitTask(method, path, options = {}) {
        const response = await this.request({
            method,
            path,
            ...(options.query !== undefined ? { query: options.query } : {}),
            ...(options.body !== undefined ? { body: options.body } : {}),
            ...(options.body_mode ? { body_mode: options.body_mode } : {}),
        });
        const data = getPayloadData(response.body, response.path);
        return typeof data === "string" && data.trim() ? data.trim() : null;
    }
    async postTask(path, options = {}) {
        return this.submitTask("POST", path, options);
    }
    async waitForTask(node, upid, timeoutMs, pollMs) {
        const started = Date.now();
        while (Date.now() - started < timeoutMs) {
            const response = await this.request({
                method: "GET",
                path: `/nodes/${encodeURIComponent(node)}/tasks/${encodeURIComponent(upid)}/status`,
            });
            const data = asRecord(getPayloadData(response.body, response.path) ?? {}, response.path);
            const status = typeof data.status === "string" ? data.status : null;
            const exitstatus = typeof data.exitstatus === "string" ? data.exitstatus : null;
            if (status === "stopped") {
                return { status, exitstatus };
            }
            await sleep(pollMs);
        }
        throw new Error(`Timed out waiting for Proxmox task ${upid}.`);
    }
    async waitForVmState(node, vmid, target, timeoutMs, pollMs) {
        const started = Date.now();
        while (Date.now() - started < timeoutMs) {
            const status = await this.getVmStatus(node, vmid);
            const statusOk = !target.status || status.status === target.status;
            const qmpOk = !target.qmpstatus || status.qmpstatus === target.qmpstatus;
            if (statusOk && qmpOk) {
                return status;
            }
            await sleep(pollMs);
        }
        throw new Error(`Timed out waiting for VM ${vmid} to reach ${JSON.stringify(target)}.`);
    }
    async startVm(node, vmid, timeoutMs, pollMs) {
        const status = await this.getVmStatus(node, vmid);
        if (status.status === "running" && status.qmpstatus === "running") {
            return status;
        }
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/start`);
        if (upid) {
            const result = await this.waitForTask(node, upid, timeoutMs, pollMs);
            if (result.exitstatus && result.exitstatus !== "OK") {
                throw new Error(`Start task failed for VM ${vmid}: ${result.exitstatus}`);
            }
        }
        return this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
    }
    async resumeVm(node, vmid, timeoutMs, pollMs) {
        const status = await this.getVmStatus(node, vmid);
        if (status.status === "running" && status.qmpstatus === "running") {
            return status;
        }
        if (status.status !== "running") {
            return this.startVm(node, vmid, timeoutMs, pollMs);
        }
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/resume`);
        if (upid) {
            const result = await this.waitForTask(node, upid, timeoutMs, pollMs);
            if (result.exitstatus && result.exitstatus !== "OK") {
                throw new Error(`Resume task failed for VM ${vmid}: ${result.exitstatus}`);
            }
        }
        return this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
    }
    async stopVm(node, vmid, options) {
        const status = await this.getVmStatus(node, vmid);
        if (status.status === "stopped") {
            return status;
        }
        if (!options.force) {
            const shutdownUpid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/shutdown`, { query: { timeout: 60 } });
            if (shutdownUpid) {
                try {
                    const result = await this.waitForTask(node, shutdownUpid, options.timeoutMs, options.pollMs);
                    if (result.exitstatus && result.exitstatus !== "OK") {
                        throw new Error(result.exitstatus);
                    }
                }
                catch (err) {
                    debugSuppressedError(log, "Graceful Proxmox VM shutdown did not complete cleanly; falling back to forced stop.", err, {
                        operation: "proxmox.stop_vm.shutdown_fallback",
                        node,
                        vmid,
                        shutdownUpid,
                    });
                }
            }
            try {
                return await this.waitForVmState(node, vmid, { status: "stopped" }, options.timeoutMs, options.pollMs);
            }
            catch (err) {
                debugSuppressedError(log, "Timed out waiting for Proxmox VM shutdown; proceeding to forced stop.", err, {
                    operation: "proxmox.stop_vm.wait_for_state_fallback",
                    node,
                    vmid,
                });
            }
        }
        const stopUpid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/stop`);
        if (stopUpid) {
            const result = await this.waitForTask(node, stopUpid, options.timeoutMs, options.pollMs);
            if (result.exitstatus && result.exitstatus !== "OK") {
                throw new Error(`Forced stop task failed for VM ${vmid}: ${result.exitstatus}`);
            }
        }
        return this.waitForVmState(node, vmid, { status: "stopped" }, options.timeoutMs, options.pollMs);
    }
    async restartVm(node, vmid, timeoutMs, pollMs) {
        const status = await this.getVmStatus(node, vmid);
        if (status.status === "running" && status.qmpstatus === "suspended") {
            const resetUpid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/reset`);
            if (resetUpid) {
                const result = await this.waitForTask(node, resetUpid, timeoutMs, pollMs);
                if (result.exitstatus && result.exitstatus !== "OK") {
                    throw new Error(`Reset task failed for VM ${vmid}: ${result.exitstatus}`);
                }
            }
            const resumeUpid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/resume`);
            if (resumeUpid) {
                const result = await this.waitForTask(node, resumeUpid, timeoutMs, pollMs);
                if (result.exitstatus && result.exitstatus !== "OK") {
                    throw new Error(`Resume task failed for VM ${vmid}: ${result.exitstatus}`);
                }
            }
            return this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
        }
        await this.stopVm(node, vmid, { timeoutMs, pollMs, force: false });
        return this.startVm(node, vmid, timeoutMs, pollMs);
    }
    async waitForLxcState(node, vmid, target, timeoutMs, pollMs) {
        const started = Date.now();
        while (Date.now() - started < timeoutMs) {
            const status = await this.getLxcStatus(node, vmid);
            if (!target.status || status.status === target.status) {
                return status;
            }
            await sleep(pollMs);
        }
        throw new Error(`Timed out waiting for LXC ${vmid} to reach ${JSON.stringify(target)}.`);
    }
    async startLxc(node, vmid, timeoutMs, pollMs) {
        const status = await this.getLxcStatus(node, vmid);
        if (status.status === "running")
            return status;
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/lxc/${vmid}/status/start`);
        if (upid) {
            const result = await this.waitForTask(node, upid, timeoutMs, pollMs);
            if (result.exitstatus && result.exitstatus !== "OK") {
                throw new Error(`Start task failed for LXC ${vmid}: ${result.exitstatus}`);
            }
        }
        return this.waitForLxcState(node, vmid, { status: "running" }, timeoutMs, pollMs);
    }
    async stopLxc(node, vmid, options) {
        const status = await this.getLxcStatus(node, vmid);
        if (status.status === "stopped")
            return status;
        const action = options.force ? "stop" : "shutdown";
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/lxc/${vmid}/status/${action}`);
        if (upid) {
            const result = await this.waitForTask(node, upid, options.timeoutMs, options.pollMs);
            if (result.exitstatus && result.exitstatus !== "OK") {
                throw new Error(`${action} task failed for LXC ${vmid}: ${result.exitstatus}`);
            }
        }
        return this.waitForLxcState(node, vmid, { status: "stopped" }, options.timeoutMs, options.pollMs);
    }
    async restartLxc(node, vmid, timeoutMs, pollMs) {
        await this.stopLxc(node, vmid, { timeoutMs, pollMs, force: false });
        return this.startLxc(node, vmid, timeoutMs, pollMs);
    }
    async getVmIp(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/agent/network-get-interfaces`,
        });
        const data = getPayloadData(response.body, response.path);
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            const payload = asRecord(response.body, response.path);
            const message = typeof payload.message === "string" ? payload.message : "QEMU guest agent did not return interface data.";
            throw new Error(message);
        }
        const result = Array.isArray(data.result) ? data.result : [];
        const addresses = new Set();
        for (const iface of result) {
            const entries = Array.isArray(iface["ip-addresses"]) ? iface["ip-addresses"] : [];
            for (const entry of entries) {
                const type = typeof entry["ip-address-type"] === "string" ? entry["ip-address-type"] : "";
                const ip = typeof entry["ip-address"] === "string" ? entry["ip-address"].trim() : "";
                if (!ip || ip === "127.0.0.1" || ip === "::1")
                    continue;
                if (type !== "ipv4" && type !== "ipv6")
                    continue;
                addresses.add(ip);
            }
        }
        return { source: "qemu-guest-agent", addresses: [...addresses] };
    }
    async getLxcIp(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/lxc/${vmid}/interfaces`,
        });
        const data = getPayloadData(response.body, response.path);
        const rows = Array.isArray(data) ? data : [];
        const addresses = new Set();
        for (const iface of rows) {
            const ipv4 = typeof iface.inet === "string" ? iface.inet.trim() : "";
            const ipv6 = typeof iface.inet6 === "string" ? iface.inet6.trim() : "";
            for (const raw of [ipv4, ipv6]) {
                const ip = raw.split("/")[0]?.trim() || "";
                if (!ip || ip === "127.0.0.1" || ip === "::1")
                    continue;
                addresses.add(ip);
            }
        }
        return { source: "lxc-interfaces", addresses: [...addresses] };
    }
    async createVm(node, vmid, input) {
        const body = cleanRecord({
            vmid,
            ...(input.name?.trim() ? { name: input.name.trim() } : {}),
            ...(Number.isFinite(input.memory) && input.memory > 0 ? { memory: Math.trunc(input.memory) } : {}),
            ...(Number.isFinite(input.cores) && input.cores > 0 ? { cores: Math.trunc(input.cores) } : {}),
            ...(Number.isFinite(input.sockets) && input.sockets > 0 ? { sockets: Math.trunc(input.sockets) } : {}),
            ...(input.ostype?.trim() ? { ostype: input.ostype.trim() } : {}),
            ...(input.net0?.trim() ? { net0: input.net0.trim() } : {}),
            ...(input.iso_slot?.trim() && input.iso_volume?.trim() ? { [input.iso_slot.trim()]: `${input.iso_volume.trim()},media=cdrom` } : {}),
            ...(input.config || {}),
        });
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu`, { body, body_mode: "form" });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const vm = await this.findVm(vmid);
        return { upid, task, vm };
    }
    async updateVmConfig(node, vmid, body, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const upid = await this.submitTask("PUT", `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/config`, { body, body_mode: "form" });
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { upid, task, config: await this.getVmConfig(node, vmid) };
    }
    async attachVmIso(node, vmid, slot, isoVolume, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        return this.updateVmConfig(node, vmid, { [slot]: `${isoVolume},media=cdrom` }, timeoutMs, pollMs);
    }
    async detachVmIso(node, vmid, slot, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        return this.updateVmConfig(node, vmid, { delete: slot }, timeoutMs, pollMs);
    }
    async detachVmDisk(node, vmid, disk, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        return this.updateVmConfig(node, vmid, { delete: disk }, timeoutMs, pollMs);
    }
    async removeVmDisk(node, vmid, disk, force, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const upid = await this.submitTask("PUT", `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/unlink`, {
            body: cleanRecord({ idlist: disk, ...(force ? { force: true } : {}) }),
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { upid, task, config: await this.getVmConfig(node, vmid) };
    }
    async resizeVmDisk(node, vmid, disk, size) {
        const response = await this.request({
            method: "PUT",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/resize`,
            body: { disk, size },
            body_mode: "form",
        });
        return { result: getPayloadData(response.body, response.path), config: await this.getVmConfig(node, vmid) };
    }
    async createLxc(node, vmid, input) {
        const body = cleanRecord({
            vmid,
            ...(input.hostname?.trim() ? { hostname: input.hostname.trim() } : {}),
            ...(Number.isFinite(input.memory) && input.memory > 0 ? { memory: Math.trunc(input.memory) } : {}),
            ...(Number.isFinite(input.cores) && input.cores > 0 ? { cores: Math.trunc(input.cores) } : {}),
            ...(input.net0?.trim() ? { net0: input.net0.trim() } : {}),
            ...(input.ostemplate?.trim() ? { ostemplate: input.ostemplate.trim() } : {}),
            ...(input.rootfs?.trim() ? { rootfs: input.rootfs.trim() } : {}),
            ...(input.password?.trim() ? { password: input.password.trim() } : {}),
            ...(input.ssh_public_keys?.trim() ? { "ssh-public-keys": input.ssh_public_keys.trim() } : {}),
            ...(typeof input.unprivileged === "boolean" ? { unprivileged: input.unprivileged ? 1 : 0 } : {}),
            ...(input.config || {}),
        });
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/lxc`, { body, body_mode: "form" });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const vm = await this.findLxc(vmid);
        return { upid, task, vm };
    }
    async createStorage(storage, type, input) {
        await this.request({
            method: "POST",
            path: "/storage",
            body: cleanRecord({ storage, type, ...(input.config || {}) }),
            body_mode: "form",
        });
        return { storage, type, created: true };
    }
    async downloadUrlToStorage(node, storage, input) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/storage/${encodeURIComponent(storage)}/download-url`, {
            body: cleanRecord({
                url: input.url,
                filename: input.filename,
                content: input.content,
                ...(input.checksum?.trim() ? { checksum: input.checksum.trim() } : {}),
                ...(input.checksum_algorithm?.trim() ? { "checksum-algorithm": input.checksum_algorithm.trim() } : {}),
                ...(input.compression?.trim() ? { compression: input.compression.trim() } : {}),
                ...(typeof input.verify_certificates === "boolean" ? { "verify-certificates": input.verify_certificates ? 1 : 0 } : {}),
            }),
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const content = await this.listStorageContent(node, storage, input.content);
        const file = content.find((entry) => JSON.stringify(entry).includes(input.filename)) || null;
        return { upid, task, storage, content_type: input.content, filename: input.filename, ...(file ? { file } : {}) };
    }
    async listVmSnapshots(node, vmid) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/snapshot`,
        });
        const data = getPayloadData(response.body, response.path);
        return Array.isArray(data) ? data : [];
    }
    async createVmSnapshot(node, vmid, snapshotName, description, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/snapshot`, {
            body: {
                snapname: snapshotName,
                ...(description?.trim() ? { description: description.trim() } : {}),
            },
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { snapname: snapshotName, upid, task };
    }
    async rollbackVmSnapshot(node, vmid, snapshotName, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/snapshot/${encodeURIComponent(snapshotName)}/rollback`);
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { snapname: snapshotName, upid, task };
    }
    async deleteVmSnapshot(node, vmid, snapshotName, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const response = await this.request({
            method: "DELETE",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/snapshot/${encodeURIComponent(snapshotName)}`,
        });
        const data = getPayloadData(response.body, response.path);
        const upid = typeof data === "string" && data.trim() ? data.trim() : null;
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { snapname: snapshotName, upid, task };
    }
    async cloneVm(node, vmid, input) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/clone`, {
            body: {
                newid: input.newid,
                ...(input.new_name?.trim() ? { name: input.new_name.trim() } : {}),
                ...(input.target_node?.trim() ? { target: input.target_node.trim() } : {}),
                ...(input.target_storage?.trim() ? { storage: input.target_storage.trim() } : {}),
                ...(typeof input.full === "boolean" ? { full: input.full ? 1 : 0 } : {}),
                ...(input.description?.trim() ? { description: input.description.trim() } : {}),
            },
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const created = await this.findVm(input.newid);
        return { upid, task, vm: created };
    }
    async migrateVm(node, vmid, input) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/migrate`, {
            body: {
                target: input.target_node,
                ...(input.target_storage?.trim() ? { targetstorage: input.target_storage.trim() } : {}),
                ...(typeof input.online === "boolean" ? { online: input.online ? 1 : 0 } : {}),
                ...(typeof input.with_local_disks === "boolean" ? { "with-local-disks": input.with_local_disks ? 1 : 0 } : {}),
            },
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const migrated = await this.findVm(vmid);
        return { upid, task, vm: migrated };
    }
    async createBackup(node, vmid, input) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/vzdump`, {
            body: {
                vmid,
                storage: input.storage,
                ...(input.mode?.trim() ? { mode: input.mode.trim() } : {}),
                ...(input.compress?.trim() ? { compress: input.compress.trim() } : {}),
            },
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        return { vmid, storage: input.storage, upid, task };
    }
    async restoreBackup(node, sourceStorage, archive, vmid, input) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/storage/${encodeURIComponent(sourceStorage)}/content`, {
            body: {
                vmid,
                archive,
                ...(input.target_storage?.trim() ? { storage: input.target_storage.trim() } : {}),
            },
            body_mode: "form",
        });
        const task = upid ? await this.waitForTask(node, upid, input.timeoutMs ?? DEFAULT_PROXMOX_TIMEOUT_MS, input.pollMs ?? DEFAULT_PROXMOX_POLL_MS) : null;
        const restored = await this.findVm(vmid);
        return { vmid, source_storage: sourceStorage, archive, target_storage: input.target_storage ?? null, upid, task, vm: restored };
    }
    async markVmTemplate(node, vmid, timeoutMs = DEFAULT_PROXMOX_TIMEOUT_MS, pollMs = DEFAULT_PROXMOX_POLL_MS) {
        const upid = await this.postTask(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/template`);
        const task = upid ? await this.waitForTask(node, upid, timeoutMs, pollMs) : null;
        return { upid, task };
    }
    async getVmAgentInfo(node, vmid, action) {
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/agent/${action}`,
        });
        return getPayloadData(response.body, response.path);
    }
    async execVmAgentCommand(node, vmid, input) {
        const wrappedCommand = await buildInjectedExecCommand(input.shell_family ?? "posix", input.command, input.command_args || []);
        const resolvedInputData = typeof input.input_data === "string" && input.input_data.length > 0
            ? await resolveKeychainPlaceholders(input.input_data)
            : undefined;
        const response = await this.request({
            method: "POST",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/agent/exec`,
            body: {
                command: [wrappedCommand.command, ...wrappedCommand.commandArgs],
                ...(Object.keys(wrappedCommand.env).length > 0
                    ? { env: Object.entries(wrappedCommand.env).map(([key, value]) => `${key}=${value}`) }
                    : {}),
                ...(typeof resolvedInputData === "string" && resolvedInputData.length > 0 ? { "input-data": resolvedInputData } : {}),
            },
            body_mode: "form",
        });
        const execData = getPayloadData(response.body, response.path);
        const pid = typeof execData === "number"
            ? execData
            : (typeof execData === "string" && execData.trim() ? Number(execData) : Number(execData?.pid ?? NaN));
        if (!Number.isFinite(pid) || pid <= 0) {
            throw new Error(`QEMU guest agent did not return an exec pid for VM ${vmid}.`);
        }
        const started = Date.now();
        while (Date.now() - started < input.timeoutMs) {
            const response = await this.request({
                method: "GET",
                path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/agent/exec-status`,
                query: { pid },
            });
            const data = asRecord(getPayloadData(response.body, response.path) ?? {}, response.path);
            if (data.exited === true || data.exited === 1 || data.exited === "1") {
                const outData = decodeBase64Text(data["out-data"]);
                const errData = decodeBase64Text(data["err-data"]);
                const redactedOutData = await redactKeychainSecretsInText(outData);
                const redactedErrData = await redactKeychainSecretsInText(errData);
                return {
                    pid,
                    exitcode: typeof data.exitcode === "number" ? data.exitcode : null,
                    out_data: redactedOutData,
                    err_data: redactedErrData,
                    raw: {
                        ...data,
                        ...(redactedOutData !== outData ? { "out-data": "[REDACTED]" } : {}),
                        ...(redactedErrData !== errData ? { "err-data": "[REDACTED]" } : {}),
                    },
                };
            }
            await sleep(input.pollMs);
        }
        throw new Error(`Timed out waiting for QEMU guest exec on VM ${vmid}.`);
    }
    async getNodeMetrics(node, query, selectedMetrics) {
        const normalized = normalizeMetricsQuery(query);
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/rrddata`,
            query: normalized,
        });
        const data = getPayloadData(response.body, response.path);
        const { metrics, points } = normalizeMetricsPoints(data, selectedMetrics);
        return {
            source: "rrddata",
            scope: "node",
            timeframe: normalized.timeframe,
            cf: normalized.cf,
            metrics,
            points,
        };
    }
    async getVmMetrics(node, vmid, query, selectedMetrics) {
        const normalized = normalizeMetricsQuery(query);
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/qemu/${vmid}/rrddata`,
            query: normalized,
        });
        const data = getPayloadData(response.body, response.path);
        const { metrics, points } = normalizeMetricsPoints(data, selectedMetrics);
        return {
            source: "rrddata",
            scope: "vm",
            timeframe: normalized.timeframe,
            cf: normalized.cf,
            metrics,
            points,
        };
    }
    async getStorageMetrics(node, storage, query, selectedMetrics) {
        const normalized = normalizeMetricsQuery(query);
        const response = await this.request({
            method: "GET",
            path: `/nodes/${encodeURIComponent(node)}/storage/${encodeURIComponent(storage)}/rrddata`,
            query: normalized,
        });
        const data = getPayloadData(response.body, response.path);
        const { metrics, points } = normalizeMetricsPoints(data, selectedMetrics);
        return {
            source: "rrddata",
            scope: "storage",
            timeframe: normalized.timeframe,
            cf: normalized.cf,
            metrics,
            points,
        };
    }
}
async function resolveNodeForVm(client, workflow, vmid, explicitNode) {
    if (explicitNode?.trim()) {
        return {
            node: explicitNode.trim(),
            vm: { vmid, node: explicitNode.trim() },
        };
    }
    const vm = await client.findVm(vmid);
    return { node: vm.node, vm };
}
async function resolveNodeForLxc(client, workflow, vmid, explicitNode) {
    if (explicitNode?.trim()) {
        return {
            node: explicitNode.trim(),
            vm: { vmid, node: explicitNode.trim() },
        };
    }
    const vm = await client.findLxc(vmid);
    return { node: vm.node, vm };
}
/** Run a higher-level Proxmox workflow on top of the raw request helper. */
export async function runProxmoxWorkflow(config, input) {
    const client = new ProxmoxClient(config);
    const workflow = input.workflow;
    const timeoutMs = normalizePositiveInt(input.timeout_ms, DEFAULT_PROXMOX_TIMEOUT_MS);
    const pollMs = normalizePositiveInt(input.poll_ms, DEFAULT_PROXMOX_POLL_MS);
    const selectedMetrics = normalizeMetricNames(input);
    switch (workflow) {
        case "cluster.status": {
            return { workflow, result: await client.getClusterStatus() };
        }
        case "vm.resolve_node": {
            const vmid = requireVmid(input.vmid, workflow);
            const vm = await client.findVm(vmid);
            return { workflow, vmid, node: vm.node, result: vm };
        }
        case "vm.status": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.getVmStatus(node, vmid);
            return { workflow, vmid, node, result };
        }
        case "vm.inspect": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const status = await client.getVmStatus(node, vmid);
            const configResult = await client.getVmConfig(node, vmid);
            return { workflow, vmid, node, result: { status, config: configResult } };
        }
        case "vm.create": {
            const vmid = requireVmid(input.vmid, workflow);
            const node = requireText(input.node, "node", workflow);
            const config = normalizeConfigMap(input.config, "config", workflow);
            const isoSlot = input.slot?.trim() ? normalizeSlot(input.slot, "slot", workflow) : undefined;
            return {
                workflow,
                vmid,
                node,
                result: await client.createVm(node, vmid, {
                    ...(typeof input.name === "string" ? { name: input.name } : {}),
                    ...(typeof input.memory === "number" ? { memory: input.memory } : {}),
                    ...(typeof input.cores === "number" ? { cores: input.cores } : {}),
                    ...(typeof input.sockets === "number" ? { sockets: input.sockets } : {}),
                    ...(typeof input.ostype === "string" ? { ostype: input.ostype } : {}),
                    ...(typeof input.net0 === "string" ? { net0: input.net0 } : {}),
                    ...(typeof isoSlot === "string" ? { iso_slot: isoSlot } : {}),
                    ...(typeof input.iso_volume === "string" ? { iso_volume: input.iso_volume } : {}),
                    ...(Object.keys(config).length > 0 ? { config } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "vm.iso.attach": {
            const vmid = requireVmid(input.vmid, workflow);
            const isoVolume = requireText(input.iso_volume, "iso_volume", workflow);
            const slot = normalizeSlot(input.slot || "ide2", "slot", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.attachVmIso(node, vmid, slot, isoVolume, timeoutMs, pollMs) };
        }
        case "vm.iso.detach": {
            const vmid = requireVmid(input.vmid, workflow);
            const slot = normalizeSlot(input.slot || "ide2", "slot", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.detachVmIso(node, vmid, slot, timeoutMs, pollMs) };
        }
        case "vm.disk.resize": {
            const vmid = requireVmid(input.vmid, workflow);
            const disk = normalizeSlot(input.disk, "disk", workflow);
            const size = requireText(input.size, "size", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.resizeVmDisk(node, vmid, disk, size) };
        }
        case "vm.disk.detach": {
            const vmid = requireVmid(input.vmid, workflow);
            const disk = normalizeSlot(input.disk, "disk", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.detachVmDisk(node, vmid, disk, timeoutMs, pollMs) };
        }
        case "vm.disk.remove": {
            const vmid = requireVmid(input.vmid, workflow);
            const disk = normalizeSlot(input.disk, "disk", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.removeVmDisk(node, vmid, disk, input.force === true, timeoutMs, pollMs) };
        }
        case "vm.start": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.startVm(node, vmid, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "vm.stop": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.stopVm(node, vmid, { timeoutMs, pollMs, force: input.force });
            return { workflow, vmid, node, result };
        }
        case "vm.resume": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.resumeVm(node, vmid, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "vm.restart": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.restartVm(node, vmid, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "vm.ip": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.getVmIp(node, vmid);
            return { workflow, vmid, node, result };
        }
        case "vm.migrate": {
            const vmid = requireVmid(input.vmid, workflow);
            const targetNode = requireText(input.target_node, "target_node", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return {
                workflow,
                vmid,
                node,
                result: await client.migrateVm(node, vmid, {
                    target_node: targetNode,
                    ...(typeof input.target_storage === "string" ? { target_storage: input.target_storage } : {}),
                    ...(typeof input.online === "boolean" ? { online: input.online } : {}),
                    ...(typeof input.with_local_disks === "boolean" ? { with_local_disks: input.with_local_disks } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "lxc.resolve_node": {
            const vmid = requireVmid(input.vmid, workflow);
            const vm = await client.findLxc(vmid);
            return { workflow, vmid, node: vm.node, result: vm };
        }
        case "lxc.status": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const result = await client.getLxcStatus(node, vmid);
            return { workflow, vmid, node, result };
        }
        case "lxc.inspect": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const status = await client.getLxcStatus(node, vmid);
            const configResult = await client.getLxcConfig(node, vmid);
            return { workflow, vmid, node, result: { status, config: configResult } };
        }
        case "lxc.create": {
            const vmid = requireVmid(input.vmid, workflow);
            const node = requireText(input.node, "node", workflow);
            const config = normalizeConfigMap(input.config, "config", workflow);
            return {
                workflow,
                vmid,
                node,
                result: await client.createLxc(node, vmid, {
                    ...(typeof input.hostname === "string" ? { hostname: input.hostname } : {}),
                    ...(typeof input.memory === "number" ? { memory: input.memory } : {}),
                    ...(typeof input.cores === "number" ? { cores: input.cores } : {}),
                    ...(typeof input.net0 === "string" ? { net0: input.net0 } : {}),
                    ...(typeof input.ostemplate === "string" ? { ostemplate: input.ostemplate } : {}),
                    ...(typeof input.rootfs === "string" ? { rootfs: input.rootfs } : {}),
                    ...(typeof input.password === "string" ? { password: input.password } : {}),
                    ...(typeof input.ssh_public_keys === "string" ? { ssh_public_keys: input.ssh_public_keys } : {}),
                    ...(typeof input.unprivileged === "boolean" ? { unprivileged: input.unprivileged } : {}),
                    ...(Object.keys(config).length > 0 ? { config } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "lxc.start": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const result = await client.startLxc(node, vmid, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "lxc.stop": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const result = await client.stopLxc(node, vmid, { timeoutMs, pollMs, force: input.force });
            return { workflow, vmid, node, result };
        }
        case "lxc.restart": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const result = await client.restartLxc(node, vmid, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "lxc.ip": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForLxc(client, workflow, vmid, input.node);
            const result = await client.getLxcIp(node, vmid);
            return { workflow, vmid, node, result };
        }
        case "node.list": {
            return { workflow, result: await client.listNodes() };
        }
        case "node.inspect": {
            const node = requireText(input.node, "node", workflow);
            return { workflow, node, result: await client.getNodeStatus(node) };
        }
        case "node.log": {
            const node = requireText(input.node, "node", workflow);
            return { workflow, node, result: await client.getNodeLog(node, { lines: input.lines ?? input.limit }) };
        }
        case "node.reboot": {
            const node = requireText(input.node, "node", workflow);
            return { workflow, node, result: await client.runNodePowerAction(node, "reboot") };
        }
        case "node.shutdown": {
            const node = requireText(input.node, "node", workflow);
            return { workflow, node, result: await client.runNodePowerAction(node, "shutdown") };
        }
        case "storage.list": {
            return {
                workflow,
                ...(input.node?.trim() ? { node: input.node.trim() } : {}),
                result: await client.listStorages(input.node?.trim() || undefined),
            };
        }
        case "storage.inspect": {
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            return { workflow, node, result: { storage, ...(await client.getStorageStatus(node, storage)) } };
        }
        case "storage.content.list": {
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            return { workflow, node, result: { storage, content: await client.listStorageContent(node, storage) } };
        }
        case "storage.create": {
            const storage = requireText(input.storage, "storage", workflow);
            const storageType = normalizeStorageType(input.storage_type, workflow);
            const config = normalizeConfigMap(input.config, "config", workflow);
            return { workflow, result: await client.createStorage(storage, storageType, { config }) };
        }
        case "storage.download_url": {
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            const downloadUrl = requireText(input.download_url, "download_url", workflow);
            const filename = requireText(input.filename, "filename", workflow);
            const content = normalizeDownloadContent(input.content);
            return {
                workflow,
                node,
                result: await client.downloadUrlToStorage(node, storage, {
                    url: downloadUrl,
                    filename,
                    content,
                    ...(typeof input.checksum === "string" ? { checksum: input.checksum } : {}),
                    ...(typeof input.checksum_algorithm === "string" ? { checksum_algorithm: input.checksum_algorithm } : {}),
                    ...(typeof input.compression === "string" ? { compression: input.compression } : {}),
                    ...(typeof input.verify_certificates === "boolean" ? { verify_certificates: input.verify_certificates } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "backup.list": {
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            return { workflow, node, result: { storage, backups: await client.listBackups(node, storage) } };
        }
        case "backup.create": {
            const vmid = requireVmid(input.vmid, workflow);
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            return {
                workflow,
                vmid,
                node,
                result: await client.createBackup(node, vmid, {
                    storage,
                    ...(typeof input.mode === "string" ? { mode: input.mode } : {}),
                    ...(typeof input.compress === "string" ? { compress: input.compress } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "backup.restore": {
            const vmid = requireVmid(input.vmid, workflow);
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            const backupVolid = requireText(input.backup_volid, "backup_volid", workflow);
            return {
                workflow,
                vmid,
                node,
                result: await client.restoreBackup(node, storage, backupVolid, vmid, {
                    ...(typeof input.target_storage === "string" ? { target_storage: input.target_storage } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "task.list": {
            const node = requireText(input.node, "node", workflow);
            return { workflow, node, result: await client.listTasks(node, { vmid: input.vmid, limit: input.limit }) };
        }
        case "task.status": {
            const node = requireText(input.node, "node", workflow);
            const upid = requireText(input.upid, "upid", workflow);
            return { workflow, node, result: await client.getTaskStatus(node, upid) };
        }
        case "task.log": {
            const node = requireText(input.node, "node", workflow);
            const upid = requireText(input.upid, "upid", workflow);
            return { workflow, node, result: await client.getTaskLog(node, upid) };
        }
        case "task.wait": {
            const node = requireText(input.node, "node", workflow);
            const upid = requireText(input.upid, "upid", workflow);
            const result = await client.waitForTask(node, upid, timeoutMs, pollMs);
            return { workflow, node, result };
        }
        case "vm.wait_state": {
            const vmid = requireVmid(input.vmid, workflow);
            const target = input.target ?? {};
            if (!target.status && !target.qmpstatus) {
                throw new Error(`Workflow ${workflow} requires target.status or target.qmpstatus.`);
            }
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.waitForVmState(node, vmid, target, timeoutMs, pollMs);
            return { workflow, vmid, node, result };
        }
        case "vm.snapshot.list": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.listVmSnapshots(node, vmid) };
        }
        case "vm.snapshot.create": {
            const vmid = requireVmid(input.vmid, workflow);
            const snapshotName = requireText(input.snapshot_name, "snapshot_name", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.createVmSnapshot(node, vmid, snapshotName, input.description, timeoutMs, pollMs) };
        }
        case "vm.snapshot.rollback": {
            const vmid = requireVmid(input.vmid, workflow);
            const snapshotName = requireText(input.snapshot_name, "snapshot_name", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.rollbackVmSnapshot(node, vmid, snapshotName, timeoutMs, pollMs) };
        }
        case "vm.snapshot.delete": {
            const vmid = requireVmid(input.vmid, workflow);
            const snapshotName = requireText(input.snapshot_name, "snapshot_name", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.deleteVmSnapshot(node, vmid, snapshotName, timeoutMs, pollMs) };
        }
        case "vm.clone": {
            const vmid = requireVmid(input.vmid, workflow);
            const newid = normalizeLimit(input.newid, 0);
            if (newid <= 0) {
                throw new Error(`Workflow ${workflow} requires newid.`);
            }
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return {
                workflow,
                vmid,
                node,
                result: await client.cloneVm(node, vmid, {
                    newid,
                    ...(typeof input.new_name === "string" ? { new_name: input.new_name } : {}),
                    ...(typeof input.target_node === "string" ? { target_node: input.target_node } : {}),
                    ...(typeof input.target_storage === "string" ? { target_storage: input.target_storage } : {}),
                    ...(typeof input.full === "boolean" ? { full: input.full } : {}),
                    ...(typeof input.description === "string" ? { description: input.description } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "vm.template.create": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.markVmTemplate(node, vmid, timeoutMs, pollMs) };
        }
        case "vm.agent.exec": {
            const vmid = requireVmid(input.vmid, workflow);
            const command = requireText(input.command, "command", workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return {
                workflow,
                vmid,
                node,
                result: await client.execVmAgentCommand(node, vmid, {
                    command,
                    ...(Array.isArray(input.command_args) ? { command_args: input.command_args } : {}),
                    ...(typeof input.input_data === "string" ? { input_data: input.input_data } : {}),
                    ...(input.shell_family === "powershell" || input.shell_family === "posix" ? { shell_family: input.shell_family } : {}),
                    timeoutMs,
                    pollMs,
                }),
            };
        }
        case "vm.agent.osinfo": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.getVmAgentInfo(node, vmid, "get-osinfo") };
        }
        case "vm.agent.fsinfo": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.getVmAgentInfo(node, vmid, "get-fsinfo") };
        }
        case "vm.agent.users": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            return { workflow, vmid, node, result: await client.getVmAgentInfo(node, vmid, "get-users") };
        }
        case "metrics.node": {
            const node = requireText(input.node, "node", workflow);
            const result = await client.getNodeMetrics(node, { timeframe: input.timeframe, cf: input.cf }, selectedMetrics);
            return { workflow, node, result };
        }
        case "metrics.vm": {
            const vmid = requireVmid(input.vmid, workflow);
            const { node } = await resolveNodeForVm(client, workflow, vmid, input.node);
            const result = await client.getVmMetrics(node, vmid, { timeframe: input.timeframe, cf: input.cf }, selectedMetrics);
            return { workflow, vmid, node, result };
        }
        case "metrics.storage": {
            const node = requireText(input.node, "node", workflow);
            const storage = requireText(input.storage, "storage", workflow);
            const result = await client.getStorageMetrics(node, storage, { timeframe: input.timeframe, cf: input.cf }, selectedMetrics);
            return { workflow, node, result: { storage, ...result } };
        }
        default: {
            const exhaustive = workflow;
            throw new Error(`Unsupported Proxmox workflow: ${exhaustive}`);
        }
    }
}
