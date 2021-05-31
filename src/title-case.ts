import { lowerCase } from 'lodash-es'
import { startCase } from 'lodash-es'

export const titleCase = (value: string) => startCase(lowerCase(value))

export default titleCase