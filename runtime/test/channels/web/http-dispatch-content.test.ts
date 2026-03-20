import { describe, expect, test } from "bun:test";
import {
  handleContentPrimaryRoutes,
  handleContentSecondaryRoutes,
} from "../../../src/channels/web/http/dispatch-content.js";

describe("web http content dispatch", () => {
  test("primary returns null for non-content routes", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/agents", { method: "GET" });
    const response = await handleContentPrimaryRoutes(channel, req, "/agents", new URL(req.url));
    expect(response).toBeNull();
  });

  test("primary dispatches timeline/search/hashtag/thread", async () => {
    const channel = {
      clampInt: (_value: string | null, fallback: number) => fallback,
      parseOptionalInt: () => 7,
      handleTimeline: (limit: number, before?: number, chatJid?: string) => new Response(`timeline:${limit}:${String(before)}:${String(chatJid ?? '')}`),
      handleHashtag: (tag: string, _limit?: number, _offset?: number, chatJid?: string) => new Response(`hashtag:${tag}:${String(chatJid ?? '')}`),
      handleSearch: (query: string, _limit?: number, _offset?: number, chatJid?: string, scope?: string, rootChatJid?: string) => new Response(`search:${query}:${String(chatJid ?? '')}:${String(scope ?? '')}:${String(rootChatJid ?? '')}`),
      handleThread: (id: number | null, chatJid?: string) => new Response(`thread:${String(id)}:${String(chatJid ?? '')}`),
      handlePost: async (_req: Request, isReply: boolean) => new Response(isReply ? "reply" : "post"),
      handleUpdatePost: async (_req: Request, id: number | null) => new Response(`patch:${String(id)}`),
    } as any;

    const timelineReq = new Request("https://example.com/timeline?chat_jid=web%3Abranch", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, timelineReq, "/timeline", new URL(timelineReq.url)))?.text()).toBe("timeline:10:7:web:branch");

    const hashtagReq = new Request("https://example.com/hashtag/demo?chat_jid=web%3Abranch", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, hashtagReq, "/hashtag/demo", new URL(hashtagReq.url)))?.text()).toBe("hashtag:demo:web:branch");

    const searchReq = new Request("https://example.com/search?q=hello&chat_jid=web%3Abranch&scope=root&root_chat_jid=web%3Aroot", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, searchReq, "/search", new URL(searchReq.url)))?.text()).toBe("search:hello:web:branch:root:web:root");

    const postReq = new Request("https://example.com/post", { method: "POST" });
    expect(await (await handleContentPrimaryRoutes(channel, postReq, "/post", new URL(postReq.url)))?.text()).toBe("post");

    const replyReq = new Request("https://example.com/post/reply", { method: "POST" });
    expect(await (await handleContentPrimaryRoutes(channel, replyReq, "/post/reply", new URL(replyReq.url)))?.text()).toBe("reply");

    const legacyReplyReq = new Request("https://example.com/reply", { method: "POST" });
    expect(await handleContentPrimaryRoutes(channel, legacyReplyReq, "/reply", new URL(legacyReplyReq.url))).toBeNull();

    const patchReq = new Request("https://example.com/post/7", { method: "PATCH" });
    expect(await (await handleContentPrimaryRoutes(channel, patchReq, "/post/7", new URL(patchReq.url)))?.text()).toBe("patch:7");

    const threadReq = new Request("https://example.com/thread/7?chat_jid=web%3Abranch", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, threadReq, "/thread/7", new URL(threadReq.url)))?.text()).toBe("thread:7:web:branch");
  });

  test("secondary handles delete/internal routes", async () => {
    const channel = {
      parseOptionalInt: () => 42,
      handleDeletePost: (_req: Request, id: number | null, cascade: boolean) => new Response(`delete:${String(id)}:${cascade}`),
      handleInternalPost: async () => new Response("internal", { status: 201 }),
    } as any;

    const deleteReq = new Request("https://example.com/post/42?cascade=1", { method: "DELETE" });
    expect(await (await handleContentSecondaryRoutes(channel, deleteReq, "/post/42", new URL(deleteReq.url)))?.text()).toBe("delete:42:true");

    const internalReq = new Request("https://example.com/internal/post", { method: "POST" });
    expect((await handleContentSecondaryRoutes(channel, internalReq, "/internal/post", new URL(internalReq.url)))?.status).toBe(201);
  });
});
