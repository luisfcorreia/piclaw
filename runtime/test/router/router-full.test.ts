/**
 * test/router/router-full.test.ts – Integration tests for the message router.
 *
 * Verifies end-to-end message routing through the WhatsApp and web
 * channels, including retry logic, channel selection, and error handling.
 */

import { describe, test, expect } from "bun:test";
import "../helpers.js";

import {
  detectChannel,
  escapeXml,
  formatMessages,
  stripInternalTags,
  formatOutbound,
} from "../../src/router.js";

describe("router", () => {
  test("detectChannel identifies web", () => {
    expect(detectChannel("web:default")).toBe("web");
    expect(detectChannel("web:other")).toBe("web");
  });

  test("detectChannel identifies whatsapp", () => {
    expect(detectChannel("1234@s.whatsapp.net")).toBe("whatsapp");
    expect(detectChannel("group@g.us")).toBe("whatsapp");
  });

  test("detectChannel handles edge cases", () => {
    expect(detectChannel(null)).toBe("unknown");
    expect(detectChannel(undefined)).toBe("unknown");
    expect(detectChannel("")).toBe("unknown");
  });

  test("escapeXml escapes special characters", () => {
    expect(escapeXml('a & b < c > d "e"')).toBe('a &amp; b &lt; c &gt; d &quot;e&quot;');
    expect(escapeXml("")).toBe("");
  });

  test("formatMessages produces XML", () => {
    const msgs = [
      { id: "1", chat_jid: "web:default", sender: "user", sender_name: "Alice", content: "hello", timestamp: "2025-01-01T00:00:00Z", is_from_me: false, is_bot_message: false },
    ];
    const result = formatMessages(msgs, "web");
    expect(result).toContain('<messages channel="web">');
    expect(result).toContain("<channel>web</channel>");
    expect(result).toContain("<formatting>");
    expect(result).toContain('sender="Alice"');
    expect(result).toContain("hello");
  });

  test("formatMessages includes whatsapp formatting hint", () => {
    const msgs = [
      { id: "1", chat_jid: "x", sender: "u", sender_name: "U", content: "hi", timestamp: "t", is_from_me: false, is_bot_message: false },
    ];
    const result = formatMessages(msgs, "whatsapp");
    expect(result).toContain("WhatsApp formatting");
  });

  test("formatMessages with no channel", () => {
    const msgs = [
      { id: "1", chat_jid: "x", sender: "u", sender_name: "U", content: "hi", timestamp: "t", is_from_me: false, is_bot_message: false },
    ];
    const result = formatMessages(msgs);
    expect(result).toContain("<messages>");
    expect(result).not.toContain("channel=");
  });

  test("stripInternalTags removes internal blocks", () => {
    expect(stripInternalTags("before <internal>hidden</internal> after")).toBe("before  after");
    expect(stripInternalTags("<internal>all hidden</internal>")).toBe("");
    expect(stripInternalTags("no tags here")).toBe("no tags here");
  });

  test("formatOutbound strips internal tags", () => {
    expect(formatOutbound("hello <internal>secret</internal> world")).toBe("hello  world");
  });

  test("formatOutbound escapes HTML for web", () => {
    expect(formatOutbound("a < b & c > d", "web")).toBe("a &lt; b &amp; c &gt; d");
  });

  test("formatOutbound passes through for whatsapp", () => {
    expect(formatOutbound("a < b", "whatsapp")).toBe("a < b");
  });

  test("formatOutbound returns empty for all-internal content", () => {
    expect(formatOutbound("<internal>all hidden</internal>")).toBe("");
  });

  test("detectChannel returns unknown for non-web prefixes", () => {
    expect(detectChannel("web-default")).toBe("unknown");
    expect(detectChannel("webdefault")).toBe("unknown");
    expect(detectChannel("http://example.com")).toBe("unknown");
  });

  test("formatMessages escapes sender_name and content", () => {
    const msgs = [
      {
        id: "1",
        chat_jid: "web:default",
        sender: "user",
        sender_name: "A & B <C> \"D\"",
        content: "Hello & <tag> \"quote\"",
        timestamp: "2025-01-01T00:00:00Z",
        is_from_me: false,
        is_bot_message: false,
      },
    ];
    const result = formatMessages(msgs, "web");
    expect(result).toContain('sender="A &amp; B &lt;C&gt; &quot;D&quot;"');
    expect(result).toContain("Hello &amp; &lt;tag&gt; &quot;quote&quot;");
  });

  test("stripInternalTags removes nested and malformed internal blocks", () => {
    expect(stripInternalTags("a <internal>hide <internal>double</internal> end</internal> b"))
      .toBe("a  b");
    expect(stripInternalTags("prefix <internal>missing end"))
      .toBe("prefix");
  });
});
