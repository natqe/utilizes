export const
  createStyle = (css: string) => {

    const style = document.createElement('style')

    style.textContent = css

    return style

  }