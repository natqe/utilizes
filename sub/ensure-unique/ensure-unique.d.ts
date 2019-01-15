export declare function ensureUnique(toBeUniq: number, items: Array<typeof toBeUniq> | Array<{
    [k: string]: any;
}>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq;
export declare function ensureUnique(toBeUniq: string, items: Array<typeof toBeUniq> | Array<{
    [k: string]: any;
}>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq;
export declare function ensureUnique(toBeUniq: number | string, items: Array<typeof toBeUniq> | Array<{
    [k: string]: any;
}>, by?: string | number, caseInsensitive?: boolean): typeof toBeUniq;
export default ensureUnique;
