# toEnum

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.toEnum exported as a Node.js module.


Convert given object to enum like

**Usage:** `toEnum(ob: { [key: string]: any }): { [key: string]: any }`

```typescript
import { toEnum } from 'to-enum'

toEnum({ 1: 'good' })
// Output: { '1': 'good', good: '1' }
```

