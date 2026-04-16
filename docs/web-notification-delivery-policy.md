# Web notification delivery policy

PiClaw uses a per-**device**, per-**chat** delivery coordinator to decide whether a finished agent reply should surface as a local in-page notification or as server-side Web Push.

## Rule

For a given **device + chat_jid** pair:

- **Visible live client** → **no notification** on that device for that chat
- **Hidden-but-live client(s)** → **local notification only** on that device for that chat
- **No live client** → **Web Push only** on that device for that chat

## Why this is chat-scoped instead of device-scoped

PiClaw can have multiple chats running at once. A user may be actively viewing one thread while other threads continue working in the background.

Because of that, notification routing is based on the specific `chat_jid` that produced the reply:

- If you are actively viewing chat **A**, replies in chat **A** should stay quiet on that device.
- If chat **B** finishes while no live client for **B** exists on that device, PiClaw should still notify you for **B** even if chat **A** is currently visible.

This ensures non-active threads still notify when they complete.

## Local notification election

Multiple hidden tabs or windows on the same device can still be live for the same chat. To avoid duplicate local notifications, the client elects exactly one hidden tab/window per **device + chat** to show the local notification.

If any tab/window for that same chat is visible, hidden tabs stay silent.

## Web Push suppression

Each Web Push subscription is associated with a stable device id. Before sending a reply notification, the server checks whether that device has a recent live client for the same `chat_jid`.

- live same-chat client present → suppress Web Push for that device
- no live same-chat client → allow Web Push for that device

This avoids `[Local]` + `[Web Push]` duplicates for the same chat on the same device while still allowing other chats to notify.

## Presence model

The client publishes lightweight presence updates containing:

- `device_id`
- `client_id`
- `chat_jid`
- `visibility_state`
- `has_focus`

Presence is refreshed periodically and expires quickly if the page disappears without clean shutdown.

## Practical examples

### Phone visible on chat A, chat B finishes

- chat A is visible on the phone
- no live phone client exists for chat B
- result: **Web Push may still fire for chat B**

### Hidden laptop tab on chat A, phone swiped away, chat A finishes

- laptop has a hidden live client for chat A
- phone has no live client for chat A
- result:
  - **laptop:** local notification only
  - **phone:** Web Push only

### Two hidden tabs for chat A on the same laptop

- both are live, neither is visible
- result: exactly **one** hidden tab shows the local notification
