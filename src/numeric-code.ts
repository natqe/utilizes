import sampleSize from 'lodash/sampleSize'
import times from 'lodash/times'
import { chars } from './chars'

export const numericCode = (size = 6) => {

  const
    createNumbers = () => chars(`number`),
    numbers = createNumbers()

  times(Math.floor(size / numbers.length), () => numbers.push(...createNumbers()))

  return sampleSize(numbers, size).join(``)

}

export { numericCode as default }