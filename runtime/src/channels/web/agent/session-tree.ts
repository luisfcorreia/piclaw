/**
 * web/agent/session-tree.ts – Session tree endpoint for the web UI tree viewer.
 */

export interface SessionTreeContext {
  defaultChatJid: string;
  json(payload: unknown, status?: number): Response;
  getSessionTreeForChat(chatJid: string): { leafId: string | null; nodes: unknown[] } | null;
}

function resolveChatJid(req: Request, defaultChatJid: string): string {
  const url = new URL(req.url);
  return (url.searchParams.get("chat_jid") || defaultChatJid).trim() || defaultChatJid;
}

export function handleSessionTreeRequest(req: Request, ctx: SessionTreeContext): Response {
  const chatJid = resolveChatJid(req, ctx.defaultChatJid);
  const tree = ctx.getSessionTreeForChat(chatJid);
  if (!tree) {
    return ctx.json({ leafId: null, nodes: [], error: "No active session for this chat." }, 200);
  }
  return ctx.json(tree, 200);
}
