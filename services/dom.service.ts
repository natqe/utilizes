import { values, isNaN } from 'lodash'

export const
  offset = (item: Element | Partial<ReturnType<Element['getBoundingClientRect']>>) => {

    const { top, left } = item instanceof Element ? item.getBoundingClientRect() : item

    return { top: top + pageYOffset || document.documentElement.scrollTop, left: left + pageXOffset || document.documentElement.scrollLeft }

  },
  visiblePartOf = (elem: HTMLElement) => {

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

  },
  mapZIndex = () => values(document.querySelectorAll('body *')).
    map(element => ({
      element,
      zIndex: +getComputedStyle(element).zIndex
    })).
    filter(({ zIndex }) => !isNaN(zIndex)).
    sort((a, b) => a.zIndex - b.zIndex),
  createStyle = (css: string) => {

    const style = document.createElement('style')

    style.textContent = css

    return style

  },
  area = ({ pageX, pageY }: { pageX: number, pageY: number }, of: HTMLElement) => {

    const { x, y, offsetTop, offsetLeft } = visiblePartOf(of)

    return pageY > offsetTop && pageY < (offsetTop + y) && pageX > offsetLeft && pageX < (offsetLeft + x)

  }
