type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Central place to log client-side errors caught by the root error boundary.
 * Swap the console.error below for a real error-tracking service (Sentry,
 * LogRocket, etc.) when you're ready to wire one up.
 */
export function reportAppError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorReportOptions = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[app error]", message, {
    route: window.location.pathname,
    stack,
    ...context,
    ...options,
  });
}
