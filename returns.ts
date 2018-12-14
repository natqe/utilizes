import castArray from 'lodash/castArray'
import { oneOrAll } from './one-or-all'

export const returns = <T extends ((...args: any[]) => any)>(functions: Array<T>, ...args): Array<ReturnType<T>> => {

  if (functions.length && !functions.some(arg => typeof arg !== 'function'))
    var result = functions.map(func => func(...args))

  if (result) return result

}

export default returns