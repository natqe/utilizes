import chunk from 'lodash/chunk'
import flattenDeep from 'lodash/flattenDeep'
import replace from 'lodash/replace'

export const prefix = (...args) => chunk(flattenDeep(args), 2).map(([fix, str]) => fix || typeof fix === 'number' ? replace(str, /.+/, `${fix}$&`) : str as string).join('')

export default prefix 