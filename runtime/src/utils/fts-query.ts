/**
 * utils/fts-query.ts – Sanitize and normalize user queries for SQLite FTS5.
 *
 * FTS5 has a strict query grammar where certain characters and keywords are
 * treated as operators (AND, OR, NOT, NEAR, quotes, parentheses, colons,
 * carets, asterisks, hyphens at token start). Plain multi-word user input
 * can easily trigger syntax errors.
 *
 * This module provides:
 *   - sanitizeFtsQuery(): escape/normalize a raw user string into a safe
 *     FTS5 MATCH expression.
 *   - isFtsOperatorQuery(): detect whether the user is intentionally using
 *     FTS operators so we can skip sanitization for power users.
 *   - prepareFtsQuery(): combines detection + sanitization in one call.
 *
 * Consumers:
 *   - db/tool-outputs.ts (searchToolOutputSnippets)
 *   - workspace-search.ts (searchWorkspace)
 *   - extensions/messages-crud.ts (runSearch)
 */

/** FTS5 match mode: "or" treats multi-word queries as any-match, "and" requires all. */
export type FtsMatchMode = "or" | "and";

/** FTS5 reserved keywords that must be quoted if used as search terms. */
const FTS_KEYWORDS = new Set(["AND", "OR", "NOT", "NEAR"]);

/**
 * Characters that have special meaning in FTS5 query syntax.
 * We strip or quote these when they appear in plain user text.
 */
const FTS_SPECIAL_CHARS = /[":()^*{}]/g;

/**
 * Detect whether a query string looks like an intentional FTS5 operator
 * expression (contains explicit boolean operators, quotes, or grouping).
 *
 * If this returns true, the caller should pass the query through as-is
 * rather than sanitizing it.
 */
export function isFtsOperatorQuery(query: string): boolean {
  const trimmed = query.trim();
  if (/\b(?:AND|OR|NOT|NEAR)\b/.test(trimmed)) return true;
  if (/^".*"$/.test(trimmed) || /"[^"]+"/.test(trimmed)) return true;
  if (/\(.*\)/.test(trimmed)) return true;
  if (/^\w+:/.test(trimmed)) return true;
  return false;
}

/**
 * Sanitize a raw user query string into a safe FTS5 MATCH expression.
 *
 * Strategy:
 * 1. Strip special FTS characters that would cause syntax errors.
 * 2. Split into whitespace-separated tokens.
 * 3. Quote any token that is an FTS keyword (AND, OR, NOT, NEAR).
 * 4. Drop empty tokens.
 * 5. Join with the specified mode (OR or implicit AND).
 *
 * @param rawQuery   The raw user input string.
 * @param mode       "or" joins tokens with OR (any match); "and" uses implicit AND (all match). Default: "or".
 * @returns          Safe FTS5 MATCH expression, or null if the query is empty.
 */
export function sanitizeFtsQuery(rawQuery: string, mode: FtsMatchMode = "or"): string | null {
  const stripped = rawQuery
    .replace(FTS_SPECIAL_CHARS, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!stripped) return null;

  const tokens = stripped.split(" ").filter(Boolean);
  if (tokens.length === 0) return null;

  const safe = tokens.map((token) => {
    if (FTS_KEYWORDS.has(token.toUpperCase())) {
      return `"${token}"`;
    }
    const cleaned = token.replace(/^-+/, "");
    return cleaned || null;
  }).filter(Boolean);

  if (safe.length === 0) return null;
  return mode === "or" ? safe.join(" OR ") : safe.join(" ");
}

/**
 * Prepare a user query for FTS5 MATCH, with automatic fallback.
 *
 * - If the query looks like an intentional operator expression, pass through.
 * - Otherwise, sanitize it into safe tokens joined by the given mode.
 * - Returns null if the query is empty or unsalvageable.
 *
 * @param rawQuery   The raw user input string.
 * @param mode       "or" joins tokens with OR; "and" uses implicit AND. Default: "or".
 */
export function prepareFtsQuery(rawQuery: string, mode: FtsMatchMode = "or"): string | null {
  const trimmed = rawQuery.trim();
  if (!trimmed) return null;
  if (isFtsOperatorQuery(trimmed)) return trimmed;
  return sanitizeFtsQuery(trimmed, mode);
}
