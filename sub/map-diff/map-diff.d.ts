export declare const mapDiff: <T, R>(lists: T[][], callback: (items: T[], indexes: number[], lists: T[][]) => R, detectBy?: keyof T) => R[];
export default mapDiff;
