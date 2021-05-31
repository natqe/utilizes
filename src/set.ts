import { each, get, set as _set } from 'lodash-es'

type Many<T> = T | ReadonlyArray<T>

export const set = <T extends object>(object: T, value: any, ...paths: Array<Many<string | number | symbol>>) => {

  each(paths, path => _set(object, path, typeof value !== 'function' ? value : value(get(object, path), path, object)))

  return object

}

export default set