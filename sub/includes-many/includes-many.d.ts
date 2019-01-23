export declare const includesMany: <T>(collection: ArrayLike<T> | {
    [index: string]: T;
} | {
    [index: number]: T;
}, ...targets: T[]) => boolean;
export default includesMany;
