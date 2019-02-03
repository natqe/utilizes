declare type PropertyName = string | number | symbol;
declare type PropertyPath = PropertyName | ReadonlyArray<PropertyName>;
declare type falsy = false | 0 | '' | null | undefined;
export declare function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: [[I]]): I | boolean;
export declare function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: [Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I;
export declare function toggle<T, I = true | false>(object: {
    [index: number]: T;
} | {
    [index: string]: T;
}, path: number, ...values: [[I]]): I | boolean;
export declare function toggle<T, I = true | false>(object: {
    [index: number]: T;
} | {
    [index: string]: T;
}, path: number, ...values: [Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I;
export declare function toggle<I = true | false>(object: any, path: PropertyPath, ...values: [[I]]): I | boolean;
export declare function toggle<I = true | false>(object: any, path: PropertyPath, ...values: [Array<I>]): typeof values[0]['length'] extends 0 ? boolean : I;
export declare function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: [I]): I | (typeof values[0] extends falsy ? true : false);
export declare function toggle<TObject extends object, TKey extends keyof TObject, I = true | false>(object: TObject, path: TKey | [TKey], ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I;
export declare function toggle<T, I = true | false>(object: {
    [index: number]: T;
} | {
    [index: string]: T;
}, path: number, ...values: [I]): I | (typeof values[0] extends falsy ? true : false);
export declare function toggle<T, I = true | false>(object: {
    [index: number]: T;
} | {
    [index: string]: T;
}, path: number, ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I;
export declare function toggle<I = true | false>(object: any, path: PropertyPath, ...values: [I]): I | (typeof values[0] extends falsy ? true : false);
export declare function toggle<I = true | false>(object: any, path: PropertyPath, ...values: Array<I>): typeof values['length'] extends 0 ? boolean : I;
export default toggle;
