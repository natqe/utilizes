export declare function partialEqual<T>(input1: T, input2: T, ...pathes: Array<keyof T>): boolean;
export declare function partialEqual<T>(input1: T, input2: any, ...pathes: Array<keyof T>): boolean;
export declare function partialEqual<T>(input1: T, input2: any, ...pathes: Array<string>): boolean;
export declare function partialEqual<T>(input1: T, input2: T, ...pathes: Array<string>): boolean;
export default partialEqual;
