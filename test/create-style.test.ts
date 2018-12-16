import { createStyle } from '../src/create-style'

test(`Creating style element with the css text inserted to it`, () => {

  const
    css = `
      :root{
        font-size: calc(.25vh + .25vw + 10px);
      }
    `,
    style = createStyle(css)

  expect(style.tagName).toBe(`STYLE`)

  expect(style.textContent).toBe(css)

})