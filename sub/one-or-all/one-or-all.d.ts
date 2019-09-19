export declare function oneOrAll<T>(item: T): T;
export declare function oneOrAll<T>(items: Array<T>): Array<T>;
export declare function oneOrAll<T>(value: []): void;
export declare function oneOrAll<T>(items: [T]): T;
export declare function oneOrAll<T, R>(items: T, callbackfn: (value: T) => R): R;
export declare function oneOrAll<T, R>(items: [T], callbackfn: (value: T) => R): R;
export declare function oneOrAll<T, R>(items: Array<T>, callbackfn: (value: T, index?: number, array?: Array<T>) => R): R;
export declare function oneOrAll<R>(array: any, callbackfn: (value: any, index?: number, array?: Array<any>) => R): R;
export default oneOrAll;
