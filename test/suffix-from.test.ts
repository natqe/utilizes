import { suffixFrom } from '../src/suffix-from'

test(`Get suffix from string`, () => expect(suffixFrom(`a/b/cd`, `/`)).toBe(`cd`))