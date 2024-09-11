// 참고: https://github.com/chakra-ui/zag/blob/main/packages/utilities/remove-scroll/src/index.ts
import { isIos } from './platform';

const LOCK_CLASSNAME = 'data-scroll-locked';

function assignStyle(
  el: HTMLElement | null | undefined,
  style: Partial<CSSStyleDeclaration>,
): (() => void) | undefined {
  if (!el) return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    // body 에 기존 style attribute 가 없다면 style attribute 제거
    if (previousStyle) {
      el.style.cssText = previousStyle;
    } else {
      el.removeAttribute('style');
    }
  };
}

function setCSSProperty(
  el: HTMLElement | null | undefined,
  property: string,
  value: string,
): (() => void) | undefined {
  if (!el) return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
      // html 에 기존 style attribute 가 없다면 style attribute 제거
      el.removeAttribute('style');
    }
  };
}

function getPaddingProperty(documentElement: HTMLElement): 'paddingLeft' | 'paddingRight' {
  // RTL <body> scrollbar
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? 'paddingLeft' : 'paddingRight';
}

export function preventBodyScroll(_document?: Document): (() => void) | undefined {
  const doc = _document ?? document;
  const win = doc.defaultView ?? window;

  const { documentElement, body } = doc;

  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked) return;

  body.setAttribute(LOCK_CLASSNAME, '');

  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = (): (() => void) | undefined =>
    setCSSProperty(documentElement, '--scrollbar-width', `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);

  const setStyle = (): (() => void) | undefined =>
    assignStyle(body, {
      overflow: 'hidden',
      [paddingProperty]: `${scrollbarWidth}px`,
      // pointerEvents: 'none',
    });

  // Only iOS doesn't respect `overflow: hidden` on document.body
  const setIOSStyle = (): (() => void) => {
    const { scrollX, scrollY, visualViewport } = win;

    // iOS 12 does not support `visuaViewport`.
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;

    const restoreStyle = assignStyle(body, {
      position: 'fixed',
      overflow: 'hidden',
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: '0',
      [paddingProperty]: `${scrollbarWidth}px`,
    });

    return () => {
      restoreStyle?.();
      win.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
    };
  };

  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];

  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
    // body.removeAttribute('style');
  };
}
