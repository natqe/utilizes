# prefix

Adding fix to beginning of string only if the string is present.

**Usage:** `prefix(...args: string[]): string`

```typescript
import { prefix } from 'utilizes.prefix'

prefix('Mr ', 'john')
// Output: 'Mr john'
prefix('Mr ', null)
// Output: ''
prefix(null, 'john')
// Output: 'john'
prefix('Mr ', 'john', ' is', ' rich')
// Output: 'Mr john is rich'
prefix('Mr ', 'john', ' is ', undefined)
// Output: 'Mr john'
prefix('Mr ', 'john', null, ' rich')
// Output: 'Mr john rich'
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.