/**
 * Converts a string to a slug.
 * - Converts to lowercase
 * - Replaces spaces and non-alphanumeric chars with hyphens
 * - Removes consecutive hyphens
 * - Trims leading/trailing hyphens
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

/**
 * Generates a consistent slug from a member's first and last name.
 */
export function generateMemberSlug(firstName: string, lastName: string): string {
  return slugify(`${firstName}-${lastName}`);
}
