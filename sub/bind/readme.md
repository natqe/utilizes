# bind

Bind all methods of the given object to the object

**Usage:** `bind<T>(this: T): T`

```typescript
import { bind } from 'utilizes.bind'

class CoolService {

  constructor() {
    bind(this) // binding this via utilizes.bind
  }

  count = 0

  increment() {
    this.count++
  }

}

const coolService = new CoolService()

const increment = coolService.increment

increment() // 'this.count++' point to coolService.count

console.log(coolService.count)
// Output: 1
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- -->