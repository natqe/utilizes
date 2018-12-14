export const doDeclare = <T, Y, A extends Array<Y>>(func: (...args: A) => T, args: A = [] as A): typeof func => {

  if (typeof func === 'function' && !/^\s*class\s+/.test(func.toString())) func(...args)

  return func

}

export default doDeclare