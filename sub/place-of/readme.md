# placeOf

Return the first place of a given input in a given value.

**Usage:** `placeOf<T>(target: string | Array<T>, searchValue: string | T, startSearchFrom?: number): number`

```typescript
import { placeOf } from 'place-of'

lastPlaceOf('abca', 'a')
// Output: 1
lastPlaceOf([1,2,3,1], 1)
// Output: 1
lastPlaceOf([1,2,3,4], 6)
// Output: 0
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.