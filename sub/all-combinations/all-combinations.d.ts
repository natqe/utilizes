export declare function allCombinations(target: Array<string>, joinWith?: string): typeof joinWith extends string ? Array<string> : Array<Array<string>>;
export declare function allCombinations(target: string, joinWith?: string, separator?: string): typeof joinWith extends string ? Array<string> : Array<Array<string>>;
export default allCombinations;
