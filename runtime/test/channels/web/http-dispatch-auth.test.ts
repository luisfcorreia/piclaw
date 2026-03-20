import { describe, expect, test } from "bun:test";
import { handleAuthRoutes } from "../../../src/channels/web/http/dispatch-auth.js";
import { buildRouteFlags } from "./helpers/route-flags.js";

describe("web http auth dispatch", () => {
  test("returns null when no auth route matches", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/unknown", { method: "GET" });
    const response = await handleAuthRoutes(channel, req, buildRouteFlags());
    expect(response).toBeNull();
  });

  test("enrol route requires TOTP session", async () => {
    const channel = {
      authGateway: {
        isTotpSession: () => false,
      },
      endpointContexts: {
        auth: () => ({
          createTotpContext: () => ({}) as any,
          createWebauthnContext: () => ({}) as any,
          createWebauthnEnrolPageContext: () => ({
            isPasskeyEnabled: () => true,
            json: (_payload: unknown, status = 200) => new Response(null, { status }),
          }),
          serveStatic: async () => new Response("ok"),
        }),
      },
      json: (_payload: unknown, status: number) => new Response(null, { status }),
    } as any;

    const getReq = new Request("https://example.com/auth/webauthn/enrol", { method: "GET" });
    const getFlags = buildRouteFlags({ isWebauthnEnrollPage: true, isGetOrHead: true });
    expect((await handleAuthRoutes(channel, getReq, getFlags))?.status).toBe(302);

    const postReq = new Request("https://example.com/auth/webauthn/enrol", { method: "POST" });
    const postFlags = buildRouteFlags({ isWebauthnEnrollPage: true });
    expect((await handleAuthRoutes(channel, postReq, postFlags))?.status).toBe(401);
  });

  test("dispatches webauthn start/finish routes", async () => {
    const channel = {
      authGateway: {
        isTotpSession: () => true,
      },
      endpointContexts: {
        auth: () => ({
          createTotpContext: () => ({}) as any,
          createWebauthnContext: () => ({
            isPasskeyEnabled: () => false,
            json: (_payload: unknown, status = 200) => new Response(null, { status }),
          }),
          createWebauthnEnrolPageContext: () => ({
            isPasskeyEnabled: () => false,
            json: (_payload: unknown, status = 200) => new Response(null, { status }),
          }),
          serveStatic: async () => new Response("unused"),
        }),
      },
      json: (_payload: unknown, status: number) => new Response(null, { status }),
    } as any;

    const req = new Request("https://example.com/auth/webauthn", { method: "POST" });

    expect((await handleAuthRoutes(channel, req, buildRouteFlags({ isWebauthnEnrollPage: true })))?.status).toBe(404);
    expect((await handleAuthRoutes(channel, req, buildRouteFlags({ isWebauthnLoginStart: true })))?.status).toBe(404);
    expect((await handleAuthRoutes(channel, req, buildRouteFlags({ isWebauthnLoginFinish: true })))?.status).toBe(404);
    expect((await handleAuthRoutes(channel, req, buildRouteFlags({ isWebauthnRegisterStart: true })))?.status).toBe(404);
    expect((await handleAuthRoutes(channel, req, buildRouteFlags({ isWebauthnRegisterFinish: true })))?.status).toBe(404);
  });
});
