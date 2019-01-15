# setEach

Set value to path's in object. value can be a function (with three arguments: currentValue, path, object) that invoked for the specific path.

When value is function, the return value from it is set for the current path. if the return value is undefined, the current path is skipped.

this method is for multiple objects.

**Usage:** `setEach<T extends object>(object: []T, value: any, ...paths: Many<string | number | symbol>[]): []T`

```typescript
import { setEach } from 'set-each'

const obs = [
   {
    prop: 1
   },
   {
     prop: 1
   }
]

setEach(ob, 2, 'prop')
// Output:  [
//    {
//     prop: 2
//    },
//    {
//      prop: 2
//    }
// ]
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.