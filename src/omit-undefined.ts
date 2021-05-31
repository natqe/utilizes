import omitBy from 'lodash-es/omitBy'
import isUndefined from 'lodash-es/isUndefined'

export function omitUndefined<T = any>(object: T) {
  return omitBy(object, isUndefined) as T
}

export { omitUndefined as default }