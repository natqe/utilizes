import { sampleSize } from 'lodash-es'
import { times } from 'lodash-es'
import { chars } from './chars'

export const numericCode = (size = 6) => {

  const
    createNumbers = () => chars(`number`),
    numbers = createNumbers()

  times(Math.floor(size / numbers.length), () => numbers.push(...createNumbers()))

  return sampleSize(numbers, size).join(``)

}

export { numericCode as default }