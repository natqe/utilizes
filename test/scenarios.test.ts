import { scenarios } from '../src/scenarios'

test(`Invoke function multiple times with other arguments, and get the results.`, () => expect(scenarios((a: number, b: number) => a + b, [1, 2], [3, 4])).toEqual([3, 7]))