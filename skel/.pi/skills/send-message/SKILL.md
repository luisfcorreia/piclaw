---
name: send-message
description: Send a message to the chat immediately without waiting for the current task to finish. Useful for acknowledging requests or sending progress updates while working.
distribution: public
---

# Send a Message

Write an IPC JSON file so piclaw sends a message immediately.

## Usage

```bash
cat > "$PICLAW_DATA/ipc/messages/msg_$(date +%s)_$$_send.json" <<EOF
{
  "type": "message",
  "chatJid": "$PICLAW_CHAT_JID",
  "text": "Your message here",
  "media": [
    {
      "path": "/absolute/path/to/chart.svg",
      "content_type": "image/svg+xml",
      "inline": true
    }
  ]
}
EOF
```

## When to use

- acknowledge a request before longer work starts
- send progress updates during a multi-step task
- deliver partial results while continuing to work

Example progress message:

```text
Processing 3/10 files, ~30s remaining…
```

## Notes

- Messages are usually picked up within ~1 second.
- The IPC file is deleted after successful delivery.
- Use WhatsApp-compatible formatting for WhatsApp-bound chats: `*bold*`, `_italic_`, `• bullets`, and fenced code blocks.
- You can attach local media files with an optional `media` array.
  - each item is `{ path, content_type?, filename?, inline? }`
  - `path` must point to an existing readable file
  - `content_type` and `filename` override detected values
  - `inline: true` hints inline rendering for supported images
- Missing or unreadable media paths generate an inline warning and do not block delivery of the remaining files.
- Do **not** use this for your final conversational response.
- Edge case: if the main deliverable is a file or image, send it via IPC if needed, then still return a brief normal response confirming what was sent.

## Environment

- `PICLAW_DATA` — piclaw data directory (contains `ipc/messages/`)
- `PICLAW_CHAT_JID` — JID of the chat that triggered this invocation
