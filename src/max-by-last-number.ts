import { extractLastNumber } from './extract-last-number'

export const maxByLastNumber = (prefix: string, items: Array<{ [k: string]: any }> | Array<typeof prefix>, by?: string | number) => {

  let accumulator: number

  for (const curr of items) {

    const [starts, num] = extractLastNumber(!by ? curr : curr[by])

    if (starts === prefix) if (num > accumulator || typeof accumulator !== 'number') accumulator = num

  }

  return typeof accumulator === 'number' ? prefix + accumulator : prefix

}

export default maxByLastNumber