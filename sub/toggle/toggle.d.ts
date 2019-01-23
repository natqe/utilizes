declare type PropertyName = string | number | symbol;
declare type PropertyPath = PropertyName | ReadonlyArray<PropertyName>;
export declare function toggle<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): boolean;
export declare function toggle<T>(object: {
    [index: number]: T;
} | {
    [index: string]: T;
}, path: number): boolean;
export declare function toggle(object: any, path: PropertyPath): boolean;
export default toggle;
