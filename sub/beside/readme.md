# beside

Put children beside there father

**Usage:** `beside<T>(tree: Array<T>, prop: keyof T): Array<T>`

```typescript
import { beside } from 'utilizes.beside'

const tree = [
  {
    level: 0,
    id: 1,
    children: [
      {
        level: 1,
        id: 2
      }
    ]
  },
  {
    level: 0,
    id: 3,
    children: [
      {
        level: 1,
        id: 4
      }
    ]
  }
]

beside(tree, `children`)
// Output: [{ id:1, ... }, { id:2, ... }, { id:3, ... }, { id:4,... }]
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.