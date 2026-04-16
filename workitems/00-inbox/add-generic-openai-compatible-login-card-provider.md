---
id: add-generic-openai-compatible-login-card-provider
title: Add generic OpenAI-compatible provider entry to /login card flow
status: inbox
created: 2026-04-16
updated: 2026-04-16
priority: medium
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - auth
  - providers
  - ux
owner:
origin: "https://github.com/rcarmo/piclaw/issues/46"
---

# Add generic OpenAI-compatible provider entry to /login card flow

## Summary

The web `/login` card flow supports specific providers but has no
generic "OpenAI-compatible" entry for providers that expose an
OpenAI-compatible API with an API key (AI Studio, OpenRouter,
Together AI, etc.).

Users trying these providers have to fall back to `pi /login` in
the terminal, which is less discoverable.

## Origin

- GitHub issue: https://github.com/rcarmo/piclaw/issues/46
- Reported in: https://github.com/rcarmo/piclaw/issues/44

## Acceptance Criteria

- [ ] A "Custom OpenAI-compatible" entry exists in the `/login` card
- [ ] Fields: Base URL (required), API Key (required), Model ID (required),
      Additional model IDs (optional), Context window (optional)
- [ ] Uses the existing `openai-completions` custom API path
- [ ] Works with AI Studio, OpenRouter, and other OpenAI-compatible endpoints
- [ ] Existing provider entries (Ollama, Azure OpenAI, etc.) are unaffected

## Implementation Path

Add a new entry to `PROVIDER_DEFS` in `runtime/src/agent-control/handlers/login.ts`:

```ts
{
  id: "openai-compatible", name: "OpenAI-compatible", hasOAuth: false, hasApiKey: false, isCustom: true,
  customApi: "openai-completions",
  customFields: [
    { key: "baseUrl", label: "Base URL", placeholder: "https://api.example.com/v1", required: true },
    { key: "apiKey", label: "API Key", placeholder: "sk-...", required: true },
    { key: "modelId", label: "Model ID", placeholder: "gpt-4o", required: true },
    { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "model-a,model-b", required: false },
    { key: "contextWindow", label: "Context window", placeholder: "128000", required: false },
  ],
},
```

## Test Plan

- [ ] Card renders with all fields
- [ ] Configuration persists and models appear in `/model`
- [ ] AI Studio endpoint works with API key
- [ ] Ollama and Azure OpenAI entries unaffected

## Links

- `runtime/src/agent-control/handlers/login.ts` (PROVIDER_DEFS)
- https://github.com/rcarmo/piclaw/issues/44
- https://github.com/rcarmo/piclaw/issues/46
