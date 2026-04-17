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

test("rememberWebOrigin prunes stale origins after the TTL window", () => {
  const originalNow = Date.now;
  try {
    Date.now = () => 0;
    rememberWebOrigin("chat:origin-stale", new Request("https://stale.example.com/path"));

    Date.now = () => 24 * 60 * 60 * 1000 + 1;
    rememberWebOrigin("chat:origin-fresh", new Request("https://fresh.example.com/path"));

    expect(getWebOrigin("chat:origin-stale")).toBeNull();
    expect(getWebOrigin("chat:origin-fresh")).toBe("https://fresh.example.com");
  } finally {
    Date.now = originalNow;
  }
});
