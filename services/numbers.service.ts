import { toWords } from 'number-to-words'
import { range } from 'lodash'

export const
  SUBTRACT_MIN_MUM = .000000000000002,
  rangeWithNames = (start: number, end: number, step?: number) => range(start, end, step).map(number => ({
    number,
    name: toWords(number)
  }))