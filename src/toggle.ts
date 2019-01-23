import get from 'lodash/get'
import set from 'lodash/set'

interface NumericDictionary<T> {
  [index: number]: T;
}

type PropertyName = string | number | symbol;

type PropertyPath =PropertyName | ReadonlyArray<PropertyName>


export function toggle<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): boolean
export function toggle<T>(object: NumericDictionary<T>, path: number): boolean
export function toggle(object, path: PropertyPath): boolean
export function toggle(object, path: PropertyPath) {

  set(object, path, !get(object, path))

 return !!get(object, path)

}

export default toggle