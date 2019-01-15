# sumBestMatch

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.sumBestMatch exported as a Node.js module.


get sum of best match for the given strings

**Usage:** `sumBestMatch(mainStrings: string[], targetStrings: string[]): { bestMatch: { target: string, rating: number }, ratings: Array<{ target: string, rating: number }> }`

```typescript
import { sumBestMatch } from 'sum-best-match'

sumBestMatch(['one', 'one two', 'one two three'], ['one', 'two', 'three'])
// Output: {
//     bestMatch: { target: 'one', rating: 0.6888888888888888 },
//     ratings: [
//       { target: 'one', rating: 0.6888888888888888 },
//       { target: 'two', rating: 0.35555555555555557 },
//       { target: 'three', rating: 0.2222222222222222 }
//     ]
//   }
```

