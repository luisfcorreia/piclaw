/**
 * web/agent/system-metrics.ts – Lightweight host CPU/RAM/swap metrics for the web HUD.
 */

import fs from "node:fs";
import os from "node:os";

export interface SystemMetricsSnapshot {
  cpu_percent: number;
  ram_percent: number;
  swap_percent: number | null;
  cpu_series: number[];
  ram_series: number[];
  swap_series: number[];
  swap_total_bytes: number;
  swap_used_bytes: number;
  sample_interval_ms: number;
  platform: NodeJS.Platform;
}

export interface SystemMetricsContext {
  json(payload: unknown, status?: number): Response;
}

type CpuTotals = {
  idle: number;
  total: number;
};

interface SwapUsageSnapshot {
  totalBytes: number;
  usedBytes: number;
  percent: number;
}

function readCpuTotals(): CpuTotals {
  let idle = 0;
  let total = 0;
  for (const cpu of os.cpus()) {
    const times = cpu?.times;
    if (!times) continue;
    idle += times.idle;
    total += times.user + times.nice + times.sys + times.idle + times.irq;
  }
  return { idle, total };
}

function roundPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value * 10) / 10));
}

function pushSample(series: number[], value: number, maxSamples: number): number[] {
  const next = [...series, value];
  return next.length > maxSamples ? next.slice(next.length - maxSamples) : next;
}

export function parseLinuxSwapMeminfo(text: string): SwapUsageSnapshot | null {
  const normalized = typeof text === "string" ? text : "";
  const totalMatch = normalized.match(/^SwapTotal:\s+(\d+)\s+kB$/m);
  const freeMatch = normalized.match(/^SwapFree:\s+(\d+)\s+kB$/m);
  if (!totalMatch || !freeMatch) return null;

  const totalKb = Number(totalMatch[1]);
  const freeKb = Number(freeMatch[1]);
  if (!Number.isFinite(totalKb) || !Number.isFinite(freeKb) || totalKb <= 0) return null;

  const totalBytes = totalKb * 1024;
  const freeBytes = Math.max(0, freeKb * 1024);
  const usedBytes = Math.max(0, totalBytes - freeBytes);
  const percent = totalBytes > 0 ? (usedBytes / totalBytes) * 100 : 0;
  return { totalBytes, usedBytes, percent: roundPercent(percent) };
}

function readSwapUsage(): SwapUsageSnapshot | null {
  if (process.platform !== "linux") return null;
  try {
    const meminfo = fs.readFileSync("/proc/meminfo", "utf8");
    return parseLinuxSwapMeminfo(meminfo);
  } catch {
    return null;
  }
}

export class SystemMetricsSampler {
  private lastCpuTotals: CpuTotals | null = null;
  private cpuSeries: number[] = [];
  private ramSeries: number[] = [];
  private swapSeries: number[] = [];

  constructor(
    private readonly maxSamples = 30,
    private readonly sampleIntervalMs = 2000,
  ) {}

  readSnapshot(): SystemMetricsSnapshot {
    const currentCpuTotals = readCpuTotals();
    let cpuPercent = 0;
    if (this.lastCpuTotals) {
      const deltaIdle = currentCpuTotals.idle - this.lastCpuTotals.idle;
      const deltaTotal = currentCpuTotals.total - this.lastCpuTotals.total;
      cpuPercent = deltaTotal > 0 ? ((deltaTotal - deltaIdle) / deltaTotal) * 100 : 0;
    }
    this.lastCpuTotals = currentCpuTotals;

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = Math.max(0, totalMem - freeMem);
    const ramPercent = totalMem > 0 ? (usedMem / totalMem) * 100 : 0;

    const swapUsage = readSwapUsage();
    const cpuValue = roundPercent(cpuPercent);
    const ramValue = roundPercent(ramPercent);
    const swapValue = swapUsage ? roundPercent(swapUsage.percent) : null;
    this.cpuSeries = pushSample(this.cpuSeries, cpuValue, this.maxSamples);
    this.ramSeries = pushSample(this.ramSeries, ramValue, this.maxSamples);
    this.swapSeries = swapValue === null ? [] : pushSample(this.swapSeries, swapValue, this.maxSamples);

    return {
      cpu_percent: cpuValue,
      ram_percent: ramValue,
      swap_percent: swapValue,
      cpu_series: [...this.cpuSeries],
      ram_series: [...this.ramSeries],
      swap_series: [...this.swapSeries],
      swap_total_bytes: swapUsage?.totalBytes ?? 0,
      swap_used_bytes: swapUsage?.usedBytes ?? 0,
      sample_interval_ms: this.sampleIntervalMs,
      platform: process.platform,
    };
  }
}

const defaultSampler = new SystemMetricsSampler();

export function handleSystemMetricsRequest(ctx: SystemMetricsContext, sampler: SystemMetricsSampler = defaultSampler): Response {
  return ctx.json(sampler.readSnapshot(), 200);
}
