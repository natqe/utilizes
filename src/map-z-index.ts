import { values } from 'lodash-es'
import { isNaN } from 'lodash-es'

export const mapZIndex = () => values(document.querySelectorAll('body *')).
  map(element => ({
    element,
    zIndex: +getComputedStyle(element).zIndex
  })).
  filter(({ zIndex }) => !isNaN(zIndex)).
  sort((a, b) => a.zIndex - b.zIndex)

export default mapZIndex