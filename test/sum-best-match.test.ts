import { sumBestMatch } from '../src/sum-best-match'

test(`Return sum of best match for the given strings`, () => expect(sumBestMatch(['one', 'one two', 'one two three'], ['one', 'two', 'three'])).toEqual({
  bestMatch: { target: 'one', rating: 0.6888888888888888 },
  ratings: [
    { target: 'one', rating: 0.6888888888888888 },
    { target: 'two', rating: 0.35555555555555557 },
    { target: 'three', rating: 0.2222222222222222 }
  ]
}))