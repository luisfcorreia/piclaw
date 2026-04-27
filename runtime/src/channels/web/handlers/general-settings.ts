/**
 * web/handlers/general-settings.ts — Persist/apply General settings from the web UI.
 */

import {
  getSessionIsolationLevel,
  setSessionIsolationLevel,
  type SessionIsolationLevel,
} from "../../../extensions/session-status.js";
import {
  getIdentityConfig,
  getSessionStorageConfig,
  getToolUseMessageBudget,
  getWebRuntimeConfig,
  getSearchMatchMode,
  setAssistantAvatar,
  setAssistantName,
  setSessionStorageConfig,
  setToolUseMessageBudget,
  setSearchMatchMode,
  setUserAvatar,
  setUserAvatarBackground,
  setUserName,
  setWebComposeUploadLimitMb,
  setWebTerminalEnabled,
  setWebWorkspaceUploadLimitMb,
  type SearchMatchMode,
} from "../../../core/config.js";
import { updateAssistantConfig, updateUserConfig } from "../../../agent-control/agent-control-helpers.js";
import { generateTotpQr } from "../../../utils/totp-qr.js";

export interface GeneralSettingsData {
  assistantName: string;
  assistantAvatar: string;
  userName: string;
  userAvatar: string;
  userAvatarBackground: string;
  sessionAutoRotate: boolean;
  sessionMaxSizeMb: number;
  webTerminalEnabled: boolean;
  composeUploadLimitMb: number;
  workspaceUploadLimitMb: number;
  toolUseBudget: number;
  instanceTotp: {
    configured: boolean;
    issuer: string;
    label: string;
    secret: string;
    otpauth: string;
    qrSvg: string;
  };
  sessionIsolation: "none" | "summary" | "full";
  searchMatchMode: "or" | "and";
}

export interface GeneralSettingsInput {
  assistantName?: unknown;
  assistantAvatar?: unknown;
  userName?: unknown;
  userAvatar?: unknown;
  sessionAutoRotate?: unknown;
  sessionMaxSizeMb?: unknown;
  webTerminalEnabled?: unknown;
  composeUploadLimitMb?: unknown;
  workspaceUploadLimitMb?: unknown;
  toolUseBudget?: unknown;
  sessionIsolation?: unknown;
  searchMatchMode?: unknown;
}

function normalizeOptionalString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  const trimmed = String(value ?? "").trim();
  return trimmed ? trimmed : null;
}

function normalizeOptionalInt(value: unknown, min: number, max: number): number | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return undefined;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

function normalizeOptionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function buildTotpSettingsData(): GeneralSettingsData["instanceTotp"] {
  const identity = getIdentityConfig();
  const web = getWebRuntimeConfig();
  const secret = (web.totpSecret || "").trim();
  const issuer = identity.assistantName || "Piclaw";
  const label = identity.userName ? `${issuer}:${identity.userName}` : issuer;

  if (!secret) {
    return {
      configured: false,
      issuer,
      label,
      secret: "",
      otpauth: "",
      qrSvg: "",
    };
  }

  const qr = generateTotpQr({ secret, issuer, label });
  return {
    configured: true,
    issuer: qr.issuer,
    label: qr.label,
    secret: qr.secret,
    otpauth: qr.otpauth,
    qrSvg: qr.svg,
  };
}

export function getGeneralSettingsData(): GeneralSettingsData {
  const identity = getIdentityConfig();
  const session = getSessionStorageConfig();
  const web = getWebRuntimeConfig();
  return {
    assistantName: identity.assistantName || "PiClaw",
    assistantAvatar: identity.assistantAvatar || "",
    userName: identity.userName || "",
    userAvatar: identity.userAvatar || "",
    userAvatarBackground: identity.userAvatarBackground || "",
    sessionAutoRotate: session.autoRotate,
    sessionMaxSizeMb: session.maxSizeMb,
    webTerminalEnabled: web.terminalEnabled,
    composeUploadLimitMb: web.composeUploadLimitMb,
    workspaceUploadLimitMb: web.workspaceUploadLimitMb,
    toolUseBudget: getToolUseMessageBudget(),
    instanceTotp: buildTotpSettingsData(),
    sessionIsolation: getSessionIsolationLevel(),
    searchMatchMode: getSearchMatchMode(),
  };
}

export async function saveGeneralSettings(input: GeneralSettingsInput): Promise<GeneralSettingsData> {
  const nextAssistantName = normalizeOptionalString(input.assistantName);
  if (nextAssistantName !== undefined) {
    const updated = updateAssistantConfig({ name: nextAssistantName });
    setAssistantName(updated.name || process.env.PICLAW_ASSISTANT_NAME || process.env.ASSISTANT_NAME || "PiClaw");
  }

  const nextAssistantAvatar = normalizeOptionalString(input.assistantAvatar);
  if (nextAssistantAvatar !== undefined) {
    const updated = updateAssistantConfig({ avatar: nextAssistantAvatar });
    setAssistantAvatar(updated.avatar || process.env.PICLAW_ASSISTANT_AVATAR || process.env.ASSISTANT_AVATAR || "");
  }

  const nextUserName = normalizeOptionalString(input.userName);
  if (nextUserName !== undefined) {
    const updated = updateUserConfig({ name: nextUserName });
    setUserName(updated.name || process.env.PICLAW_USER_NAME || "");
  }

  const nextUserAvatar = normalizeOptionalString(input.userAvatar);
  if (nextUserAvatar !== undefined) {
    const updated = updateUserConfig({
      avatar: nextUserAvatar,
      avatarBackground: nextUserAvatar === null ? null : undefined,
    });
    setUserAvatar(updated.avatar || process.env.PICLAW_USER_AVATAR || "");
    if (nextUserAvatar === null) {
      setUserAvatarBackground(process.env.PICLAW_USER_AVATAR_BACKGROUND || "");
    }
  }

  const sessionPatch: { maxSizeMb?: number; autoRotate?: boolean } = {};
  const nextSessionMaxSizeMb = normalizeOptionalInt(input.sessionMaxSizeMb, 1, 256);
  if (nextSessionMaxSizeMb !== undefined) {
    sessionPatch.maxSizeMb = nextSessionMaxSizeMb;
  }
  const nextSessionAutoRotate = normalizeOptionalBoolean(input.sessionAutoRotate);
  if (nextSessionAutoRotate !== undefined) {
    sessionPatch.autoRotate = nextSessionAutoRotate;
  }
  if (Object.keys(sessionPatch).length > 0) {
    setSessionStorageConfig(sessionPatch);
  }

  const nextWebTerminalEnabled = normalizeOptionalBoolean(input.webTerminalEnabled);
  if (nextWebTerminalEnabled !== undefined) {
    setWebTerminalEnabled(nextWebTerminalEnabled);
  }

  const nextComposeUploadLimitMb = normalizeOptionalInt(input.composeUploadLimitMb, 1, 512);
  if (nextComposeUploadLimitMb !== undefined) {
    setWebComposeUploadLimitMb(nextComposeUploadLimitMb);
  }

  const nextWorkspaceUploadLimitMb = normalizeOptionalInt(input.workspaceUploadLimitMb, 1, 1024);
  if (nextWorkspaceUploadLimitMb !== undefined) {
    setWebWorkspaceUploadLimitMb(nextWorkspaceUploadLimitMb);
  }

  const nextToolUseBudget = normalizeOptionalInt(input.toolUseBudget, 8, 512);
  if (nextToolUseBudget !== undefined) {
    setToolUseMessageBudget(nextToolUseBudget);
  }

  const nextSessionIsolation = typeof input.sessionIsolation === "string" ? input.sessionIsolation.trim().toLowerCase() : undefined;
  if (nextSessionIsolation === "none" || nextSessionIsolation === "summary" || nextSessionIsolation === "full") {
    setSessionIsolationLevel(nextSessionIsolation as SessionIsolationLevel);
  }

  const nextSearchMatchMode = typeof input.searchMatchMode === "string" ? input.searchMatchMode.trim().toLowerCase() : undefined;
  if (nextSearchMatchMode === "or" || nextSearchMatchMode === "and") {
    setSearchMatchMode(nextSearchMatchMode as SearchMatchMode);
  }

  return getGeneralSettingsData();
}
