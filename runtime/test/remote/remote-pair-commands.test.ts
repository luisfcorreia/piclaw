/**
 * test/remote/remote-pair-commands.test.ts – Tests for /pair command flows (request, revoke, accept, etc.).
 */
import { describe, expect, test, beforeEach, afterEach } from "bun:test";
import "../helpers.js";
import { generateKeyPairSync } from "crypto";
import { createTempWorkspace, setEnv, importFresh } from "../helpers.js";

interface InteropIdentity {
  instance_id: string;
  public_key: string;
  private_key: string;
  fingerprint: string;
  instance_name: string;
  created_at: string;
}

let restoreEnv: (() => void) | null = null;
let cleanupWorkspace: (() => void) | null = null;

let deriveInstanceId: (publicKey: string) => string;
let resetInteropIdentityForTests: () => void;
let signPayload: (identity: InteropIdentity, payload: string) => string;
let buildCanonicalRequest: (params: any) => string;
let hashBody: (body: Uint8Array) => string;
let signRequest: (identity: InteropIdentity, canonical: string) => string;
let getRemotePeer: (id: string) => any;
let getRemotePeerByFingerprint: (fp: string) => any;
let upsertRemotePeer: (peer: any) => void;
let updateRemotePeer: (id: string, updates: any) => void;
let initDatabase: () => void;
let RemoteInteropService: any;
let runPairFlow: (targetBaseUrl: string, pi: any) => Promise<void>;
let runUnpairFlow: (id: string, pi: any) => Promise<void>;
let runAcceptPairFlow: (id: string, pi: any) => Promise<void>;
let runDenyPairFlow: (id: string, pi: any) => Promise<void>;
let runBlockPairFlow: (id: string, pi: any) => Promise<void>;
let runSetPermissionsFlow: (id: string, profile: string, pi: any) => Promise<void>;
let runSetModeFlow: (id: string, mode: string, pi: any) => Promise<void>;
let runAskFlow: (id: string, prompt: string, pi: any) => Promise<void>;
let createPairRequest: (req: any) => void;
let getPendingPairRequests: () => any[];

let originalFetch: typeof fetch | null = null;
const TEST_REMOTE_BASE_URL = "https://93.184.216.34";

function base64UrlEncode(buffer: Uint8Array): string {
  return Buffer.from(buffer)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function makeIdentity(): InteropIdentity {
  const { publicKey, privateKey } = generateKeyPairSync("ed25519");
  const publicDer = publicKey.export({ format: "der", type: "spki" }) as Buffer;
  const privateDer = privateKey.export({ format: "der", type: "pkcs8" }) as Buffer;
  const publicKeyEncoded = base64UrlEncode(publicDer);
  return {
    instance_id: deriveInstanceId(publicKeyEncoded),
    public_key: publicKeyEncoded,
    private_key: base64UrlEncode(privateDer),
    fingerprint: "test-fp",
    instance_name: "peer",
    created_at: new Date().toISOString(),
  };
}

function makeMockPi() {
  const messages: string[] = [];
  return {
    messages,
    sendMessage: (msg: { content: string }) => { messages.push(msg.content); },
  };
}

function buildCallbackProofString(requestId: string, challenge: string, receiverInstanceId: string): string {
  return `${requestId}\n${challenge}\n${receiverInstanceId}`;
}

/**
 * Install a fetch stub that handles pair-request + pair-callback + pair-confirm
 * through a local RemoteInteropService instance (acting as the receiver).
 * `getInitiatorIdentity` is called lazily at callback time so it picks up
 * whichever identity `runPairFlow` actually loaded from the temp workspace.
 */
function installFullPairStub(
  getInitiatorIdentity: () => InteropIdentity,
  receiverService: any
): () => void {
  const original = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;

    // pair-request → forward to local service
    if (url.includes("/api/remote/pair-request")) {
      return receiverService.handleRequest(
        new Request(url, { method: "POST", headers: init?.headers as HeadersInit, body: init?.body as BodyInit })
      );
    }

    // pair-confirm → forward to local service
    if (url.includes("/api/remote/pair-confirm")) {
      return receiverService.handleRequest(
        new Request(url, { method: "POST", headers: init?.headers as HeadersInit, body: init?.body as BodyInit })
      );
    }

    // pair-callback → sign proof with the actual initiator identity at call time
    if (url.includes("/api/remote/pair-callback")) {
      const bodyText = typeof init?.body === "string" ? init.body : "";
      const payload = bodyText ? JSON.parse(bodyText) : {};
      const requestId = String(payload.request_id || "");
      const challenge = String(payload.challenge || "");
      const receiverInstanceId = String(payload.receiver_instance_id || "");
      const proof = buildCallbackProofString(requestId, challenge, receiverInstanceId);
      const id = getInitiatorIdentity();
      const signature = signPayload(id, proof);
      return new Response(
        JSON.stringify({ request_id: requestId, challenge, instance_id: id.instance_id, signature }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ error: "not found" }), { status: 404 });
  };
  return () => { globalThis.fetch = original; };
}

describe("remote pair commands", () => {
  beforeEach(async () => {
    const ws = createTempWorkspace("piclaw-pair-cmd-");
    cleanupWorkspace = ws.cleanup;
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_REMOTE_INTEROP_ENABLED: "1",
    });

    const identityMod = await importFresh("../src/remote/identity.js");
    deriveInstanceId = identityMod.deriveInstanceId;
    resetInteropIdentityForTests = identityMod.resetInteropIdentityForTests;
    signPayload = identityMod.signPayload;

    const signatureMod = await importFresh("../src/remote/signature.js");
    buildCanonicalRequest = signatureMod.buildCanonicalRequest;
    hashBody = signatureMod.hashBody;
    signRequest = signatureMod.signRequest;

    const dbMod = await importFresh("../src/db.js");
    initDatabase = dbMod.initDatabase;

    const remoteDbMod = await importFresh("../src/db/remote-interop.js");
    getRemotePeer = remoteDbMod.getRemotePeer;
    getRemotePeerByFingerprint = remoteDbMod.getRemotePeerByFingerprint;
    upsertRemotePeer = remoteDbMod.upsertRemotePeer;
    updateRemotePeer = remoteDbMod.updateRemotePeer;
    createPairRequest = remoteDbMod.createPairRequest;
    getPendingPairRequests = remoteDbMod.getPendingPairRequests;

    const serviceMod = await importFresh("../src/remote/service.js");
    RemoteInteropService = serviceMod.RemoteInteropService;

    const pairMod = await importFresh("../src/extensions/remote-pair.js");
    runPairFlow = pairMod.runPairFlow;
    runUnpairFlow = pairMod.runUnpairFlow;
    runAcceptPairFlow = pairMod.runAcceptPairFlow;
    runDenyPairFlow = pairMod.runDenyPairFlow;
    runBlockPairFlow = pairMod.runBlockPairFlow;
    runSetPermissionsFlow = pairMod.runSetPermissionsFlow;
    runSetModeFlow = pairMod.runSetModeFlow;
    runAskFlow = pairMod.runAskFlow;

    resetInteropIdentityForTests();
    // Also reset the non-fresh identity module's cache (used by runPairFlow's import chain)
    const nonFreshIdentityMod: any = await import("../../src/remote/identity.js");
    nonFreshIdentityMod.resetInteropIdentityForTests();

    initDatabase();
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    if (originalFetch) {
      globalThis.fetch = originalFetch;
      originalFetch = null;
    }
    restoreEnv?.();
    restoreEnv = null;
    cleanupWorkspace?.();
    cleanupWorkspace = null;
  });

  // ─── runPairFlow ─────────────────────────────────────────────────────────

  test("runPairFlow stores receiver peer in local DB", async () => {
    // Set an external URL so the callback URL built by runPairFlow uses a
    // publicly-routable address that passes the receiver's SSRF check.
    const restoreUrl = setEnv({ PICLAW_WEB_EXTERNAL_URL: TEST_REMOTE_BASE_URL });
    const receiverService = new RemoteInteropService();
    const pi = makeMockPi();

    // Provide the actual initiator identity lazily so the stub uses the same
    // key that runPairFlow loads from the temp workspace at call time.
    const nonFreshId: any = await import("../../src/remote/identity.js");
    const restore = installFullPairStub(() => nonFreshId.loadOrCreateIdentity(), receiverService);
    await runPairFlow(TEST_REMOTE_BASE_URL, pi);
    restore();
    restoreUrl();

    const successMsg = pi.messages.find((m: string) => m.includes("Paired with"));
    expect(successMsg).toBeTruthy();
  });

  // ─── tus: "paired",
      mode: "mediated",
      profile: "restricted",
      trust_epoch: 1,
      created_at: now,
      updated_at: now,
      last_seen_at: null,
      blocked_reason: null,
      base_url: null,
    });

    const pi = makeMockPi();
    await runUnpairFlow(fp, pi);

    const stored = getRemotePeer(peer.instance_id);
    expect(stored?.status).toBe("revoked");
  });

  test("runUnpairFlow with no base_url still revokes locally", async () => {
    const now = new Date().toISOString();
    const peer = makeIdentity();
    upsertRemotePeer({
      instance_id: peer.instance_id,
      public_key: peer.public_key,
      display_name: null,
      status: "paired",
      mode: "mediated",
      profile: "restricted",
      trust_epoch: 1,
      created_at: now,
      updated_at: now,
      last_seen_at: null,
      blocked_reason: null,
      base_url: null,
    });

    const fetchCalled = { value: false };
    globalThis.fetch = async () => { fetchCalled.value = true; return new Response("", { status: 200 }); };

    const pi = makeMockPi();
    await runUnpairFlow(peer.instance_id, pi);

    expect(fetchCalled.value).toBe(false);
    const stored = getRemotePeer(peer.instance_id);
    expect(stored?.status).toBe("revoked");
  });

  test("runUnpairFlow with unreachable remote still revokes locally", async () => {
    const now = new Date().toISOString();
    const peer = makeIdentity();
    upsertRemotePeer({
      instance_id: peer.instance_id,
      public_key: peer.public_key,
      display_name: null,
      status: "paired",
      mode: "mediated",
      profile: "restricted",
      trust_epoch: 1,
      created_at: now,
      updated_at: now,
      last_seen_at: null,
      blocked_reason: null,
      base_url: TEST_REMOTE_BASE_URL,
    });

    globalThis.fetch = async () => { throw new Error("ECONNREFUSED"); };

    const pi = makeMockPi();
    await runUnpairFlow(peer.instance_id, pi);

    const stored = getRemotePeer(peer.instance_id);
    expect(stored?.status).toBe("revoked");
    expect(pi.messages[0]).toContain("Revoked pairing");
  });

  test("runUnpairFlow unknown peer reports error message", async () => {
    const pi = makeMockPi();
    await runUnpairFlow("nonexistent-id", pi);
    expect(pi.messages[0]).toContain("no peer found");
  });

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function makePendingRequest(overrides?: Partial<any>): any {
    const identity = makeIdentity();
    const now = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    return {
      id: `req-${crypto.randomUUID()}`,
      instance_id: identity.instance_id,
      public_key: identity.public_key,
      display_name: "test-peer",
      callback_url: `${TEST_REMOTE_BASE_URL}/api/remote/pair-callback`,
      protocol_version: "1",
      nonce: crypto.randomUUID(),
      expires_at: expiresAt,
      status: "pending",
      created_at: now,
      source_ip: null,
      ...overrides,
    };
  }

  function makePairedPeer(overrides?: Partial<any>): any {
    const identity = makeIdentity();
    const now = new Date().toISOString();
    return {
      instance_id: identity.instance_id,
      public_key: identity.public_key,
      display_name: "test-peer",
      status: "paired",
      mode: "mediated",
      profile: "restricted",
      trust_epoch: 1,
      created_at: now,
      updated_at: now,
      last_seen_at: now,
      blocked_reason: null,
      base_url: TEST_REMOTE_BASE_URL,
      ...overrides,
    };
  }

  // ─── runAcceptPairFlow ───────────────────────────────────────────────────────

  test("runAcceptPairFlow creates paired peer record", async () => {
    const req = makePendingRequest();
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.id, pi);

    const peer = getRemotePeer(req.instance_id);
    expect(peer).toBeTruthy();
    expect(peer.status).toBe("paired");
    expect(peer.mode).toBe("mediated");
    expect(peer.profile).toBe("restricted");
    expect(peer.trust_epoch).toBe(1);
    expect(pi.messages.some((m: string) => m.includes("Accepted pairing"))).toBe(true);
  });

  test("runAcceptPairFlow resolves by instance_id", async () => {
    const req = makePendingRequest();
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.instance_id, pi);

    const peer = getRemotePeer(req.instance_id);
    expect(peer?.status).toBe("paired");
  });

  test("runAcceptPairFlow rejects expired request", async () => {
    const past = new Date(Date.now() - 1000).toISOString();
    const req = makePendingRequest({ expires_at: past });
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.id, pi);

    expect(pi.messages[0]).toContain("expired");
    // Peer record should NOT have been created
    expect(getRemotePeer(req.instance_id)).toBeNull();
  });

  test("runAcceptPairFlow rejects already-handled request", async () => {
    const req = makePendingRequest({ status: "denied" });
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.id, pi);

    expect(pi.messages[0]).toContain("already");
    expect(getRemotePeer(req.instance_id)).toBeNull();
  });

  test("runAcceptPairFlow reports error when not found", async () => {
    const pi = makeMockPi();
    await runAcceptPairFlow("nonexistent-id", pi);
    expect(pi.messages[0]).toContain("Accept failed");
    expect(pi.messages[0]).toContain("no pending pair request");
  });

  test("runAcceptPairFlow extracts base_url from callback_url", async () => {
    const req = makePendingRequest({ callback_url: "https://peer.example.com/api/remote/pair-callback" });
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.id, pi);

    const peer = getRemotePeer(req.instance_id);
    expect(peer?.base_url).toBe("https://peer.example.com");
  });

  test("runAcceptPairFlow shows identity details in success message", async () => {
    const req = makePendingRequest({
      display_name: "lab-agent",
      callback_url: "https://lab.example.com/api/remote/pair-callback",
    });
    createPairRequest(req);

    const pi = makeMockPi();
    await runAcceptPairFlow(req.id, pi);

    const msg = pi.messages.find((m: string) => m.includes("Accepted pairing"));
    expect(msg).toBeTruthy();
    expect(msg).toContain(`Request ID`);
    expect(msg).toContain(req.id);
    expect(msg).toContain(`Instance ID`);
    expect(msg).toContain(req.instance_id);
    expect(msg).toContain(`Fingerprint`);
    expect(msg).toContain(`Display Name`);
    expect(msg).toContain("lab-agent");
    expect(msg).toContain(`Origin`);
    expect(msg).toContain("https://lab.example.com");
  });

  // ─── runDenyPairFlow ─────────────────────────────────────────────────────────

  test("runDenyPairFlow updates status to denied", async () => {
    const req = makePendingRequest();
    createPairRequest(req);

    const pi = makeMockPi();
    await runDenyPairFlow(req.id, pi);

    // confirm via DB that status is denied (no direct getById export needed — we check the accept flow fails)
    const pi2 = makeMockPi();
    await runAcceptPairFlow(req.id, pi2);
    expect(pi2.messages[0]).toContain("already");
    expect(pi.messages[0]).toContain("Denied");
  });

  test("runDenyPairFlow by instance_id resolves request", async () => {
    const req = makePendingRequest();
    createPairRequest(req);

    const pi = makeMockPi();
    await runDenyPairFlow(req.instance_id, pi);

    expect(pi.messages[0]).toContain("Denied");
  });

  test("runDenyPairFlow reports error when not found", async () => {
    const pi = makeMockPi();
    await runDenyPairFlow("nonexistent-id", pi);
    expect(pi.messages[0]).toContain("Deny failed");
  });

  // ─── runBlockPairFlow ────────────────────────────────────────────────────────

  test("runBlockPairFlow sets peer to blocked from pending request", async () => {
    const req = makePendingRequest();
    createPairRequest(req);

    const pi = makeMockPi();
    await runBlockPairFlow(req.id, pi);

    const peer = getRemotePeer(req.instance_id);
    expect(peer?.status).toBe("blocked");
    expect(peer?.blocked_reason).toBe("operator-block");
    expect(pi.messages[0]).toContain("Blocked");
  });

  test("runBlockPairFlow sets peer to blocked from existing peer record", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runBlockPairFlow(peerData.instance_id, pi);

    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.status).toBe("blocked");
    expect(stored?.blocked_reason).toBe("operator-block");
    expect(pi.messages[0]).toContain("Blocked");
  });

  test("runBlockPairFlow reports error when neither request nor peer found", async () => {
    const pi = makeMockPi();
    await runBlockPairFlow("nonexistent-id", pi);
    expect(pi.messages[0]).toContain("Block failed");
  });

  // ─── runSetPermissionsFlow ───────────────────────────────────────────────────

  test("runSetPermissionsFlow updates profile field", async () => {
    const peerData = makePairedPeer({ profile: "restricted" });
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetPermissionsFlow(peerData.instance_id, "read-only", pi);

    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.profile).toBe("read-only");
    expect(pi.messages.some((m: string) => m.includes("read-only"))).toBe(true);
  });

  test("runSetPermissionsFlow rejects invalid profile", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetPermissionsFlow(peerData.instance_id, "superuser", pi);

    expect(pi.messages[0]).toContain("Invalid profile");
    // Profile should not have changed
    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.profile).toBe("restricted");
  });

  test("runSetPermissionsFlow emits warning for full profile", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetPermissionsFlow(peerData.instance_id, "full", pi);

    expect(pi.messages.some((m: string) => m.toLowerCase().includes("warning"))).toBe(true);
    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.profile).toBe("full");
  });

  test("runSetPermissionsFlow by fingerprint resolves peer", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);
    const fp = `${peerData.instance_id.slice(0, 6)}-${peerData.instance_id.slice(6, 12)}-${peerData.instance_id.slice(12, 18)}`;

    const pi = makeMockPi();
    await runSetPermissionsFlow(fp, "custom", pi);

    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.profile).toBe("custom");
  });

  test("runSetPermissionsFlow reports error when peer not found", async () => {
    const pi = makeMockPi();
    await runSetPermissionsFlow("nonexistent-id", "restricted", pi);
    expect(pi.messages[0]).toContain("Permissions failed");
  });

  // ─── runSetModeFlow ──────────────────────────────────────────────────────────

  test("runSetModeFlow updates mode field", async () => {
    const peerData = makePairedPeer({ mode: "mediated" });
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetModeFlow(peerData.instance_id, "short-circuit", pi);

    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.mode).toBe("short-circuit");
    expect(pi.messages.some((m: string) => m.includes("short-circuit"))).toBe(true);
  });

  test("runSetModeFlow rejects invalid mode", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetModeFlow(peerData.instance_id, "turbo", pi);

    expect(pi.messages[0]).toContain("Invalid mode");
    const stored = getRemotePeer(peerData.instance_id);
    expect(stored?.mode).toBe("mediated");
  });

  test("runSetModeFlow emits warning for short-circuit", async () => {
    const peerData = makePairedPeer();
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetModeFlow(peerData.instance_id, "short-circuit", pi);

    expect(pi.messages.some((m: string) => m.toLowerCase().includes("warning"))).toBe(true);
  });

  test("runSetModeFlow reports error when peer not found", async () => {
    const pi = makeMockPi();
    await runSetModeFlow("nonexistent-id", "mediated", pi);
    expect(pi.messages[0]).toContain("Mode failed");
  });

  // ─── runAskFlow ──────────────────────────────────────────────────────────────

  test("runAskFlow sends signed POST to remote proposal endpoint", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    const captured: { url: string; method: string; headers: Record<string, string>; body: string }[] = [];
    globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;
      captured.push({
        url,
        method: String(init?.method || "GET"),
        headers: Object.fromEntries(new Headers(init?.headers as HeadersInit ?? {}).entries()),
        body: typeof init?.body === "string" ? init.body : "",
      });
      return new Response(
        JSON.stringify({ decision: "accept_execute", result: "done" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "hello remote", pi);

    expect(captured.length).toBe(1);
    expect(captured[0].url).toContain("/api/remote/proposal");
    expect(captured[0].method).toBe("POST");
    expect(captured[0].headers["x-instance-id"]).toBeTruthy();
    expect(captured[0].headers["x-signature"]).toBeTruthy();
    expect(captured[0].headers["x-request-hop"]).toBe("0");
    const body = JSON.parse(captured[0].body);
    expect(body.prompt).toBe("hello remote");
    expect(pi.messages.some((m: string) => m.includes("Remote executed"))).toBe(true);
  });

  test("runAskFlow surfaces accept_defer response", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    globalThis.fetch = async () =>
      new Response(JSON.stringify({ decision: "accept_defer" }), { status: 200, headers: { "Content-Type": "application/json" } });

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages.some((m: string) => m.includes("deferred"))).toBe(true);
  });

  test("runAskFlow surfaces human_required response", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    globalThis.fetch = async () =>
      new Response(JSON.stringify({ decision: "human_required" }), { status: 200, headers: { "Content-Type": "application/json" } });

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages.some((m: string) => m.includes("operator review"))).toBe(true);
  });

  test("runAskFlow surfaces deny response", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    globalThis.fetch = async () =>
      new Response(JSON.stringify({ decision: "deny", reason: "not authorized" }), { status: 200, headers: { "Content-Type": "application/json" } });

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages.some((m: string) => m.includes("denied") && m.includes("not authorized"))).toBe(true);
  });

  test("runAskFlow surfaces negotiate response", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    globalThis.fetch = async () =>
      new Response(JSON.stringify({ decision: "negotiate", proposed_scope: "read-only tools only" }), { status: 200, headers: { "Content-Type": "application/json" } });

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages.some((m: string) => m.includes("counter-scope"))).toBe(true);
  });

  test("runAskFlow errors when peer not found", async () => {
    const pi = makeMockPi();
    await runAskFlow("nonexistent-id", "test", pi);
    expect(pi.messages[0]).toContain("Ask failed");
    expect(pi.messages[0]).toContain("no peer found");
  });

  test("runAskFlow errors when peer has no base_url", async () => {
    const peerData = makePairedPeer({ base_url: null });
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages[0]).toContain("no base_url");
  });

  test("runAskFlow errors when peer is not paired", async () => {
    const peerData = makePairedPeer({ status: "revoked", base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages[0]).toContain("not paired");
  });

  test("runAskFlow handles network failure gracefully", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    globalThis.fetch = async () => { throw new Error("ECONNREFUSED"); };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(pi.messages[0]).toContain("ECONNREFUSED");
  });

  test("runAskFlow dispatches to /api/remote/execute for short-circuit+full peer", async () => {
    const peerData = makePairedPeer({ mode: "short-circuit", profile: "full", base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    let capturedUrl = "";
    globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      capturedUrl = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;
      return new Response(
        JSON.stringify({ decision: "accept_execute", result: "ok" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "run something", pi);

    expect(capturedUrl).toContain("/api/remote/execute");
    expect(capturedUrl).not.toContain("/api/remote/proposal");
  });

  test("runAskFlow uses /api/remote/proposal for short-circuit+restricted peer", async () => {
    const peerData = makePairedPeer({ mode: "short-circuit", profile: "restricted", base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    let capturedUrl = "";
    globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      capturedUrl = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;
      return new Response(
        JSON.stringify({ decision: "accept_execute", result: "ok" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "do something", pi);

    expect(capturedUrl).toContain("/api/remote/proposal");
  });

  // ─── trust_epoch + chain-id correctness ─────────────────────────────────────

  test("runAskFlow sends peer trust_epoch in X-Trust-Epoch header, not always 1", async () => {
    const peerData = makePairedPeer({ trust_epoch: 3, base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    let capturedEpoch: string | null = null;
    globalThis.fetch = async (_input: RequestInfo | URL, init?: RequestInit) => {
      capturedEpoch = new Headers(init?.headers as HeadersInit ?? {}).get("x-trust-epoch");
      return new Response(JSON.stringify({ decision: "accept_execute", result: "ok" }), { status: 200, headers: { "Content-Type": "application/json" } });
    };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(capturedEpoch).toBe("3");
  });

  test("runAskFlow sends X-Request-Chain-Id header", async () => {
    const peerData = makePairedPeer({ base_url: TEST_REMOTE_BASE_URL });
    upsertRemotePeer(peerData);

    let capturedChainId: string | null = null;
    globalThis.fetch = async (_input: RequestInfo | URL, init?: RequestInit) => {
      capturedChainId = new Headers(init?.headers as HeadersInit ?? {}).get("x-request-chain-id");
      return new Response(JSON.stringify({ decision: "accept_execute", result: "ok" }), { status: 200, headers: { "Content-Type": "application/json" } });
    };

    const pi = makeMockPi();
    await runAskFlow(peerData.instance_id, "test", pi);

    expect(capturedChainId).toBeTruthy();
    // Should be a valid UUID
    expect(capturedChainId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  // ─── deny/block status guard ──────────────────────────────────────────────

  test("runDenyPairFlow rejects already-handled request", async () => {
    const req = makePendingRequest({ status: "accepted" });
    createPairRequest(req);

    const pi = makeMockPi();
    await runDenyPairFlow(req.id, pi);

    expect(pi.messages[0]).toContain("already");
  });

  test("runBlockPairFlow rejects already-handled request", async () => {
    const req = makePendingRequest({ status: "denied" });
    createPairRequest(req);

    const pi = makeMockPi();
    await runBlockPairFlow(req.id, pi);

    expect(pi.messages[0]).toContain("already");
  });

  // ─── short-circuit co-warning in permissions ──────────────────────────────

  test("runSetPermissionsFlow warns when peer is already in short-circuit mode", async () => {
    const peerData = makePairedPeer({ mode: "short-circuit", profile: "restricted" });
    upsertRemotePeer(peerData);

    const pi = makeMockPi();
    await runSetPermissionsFlow(peerData.instance_id, "restricted", pi);

    // Should warn about short-circuit even for non-full profiles
    expect(pi.messages.some((m: string) => m.toLowerCase().includes("short-circuit"))).toBe(true);
  });
});
