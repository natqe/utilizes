# doDeclare

Invoke your function when you declare it.

aliases: "invoke"

**Usage:** `doDeclare(func: Function, args?: Array): Function`

```typescript
import { doDeclare } from 'do-declare'

const func = doDeclare(()=> console.log(123))
// Output: 123
func()
// Output: 123
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- end -->