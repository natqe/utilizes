import findLastIndex from 'lodash/findLastIndex'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import set from 'lodash/set'

type PropertyName = string | number | symbol;

type PropertyPath = PropertyName | ReadonlyArray<PropertyName>

type falsy = false | 0 | '' | null | undefined

export function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: [[I]]): I | (I extends falsy ? true : false)
export function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values:[Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I
export function toggle<T, I = true | false>(object: { [index: number]: T } | { [index: string]: T }, path: number, ...values: [[I]]): I | (I extends falsy ? true : false)
export function toggle<T, I = true | false>(object: { [index: number]: T } | { [index: string]: T }, path: number, ...values: [Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I
export function toggle<I = true | false>(object, path: PropertyPath, ...values: [[I]]): I | (I extends falsy ? true : false)
export function toggle<I = true | false>(object, path: PropertyPath, ...values: [Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I
export function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: [I]): I | (I extends falsy ? true : false)
export function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I
export function toggle<T, I = true | false>(object: { [index: number]: T } | { [index: string]: T }, path: number, ...values: [I]): I | (I extends falsy ? true : false)
export function toggle<T, I = true | false>(object: { [index: number]: T } | { [index: string]: T }, path: number, ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I
export function toggle<I = true | false>(object, path: PropertyPath, ...values: [I]): I | (I extends falsy ? true : false)
export function toggle<I = true | false>(object, path: PropertyPath, ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I
export function toggle<TObject extends object, TKey extends keyof TObject, T, I = true | false>(
  object: { [index: number]: T } | { [index: string]: T } | TObject | any,
  path: PropertyPath | number | TKey | [TKey],
  ...values: Array<I> | [I] | [Array<I>]): typeof values['length'] extends 0 ? boolean : I {

  let valuesToWorkWith: Array<boolean | I>

  if (!values.length) valuesToWorkWith = [true, false]
  else if (values.length === 1) {

    if (Array.isArray(values[0])) return toggle(object, path, ...values[0] as any)

    valuesToWorkWith = [values[0], !values[0]]

  }
  //@ts-ignore
  else valuesToWorkWith = [...values]

  const
    current: I = get(object, path),
    nextIndex = findLastIndex(valuesToWorkWith, value => isEqual(value, current)) + 1

  set(object, path, valuesToWorkWith[nextIndex in valuesToWorkWith ? nextIndex : 0])

  return get(object, path)

}

export default toggle