export function allCombinations(target: Array<string>, joinWith?: string): typeof joinWith extends string ? Array<string> : Array<Array<string>>
export function allCombinations(target: string, joinWith?: string, separator?: string): typeof joinWith extends string ? Array<string> : Array<Array<string>>
export function allCombinations(target: string | Array<string>, joinSymbol?: string, separator = joinSymbol || ``): typeof joinSymbol extends string ? Array<string> : Array<Array<string>> {

  const
    arr = Array.isArray(target) ? target : target.split(separator),
    result = []

  for (let number = 1;number <= arr.length;++number) {

    const
      combinations: Array<Array<string>> = [],
      findCombinations = (token: Array<string>, list: Array<string>) => {

        if (token.length < number) for (let i = 0;i < list.length;++i) findCombinations(token.concat(list[i]), list.slice(0, i).concat(list.slice(i + 1)))
        else combinations.push(token)

        return combinations

      }

    result.push(...findCombinations([], arr))

  }

  return typeof joinSymbol === `string` ? result.map(list => list.join(joinSymbol)) : result

}

export default allCombinations