# suffix

Adding fix to the end of a string only if the string is present.

**Usage:** `suffix(value: string, fix: string): string`

```typescript
import { suffix } from 'utilizes.suffix'

suffix('Mr ', 'john')
// Output: 'Mr john'
suffix('Mr ', null)
// Output: 'Mr '
suffix(null, 'john')
// Output: ''
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.