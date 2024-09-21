import React from 'react';

import { Popper } from '@melio-ui/popper';
import { useMergedRef } from '@melio-ui/use-merged-ref';

// import { debounce } from '../../internal/debounce';
import setRef from '../../internal/set-ref';

import { getTargetEl } from './helpers/get-target-el';
// import { setPosition } from './helpers/set-position';
import { PopoverContext } from './popover';

// import { PopoverPortalContext } from './popover-portal';

// export interface PositionValue {
//   left: number;
//   top: number;
// }

// export interface TriggerPositionValue {
//   vertical: 'top' | 'center' | 'bottom';
//   horizontal: 'left' | 'center' | 'right';
// }

export interface PopoverContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Popper.Content>, 'onPlaced'> {
  // /** target position */
  // triggerPosition?: TriggerPositionValue;
  // /** popover self position */
  // contentPosition?: TriggerPositionValue;
  // /** Popover Content position */
  // position?: PositionValue;
  // /** Popover Content z-index */
  // zIndex?: number;
  /**
   * Close 될 때 Popover 컴포넌트 DOM 제거
   * forceMount=true 시 unabled 됨
   * @default true
   */
  destroyOnClose?: boolean;
  forceMount?: boolean;
  /** ESC 키 사용시 close
   * @default true
   */
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
  const {
    // role,
    style,
    // triggerPosition = { vertical: 'bottom', horizontal: 'left' },
    // contentPosition,
    // position,
    // zIndex = 1300,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    closeOnBlur = true,
    children,
    onBlur,
    onKeyDown,
    ...rest
  } = props;
  const { open, triggerRef, handleClose } = React.useContext(PopoverContext);
  // const { containerEl } = React.useContext(PopoverPortalContext);

  const popoverContentRef = React.useRef<HTMLDivElement>(null);
  const popoverContentMergedRef = useMergedRef(popoverContentRef, ref);

  const initialize = React.useRef<boolean>(true);

  // onBlur 시 close
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
    const target = (event.target ?? event.currentTarget) as HTMLElement;
    const { activeElement } = target.ownerDocument;
    const relatedTarget = (event.relatedTarget ?? activeElement) as HTMLElement;

    const targetIsPopover =
      popoverContentRef.current === relatedTarget ||
      popoverContentRef.current?.contains(relatedTarget);

    const _targetEl = getTargetEl(triggerRef.current);
    const targetIsTarget = _targetEl === relatedTarget || _targetEl.contains(relatedTarget);
    // // !triggerRef.current && position 으로 위치 제어 하는 경우 targetIsTarget 은 의미 없으므로 false
    // if (!triggerRef.current && position?.top !== undefined && position?.left !== undefined) {
    //   targetIsTarget = false;
    // }

    // targetIsTarget 이 true 인 경우는 PopoverTrigger 에서 처리 - 여기서는 작동안하도록 처리
    const isValidBlur = !targetIsPopover && !targetIsTarget;
    // const isValidBlur = !targetIsPopover;
    if (open && closeOnBlur && isValidBlur) {
      handleClose();
    }

    onBlur?.(event);
  };

  // Esc 키 down 시 blur(blur 시 close)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (closeOnEsc && event.key === 'Escape') {
      handleClose();
    }

    onKeyDown?.(event);
  };

  const handleRef = React.useCallback(
    (node: any) => {
      setRef(popoverContentMergedRef, node);
      // setPosition({
      //   triggerEl: triggerRef.current,
      //   popoverContentEl: popoverContentRef.current,
      //   triggerPosition,
      //   contentPosition,
      //   position,
      //   containerEl,
      // });
    },
    [popoverContentMergedRef],
  );

  // // 화면 Resizing 시 position 처리
  // React.useEffect(() => {
  //   if (!open) {
  //     return undefined;
  //   }

  //   const updatePosition = debounce(() => {
  //     setPosition({
  //       triggerEl: triggerRef.current,
  //       popoverContentEl: popoverContentRef.current,
  //       triggerPosition,
  //       contentPosition,
  //       position,
  //       containerEl,
  //     });
  //   }, 10);

  //   // const targetElement = typeof targetEl === 'function' ? targetEl() : targetEl;
  //   const targetElement = triggerRef.current;
  //   // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  //   const doc = targetElement?.ownerDocument || document;
  //   // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  //   const containerWindow = doc.defaultView || window;

  //   window.addEventListener('scroll', updatePosition, { capture: true });
  //   containerWindow.addEventListener('resize', updatePosition);

  //   return () => {
  //     updatePosition.cancel();
  //     window.removeEventListener('scroll', updatePosition);
  //     containerWindow.removeEventListener('resize', updatePosition);
  //   };
  // }, [containerEl, contentPosition, open, position, triggerPosition, triggerRef]);

  React.useEffect(() => {
    if (open) {
      initialize.current = false;
      popoverContentRef.current?.focus();
    }
  }, [open]);

  if (initialize.current && !open && !forceMount) {
    return null;
  }

  if (!open && !forceMount && destroyOnClose) {
    return null;
  }

  return (
    <Popper.Content
      data-state={open ? 'open' : 'closed'}
      {...rest}
      ref={handleRef}
      role="dialog"
      tabIndex={-1}
      style={{
        // position: 'absolute',
        display: open ? undefined : 'none',
        // opacity: open ? 1 : 0,
        // zIndex,
        ...style,
        ...{
          '--melio-popover-content-transform-origin': 'var(--melio-popper-transform-origin)',
          '--melio-popover-content-available-width': 'var(--melio-popper-available-width)',
          '--melio-popover-content-available-height': 'var(--melio-popper-available-height)',
          '--melio-popover-trigger-width': 'var(--melio-popper-anchor-width)',
          '--melio-popover-trigger-height': 'var(--melio-popper-anchor-height)',
        },
      }}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {children}
    </Popper.Content>
  );
});

PopoverContent.displayName = 'Popover.Content';

export default PopoverContent;
