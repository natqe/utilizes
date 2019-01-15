# ensureUnique

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.ensureUnique exported as a Node.js module.


Return safety unique string from bunch of items

**Usage:** `ensureUnique(toBeUniq: string | number, items: Array<typeof toBeUniq> | Array<{ [key: string]: any }>, by?: string | number): typeof toBeUniq`

```typescript
import { ensureUnique } from 'utilizes.ensure-unique'

ensureUnique('name', ['name', 'otherName', 'oneMoreName']) // Return the str with number in the end when the array have already the str, first time the number is 2.
// Output: "name2"
ensureUnique('dexter', [{ nickname: 'dexter' }, { nickname: 'dexter2' }], 'nickname') // The third argument is a prop to check when items are objects. default is null.
// Output: "dexter3"
ensureUnique(1, [1, 3]) // work with numbers
// Output: 2
ensureUnique('name', ['name', 'Name2'], null, true) // the fourth argument is for case insensitive checking. default is false.
// Output: "name3"
```

