import each from 'lodash/each'
import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import { createStyle } from './create-style'
import { interval } from './interval'

export const easyStyleShadow = (css: { [k: string]: string }, timeout = 0) => {

  let stopTracking = false

  const
    attachStyle = (items: NodeListOf<Element> | Array<Element>, styleText: string) => each(items, ({ shadowRoot }) => {

      const newStyle = createStyle(styleText)

      try {

        const { styleSheets, children } = shadowRoot

        shadowRoot.insertBefore(newStyle, get(styleSheets.item(styleSheets.length - 1), `ownerNode.nextSibling`) || children.item(0))

      } catch {
        shadowRoot.appendChild(newStyle)
      }

    }),
    initialSelect = map(css, (styleText, selectors) => {

      const elements = Array.from(document.querySelectorAll(selectors))

      attachStyle(elements, styleText)

      return { selectors, styleText, elements }

    })

  interval(
    () => {


      for (const item of initialSelect) {

        const newElements = filter(document.querySelectorAll(item.selectors), target => !includes(item.elements, target))

        if (newElements.length) {

          item.elements = [...item.elements, ...newElements]

          attachStyle(newElements, item.styleText)

        }

      }

      return stopTracking

    },
    timeout
  )

  return () => stopTracking = true

}

export default easyStyleShadow