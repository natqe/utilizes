export const someTruthy = <T, Y>(array: T[], callbackfn: (value: typeof array[0], index: number, list: typeof array) => Y, reverse = false) => {

  const
    lastIndex = array.length - 1,
    endIndex = !reverse ? lastIndex : 0

  for (let i = 0;i < array.length;++i) {

    const
      index = !reverse ? i : lastIndex - i,
      result = callbackfn(array[index], index, array)

    if (result || i === endIndex) return result

  }

}

export default someTruthy