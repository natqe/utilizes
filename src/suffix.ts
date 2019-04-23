
export function suffix(value: string, suffix: string): string
export function suffix(value: number, suffix: number): string
export function suffix(value: number, suffix: string): string
export function suffix(value: string, suffix: number): string
export function suffix(value: string | number, suffix: string | number) {

  if (typeof suffix === 'number') suffix = suffix.toString()

  if (typeof value === 'number') value = value.toString()

  if (value === null || value === undefined) value = ``

  if (suffix === null || suffix === undefined || !value) suffix = ``

  return `${value}${suffix}`

}

export default suffix