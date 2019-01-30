type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export const scenarios = <I, T extends Array<I>, R, F extends (...args: T) => R>(func: F, ...args: Array<ArgumentTypes<typeof func>>): Array<R> => args.map(value => func(...value))

export default scenarios