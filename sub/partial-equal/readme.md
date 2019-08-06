# partialEqual

Check if partial of object equal to another object. when pathes supplies, check the value of the pathes in the object if they equal

**Usage:** `partialEqual<T>(input1: T, input2: T, ...pathes): boolean`

```typescript
import { partialEqual } from 'partial-equal'

partialEqual({ a: 1, b: 2 }, { a: 1, b: 1 })
// Output: true
partialEqual({ a: 2, b: 2 }, { a: 1, b: 2 }, `a`, `b`)
// Output: false
partialEqual({ a: 2, b: 2 }, { a: 1, b: 2 }, `b`))
// Output: true
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.