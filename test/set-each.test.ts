import { setEach } from '../set-each'

test(`Set value to  path for multiple objects`, () => expect(setEach([{ prop: 1 }, { prop: 1 }], 2, 'prop')).toEqual([{ prop: 2 }, { prop: 2 }]))