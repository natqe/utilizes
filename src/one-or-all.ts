import isArray from 'lodash/isArray'
import size from 'lodash/size'

export function oneOrAll<T, R>(value: T | Array<T>, callbackfn?: (item: T, index?: number, array?: Array<T>) => R): R | Array<R>
export function oneOrAll(array, callbackfn?) {
  if (!isArray(array) || size(array) > 1) return callbackfn ? isArray(array) ? array.map(callbackfn) : callbackfn(array) : array
  else if (size(array) === 1) return callbackfn ? callbackfn(array[0]) : array[0]
}

export default oneOrAll