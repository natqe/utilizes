// import { execSync } from 'child_process'
// import { readdirSync, readFileSync } from 'fs'

// const dirs = readdirSync(`sub`)

// for (const dir of dirs) {

//   const packageJSON: { name: string } = JSON.parse(readFileSync(`sub/${dir}/package.json`, `utf8`))

//   if (!packageJSON.name.startsWith(`utilizes`)) console.log(execSync(`npm unpublish utilizes.${dir}@1.0.8 -f`).toString())

// }