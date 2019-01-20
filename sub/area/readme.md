# area

Return true if the given area is found on a given element, else false

**Usage:** `area({ pageX: number, pageY: number }, of: HTMLElement): boolean`

```typescript
import { area } from 'utilizes.area'

const myButton = document.getElementById('my-button'))

window.addEventListener('click', ({ pageX, pageY }) => {
  if (area({ pageX, pageY }, myButton)) {
    alert(`you clicked on my button`)
  }
})
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- -->