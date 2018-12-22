import get from 'lodash/get'
import isArray from 'lodash/isArray'
import set from 'lodash/set'

export function push<T>(arr: Array<T>, item: T): ReturnType<typeof Array.prototype.push>
export function push<T extends object>(object: T, pathToArray: _.PropertyPath, ...items): ReturnType<typeof Array.prototype.push>
export function push<T extends object>(object: T, pathToArray: _.PropertyPath, ...items): ReturnType<typeof Array.prototype.push> {

  if (!items.length && get(object, 'push') === Array.prototype.push) return (<Array<any>>object).push(pathToArray)

  const array = get(object, pathToArray) || get(set(object, pathToArray, []), pathToArray)

  if (isArray(array)) return array.push(...items)

}

export default push