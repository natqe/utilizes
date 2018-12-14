module.exports = {
  // roots: [`${__dirname}/test`],
  testRegex: "(/test/.*|(\\.|/)(test|spec))\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  collectCoverage: true,
}