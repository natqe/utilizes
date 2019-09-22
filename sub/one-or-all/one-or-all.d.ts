export declare function oneOrAll<T, R>(value: T | Array<T>, callbackfn: (item: T, index?: number, array?: Array<T>) => R): R | Array<R>;
export declare function oneOrAll<T>(value: T | Array<T>): T | Array<T>;
export default oneOrAll;
