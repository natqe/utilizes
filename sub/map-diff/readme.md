# mapDiff

Run on each unique object of the lists and bring the same object from the other lists and give them to you, so you can be able to compare them.
If the object does not exist in some list you get an undefined in is place.

Return array of the value that you return from the callback function

**Usage:** `mapDiff<T, R>(lists: Array<Array<T>>, callback: (items: Array<T>, indexes: Array<number>, lists) => R, detectBy?: keyof T): Array<R>`

```typescript
import { mapDiff } from 'utilizes.map-diff'

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
  [listVersionA, listVersionB], // It can be any length of lists
  ([obVersionA, obVersionB]) => {
    if (obVersionA === undefined) return `${obVersionB.name} is newer`
    else if (obVersionB === undefined) return `${obVersionA.name} deleted`
    else if (obVersionB.stars > obVersionA.stars) return `${obVersionA.name} have now ${obVersionB.stars} stars instad of ${obVersionA.stars}`
  },
  `name` // unique unchangeable property to determain that it is the same object in another version
)
// Output:  ["Skye is newer", "Sharon deleted", "Adrien have now 150 stars instad of 100"]
```

<!-- *keywords ["objects", "comparison", "track-objects"] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- -->