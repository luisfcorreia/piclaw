/**
 * utils/preview.ts – Text truncation and line-counting helpers.
 *
 * Provides utilities for generating previews of multi-line text content
 * (tool outputs, agent drafts, etc.) and for counting "soft" wrapped lines
 * at a given column width.
 *
 * Consumers:
 *   - tool-output.ts uses buildPreviewLines() when generating summaries of
 *     large tool outputs.
 *   - channels/web/agent-utils.ts uses countSoftLines() for draft height
 *     estimation in the streaming UI.
 *   - agent-control/handlers/info.ts uses truncateLine() when formatting
 *     command output for display.
 */
/** Normalise \r\n and bare \r to \n for consistent line splitting. */
export function normalizeLineEndings(text) {
    return (text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
/** Split text into an array of lines (handles all line-ending styles). */
export function splitLines(text) {
    const normalized = normalizeLineEndings(text);
    if (normalized === "")
        return [];
    return normalized.split("\n");
}
function endsWithHighSurrogate(text) {
    if (!text)
        return false;
    const code = text.charCodeAt(text.length - 1);
    return code >= 0xd800 && code <= 0xdbff;
}
/** Truncate text and append an ellipsis without leaving a dangling surrogate. */
export function truncateWithEllipsis(text, maxLength) {
    if (!maxLength || maxLength <= 0)
        return text;
    if (text.length <= maxLength)
        return text;
    let truncated = text.slice(0, maxLength);
    if (endsWithHighSurrogate(truncated)) {
        truncated = truncated.slice(0, -1);
    }
    return `${truncated}…`;
}
/** Truncate a single line to `maxLength` characters, adding an ellipsis if cut. */
export function truncateLine(line, maxLength) {
    return truncateWithEllipsis(line, maxLength);
}
/**
 * Build a preview of the first N lines of text, optionally truncating each
 * line and appending an omitted-lines trailer.
 *
 * @returns The preview string and the count of lines that were omitted.
 */
export function buildPreviewLines(input, options) {
    const lines = Array.isArray(input) ? input : splitLines(input);
    if (!lines.length)
        return { preview: "", omittedLines: 0 };
    const maxLines = Math.max(0, options.maxLines ?? lines.length);
    const previewLines = lines.slice(0, maxLines).map((line) => truncateLine(line, options.maxLineLength));
    const omittedLines = Math.max(lines.length - maxLines, 0);
    if (options.includeOmittedLine && omittedLines > 0) {
        previewLines.push(`… (${omittedLines} more lines)`);
    }
    return { preview: previewLines.join("\n"), omittedLines };
}
/**
 * Count the number of "soft" (word-wrapped) lines an array of strings
 * would occupy at a given column width.
 */
export function countSoftLines(lines, maxCharsPerLine) {
    if (!lines.length)
        return 0;
    return lines.reduce((acc, line) => acc + countSoftLine(line, maxCharsPerLine), 0);
}
/** Count how many visual lines a single string occupies at a given column width. */
export function countSoftLine(line, maxCharsPerLine) {
    if (!line)
        return 1;
    if (!maxCharsPerLine || maxCharsPerLine <= 0)
        return 1;
    return Math.max(1, Math.ceil(line.length / maxCharsPerLine));
}
