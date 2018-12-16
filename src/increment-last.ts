import { extractLastNumber } from './extract-last-number'

export const incrementLast = (str: string, defaultNum = 2) => {

  const [prefix, num] = extractLastNumber(str)

  return prefix + (num ? num + 1 : defaultNum)

}

export default incrementLast