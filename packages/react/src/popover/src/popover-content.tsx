import React from 'react';

import debounce from 'lodash/debounce';
import { Transition, TransitionStatus } from 'react-transition-group';

import { useEffectOnce } from '@melio-ui/use-effect-once';
import { useMergedRef } from '@melio-ui/use-merged-ref';

import { getTargetEl } from './helpers/get-target-el';
import { setPosition } from './helpers/set-position';
import { PopoverContext } from './popover';
import { PopoverPortalContext } from './popover-portal';

export interface PositionValue {
  left: number;
  top: number;
}

export interface TriggerPositionValue {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<'div'> {
  /** target position */
  triggerPosition?: TriggerPositionValue;
  /** popover self position */
  contentPosition?: TriggerPositionValue;
  /** Popover Content position */
  position?: PositionValue;
  /** Popover Content z-index */
  zIndex?: number;
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
  onEntered?: () => void;
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
  const {
    role,
    style,
    triggerPosition = { vertical: 'bottom', horizontal: 'left' },
    contentPosition,
    position,
    zIndex = 1300,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    closeOnBlur = true,
    children,
    onBlur,
    onKeyDown,
    onEntered,
    ...rest
  } = props;
  const { open, triggerRef, handleClose } = React.useContext(PopoverContext);
  const { containerEl } = React.useContext(PopoverPortalContext);

  const nodeRef = React.useRef(null); // StrictMode 사용시 콘솔에러 메시지 방지를 위해

  const popoverContentRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useMergedRef(popoverContentRef, ref);

  const [exited, setExited] = React.useState<boolean>(!open);
  const initialize = React.useRef<boolean>(true);

  const mountPopover = open && !exited;

  // onBlur 시 close
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
    const target = (event.target ?? event.currentTarget) as HTMLElement;
    const { activeElement } = target.ownerDocument;
    const relatedTarget = (event.relatedTarget ?? activeElement) as HTMLElement;

    const targetIsPopover =
      popoverContentRef.current === relatedTarget ||
      popoverContentRef.current?.contains(relatedTarget);

    const _targetEl = getTargetEl(triggerRef.current);
    let targetIsTarget = _targetEl === relatedTarget || _targetEl.contains(relatedTarget);
    // !triggerRef.current && position 으로 위치 제어 하는 경우 targetIsTarget 은 의미 없으므로 false
    if (!triggerRef.current && position?.top !== undefined && position?.left !== undefined) {
      targetIsTarget = false;
    }

    // targetIsTarget 이 true 인 경우는 PopoverTrigger 에서 처리 - 여기서는 작동안하도록 처리
    const isValidBlur = !targetIsPopover && !targetIsTarget;
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

  // onEntered 시 focus
  const handleEntered = React.useCallback(() => {
    setPosition({
      triggerEl: triggerRef.current,
      popoverContentEl: popoverContentRef.current,
      triggerPosition,
      contentPosition,
      position,
      containerEl,
    });
    onEntered?.();
  }, [containerEl, contentPosition, onEntered, position, triggerPosition, triggerRef]);

  // 화면 Resizing 시 position 처리
  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    const updatePosition = debounce(() => {
      setPosition({
        triggerEl: triggerRef.current,
        popoverContentEl: popoverContentRef.current,
        triggerPosition,
        contentPosition,
        position,
        containerEl,
      });
    }, 10);

    // const targetElement = typeof targetEl === 'function' ? targetEl() : targetEl;
    const targetElement = triggerRef.current;
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const doc = targetElement?.ownerDocument || document;
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const containerWindow = doc.defaultView || window;

    window.addEventListener('scroll', updatePosition, { capture: true });
    containerWindow.addEventListener('resize', updatePosition);

    return () => {
      updatePosition.cancel();
      window.removeEventListener('scroll', updatePosition);
      containerWindow.removeEventListener('resize', updatePosition);
    };
  }, [containerEl, contentPosition, open, position, triggerPosition, triggerRef]);

  const handleOpened = (): void => {
    if (exited) {
      setExited(false);
    }
    initialize.current = false;
  };

  const handleExited = (): void => {
    setExited(true);
  };

  useEffectOnce(() => {
    return () => {
      handleExited();
    };
  }); // will unmount

  React.useEffect(() => {
    if (open) {
      handleOpened();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]); // exited 에 의해 handleOpened 함수가 새로 정의 되어 2번씩 호출되는 것을 방지하기 위해 open 만 으로 판단

  if (initialize.current && !mountPopover && !forceMount) {
    return null;
  }

  if (!mountPopover && !forceMount && destroyOnClose) {
    return null;
  }

  return (
    <Transition
      nodeRef={nodeRef}
      appear
      in={open}
      timeout={10}
      onEntered={handleEntered}
      onExited={handleExited}
    >
      {(state: TransitionStatus) => (
        <div
          ref={handleRef}
          role={role}
          // data-state={state === 'entered' ? 'open' : 'closed'}
          data-state={open ? 'open' : 'closed'}
          tabIndex={-1}
          style={{
            position: 'absolute',
            // display: !open && !destroyOnClose && state === 'exited' ? 'none' : undefined,
            display: open && state === 'entered' ? undefined : 'none',
            opacity: state === 'entered' ? 1 : 0,
            zIndex,
            ...style,
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...rest}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

PopoverContent.displayName = 'Popover.Content';

export default PopoverContent;
