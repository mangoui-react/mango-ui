/** @deprecated */
import { useCallback } from 'react';

import { PopoverContentProps } from '../popover-content';

function getOffsetTop(rect: DOMRect, vertical?: 'top' | 'center' | 'bottom'): number {
  let offset = 0;
  if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }
  return offset;
}

function getOffsetLeft(rect: DOMRect, horizontal?: 'left' | 'center' | 'right'): number {
  let offset = 0;
  if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }
  return offset;
}

interface UsePositionParams
  extends Pick<PopoverContentProps, 'triggerPosition' | 'contentPosition' | 'position'> {
  targetEl: HTMLButtonElement | null;
  popoverEl: HTMLDivElement | null;
}
export function usePosition({
  targetEl,
  popoverEl,
  triggerPosition,
  contentPosition,
  position,
}: UsePositionParams): { left?: number; top?: number } {
  const getPosition = useCallback(() => {
    // position 이 설정되어 있다면 triggerPosition 은 무시됨
    if (position?.top !== undefined && position?.left !== undefined) {
      const { top, left } = position;
      return { top, left };
    }

    // triggerPosition
    // let anchorElement = typeof targetEl === 'function' ? targetEl() : targetEl;
    const anchorElement = targetEl ?? document.body;
    const anchorRect = anchorElement.getBoundingClientRect();
    // console.log('anchorRect', anchorRect);

    const top = anchorRect?.top + getOffsetTop(anchorRect, triggerPosition?.vertical);
    const left = anchorRect?.left + getOffsetLeft(anchorRect, triggerPosition?.horizontal);

    // contentPosition
    // console.log('popoverEl', popoverEl?.offsetWidth);
    return { top, left };
  }, [position, targetEl, triggerPosition?.vertical, triggerPosition?.horizontal]);

  return getPosition();
}
