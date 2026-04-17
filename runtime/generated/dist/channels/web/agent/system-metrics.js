/**
 * web/agent/system-metrics.ts – Lightweight host CPU/RAM/swap metrics for the web HUD.
 */
import fs from "node:fs";
import os from "node:os";
function readCpuTotals() {
    let idle = 0;
    let total = 0;
    for (const cpu of os.cpus()) {
        const times = cpu?.times;
        if (!times)
            continue;
        idle += times.idle;
        total += times.user + times.nice + times.sys + times.idle + times.irq;
    }
    return { idle, total };
}
function roundPercent(value) {
    if (!Number.isFinite(value))
        return 0;
    return Math.max(0, Math.min(100, Math.round(value * 10) / 10));
}
function pushSample(series, value, maxSamples) {
    const next = [...series, value];
    return next.length > maxSamples ? next.slice(next.length - maxSamples) : next;
}
export function parseLinuxSwapMeminfo(text) {
    const normalized = typeof text === "string" ? text : "";
    const totalMatch = normalized.match(/^SwapTotal:\s+(\d+)\s+kB$/m);
    const freeMatch = normalized.match(/^SwapFree:\s+(\d+)\s+kB$/m);
    if (!totalMatch || !freeMatch)
        return null;
    const totalKb = Number(totalMatch[1]);
    const freeKb = Number(freeMatch[1]);
    if (!Number.isFinite(totalKb) || !Number.isFinite(freeKb) || totalKb <= 0)
        return null;
    const totalBytes = totalKb * 1024;
    const freeBytes = Math.max(0, freeKb * 1024);
    const usedBytes = Math.max(0, totalBytes - freeBytes);
    const percent = totalBytes > 0 ? (usedBytes / totalBytes) * 100 : 0;
    return { totalBytes, usedBytes, percent: roundPercent(percent) };
}
function parseKbLine(text, label) {
    const match = text.match(new RegExp(`^${label}:\\s+(\\d+)\\s+kB$`, "m"));
    if (!match)
        return null;
    const kb = Number(match[1]);
    return Number.isFinite(kb) && kb >= 0 ? kb * 1024 : null;
}
function parseIntLine(text, label) {
    const match = text.match(new RegExp(`^${label}:\\s+(\\d+)$`, "m"));
    if (!match)
        return null;
    const value = Number(match[1]);
    return Number.isFinite(value) && value >= 0 ? value : null;
}
function readSwapUsage() {
    if (process.platform !== "linux")
        return null;
    try {
        const meminfo = fs.readFileSync("/proc/meminfo", "utf8");
        return parseLinuxSwapMeminfo(meminfo);
    }
    catch {
        return null;
    }
}
function readProcStatus() {
    try {
        const text = fs.readFileSync("/proc/self/status", "utf8");
        return {
            vmRssBytes: parseKbLine(text, "VmRSS"),
            vmHwmBytes: parseKbLine(text, "VmHWM"),
            rssAnonBytes: parseKbLine(text, "RssAnon"),
            rssFileBytes: parseKbLine(text, "RssFile"),
            rssShmemBytes: parseKbLine(text, "RssShmem"),
            threads: parseIntLine(text, "Threads"),
        };
    }
    catch {
        return {
            vmRssBytes: null,
            vmHwmBytes: null,
            rssAnonBytes: null,
            rssFileBytes: null,
            rssShmemBytes: null,
            threads: null,
        };
    }
}
function readProcSmapsRollup() {
    if (process.platform !== "linux") {
        return {
            pssBytes: null,
            privateCleanBytes: null,
            privateDirtyBytes: null,
            sharedCleanBytes: null,
            sharedDirtyBytes: null,
        };
    }
    try {
        const text = fs.readFileSync("/proc/self/smaps_rollup", "utf8");
        return {
            pssBytes: parseKbLine(text, "Pss"),
            privateCleanBytes: parseKbLine(text, "Private_Clean"),
            privateDirtyBytes: parseKbLine(text, "Private_Dirty"),
            sharedCleanBytes: parseKbLine(text, "Shared_Clean"),
            sharedDirtyBytes: parseKbLine(text, "Shared_Dirty"),
        };
    }
    catch {
        return {
            pssBytes: null,
            privateCleanBytes: null,
            privateDirtyBytes: null,
            sharedCleanBytes: null,
            sharedDirtyBytes: null,
        };
    }
}
function readCgroupMemoryCurrent() {
    if (process.platform !== "linux")
        return null;
    try {
        const text = fs.readFileSync("/proc/self/cgroup", "utf8");
        const line = text.split("\n").find((entry) => entry.startsWith("0::"));
        if (!line)
            return null;
        const relativePath = line.slice(3).trim();
        const fullPath = relativePath && relativePath !== "/"
            ? `/sys/fs/cgroup${relativePath}/memory.current`
            : "/sys/fs/cgroup/memory.current";
        const raw = fs.readFileSync(fullPath, "utf8").trim();
        const value = Number(raw);
        return Number.isFinite(value) && value >= 0 ? value : null;
    }
    catch {
        return null;
    }
}
function normalizeRuntimeMemorySnapshot(snapshot) {
    if (!snapshot)
        return null;
    return {
        cached_main_sessions: snapshot.cachedMainSessions,
        cached_side_sessions: snapshot.cachedSideSessions,
        active_fork_base_leaves: snapshot.activeForkBaseLeaves,
        active_chats: snapshot.activeChats,
        create_in_flight: snapshot.sessionManager.createInFlight,
        branch_seed_realizations_in_flight: snapshot.sessionManager.branchSeedRealizationsInFlight,
        invalid_deferred_seed_errors: snapshot.sessionManager.invalidDeferredSeedErrors,
        prewarm_in_flight: snapshot.sessionManager.prewarmInFlight,
        queued_prewarms: snapshot.sessionManager.queuedPrewarms,
        prewarm_queue_length: snapshot.sessionManager.prewarmQueueLength,
        prewarm_cooldowns: snapshot.sessionManager.prewarmCooldowns,
    };
}
export class SystemMetricsSampler {
    maxSamples;
    sampleIntervalMs;
    lastCpuTotals = null;
    cpuSeries = [];
    ramSeries = [];
    swapSeries = [];
    processRssSeriesBytes = [];
    processHeapUsedSeriesBytes = [];
    constructor(maxSamples = 30, sampleIntervalMs = 2000) {
        this.maxSamples = maxSamples;
        this.sampleIntervalMs = sampleIntervalMs;
    }
    readSnapshot(runtimeMemorySnapshot) {
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
        const processMemoryUsage = process.memoryUsage();
        const procStatus = readProcStatus();
        const procSmapsRollup = readProcSmapsRollup();
        const cgroupMemoryCurrentBytes = readCgroupMemoryCurrent();
        this.processRssSeriesBytes = pushSample(this.processRssSeriesBytes, processMemoryUsage.rss, this.maxSamples);
        this.processHeapUsedSeriesBytes = pushSample(this.processHeapUsedSeriesBytes, processMemoryUsage.heapUsed, this.maxSamples);
        return {
            cpu_percent: cpuValue,
            ram_percent: ramValue,
            swap_percent: swapValue,
            cpu_series: [...this.cpuSeries],
            ram_series: [...this.ramSeries],
            swap_series: [...this.swapSeries],
            process_rss_series_bytes: [...this.processRssSeriesBytes],
            process_heap_used_series_bytes: [...this.processHeapUsedSeriesBytes],
            swap_total_bytes: swapUsage?.totalBytes ?? 0,
            swap_used_bytes: swapUsage?.usedBytes ?? 0,
            sample_interval_ms: this.sampleIntervalMs,
            platform: process.platform,
            process_memory: {
                rss_bytes: processMemoryUsage.rss,
                heap_total_bytes: processMemoryUsage.heapTotal,
                heap_used_bytes: processMemoryUsage.heapUsed,
                external_bytes: processMemoryUsage.external,
                array_buffers_bytes: processMemoryUsage.arrayBuffers,
                vm_rss_bytes: procStatus.vmRssBytes,
                vm_hwm_bytes: procStatus.vmHwmBytes,
                rss_anon_bytes: procStatus.rssAnonBytes,
                rss_file_bytes: procStatus.rssFileBytes,
                rss_shmem_bytes: procStatus.rssShmemBytes,
                pss_bytes: procSmapsRollup.pssBytes,
                private_clean_bytes: procSmapsRollup.privateCleanBytes,
                private_dirty_bytes: procSmapsRollup.privateDirtyBytes,
                shared_clean_bytes: procSmapsRollup.sharedCleanBytes,
                shared_dirty_bytes: procSmapsRollup.sharedDirtyBytes,
                cgroup_memory_current_bytes: cgroupMemoryCurrentBytes,
                threads: procStatus.threads,
            },
            runtime_memory: normalizeRuntimeMemorySnapshot(runtimeMemorySnapshot),
        };
    }
}
const defaultSampler = new SystemMetricsSampler();
export function handleSystemMetricsRequest(ctx, sampler = defaultSampler) {
    return ctx.json(sampler.readSnapshot(ctx.getRuntimeMemorySnapshot?.() ?? null), 200);
}
