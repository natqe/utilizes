# toggle

Toggle property truthines. if the value is falsy set it to true, otherwise set it to false.

Return the toggled value.

**Usage:** `toggle(object, path: keyof object): boolean`

```typescript
import { toggle } from 'utilizes.toggle'

const object = {
  foo: {
    bar: false
  }
}

toggle(object, `foo.bar`)

console.log(object.foo.bar)
// Output: true
```

<!-- *keywords ["object-property", "toggle-boolean", "toggle-path", "object-path-boolean"] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.