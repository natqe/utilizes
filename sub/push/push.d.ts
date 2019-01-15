declare type returnType = ReturnType<typeof Array.prototype.push>;
declare type path = _.PropertyPath;
export declare function push<T>(arr: Array<T>, item: T): returnType;
export declare function push<T extends object>(object: T, pathToArray: path, ...items: any[]): returnType;
export default push;
