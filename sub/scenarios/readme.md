# scenarios

Invoke function multiple times with other arguments, and get the results.

**Usage:** `scenarios(func: (...args) => any, ...funcArgs: Array<typeof args>): Array<ReturnType<typeof func>>`

```typescript
import { scenarios } from 'utilizes.scenarios'

const add = (a, b) => a + b

scenarios(add, [1, 2], [3, 4])
// Output: [3, 7]
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.