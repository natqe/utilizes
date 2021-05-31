import { upperFirst } from 'lodash-es'
import { camelCase } from 'lodash-es'

export const camelClassCase = (word: string) => upperFirst(camelCase(word))

export default camelClassCase