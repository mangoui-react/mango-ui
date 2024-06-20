import { PopoverContentProps, TriggerPositionValue } from '../PopoverContent';

interface RectType {
  width: number;
  height: number;
}

function getOffsetTop(
  rect: DOMRect | RectType,
  vertical?: TriggerPositionValue['vertical'],
): number {
  let offset = 0;

  if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(
  rect: DOMRect | RectType,
  horizontal?: TriggerPositionValue['horizontal'],
): number {
  let offset = 0;

  if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getParentPos(rect: DOMRect | null):
  | DOMRect
  | {
      top: number;
      left: number;
    } {
  if (!rect) return { top: 0, left: 0 };

  return rect;
}

interface UsePositionParams
  extends Pick<PopoverContentProps, 'triggerPosition' | 'contentPosition' | 'position'> {
  triggerEl: HTMLButtonElement | null;
  popoverContentEl: HTMLDivElement | null;
  containerEl: HTMLElement | Element | undefined;
}
export function setPosition({
  triggerEl,
  popoverContentEl,
  triggerPosition,
  contentPosition,
  position,
  containerEl,
}: UsePositionParams): void {
  if (!popoverContentEl) return;
  if (position?.top !== undefined && position?.left !== undefined) {
    const { top, left } = position;
    popoverContentEl.style.top = `${top}px`;
    popoverContentEl.style.left = `${left}px`;
  } else {
    // triggerPosition
    // const targetElement = typeof triggerEl === 'function' ? triggerEl() : triggerEl;
    const targetElement = triggerEl ?? document.body;
    const targetRect = targetElement.getBoundingClientRect();

    let top = targetRect?.top + getOffsetTop(targetRect, triggerPosition?.vertical);
    let left = targetRect?.left + getOffsetLeft(targetRect, triggerPosition?.horizontal);

    // contentPosition
    const popoverContentRect = {
      width: popoverContentEl.offsetWidth,
      height: popoverContentEl.offsetHeight,
    };
    const selfTransformOrigin = {
      vertical: getOffsetTop(popoverContentRect, contentPosition?.vertical),
      horizontal: getOffsetLeft(popoverContentRect, contentPosition?.horizontal),
    };

    // popover의 container element
    const containerElement = (containerEl ?? document.body) as HTMLElement;

    // Popover의 container props로 넘겨주는 엘리먼트에는 position: relative 속성이 필요함!!! (ex. Pickers, Select, Dropdown, etc...)
    // TODO: 좀 더 좋은 방법으로 예외를 처리할 수 있을지?
    const isRelative = containerElement.style.position === 'relative'; // container props으로 받는 element가 relative 속성이 아닐 수 있음.
    const containerRect = isRelative ? containerElement.getBoundingClientRect() : null;
    const { top: parentTop, left: parentLeft } = getParentPos(containerRect);

    top -= selfTransformOrigin.vertical - (containerRect ? 0 : window.scrollY);
    left -= selfTransformOrigin.horizontal;
    const bottom = top + popoverContentRect.height;
    const right = left + popoverContentRect.width;
    // top -= parentTop;
    // left -= parentLeft;

    // 창 사이즈에 맞게 계산
    const ownerDocument = targetElement?.ownerDocument || document;
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const containerWindow = ownerDocument.defaultView || window;

    const marginThreshold = 16;
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;

    if (top < marginThreshold) {
      const diff = top - marginThreshold;
      // top -= diff; // 위는 넘어가도록 구현 (주석 풀면 top 16에서 고정 - 안넘어감)
      selfTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold + window.scrollY) {
      // const diff = bottom - heightThreshold - window.scrollY; // 아래로 넘어가지 않고 bottom 16 으로 고정되는 로직
      const diff = targetRect.height + popoverContentRect.height;
      top -= diff;
      selfTransformOrigin.vertical += diff;
    }

    if (left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      selfTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      selfTransformOrigin.horizontal += diff;
    }

    // 이 위치에서 연산해야 정상적으로 계산됨
    top -= parentTop;
    left -= parentLeft;

    popoverContentEl.style.top = `${top}px`;
    popoverContentEl.style.left = `${left}px`;
    popoverContentEl.style.transformOrigin = `${selfTransformOrigin.horizontal}px ${selfTransformOrigin.vertical}px`;
  }
  popoverContentEl.focus();
}
