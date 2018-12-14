import { setRecursive } from '../set-recursive'

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

test(`Ignore when props not have size`, () => expect(setRecursive(person, {})).toEqual(person))

test(`Set recursive properties on object`, () => expect(setRecursive(person, propsToSet)).toEqual({
  id: 2,
  name: 'john',
  metadata: {
    personId: 2,
    goodParson: true,
    family: {
      personId: 2,
      sister: 'lola'
    }
  }
}))

test(`the third argument is for setting the given properties even if they not exist initially.`, () => expect(setRecursive(person, propsToSet, false)).toEqual({
  id: 2,
  personId: 2,
  name: 'john',
  metadata: {
    personId: 2,
    id: 2,
    goodParson: true,
    family: {
      personId: 2,
      id: 2,
      sister: 'lola'
    }
  }
}))