# interval

This function is like native setInterval, except its stopped when the given handler returns true or an error is accrue

**Usage:** `interval(handler: (...args: any[]) => boolean, timeout?: number, ...args: any[]): number`

```typescript
import { interval } from 'utilizes.interval'

let counter = 0

interval(()=> ++counter === 5)
// stopped when the counter incremented to 5
// or you can stop it manually like you stop native setInterval function ->
const handle = interval(()=> {

    ++counter

    if(counter === 5) clearInterval(handle)

})

// note: the interval is stopped when error is accrue ->
interval(()=>{
    throw new Error()
})
// log error to the console once and the interval no longer exist
// you can stop this behavior by using trycatch ->
interval(()=>{
    try{
        throw new Error()
    }catch(e){
        console.error(e)
    }
})
// this will not stop the interval process
```

<!-- *keywords [] *keywordsend -->
This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.

<!-- -->