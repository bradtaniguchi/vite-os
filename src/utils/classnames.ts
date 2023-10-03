/**
 * Utility function that consolidates the given classnames in the object, or array.
 * Supports multiple arguments.
 */
export function classnames(
  ...classes: (
    | string
    | boolean
    | (string | boolean)[]
    | { [key: string]: boolean }
  )[]
) {
  return classes
    .map((c) => {
      if (typeof c === "string") return c;
      if (typeof c === "boolean") return "";

      if (Array.isArray(c)) return c.filter(Boolean).join(" ");

      return Object.keys(c)
        .filter((key) => c[key])
        .join(" ");
    })
    .filter((c) => c)
    .join(" ");
}
