export const offset = (item: Element | Partial<ReturnType<Element['getBoundingClientRect']>>) => {

  const { top, left } = item instanceof Element ? item.getBoundingClientRect() : item

  return { top: top + pageYOffset || document.documentElement.scrollTop, left: left + pageXOffset || document.documentElement.scrollLeft }

}

export default offset