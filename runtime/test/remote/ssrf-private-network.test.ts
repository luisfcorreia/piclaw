/**
 * SSRF tests with PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1.
 *
 * This file must be run with the env var set before process start:
 *   PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1 bun test test/remote/ssrf-private-network.test.ts
 *
 * The config is frozen at module load time, so process.env changes
 * after import have no effect.
 *
 * @env PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK=1
 */
import { describe, expect, test } from "bun:test";
import { validateCallbackUrl } from "../../src/remote/ssrf.js";
import { getRemoteInteropConfig } from "../../src/core/config.js";

const configOk = getRemoteInteropConfig().allowPrivateNetwork;

describe("validateCallbackUrl with allowPrivateNetwork", () => {
  test("config has allowPrivateNetwork enabled", () => {
    // Guard: if this fails, the env var was not set before process start
    expect(configOk).toBe(true);
  });

  test("allows localhost when private network enabled", async () => {
    const result = await validateCallbackUrl("https://localhost/callback");
    expect(result.ok).toBe(true);
    expect(result.url?.hostname).toBe("localhost");
  });

  test("allows private IPv4 when private network enabled", async () => {
    const result = await validateCallbackUrl("https://192.168.1.50/callback");
    expect(result.ok).toBe(true);
  });

  test("allows .local hostnames when private network enabled", async () => {
    const result = await validateCallbackUrl("https://pibox-agent1.local/callback");
    expect(result.ok).toBe(true);
  });

  test("still rejects http:// unless allowHttp is also set", async () => {
    const result = await validateCallbackUrl("http://192.168.1.50/callback");
    expect(result.ok).toBe(false);
    expect(result.error).toContain("https");
  });

  test("still rejects missing/invalid URLs", async () => {
    const result1 = await validateCallbackUrl(undefined);
    expect(result1.ok).toBe(false);

    const result2 = await validateCallbackUrl("not-a-url");
    expect(result2.ok).toBe(false);
  });
});
