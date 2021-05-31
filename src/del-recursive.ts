import size from 'lodash-es/size'
import each from 'lodash-es/each'
import includes from 'lodash-es/includes'
import { iterable } from './_iterable'

export const delRecursive = (on: object | any[] | Function, to: any[]) => {

  if (size(to)) each(on, (_, key) => {
    if (includes(to, key)) delete on[key]
    else if (iterable(on[key])) delRecursive(on[key], to)
  })

  return on

}

export default delRecursive