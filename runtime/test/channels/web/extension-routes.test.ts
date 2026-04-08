import { afterEach, describe, expect, test } from "bun:test";
import "../../helpers.js";
import {
  clearExtensionRoutes,
  getRegisteredRoutes,
  handleExtensionRoutes,
  registerExtensionRoute,
} from "../../../src/channels/web/http/extension-routes.js";

afterEach(() => {
  clearExtensionRoutes();
});

describe("extension route registry", () => {
  test("dedupes repeated registrations for the same prefix and extension path", async () => {
    registerExtensionRoute("/drawio", () => new Response("first"), "/ext/drawio");
    registerExtensionRoute("/drawio", () => new Response("second"), "/ext/drawio");

    expect(getRegisteredRoutes()).toEqual([
      { prefix: "/drawio", extensionPath: "/ext/drawio" },
    ]);

    const response = await handleExtensionRoutes(new Request("http://localhost/drawio/edit"), "/drawio/edit");
    expect(response).not.toBeNull();
    expect(await response!.text()).toBe("second");
  });

  test("keeps distinct registrations when extension paths differ", () => {
    registerExtensionRoute("/drawio", () => new Response("first"), "/ext/drawio-a");
    registerExtensionRoute("/drawio", () => new Response("second"), "/ext/drawio-b");

    expect(getRegisteredRoutes()).toEqual([
      { prefix: "/drawio", extensionPath: "/ext/drawio-a" },
      { prefix: "/drawio", extensionPath: "/ext/drawio-b" },
    ]);
  });
});
