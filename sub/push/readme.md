# push

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.push exported as a Node.js module.


Push safely to array. returning the length of the array - if the item pushed successfully.

**Usage:** `push(object, pathToArray, ...items): number`

```typescript
import { push } from 'utilizes.push'

{ /*example for using with array that inside an object */

    const ob = {}

    push(ob, 'path.to.arr', 'item1', 'item2')
    // Output: 2
    console.log(ob.path.to.arr)
    // Output: ['item1', 'item2']

}
{/*example for using on simple array that attempt to be exist */

    let arr: any[] = null

    push(arr, 'item')
    // Output: undefined
    arr = []

    push(arr, 'item')
    // Output: 1

}
```

