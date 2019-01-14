import { exec } from 'child_process'
import { copyFile, exists, readdir, readFile, writeFile } from 'fs'
import { camelCase } from 'lodash'
import Bundler from 'parcel-bundler'
import { promisify } from 'util'
import { createReadme } from './create-readme'

const execPromise = promisify(exec)

execPromise(`npm run build`).then(async () => {

  try {

    const
      readdirPromise = promisify(readdir),
      readFilePromise = (path: string) => promisify(readFile)(path, `utf8`),
      existsPromise = promisify(exists),
      writeFilePromise = promisify(writeFile),
      copyFilePromise = promisify(copyFile),
      files = await readdirPromise(`src`),
      packageJSONFileName = `package.json`,
      packageJSON = await readFilePromise(`parcel/package-example.json`),
      readme = await readFilePromise(`readme.md`)

    for (const file of files.filter(file => !file.startsWith(`invoke`) && !file.startsWith(`index`) && !file.startsWith(`_`))) {

      let prevState = ``

      const
        fileName = file.slice(0, file.lastIndexOf(`.`)),
        outDir = `sub/${fileName}`,
        fileTypeDefinition = `${fileName}.d.ts`

      try {

        prevState += await readFilePromise(`${outDir}/${fileName}.js`)

        prevState += await readFilePromise(`${outDir}/${fileTypeDefinition}`)

        prevState += await readFilePromise(`${outDir}/readme.md`)

        prevState = prevState.replace(/\n\t\s/g, ``)

      } catch {

      }

      await new Bundler(`src/${file}`, {
        outDir,
        cache: false,
        target: 'browser',
        minify: true,
        logLevel: 1,
        scopeHoist: true,
        watch: false
      }).bundle()

      let displayPackageJSON = ``

      await copyFilePromise(`dist/${fileTypeDefinition}`, `${outDir}/${fileTypeDefinition}`)

      await copyFilePromise(`LICENSE`, `${outDir}/LICENSE`)

      if (!await existsPromise(`${outDir}/${packageJSONFileName}`)) {

        displayPackageJSON = packageJSON.replace(`utilizes.$name`, `utilizes.${camelCase(fileName)}`).replace(/\$name/g, fileName)

        await writeFilePromise(`${outDir}/${packageJSONFileName}`, displayPackageJSON)

      }

      await createReadme(outDir, fileName, readme, displayPackageJSON)

      let currentState = ``

      try {

        currentState += await readFilePromise(`${outDir}/${fileName}.js`)

        currentState += await readFilePromise(`${outDir}/${fileTypeDefinition}`)

        currentState += await readFilePromise(`${outDir}/readme.md`)

        currentState = currentState.replace(/\n\t\s/g, ``)

      } catch {

      }

      if (prevState !== currentState) try {
        await execPromise(`npm run start --prefix ${outDir}`)
      } catch (error) {

        console.error(error)

        displayPackageJSON = packageJSON.replace(`$name`, `utilizes.${fileName}`).replace(`utilizes.$name`, `utilizes.${camelCase(fileName)}`).replace(/\$name/g, fileName)

        await writeFilePromise(`${outDir}/${packageJSONFileName}`, displayPackageJSON)

        await createReadme(outDir, fileName, readme, displayPackageJSON)

        await execPromise(`npm run start --prefix ${outDir}`)

      }

    }

  } catch (error) {
    console.error(error)
  }

})