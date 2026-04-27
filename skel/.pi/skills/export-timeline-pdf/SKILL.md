---
name: export-timeline-pdf
description: Export a chat timeline to a PDF using the internal localhost export endpoint and wkhtmltopdf (currently unsupported in this environment).
distribution: private
---

# Export timeline PDF

> ⚠️ This skill is currently unsupported here.

## Fallback behaviour

If the user asks for a timeline export right now:

1. Say that PDF export is currently unavailable in this environment.
2. Offer a fallback instead:
   - gather the requested range with the `messages` tool
   - write a Markdown or HTML export to the workspace
   - attach that file if the user wants a downloadable artifact
3. Do **not** pretend the PDF path worked if the skill is unsupported.

## When this skill is supported

Use the script below only when the local skill runtime and `wkhtmltopdf` are known to work.

### Examples

Export the last 50 messages:

```bash
bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default --last 50
```

Export a date range:

```bash
bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default \
  --from "2026-03-01T00:00:00Z" --to "2026-03-05T23:59:59Z"
```

Export a row-id range:

```bash
bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default \
  --from-row 1234 --to-row 1300
```

Dark theme:

```bash
bun /workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --chat web:default --last 20 --theme dark
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--chat` | Chat JID to export | `web:default` |
| `--from` | Start timestamp (ISO 8601) | (all) |
| `--to` | End timestamp (ISO 8601) | (all) |
| `--from-row` | Start message row ID | (all) |
| `--to-row` | End message row ID | (all) |
| `--last` | Export only the last N messages | (all) |
| `--theme` | `light` or `dark` | `light` |
| `--out` | Output PDF path | `/workspace/exports/timeline-<chat>.pdf` |
| `--port` | Piclaw web port | auto-detect / `8080` |
| `--auth-key` | Internal export auth key | env/config lookup |
| `--html-only` | Save HTML sidecar without rendering PDF | off |

## Auth lookup order

1. `--auth-key`
2. `PICLAW_EXPORT_AUTH_KEY`
3. `PICLAW_INTERNAL_SECRET`
4. `PICLAW_WEB_INTERNAL_SECRET`
5. `web.internalSecret` from `/workspace/.piclaw/config.json`

## Prerequisites

- `wkhtmltopdf` must be installed and on `PATH`
- the piclaw web server must be running locally

## Notes

- The script is read-only: it does not modify SQLite or auth/session state.
- The HTML export endpoint is `GET /internal/export/timeline`.
- The script writes an HTML sidecar next to the PDF for inspection.
