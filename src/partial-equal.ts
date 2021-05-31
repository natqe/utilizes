import { get } from 'lodash-es'
import { isEqual } from 'lodash-es'
import { isObjectLike } from 'lodash-es'

export function partialEqual<T>(input1: T, input2: T, ...pathes: Array<keyof T>): boolean
export function partialEqual<T>(input1: T, input2, ...pathes: Array<keyof T>): boolean
export function partialEqual<T>(input1: T, input2, ...pathes: Array<string>): boolean
export function partialEqual<T>(input1: T, input2: T, ...pathes: Array<string>): boolean
export function partialEqual(input1, input2, ...pathes): boolean {
  const initialCheck = isEqual(input1, input2)
  if (!isObjectLike(input1) || !isObjectLike(input2) || initialCheck) return initialCheck
  else if (!pathes.length) return Object.keys(input1).some(key => isEqual(input1[key], input2[key]))
  else return !pathes.map(path => isEqual(get(input1, path), get(input2, path))).includes(false)
}

export default partialEqual