import { omitBy } from 'lodash-es'
import { isUndefined } from 'lodash-es'

export function omitUndefined<T = any>(object: T) {
  return omitBy(object, isUndefined) as T
}

export { omitUndefined as default }