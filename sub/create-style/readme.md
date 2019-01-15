# createStyle

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

<!-- *keywords [] *keywordsend -->



This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.<!-- end -->