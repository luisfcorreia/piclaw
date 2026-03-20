/**
 * totp-qr.test.ts – Regression tests for TOTP + QR helper exports.
 */

import { describe, expect, test } from "bun:test";
import { base32Encode, generateQrSvg, generateTotpQr } from "../../src/utils/totp-qr.js";

describe("totp-qr helpers", () => {
  test("base32Encode encodes without padding", () => {
    expect(base32Encode(Buffer.from("foo"))).toBe("MZXW6");
  });

  test("generateQrSvg renders SVG document", () => {
    const { svg } = generateQrSvg("hello", { cellSize: 4, margin: 1, level: "Q" });
    expect(svg).toContain("<svg");
    expect(svg).toContain("<path d=");
    expect(svg).toContain("fill=\"#000000\"");
  });

  test("generateTotpQr builds otpauth URI and qr svg", () => {
    const result = generateTotpQr({
      secret: "MYSECRETBASE32",
      label: "Piclaw:User",
      issuer: "Piclaw",
      digits: 8,
      period: 45,
      algorithm: "sha256",
      level: "H",
      cellSize: 5,
      margin: 3,
    });

    expect(result.secret).toBe("MYSECRETBASE32");
    expect(result.otpauth).toContain("otpauth://totp/Piclaw%3AUser");
    expect(result.otpauth).toContain("secret=MYSECRETBASE32");
    expect(result.otpauth).toContain("issuer=Piclaw");
    expect(result.otpauth).toContain("algorithm=SHA256");
    expect(result.otpauth).toContain("digits=8");
    expect(result.otpauth).toContain("period=45");
    expect(result.svg).toContain("<?xml version=\"1.0\"");
  });
});
