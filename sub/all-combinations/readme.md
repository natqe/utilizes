# allCombinations

Get all combinations from a given string. you can specify the separator and how you want to get the result (join with specific symbol)

**Usage:** `allCombinations(target: string | Array<string>, joinSymbol?:string, separator?:string):  Array<string> | Array<Array<string>>`

```typescript
import { allCombinations } from 'utilizes.all-combinations'

allCombinations(`all-combinations`, `-`) // the separator (the third argument) is the same as the joinSymbol by default
// Output: ["all", "combinations", "all-combinations", "combinations-all"]
allCombinations(`all-combinations`, ` `, `-`) // if you want the separator to be other then join-symbol, specify it in the third argument
// Output: ["all", "combinations", "all combinations", "combinations all"]
allCombinations(`all-combinations`, null, `-`) // it can be also without the join symbol, so it will cause result without joining aka array of array of string
// Output: [["all"], ["combinations"], ["all", "combinations"], ["combinations", "all"]]
allCombinations([`all`, `combinations`], null) // the target can be also an array
// Output: [["all"], ["combinations"], ["all", "combinations"], ["combinations", "all"]]
allCombinations(`ab`, ``) // example how to use it with letters
// Output: [ "a", "b", "ab", "ba" ]
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.