# someTruthy

Checks if the callback returns truthy for any element of the array. Iteration is stopped once the callback returns truthy

Return the truthy value or the last falsy value if none of the iteration returns truthy

**Usage:** `someTruthy<T, Y>(array: T[], callback: (value: T, index: number, array: T[]) => Y, reverse?: boolean): Y`

```typescript
import { someTruthy } from 'some-truthy'

someTruthy([0, 1, 2], num => num) // Return the first truthy value it find
// Output: 1
someTruthy([0, false, undefined, null], falsy => falsy) // Return the last falsy value it find if non of the given items is truthy
// Output: null
someTruthy([0, 1, 2], num => num, true) // The last argument is for iterates from right to left instead of left to right
// Output: 2
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- -->