import { camelCase, merge } from 'lodash'
import { allCombinations } from '../src/all-combinations'

export class PackageJSONModel {

  name: string

  constructor(options: Partial<PackageJSONModel> & { name: PackageJSONModel['name'] }) {

    if (options.version && options.version !== this.version) {

      const version = options.version.split(`.`).map(n => +n)

      if (version[1] > 9 && version[2] > 9) {

        version[1] = version[2] = 0

        ++version[0]

      }
      else if (version[2] > 9) {

        version[2] = 0

        ++version[1]

      } else ++version[2]

      options.version = version.join(`.`)

    }

    merge(this, options)

  }

  readonly author = `Natan Farkash`

  readonly license = `MIT`

  readonly homepage = `https://github.com/natqe/utilizes#readme`

  readonly repository = {
    type: `git`,
    url: `git+https://github.com/natqe/utilizes.git`
  }

  readonly bugs = {
    url: `https://github.com/natqe/utilizes/issues`
  }

  version = `1.0.0 `

  description = `The utilizes method utilizes.${camelCase(this.name)} exported as a Node.js module.`

  keywords = allCombinations(this.name, `-`)

  main = `${this.name}.js`

  scripts = {
    start: `npm version patch &&  npm publish`
  }

}