import { allCombinations } from '../src/all-combinations'

test(
  `The separator (the third argument) is the same as the joinSymbol by default`,
  () => expect(allCombinations(`all-combinations`, `-`)).toEqual([`all`, `combinations`, `all-combinations`, `combinations-all`])
)

test(
  `If you want the separator to be other from the join symbol, specify it in the third argument`,
  () => expect(allCombinations(`all-combinations`, ` `, `-`)).toEqual([`all`, `combinations`, `all combinations`, `combinations all`])
)

test(
  `It can be also without the join symbol, so it will cause result without joining aka array of array of string`,
  () => expect(allCombinations(`all-combinations`, null, `-`)).toEqual([[`all`], [`combinations`], [`all`, `combinations`], [`combinations`, `all`]])
)

test(
  `The target can be also an array`,
  () => expect(allCombinations([`all`, `combinations`], null)).toEqual([[`all`], [`combinations`], [`all`, `combinations`], [`combinations`, `all`]])
)

test(
  `Use it with letters`,
  () => expect(allCombinations(`ab`, ``)).toEqual([`a`, `b`, `ab`, `ba`])
)