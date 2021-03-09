/**
 * Kraken cli compact library. used to preview kraken rendering.
 */
export function setElementStyle(dom, object) {
  if (object == null) return;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      dom.style[key] = object[key];
    }
  }
}

function setElementProps(el, props) {
  let keys = Object.keys(props);
  for (let key of keys) {
    if (key === 'style') {
      setElementStyle(el, props[key]);
    } else {
      el.setAttribute(key, props[key]);
    }
  }
}

export function createElement(tag, props, child) {
  const el = document.createElement(tag);
  setElementProps(el, props);
  if (Array.isArray(child)) {
    child.forEach((c) => el.appendChild(c));
  } else if (child) {
    el.appendChild(child);
  }
  return el;
}
