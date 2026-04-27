# Provider/model pricing reference

_Reference tag (commit date): 2026-04-27_

This note documents the pricing snapshot used by the estimated provider/model cost chart.

- Source of truth for the chart logic: `provider-model-pricing-reference.ts`
- Primary source: `exports/ai-provider-pricing-2026-04.docx`
- GPT-4o fallback source: `projects/openviktor/apps/bot/src/agent/pricing.ts`

## Assumptions

- GitHub Copilot and Azure rows are estimated from underlying vendor token pricing, not seat plans or invoice meters.
- OpenAI cache writes are estimated at the standard input rate when the pricing note only exposes cached-input read discounts.
- Anthropic cache writes use 1.25× input pricing.
- GPT-5.1/5.2 Codex variants and Codex Spark are proxied to the GPT-5.3 Codex or GPT-5 Mini rates listed below.
- Claude Opus 4.6 (1M) keeps standard Opus pricing; long-context premiums are not modeled.

## Reference rows

| Model key | Canonical model | Input / 1M | Output / 1M | Cache read / 1M | Cache write / 1M | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-opus-4.5` | Claude Opus 4.5 | $5.00 | $25.00 | $0.50 | $6.25 | Proxy to Opus 4.x pricing |
| `claude-opus-4.6` | Claude Opus 4.6 | $5.00 | $25.00 | $0.50 | $6.25 |  |
| `claude-opus-4.6-1m` | Claude Opus 4.6 (1M) | $5.00 | $25.00 | $0.50 | $6.25 | No long-context premium modeled |
| `claude-opus-4.7` | Claude Opus 4.7 | $5.00 | $25.00 | $0.50 | $6.25 | Same API price as 4.6 per note |
| `claude-sonnet-4.6` | Claude Sonnet 4.6 | $3.00 | $15.00 | $0.30 | $3.75 |  |
| `gpt-5.4` / `gpt-5-4` | GPT-5.4 | $2.50 | $15.00 | $0.25 | $2.50 | Cache write estimated at standard input |
| `gpt-5.4-pro` / `gpt-5-4-pro` | GPT-5.4 Pro | $30.00 | $180.00 | $0.00 | $30.00 | No cached-input rate published |
| `gpt-5-mini` | GPT-5 Mini | $0.75 | $4.50 | $0.075 | $0.75 | Proxy for GPT-5 Mini / Codex-mini variants |
| `gpt-5.1-codex` / `gpt-5-1-codex` | GPT-5.1 Codex | $1.75 | $14.00 | $0.175 | $1.75 | Proxy to GPT-5.3 Codex |
| `gpt-5.1-codex-mini` / `gpt-5-1-codex-mini` | GPT-5.1 Codex Mini | $0.75 | $4.50 | $0.075 | $0.75 | Proxy to GPT-5 Mini |
| `gpt-5.2-codex` / `gpt-5-2-codex` | GPT-5.2 Codex | $1.75 | $14.00 | $0.175 | $1.75 | Proxy to GPT-5.3 Codex |
| `gpt-5.3-codex` / `gpt-5-3-codex` | GPT-5.3 Codex | $1.75 | $14.00 | $0.175 | $1.75 | Cache write estimated at standard input |
| `gpt-5.3-codex-spark` / `gpt-5-3-codex-spark` | GPT-5.3 Codex Spark | $1.75 | $14.00 | $0.175 | $1.75 | Proxy to GPT-5.3 Codex |
| `gpt-4o` | GPT-4o | $2.50 | $10.00 | $0.00 | $0.00 | Fallback helper entry |
| `mistral-large-3` | Mistral Large 3 | $2.00 | $6.00 | $0.00 | $0.00 | Azure Foundry usage proxied to Mistral Large |
