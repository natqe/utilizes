# delRecursive

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.delRecursive exported as a Node.js module.


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

