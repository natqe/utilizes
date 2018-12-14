import size from 'lodash/size'
import each from 'lodash/each'
import { iterable } from './_iterable'

export const setRecursive = (on: object | any[] | Function, to: { [k: string]: any }, whenExist = true) => {

  if (size(to)) {

    each(on, (_, key) => {
      if (key in to) on[key] = to[key]
      else if (iterable(on[key])) setRecursive(on[key], to, whenExist)
    })

    if (!whenExist) each(to, (_, key) => on[key] = to[key])

  }

  return on

}

export default setRecursive