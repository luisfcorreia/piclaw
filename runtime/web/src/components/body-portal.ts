// @ts-nocheck
// BodyPortal — temporarily renders inline to diagnose DOM multiplication bug.
// When this fixes the issue, the portal render() mechanism needs rework.
export function BodyPortal({ children }) {
    return children;
}
