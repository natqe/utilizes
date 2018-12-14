import inRange from 'lodash/inRange'
import { visiblePartOf } from './visible-part-of'

export const area = ({ pageX, pageY }: { pageX: number, pageY: number }, of: HTMLElement) => {

  const { x, y, offsetTop, offsetLeft } = visiblePartOf(of)

  return inRange(pageY, offsetTop, offsetTop + y) && inRange(pageX, offsetLeft, offsetLeft + x)

}

export default area