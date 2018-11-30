import { toWords } from 'number-to-words'
import { range } from 'lodash'

export const
  rangeWithNames = (start: number, end: number, step?: number) => range(start, end, step).map(number => ({
    number,
    name: toWords(number)
  }))

console.log(rangeWithNames(3, 5))