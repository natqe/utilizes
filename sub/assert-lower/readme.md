# assertLower

Assert between two or more strings as they were writing in lower case

**Usage:** `assertLower(...strings): boolean`

```typescript
import { assertLower } from 'utilizes/camel-class-case'

assertLower(`aBc`, String(`AbC`), `ABC`)
// Output: true
assertLower(`abc`, `ABC`)
// Output: true
```

<!-- *keywords ["lower-case", "case-sensitive"] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.