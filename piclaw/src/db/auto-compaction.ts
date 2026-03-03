import { deleteRouterState, getRouterState, setRouterState } from "./router-state.js";

const KEY_PREFIX = "auto_compact:";

export type AutoCompactStatus = "idle" | "running" | "success" | "error";
export type AutoCompactPhase = "pre" | "post";

export interface AutoCompactState {
  status: AutoCompactStatus;
  phase: AutoCompactPhase;
  startedAt?: number;
  updatedAt?: number;
  tokens?: number;
  contextWindow?: number;
  percent?: number | null;
  threshold?: number;
  error?: string;
}

function buildKey(chatJid: string): string {
  return `${KEY_PREFIX}${chatJid}`;
}

export function getAutoCompactState(chatJid: string): AutoCompactState | null {
  const raw = getRouterState(buildKey(chatJid));
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as AutoCompactState;
    if (parsed && typeof parsed === "object" && typeof parsed.status === "string") {
      return parsed;
    }
  } catch {
    // swallow JSON errors and treat as missing state
  }
  return null;
}

export function setAutoCompactState(chatJid: string, state: AutoCompactState): void {
  setRouterState(buildKey(chatJid), JSON.stringify(state));
}

export function clearAutoCompactState(chatJid: string): void {
  deleteRouterState(buildKey(chatJid));
}
