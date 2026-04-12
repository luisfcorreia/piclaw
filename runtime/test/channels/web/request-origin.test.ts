import { expect, test } from "bun:test";

import { getWebOrigin, rememberWebOrigin } from "../../../src/channels/web/auth/request-origin.js";

test("rememberWebOrigin stores the latest request origin", () => {
  rememberWebOrigin("chat:origin-ok", new Request("https://example.com/path", {
    headers: { host: "chat.example.com" },
  }));

  expect(getWebOrigin("chat:origin-ok")).toBe("https://chat.example.com");
});

test("rememberWebOrigin suppresses invalid request URLs without clobbering state", () => {
  rememberWebOrigin("chat:origin-stable", new Request("https://stable.example.com/path"));

  expect(() => rememberWebOrigin("chat:origin-stable", {
    url: ":not-a-valid-url:",
    headers: new Headers(),
  } as Request)).not.toThrow();

  expect(getWebOrigin("chat:origin-stable")).toBe("https://stable.example.com");
});
