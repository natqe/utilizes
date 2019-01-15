# returns

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.returns exported as a Node.js module.


Invoke set of functions with same arguments at ones, and get the results.

**Usage:** `returns<T>(functions: Array<T>, ...args: Array): Array<ReturnType<T>>`

```typescript
import { returns } from 'utilizes.returns'

returns([(a, b) => a + b, (a, b)=> a - b], 2,1)
// Output: [3,1]
```

