# returns

Invoke set of functions with same arguments at ones, and get the results.

**Usage:** `returns<F>(functions: Array<F>, ...args: ArgumentsType<F>): Array<ReturnType<F>>`

```typescript
import { returns } from 'utilizes.returns'

const
    add = (a, b) => a + b
    subtract = (a, b)=> a - b

returns([add, subtract], 2,1)
// Output: [3,1]
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.