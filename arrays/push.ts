import set from 'lodash/set'
import isArray from 'lodash/isArray'
import get from 'lodash/get'

export const push = (object, pathToArray, ...items): ReturnType<typeof Array.prototype.push> => {

  if (!items.length && object.push === Array.prototype.push) {

    const item = pathToArray

    return object.push(item)

  }

  const array = get(object, pathToArray) || get(set(object, pathToArray, []), pathToArray)

  if (isArray(array)) return array.push(...items)

}

export default push
