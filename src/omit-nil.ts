import omitBy from 'lodash-es/omitBy'
import isNil from 'lodash-es/isNil'

export function omitNil<T = any>(object: T) {
  return omitBy(object, isNil) as T
}

export { omitNil as default }