import { describe, expect, test } from "bun:test";
import { handleWorkspaceRoutes } from "../../../src/channels/web/http/dispatch-workspace.js";

describe("web http workspace dispatch", () => {
  test("returns null for non-workspace routes", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/timeline", { method: "GET" });
    const response = await handleWorkspaceRoutes(channel, req, "/timeline");
    expect(response).toBeNull();
  });

  test("dispatches workspace routes", async () => {
    const channel = {
      handleWorkspaceTree: () => new Response("tree"),
      handleWorkspaceFile: () => new Response("file"),
      handleWorkspaceUpdate: async () => new Response("update", { status: 201 }),
      handleWorkspaceDelete: () => new Response("delete"),
      handleWorkspaceRaw: () => new Response("raw"),
      handleWorkspaceDownload: () => new Response("download"),
      handleWorkspaceAttach: () => new Response("attach"),
      handleWorkspaceUpload: () => new Response("upload"),
      handleWorkspaceVisibility: () => new Response("visibility"),
    } as any;

    const treeReq = new Request("https://example.com/workspace/tree", { method: "GET" });
    expect(await (await handleWorkspaceRoutes(channel, treeReq, "/workspace/tree"))?.text()).toBe("tree");

    const fileReq = new Request("https://example.com/workspace/file", { method: "GET" });
    expect(await (await handleWorkspaceRoutes(channel, fileReq, "/workspace/file"))?.text()).toBe("file");

    const updateReq = new Request("https://example.com/workspace/file", { method: "PUT" });
    expect((await handleWorkspaceRoutes(channel, updateReq, "/workspace/file"))?.status).toBe(201);

    const deleteReq = new Request("https://example.com/workspace/file", { method: "DELETE" });
    expect(await (await handleWorkspaceRoutes(channel, deleteReq, "/workspace/file"))?.text()).toBe("delete");

    const rawReq = new Request("https://example.com/workspace/raw", { method: "GET" });
    expect(await (await handleWorkspaceRoutes(channel, rawReq, "/workspace/raw"))?.text()).toBe("raw");

    const downloadReq = new Request("https://example.com/workspace/download", { method: "GET" });
    expect(await (await handleWorkspaceRoutes(channel, downloadReq, "/workspace/download"))?.text()).toBe("download");

    const attachReq = new Request("https://example.com/workspace/attach", { method: "POST" });
    expect(await (await handleWorkspaceRoutes(channel, attachReq, "/workspace/attach"))?.text()).toBe("attach");

    const uploadReq = new Request("https://example.com/workspace/upload", { method: "POST" });
    expect(await (await handleWorkspaceRoutes(channel, uploadReq, "/workspace/upload"))?.text()).toBe("upload");

    const visibilityReq = new Request("https://example.com/workspace/visibility", { method: "POST" });
    expect(await (await handleWorkspaceRoutes(channel, visibilityReq, "/workspace/visibility"))?.text()).toBe("visibility");
  });
});
