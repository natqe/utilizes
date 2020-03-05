import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

export function omitUndefined<T = any>(object: T) {
  return omitBy(object, isUndefined) as T
}

export { omitUndefined as default }