/**
 * Returns a promise that resolves after the given number of ms
 *
 * @param ms the ms to delay execution before resolving
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
