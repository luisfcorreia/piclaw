/**
 * test/channels/web/helpers/http.ts – Shared HTTP request/response helpers for web endpoint tests.
 */

/** Build a JSON response with a stable content-type header for endpoint helper tests. */
export function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Build a reusable `(payload, status) => Response` callback for endpoint contexts. */
export function createJsonResponder(): (payload: unknown, status?: number) => Response {
  return (payload: unknown, status = 200) => jsonResponse(payload, status);
}

/** Build a JSON request for endpoint helper tests. */
export function jsonRequest(url: string, body: unknown, method = "POST"): Request {
  return new Request(url, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}
