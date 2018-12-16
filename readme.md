# utilizes

Simple js utilities to speed your work

## Table of contents

- [Installation](#installation)
 <!-- - [Changelog](CHANGELOG.md) -->
- [Array](#array)
  - [oneOrAll](#oneorall)
  - [push](#push)
  - [someTruthy](#sometruthy)
  - [someTruthyRight](#sometruthyright)
- [Dom](#dom)
  - [area](#area)
  - [createStyle](#createstyle)
  - [easyStyleShadow](#easystyleshadow)
  - [mapZIndex](#mapzindex)
  - [offset](#offset)
  - [visiblePartOf](#visiblepartof)
- [Function](#function)
  - [bind](#bind)
  - [doDeclare](#dodeclare)
  - [returns](#returns)
- [Number](#number)
  - [rangeWithNames](#rangwithnames)
- [Object](#object)
  - [delRecursive](#delrecursive)
  - [set](#set)
  - [setEach](#seteach)
  - [setRecursive](#setrecursive)
  - [toEnum](#toenum)
- [String](#string)
  - [camelClassCase](#camelclasscase)
  - [chars](#chars)
  - [charsAll](#charsall)
  - [ensureUnique](#ensureunique)
  - [extractLastNumber](#extractlastnumber)
  - [incrementLast](#incrementlast)
  - [maxByLastNumber](#maxbylastnumber)
  - [prefix](#prefix)
  - [sumBestMatch](#sumbestmatch)
- [Timer](#timer)
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

using typescript or es6:

  ```typescript
  import utilizes from 'utilizes'
  ```

## Array

### oneOrAll

Return one when is have only one item, return all when is have more then one item.

**Usage:** `oneOrAll<T>(array: Array<T> | T): Array<T> | T`

```typescript
import { oneOrAll } from 'utilizes/one-or-all'

oneOrAll(['item']) // Return one when is have only one item
// Output: 'item'
oneOrAll(['item', 'item2']) // Return all when is have more then one item
// Output: ['item', 'item2']
oneOrAll('item') // Return the value when is have value that are not array
// Output: 'item'
oneOrAll([]) // Ignore when its not have an items
// Output: undefined
```

### push

Push safely to array. returning the length of the array - if the item pushed successfully.

**Usage:** `push(object, pathToArray, ...items): number`

```typescript
import { push } from 'utilizes/push'

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
import { someTruthy } from 'utilizes/some-truthy'

someTruthy([0, 1, 2], num => num) // Return the first truthy value it find
// Output: 1
someTruthy([0, false, undefined, null], falsy => falsy) // Return the last falsy value it find if non of the given items is truthy
// Output: null
someTruthy([0, 1, 2], num => num, true) // The last argument is for iterates from right to left instead of left to right
// Output: 2
```

### someTruthyRight

This function is like [someTruthy](#someTruthy) but with the third argument evaluate to true

**Usage:** `someTruthyRight<T, Y>(array: T[], callback: (value: T, index: number, array: T[]) => Y): Y`

```typescript
import { someTruthyRight } from 'utilizes/some-truthy-right'

someTruthyRight([0, 1, 2], num => num) // Return the first truthy value it found, from the right to left
// Output: 2
someTruthyRight([0, false, undefined, null], falsy => falsy) // Return the last falsy value if non of the given items is truthy, from the right to left
// Output: 0
```


## Dom

### area

Return true if the given area is found on a given element, else false

**Usage:** `area({ pageX: number; pageY: number; }, of: HTMLElement): boolean`

```typescript
import { area } from 'utilizes/area'

const myButton = document.getElementById('my-button'))

window.addEventListener('click', ({ pageX, pageY }) => {
  if (area({ pageX, pageY }, myButton)) {
    alert(`you clicked on my button`)
  }
})
```

### createStyle

Creates style element with the css inserted to him and ready to put into the document

**Usage:** `createStyle(css: string): HTMLStyleElement`

```typescript
import { createStyle } from 'utilizes/create-style'

document.head.appendChild(createStyle(`
    .my-element{
    color: red;
    }
`))
```

### easyStyleShadow

Easy way to inject style to web components with attach shadow. note that it only work if the shadow mode set to "open".

This helper keep track of changes in the dom for keep the dom upgrade with the needed styles.
so if you want to cancel the detection in any point, you can invoke the return function that returned from this helper when you initialize it.

The second argument is for setting the timeout for detection cycle.

**Usage:** `easyStyleShadow(css: { [k: string]: string; }, timeout?: number): Function`

```typescript
import { easyStyleShadow } from 'utilizes/easy-style-shadow'

const stopDetection = easyStyleShadow({
 'ion-not-styleable-element': `
    :host{
       padding-bottom: 5px;
    };
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

### mapZIndex

Get information about z-index state in your application

**Usage:** `mapZIndex(): Array<{ element: Element, zIndex: number }>`

```typescript
import { mapZIndex } from 'utilizes/map-z-index'

mapZIndex()
// Output: tree of your elements with the information about they z-index value
```

### offset

Get the current offset of the given element

**Usage:** `offset(item: Element | Partial<ClientRect> | Partial<DOMRect>): { top: number, left: number }`

```typescript
import { offset } from 'utilizes/offset'

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
import { visiblePartOf } from 'utilizes/visible-part-of'

const specialElement = document.getElementById('special-element')

visiblePartOf(specialElement)
// Output the x and y of the element, also give you information about the current offset top and left
```

## Function

### bind

Bind all methods of the given object to the object

**Usage:** `bind<T>(this: T): T`

```typescript
import { bind } from 'utilizes/bind'

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
import { doDeclare } from 'utilizes/do-declare'

const func = doDeclare(()=> console.log(123))
// Output: 123
func()
// Output: 123
```

### returns

Invoke set of functions with same arguments at ones, and get the results.

**Usage:** `returns<T>(functions: Array<T>, ...args: any[]): Array<ReturnType<T>>`

```typescript
import { returns } from 'utilizes/returns'

returns([(a, b) => a + b, (a, b)=> a - b], 2,1)
// Output: [3,1]
```

## Number

### rangeWithNames

Creates an array of objects from given range, each object contain number and his name

**Usage:** `rangeWithNames(start: number, end: number, step?: number): Array<{ number: number; name: string; }>`

```typescript
import { rangeWithNames } from 'utilizes/range-with-names'

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
import { delRecursive } from 'utilizes/del-recursive'

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
import { set } from 'utilizes/set'

{/*path can br one or more paths*/
  const ob = {
    prop: 1
  }

  set(ob, 2, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 2,
  //   0: [2],
  // }
}

{/*value via function*/
  const ob = {
    prop: 1
  }

  set(ob, (currentValue) => currentValue === 1 ? 2 : 1, 'prop', 'anotherProp', '0.0')
  // Output:  {
  //   prop: 2,
  //   anotherProp: 1,
  //   0: [1]
  // }
}
```

### setEach

This function is like [set](#set) except its for multiple objects.

**Usage:** `setEach<T extends object>(object: []T, value: any, ...paths: Many<string | number | symbol>[]): []T`

```typescript
import { setEach } from 'utilizes/set-each'

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
import { setRecursive } from 'utilizes/set-recursive'

const person = {
  id: 1,
  name: 'john',
  metadata: {
    personId: 1,
    goodParson: true,
    family: {
      personId: 1,
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
setRecursive(person, propsToSet, false) // This will set the given properties even if they not exist initially
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
import { toEnum } from 'utilizes/to-enum'

toEnum({ 1: 'good' })
// Output: { '1': 'good', good: '1' }
```

## String

### camelClassCase

Convert given string to class like syntax

**Usage:** `camelClassCase(str: string): string`

```typescript
import { camelClassCase } from 'utilizes/camel-class-case'

camelClassCase('mr_john')
// Output: 'MrJohn'
```

### chars

Return characters of the english language

**Usage:** `chars(type?: "number" | "lower" | "upper"): string[]`

```typescript
import { chars } from 'utilizes/chars'

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
import { charsAll } from 'utilizes/chars-all'

charsAll()
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

### ensureUnique

Return safety unique string from bunch of items

**Usage:** `ensureUnique(toBeUniq: string | number, items: Array<typeof toBeUniq> | Array<{ [key: string]: any }>, by?: string | number): typeof toBeUniq`

```typescript
import { ensureUnique } from 'utilizes/ensure-unique'

ensureUnique('name', ['name', 'otherName', 'oneMoreName']) // Return the str with number in the end when the array have already the str, first time the number is 2.
// Output: "name2"
ensureUnique('dexter', [{ nickname: 'dexter' }, { nickname: 'dexter2' }], 'nickname') // The third argument is a prop to check when items are objects. default is null.
// Output: "dexter3"
ensureUnique(1, [1, 3]) // work with numbers
// Output: 2
ensureUnique('name', ['name', 'Name2'], null, true) // the fourth argument is for case insensitive checking. default is false.
// Output: "name3"
```

### extractLastNumber

Extract last number from given string. return array with the string without the number, and the number himself

**Usage:** `extractLastNumber(str: string): [string, number]`

```typescript
import { extractLastNumber } from 'utilizes/extract-last-number'

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
import { incrementLast } from 'utilizes/increment-last'

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
import { maxByLastNumber } from 'utilizes/max-by-last-number'

maxByLastNumber('name', ['name1', 'name2', 'otherName'])
// Output: "name2"
maxByLastNumber('dexter', [{ nickname: 'dexter3' }, { nickname: 'dexter2' }], 'nickname')
// Output: "dexter3"
```

### prefix

Adding fix to beginning of string only if the string is present.

**Usage:** `prefix(...args: string[]): string`

```typescript
import { prefix } from 'utilizes/prefix'

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
import { sumBestMatch } from 'utilizes/sum-best-match'

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
import { interval } from 'utilizes/interval'

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