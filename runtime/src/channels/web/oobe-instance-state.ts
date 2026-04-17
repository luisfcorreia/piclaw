import { getRouterState, setRouterState } from "../../db.js";

export type OobeInstanceCompletionKind = "provider-ready";

const OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY = "web:oobe:provider-ready:completed";

export function isProviderReadyOobeCompletedForInstance(): boolean {
  return getRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY) === "true";
}

export function markProviderReadyOobeCompletedForInstance(): void {
  setRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY, "true");
}

export function completeOobeForInstance(kind: OobeInstanceCompletionKind): void {
  if (kind === "provider-ready") {
    markProviderReadyOobeCompletedForInstance();
  }
}

export { OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY };
