import { describe, expect, test } from "bun:test";
import { handleMediaRoutes } from "../../../src/channels/web/http/dispatch-media.js";

describe("web http media dispatch", () => {
  test("returns null for non-media routes", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/unknown", { method: "GET" });
    const response = await handleMediaRoutes(channel, req, "/unknown");
    expect(response).toBeNull();
  });

  test("dispatches upload route", async () => {
    const channel = {
      handleMediaUpload: async () => new Response("upload", { status: 201 }),
    } as any;

    const req = new Request("https://example.com/media/upload", { method: "POST" });
    const response = await handleMediaRoutes(channel, req, "/media/upload");
    expect(response?.status).toBe(201);
  });

  test("returns 404 for invalid media id", async () => {
    const channel = {
      parseOptionalInt: () => null,
      json: (_payload: unknown, status: number) => new Response("err", { status }),
    } as any;

    const req = new Request("https://example.com/media/bad/thumbnail", { method: "GET" });
    const response = await handleMediaRoutes(channel, req, "/media/bad/thumbnail");
    expect(response?.status).toBe(404);
  });

  test("dispatches thumbnail/info/raw routes", async () => {
    const channel = {
      parseOptionalInt: () => 123,
      json: (_payload: unknown, status: number) => new Response("err", { status }),
      handleMedia: (id: number, thumbnail: boolean) => new Response(`${id}:${thumbnail ? "thumb" : "raw"}`),
      handleMediaInfo: (id: number) => new Response(`${id}:info`),
    } as any;

    const thumbReq = new Request("https://example.com/media/123/thumbnail", { method: "GET" });
    const thumbResponse = await handleMediaRoutes(channel, thumbReq, "/media/123/thumbnail");
    expect(await thumbResponse?.text()).toBe("123:thumb");

    const infoReq = new Request("https://example.com/media/123/info", { method: "GET" });
    const infoResponse = await handleMediaRoutes(channel, infoReq, "/media/123/info");
    expect(await infoResponse?.text()).toBe("123:info");

    const rawReq = new Request("https://example.com/media/123", { method: "GET" });
    const rawResponse = await handleMediaRoutes(channel, rawReq, "/media/123");
    expect(await rawResponse?.text()).toBe("123:raw");
  });
});
