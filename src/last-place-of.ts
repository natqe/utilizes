export const lastPlaceOf = <T>(target: string | Array<T>, searchValue: typeof target extends string ? string : T, startSearchFrom = target.length) =>
  (target as string).lastIndexOf(searchValue as any, --startSearchFrom) + 1

export default lastPlaceOf