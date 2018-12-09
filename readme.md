# utilizes

Simple js utilities to speed your work

## Table of contents

- [Installation](#installation)
 <!-- - [Changelog](CHANGELOG.md) -->
- [Array](#Array)
  - [push](#push)
  - [someTruthy](#someTruthy)
  - [someTruthyRight](#someTruthyRight)
- [Dom](#Dom)
  - [createStyle](#createStyle)
  - [mapZIndex](#mapZIndex)
  - [offset](#offset)
  - [visiblePartOf](#visiblePartOf)
- [Function](#Function)
  - [bind](#bind)
  - [doDeclare](#doDeclare)
- [Number](#number)
  - [rangeWithNames](#rangeWithNames)
- [Object](#Object)
  - [delRecursive](#delRecursive)
  - [set](#set)
  - [setEach](#setEach)
  - [setRecursive](#setRecursive)
  - [toEnum](#toEnum)
- [String](#String)
  - [camelClassCase](#camelClassCase)
  - [chars](#chars)
  - [charsAll](#charsAll)
  - [ensureUnique](#ensureUnique)
  - [extractLastNumber](#extractLastNumber)
  - [incrementLast](#incrementLast)
  - [prefix](#prefix)
  - [sumBestMatch](#sumBestMatch)
- [Timer](#Timer)
  - [interval](#interval)
<!-- - [Date](#date)
    - [lengthSeconds](#lengthSeconds)
    - [secondsToTime](#secondsToTime)
    - [amountOfWeekDaysInMonth](#amountOfWeekDaysInMonth)
    - [amountOfWeekDaysInYear](#amountOfWeekDaysInYear)
    - [secondsToHours](#secondsToHours)
    - [isPast](#isPast)
-->

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

Checks if the callback returns truthy for any element of the array. Iteration is stopped once the callback returns truthy

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

This function is like [someTruthy](#someTruthy) but with the third argument evaluate to true

**Usage:** `someTruthyRight<T, Y>(array: T[], callback: (value: T, index: number, array: T[]) => Y): Y`

```typescript
import { someTruthyRight } from 'utilizes'

someTruthyRight([0, 1, 2], num => num)
// Output: 2
someTruthyRight([0, false, undefined, null], falsy => falsy)
// Output: 0
```


## Dom

### area

Return true if the given area is found on a given element, else false

**Usage:** `area({ pageX: number; pageY: number; }, of: HTMLElement): boolean`

```typescript
import { area } from 'utilizes'

const myButton = document.getElementById('my-button'))

window.addEventListener('click', ({ pageX, pageY }) => {
  if (area({ pageX, pageY }, myButton) {
    alert(`you clicked on my button`)
  }
})
```

### createStyle

Creates style element with the css inserted to him and ready to put into the document

**Usage:** `createStyle(css: string): HTMLStyleElement`

```typescript
import { createStyle } from 'utilizes'

document.head.appendChild(createStyle(`
    .my-element{
    color: red;
    }
`))
```

### mapZIndex

Get information about z-index state in your application

**Usage:** `mapZIndex(): Array<{ element: Element, zIndex: number }>`

```typescript
import { mapZIndex } from 'utilizes'

mapZIndex()
// Output: tree of your elements with the information about they z-index value
```

### offset

Get the current offset of the given element

**Usage:** `offset(item: Element | Partial<ClientRect> | Partial<DOMRect>): { top: number, left: number }`

```typescript
import { offset } from 'utilizes'

const specialElement = document.getElementById('special-element')

offset(specialElement)
// Output the offset top and offset left of given element
offset(specialElement.getBoundingClientRect())
// also work
```

### visiblePartOf

Get the current x and y of given element. also return the offset.

**Usage:** `visiblePartOf(elem: HTMLElement): { x: number, y: number, offsetTop: number, offsetLeft: number }`

```typescript
import { visiblePartOf } from 'utilizes'

const specialElement = document.getElementById('special-element')

visiblePartOf(specialElement)
// Output the x and y of the element, also give you information about the current offset top and left
```

## Function

### bind

Bind all methods of the given object to the object

**Usage:** `bind<T>(this: T): T`

```typescript
import { bind } from 'utilizes'

class CoolService {

  constructor() {
    bind(this) // binding this via utilizes.bind
  }

  count = 0

  increment() {
    this.count++
  }

}

const coolService = new CoolService()

const increment = coolService.increment

increment() // 'this.count++' point to coolService.count

console.log(coolService.count)
// Output: 1
```

### doDeclare

Invoke your function when you declare it.

aliases: "invoke"

**Usage:** `doDeclare(func: Function, args?: any[]): Function`

```typescript
import { doDeclare } from 'utilizes'

const func = doDeclare(()=> console.log(123))
// Output: 123
func()
// Output: 123
```

## Number

### rangeWithNames

Creates an array of objects from given range, each object contain number and his name

**Usage:** `rangeWithNames(start: number, end: number, step?: number): Array<{ number: number; name: string; }>`

```typescript
import { rangeWithNames } from 'utilizes'

rangeWithNames(1,3)
// Output: [ { number: 1, name: 'one' }, { number: 2, name: 'two' } ]
rangeWithNames(3,5)
// Output: [ { number: 3, name: 'three' }, { number: 4, name: 'four' } ]
```

## Object

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

### set

Set value to path's in object. value can be a function (with three arguments: currentValue, path, object) that invoked for the specific path.

When value is function, the return value from it is set for the current path. if the return value is undefined, the current path is skipped.

**Usage:** `set<T extends object>(object: T, value: any, ...paths: Many<string | number | symbol>[]): T`

```typescript
import { set } from 'utilizes'

{/*path can br one or more paths*/
  const ob = {
    prop: 1
  }

  set(ob, 2, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 2
  //   arr: [2],
  // }
}

{/*value via function*/
  const ob = {
    prop: 1
  }

  set(ob, (currentValue) => currentValue === 1 ? 2 : 1, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 1
  //   arr: [1],
  // }
}
```

### setEach

This function is like [set](#set) except its for multiple objects.

**Usage:** `setEach<T extends object>(object: []T, value: any, ...paths: Many<string | number | symbol>[]): []T`

```typescript
import { setEach } from 'utilizes'

const obs = [
   {
    prop: 1
   },
   {
     prop: 1
   }
]

setEach(ob, 2, 'prop')
// Output:  [
//    {
//     prop: 2
//    },
//    {
//      prop: 2
//    }
// ]
```

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

### toEnum

Convert given object to enum like

**Usage:** `toEnum(ob: { [k: string]: any; }): { [x: string]: any; }`

```typescript
import { toEnum } from 'utilizes'

toEnum({ 1: 'good' })
// Output: { '1': 'good', good: '1' }
```

## String

### camelClassCase

Convert given string to class like syntax

**Usage:** `camelClassCase(str: string): string`

```typescript
import { camelClassCase } from 'utilizes'

camelClassCase('mr_john')
// Output: 'MrJohn'
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

### ensureUnique

Return safety unique string from bunch of items

**Usage:** `ensureUnique(toBeUniq: string | number, items: Array<typeof toBeUniq> | Array<{ [key: string]: any }>, by?: string | number): typeof toBeUniq`

```typescript
import { ensureUnique } from 'utilizes'

ensureUnique('name', ['name', 'otherName', 'oneMoreName'])
// Output: "name2"
ensureUnique('dexter', [{ nickname: 'dexter' }, { nickname: 'dexter2' }], 'nickname') // The third argument is a prop to check when items are objects. default is null.
// Output: "dexter3"
ensureUnique(1, [1, 3]) // work with numbers
// Output: 2
ensureUnique('name', ['name', 'Name2'], null, true) // the four argument is for case insensitive checking. default is false.
// Output: "name3"
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
incrementLast('name1', 5) // defaultNum has no effect in this case
// Output: "name2"
```

### maxByLastNumber

Check array of items and return the item with the highest suffix number. if non is found return undefined.

**Usage:** `maxByLastNumber(prefix: string, items: { [k: string]: any; }[] | string[], by?: string | number): string`

```typescript
import { maxByLastNumber } from 'utilizes'

maxByLastNumber('name', ['name1', 'name2', 'otherName'])
// Output: "name2"
maxByLastNumber('dexter', [{ nickname: 'dexter3' }, { nickname: 'dexter2' }], 'nickname')
// Output: "dexter3"
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
prefix(null, 'john')
// Output: 'john'
prefix('Mr ', 'john', ' is', ' rich')
// Output: 'Mr john is rich'
prefix('Mr ', 'john', ' is ', undefined)
// Output: 'Mr john'
prefix('Mr ', 'john', null, ' rich')
// Output: 'Mr john rich'
```

### sumBestMatch

get sum of best match for the given strings

**Usage:** `sumBestMatch(mainStrings: string[], targetStrings: string[]): { bestMatch: { target: string, rating: number }, ratings: Array<{ target: string, rating: number }> }`

```typescript
import { sumBestMatch } from 'utilizes'

sumBestMatch(['one', 'one two', 'one two three'], ['one', 'two', 'three'])
// Output: {
//     bestMatch: { target: 'one', rating: 0.6888888888888888 },
//     ratings: [
//       { target: 'one', rating: 0.6888888888888888 },
//       { target: 'two', rating: 0.35555555555555557 },
//       { target: 'three', rating: 0.2222222222222222 }
//     ]
//   }
```

## Timer

### interval

This function is like native setInterval, except its stopped when the given handler returns true or an error is accrue

**Usage:** `interval(handler: (...args: any[]) => boolean, timeout?: number, ...args: any[]): number`

```typescript
import { interval } from 'utilizes'

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