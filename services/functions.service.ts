export const
  doDeclare = <T extends Function>(func: T, args = []): typeof func => {

    if (typeof func === 'function') func(...args)

    return func

  },
  bind = that => {

    for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(that))) if (typeof that[key] === 'function' && that[key].bind === Function.prototype.bind)
      that[key] = that[key].bind(that)

    return that

  },
  invoke = doDeclare