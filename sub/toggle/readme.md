# toggle

Toggle property truthines. if the value is falsy set it to true, otherwise set it to false.

The third parameter is the values to toggle between. default to "[true, false]".

Return the toggled value.

**Usage:** `toggle<I>(object, path: keyof object, values?: Array<I>): I | boolean`

```typescript
import { toggle } from 'utilizes.toggle'

const object = {
  foo: {
    bar: false
  },
  num: 0
}

toggle(object, `foo.bar`)
// Output: true
toggle(object, `num`, [1, 0]) // or "toggle(object, `num`, 1, 0)"
// Output: 1
```

<!-- *keywords ["object-property", "toggle-boolean", "toggle-path", "object-path-boolean", "toggle-between-values"] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.