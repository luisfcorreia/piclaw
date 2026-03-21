#!/usr/bin/env bun
/**
 * scripts/proxmox.ts – Proxmox VM operator helper for PiClaw.
 *
 * Goals:
 *   - Resolve the Proxmox API token via the piclaw keychain CLI.
 *   - Provide action-oriented subcommands instead of raw API passthrough.
 *   - Hide node discovery, auth header construction, and task polling.
 *
 * Usage examples:
 *   bun run scripts/proxmox.ts vm status --vmid 117
 *   bun run scripts/proxmox.ts vm restart --vmid 117
 *   bun run scripts/proxmox.ts vm ip --vmid 117 --json
 */

type Json = Record<string, unknown>;

type ProxmoxToken = {
  username: string;
  secret: string;
};

type ClusterVmResource = {
  type?: string;
  vmid?: number;
  name?: string;
  node?: string;
  status?: string;
};

type VmStatus = {
  name: string | null;
  vmid: number;
  node: string;
  status: string | null;
  qmpstatus: string | null;
  uptime: number | null;
  agent: number | null;
};

const DEFAULT_PVE_BASE = process.env.PVE_BASE || process.env.PICLAW_PROXMOX_BASE || "https://192.168.1.10:8006/api2/json";
const DEFAULT_KEYCHAIN_ENTRY = process.env.PICLAW_PROXMOX_TOKEN_KEYCHAIN || "proxmox/piclaw-management-token";
const DEFAULT_POLL_MS = 2000;
const DEFAULT_TIMEOUT_MS = 120_000;

const args = process.argv.slice(2);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function usage(): never {
  console.log(`Usage:
  bun run scripts/proxmox.ts vm status --vmid <id> [--json]
  bun run scripts/proxmox.ts vm inspect --vmid <id> [--json]
  bun run scripts/proxmox.ts vm start --vmid <id> [--json]
  bun run scripts/proxmox.ts vm stop --vmid <id> [--json] [--force]
  bun run scripts/proxmox.ts vm resume --vmid <id> [--json]
  bun run scripts/proxmox.ts vm restart --vmid <id> [--json]
  bun run scripts/proxmox.ts vm ip --vmid <id> [--json]

Options:
  --vmid <id>         Numeric VMID
  --json              Print machine-readable JSON
  --force             For stop: skip graceful shutdown and force stop
  --timeout-ms <ms>   Wait timeout for task/status polling (default: ${DEFAULT_TIMEOUT_MS})
  --poll-ms <ms>      Poll interval (default: ${DEFAULT_POLL_MS})
  --base <url>        Override Proxmox API base URL
  --keychain <name>   Override keychain entry name (default: ${DEFAULT_KEYCHAIN_ENTRY})
`);
  process.exit(1);
}

function getFlagValue(flag: string): string | undefined {
  const index = args.indexOf(flag);
  if (index < 0) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith("-")) return undefined;
  return value;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function parseIntFlag(flag: string, fallback: number): number {
  const raw = getFlagValue(flag);
  if (!raw) return fallback;
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function fail(message: string, details?: unknown): never {
  if (hasFlag("--json")) {
    console.error(JSON.stringify({ ok: false, error: message, details: details ?? null }, null, 2));
  } else {
    console.error(`[proxmox] ${message}`);
    if (details != null) console.error(details);
  }
  process.exit(1);
}

function print(value: unknown): void {
  if (hasFlag("--json")) {
    console.log(JSON.stringify(value, null, 2));
    return;
  }
  if (typeof value === "string") {
    console.log(value);
    return;
  }
  console.log(JSON.stringify(value, null, 2));
}

function getVmId(): number {
  const raw = getFlagValue("--vmid");
  const vmid = raw ? parseInt(raw, 10) : NaN;
  if (!Number.isFinite(vmid) || vmid <= 0) {
    fail("Missing or invalid --vmid");
  }
  return vmid;
}

function encodeUpid(value: string): string {
  return encodeURIComponent(value);
}

function resolvePiclawCli(): string[] {
  const explicit = process.env.PICLAW_CLI;
  if (explicit && explicit.trim()) return [explicit.trim()];
  const which = Bun.which("piclaw");
  if (which) return [which];
  return ["bun", "run", "runtime/src/index.ts"];
}

function runKeychainGet(name: string): ProxmoxToken {
  const command = [...resolvePiclawCli(), "keychain", "get", name];
  const proc = Bun.spawnSync(command, {
    cwd: process.cwd(),
    stdout: "pipe",
    stderr: "pipe",
    env: process.env,
  });
  if (proc.exitCode !== 0) {
    fail(`Failed to load keychain entry ${name}`, proc.stderr.toString().trim() || proc.stdout.toString().trim());
  }
  const stdout = proc.stdout.toString().trim();
  if (!stdout) fail(`Keychain entry ${name} returned no data.`);

  let parsed: unknown;
  try {
    parsed = JSON.parse(stdout);
  } catch (error) {
    fail(`Keychain entry ${name} returned invalid JSON.`, error instanceof Error ? error.message : String(error));
  }

  const username = typeof (parsed as any)?.username === "string" ? (parsed as any).username.trim() : "";
  const secret = typeof (parsed as any)?.secret === "string" ? (parsed as any).secret.trim() : "";
  if (!username || !secret) {
    fail(`Keychain entry ${name} is missing username/secret fields.`);
  }
  return { username, secret };
}

class ProxmoxClient {
  base: string;
  authHeader: string;

  constructor(base: string, token: ProxmoxToken) {
    this.base = base.replace(/\/$/, "");
    this.authHeader = `PVEAPIToken=${token.username}=${token.secret}`;
  }

  async request(path: string, init?: RequestInit): Promise<Json> {
    const method = typeof init?.method === "string" && init.method.trim() ? init.method.trim().toUpperCase() : "GET";
    const url = `${this.base}${path}`;
    const command = [
      "curl",
      "-sk",
      "-H",
      `Authorization: ${this.authHeader}`,
      "-X",
      method,
      url,
    ];

    const proc = Bun.spawnSync(command, {
      cwd: process.cwd(),
      stdout: "pipe",
      stderr: "pipe",
      env: process.env,
    });
    if (proc.exitCode !== 0) {
      throw new Error(proc.stderr.toString().trim() || `curl failed for ${path}`);
    }

    const stdout = proc.stdout.toString().trim();
    if (!stdout) {
      throw new Error(`Proxmox API returned an empty response for ${path}.`);
    }

    let payload: Json;
    try {
      payload = JSON.parse(stdout) as Json;
    } catch {
      throw new Error(`Proxmox API returned non-JSON response for ${path}.`);
    }

    if (payload.errors || payload.error) {
      throw new Error(`Proxmox API error for ${path}: ${JSON.stringify(payload)}`);
    }
    return payload;
  }

  async post(path: string): Promise<Json> {
    return await this.request(path, { method: "POST" });
  }

  async listVmResources(): Promise<ClusterVmResource[]> {
    const payload = await this.request("/cluster/resources?type=vm");
    return Array.isArray(payload.data) ? (payload.data as ClusterVmResource[]) : [];
  }

  async findVm(vmid: number): Promise<Required<Pick<ClusterVmResource, "vmid" | "node">> & ClusterVmResource> {
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

  async getVmStatus(node: string, vmid: number): Promise<VmStatus> {
    const payload = await this.request(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/current`);
    const data = (payload.data || {}) as Record<string, unknown>;
    return {
      name: typeof data.name === "string" ? data.name : null,
      vmid,
      node,
      status: typeof data.status === "string" ? data.status : null,
      qmpstatus: typeof data.qmpstatus === "string" ? data.qmpstatus : null,
      uptime: Number.isFinite(data.uptime as number) ? (data.uptime as number) : null,
      agent: Number.isFinite(data.agent as number) ? (data.agent as number) : null,
    };
  }

  async getVmConfig(node: string, vmid: number): Promise<Json> {
    const payload = await this.request(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/config`);
    const data = payload.data;
    return data && typeof data === "object" ? (data as Json) : {};
  }

  async waitForTask(node: string, upid: string, timeoutMs: number, pollMs: number): Promise<{ status: string | null; exitstatus: string | null }> {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      const payload = await this.request(`/nodes/${encodeURIComponent(node)}/tasks/${encodeUpid(upid)}/status`);
      const data = (payload.data || {}) as Record<string, unknown>;
      const status = typeof data.status === "string" ? data.status : null;
      const exitstatus = typeof data.exitstatus === "string" ? data.exitstatus : null;
      if (status === "stopped") return { status, exitstatus };
      await sleep(pollMs);
    }
    throw new Error(`Timed out waiting for Proxmox task ${upid}.`);
  }

  async waitForVmState(node: string, vmid: number, target: { status?: string; qmpstatus?: string }, timeoutMs: number, pollMs: number): Promise<VmStatus> {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      const status = await this.getVmStatus(node, vmid);
      const statusOk = !target.status || status.status === target.status;
      const qmpOk = !target.qmpstatus || status.qmpstatus === target.qmpstatus;
      if (statusOk && qmpOk) return status;
      await sleep(pollMs);
    }
    throw new Error(`Timed out waiting for VM ${vmid} to reach ${JSON.stringify(target)}.`);
  }

  async startVm(node: string, vmid: number, timeoutMs: number, pollMs: number): Promise<VmStatus> {
    const status = await this.getVmStatus(node, vmid);
    if (status.status === "running" && status.qmpstatus === "running") return status;

    const startPayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/start`);
    const upid = typeof startPayload.data === "string" ? startPayload.data : null;
    if (upid) {
      const result = await this.waitForTask(node, upid, timeoutMs, pollMs);
      if (result.exitstatus && result.exitstatus !== "OK") {
        throw new Error(`Start task failed for VM ${vmid}: ${result.exitstatus}`);
      }
    }
    return await this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
  }

  async resumeVm(node: string, vmid: number, timeoutMs: number, pollMs: number): Promise<VmStatus> {
    const status = await this.getVmStatus(node, vmid);
    if (status.status === "running" && status.qmpstatus === "running") return status;
    if (status.status !== "running") {
      return await this.startVm(node, vmid, timeoutMs, pollMs);
    }

    const resumePayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/resume`);
    const resumeUpid = typeof resumePayload.data === "string" ? resumePayload.data : null;
    if (resumeUpid) {
      const result = await this.waitForTask(node, resumeUpid, timeoutMs, pollMs);
      if (result.exitstatus && result.exitstatus !== "OK") {
        throw new Error(`Resume task failed for VM ${vmid}: ${result.exitstatus}`);
      }
    }
    return await this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
  }

  async stopVm(node: string, vmid: number, options: { timeoutMs: number; pollMs: number; force?: boolean }): Promise<VmStatus> {
    const status = await this.getVmStatus(node, vmid);
    if (status.status === "stopped") return status;

    if (!options.force) {
      const shutdownPayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/shutdown?timeout=60`);
      const upid = typeof shutdownPayload.data === "string" ? shutdownPayload.data : null;
      if (upid) {
        try {
          const result = await this.waitForTask(node, upid, options.timeoutMs, options.pollMs);
          if (result.exitstatus && result.exitstatus !== "OK") {
            throw new Error(result.exitstatus);
          }
        } catch {
          // Fall back to forced stop below.
        }
      }
      try {
        return await this.waitForVmState(node, vmid, { status: "stopped" }, options.timeoutMs, options.pollMs);
      } catch {
        // Fall through to forced stop.
      }
    }

    const stopPayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/stop`);
    const stopUpid = typeof stopPayload.data === "string" ? stopPayload.data : null;
    if (stopUpid) {
      const result = await this.waitForTask(node, stopUpid, options.timeoutMs, options.pollMs);
      if (result.exitstatus && result.exitstatus !== "OK") {
        throw new Error(`Forced stop task failed for VM ${vmid}: ${result.exitstatus}`);
      }
    }
    return await this.waitForVmState(node, vmid, { status: "stopped" }, options.timeoutMs, options.pollMs);
  }

  async restartVm(node: string, vmid: number, timeoutMs: number, pollMs: number): Promise<VmStatus> {
    const status = await this.getVmStatus(node, vmid);

    if (status.status === "running" && status.qmpstatus === "suspended") {
      const resetPayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/reset`);
      const resetUpid = typeof resetPayload.data === "string" ? resetPayload.data : null;
      if (resetUpid) {
        const result = await this.waitForTask(node, resetUpid, timeoutMs, pollMs);
        if (result.exitstatus && result.exitstatus !== "OK") {
          throw new Error(`Reset task failed for VM ${vmid}: ${result.exitstatus}`);
        }
      }
      const resumePayload = await this.post(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/status/resume`);
      const resumeUpid = typeof resumePayload.data === "string" ? resumePayload.data : null;
      if (resumeUpid) {
        const result = await this.waitForTask(node, resumeUpid, timeoutMs, pollMs);
        if (result.exitstatus && result.exitstatus !== "OK") {
          throw new Error(`Resume task failed for VM ${vmid}: ${result.exitstatus}`);
        }
      }
      return await this.waitForVmState(node, vmid, { status: "running", qmpstatus: "running" }, timeoutMs, pollMs);
    }

    await this.stopVm(node, vmid, { timeoutMs, pollMs, force: false });
    return await this.startVm(node, vmid, timeoutMs, pollMs);
  }

  async getVmIp(node: string, vmid: number): Promise<{ source: string; addresses: string[] }> {
    const payload = await this.request(`/nodes/${encodeURIComponent(node)}/qemu/${vmid}/agent/network-get-interfaces`);
    const data = payload.data as Record<string, unknown> | null;
    if (!data) {
      const message = typeof payload.message === "string" ? payload.message : "QEMU guest agent did not return interface data.";
      throw new Error(message);
    }
    const result = Array.isArray((data as any).result) ? (data as any).result : [];
    const addresses = new Set<string>();
    for (const iface of result) {
      const entries = Array.isArray(iface?.["ip-addresses"]) ? iface["ip-addresses"] : [];
      for (const entry of entries) {
        const type = typeof entry?.["ip-address-type"] === "string" ? entry["ip-address-type"] : "";
        const ip = typeof entry?.["ip-address"] === "string" ? entry["ip-address"].trim() : "";
        if (!ip || ip === "127.0.0.1" || ip === "::1") continue;
        if (type !== "ipv4" && type !== "ipv6") continue;
        addresses.add(ip);
      }
    }
    return { source: "qemu-guest-agent", addresses: [...addresses] };
  }
}

function formatStatus(status: VmStatus): string {
  const parts = [
    `VM ${status.vmid}`,
    status.name ? `(${status.name})` : null,
    `on ${status.node}`,
    `status=${status.status ?? "unknown"}`,
    `qmpstatus=${status.qmpstatus ?? "unknown"}`,
    status.uptime != null ? `uptime=${status.uptime}s` : null,
  ].filter(Boolean);
  return parts.join(" ");
}

async function main(): Promise<void> {
  const [resource, action] = args;
  if (!resource || !action) usage();
  if (resource !== "vm") fail(`Unsupported resource: ${resource}`);

  const vmid = getVmId();
  const timeoutMs = parseIntFlag("--timeout-ms", DEFAULT_TIMEOUT_MS);
  const pollMs = parseIntFlag("--poll-ms", DEFAULT_POLL_MS);
  const base = getFlagValue("--base") || DEFAULT_PVE_BASE;
  const keychainEntry = getFlagValue("--keychain") || DEFAULT_KEYCHAIN_ENTRY;

  const token = runKeychainGet(keychainEntry);
  const client = new ProxmoxClient(base, token);
  const vm = await client.findVm(vmid);

  switch (action) {
    case "status": {
      const status = await client.getVmStatus(vm.node, vmid);
      print(hasFlag("--json") ? status : formatStatus(status));
      return;
    }
    case "inspect": {
      const status = await client.getVmStatus(vm.node, vmid);
      const config = await client.getVmConfig(vm.node, vmid);
      print({ status, config });
      return;
    }
    case "start": {
      const status = await client.startVm(vm.node, vmid, timeoutMs, pollMs);
      print(hasFlag("--json") ? status : `Started ${formatStatus(status)}`);
      return;
    }
    case "stop": {
      const status = await client.stopVm(vm.node, vmid, { timeoutMs, pollMs, force: hasFlag("--force") });
      print(hasFlag("--json") ? status : `Stopped ${formatStatus(status)}`);
      return;
    }
    case "resume": {
      const status = await client.resumeVm(vm.node, vmid, timeoutMs, pollMs);
      print(hasFlag("--json") ? status : `Resumed ${formatStatus(status)}`);
      return;
    }
    case "restart": {
      const status = await client.restartVm(vm.node, vmid, timeoutMs, pollMs);
      print(hasFlag("--json") ? status : `Restarted ${formatStatus(status)}`);
      return;
    }
    case "ip": {
      const result = await client.getVmIp(vm.node, vmid);
      if (hasFlag("--json")) {
        print({ vmid, node: vm.node, ...result });
      } else if (result.addresses.length === 0) {
        print(`No guest IPs reported for VM ${vmid}.`);
      } else {
        print(result.addresses.join("\n"));
      }
      return;
    }
    default:
      fail(`Unsupported action: ${action}`);
  }
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
