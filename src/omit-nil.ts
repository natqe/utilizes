import omitBy from 'lodash/omitBy'
import isNil from 'lodash/isNil'

export function omitNil<T = any>(object: T) {
  return omitBy(object, isNil) as T
}

export { omitNil as default }