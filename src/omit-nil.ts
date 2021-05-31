import { omitBy } from 'lodash-es'
import { isNil } from 'lodash-es'

export function omitNil<T = any>(object: T) {
  return omitBy(object, isNil) as T
}

export { omitNil as default }