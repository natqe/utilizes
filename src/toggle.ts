import get from 'lodash/get'
import set from 'lodash/set'

export function toggle<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): boolean
export function toggle<T>(object: _.NumericDictionary<T>, path: number): boolean
export function toggle(object, path: _.PropertyPath): boolean
export function toggle(object, path: _.PropertyPath) {

  set(object, path, !get(object, path))

 return !!get(object, path)

}

export default toggle