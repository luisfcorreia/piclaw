/**
 * task-scheduler-utils.ts – Shared scheduling utilities used by scheduler and extensions.
 *
 * Kept separate to avoid a static cycle between task-scheduler and extensions:
 * agent-pool -> session -> extensions/index -> scheduled-tasks -> task-scheduler.
 */
import { CronExpressionParser } from "cron-parser";
import { getRuntimeTimingConfig } from "./core/config.js";
/**
 * Compute the next execution time for a scheduled task.
 *
 * - cron: parse the cron expression and return the next occurrence.
 * - interval: add the interval (ms) to now.
 * - once: return null (no repeat).
 */
export function computeNextRun(scheduleType, scheduleValue, options = {}) {
    if (scheduleType === "cron") {
        try {
            const timezone = options.timezone || process.env.TZ || getRuntimeTimingConfig().timezone;
            const currentDate = options.currentDate ? new Date(options.currentDate) : undefined;
            return CronExpressionParser.parse(scheduleValue, {
                tz: timezone,
                ...(currentDate && !Number.isNaN(currentDate.getTime()) ? { currentDate } : {}),
            }).next().toISOString();
        }
        catch {
            return null;
        }
    }
    if (scheduleType === "interval") {
        const ms = parseInt(scheduleValue, 10);
        if (isNaN(ms) || ms <= 0)
            return null;
        return new Date(Date.now() + ms).toISOString();
    }
    if (scheduleType === "once") {
        return null;
    }
    return null;
}
