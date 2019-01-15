export declare const doDeclare: <T, Y, A extends Y[]>(func: (...args: A) => T, args?: A) => (...args: A) => T;
export default doDeclare;
