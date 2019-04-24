declare type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export declare const returns: <T extends (...args: any[]) => any>(functions: T[], ...args: ArgumentTypes<T>) => ReturnType<T>[];
export default returns;
