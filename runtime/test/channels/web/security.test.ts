import { describe, expect, test } from "bun:test";
import { checkCsrfOrigin } from "../../../src/channels/web/http/security.js";

describe("checkCsrfOrigin", () => {
  test("allows exact same-origin requests", () => {
    const req = new Request("https://app.example.com/api/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "app.example.com",
      },
    });

    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("allows reverse-proxy origin via forwarded host/proto", () => {
    const req = new Request("http://internal.local/api/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "internal.local",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });

    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("allows tls-offload fallback when host matches but backend sees http", () => {
    const req = new Request("http://internal.local/api/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "app.example.com",
      },
    });

    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("blocks mismatched origins", () => {
    const req = new Request("http://internal.local/api/post", {
      method: "POST",
      headers: {
        origin: "https://evil.example.com",
        host: "app.example.com",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });

    expect(checkCsrfOrigin(req)).toBe(false);
  });
});
