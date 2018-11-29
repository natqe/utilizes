import { each } from 'lodash'

export const
  doDeclare = <T extends Function>(func: T, args = []): typeof func => {

    if (typeof func === 'function') func(...args)

    return func

  },
  bind = that => each(that, (_, key) => {
    if (typeof that[key] === 'function' && typeof that[key].bind === 'function') that[key] = that[key].bind(that)
  })
