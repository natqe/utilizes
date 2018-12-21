import { sumBestMatch } from '../src/sum-best-match'

test(`Return sum of best match for the given strings`, () => expect(sumBestMatch(['one', 'one two', 'one two three'], ['one', 'two', 'three'])).toEqual({
  "bestMatch": { "rating": 0.6349206349206349, "target": "one" },
  "ratings": [
    { "rating": 0.6349206349206349, "target": "one" },
    { "rating": 0.30158730158730157, "target": "two" },
    { "rating": 0.19047619047619047, "target": "three" }]
}))