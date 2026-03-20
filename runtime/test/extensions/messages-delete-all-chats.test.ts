import { afterEach, expect, test } from "bun:test";
import { createTempWorkspace, importFresh, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;
let cleanupWorkspace: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
  cleanupWorkspace?.();
  cleanupWorkspace = null;
});

test("messages delete supports chat_jid=all across multiple chats", async () => {
  const ws = createTempWorkspace("piclaw-messages-delete-all-");
  cleanupWorkspace = ws.cleanup;
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
  const messages = await importFresh<typeof import("../src/extensions/messages-crud.js")>("../src/extensions/messages-crud.js");

  db.initDatabase();
  db.storeChatMetadata("web:default", new Date().toISOString(), "Default");
  db.storeChatMetadata("web:branch", new Date().toISOString(), "Branch");

  const defaultRowId = db.storeMessage({
    id: `msg-${Math.random()}`,
    chat_jid: "web:default",
    sender: "user",
    sender_name: "User",
    content: "delete me from default",
    timestamp: new Date().toISOString(),
    is_from_me: false,
    is_bot_message: false,
  });

  const branchRowId = db.storeMessage({
    id: `msg-${Math.random()}`,
    chat_jid: "web:branch",
    sender: "user",
    sender_name: "User",
    content: "delete me from branch",
    timestamp: new Date(Date.now() + 1).toISOString(),
    is_from_me: false,
    is_bot_message: false,
  });

  const result = messages.runMessagesTool({
    action: "delete",
    chat_jid: "all",
    row_ids: [defaultRowId, branchRowId],
    dry_run: false,
    force: true,
  });

  expect(result.details?.count).toBe(2);
  expect(result.details?.deleted_row_ids).toEqual([defaultRowId, branchRowId].sort((a, b) => a - b));
  expect(db.getMessageByRowId("web:default", defaultRowId)).toBeUndefined();
  expect(db.getMessageByRowId("web:branch", branchRowId)).toBeUndefined();
});
