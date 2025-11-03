/**
 * @file utils.ts
 * @author John A Cruz Merced
 * @date 2025-07-14
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

/** Asserts a condition is true, otherwise throws an error with the given message. */
function assert(condition: any, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}
/**
 * Escapes special characters in a string so it can be safely used in a regular expression.
 * Characters escaped: . * + ? ^ $ { } ( ) | [ ] \
 * @param {string} str Input string to escape
 * @returns {string} Escaped string safe for regex usage
 */
export function escapeRegexChars(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
/**
 * Constructs a space-separated class string from a series of strings and mapping objects.
 * Each property name in each mapping object will be conditionally added to the class
 * string based on the truthiness of the property value.
 * @example
 * const replies = [someReplyObj, someReplyObj, someReplyObj, someReplyObj];
 * let collapsed = replies.length > 3;
 * const className = classMap(
 *     'text-blue-700',
 *     {
 *         collapsed,
 *         [`padding-${userSettings.compactMode ? 'small' : 'medium'}`]: true,
 *         'transition-duration-500': window.matchMedia('(prefers-reduced-motion: reduce)').matches,
 *     },
 * );
 * // Output: 'text-blue-700 collapsed padding-medium transition-duration-500'
 */
export function classMap(...classes: (string | Record<string, boolean>)[]): string {
  const result: string[] = [];
  for (const cls of classes) {
    assert(typeof cls === 'string' || (typeof cls === 'object' && cls !== null), 'classMap() can only receive strings and objects.');
    if (typeof cls === 'string') {
      result.push(escapeRegexChars(cls));
    } else {
      for (const key in cls) {
        if (cls[key]) {
          result.push(escapeRegexChars(key));
        }
      }
    }
  }

  return result.join(' ');
}
/**
 * Extracts the image type from a file path string.
 * @param filePath A string like 'folder/image.svg'
 * @returns The image extension (like 'svg') if valid
 * @throws Error if not a known image type
 */
export function getImageType(filePath: string): ImageType {
  const parts = filePath.trim().toLowerCase().split('/');
  const fileName = parts[parts.length - 1];
  const knownImageTypes: ImageType[] = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'bmp', 'tiff', 'ico'];
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex === -1 || dotIndex === fileName.length - 1) {
    throw new Error(`No valid extension found in path: "${filePath}"`);
  }
  const ext = fileName.slice(dotIndex + 1);
  if (knownImageTypes.includes(ext as ImageType)) {
    return ext as ImageType;
  }
  throw new Error(`Unsupported image type: "${ext}" in path: "${filePath}"`);
}
/**
 * Generates a cryptographically secure RFC4122 version 4 UUID string.
 * Uses `crypto.getRandomValues` to inject randomness into a UUID format template.
 * Returns a 36-character UUID string in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
 * Version is fixed to '4'; variant is one of [8, 9, a, b].
 * @returns {string} A valid version 4 UUID.
 */
export function uuidv4(): string {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (char: string): string => {
    const random = crypto.getRandomValues(new Uint8Array(1))[0];
    const hex = (+char ^ (random & (15 >> (+char / 4)))) & 0xf;
    return hex.toString(16);
  });
}
