import get from 'lodash/get'
import isArray from 'lodash/isArray'
import set from 'lodash/set'

type returnType = ReturnType<typeof Array.prototype.push>

type path = _.PropertyPath

export function push<T>(arr: Array<T>, item: T): returnType
export function push<T extends object>(object: T, pathToArray: path, ...items): returnType
export function push<T extends object>(object: T, pathToArray: path, ...items): returnType {

  if (!items.length && get(object, 'push') === Array.prototype.push) return (<Array<any>>object).push(pathToArray)

  const array = get(object, pathToArray) || get(set(object, pathToArray, []), pathToArray)

  if (isArray(array)) return array.push(...items)

}

export default push