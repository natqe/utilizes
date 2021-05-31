import { get } from 'lodash-es'
import { isArray } from 'lodash-es'
import { set } from 'lodash-es'

type returnType = ReturnType<typeof Array.prototype.push>

type PropertyName = string | number | symbol

type PropertyPath =PropertyName | ReadonlyArray<PropertyName>

type path = PropertyPath

export function push<T>(arr: Array<T>, item: T): returnType
export function push<T extends object>(object: T, pathToArray: path, ...items): returnType
export function push<T extends object>(object: T, pathToArray: path, ...items): returnType {

  if (!items.length && get(object, 'push') === Array.prototype.push) return (<Array<any>>object).push(pathToArray)

  const array = get(object, pathToArray) || get(set(object, pathToArray, []), pathToArray)

  if (isArray(array)) return array.push(...items)

}

export default push