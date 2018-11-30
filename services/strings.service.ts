import { chunk, flattenDeep, replace, reduce, find, maxBy, mean, some, max, upperFirst, camelCase, includes } from 'lodash'
import { findBestMatch, BestMatch, Rating } from 'string-similarity'

const CHAR_TYPES = new class CHAR_TYPES {
  readonly lower = 'lower'
  readonly upper = 'upper'
  readonly number = 'number'
}

export const
  chars = (type: 'lower' | 'upper' | 'number' = CHAR_TYPES.lower) => {

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
  camelClassCase = (word: string) => upperFirst(camelCase(word))


export function ensureUnique(name: number, items: ({ [k: string]: any } | typeof name)[], by?: string | number): typeof name // public signature
export function ensureUnique(name: string, items: ({ [k: string]: any } | typeof name)[], by?: string | number): typeof name // public signature
export function ensureUnique(name: number | string, items: ({ [k: string]: any } | typeof name)[], by?: string | number): typeof name // public signature
export function ensureUnique(name: number | string, items: ({ [k: string]: any } | typeof name)[], by?: string | number): typeof name { // more relaxed private implementation signature
  if (!by ? !includes(items, name) : !some(items, { [by]: name })) return name
  else if (typeof name === 'string') return ensureUnique(incrementLast(name), items, by)
  else if (typeof name === 'number') return (!by ? max(items) : maxBy(items, by)[by]) + 1
}

console.log(prefix('Mr ', 'john', null, ' reach'))