# offset

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.offset exported as a Node.js module.


Get the current offset of the given element

**Usage:** `offset(item: Element | Partial<ClientRect> | Partial<DOMRect>): { top: number, left: number }`

```typescript
import { offset } from 'utilizes.offset'

const specialElement = document.getElementById('special-element')

offset(specialElement)
// Output the offset top and offset left of given element
offset(specialElement.getBoundingClientRect())
// also work
```

