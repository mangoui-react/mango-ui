export default function getTargetEl(targetEl?: null | Element | (() => Element)): Element {
  let targetElement = typeof targetEl === 'function' ? targetEl() : targetEl;
  targetElement = targetElement ?? document.body;

  return targetElement;
}
