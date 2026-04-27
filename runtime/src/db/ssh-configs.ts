import type { SshConfig } from "../types.js";
import { getDb } from "./connection.js";

type StrictMode = SshConfig["strict_host_key_checking"];

function normalizeStrictMode(value: string | null | undefined): StrictMode {
  return value === "accept-new" || value === "no" ? value : "yes";
}

export function getSshConfig(chatJid: string): SshConfig | null {
  const db = getDb();
  const row = db.prepare(
    `SELECT chat_jid, ssh_target, ssh_port, private_key_keychain, known_hosts_keychain,
            strict_host_key_checking, created_at, updated_at
       FROM ssh_configs
      WHERE chat_jid = ?`
  ).get(chatJid) as SshConfig | undefined;
  if (!row) return null;
  return {
    ...row,
    ssh_port: Number.isFinite(row.ssh_port) ? row.ssh_port : 22,
    known_hosts_keychain: row.known_hosts_keychain ?? null,
    strict_host_key_checking: normalizeStrictMode(row.strict_host_key_checking),
  };
}

export function upsertSshConfig(config: Omit<SshConfig, "created_at" | "updated_at" | "last_used_at">): SshConfig {
  const db = getDb();
  const now = new Date().toISOString();
  const strictMode = normalizeStrictMode(config.strict_host_key_checking);
  db.prepare(
    `INSERT INTO ssh_configs (
        chat_jid, ssh_target, ssh_port, private_key_keychain, known_hosts_keychain,
        strict_host_key_checking, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(chat_jid) DO UPDATE SET
        ssh_target = excluded.ssh_target,
        ssh_port = excluded.ssh_port,
        private_key_keychain = excluded.private_key_keychain,
        known_hosts_keychain = excluded.known_hosts_keychain,
        strict_host_key_checking = excluded.strict_host_key_checking,
        updated_at = excluded.updated_at`
  ).run(
    config.chat_jid,
    config.ssh_target,
    config.ssh_port,
    config.private_key_keychain,
    config.known_hosts_keychain,
    strictMode,
    now,
    now,
  );
  return getSshConfig(config.chat_jid)!;
}

export function deleteSshConfig(chatJid: string): boolean {
  const db = getDb();
  const result = db.prepare("DELETE FROM ssh_configs WHERE chat_jid = ?").run(chatJid);
  return result.changes > 0;
}

export function listSshConfigs(): SshConfig[] {
  const db = getDb();
  const rows = db.prepare(
    `SELECT chat_jid, ssh_target, ssh_port, private_key_keychain, known_hosts_keychain,
            strict_host_key_checking, created_at, updated_at
       FROM ssh_configs
      ORDER BY updated_at DESC, chat_jid ASC`
  ).all() as SshConfig[];
  return rows.map((row) => ({
    ...row,
    ssh_port: Number.isFinite(row.ssh_port) ? row.ssh_port : 22,
    known_hosts_keychain: row.known_hosts_keychain ?? null,
    strict_host_key_checking: normalizeStrictMode(row.strict_host_key_checking),
  }));
}
