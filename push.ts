import get from 'lodash/get'
import isArray from 'lodash/isArray'
import set from 'lodash/set'

export const push = (object, pathToArray, ...items): ReturnType<typeof Array.prototype.push> => {

  if (!items.length && get(object, 'push') === Array.prototype.push) {

    const item = pathToArray

    return object.push(item)

  }

  const array = get(object, pathToArray) || get(set(object, pathToArray, []), pathToArray)

  if (isArray(array)) return array.push(...items)

}

export default push
