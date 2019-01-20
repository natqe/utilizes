# includesMany

Return false when one or more of the given values not include in the array, else return true

**Usage:** `includesMany<T>(collection: ArrayLike<T>, ...targets: Array<T>): boolean`

```typescript
import { includesMany } from 'includes-many'

includesMany([`value1`], `value1`, `value2`)
// Output: false

includesMany([`value1`, `value2`], `value1`, `value2`)
// Output: true
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.