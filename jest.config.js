module.exports = {
  // roots: [`${__dirname}/test`],
  testRegex: "(/test/.*|(\\.|/)(test|spec))\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "^lodash-es$": "lodash"
},
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  collectCoverage: true,
}