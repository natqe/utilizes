import isArray from 'lodash/isArray'
import size from 'lodash/size'

type Many<T> = T | ReadonlyArray<T>

export const oneOrAll = <T>(array: Many<T>): Many<T> => {
  if (!isArray(array) || size(array) > 1) return array
  else if (size(array) === 1) return array[0]
}

export default oneOrAll