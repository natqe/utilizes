# omitNil

Creates an object composed of the own and inherited enumerable string keyed properties of object that doesn't null or undefined.

**Usage:** `omitNil<T>(object: T): T`

```typescript
import { omitNil } from 'omit-nil'

omitNil({
  a: null,
  b: `Some value`,
  c: undefined,
  d: false
})
// Output: { b: 'Some value', d: false }
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.