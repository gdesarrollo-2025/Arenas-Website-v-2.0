export function buildSearchParams(
  obj: Record<string, unknown>
): URLSearchParams {
  return new URLSearchParams(
    Object.entries(obj)
      .filter(([, value]) => value != null)
      .map(([key, value]) => [key, String(value)])
  );
}