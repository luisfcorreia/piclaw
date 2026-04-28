/**
 * utils/logger.ts – minimal structured logger for runtime/server modules.
 *
 * Emits newline-delimited JSON records directly to stdout/stderr so logs stay
 * machine-parsable even when console timestamp patching is enabled elsewhere.
 * Logging honours the global PICLAW_LOG_LEVEL / LOG_LEVEL threshold.
 */

import { getConfiguredLogLevel, shouldLog } from "./log-level.js";
import type { LogLevel } from "./log-level.js";

export type { LogLevel } from "./log-level.js";

export type LogFields = Record<string, unknown> & { err?: unknown };

/** Structured log record passed to sinks. */
export interface LogRecord {
  ts: string;
  level: LogLevel;
  module: string;
  message: string;
  [key: string]: unknown;
}

export type LogSink = (record: LogRecord) => void;

const sinks: LogSink[] = [];

/** Register a log sink that receives every structured log record. */
export function addLogSink(sink: LogSink): void {
  if (!sinks.includes(sink)) sinks.push(sink);
}

/** Remove a previously registered log sink. */
export function removeLogSink(sink: LogSink): void {
  const idx = sinks.indexOf(sink);
  if (idx >= 0) sinks.splice(idx, 1);
}

export interface StructuredLogger {
  child(bindings: Record<string, unknown>): StructuredLogger;
  debug(message: string, fields?: LogFields): void;
  info(message: string, fields?: LogFields): void;
  warn(message: string, fields?: LogFields): void;
  error(message: string, fields?: LogFields): void;
}

interface InternalStructuredLogger {
  __internalEmit?: (level: LogLevel, message: string, fields?: LogFields) => void;
}

export function debugSuppressedError(
  log: Pick<StructuredLogger, "debug">,
  message: string,
  error: unknown,
  fields: Record<string, unknown> = {},
): void {
  const internalEmit = (log as Pick<StructuredLogger, "debug"> & InternalStructuredLogger).__internalEmit;
  if (typeof internalEmit === "function") {
    internalEmit("debug", message, { ...fields, err: error, suppressed: true });
    return;
  }

  const fallbackDebug = (log as Record<string, unknown>).debug;
  if (typeof fallbackDebug === "function") {
    fallbackDebug.call(log, message, { ...fields, err: error, suppressed: true });
  }
}

function serializeError(error: Error): Record<string, unknown> {
  const serialized: Record<string, unknown> = {
    name: error.name,
    message: error.message,
  };
  if (error.stack) serialized.stack = error.stack;
  const withCode = error as Error & { code?: unknown; cause?: unknown };
  if (withCode.code !== undefined) serialized.code = sanitizeValue(withCode.code);
  if (withCode.cause !== undefined) serialized.cause = sanitizeValue(withCode.cause);
  return serialized;
}

function sanitizeValue(value: unknown, seen = new WeakSet<object>(), depth = 0): unknown {
  if (value == null) return value;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  if (typeof value === "bigint") return value.toString();
  if (typeof value === "symbol") return value.toString();
  if (typeof value === "function") return `[function ${(value as { name?: string }).name || "anonymous"}]`;
  if (value instanceof Error) return serializeError(value);
  if (Array.isArray(value)) {
    if (depth >= 3) return `[array(${value.length})]`;
    return value.map((item) => sanitizeValue(item, seen, depth + 1));
  }
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (seen.has(obj)) return "[circular]";
    if (depth >= 3) {
      const ctorName = (obj as { constructor?: { name?: string } }).constructor?.name || "Object";
      return `[object ${ctorName}]`;
    }
    seen.add(obj);
    const out: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(obj)) {
      out[key] = sanitizeValue(entry, seen, depth + 1);
    }
    seen.delete(obj);
    return out;
  }
  return String(value);
}

function buildRecord(
  level: LogLevel,
  moduleName: string,
  bindings: Record<string, unknown>,
  message: string,
  fields?: LogFields,
): Record<string, unknown> {
  const record: Record<string, unknown> = {
    ts: new Date().toISOString(),
    level,
    module: moduleName,
    message,
    ...sanitizeValue(bindings) as Record<string, unknown>,
  };

  if (!fields) return record;

  for (const [key, value] of Object.entries(fields)) {
    if (key === "err") {
      if (value !== undefined) record.err = sanitizeValue(value);
      continue;
    }
    record[key] = sanitizeValue(value);
  }

  return record;
}

function writeRecord(
  level: LogLevel,
  moduleName: string,
  bindings: Record<string, unknown>,
  message: string,
  fields?: LogFields,
): void {
  if (!shouldLog(level, getConfiguredLogLevel())) return;
  const record = buildRecord(level, moduleName, bindings, message, fields) as LogRecord;
  const line = JSON.stringify(record);
  if (level === "warn" || level === "error") {
    process.stderr.write(line + "\n");
  } else {
    process.stdout.write(line + "\n");
  }
  for (const sink of sinks) {
    try { sink(record); } catch { /* sinks must not break logging */ }
  }
}

export function createLogger(moduleName: string, bindings: Record<string, unknown> = {}): StructuredLogger {
  const emit = (level: LogLevel, message: string, fields?: LogFields) => {
    writeRecord(level, moduleName, bindings, message, fields);
  };

  const logger: StructuredLogger & InternalStructuredLogger = {
    child(extraBindings) {
      return createLogger(moduleName, { ...bindings, ...extraBindings });
    },
    debug(message, fields) {
      emit("debug", message, fields);
    },
    info(message, fields) {
      emit("info", message, fields);
    },
    warn(message, fields) {
      emit("warn", message, fields);
    },
    error(message, fields) {
      emit("error", message, fields);
    },
    __internalEmit: emit,
  };

  return logger;
}
