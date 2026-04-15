/**
 * internal-tools – registers list_internal_tools for quick tool discovery.
 */
import { Type } from "@sinclair/typebox";
import type {
  ExtensionAPI,
  ExtensionFactory,
} from "@mariozechner/pi-coding-agent";
import { getToolsetsForTool, getEffectiveDefaultActiveToolNames } from "./tool-activation.js";
import { getToolCapability, type ToolActivation } from "./tool-capabilities.js";

const InternalToolsSchema = Type.Object({
  query: Type.Optional(Type.String({ description: "Filter by tool name/description substring." })),
  limit: Type.Optional(Type.Integer({ description: "Max tools to return (1-200).", minimum: 1, maximum: 200 })),
  include_parameters: Type.Optional(Type.Boolean({ description: "Include JSON schema parameters in details." })),
});

function clampLimit(value: number | undefined, fallback = 100): number {
  if (!Number.isFinite(value)) return fallback;
  const num = Number(value);
  if (Number.isNaN(num)) return fallback;
  return Math.min(Math.max(num, 1), 200);
}

function summarizeDescription(value: string | undefined): string {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "No description.";
  if (text.length <= 140) return text;
  return `${text.slice(0, 139)}…`;
}

const HINT = [
  "## Internal Tool Discovery",
  "If you are unsure about available tools, call list_internal_tools.",
  "",
  "## Baseline working principles",
  "These apply even when no AGENTS.md or project instructions are present:",
  "- Read relevant files before editing. Never edit blind.",
  "- Test after changes. Never declare done without verification.",
  "- Prefer editing over rewriting whole files.",
  "- Keep output direct, concise, and specific. Lead with findings.",
  "- Attach generated files to the chat with attach_file instead of only naming paths.",
  "- Keychain entries are auto-injected as $ENV_VARS into bash (names with `/`, `-`, `.` become `_` and uppercase). Never fetch secrets and inline them.",
].join("\n");

/** Extension factory that registers list_internal_tools. */
export const internalTools: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
  }));

  pi.registerTool({
    name: "list_internal_tools",
    label: "list_internal_tools",
    description: "List available internal tools with brief descriptions. Each result includes capability metadata (kind: read-only/mutating/mixed, weight: lightweight/standard/heavy, activation: default/on-demand) and toolset groupings. Use the query parameter to filter by name, description, or capability domain.",
    promptSnippet: "list_internal_tools: Discover available internal tools and their schemas.",
    parameters: InternalToolsSchema,
    async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
      const query = params.query?.trim().toLowerCase() || "";
      const limit = clampLimit(params.limit, 100);
      const includeParameters = Boolean(params.include_parameters);

      const activeSet = new Set(pi.getActiveTools());
      const visibleTools = process.platform === "win32" && pi.getAllTools().some((tool) => tool.name === "powershell")
        ? pi.getAllTools().filter((tool) => tool.name !== "bash")
        : pi.getAllTools();
      const defaultSet = new Set(getEffectiveDefaultActiveToolNames(visibleTools));
      const all = visibleTools
        .map((tool) => {
          const cap = getToolCapability(tool.name);
          const activation: ToolActivation = defaultSet.has(tool.name) ? "default" : "on-demand";
          return {
            name: tool.name,
            description: summarizeDescription(tool.description),
            parameters: includeParameters ? tool.parameters : undefined,
            active: activeSet.has(tool.name),
            activation,
            kind: cap.kind,
            weight: cap.weight,
            summary: cap.summary || summarizeDescription(tool.description),
            toolsets: getToolsetsForTool(tool.name),
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      const filtered = query
        ? all.filter((tool) =>
            tool.name.toLowerCase().includes(query)
            || tool.description.toLowerCase().includes(query)
            || tool.summary.toLowerCase().includes(query),
          )
        : all;

      const tools = filtered.slice(0, limit);
      if (tools.length === 0) {
        return {
          content: [{ type: "text", text: query ? `No tools found matching "${params.query}".` : "No tools available." }],
          details: { total: filtered.length, count: 0, query: params.query?.trim(), tools: [] },
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

      return {
        content: [{ type: "text", text: `${header}\n${lines.join("\n")}` }],
        details: {
          total: filtered.length,
          count: tools.length,
          query: params.query?.trim() || undefined,
          tools,
        },
      };
    },
  });
};
