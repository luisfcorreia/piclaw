import { afterEach, describe, expect, test } from "bun:test";
import {
  registerOptionalProviders,
  type ProviderBootstrapAgentPool,
} from "../../src/runtime/provider-bootstrap.js";
import { setEnv } from "../helpers.js";

const restoreEnvStack: Array<() => void> = [];

afterEach(() => {
  while (restoreEnvStack.length > 0) {
    const restore = restoreEnvStack.pop();
    restore?.();
  }
});

describe("runtime provider bootstrap", () => {
  test("registers azure-openai provider models when AOAI env is configured", () => {
    restoreEnvStack.push(setEnv({
      AOAI_API_KEY: "token",
      AOAI_BASE_URL: "https://aoai.example",
      AOAI_MODEL_IDS: "gpt-5,gpt-5-mini",
      AOAI_MODEL_NAMES: "GPT 5,GPT 5 Mini",
      FOUNDRY_API_KEY: undefined,
      FOUNDRY_BASE_URL: undefined,
      FOUNDRY_MODEL_IDS: undefined,
      FOUNDRY_MODEL_NAMES: undefined,
    }));

    const registrations: Array<{
      provider: string;
      config: Parameters<ProviderBootstrapAgentPool["registerModelProvider"]>[1];
    }> = [];

    const pool: ProviderBootstrapAgentPool = {
      hasProviderModels: () => false,
      registerModelProvider: (provider, config) => {
        registrations.push({ provider, config });
      },
    };

    registerOptionalProviders(pool);

    expect(registrations).toHaveLength(1);
    expect(registrations[0].provider).toBe("azure-openai");
    expect(registrations[0].config.models?.map((m) => m.id)).toEqual(["gpt-5", "gpt-5-mini"]);
  });

  test("registers azure-foundry provider models when Foundry env is configured", () => {
    restoreEnvStack.push(setEnv({
      AOAI_API_KEY: undefined,
      AOAI_BASE_URL: undefined,
      AOAI_MODEL_IDS: undefined,
      AOAI_MODEL_NAMES: undefined,
      FOUNDRY_API_KEY: "foundry-token",
      FOUNDRY_BASE_URL: "https://foundry.example",
      FOUNDRY_MODEL_IDS: "mistral-large-3,mistral-small-3",
      FOUNDRY_MODEL_NAMES: "Mistral Large 3,Mistral Small 3",
    }));

    const registrations: Array<{
      provider: string;
      config: Parameters<ProviderBootstrapAgentPool["registerModelProvider"]>[1];
    }> = [];

    const pool: ProviderBootstrapAgentPool = {
      hasProviderModels: () => false,
      registerModelProvider: (provider, config) => {
        registrations.push({ provider, config });
      },
    };

    registerOptionalProviders(pool);

    expect(registrations).toHaveLength(1);
    expect(registrations[0].provider).toBe("azure-foundry");
    expect(registrations[0].config.models?.map((m) => m.id)).toEqual([
      "mistral-large-3",
      "mistral-small-3",
    ]);
  });

  test("does nothing when optional provider env vars are missing", () => {
    restoreEnvStack.push(setEnv({
      AOAI_API_KEY: undefined,
      AOAI_BASE_URL: undefined,
      AOAI_MODEL_IDS: undefined,
      AOAI_MODEL_NAMES: undefined,
      FOUNDRY_API_KEY: undefined,
      FOUNDRY_BASE_URL: undefined,
      FOUNDRY_MODEL_IDS: undefined,
      FOUNDRY_MODEL_NAMES: undefined,
    }));

    let called = false;
    const pool: ProviderBootstrapAgentPool = {
      hasProviderModels: () => false,
      registerModelProvider: () => {
        called = true;
      },
    };

    registerOptionalProviders(pool);

    expect(called).toBe(false);
  });
});
