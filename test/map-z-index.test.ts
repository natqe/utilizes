import { mapZIndex } from '../map-z-index'

test(``, () => {

  const
    tagName = `div`,
    newChild = document.createElement(tagName),
    newChildZIndex = 3,
    otherChild = document.createElement(tagName)

  newChild.style.zIndex = `${newChildZIndex}`

  document.body.appendChild(newChild)

  document.body.appendChild(otherChild)

  expect(mapZIndex()).toEqual([
    {
      element: otherChild,
      zIndex: 0
    },
    {
      element: newChild,
      zIndex: newChildZIndex
    }
  ])

})