# setRecursive

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.setRecursive exported as a Node.js module.


Set recursive properties on object

**Usage:** `setRecursive<T extends Object>(on: T, to: { [key: string]: any }, whenExist?: boolean): T`

```typescript
import { setRecursive } from 'set-recursive'

const person = {
  id: 1,
  name: 'john',
  metadata: {
    personId: 1,
    goodParson: true,
    family: {
      personId: 1,
      sister: 'lola'
    }
  }
}

const propsToSet = { id: 2, personId: 2 }

setRecursive(person, propsToSet)
// Output: {
//   id: 2,
//   name: 'john',
//   metadata: {
//     personId: 2,
//     goodParson: true,
//     family: {
//       personId: 2,
//       sister: 'lola'
//     }
//   }
// }
setRecursive(person, propsToSet, false) // This will set the given properties even if they not exist initially
// Output: {
//   id: 2,
//   personId: 2,
//   name: 'john',
//   metadata: {
//     personId: 2,
//     id: 2,
//     goodParson: true,
//     family: {
//       personId: 2,
//       id: 2,
//       sister: 'lola'
//     }
//   }
```

