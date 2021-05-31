import { isArray } from 'lodash-es'
import { size } from 'lodash-es'

export function oneOrAll<T, R>(value: T | Array<T>, callbackfn: (item: T, index?: number, array?: Array<T>) => R): R | Array<R>
export function oneOrAll<T>(value: T | Array<T>): T | Array<T>
export function oneOrAll(array, callbackfn?) {
  if (!isArray(array) || size(array) > 1) return callbackfn ? isArray(array) ? array.map(callbackfn) : callbackfn(array) : array
  else if (size(array) === 1) return callbackfn ? callbackfn(array[0]) : array[0]
}

export default oneOrAll