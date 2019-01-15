# createStyle

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.createStyle exported as a Node.js module.


Creates style element with the css inserted to him and ready to put into the document

**Usage:** `createStyle(css: string): HTMLStyleElement`

```typescript
import { createStyle } from 'create-style'

document.head.appendChild(createStyle(`
    .my-element{
    color: red;
    }
`))
```

