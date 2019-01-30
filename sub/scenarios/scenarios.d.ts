declare type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export declare const scenarios: <I, T extends I[], R, F extends (...args: T) => R>(func: F, ...args: ArgumentTypes<F>[]) => R[];
export default scenarios;
