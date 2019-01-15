# chars

Return characters of the english language

**Usage:** `chars(type?: "number" | "lower" | "upper"): Array<string>`

```typescript
import { chars } from 'utilizes.chars'

chars() // same as chars('lower')
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
chars('upper')
// Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
chars('number')
// Output: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.