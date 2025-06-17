export const isArray = Array.isArray

export function ensureArray<T>(value: T | T[]): T[] {
  return isArray(value) ? value : [value]
}
