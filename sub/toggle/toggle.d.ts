export declare function toggle<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): boolean;
export declare function toggle<T>(object: _.NumericDictionary<T>, path: number): boolean;
export declare function toggle(object: any, path: _.PropertyPath): boolean;
export default toggle;
