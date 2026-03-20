/**
 * web/http/response-service.ts – Unified response builder service.
 *
 * Wraps http-utils and static helpers into a cohesive API for handler
 * modules. Provides JSON responses, static file serving, and doc serving.
 *
 * Consumers: web/request-router.ts uses ResponseService methods.
 */
import { clampInt, errorJson, jsonResponse, okJson, parseOptionalInt } from "./http-utils.js";
import { serveDocsStatic, serveStatic } from "./static.js";
/** Unified response builder combining JSON, static, and doc serving. */
export class ResponseService {
    json(data, status = 200, headers) {
        return jsonResponse(data, status, headers);
    }
    ok(data = {}, status = 200, headers) {
        return okJson(data, status, headers);
    }
    error(message, status = 400, headers) {
        return errorJson(message, status, headers);
    }
    async serveStatic(relPath) {
        return serveStatic(relPath, () => this.error("Not found", 404));
    }
    async serveDocsStatic(relPath) {
        return serveDocsStatic(relPath, () => this.error("Not found", 404));
    }
    clampInt(value, fallback, min, max) {
        return clampInt(value, fallback, min, max);
    }
    parseOptionalInt(value) {
        return parseOptionalInt(value);
    }
}
