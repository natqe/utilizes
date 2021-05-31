import size from 'lodash-es/size'
import map from 'lodash-es/map'
import includes from 'lodash-es/includes'
import { incrementLast } from './increment-last'

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

export default ensureUnique