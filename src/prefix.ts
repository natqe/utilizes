import chunk from 'lodash-es/chunk'
import flattenDeep from 'lodash-es/flattenDeep'
import replace from 'lodash-es/replace'

export const prefix = (...args) => chunk(flattenDeep(args), 2).map(([fix, str]) => fix || typeof fix === 'number' ? replace(str, /.+/, `${fix}$&`) : str as string).join('')

export default prefix 