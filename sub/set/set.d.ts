declare type Many<T> = T | ReadonlyArray<T>;
export declare const set: <T extends object>(object: T, value: any, ...paths: Array<Many<string | number | symbol>>) => T;
export default set;
