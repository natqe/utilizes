# omitUndefined

Creates an object composed of the own and inherited enumerable string keyed properties of object that doesn't undefined.

**Usage:** `omitUndefined<T>(object: T): T`

```typescript
import { omitUndefined } from 'omit-undefined'

omitUndefined({
  a: null,
  b: `Some value`,
  c: undefined,
  d: false
})
// Output: { a: null, b: `Some value`,  d: false }
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.