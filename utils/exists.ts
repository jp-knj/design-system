/**
 * Returns boolean if exists.
 * @typeParam T - Any types
 * @returns Boolean
 */
function exists<T>(v: T | null | undefined): v is T {
    return typeof v !== 'undefined' && v !== null;
}
export { exists };
