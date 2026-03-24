import { expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import { getTestWorkspace } from "../../helpers.js";

test("buildAvatarResponse keeps serving the cached avatar when a new source cannot be loaded", async () => {
  const ws = getTestWorkspace();
  const avatarsDir = join(ws.workspace, ".piclaw", "avatars");
  mkdirSync(avatarsDir, { recursive: true });

  const png = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wn1s3sAAAAASUVORK5CYII=",
    "base64",
  );
  const cachedFile = join(avatarsDir, "agent.png");
  writeFileSync(cachedFile, png);
  writeFileSync(
    join(avatarsDir, "agent.json"),
    `${JSON.stringify({
      source: join(ws.workspace, "avatars", "agent.png"),
      file: cachedFile,
      contentType: "image/png",
      updatedAt: "2026-03-24T00:00:00.000Z",
    }, null, 2)}\n`,
    "utf-8",
  );

  const avatarService = await import("../../../src/channels/web/avatar-service.js");

  const response = await avatarService.buildAvatarResponse(
    "agent",
    join(ws.workspace, "missing-avatar.png"),
    new Request("https://example.com/avatar/agent"),
  );

  expect(response).toBeTruthy();
  expect(response?.status).toBe(200);
  expect(response?.headers.get("Content-Type")).toBe("image/png");
  expect(response?.headers.get("Cache-Control")).toBe("no-store");
  const body = response ? new Uint8Array(await response.arrayBuffer()) : new Uint8Array();
  expect(body.length).toBeGreaterThan(0);
});
