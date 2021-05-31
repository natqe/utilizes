import each from 'lodash-es/each'
import filter from 'lodash-es/filter'
import get from 'lodash-es/get'
import includes from 'lodash-es/includes'
import { createStyle } from './create-style'
import { doDeclare } from './do-declare'
import { interval } from './interval'
import { push } from './push'

export const easyStyleShadow = (css: { [k: string]: string }, timeout = 0) => {

  let
    stopTracking = false,
    mapElements: { [k: string]: Array<Element> } = {}

  interval(
    doDeclare(() => {

      each(css, (styleText, selectors) => {
        if (styleText && selectors) {

          const newElements = filter(document.querySelectorAll(selectors), target => !includes(mapElements[selectors], target))

          if (newElements.length) {

            push(mapElements, selectors, ...newElements)

            for (const { shadowRoot } of newElements) {

              const newStyle = createStyle(styleText)

              try {

                const { styleSheets, children } = shadowRoot

                shadowRoot.insertBefore(newStyle, get(styleSheets.item(styleSheets.length - 1), `ownerNode.nextSibling`) || children.item(0))

              } catch {
                shadowRoot.appendChild(newStyle)
              }

            }

          }

        }
      })

      return stopTracking

    }),
    timeout
  )

  return () => stopTracking = true

}

export default easyStyleShadow