export const doDeclare = <T extends Function>(func: T, args = []): typeof func => {

  if (typeof func === 'function') func(...args)

  return func

}

export default doDeclare