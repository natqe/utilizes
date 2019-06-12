/**
 * @description Get suffix from string
 * @param {string} subject subject The string to get the suffix from
 * @param {(string | RegExp)} splitter splitter From where the suffix should be start from
 * @returns {string} The suffix that found
 */
export function suffixFrom(subject: string, splitter: RegExp): string
export function suffixFrom(subject: string, splitter: string): string
export function suffixFrom(subject: string, splitter: string | RegExp): string {
  return subject.split(splitter).pop()
}