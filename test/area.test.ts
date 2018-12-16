import { area } from '../src/area'

test(`Return true if the given area is found on a given element, else false`, () => {

  let sectionClicked: boolean

  document.body.innerHTML = `
  <section>
    <button id="button" />
  </section>'
  `

  addEventListener(`click`, () => sectionClicked = area(
    { pageX: 500, pageY: 500 },
    <HTMLElement>{
      tagName: 'SECTION',
      offsetHeight: 500,
      offsetWidth: 500,
      getBoundingClientRect() {
        return {
          width: 500,
          height: 500,
          top: 250,
          left: 250,
          bottom: 0,
          right: 0,
        }
      }
    }
  ))

  document.querySelector('button').click()

  expect(sectionClicked).toBe(true)

})