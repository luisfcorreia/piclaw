---
name: web-search
description: Search the web via SearXNG and optionally fetch result pages as raw Markdown content.
distribution: public
---

# Web Search

Use this when you want **search results plus raw fetched page content**.

If you only need short summaries rather than full converted page content, use `web-search-summary` instead.

## Examples

Search only:

```bash
bun /workspace/.pi/skills/web-search/web-search.ts --query "your query"
```

Fetch top results and convert them to Markdown:

```bash
bun /workspace/.pi/skills/web-search/web-search.ts --query "your query" --fetch true --fetch-limit 2
```

## Output shape

The script prints JSON like:

```json
{
  "query": "...",
  "searxUrl": "http://.../search",
  "limit": 5,
  "fetch": true,
  "results": [
    {
      "title": "...",
      "url": "https://...",
      "content": "snippet or fetched markdown"
    }
  ]
}
```

- Without `--fetch`, `results[].content` is the search-result snippet when available.
- With `--fetch`, fetched items replace `content` with converted Markdown.

## Failure behaviour

- If the search request fails, the script exits non-zero.
- If page fetch fails for an individual result, the search still succeeds and that item gets `content: "Failed to fetch: ..."`.

## Options

- `--query` / `--q` — required search query
- `--limit` — number of search results to return (default `5`)
- `--fetch` — fetch and convert result pages (`true` / `1`)
- `--fetch-limit` — how many results to fetch and convert (default `2`)
- `--searx-url` — override the SearXNG endpoint (default `http://192.168.1.100:3080/search`)
- `--timeout` — fetch timeout in milliseconds (default `15000`)

## Notes

- HTML conversion uses `turndown` + `linkedom`.
- The converter prefers `<article>`, `<main>`, or `[role='main']` when present.
