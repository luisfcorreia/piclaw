import { beforeEach, describe, expect, mock, test } from "bun:test";
import { clearProviderUsageCache, getProviderUsage } from "../../src/agent-pool/provider-usage.js";

function createAuthStorage(credentials: Record<string, unknown>) {
  return {
    get: (provider: string) => credentials[provider],
    refreshOAuthTokenWithLock: async (_provider: string) => null,
  } as any;
}

describe("provider usage", () => {
  beforeEach(() => {
    clearProviderUsageCache();
  });

  test("fetches Codex usage from ChatGPT usage API", async () => {
    const fetchMock = mock(async () => new Response(JSON.stringify({
      plan_type: "pro",
      rate_limit: {
        primary_window: {
          used_percent: 38,
          reset_at: Math.floor(Date.now() / 1000) + 3600,
          limit_window_seconds: 18000,
        },
        secondary_window: {
          used_percent: 59,
          reset_at: Math.floor(Date.now() / 1000) + 86400,
          limit_window_seconds: 604800,
        },
      },
      credits: {
        balance: 123,
        unlimited: false,
      },
    })));
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          "openai-codex": {
            type: "oauth",
            access: "token",
            accountId: "acct_123",
            expires: Date.now() + 60_000,
          },
        }),
        "openai-codex"
      );

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(usage?.provider).toBe("openai-codex");
      expect(usage?.plan).toBe("pro");
      expect(usage?.primary?.label).toBe("5h");
      expect(usage?.primary?.used_percent).toBe(38);
      expect(usage?.primary?.remaining_percent).toBe(62);
      expect(usage?.secondary?.label).toBe("week");
      expect(usage?.credits_remaining).toBe(123);
      expect(usage?.hint_short).toContain("5h 62%");
      expect(usage?.hint_short).toContain("wk 41%");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("fetches GitHub Copilot usage from internal usage API", async () => {
    const fetchMock = mock(async () => new Response(JSON.stringify({
      copilot_plan: "individual",
      quota_reset_date: new Date(Date.now() + 86400_000).toISOString(),
      quota_snapshots: {
        premium_interactions: {
          entitlement: 100,
          remaining: 70,
          percent_remaining: 70,
          quota_id: "premium",
        },
        chat: {
          entitlement: 500,
          remaining: 400,
          percent_remaining: 80,
          quota_id: "chat",
        },
      },
    })));
    const previousFetch = globalThis.fetch;
    globalThis.fetch = fetchMock as any;

    try {
      const usage = await getProviderUsage(
        createAuthStorage({
          "github-copilot": {
            type: "oauth",
            access: "copilot_access_token",
            refresh: "github_oauth_token",
            expires: Date.now() + 60_000,
          },
        }),
        "github-copilot"
      );

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(usage?.provider).toBe("github-copilot");
      expect(usage?.plan).toBe("individual");
      expect(usage?.primary?.label).toBe("premium");
      expect(usage?.primary?.remaining_percent).toBe(70);
      expect(usage?.secondary?.label).toBe("chat");
      expect(usage?.secondary?.remaining_percent).toBe(80);
      expect(usage?.hint_short).toContain("premium 70%");
      expect(usage?.hint_short).toContain("chat 80%");
    } finally {
      globalThis.fetch = previousFetch;
    }
  });

  test("returns null for unsupported providers", async () => {
    const usage = await getProviderUsage(createAuthStorage({}), "openai");
    expect(usage).toBeNull();
  });
});
