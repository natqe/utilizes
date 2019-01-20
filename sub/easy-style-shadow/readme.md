# easyStyleShadow

Easy way to inject style to web components with attach shadow. note that it only work if the shadow mode set to "open".

This helper keep track of changes in the dom for keep the dom upgrade with the needed styles.
so if you want to cancel the detection in any point, you can invoke the return function that returned from this helper when you initialize it.

The second argument is for setting the timeout for detection cycle.

**Usage:** `easyStyleShadow(css: { [k: string]: string }, timeout?: number): Function`

```typescript
import { easyStyleShadow } from 'easy-style-shadow'

const stopDetection = easyStyleShadow({
 'ion-not-styleable-element': `
    :host{
       padding-bottom: 5px;
    }
    ion-child-element{
      display: none !important;
    }
 `,
 'another-cool-element-from-new-library': `
  .cool-sub-element{
    color: yellow;
  }
 `
})
// if you want to stop the detection of this helper just invoke the return value in any time, like so:
stopDetection()
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.