/**
 * db/chat-branches.ts – Explicit branch/session registry for web chat branches.
 *
 * Branch identity is defined entirely by the `agent_name` handle.
 * The legacy `display_name` column is dropped on first startup via migration.
 */

import { getDb } from "./connection.js";
import type { ChatBranchRecord } from "./types.js";
import { createUuid } from "../utils/ids.js";

interface ChatBranchRow {
  branch_id: string;
  chat_jid: string;
  root_chat_jid: string;
  parent_branch_id: string | null;
  agent_name: string;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
}

function toRecord(row: ChatBranchRow | null | undefined): ChatBranchRecord | null {
  if (!row) return null;
  return {
    branch_id: row.branch_id,
    chat_jid: row.chat_jid,
    root_chat_jid: row.root_chat_jid,
    parent_branch_id: row.parent_branch_id,
    agent_name: row.agent_name,
    display_name: null,
    created_at: row.created_at,
    updated_at: row.updated_at,
    archived_at: row.archived_at,
  };
}

export function normalizeBranchAgentName(value: string): string {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function deriveBaseAgentName(chatJid: string): string {
  const fromTail = normalizeBranchAgentName(chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid);
  if (fromTail) return fromTail;
  return "agent";
}

function getUniqueAgentName(baseName: string, excludeBranchId?: string | null): string {
  const normalizedBase = normalizeBranchAgentName(baseName) || "agent";
  const db = getDb();

  const row = db.prepare(
    `SELECT agent_name, branch_id
       FROM chat_branches
      WHERE archived_at IS NULL
        AND (agent_name = ? OR agent_name GLOB ?)
      ORDER BY agent_name ASC`
  ).all(normalizedBase, `${normalizedBase}-*`) as Array<{ agent_name: string; branch_id: string }>;

  const used = new Set(
    row
      .filter((entry) => !excludeBranchId || entry.branch_id !== excludeBranchId)
      .map((entry) => entry.agent_name),
  );

  if (!used.has(normalizedBase)) return normalizedBase;

  let suffix = 2;
  while (used.has(`${normalizedBase}-${suffix}`)) suffix += 1;
  return `${normalizedBase}-${suffix}`;
}

function requireUniqueAgentName(agentName: string, excludeBranchId?: string | null): string {
  const normalized = normalizeBranchAgentName(agentName);
  if (!normalized) {
    throw new Error("Agent handle must contain at least one letter or number.");
  }

  const existing = getChatBranchByAgentName(normalized);
  if (existing && existing.branch_id !== excludeBranchId) {
    throw new Error(`Agent handle is already in use: @${normalized}`);
  }

  return normalized;
}

export function getChatBranchByChatJid(chatJid: string): ChatBranchRecord | null {
  const db = getDb();
  const row = db.prepare(
    `SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at
       FROM chat_branches
      WHERE chat_jid = ?`
  ).get(chatJid) as ChatBranchRow | undefined;
  return toRecord(row);
}

export function getChatBranchByAgentName(agentName: string): ChatBranchRecord | null {
  const normalized = normalizeBranchAgentName(agentName);
  if (!normalized) return null;
  const db = getDb();
  const row = db.prepare(
    `SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at
       FROM chat_branches
      WHERE agent_name = ?
        AND archived_at IS NULL`
  ).get(normalized) as ChatBranchRow | undefined;
  return toRecord(row);
}

export function listChatBranches(
  rootChatJid?: string | null,
  options?: { includeArchived?: boolean }
): ChatBranchRecord[] {
  const db = getDb();
  const includeArchived = Boolean(options?.includeArchived);
  const rows = rootChatJid
    ? db.prepare(
      `SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at
         FROM chat_branches
        WHERE root_chat_jid = ?
          AND (? = 1 OR archived_at IS NULL)
        ORDER BY created_at ASC, chat_jid ASC`
    ).all(rootChatJid, includeArchived ? 1 : 0)
    : db.prepare(
      `SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at
         FROM chat_branches
        WHERE (? = 1 OR archived_at IS NULL)
        ORDER BY created_at ASC, chat_jid ASC`
    ).all(includeArchived ? 1 : 0);

  return (rows as ChatBranchRow[]).map((row) => toRecord(row)!).filter(Boolean);
}

export function ensureChatBranch(input: {
  chat_jid: string;
  root_chat_jid?: string | null;
  parent_branch_id?: string | null;
  agent_name?: string | null;
}): ChatBranchRecord {
  const chatJid = String(input.chat_jid || "").trim();
  if (!chatJid) throw new Error("chat_jid is required");

  const existing = getChatBranchByChatJid(chatJid);
  const now = new Date().toISOString();
  const db = getDb();

  if (existing) {
    const rootChatJid = String(input.root_chat_jid || existing.root_chat_jid || chatJid).trim() || chatJid;
    const parentBranchId = input.parent_branch_id === undefined ? existing.parent_branch_id : (input.parent_branch_id || null);
    const requestedAgentName = input.agent_name ? normalizeBranchAgentName(input.agent_name) : existing.agent_name;
    const nextAgentName = requestedAgentName !== existing.agent_name
      ? getUniqueAgentName(requestedAgentName, existing.branch_id)
      : existing.agent_name;

    if (
      rootChatJid !== existing.root_chat_jid ||
      parentBranchId !== existing.parent_branch_id ||
      nextAgentName !== existing.agent_name ||
      existing.archived_at
    ) {
      db.prepare(
        `UPDATE chat_branches
            SET root_chat_jid = ?,
                parent_branch_id = ?,
                agent_name = ?,
                updated_at = ?,
                archived_at = NULL
          WHERE branch_id = ?`
      ).run(rootChatJid, parentBranchId, nextAgentName, now, existing.branch_id);
    }

    return getChatBranchByChatJid(chatJid)!;
  }

  const rootChatJid = String(input.root_chat_jid || chatJid).trim() || chatJid;
  const branchId = createUuid("branch");
  const agentName = getUniqueAgentName(input.agent_name || deriveBaseAgentName(chatJid));
  const parentBranchId = input.parent_branch_id ? String(input.parent_branch_id).trim() : null;

  db.prepare(
    `INSERT INTO chat_branches (
      branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, created_at, updated_at, archived_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, NULL)`
  ).run(branchId, chatJid, rootChatJid, parentBranchId, agentName, now, now);

  return getChatBranchByChatJid(chatJid)!;
}

export function renameChatBranchIdentity(input: {
  chat_jid: string;
  agent_name?: string | null;
}): ChatBranchRecord {
  const chatJid = String(input.chat_jid || "").trim();
  if (!chatJid) throw new Error("chat_jid is required");

  const existing = getChatBranchByChatJid(chatJid);
  if (!existing) throw new Error(`Unknown chat branch: ${chatJid}`);

  if (input.agent_name === undefined) {
    throw new Error("Nothing to rename.");
  }

  const nextAgentName = requireUniqueAgentName(input.agent_name || "", existing.branch_id);

  if (nextAgentName === existing.agent_name) {
    return existing;
  }

  const now = new Date().toISOString();
  const db = getDb();
  db.prepare(
    `UPDATE chat_branches
        SET agent_name = ?,
            updated_at = ?
      WHERE branch_id = ?`
  ).run(nextAgentName, now, existing.branch_id);

  return getChatBranchByChatJid(chatJid)!;
}

export function archiveChatBranch(chatJid: string): ChatBranchRecord {
  const normalizedChatJid = String(chatJid || "").trim();
  if (!normalizedChatJid) throw new Error("chat_jid is required");

  const existing = getChatBranchByChatJid(normalizedChatJid);
  if (!existing) throw new Error(`Unknown chat branch: ${normalizedChatJid}`);

  const isRootChat = existing.chat_jid === existing.root_chat_jid;
  if (isRootChat && existing.chat_jid === "web:default") {
    throw new Error("Cannot archive the default chat session.");
  }
  if (isRootChat) {
    const db = getDb();
    const row = db.prepare(
      `SELECT COUNT(*) AS count
         FROM chat_branches
        WHERE root_chat_jid = ?
          AND chat_jid != ?
          AND archived_at IS NULL`
    ).get(existing.chat_jid, existing.chat_jid) as { count?: number } | undefined;
    if (Number(row?.count || 0) > 0) {
      throw new Error("Cannot archive a root chat session while it still has active branch sessions.");
    }
  }
  if (existing.archived_at) {
    return existing;
  }

  const now = new Date().toISOString();
  const db = getDb();
  db.prepare(
    `UPDATE chat_branches
        SET archived_at = ?,
            updated_at = ?
      WHERE branch_id = ?`
  ).run(now, now, existing.branch_id);

  return getChatBranchByChatJid(normalizedChatJid)!;
}

// ---------------------------------------------------------------------------
// JID rename — migrate a chat's JID across every referencing table.
// ---------------------------------------------------------------------------

export interface RenameChatJidResult {
  oldJid: string;
  newJid: string;
  branch: ChatBranchRecord;
  /** Tables that had rows updated (excludes FTS shadow tables). */
  updatedTables: string[];
}

/**
 * Rename a chat JID across *all* DB tables in a single transaction.
 *
 * The caller is responsible for:
 *   - evicting the session from the in-memory agent pool *before* calling this
 *   - renaming the session directory on disk *after* this succeeds
 *
 * Child branches whose `chat_jid` starts with `oldJid + ":branch:"` are
 * rewritten to start with `newJid + ":branch:"` so the tree stays intact.
 */
export function renameChatJid(oldJid: string, newJid: string): RenameChatJidResult {
  const old = String(oldJid || "").trim();
  const next = String(newJid || "").trim();
  if (!old) throw new Error("oldJid is required");
  if (!next) throw new Error("newJid is required");
  if (old === next) throw new Error("Old and new JID are identical.");

  // Disallow reserved characters that would break the branch-tree model.
  if (/[\s]/.test(next)) throw new Error("JID must not contain whitespace.");

  const existing = getChatBranchByChatJid(old);
  if (!existing) throw new Error(`Unknown chat: ${old}`);

  // Make sure the target JID is not already in use.
  const collision = getChatBranchByChatJid(next);
  if (collision) throw new Error(`Target JID already exists: ${next}`);

  const db = getDb();
  const now = new Date().toISOString();
  const updated: string[] = [];
  const childPrefix = old + ":branch:";
  const childNextPrefix = next + ":branch:";

  db.exec("BEGIN IMMEDIATE");
  try {
    // --- chats (PK = jid) -----------------------------------------------
    const chatsRows = db.prepare(
      `UPDATE chats SET jid = ? WHERE jid = ?`
    ).run(next, old);
    // Also update any children whose JID starts with the old prefix.
    db.prepare(
      `UPDATE chats SET jid = ? || substr(jid, ?) WHERE jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");
    if ((chatsRows as any)?.changes > 0) updated.push("chats");

    // --- messages -------------------------------------------------------
    const msgRows = db.prepare(
      `UPDATE messages SET chat_jid = ? WHERE chat_jid = ?`
    ).run(next, old);
    db.prepare(
      `UPDATE messages SET chat_jid = ? || substr(chat_jid, ?) WHERE chat_jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");
    if ((msgRows as any)?.changes > 0) updated.push("messages");

    // --- chat_cursors ---------------------------------------------------
    const cursorRows = db.prepare(
      `UPDATE chat_cursors SET chat_jid = ? WHERE chat_jid = ?`
    ).run(next, old);
    db.prepare(
      `UPDATE chat_cursors SET chat_jid = ? || substr(chat_jid, ?) WHERE chat_jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");
    if ((cursorRows as any)?.changes > 0) updated.push("chat_cursors");

    // --- chat_branches (chat_jid + root_chat_jid) ----------------------
    db.prepare(
      `UPDATE chat_branches SET chat_jid = ?, root_chat_jid = CASE WHEN root_chat_jid = ? THEN ? ELSE root_chat_jid END, updated_at = ? WHERE chat_jid = ?`
    ).run(next, old, next, now, old);
    // Children: update chat_jid prefix and root_chat_jid if it pointed to old.
    db.prepare(
      `UPDATE chat_branches
         SET chat_jid = ? || substr(chat_jid, ?),
             root_chat_jid = CASE WHEN root_chat_jid = ? THEN ? ELSE root_chat_jid END,
             updated_at = ?
       WHERE chat_jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, old, next, now, childPrefix + "*");
    updated.push("chat_branches");

    // --- token_usage ----------------------------------------------------
    db.prepare(
      `UPDATE token_usage SET chat_jid = ? WHERE chat_jid = ?`
    ).run(next, old);
    db.prepare(
      `UPDATE token_usage SET chat_jid = ? || substr(chat_jid, ?) WHERE chat_jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");
    updated.push("token_usage");

    // --- scheduled_tasks ------------------------------------------------
    db.prepare(
      `UPDATE scheduled_tasks SET chat_jid = ? WHERE chat_jid = ?`
    ).run(next, old);
    db.prepare(
      `UPDATE scheduled_tasks SET chat_jid = ? || substr(chat_jid, ?) WHERE chat_jid GLOB ?`
    ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");

    // --- config tables (ssh, proxmox, portainer) -----------------------
    for (const tbl of ["ssh_configs", "proxmox_configs", "portainer_configs"]) {
      db.prepare(
        `UPDATE ${tbl} SET chat_jid = ? WHERE chat_jid = ?`
      ).run(next, old);
      db.prepare(
        `UPDATE ${tbl} SET chat_jid = ? || substr(chat_jid, ?) WHERE chat_jid GLOB ?`
      ).run(childNextPrefix, childPrefix.length + 1, childPrefix + "*");
    }

    db.exec("COMMIT");
  } catch (err) {
    db.exec("ROLLBACK");
    throw err;
  }

  // Rebuild the FTS index for the renamed rows so full-text search stays
  // accurate. The content-sync FTS5 table reads through to `messages`, so
  // after the UPDATE above the shadow table chat_jid column is stale.
  // A targeted rebuild is safest:
  try {
    db.exec(`INSERT INTO messages_fts(messages_fts) VALUES ('rebuild')`);
  } catch (_ftsErr) {
    // Non-fatal: search may lag until the next natural rebuild.
    // eslint-disable-next-line no-console
    console.debug("[chat-branches] FTS rebuild after rename failed — search may lag", _ftsErr);
  }

  return {
    oldJid: old,
    newJid: next,
    branch: getChatBranchByChatJid(next)!,
    updatedTables: updated,
  };
}

export function restoreChatBranchIdentity(input: {
  chat_jid: string;
  agent_name?: string | null;
}): ChatBranchRecord {
  const chatJid = String(input.chat_jid || "").trim();
  if (!chatJid) throw new Error("chat_jid is required");

  const existing = getChatBranchByChatJid(chatJid);
  if (!existing) throw new Error(`Unknown chat branch: ${chatJid}`);

  const requestedAgent = input.agent_name === undefined
    ? existing.agent_name
    : normalizeBranchAgentName(input.agent_name || "");
  const nextAgentName = getUniqueAgentName(requestedAgent || existing.agent_name, existing.branch_id);

  if (!existing.archived_at && nextAgentName === existing.agent_name) {
    return existing;
  }

  const now = new Date().toISOString();
  const db = getDb();
  db.prepare(
    `UPDATE chat_branches
        SET agent_name = ?,
            archived_at = NULL,
            updated_at = ?
      WHERE branch_id = ?`
  ).run(nextAgentName, now, existing.branch_id);

  return getChatBranchByChatJid(chatJid)!;
}
