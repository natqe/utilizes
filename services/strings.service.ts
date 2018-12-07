import { chunk, flattenDeep, replace, reduce, find, maxBy, mean, upperFirst, camelCase, includes, map, size } from 'lodash'
import { findBestMatch, BestMatch, Rating } from 'string-similarity'

const CHAR_TYPES = new class CHAR_TYPES {
  readonly lower = 'lower'
  readonly upper = 'upper'
  readonly number = 'number'
}

export const
  chars = (type: keyof typeof CHAR_TYPES = CHAR_TYPES.lower) => {

    const notNum = type !== CHAR_TYPES.number

    return Array(notNum ? 26 : 10).fill(null).map((_, i) => notNum ? String.fromCharCode(i + (type === CHAR_TYPES.lower ? 97 : 65)) : `${i}`)

  },
  charsAll = () => reduce(CHAR_TYPES, (result, type) => result.concat(chars(type)), [] as string[]),
  prefix = (...args) => chunk(flattenDeep(args), 2).map(([fix, str]) => fix || typeof fix === 'number' ? replace(str, /.+/, `${fix}$&`) : str as string).join(''),
  sumBestMatch = (mainStrings: string[], targetStrings: string[]) => {

    const
      allMainRatings = mainStrings.map(str => findBestMatch(str, targetStrings).ratings),
      ratings: Rating[] = targetStrings.map(target => ({
        target,
        rating: mean(allMainRatings.map(rates => find(rates, { target }).rating))
      }))

    return <BestMatch>{
      ratings,
      bestMatch: maxBy(ratings, 'rating')
    }

  },
  extractLastNumber = (str: string): [string, number] => {

    let
      matched = str.match(/\d+$/),
      num = matched && +matched[0] || null

    return [num ? str.slice(0, str.lastIndexOf(`${num}`)) : str, num]

  },
  incrementLast = (str: string, defaultNum = 2) => {

    const [prefix, num] = extractLastNumber(str)

    return prefix + (num ? num + 1 : defaultNum)

  },
  camelClassCase = (word: string) => upperFirst(camelCase(word)),
  maxByLastNumber = (prefix: string, items: Array<{ [k: string]: any }> | Array<typeof prefix>, by?: string | number) => {

    let accumulator: number

    for (const curr of items) {

      const [starts, num] = extractLastNumber(!by ? curr : curr[by])

      if (starts === prefix) if (num > accumulator || typeof accumulator !== 'number') accumulator = num

    }

    if (typeof accumulator === 'number') return prefix + accumulator

  }

export function ensureUnique(toBeUniq: number, items: Array<typeof toBeUniq> | Array<{ [k: string]: any }>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq // public signature
export function ensureUnique(toBeUniq: string, items: Array<typeof toBeUniq> | Array<{ [k: string]: any }>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq // public signature
export function ensureUnique(toBeUniq: number | string, items: Array<typeof toBeUniq> | Array<{ [k: string]: any }>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq // public signature
export function ensureUnique(toBeUniq: number | string, items: Array<typeof toBeUniq> | Array<{ [k: string]: any }>, by?: string | number, caseInsensitive = false): typeof toBeUniq { // more relaxed private implementation signature

  if (!size(items)) return toBeUniq

  let nameToCheck = toBeUniq

  const itemsAsObjects = items as Array<{ [k: string]: typeof toBeUniq }>

  if (by !== undefined && by !== null && itemsAsObjects.every(item => item && typeof item !== 'string' && typeof item !== 'number'))
    items = map(itemsAsObjects, by.toString())

  if (caseInsensitive && typeof toBeUniq !== 'number') {

    items = (<Array<string>>items).map(item => item.toLowerCase())

    nameToCheck = toBeUniq.toString().toLowerCase()

  }

  return !includes(<Array<typeof toBeUniq>>items, nameToCheck) ?
    toBeUniq :
    ensureUnique(typeof toBeUniq !== 'number' ? incrementLast(toBeUniq) : toBeUniq + 1, items, by, caseInsensitive)

}