/**
 * db/chat-branches.ts – Explicit branch/session registry for web chat branches.
 *
 * This is the first C-shaped slice for parallel web chats: branch identity and
 * naming become first-class DB records instead of being derived ad hoc from
 * chat_jid/session name at render time.
 */
import { getDb } from "./connection.js";
import { createUuid } from "../utils/ids.js";
function toRecord(row) {
    if (!row)
        return null;
    return {
        branch_id: row.branch_id,
        chat_jid: row.chat_jid,
        root_chat_jid: row.root_chat_jid,
        parent_branch_id: row.parent_branch_id,
        agent_name: row.agent_name,
        display_name: row.display_name,
        created_at: row.created_at,
        updated_at: row.updated_at,
        archived_at: row.archived_at,
    };
}
export function normalizeBranchAgentName(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}
function deriveBaseAgentName(chatJid, preferred) {
    const preferredName = normalizeBranchAgentName(preferred || "");
    if (preferredName)
        return preferredName;
    const fromTail = normalizeBranchAgentName(chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid);
    if (fromTail)
        return fromTail;
    return "agent";
}
function getUniqueAgentName(baseName, excludeBranchId) {
    const normalizedBase = normalizeBranchAgentName(baseName) || "agent";
    const db = getDb();
    const row = db.prepare(`SELECT agent_name, branch_id
       FROM chat_branches
      WHERE archived_at IS NULL
        AND (agent_name = ? OR agent_name GLOB ?)
      ORDER BY agent_name ASC`).all(normalizedBase, `${normalizedBase}-*`);
    const used = new Set(row
        .filter((entry) => !excludeBranchId || entry.branch_id !== excludeBranchId)
        .map((entry) => entry.agent_name));
    if (!used.has(normalizedBase))
        return normalizedBase;
    let suffix = 2;
    while (used.has(`${normalizedBase}-${suffix}`))
        suffix += 1;
    return `${normalizedBase}-${suffix}`;
}
export function getChatBranchByChatJid(chatJid) {
    const db = getDb();
    const row = db.prepare(`SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, display_name, created_at, updated_at, archived_at
       FROM chat_branches
      WHERE chat_jid = ?`).get(chatJid);
    return toRecord(row);
}
export function getChatBranchByAgentName(agentName) {
    const normalized = normalizeBranchAgentName(agentName);
    if (!normalized)
        return null;
    const db = getDb();
    const row = db.prepare(`SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, display_name, created_at, updated_at, archived_at
       FROM chat_branches
      WHERE agent_name = ?
        AND archived_at IS NULL`).get(normalized);
    return toRecord(row);
}
export function listChatBranches(rootChatJid) {
    const db = getDb();
    const rows = rootChatJid
        ? db.prepare(`SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, display_name, created_at, updated_at, archived_at
         FROM chat_branches
        WHERE archived_at IS NULL AND root_chat_jid = ?
        ORDER BY created_at ASC, chat_jid ASC`).all(rootChatJid)
        : db.prepare(`SELECT branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, display_name, created_at, updated_at, archived_at
         FROM chat_branches
        WHERE archived_at IS NULL
        ORDER BY created_at ASC, chat_jid ASC`).all();
    return rows.map((row) => toRecord(row)).filter(Boolean);
}
export function ensureChatBranch(input) {
    const chatJid = String(input.chat_jid || "").trim();
    if (!chatJid)
        throw new Error("chat_jid is required");
    const existing = getChatBranchByChatJid(chatJid);
    const now = new Date().toISOString();
    const db = getDb();
    if (existing) {
        const rootChatJid = String(input.root_chat_jid || existing.root_chat_jid || chatJid).trim() || chatJid;
        const parentBranchId = input.parent_branch_id === undefined ? existing.parent_branch_id : (input.parent_branch_id || null);
        const displayName = input.display_name === undefined
            ? existing.display_name
            : (typeof input.display_name === "string" && input.display_name.trim() ? input.display_name.trim() : null);
        const requestedAgentName = input.agent_name ? normalizeBranchAgentName(input.agent_name) : existing.agent_name;
        const nextAgentName = requestedAgentName !== existing.agent_name
            ? getUniqueAgentName(requestedAgentName, existing.branch_id)
            : existing.agent_name;
        if (rootChatJid !== existing.root_chat_jid ||
            parentBranchId !== existing.parent_branch_id ||
            displayName !== existing.display_name ||
            nextAgentName !== existing.agent_name ||
            existing.archived_at) {
            db.prepare(`UPDATE chat_branches
            SET root_chat_jid = ?,
                parent_branch_id = ?,
                agent_name = ?,
                display_name = ?,
                updated_at = ?,
                archived_at = NULL
          WHERE branch_id = ?`).run(rootChatJid, parentBranchId, nextAgentName, displayName, now, existing.branch_id);
        }
        return getChatBranchByChatJid(chatJid);
    }
    const displayName = typeof input.display_name === "string" && input.display_name.trim() ? input.display_name.trim() : null;
    const rootChatJid = String(input.root_chat_jid || chatJid).trim() || chatJid;
    const branchId = createUuid("branch");
    const agentName = getUniqueAgentName(input.agent_name || deriveBaseAgentName(chatJid, displayName));
    const parentBranchId = input.parent_branch_id ? String(input.parent_branch_id).trim() : null;
    db.prepare(`INSERT INTO chat_branches (
      branch_id, chat_jid, root_chat_jid, parent_branch_id, agent_name, display_name, created_at, updated_at, archived_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`).run(branchId, chatJid, rootChatJid, parentBranchId, agentName, displayName, now, now);
    return getChatBranchByChatJid(chatJid);
}
