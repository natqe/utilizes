import { toWords } from 'number-to-words'
import { range } from 'lodash-es'

export const rangeWithNames = (start: number, end: number, step?: number) => range(start, end, step).map(number => ({
  number,
  name: toWords(number)
}))

export default rangeWithNames