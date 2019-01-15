# delRecursive

Delete recursive properties of object

**Usage:** `delRecursive<T extends Object>(ob: T, toDelete: Array): T`

```typescript
import { delRecursive } from 'del-recursive'

const person = {
  id: 1,
  name: 'john',
  metadata: {
    personId: 1,
    goodParson: true,
    family: {
      sister: 'lola'
    }
  }
}

const propsToDelete = ['id', 'personId', 'sister']

delRecursive(person, propsToDelete)
// Output:  {
//   name: 'john',
//   metadata: {
//     goodParson: true,
//     family: { }
//   }
// }
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- end -->