# incrementLast

Return string with the number in the end incremented

**Usage:** `incrementLast(str: string, defaultNum?: number): string`

```typescript
import { incrementLast } from 'increment-last'

incrementLast('name1')
// Output: "name2"
incrementLast('name01')
// Output: "name02"
incrementLast('name') // When the given string does not end with number, the default number is 2
// Output: "name2"
incrementLast('name', 5) // The second argument is the default number to use when the given string does not end with number
// Output: "name5"
incrementLast('name1', 5) // defaultNum has no effect in this case
// Output: "name2"
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- end -->