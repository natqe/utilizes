import get from 'lodash/get'
import random from 'lodash/random'
import toSafeInteger from 'lodash/toSafeInteger'
import { createStyle } from './create-style'
import { interval } from './interval'

export const easyStyleShadow = (css: { [k: string]: string }, timeout = 0) => {

  let
    stopTracking = false,
    previousAll: Array<Element> = []

  const token = `easy-style-shadow-${random(toSafeInteger(Infinity))}`

  interval(
    () => {

      const all = document.all || document.getElementsByTagName(`*`)

      if (previousAll.length !== all.length) {

        previousAll = Array.from(all)

        for (const { shadowRoot, classList, localName } of previousAll) if (shadowRoot && css[localName] && !classList.contains(token)) {

          const newStyle = createStyle(css[localName])

          classList.add(token)

          try {

            const { styleSheets, children } = shadowRoot

            shadowRoot.insertBefore(newStyle, get(styleSheets.item(styleSheets.length - 1), `ownerNode.nextSibling`) || children.item(0))

          } catch {
            shadowRoot.appendChild(newStyle)
          }

        }

      }

      return stopTracking

    },
    timeout
  )

  return () => stopTracking = true

}

export default easyStyleShadow