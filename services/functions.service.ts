import { bindAll } from 'lodash'

export const
  doDeclare = <T extends Function>(func: T, args = []): typeof func => {

    if (typeof func === 'function') func(...args)

    return func

  },
  bind = that => bindAll(that, Object.getOwnPropertyNames(Object.getPrototypeOf(that))),
  invoke = doDeclare