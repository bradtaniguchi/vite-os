/**
 * Returns a randomized string. Should be updated to
 * be more robust in the future.
 *
 * @returns a random string
 */
export function getId() {
  return Math.random().toString(36).substr(2, 9);
}
