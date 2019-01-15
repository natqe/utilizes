# maxByLastNumber

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.maxByLastNumber exported as a Node.js module.


Check array of items and return the item with the highest suffix number. if non is found return undefined.

**Usage:** `maxByLastNumber(prefix: string, items: { [k: string]: any; }[] | string[], by?: string | number): string`

```typescript
import { maxByLastNumber } from 'max-by-last-number'

maxByLastNumber('name', ['name1', 'name2', 'otherName'])
// Output: "name2"
maxByLastNumber('dexter', [{ nickname: 'dexter3' }, { nickname: 'dexter2' }], 'nickname')
// Output: "dexter3"
```

