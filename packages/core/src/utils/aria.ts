/**
 * Builds an aria-describedby string from multiple potential IDs.
 * Filters out falsy values and joins with spaces.
 *
 * @example
 * const describedBy = buildAriaDescribedBy(
 *   existingDescribedBy,
 *   description && descriptionId,
 *   error && errorId
 * );
 */
export function buildAriaDescribedBy(
  ...ids: Array<string | false | undefined | null>
): string | undefined {
  const validIds = ids.filter((id): id is string => typeof id === 'string' && id.length > 0);
  return validIds.length > 0 ? validIds.join(' ') : undefined;
}
