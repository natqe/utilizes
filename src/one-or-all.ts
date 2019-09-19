import isArray from 'lodash/isArray'
import size from 'lodash/size'

export function oneOrAll<T>(item: T): T
export function oneOrAll<T>(items: Array<T>): Array<T>
export function oneOrAll<T>(value: []): void
export function oneOrAll<T>(items: [T]): T
export function oneOrAll<T, R>(items: T, callbackfn: (value: T) => R): R
export function oneOrAll<T, R>(items: [T], callbackfn: (value: T) => R): R
export function oneOrAll<T, R>(items: Array<T>, callbackfn: (value: T, index?: number, array?: Array<T>) => R): R
export function oneOrAll<R>(array, callbackfn: (value, index?: number, array?: Array<any>) => R): R
export function oneOrAll(array, callbackfn?) {
  if (!isArray(array) || size(array) > 1) return callbackfn ? isArray(array) ? array.map(callbackfn) : callbackfn(array) : array
  else if (size(array) === 1) return callbackfn ? callbackfn(array[0]) : array[0]
}

export default oneOrAll