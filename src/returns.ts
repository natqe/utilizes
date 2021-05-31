import { over } from 'lodash-es'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export const returns = <T extends ((...args: any[]) => any)>(functions: Array<T>, ...args: ArgumentTypes<T>): Array<ReturnType<T>> => over(...functions)(...args)

export default returns