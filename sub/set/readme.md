# set

Set value to path's in object. value can be a function (with three arguments: currentValue, path, object) that invoked for the specific path.

When value is function, the return value from it is set for the current path. if the return value is undefined, the current path is skipped.

**Usage:** `set<T extends object>(object: T, value: any, ...paths: Many<string | number | symbol>[]): T`

```typescript
import { set } from 'utilizes.set'

{/*path can br one or more paths*/
  const ob = {
    prop: 1
  }

  set(ob, 2, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 2,
  //   0: [2],
  // }
}

{/*value via function*/
  const ob = {
    prop: 1
  }

  set(ob, (currentValue) => currentValue === 1 ? 2 : 1, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 1,
  //   0: [1]
  // }
}
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- end -->