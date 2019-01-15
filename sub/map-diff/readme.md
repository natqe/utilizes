# mapDiff

Run on each unique object of a lists and fetch the same object from the other lists and give you them to you, for you to be able to compare between them.
if the object will not exist on some list you get an undefined on he's place.

return array of the value that you return from the callback

**Usage:** `mapDiff<T, R>(lists: Array<Array<T>>, callback: (items: Array<T>, indexes: Array<number>, lists) => R, detectBy?: keyof T): Array<R>`

```typescript
import { mapDiff } from 'map-diff'

const
  listVersionA = [
    {
      name: `Sharon`,
      stars: 100
    },
    {
      name: `Adrien`,
      stars: 100
    }
  ],
  listVersionB = [
    {
      name: `Skye`,
      stars: 100
    },
    {
      name: `Adrien`,
      stars: 150
    }
  ]

mapDiff(
  [listVersionA, listVersionB], // it can be any length of lists
  ([obVersionA, obVersionB]) => {
    if (obVersionA === undefined) return `${obVersionB.name} he's newer`
    else if (obVersionB === undefined) return `${obVersionA.name} deleted`
    else if (obVersionB.stars > obVersionA.stars) return `${obVersionA.name} have now ${obVersionB.stars} stars over ${obVersionA.stars}`
  },
  `name` // unique unchangeable property to determain that it same object in other version
)
// Output:  ["Skye he's newer", "Sharon deleted", "Adrien have now 150 instad of 100"]
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.

<!-- -->