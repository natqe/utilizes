export interface Rating {
    target: string;
    rating: number;
}
export interface BestMatch {
    ratings: Rating[];
    bestMatch: Rating;
}
export declare const sumBestMatch: (mainStrings: string[], targetStrings: string[]) => BestMatch;
export default sumBestMatch;
