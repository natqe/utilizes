# visiblePartOf

Get the current x and y of given element. also return the offset.

**Usage:** `visiblePartOf(elem: HTMLElement): { x: number, y: number, offsetTop: number, offsetLeft: number }`

```typescript
import { visiblePartOf } from 'visible-part-of'

const specialElement = document.getElementById('special-element')

visiblePartOf(specialElement)
// Output the x and y of the element, also give you information about the current offset top and left
```

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.