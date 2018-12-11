import values from 'lodash/values'
import isNaN from 'lodash/isNaN'

export const mapZIndex = () => values(document.querySelectorAll('body *')).
  map(element => ({
    element,
    zIndex: +getComputedStyle(element).zIndex
  })).
  filter(({ zIndex }) => !isNaN(zIndex)).
  sort((a, b) => a.zIndex - b.zIndex)

export default mapZIndex