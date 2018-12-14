import { rangeWithNames } from '../range-with-names'

test(`Creates an array of objects from given range, each object contain number and his name`, () => expect(rangeWithNames(1, 3)).toEqual([{ number: 1, name: `one` }, { number: 2, name: `two` }]))