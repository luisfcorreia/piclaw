import { expect, test } from "bun:test";

import {
  buildMentionValue,
  filterMentionAgents,
  getVisibleMentionAgents,
  parseMentionAutocompleteQuery,
} from "../../web/src/ui/agent-mentions.js";

const AGENTS = [
  { chat_jid: "web:default", agent_name: "main", display_name: "Main" },
  { chat_jid: "web:research", agent_name: "research", display_name: "Research" },
  { chat_jid: "web:review", agent_name: "review", display_name: "Review" },
  { chat_jid: "web:review-2", agent_name: "review", display_name: "Review duplicate" },
  { chat_jid: "web:builder", agent_name: "builder", display_name: "Builder" },
];

test("parseMentionAutocompleteQuery recognises leading @agent fragments", () => {
  expect(parseMentionAutocompleteQuery("@re")).toBe("re");
  expect(parseMentionAutocompleteQuery("@Review")).toBe("review");
  expect(parseMentionAutocompleteQuery("hello @re")).toBeNull();
  expect(parseMentionAutocompleteQuery("@re test")).toBeNull();
});

test("filterMentionAgents matches by prefix and excludes the current chat", () => {
  const result = filterMentionAgents(AGENTS, "@re", { currentChatJid: "web:default" });
  expect(result.map((agent) => agent.agent_name)).toEqual(["research", "review"]);
});

test("filterMentionAgents deduplicates repeated handles", () => {
  const result = filterMentionAgents(AGENTS, "@rev");
  expect(result).toHaveLength(1);
  expect(result[0]?.chat_jid).toBe("web:review");
});

test("buildMentionValue normalises the handle and appends a trailing space", () => {
  expect(buildMentionValue("Research")).toBe("@research ");
  expect(buildMentionValue("  ")).toBe("");
});

test("getVisibleMentionAgents returns a small deduped list excluding the current chat", () => {
  const result = getVisibleMentionAgents(AGENTS, { currentChatJid: "web:default", limit: 3 });
  expect(result.map((agent) => agent.agent_name)).toEqual(["research", "review", "builder"]);
});
