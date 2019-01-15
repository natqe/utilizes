# extractLastNumber

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.extractLastNumber exported as a Node.js module.


Extract last number from given string. return array with the string without the number, and the number himself

**Usage:** `extractLastNumber(str: string): [string, number]`

```typescript
import { extractLastNumber } from 'extract-last-number'

extractLastNumber('name1')
// Output: ["name", 1]
extractLastNumber('name')
// Output: ["name", null]
extractLastNumber('name01')
// Output: ["name0", 1]
```

