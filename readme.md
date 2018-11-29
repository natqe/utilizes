# utilizes

Simple js utilities to speed your work

## Table of contents

 - [Installation](#installation)
 <!-- - [Changelog](CHANGELOG.md) -->
 - [String](#string)
    - [ensureUnique](#ensureUnique)
    - [incrementLast](#incrementLast)
    - [extractLastNumber](#extractLastNumber)
    - [sumBestMatch](#sumBestMatch)
    - [chars](#chars)
    - [charsAll](#charsAll)
    - [prefix](#prefix)
    - [camelClassCase](#camelClassCase)
 - [Array](#Array)
    - [push](#push)
    - [someTruthy](#someTruthy)
    - [someTruthyRight](#someTruthyRight)
 - [Object](#object)
    - [setRecursive](#setRecursive)
    - [delRecursive](#delRecursive)
    - [toEnum](#toEnum)
<!-- - [Date](#date)
    - [lengthSeconds](#lengthSeconds)
    - [secondsToTime](#secondsToTime)
    - [amountOfWeekDaysInMonth](#amountOfWeekDaysInMonth)
    - [amountOfWeekDaysInYear](#amountOfWeekDaysInYear)
    - [secondsToHours](#secondsToHours)
    - [isPast](#isPast)
- [Dom](#dom)
    - [visiblePartOf](#visiblePartOf)
    - [offset](#offset)
    - [mapZIndex](#mapZIndex)
    - [createStyle](#createStyle)
- [Function](#function)
    - [doDeclare](#doDeclare)
    - [bind](#bind)
- [Number](#number)
    - [rangeWithNames](#rangeWithNames)
- [Timer](#Timer)
    - [interval](#interval) -->

## Installation

Use npm to install the package

```shell
$ npm i utilizes
```

In Node.js:
```js
const utilizes = require('utilizes')
```

using typescript:
  ```typescript
  import * as utilizes from 'utilizes'
  ```

## String

### ensureUnique

Return safety unique string from bunch of items

**Usage:** `ensureUnique(str: string, items: ({ [k: string]: any } | typeof str)[], by?: string | number): string`

```typescript
import { ensureUnique } from 'utilizes'

ensureUnique('name', ['name', 'otherName', 'oneMoreName'])
// Output: "name2"
ensureUnique('dexter', [{ nickname: 'dexter' }, { nickname: 'dexter2' }, { nickname: 'otherNick' }], 'nickname')
// Output: "dexter3"
```

### incrementLast

Return string with the number in the end incremented

**Usage:** `incrementLast(str: string, defaultNum?: number): string`

```typescript
import { incrementLast } from 'utilizes'

incrementLast('name1')
// Output: "name2"
incrementLast('name01')
// Output: "name02"
incrementLast('name') // When the given string does not end with number, the default number is 2
// Output: "name2"
incrementLast('name', 5) // The second argument is the default number to use when the given string does not end with number
// Output: "name5"
incrementLast('name1', 5) // defaultNum as no effect in this case
// Output: "name2"
```

### extractLastNumber

Extract last number from given string. return array with the string without the number, and the number himself

**Usage:** `extractLastNumber(str: string): [string, number]`

```typescript
import { extractLastNumber } from 'utilizes'

extractLastNumber('name1')
// Output: ["name", 1]
extractLastNumber('name')
// Output: ["name", null]
extractLastNumber('name01')
// Output: ["name0", 1]
```

### sumBestMatch

get sum of best match for the given strings

**Usage:** `sumBestMatch(mainStrings: string[], targetStrings: string[]): { bestMatch: { target: string, rating: number }, ratings: Array<{ target: string, rating: number }> }`

```typescript
import { sumBestMatch } from 'utilizes'

sumBestMatch(['one', 'one two', 'one two three'], ['one', 'two', 'three'])
// Output: {
//     ratings: [
//       { target: 'one', rating: 0.6888888888888888 },
//       { target: 'two', rating: 0.35555555555555557 },
//       { target: 'three', rating: 0.2222222222222222 }
//     ],
//     bestMatch: { target: 'one', rating: 0.6888888888888888 }
//   }
```

### chars

Return characters of the english language

**Usage:** `chars(type?: "number" | "lower" | "upper"): string[]`

```typescript
import { chars } from 'utilizes'

chars() // same as chars('lower')
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
chars('upper')
// Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
chars('number')
// Output: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

### charsAll

Return characters of the english language

**Usage:** `charsAll(): string[]`

```typescript
import { charsAll } from 'utilizes'

charsAll()
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

### prefix

Adding fix to beginning of string only if the string is present.

**Usage:** `prefix(...args: string[]): string`

```typescript
import { prefix } from 'utilizes'

prefix('Mr ', 'john')
// Output: 'Mr john'
prefix('Mr ', null)
// Output: ''
prefix('Mr ', 'john', ' is ', 'reach')
// Output: 'Mr john is reach'
prefix('Mr ', 'john', ' is ', undefined)
// Output: 'Mr john'
```

### camelClassCase

Convert given string to class like syntax

**Usage:** `camelClassCase(str: string): string`

```typescript
import { camelClassCase } from 'utilizes'

camelClassCase('mr_john')
// Output: 'MrJohn'
```

## Array

### push

Push safely to array. returning the length of the array - if the item pushed successfully.

**Usage:** `push(object, pathToArray, ...items): number`

```typescript
import { push } from 'utilizes'

{ /*example for using with array that inside an object */

    const ob = {}

    push(ob, 'path.to.arr', 'item1', 'item2')
    // Output: 2
    console.log(ob.path.to.arr)
    // Output: ['item1', 'item2']

}
{/*example for using on simple array that attempt to be exist */

    let arr: any[] = null

    push(arr, 'item')
    // Output: undefined
    arr = []

    push(arr, 'item')
    // Output: 1

}
```

### someTruthy

Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy

Return the truthy value or the last falsy value if none of the iteration returns truthy

**Usage:** `someTruthy<T, Y>(array: T[], callback: (value: T, index: number, array: T[]) => Y, reverse?: boolean): Y`

```typescript
import { someTruthy } from 'utilizes'

someTruthy([0, 1, 2], num => num)
// Output: 1
someTruthy([0, false, undefined, null], falsy => falsy)
// Output: null
someTruthy([0, 1, 2], num => num, true) // The last argument is for iterates from right to left instead of left to right
// Output: 2
```

### someTruthyRight

This function is like [someTruthy](#someTruthy) with the third argument evaluate to true

**Usage:** `someTruthyRight<T, Y>(array: T[], callback: (value: T, index: number, array: T[]) => Y): Y`

```typescript
import { someTruthyRight } from 'utilizes'

someTruthyRight([0, 1, 2], num => num)
// Output: 2
someTruthyRight([0, false, undefined, null], falsy => falsy)
// Output: 0
```

##Object

### setRecursive

Set recursive properties on object

**Usage:** `setRecursive<T extends Object>(on: T, to: { [k: string]: any; }, whenExist?: boolean): T`

```typescript
import { setRecursive } from 'utilizes'

const person = {
  id: 1,
  name: 'john',
  metadata: {
    personId: 1,
    goodParson: true,
    family: {
      sister: 'lola'
    }
  }
}

const propsToSet = { id: 2, personId: 2 }

setRecursive(person, propsToSet)
// Output: {
//   id: 2,
//   name: 'john',
//   metadata: {
//     personId: 2,
//     goodParson: true,
//     family: {
//       personId: 2,
//       sister: 'lola'
//     }
//   }
// }
setRecursive(person, propsToSet, true) // This will set the given properties even if they not exist initially
// Output: {
//   id: 2,
//   personId: 2,
//   name: 'john',
//   metadata: {
//     personId: 2,
//     id: 2,
//     goodParson: true,
//     family: {
//       personId: 2,
//       id: 2,
//       sister: 'lola'
//     }
//   }
```

### delRecursive

Delete recursive properties of object

**Usage:** `delRecursive<T extends Object>(on: T, to: any[]): T`

```typescript
import { delRecursive } from 'utilizes'

const person = {
  id: 1,
  name: 'john',
  metadata: {
    personId: 1,
    goodParson: true,
    family: {
      sister: 'lola'
    }
  }
}

const propsToDelete = ['id', 'personId', 'sister']

delRecursive(person, propsToDelete)
// Output:  {
//   name: 'john',
//   metadata: {
//     goodParson: true,
//     family: { }
//   }
// }
```

### toEnum

Convert given object to enum like

**Usage:** `toEnum(ob: { [k: string]: any; }): { [x: string]: any; }`

```typescript
import { toEnum } from 'utilizes'

toEnum({ 1: 'good' })
// Output: { '1': 'good', good: '1' }
```
<!--
## Date

### lengthSeconds

Get difference between to hours as seconds in number

**Usage:** `lengthSeconds(start: string | Date, end: : string | Date): number`

```typescript
import { lengthSeconds } from 'utilizes'
import * as moment from 'moment'

lengthSeconds(
      moment().toDate(),
      moment().add(2, 'seconds').toDate()
)
// Output: 2

``` -->
