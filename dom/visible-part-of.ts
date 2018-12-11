import { offset } from './offset'

export const visiblePartOf = (elem: HTMLElement) => {

  const visible = {
    x: 0,
    y: 0,
    offsetTop: 0,
    offsetLeft: 0
  }

  if (!elem) return visible

  const
    { top, bottom, left, right } = elem.getBoundingClientRect(),
    { top: offsetTop, left: offsetLeft } = offset({ top, left })

  visible.offsetTop = offsetTop

  visible.offsetLeft = offsetLeft

  visible.y = Math.max(
    0,
    top > 0 ? Math.min(elem.offsetHeight, innerHeight - top) : (bottom < innerHeight ? bottom : innerHeight)
  )

  visible.x = Math.max(
    0,
    left > 0 ? Math.min(elem.offsetWidth, innerWidth - left) : (right < innerWidth ? right : innerWidth)
  )

  return visible

}

export default visiblePartOf