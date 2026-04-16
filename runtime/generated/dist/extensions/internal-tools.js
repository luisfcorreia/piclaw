/**
 * internal-tools – registers list_tools for quick tool discovery.
 */
import { Type } from "@sinclair/typebox";
import { getToolsetsForTool, getEffectiveDefaultActiveToolNames } from "./tool-activation.js";
import { getToolCapability } from "./tool-capabilities.js";
const InternalToolsSchema = Type.Object({
    query: Type.Optional(Type.String({ description: "Filter by tool name/description substring." })),
    intent: Type.Optional(Type.String({ description: "Short natural-language goal for compact tool recommendations." })),
    limit: Type.Optional(Type.Integer({ description: "Max tools to return (1-200).", minimum: 1, maximum: 200 })),
    include_parameters: Type.Optional(Type.Boolean({ description: "Include JSON schema parameters in details; in recommendation mode this only applies to shortlisted tools." })),
});
function clampLimit(value, fallback = 100) {
    if (!Number.isFinite(value))
        return fallback;
    const num = Number(value);
    if (Number.isNaN(num))
        return fallback;
    return Math.min(Math.max(num, 1), 200);
}
function summarizeDescription(value) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    if (!text)
        return "No description.";
    if (text.length <= 140)
        return text;
    return `${text.slice(0, 139)}…`;
}
function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/[^a-z0-9+.#/\s]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}
const SHORT_TOKEN_ALLOWLIST = new Set(["ai", "db", "fs", "id", "ip", "mcp", "sql", "ssh", "ui", "vm", "vnc"]);
const HIDDEN_DISCOVERY_ALIAS_NAMES = new Set(["list_internal_tools"]);
const STOP_TOKENS = new Set([
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "get", "help", "how", "i", "if", "in", "into", "is", "it", "me", "my", "of", "on", "or", "our", "show", "something", "task", "that", "the", "this", "to", "tool", "tools", "use", "using", "want", "what", "with", "you",
]);
function tokenizeText(value) {
    const text = normalizeText(value);
    if (!text)
        return [];
    return [...new Set(text.split(/\s+/).filter((token) => {
            if (!token)
                return false;
            if (SHORT_TOKEN_ALLOWLIST.has(token))
                return true;
            if (token.length < 3)
                return false;
            if (STOP_TOKENS.has(token))
                return false;
            return true;
        }))];
}
function uniqueStrings(values) {
    return [...new Set(Array.from(values).map((value) => String(value || "").trim()).filter(Boolean))];
}
function joinReasonList(values) {
    return uniqueStrings(values).join(", ");
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function firstNonEmptyString(...values) {
    for (const value of values) {
        const text = typeof value === "string" ? value.trim() : "";
        if (text)
            return text;
    }
    return undefined;
}
function stringArrayFromUnknown(value) {
    if (!Array.isArray(value))
        return [];
    return uniqueStrings(value.map((entry) => typeof entry === "string" ? entry : ""));
}
function exampleStringsFromUnknown(value) {
    if (!Array.isArray(value))
        return [];
    const values = [];
    for (const entry of value) {
        if (typeof entry === "string") {
            values.push(entry);
            continue;
        }
        if (!isRecord(entry))
            continue;
        const text = firstNonEmptyString(entry.text, entry.description, entry.summary, entry.title, entry.name, entry.input, entry.prompt, entry.intent, entry.query);
        if (text)
            values.push(text);
    }
    return uniqueStrings(values);
}
function readStructuredDiscoveryDoc(value) {
    if (!isRecord(value))
        return undefined;
    const summary = firstNonEmptyString(value.summary, value.description, value.overview);
    const guidance = uniqueStrings([
        ...stringArrayFromUnknown(value.guidance),
        ...stringArrayFromUnknown(value.promptGuidelines),
        ...stringArrayFromUnknown(value.instructions),
    ]);
    const doc = {
        ...(summary ? { summary } : {}),
        keywords: uniqueStrings([
            ...stringArrayFromUnknown(value.keywords),
            ...stringArrayFromUnknown(value.tags),
            ...stringArrayFromUnknown(value.searchTerms),
        ]),
        domains: stringArrayFromUnknown(value.domains),
        verbs: stringArrayFromUnknown(value.verbs),
        nouns: stringArrayFromUnknown(value.nouns),
        aliases: uniqueStrings([
            ...stringArrayFromUnknown(value.aliases),
            ...stringArrayFromUnknown(value.names),
        ]),
        guidance,
        examples: uniqueStrings([
            ...exampleStringsFromUnknown(value.examples),
            ...stringArrayFromUnknown(value.examplePhrases),
        ]),
    };
    const hasContent = Boolean(doc.summary
        || doc.keywords?.length
        || doc.domains?.length
        || doc.verbs?.length
        || doc.nouns?.length
        || doc.aliases?.length
        || doc.guidance?.length
        || doc.examples?.length);
    return hasContent ? doc : undefined;
}
function getStructuredDiscoveryDoc(tool) {
    if (!isRecord(tool))
        return undefined;
    const metadata = isRecord(tool.metadata) ? tool.metadata : undefined;
    const candidates = [
        tool.jdoc,
        tool.jdocs,
        tool.discoveryDoc,
        tool.structuredDoc,
        metadata?.jdoc,
        metadata?.jdocs,
        metadata?.discoveryDoc,
        metadata?.structuredDoc,
        metadata?.discovery,
    ];
    const docs = candidates
        .map((candidate) => readStructuredDiscoveryDoc(candidate))
        .filter((candidate) => Boolean(candidate));
    const summary = firstNonEmptyString(...docs.map((doc) => doc.summary), metadata?.summary);
    const merged = {
        ...(summary ? { summary } : {}),
        keywords: uniqueStrings([
            ...docs.flatMap((doc) => doc.keywords ?? []),
        ]),
        domains: uniqueStrings([
            ...docs.flatMap((doc) => doc.domains ?? []),
        ]),
        verbs: uniqueStrings([
            ...docs.flatMap((doc) => doc.verbs ?? []),
        ]),
        nouns: uniqueStrings([
            ...docs.flatMap((doc) => doc.nouns ?? []),
        ]),
        aliases: uniqueStrings([
            ...docs.flatMap((doc) => doc.aliases ?? []),
            ...stringArrayFromUnknown(tool.aliases),
        ]),
        guidance: uniqueStrings([
            ...docs.flatMap((doc) => doc.guidance ?? []),
            ...stringArrayFromUnknown(tool.promptGuidelines),
        ]),
        examples: uniqueStrings([
            ...docs.flatMap((doc) => doc.examples ?? []),
            ...exampleStringsFromUnknown(tool.examples),
        ]),
    };
    return merged.summary || merged.keywords.length || merged.domains.length || merged.verbs.length || merged.nouns.length || merged.aliases.length || merged.guidance.length || merged.examples.length
        ? merged
        : undefined;
}
function buildCatalog(api, includeParameters) {
    const activeSet = new Set(api.getActiveTools());
    const platformVisibleTools = process.platform === "win32" && api.getAllTools().some((tool) => tool.name === "powershell")
        ? api.getAllTools().filter((tool) => tool.name !== "bash")
        : api.getAllTools();
    const visibleTools = platformVisibleTools.filter((tool) => !HIDDEN_DISCOVERY_ALIAS_NAMES.has(tool.name));
    const defaultSet = new Set(getEffectiveDefaultActiveToolNames(visibleTools));
    return visibleTools
        .map((tool) => {
        const capability = getToolCapability(tool.name);
        const activation = defaultSet.has(tool.name) ? "default" : "on-demand";
        return {
            name: tool.name,
            description: summarizeDescription(tool.description),
            promptSnippet: typeof tool.promptSnippet === "string"
                ? String(tool.promptSnippet).trim()
                : undefined,
            parameters: includeParameters ? tool.parameters : undefined,
            active: activeSet.has(tool.name),
            activation,
            kind: capability.kind,
            weight: capability.weight,
            summary: capability.summary || summarizeDescription(tool.description),
            toolsets: getToolsetsForTool(tool.name),
            capability,
            discoveryDoc: getStructuredDiscoveryDoc(tool),
        };
    })
        .sort((a, b) => a.name.localeCompare(b.name));
}
function matchesQuery(tool, query) {
    return Boolean(tool.name.toLowerCase().includes(query)
        || tool.description.toLowerCase().includes(query)
        || tool.summary.toLowerCase().includes(query)
        || tool.promptSnippet?.toLowerCase().includes(query)
        || tool.toolsets.some((toolset) => toolset.toLowerCase().includes(query))
        || tool.discoveryDoc?.summary?.toLowerCase().includes(query)
        || tool.discoveryDoc?.aliases.some((entry) => entry.toLowerCase().includes(query))
        || tool.discoveryDoc?.keywords.some((entry) => entry.toLowerCase().includes(query))
        || tool.discoveryDoc?.examples.some((entry) => entry.toLowerCase().includes(query))
        || tool.discoveryDoc?.guidance.some((entry) => entry.toLowerCase().includes(query)));
}
function scoreQuery(tool, query) {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery)
        return 0;
    const queryTokens = new Set(tokenizeText(query));
    let score = 0;
    const name = normalizeText(tool.name);
    const summary = normalizeText(tool.summary);
    const description = normalizeText(tool.description);
    const promptSnippet = normalizeText(tool.promptSnippet);
    const toolsets = tool.toolsets.map((toolset) => normalizeText(toolset));
    if (name === normalizedQuery)
        score += 60;
    else if (name.includes(normalizedQuery))
        score += 32;
    if (summary.includes(normalizedQuery))
        score += 20;
    if (description.includes(normalizedQuery))
        score += 12;
    if (promptSnippet.includes(normalizedQuery))
        score += 16;
    if (toolsets.some((entry) => entry.includes(normalizedQuery)))
        score += 12;
    if (tool.discoveryDoc) {
        if (normalizeText(tool.discoveryDoc.summary).includes(normalizedQuery))
            score += 12;
        if (tool.discoveryDoc.aliases.some((entry) => normalizeText(entry).includes(normalizedQuery)))
            score += 20;
        if (tool.discoveryDoc.keywords.some((entry) => normalizeText(entry).includes(normalizedQuery)))
            score += 10;
        if (tool.discoveryDoc.examples.some((entry) => normalizeText(entry).includes(normalizedQuery)))
            score += 10;
        if (tool.discoveryDoc.guidance.some((entry) => normalizeText(entry).includes(normalizedQuery)))
            score += 8;
    }
    const addTokenScore = (terms, points) => {
        if (!terms?.length || queryTokens.size === 0)
            return;
        for (const term of terms) {
            for (const token of tokenizeText(term)) {
                if (!queryTokens.has(token))
                    continue;
                score += points;
            }
        }
    };
    addTokenScore([tool.name], 6);
    addTokenScore(tool.toolsets, 3);
    addTokenScore([tool.summary], 3);
    addTokenScore([tool.description], 2);
    addTokenScore(tool.promptSnippet ? [tool.promptSnippet] : [], 4);
    addTokenScore(tool.discoveryDoc?.aliases, 4);
    addTokenScore(tool.discoveryDoc?.keywords, 2);
    addTokenScore(tool.discoveryDoc?.examples, 2);
    addTokenScore(tool.discoveryDoc?.guidance, 1);
    addTokenScore(tool.discoveryDoc?.domains, 2);
    addTokenScore(tool.discoveryDoc?.verbs, 1);
    addTokenScore(tool.discoveryDoc?.nouns, 1);
    if (tool.capability.recommend) {
        addTokenScore(tool.capability.recommend.domains, 3);
        addTokenScore(tool.capability.recommend.verbs, 2);
        addTokenScore(tool.capability.recommend.nouns, 2);
        addTokenScore(tool.capability.recommend.keywords, 2);
    }
    const mentionsScripts = queryTokens.has("script") || queryTokens.has("scripts") || queryTokens.has("skill") || queryTokens.has("skills");
    const mentionsTools = queryTokens.has("tool") || queryTokens.has("tools") || queryTokens.has("discover") || queryTokens.has("discovery");
    if (tool.name === "list_scripts" && mentionsScripts)
        score += 40;
    if (tool.name === PRIMARY_TOOL_NAME && mentionsTools)
        score += 30;
    return score;
}
function filterCatalog(tools, query) {
    if (!query)
        return tools;
    return tools
        .filter((tool) => matchesQuery(tool, query))
        .sort((a, b) => scoreQuery(b, query) - scoreQuery(a, query) || a.name.localeCompare(b.name));
}
function addExactPhraseMatches(haystack, phrases, source, points, match) {
    if (!phrases?.length)
        return;
    for (const phrase of uniqueStrings(phrases.map((value) => normalizeText(value)))) {
        if (!phrase || phrase.includes(" ") === false)
            continue;
        if (!haystack.includes(phrase))
            continue;
        match.score += points;
        match.matchedTerms.push(phrase);
        match.matchedSources.push(source);
    }
}
function addTokenMatches(intentTokens, terms, source, points, match) {
    if (!terms?.length)
        return;
    for (const term of uniqueStrings(terms.map((value) => normalizeText(value)))) {
        if (!term)
            continue;
        for (const token of tokenizeText(term)) {
            if (!intentTokens.has(token))
                continue;
            match.score += points;
            match.matchedTerms.push(token);
            match.matchedSources.push(source);
        }
    }
}
function scoreIntent(tool, intent) {
    const normalizedIntent = normalizeText(intent);
    const intentTokens = new Set(tokenizeText(normalizedIntent));
    if (intentTokens.size === 0)
        return null;
    const match = {
        tool,
        score: 0,
        matchedTerms: [],
        matchedSources: [],
        reasons: [],
    };
    addTokenMatches(intentTokens, [tool.name], "name", 4, match);
    addTokenMatches(intentTokens, tool.toolsets, "toolset", 2, match);
    addTokenMatches(intentTokens, tokenizeText(tool.promptSnippet), "promptSnippet", 3, match);
    addTokenMatches(intentTokens, tokenizeText(tool.summary), "summary", 2, match);
    addTokenMatches(intentTokens, tokenizeText(tool.description), "description", 1, match);
    if (tool.discoveryDoc) {
        addTokenMatches(intentTokens, tokenizeText(tool.discoveryDoc.summary), "jdoc.summary", 1, match);
        addExactPhraseMatches(normalizedIntent, tool.discoveryDoc.domains, "jdoc.domains", 2, match);
        addExactPhraseMatches(normalizedIntent, tool.discoveryDoc.verbs, "jdoc.verbs", 2, match);
        addExactPhraseMatches(normalizedIntent, tool.discoveryDoc.nouns, "jdoc.nouns", 2, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.domains, "jdoc.domains", 2, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.verbs, "jdoc.verbs", 1, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.nouns, "jdoc.nouns", 1, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.aliases, "jdoc.aliases", 2, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.keywords, "jdoc.keywords", 1, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.guidance, "jdoc.guidance", 1, match);
        addTokenMatches(intentTokens, tool.discoveryDoc.examples, "jdoc.examples", 1, match);
    }
    const recommend = tool.capability.recommend;
    if (recommend) {
        addExactPhraseMatches(normalizedIntent, recommend.domains, "recommend.domains", 4, match);
        addExactPhraseMatches(normalizedIntent, recommend.verbs, "recommend.verbs", 3, match);
        addExactPhraseMatches(normalizedIntent, recommend.nouns, "recommend.nouns", 3, match);
        addTokenMatches(intentTokens, recommend.domains, "recommend.domains", 3, match);
        addTokenMatches(intentTokens, recommend.verbs, "recommend.verbs", 2, match);
        addTokenMatches(intentTokens, recommend.nouns, "recommend.nouns", 2, match);
        addTokenMatches(intentTokens, recommend.keywords, "recommend.keywords", 2, match);
        const negativeTerms = uniqueStrings(recommend.negativeTerms ?? []);
        for (const negative of negativeTerms) {
            const normalizedNegative = normalizeText(negative);
            if (!normalizedNegative)
                continue;
            if (normalizedIntent.includes(normalizedNegative)) {
                match.score -= 3;
                match.reasons.push(`negative match: ${normalizedNegative}`);
            }
        }
    }
    match.matchedTerms = uniqueStrings(match.matchedTerms);
    match.matchedSources = uniqueStrings(match.matchedSources);
    const baseScore = match.score;
    if (baseScore <= 0 || match.matchedTerms.length === 0)
        return null;
    const readIntent = /(inspect|search|find|review|list|show|read|check|look up|browse|view)/i.test(intent);
    if (tool.active) {
        match.score += 2;
        match.reasons.push("already active");
    }
    else if (tool.activation === "default") {
        match.score += 1;
        match.reasons.push("default active");
    }
    if (tool.kind === "read-only" && readIntent) {
        match.score += 1;
        match.reasons.push("read-only fit");
    }
    if (tool.kind === "mutating" && readIntent) {
        match.score -= 2;
        match.reasons.push("mutating penalty for read-style intent");
    }
    if (tool.weight === "heavy") {
        match.score -= 1;
        match.reasons.push("heavy-tool penalty");
    }
    match.reasons = uniqueStrings(match.reasons);
    if (match.score <= 0)
        return null;
    return match;
}
const HINT = [
    "## Internal Tool Discovery",
    "If you are unsure about available tools, call list_tools.",
    "Prefer the staged flow: query-filtered discovery → compact summary → on-demand parameters/details → activate/use.",
    "Use intent when you know the goal but not the tool name; use query when you already know the capability area.",
    "Use include_parameters only for the specific tool you are about to use or inspect in detail.",
    "Discovery is separate from activation: use activate_tools only when you actually need additional tools beyond the effective default set.",
    "",
    "## Baseline working principles",
    "These apply even when no AGENTS.md or project instructions are present:",
    "- Read relevant files before editing. Never edit blind.",
    "- Test after changes. Never declare done without verification.",
    "- Prefer editing over rewriting whole files.",
    "- Keep output direct, concise, and specific. Lead with findings.",
    "- Attach generated files to the chat with attach_file instead of only naming paths.",
    "- Prefer Bun scripts over Python/uv. Use `brew install` for system tools, `sudo apt install` for system-level dependencies.",
    "- Keychain entries are auto-injected as $ENV_VARS into bash (names with `/`, `-`, `.` become `_` and uppercase). Never fetch secrets and inline them.",
].join("\n");
const PRIMARY_TOOL_NAME = "list_tools";
const DEPRECATED_ALIAS_TOOL_NAME = "list_internal_tools";
const PRIMARY_TOOL_DESCRIPTION = "List available internal tools with brief descriptions. Each result includes capability metadata (kind: read-only/mutating/mixed, weight: lightweight/standard/heavy, activation: default/on-demand) and toolset groupings. Start with query-filtered compact summaries; use intent for compact recommendations when you know the goal but not the tool name.";
const PRIMARY_TOOL_PROMPT_SNIPPET = "list_tools: Discover available tools with compact summaries first, or use intent for a compact recommendation shortlist before requesting schema details.";
const VISIBLE_TOOL_HINT = "Hint: use query when you know the capability area, use intent when you know the goal, and request parameters only after shortlisting a tool.";
const DEPRECATED_ALIAS_NOTICE = `Deprecated alias: use ${PRIMARY_TOOL_NAME} instead.`;
/** Extension factory that registers list_tools plus a deprecated compatibility alias. */
export const internalTools = (pi) => {
    pi.on("before_agent_start", async (event) => ({
        systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
    }));
    const executeListTools = async (toolName, params) => {
        const query = params.query?.trim().toLowerCase() || "";
        const intent = params.intent?.trim() || "";
        const limit = clampLimit(params.limit, 100);
        const includeParameters = Boolean(params.include_parameters);
        const catalog = buildCatalog(pi, includeParameters);
        const filtered = filterCatalog(catalog, query);
        if (intent) {
            const recommendations = filtered
                .map((tool) => scoreIntent(tool, intent))
                .filter((entry) => Boolean(entry))
                .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
                .slice(0, Math.min(limit, 5));
            if (recommendations.length === 0) {
                const queryHint = intent.split(/\s+/).slice(0, 4).join(" ").trim();
                const fallbackText = queryHint
                    ? `No strong recommendation for "${intent}". Try ${PRIMARY_TOOL_NAME}(query="${queryHint}") to narrow the catalog first.`
                    : `No strong recommendation for "${intent}".`;
                const contentText = toolName === DEPRECATED_ALIAS_TOOL_NAME
                    ? `${DEPRECATED_ALIAS_NOTICE}\n${fallbackText}`
                    : fallbackText;
                return {
                    content: [{ type: "text", text: contentText }],
                    details: {
                        total: filtered.length,
                        count: 0,
                        intent,
                        ...(query ? { query: params.query?.trim() } : {}),
                        recommendations: [],
                        ...(toolName === DEPRECATED_ALIAS_TOOL_NAME ? { deprecated_alias_of: PRIMARY_TOOL_NAME } : {}),
                    },
                };
            }
            const header = `Recommended tools for "${intent}": ${recommendations.length}.`;
            const lines = recommendations.map(({ tool, reasons }) => {
                const active = tool.active ? " [active]" : "";
                const toolsets = tool.toolsets.length > 0 ? ` {${tool.toolsets.join(", ")}}` : "";
                const meta = `[${tool.kind}, ${tool.weight}, ${tool.activation}]`;
                const reasonText = reasons.length > 0 ? ` — ${joinReasonList(reasons)}` : "";
                return `• ${tool.name} — ${tool.summary}${reasonText}${active}${toolsets} ${meta}`;
            });
            const bodyText = `${header}\n${VISIBLE_TOOL_HINT}\n${lines.join("\n")}`;
            return {
                content: [{ type: "text", text: toolName === DEPRECATED_ALIAS_TOOL_NAME ? `${DEPRECATED_ALIAS_NOTICE}\n${bodyText}` : bodyText }],
                details: {
                    total: filtered.length,
                    count: recommendations.length,
                    intent,
                    ...(query ? { query: params.query?.trim() } : {}),
                    ...(toolName === DEPRECATED_ALIAS_TOOL_NAME ? { deprecated_alias_of: PRIMARY_TOOL_NAME } : {}),
                    recommendations: recommendations.map(({ tool, score, matchedTerms, matchedSources, reasons }) => ({
                        name: tool.name,
                        summary: tool.summary,
                        score,
                        matched_terms: matchedTerms,
                        matched_sources: matchedSources,
                        reason_summary: joinReasonList(reasons),
                        active: tool.active,
                        activation: tool.activation,
                        kind: tool.kind,
                        weight: tool.weight,
                        toolsets: tool.toolsets,
                        ...(tool.promptSnippet ? { promptSnippet: tool.promptSnippet } : {}),
                        ...(tool.parameters !== undefined ? { parameters: tool.parameters } : {}),
                        ...(tool.capability.recommend ? { recommendation_profile: tool.capability.recommend } : {}),
                    })),
                },
            };
        }
        const tools = filtered.slice(0, limit);
        if (tools.length === 0) {
            const emptyText = query ? `No tools found matching "${params.query}".` : "No tools available.";
            return {
                content: [{ type: "text", text: toolName === DEPRECATED_ALIAS_TOOL_NAME ? `${DEPRECATED_ALIAS_NOTICE}\n${emptyText}` : emptyText }],
                details: {
                    total: filtered.length,
                    count: 0,
                    query: params.query?.trim(),
                    tools: [],
                    ...(toolName === DEPRECATED_ALIAS_TOOL_NAME ? { deprecated_alias_of: PRIMARY_TOOL_NAME } : {}),
                },
            };
        }
        const activeCount = filtered.filter((tool) => tool.active).length;
        const header = query
            ? `Available tools (filtered): ${tools.length} of ${filtered.length}. Active in this view: ${activeCount}.`
            : `Available tools: ${tools.length} of ${filtered.length}. Active: ${activeCount}.`;
        const lines = tools.map((tool) => {
            const active = tool.active ? " [active]" : "";
            const toolsets = tool.toolsets.length > 0 ? ` {${tool.toolsets.join(", ")}}` : "";
            const meta = `[${tool.kind}, ${tool.weight}, ${tool.activation}]`;
            return `• ${tool.name} — ${tool.summary}${active}${toolsets} ${meta}`;
        });
        const bodyText = `${header}\n${VISIBLE_TOOL_HINT}\n${lines.join("\n")}`;
        return {
            content: [{ type: "text", text: toolName === DEPRECATED_ALIAS_TOOL_NAME ? `${DEPRECATED_ALIAS_NOTICE}\n${bodyText}` : bodyText }],
            details: {
                total: filtered.length,
                count: tools.length,
                query: params.query?.trim() || undefined,
                ...(toolName === DEPRECATED_ALIAS_TOOL_NAME ? { deprecated_alias_of: PRIMARY_TOOL_NAME } : {}),
                tools: tools.map((tool) => ({
                    name: tool.name,
                    description: tool.description,
                    ...(tool.parameters !== undefined ? { parameters: tool.parameters } : {}),
                    active: tool.active,
                    activation: tool.activation,
                    kind: tool.kind,
                    weight: tool.weight,
                    summary: tool.summary,
                    toolsets: tool.toolsets,
                    ...(tool.promptSnippet ? { promptSnippet: tool.promptSnippet } : {}),
                    ...(tool.capability.recommend ? { recommendation_profile: tool.capability.recommend } : {}),
                })),
            },
        };
    };
    pi.registerTool({
        name: PRIMARY_TOOL_NAME,
        label: PRIMARY_TOOL_NAME,
        description: PRIMARY_TOOL_DESCRIPTION,
        promptSnippet: PRIMARY_TOOL_PROMPT_SNIPPET,
        parameters: InternalToolsSchema,
        async execute(_toolCallId, params) {
            return executeListTools(PRIMARY_TOOL_NAME, params);
        },
    });
    pi.registerTool({
        name: DEPRECATED_ALIAS_TOOL_NAME,
        label: DEPRECATED_ALIAS_TOOL_NAME,
        description: `${DEPRECATED_ALIAS_NOTICE} ${PRIMARY_TOOL_DESCRIPTION}`,
        promptSnippet: `${DEPRECATED_ALIAS_TOOL_NAME}: deprecated alias for ${PRIMARY_TOOL_NAME}. Prefer ${PRIMARY_TOOL_NAME} for staged tool discovery.`,
        parameters: InternalToolsSchema,
        async execute(_toolCallId, params) {
            return executeListTools(DEPRECATED_ALIAS_TOOL_NAME, params);
        },
    });
};
