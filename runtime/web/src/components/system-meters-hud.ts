// @ts-nocheck
import { html, useEffect, useMemo, useState } from '../vendor/preact-htm.js';
import { getSystemMetrics } from '../api.js';
import { METERS_EVENT_NAME, readStoredMetersEnabled } from '../ui/meters.js';

function clampSeries(input, maxPoints = 30) {
    const series = Array.isArray(input)
        ? input
            .filter((value) => Number.isFinite(value))
            .map((value) => Math.max(0, Math.min(100, Number(value))))
        : [];
    return series.length > maxPoints ? series.slice(series.length - maxPoints) : series;
}

function buildSparklinePath(series, width = 56, height = 16) {
    const points = clampSeries(series);
    if (points.length === 0) return '';
    if (points.length === 1) {
        const y = height - (points[0] / 100) * height;
        return `M 0 ${y.toFixed(2)} L ${width} ${y.toFixed(2)}`;
    }
    return points.map((value, index) => {
        const x = (index / (points.length - 1)) * width;
        const y = height - (value / 100) * height;
        return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(' ');
}

function formatPercent(value) {
    return `${Math.round(Number(value) || 0)}%`;
}

export function SystemMetersHud() {
    const [enabled, setEnabled] = useState(() => readStoredMetersEnabled(false));
    const [metrics, setMetrics] = useState({
        cpu_percent: 0,
        ram_percent: 0,
        swap_percent: null,
        cpu_series: [],
        ram_series: [],
        swap_series: [],
        swap_total_bytes: 0,
        swap_used_bytes: 0,
        sample_interval_ms: 2000,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const onMetersChange = (event) => {
            setEnabled(Boolean(event?.detail?.enabled));
        };
        window.addEventListener(METERS_EVENT_NAME, onMetersChange);
        return () => window.removeEventListener(METERS_EVENT_NAME, onMetersChange);
    }, []);

    useEffect(() => {
        if (!enabled) return undefined;
        let cancelled = false;
        let timer = 0;

        const refresh = async () => {
            setLoading((prev) => (prev || metrics.cpu_series.length > 0 ? prev : true));
            try {
                const next = await getSystemMetrics();
                if (cancelled) return;
                setMetrics({
                    cpu_percent: Number(next?.cpu_percent) || 0,
                    ram_percent: Number(next?.ram_percent) || 0,
                    swap_percent: Number.isFinite(Number(next?.swap_percent)) ? Number(next?.swap_percent) : null,
                    cpu_series: clampSeries(next?.cpu_series),
                    ram_series: clampSeries(next?.ram_series),
                    swap_series: clampSeries(next?.swap_series),
                    swap_total_bytes: Number(next?.swap_total_bytes) || 0,
                    swap_used_bytes: Number(next?.swap_used_bytes) || 0,
                    sample_interval_ms: Number(next?.sample_interval_ms) || 2000,
                });
            } catch {
                if (cancelled) return;
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        void refresh();
        timer = window.setInterval(() => {
            if (document?.visibilityState === 'hidden') return;
            void refresh();
        }, Math.max(1000, Number(metrics.sample_interval_ms) || 2000));

        return () => {
            cancelled = true;
            if (timer) window.clearInterval(timer);
        };
    }, [enabled]);

    const cpuPath = useMemo(() => buildSparklinePath(metrics.cpu_series), [metrics.cpu_series]);
    const ramPath = useMemo(() => buildSparklinePath(metrics.ram_series), [metrics.ram_series]);
    const swapPath = useMemo(() => buildSparklinePath(metrics.swap_series), [metrics.swap_series]);
    const showSwap = Number.isFinite(Number(metrics.swap_percent)) && metrics.swap_total_bytes > 0;

    if (!enabled) return null;

    return html`
        <div class="system-meters-hud" aria-live="polite">
            <div class="system-meters-card" title=${loading ? 'Updating system meters…' : 'System meters'}>
                <div class="system-meters-row cpu">
                    <span class="system-meters-label">CPU</span>
                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                        <path d=${cpuPath}></path>
                    </svg>
                    <span class="system-meters-value">${formatPercent(metrics.cpu_percent)}</span>
                </div>
                <div class="system-meters-row ram">
                    <span class="system-meters-label">RAM</span>
                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                        <path d=${ramPath}></path>
                    </svg>
                    <span class="system-meters-value">${formatPercent(metrics.ram_percent)}</span>
                </div>
                ${showSwap && html`
                    <div class="system-meters-row swap">
                        <span class="system-meters-label">SWP</span>
                        <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                            <path d=${swapPath}></path>
                        </svg>
                        <span class="system-meters-value">${formatPercent(metrics.swap_percent)}</span>
                    </div>
                `}
            </div>
        </div>
    `;
}
