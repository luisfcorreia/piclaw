/**
 * web/http/dispatch-workspace.ts – Workspace route dispatch helpers.
 */

import type { WebChannel } from "../web.js";

/**
 * Handle /workspace routes when the request matches; otherwise return null.
 */
export async function handleWorkspaceRoutes(
  channel: WebChannel,
  req: Request,
  pathname: string
): Promise<Response | null> {
  if (req.method === "GET" && pathname === "/workspace/tree") {
    return channel.handleWorkspaceTree(req);
  }

  if (req.method === "GET" && pathname === "/workspace/file") {
    return channel.handleWorkspaceFile(req);
  }

  if (req.method === "PUT" && pathname === "/workspace/file") {
    return await channel.handleWorkspaceUpdate(req);
  }

  if (req.method === "DELETE" && pathname === "/workspace/file") {
    return channel.handleWorkspaceDelete(req);
  }

  if (req.method === "GET" && pathname === "/workspace/raw") {
    return channel.handleWorkspaceRaw(req);
  }

  if (req.method === "GET" && pathname === "/workspace/download") {
    return channel.handleWorkspaceDownload(req);
  }

  if (req.method === "POST" && pathname === "/workspace/attach") {
    return channel.handleWorkspaceAttach(req);
  }

  if (req.method === "POST" && pathname === "/workspace/upload") {
    return channel.handleWorkspaceUpload(req);
  }

  if (req.method === "POST" && pathname === "/workspace/visibility") {
    return channel.handleWorkspaceVisibility(req);
  }

  return null;
}
