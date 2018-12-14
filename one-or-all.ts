import isArray from 'lodash/isArray'
import size from 'lodash/size'

export const oneOrAll = <T>(array: _.Many<T>): _.Many<T> => {
  if (!isArray(array) || size(array) > 1) return array
  else if (size(array) === 1) return array[0]
}

export default oneOrAll