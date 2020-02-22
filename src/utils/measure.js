/**
 * Returns the x and y position of the mouse pointer when triggering the specified event.
 * @param {Event} event
 */
export function getPointerPosition (event) {
  return { x: event.x, y: event.y }
}

/**
 * Returns the position and size properties of an HTML element
 * @param {Object} params
 * @param {HTMLElement} params.element
 */
export function getRectPropertiesOf ({ element }) {
  return {
    height: element.offsetHeight,
    width: element.offsetWidth,
    x: element.clientLeft,
    y: element.clientTop
  }
}
