export const placeOf = <T>(target: string | Array<T>, searchValue: typeof target extends string ? string : T, startSearchFrom = 1) =>
  (target as string).indexOf(searchValue as any, --startSearchFrom) + 1

export default placeOf