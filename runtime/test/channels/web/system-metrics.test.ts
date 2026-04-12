import { expect, test } from "bun:test";
import { parseLinuxSwapMeminfo, SystemMetricsSampler } from "../../../src/channels/web/agent/system-metrics.js";

test("parseLinuxSwapMeminfo parses swap totals and usage from /proc/meminfo text", () => {
  expect(parseLinuxSwapMeminfo([
    "MemTotal:       16384256 kB",
    "MemFree:         1024000 kB",
    "SwapTotal:       2097148 kB",
    "SwapFree:        1048574 kB",
  ].join("\n"))).toEqual({
    totalBytes: 2097148 * 1024,
    usedBytes: (2097148 - 1048574) * 1024,
    percent: 50,
  });

  expect(parseLinuxSwapMeminfo("SwapTotal:             0 kB\nSwapFree:              0 kB")).toBeNull();
});

test("SystemMetricsSampler returns bounded CPU/RAM payloads with rolling series", () => {
  const sampler = new SystemMetricsSampler(3, 1500);

  const first = sampler.readSnapshot();
  const second = sampler.readSnapshot();
  const third = sampler.readSnapshot();
  const fourth = sampler.readSnapshot();

  for (const sample of [first, second, third, fourth]) {
    expect(sample.cpu_percent).toBeGreaterThanOrEqual(0);
    expect(sample.cpu_percent).toBeLessThanOrEqual(100);
    expect(sample.ram_percent).toBeGreaterThanOrEqual(0);
    expect(sample.ram_percent).toBeLessThanOrEqual(100);
    expect(sample.sample_interval_ms).toBe(1500);
    expect(Array.isArray(sample.cpu_series)).toBe(true);
    expect(Array.isArray(sample.ram_series)).toBe(true);
    expect(Array.isArray(sample.swap_series)).toBe(true);
    expect(sample.cpu_series.length).toBeLessThanOrEqual(3);
    expect(sample.ram_series.length).toBeLessThanOrEqual(3);
    expect(sample.swap_series.length).toBeLessThanOrEqual(3);
    if (sample.swap_percent !== null) {
      expect(sample.swap_percent).toBeGreaterThanOrEqual(0);
      expect(sample.swap_percent).toBeLessThanOrEqual(100);
      expect(sample.swap_total_bytes).toBeGreaterThan(0);
      expect(sample.swap_used_bytes).toBeGreaterThanOrEqual(0);
    }
  }

  expect(fourth.cpu_series.length).toBe(3);
  expect(fourth.ram_series.length).toBe(3);
});
