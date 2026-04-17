/**
 * extensions/remote-pair.ts – /pair and /unpair slash commands for cross-instance IPC.
 *
 * Only registers when PICLAW_REMOTE_INTEROP_ENABLED is set. Drives the full
 * pairing handshake in the background and reports the result to the chat.
 *
 * Commands:
 *   /pair request <url>    – initiate pairing with a remote piclaw instance
 *   /pair list             – list known remote peers
 *   /unpair <id|fp>        – revoke a pairing locally and notify the remote peer
 */

import { randomUUID } from "crypto";
import type { ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";
import { getDb } from "../db/connection.js";
import {
  getRemotePeer,
  getRemotePeerByFingerprint,
  getPairRequestById,
  getPendingPairRequest,
  updatePairRequestStatus,
  updateRemotePeer,
  upsertRemotePeer,
  createOutboundPairRequest,
  getOutboundPairRequestById,
  updateOutboundPairRequestStatus,
  type RemotePeerRecord,
  type RemotePairRequestRecord,
  type RemotePeerProfile,
  type RemotePeerMode,
} from "../db/remote-interop.js";
import { loadOrCreateIdentity, deriveFingerprint } from "../remote/identity.js";
import { buildCanonicalRequest, hashBody, signRequest } from "../remote/signature.js";
import { verifyCallbackProof } from "../remote/service-security.js";
import { WEB_SERVER_CONFIG } from "../core/config.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("extensions.remote-pair");

function getAllRemotePeers(): RemotePeerRecord[] {
  const db = getDb();
  return db
    .prepare(
      `SELECT instance_id, public_key, display_name, status, mode, profile, trust_epoch,
              created_at, updated_at, last_seen_at, blocked_reason, base_url
       FROM remote_peers ORDER BY created_at DESC`
    )
    .all() as RemotePeerRecord[];
}

function getMyBaseUrl(): string {
  const env = (process.env.PICLAW_WEB_EXTERNAL_URL || "").trim();
  if (env) return env.replace(/\/$/, "");
  return `http://localhost:${WEB_SERVER_CONFIG.port}`;
}

/** Build signed headers for an authenticated remote request. */
export function buildSignedRequestHeaders(
  identity: ReturnType<typeof loadOrCreateIdentity>,
  path: string,
  bodyBytes: Uint8Array,
  trustEpoch: number = 1
): Record<string, string> {
  const timestamp = new Date().toISOString();
  const nonce = randomUUID();
  const epochStr = String(trustEpoch);
  const canonical = buildCanonicalRequest({
    method: "POST",
    pathWithQuery: path,
    contentType: "application/json",
    bodyHash: hashBody(bodyBytes),
    timestamp,
    nonce,
    instanceId: identity.instance_id,
    sigVersion: "v1",
    trustEpoch: epochStr,
  });
  const signature = signRequest(identity, canonical);
  return {
    "Content-Type": "application/json",
    "X-Instance-Id": identity.instance_id,
    "X-Timestamp": timestamp,
    "X-Nonce": nonce,
    "X-Sig-Version": "v1",
    "X-Signature": signature,
    "X-Trust-Epoch": epochStr,
  };
}

export async function runPairFlow(targetBaseUrl: string, pi: ExtensionAPI): Promise<void> {
  const base = targetBaseUrl.replace(/\/$/, "");
  const identity = loadOrCreateIdentity();
  const callbackUrl = `${getMyBaseUrl()}/api/remote/pair-callback`;
  const nonce = randomUUID();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

  // Step A – send pair-request to receiver.
  log.info("Sending pair-request", { operation: "remote-pair.request", target: base });
  let pairRes: Response;
  try {
    pairRes = await fetch(`${base}/api/remote/pair-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instance_id: identity.instance_id,
        public_key: identity.public_key,
        display_name: identity.instance_name || "piclaw",
        callback_url: callbackUrl,
        protocol_version: "1",
        nonce,
        expires_at: expiresAt,
      }),
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    pi.sendMessage({ customType: "remote-pair", content: `Pairing failed: could not reach ${base} — ${msg}`, display: true });
    return;
  }

  if (!pairRes.ok) {
    let detail = "";
    try {
      const b = await pairRes.json() as Record<string, unknown>;
      detail = typeof b.error === "string" ? b.error : "";
    } catch { /* ignore */ }
    pi.sendMessage({
      customType: "remote-pair",
      content: `Pairing failed: pair-request rejected (${pairRes.status})${detail ? " — " + detail : ""}`,
      display: true,
    });
    return;
  }

  let pairBody: Record<string, unknown>;
  try {
    pairBody = await pairRes.json() as Record<string, unknown>;
  } catch {
    pi.sendMessage({ customType: "remote-pair", content: "Pairing failed: invalid response from pair-request.", display: true });
    return;
  }

  const requestId = typeof pairBody.request_id === "string" ? pairBody.request_id : "";
  const receiverInstanceId = typeof pairBody.receiver_instance_id === "string" ? pairBody.receiver_instance_id : "";
  const receiverPublicKey = typeof pairBody.receiver_public_key === "string" ? pairBody.receiver_public_key : "";
  const receiverFingerprint = typeof pairBody.receiver_fingerprint === "string" ? pairBody.receiver_fingerprint : "";

  if (!requestId || !receiverInstanceId || !receiverPublicKey) {
    pi.sendMessage({ customType: "remote-pair", content: "Pairing failed: incomplete response from pair-request.", display: true });
    return;
  }

  // Step B – store pending outbound record so we can complete pairing when the
  // receiver's operator accepts and calls back with pair-confirm.
  createOutboundPairRequest({
    id: requestId,
    instance_id: receiverInstanceId,
    public_key: receiverPublicKey,
    fingerprint: receiverFingerprint || deriveFingerprint(receiverInstanceId),
    base_url: base,
    nonce,
    status: "pending",
    expires_at: expiresAt,
    created_at: new Date().toISOString(),
  });

  log.info("Pair request sent; waiting for receiver operator to accept", {
    operation: "remote-pair.request",
    request_id: requestId,
    receiver: receiverInstanceId,
  });

  const fpLabel = receiverFingerprint ? ` (fingerprint: \`${receiverFingerprint}\`)` : "";
  pi.sendMessage({
    customType: "remote-pair",
    content:
      `Pair request sent to **${base}**${fpLabel}.\n\n` +
      `Waiting for their operator to run \`/pair accept\`. ` +
      `You will be notified here when pairing completes.\n\n` +
      `Request ID: \`${requestId}\``,
    display: true,
  });
}

export async function runUnpairFlow(idOrFingerprint: string, pi: ExtensionAPI): Promise<void> {
  // 1. Resolve peer
  let peer = getRemotePeer(idOrFingerprint);
  if (!peer) {
    peer = getRemotePeerByFingerprint(idOrFingerprint);
  }
  if (!peer) {
    pi.sendMessage({ customType: "remote-pair", content: `Unpair failed: no peer found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }

  const instanceId = peer.instance_id;
  let remoteNotified = false;

  // 2. Best-effort remote revoke
  if (peer.base_url && peer.status === "paired") {
    try {
      const identity = loadOrCreateIdentity();
      const revokeBodyText = JSON.stringify({ peer_instance_id: instanceId });
      const revokeBodyBytes = new TextEncoder().encode(revokeBodyText);
      const revokeHeaders = buildSignedRequestHeaders(identity, "/api/remote/revoke", revokeBodyBytes);
      const revokeRes = await fetch(`${peer.base_url}/api/remote/revoke`, {
        method: "POST",
        headers: revokeHeaders,
        body: revokeBodyText,
      });
      remoteNotified = revokeRes.ok;
      if (!revokeRes.ok) {
        log.warn("Remote revoke returned non-OK status", { operation: "remote-pair.unpair", status: revokeRes.status });
      }
    } catch (err) {
      log.warn("Remote revoke failed (best-effort)", { operation: "remote-pair.unpair", err });
    }
  }

  // 3. Local update
  const now = new Date().toISOString();
  updateRemotePeer(instanceId, { status: "revoked", updated_at: now });

  // 4. Report
  const fp = `${instanceId.slice(0, 6)}-${instanceId.slice(6, 12)}-${instanceId.slice(12, 18)}`;
  const notifyNote = peer.base_url
    ? (remoteNotified ? " Remote peer was notified." : " Could not notify remote peer (best-effort).")
    : " No base_url stored; remote peer was not notified.";
  pi.sendMessage({
    customType: "remote-pair",
    content: `Revoked pairing with \`${fp}\`.${notifyNote}`,
    display: true,
  });
}

function handlePairList(pi: ExtensionAPI): void {
  let peers: RemotePeerRecord[];
  try {
    peers = getAllRemotePeers();
  } catch {
    peers = [];
  }
  if (!peers.length) {
    pi.sendMessage({ customType: "remote-pair", content: "No remote peers.", display: true });
    return;
  }
  const lines = peers.map((p) => {
    const name = p.display_name ? `${p.display_name} ` : "";
    const fp = `${p.instance_id.slice(0, 6)}-${p.instance_id.slice(6, 12)}-${p.instance_id.slice(12, 18)}`;
    return `- ${name}\`${fp}\` — ${p.status} / ${p.mode} / ${p.profile}`;
  });
  pi.sendMessage({ customType: "remote-pair", content: `**Remote peers:**\n${lines.join("\n")}`, display: true });
}

// ─── Helper ──────────────────────────────────────────────────────────────────

/**
 * Resolve a user-supplied id/fingerprint to a RemotePairRequestRecord.
 * Tries in order: direct request ID, instance_id lookup, fingerprint → peer → instance_id.
 */
function resolveIdOrFingerprintToPairRequest(id: string): RemotePairRequestRecord | null {
  const byId = getPairRequestById(id);
  if (byId) return byId;
  const byInstanceId = getPendingPairRequest(id);
  if (byInstanceId) return byInstanceId;
  const peer = getRemotePeerByFingerprint(id);
  if (peer) {
    const byPeerInstanceId = getPendingPairRequest(peer.instance_id);
    if (byPeerInstanceId) return byPeerInstanceId;
  }
  return null;
}

function formatFingerprint(instanceId: string): string {
  return `${instanceId.slice(0, 6)}-${instanceId.slice(6, 12)}-${instanceId.slice(12, 18)}`;
}

// ─── Receiver-side pair management ───────────────────────────────────────────

export async function runAcceptPairFlow(idOrFingerprint: string, pi: ExtensionAPI): Promise<void> {
  const req = resolveIdOrFingerprintToPairRequest(idOrFingerprint);
  if (!req) {
    pi.sendMessage({ customType: "remote-pair", content: `Accept failed: no pending pair request found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }
  if (new Date(req.expires_at) < new Date()) {
    pi.sendMessage({ customType: "remote-pair", content: `Accept failed: pair request from \`${req.instance_id}\` has expired.`, display: true });
    return;
  }
  if (req.status !== "pending") {
    pi.sendMessage({ customType: "remote-pair", content: `Accept failed: pair request is already \`${req.status}\`.`, display: true });
    return;
  }

  const identity = loadOrCreateIdentity();

  // Step C – URL ownership proof: call the initiator's pair-callback and verify
  // they signed the challenge with the private key matching public_key from pair-request.
  const initiatorPseudoPeer = {
    instance_id: req.instance_id,
    public_key: req.public_key,
    display_name: req.display_name,
    status: "pending" as const,
    mode: "mediated" as const,
    profile: "restricted" as const,
    trust_epoch: 1,
    created_at: req.created_at,
    updated_at: req.created_at,
    last_seen_at: null,
    blocked_reason: null,
    base_url: null,
  };

  pi.sendMessage({ customType: "remote-pair", content: `Verifying URL ownership for \`${formatFingerprint(req.instance_id)}\`…`, display: true });

  const callbackProof = await verifyCallbackProof(
    { id: req.id, nonce: req.nonce, callback_url: req.callback_url },
    initiatorPseudoPeer,
    identity
  );

  if (!callbackProof.ok) {
    updatePairRequestStatus(req.id, "verification_failed");
    pi.sendMessage({
      customType: "remote-pair",
      content: `Accept failed: URL ownership verification failed — ${callbackProof.error}`,
      display: true,
    });
    return;
  }

  let base_url: string | null = null;
  if (req.callback_url) {
    try {
      const u = new URL(req.callback_url);
      base_url = `${u.protocol}//${u.host}`;
    } catch { /* ignore malformed URL */ }
  }

  // Step D – mark initiator as paired locally on the receiver side.
  const now = new Date().toISOString();
  updatePairRequestStatus(req.id, "accepted");
  upsertRemotePeer({
    instance_id: req.instance_id,
    public_key: req.public_key,
    display_name: req.display_name,
    status: "paired",
    mode: "mediated",
    profile: "restricted",
    trust_epoch: 1,
    created_at: now,
    updated_at: now,
    last_seen_at: now,
    blocked_reason: null,
    base_url,
  });

  // Step E – notify the initiator by calling their pair-confirm endpoint (signed).
  let initiatorNotified = false;
  if (base_url) {
    try {
      const confirmBody = JSON.stringify({
        request_id: req.id,
        trust_epoch: 1,
        receiver_display_name: identity.instance_name || null,
      });
      const confirmBodyBytes = new TextEncoder().encode(confirmBody);
      const confirmHeaders = buildSignedRequestHeaders(identity, "/api/remote/pair-confirm", confirmBodyBytes);
      const confirmRes = await fetch(`${base_url}/api/remote/pair-confirm`, {
        method: "POST",
        headers: confirmHeaders,
        body: confirmBody,
      });
      initiatorNotified = confirmRes.ok;
      if (!confirmRes.ok) {
        log.warn("pair-confirm to initiator returned non-OK status", {
          operation: "remote-pair.accept",
          status: confirmRes.status,
        });
      }
    } catch (err) {
      log.warn("pair-confirm to initiator failed (best-effort)", { operation: "remote-pair.accept", err });
    }
  }

  const fp = formatFingerprint(req.instance_id);
  const nameLabel = req.display_name ? ` (${req.display_name})` : "";
  const origin = base_url ?? "unknown";
  const notifyNote = base_url
    ? (initiatorNotified ? " Initiator was notified." : " Could not notify initiator — they can still detect the pairing via `/pair list`.")
    : " No callback URL stored; initiator was not notified.";
  const details = [
    `- **Request ID:** \`${req.id}\``,
    `- **Instance ID:** \`${req.instance_id}\``,
    `- **Fingerprint:** \`${fp}\``,
    req.display_name ? `- **Display Name:** ${req.display_name}` : null,
    `- **Origin:** \`${origin}\``,
  ].filter(Boolean).join("\n");
  pi.sendMessage({
    customType: "remote-pair",
    content: `Accepted pairing with \`${fp}\`${nameLabel}.${notifyNote}\n\n${details}`,
    display: true,
  });
}

export async function runDenyPairFlow(idOrFingerprint: string, pi: ExtensionAPI): Promise<void> {
  const req = resolveIdOrFingerprintToPairRequest(idOrFingerprint);
  if (!req) {
    pi.sendMessage({ customType: "remote-pair", content: `Deny failed: no pending pair request found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }
  if (req.status !== "pending") {
    pi.sendMessage({ customType: "remote-pair", content: `Deny failed: pair request is already \`${req.status}\`.`, display: true });
    return;
  }
  updatePairRequestStatus(req.id, "denied");
  const fp = formatFingerprint(req.instance_id);
  pi.sendMessage({ customType: "remote-pair", content: `Denied pair request from \`${fp}\`.`, display: true });
}

export async function runBlockPairFlow(idOrFingerprint: string, pi: ExtensionAPI): Promise<void> {
  const req = resolveIdOrFingerprintToPairRequest(idOrFingerprint);
  let instanceId: string;
  let publicKey: string;
  let displayName: string | null = null;

  if (req) {
    if (req.status !== "pending") {
      pi.sendMessage({ customType: "remote-pair", content: `Block failed: pair request is already \`${req.status}\`.`, display: true });
      return;
    }
    updatePairRequestStatus(req.id, "blocked");
    instanceId = req.instance_id;
    publicKey = req.public_key;
    displayName = req.display_name;
  } else {
    let peer = getRemotePeer(idOrFingerprint);
    if (!peer) peer = getRemotePeerByFingerprint(idOrFingerprint);
    if (!peer) {
      pi.sendMessage({ customType: "remote-pair", content: `Block failed: no pair request or peer found for \`${idOrFingerprint}\`.`, display: true });
      return;
    }
    instanceId = peer.instance_id;
    publicKey = peer.public_key;
    displayName = peer.display_name;
  }

  const now = new Date().toISOString();
  const existingPeer = getRemotePeer(instanceId);
  if (existingPeer) {
    updateRemotePeer(instanceId, { status: "blocked", blocked_reason: "operator-block", updated_at: now });
  } else {
    upsertRemotePeer({
      instance_id: instanceId,
      public_key: publicKey,
      display_name: displayName,
      status: "blocked",
      mode: "mediated",
      profile: "restricted",
      trust_epoch: 0,
      created_at: now,
      updated_at: now,
      last_seen_at: null,
      blocked_reason: "operator-block",
      base_url: null,
    });
  }

  const fp = formatFingerprint(instanceId);
  pi.sendMessage({ customType: "remote-pair", content: `Blocked \`${fp}\`. Future pair requests from this instance will be suppressed.`, display: true });
}

// ─── Per-peer configuration ───────────────────────────────────────────────────

export async function runSetPermissionsFlow(idOrFingerprint: string, profile: string, pi: ExtensionAPI): Promise<void> {
  const validProfiles: RemotePeerProfile[] = ["read-only", "restricted", "full", "custom"];
  if (!validProfiles.includes(profile as RemotePeerProfile)) {
    pi.sendMessage({ customType: "remote-pair", content: `Invalid profile \`${profile}\`. Valid values: ${validProfiles.join(", ")}.`, display: true });
    return;
  }
  let peer = getRemotePeer(idOrFingerprint);
  if (!peer) peer = getRemotePeerByFingerprint(idOrFingerprint);
  if (!peer) {
    pi.sendMessage({ customType: "remote-pair", content: `Permissions failed: no peer found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }
  if (profile === "full") {
    pi.sendMessage({ customType: "remote-pair", content: `Warning: granting \`full\` profile gives the remote peer unrestricted execution rights.`, display: true });
  }
  if (peer.mode === "short-circuit") {
    pi.sendMessage({ customType: "remote-pair", content: `Warning: this peer is already in \`short-circuit\` mode — combined with an elevated profile this grants broad trust.`, display: true });
  }
  const now = new Date().toISOString();
  updateRemotePeer(peer.instance_id, { profile: profile as RemotePeerProfile, updated_at: now });
  pi.sendMessage({ customType: "remote-pair", content: `Set profile to \`${profile}\` for peer \`${formatFingerprint(peer.instance_id)}\`.`, display: true });
}

export async function runSetModeFlow(idOrFingerprint: string, mode: string, pi: ExtensionAPI): Promise<void> {
  const validModes: RemotePeerMode[] = ["mediated", "short-circuit"];
  if (!validModes.includes(mode as RemotePeerMode)) {
    pi.sendMessage({ customType: "remote-pair", content: `Invalid mode \`${mode}\`. Valid values: ${validModes.join(", ")}.`, display: true });
    return;
  }
  let peer = getRemotePeer(idOrFingerprint);
  if (!peer) peer = getRemotePeerByFingerprint(idOrFingerprint);
  if (!peer) {
    pi.sendMessage({ customType: "remote-pair", content: `Mode failed: no peer found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }
  if (mode === "short-circuit") {
    pi.sendMessage({ customType: "remote-pair", content: `Warning: \`short-circuit\` mode bypasses mediated negotiation. Ensure you trust this peer fully.`, display: true });
  }
  const now = new Date().toISOString();
  updateRemotePeer(peer.instance_id, { mode: mode as RemotePeerMode, updated_at: now });
  pi.sendMessage({ customType: "remote-pair", content: `Set mode to \`${mode}\` for peer \`${formatFingerprint(peer.instance_id)}\`.`, display: true });
}

// ─── /ask ─────────────────────────────────────────────────────────────────────

export async function runAskFlow(idOrFingerprint: string, prompt: string, pi: ExtensionAPI): Promise<void> {
  let peer = getRemotePeer(idOrFingerprint);
  if (!peer) peer = getRemotePeerByFingerprint(idOrFingerprint);
  if (!peer) {
    pi.sendMessage({ customType: "remote-ask", content: `Ask failed: no peer found for \`${idOrFingerprint}\`.`, display: true });
    return;
  }
  if (peer.status !== "paired") {
    pi.sendMessage({ customType: "remote-ask", content: `Ask failed: peer is not paired (status: ${peer.status}).`, display: true });
    return;
  }
  if (!peer.base_url) {
    pi.sendMessage({ customType: "remote-ask", content: `Ask failed: peer has no base_url recorded.`, display: true });
    return;
  }

  const identity = loadOrCreateIdentity();
  const useExecute = peer.mode === "short-circuit" && peer.profile === "full";
  const endpoint = useExecute ? "/api/remote/execute" : "/api/remote/proposal";
  const bodyText = JSON.stringify({ prompt });
  const bodyBytes = new TextEncoder().encode(bodyText);
  const headers = buildSignedRequestHeaders(identity, endpoint, bodyBytes, peer.trust_epoch);
  headers["X-Request-Hop"] = "0";
  headers["X-Request-Chain-Id"] = randomUUID();

  let res: Response;
  try {
    res = await fetch(`${peer.base_url}${endpoint}`, {
      method: "POST",
      headers,
      body: bodyText,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    pi.sendMessage({ customType: "remote-ask", content: `Ask failed: could not reach ${peer.base_url} — ${msg}`, display: true });
    return;
  }

  let body: Record<string, unknown>;
  try {
    body = await res.json() as Record<string, unknown>;
  } catch {
    pi.sendMessage({ customType: "remote-ask", content: `Ask failed: invalid response from peer.`, display: true });
    return;
  }

  const decision = typeof body.decision === "string" ? body.decision : "";
  switch (decision) {
    case "accept_execute": {
      const result = typeof body.result === "string" ? body.result : JSON.stringify(body.result ?? "");
      pi.sendMessage({ customType: "remote-ask", content: `**Remote executed:**\n${result}`, display: true });
      break;
    }
    case "accept_defer": {
      pi.sendMessage({ customType: "remote-ask", content: `Remote deferred your request. It will execute when ready.`, display: true });
      break;
    }
    case "human_required": {
      pi.sendMessage({ customType: "remote-ask", content: `Remote side queued your request for operator review.`, display: true });
      break;
    }
    case "negotiate": {
      const scope = typeof body.proposed_scope === "string" ? body.proposed_scope : JSON.stringify(body.proposed_scope ?? "");
      pi.sendMessage({ customType: "remote-ask", content: `Remote proposed a counter-scope:\n${scope}`, display: true });
      break;
    }
    case "deny": {
      const reason = typeof body.reason === "string" ? body.reason : "";
      pi.sendMessage({ customType: "remote-ask", content: `Remote denied the request${reason ? ": " + reason : "."}`, display: true });
      break;
    }
    default: {
      pi.sendMessage({ customType: "remote-ask", content: `Unexpected response from remote (decision: \`${decision || "none"}\`).`, display: true });
    }
  }
}

/** Extension factory for /pair command. Only active when PICLAW_REMOTE_INTEROP_ENABLED=1. */
export const remotePair: ExtensionFactory = (pi: ExtensionAPI) => {
  const interopEnabled =
    process.env.PICLAW_REMOTE_INTEROP_ENABLED === "1" ||
    (process.env.PICLAW_REMOTE_INTEROP_ENABLED || "").toLowerCase() === "true";
  if (!interopEnabled) return;

  // On session start, notify the operator of any pending inbound pair requests
  // so they know to run /pair accept. Does not initiate any network activity.
  pi.on("session_start", () => {
    let pendingPeers: RemotePeerRecord[];
    try {
      pendingPeers = getAllRemotePeers().filter((p) => p.status === "pending");
    } catch {
      pendingPeers = [];
    }
    if (!pendingPeers.length) return;

    log.info("Pending inbound pair requests on startup", {
      operation: "remote-pair.startup-notify",
      count: pendingPeers.length,
    });

    const lines = pendingPeers.map((p) => {
      const fp = formatFingerprint(p.instance_id);
      const name = p.display_name ? ` (${p.display_name})` : "";
      return `- \`${fp}\`${name}`;
    });
    pi.sendMessage({
      customType: "remote-pair",
      content: `**Pending pair requests:**\n${lines.join("\n")}\n\nRun \`/pair accept <fingerprint>\` to accept one.`,
      display: true,
    });
  });

  pi.registerCommand("pair", {
    description: "Manage remote peer connections. Usage: /pair request <url> | /pair list | /pair accept <id> | /pair revoke <id>",
    handler: async (args: string) => {
      const trimmed = (args || "").trim();
      const spaceIdx = trimmed.indexOf(" ");
      const sub = (spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx)).toLowerCase();
      const rest = spaceIdx === -1 ? "" : trimmed.slice(spaceIdx + 1).trim();

      if (sub === "list") {
        handlePairList(pi);
        return;
      }

      if (sub === "request") {
        if (!rest) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair request <url>", display: true });
          return;
        }
        try { new URL(rest); } catch {
          pi.sendMessage({ customType: "remote-pair", content: `Invalid URL: ${rest}`, display: true });
          return;
        }
        await runPairFlow(rest, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Pair flow error", { operation: "remote-pair.flow", err });
          pi.sendMessage({ customType: "remote-pair", content: `Pairing error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "revoke") {
        if (!rest) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair revoke <instance_id | fingerprint>", display: true });
          return;
        }
        runUnpairFlow(rest, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Revoke flow error", { operation: "remote-pair.revoke", err });
          pi.sendMessage({ customType: "remote-pair", content: `Revoke error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "accept") {
        if (!rest) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair accept <request_id | instance_id | fingerprint>", display: true });
          return;
        }
        runAcceptPairFlow(rest, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Accept flow error", { operation: "remote-pair.accept", err });
          pi.sendMessage({ customType: "remote-pair", content: `Accept error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "deny") {
        if (!rest) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair deny <request_id | instance_id | fingerprint>", display: true });
          return;
        }
        runDenyPairFlow(rest, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Deny flow error", { operation: "remote-pair.deny", err });
          pi.sendMessage({ customType: "remote-pair", content: `Deny error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "block") {
        if (!rest) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair block <request_id | instance_id | fingerprint>", display: true });
          return;
        }
        runBlockPairFlow(rest, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Block flow error", { operation: "remote-pair.block", err });
          pi.sendMessage({ customType: "remote-pair", content: `Block error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "permissions") {
        const spaceIdx2 = rest.indexOf(" ");
        const idPart = spaceIdx2 === -1 ? rest : rest.slice(0, spaceIdx2);
        const profilePart = spaceIdx2 === -1 ? "" : rest.slice(spaceIdx2 + 1).trim();
        if (!idPart || !profilePart) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair permissions <id | fingerprint> <read-only | restricted | full | custom>", display: true });
          return;
        }
        runSetPermissionsFlow(idPart, profilePart, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Permissions flow error", { operation: "remote-pair.permissions", err });
          pi.sendMessage({ customType: "remote-pair", content: `Permissions error: ${msg}`, display: true });
        });
        return;
      }

      if (sub === "mode") {
        const spaceIdx2 = rest.indexOf(" ");
        const idPart = spaceIdx2 === -1 ? rest : rest.slice(0, spaceIdx2);
        const modePart = spaceIdx2 === -1 ? "" : rest.slice(spaceIdx2 + 1).trim();
        if (!idPart || !modePart) {
          pi.sendMessage({ customType: "remote-pair", content: "Usage: /pair mode <id | fingerprint> <mediated | short-circuit>", display: true });
          return;
        }
        runSetModeFlow(idPart, modePart, pi).catch((err) => {
          const msg = err instanceof Error ? err.message : String(err);
          log.error("Mode flow error", { operation: "remote-pair.mode", err });
          pi.sendMessage({ customType: "remote-pair", content: `Mode error: ${msg}`, display: true });
        });
        return;
      }

      pi.sendMessage({
        customType: "remote-pair",
        content: [
          "Usage:",
          "  `/pair request <url>` — initiate pairing",
          "  `/pair list` — show known peers",
          "  `/pair accept <id>` — accept an inbound pair request",
          "  `/pair deny <id>` — deny an inbound pair request",
          "  `/pair block <id>` — block an inbound pair request and peer",
          "  `/pair permissions <id> <profile>` — set capability profile",
          "  `/pair mode <id> <mode>` — set interaction mode",
          "  `/pair revoke <id>` — revoke a pairing",
        ].join("\n"),
        display: true,
      });
    },
  });

  pi.registerCommand("ask", {
    description: "Send a signed proposal to a paired remote peer. Usage: /ask <id | fingerprint> <prompt>",
    handler: async (args: string) => {
      const trimmed = (args || "").trim();
      const spaceIdx = trimmed.indexOf(" ");
      if (spaceIdx === -1 || !trimmed.slice(spaceIdx + 1).trim()) {
        pi.sendMessage({ customType: "remote-ask", content: "Usage: /ask <instance_id | fingerprint> <prompt text>", display: true });
        return;
      }
      const idOrFingerprint = trimmed.slice(0, spaceIdx);
      const prompt = trimmed.slice(spaceIdx + 1).trim();
      runAskFlow(idOrFingerprint, prompt, pi).catch((err) => {
        const msg = err instanceof Error ? err.message : String(err);
        log.error("Ask flow error", { operation: "remote-ask.flow", err });
        pi.sendMessage({ customType: "remote-ask", content: `Ask error: ${msg}`, display: true });
      });
    },
  });
};
