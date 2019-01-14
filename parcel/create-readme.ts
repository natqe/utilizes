import { readFile, writeFile } from 'fs'
import { camelCase, get } from 'lodash'
import { promisify } from 'util'

export const
  createReadme = async (outDir: string, fileName: string, generalReadme: string, packageJSON?: string) => {

    const nameCamel = camelCase(fileName)

    let result = get(generalReadme.match(new RegExp(`### ${nameCamel}[^#]+`)), 0)

    if (result) {

      result = result.replace(`### ${nameCamel}`, `# ${nameCamel}

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.${nameCamel} exported as a Node.js module.
`)

      if (!packageJSON) packageJSON = await promisify(readFile)(`${outDir}/package.json`, `utf8`)

      const { name } = JSON.parse(packageJSON)

      result = result.replace(`utilizes/${fileName}`, `${name}`)

      return promisify(writeFile)(`${outDir}/readme.md`, result)

    }

  }