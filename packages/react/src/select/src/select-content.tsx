import React from 'react';

import { useComposedRefs } from '@mangoui/compose-refs';
import { Popper } from '@mangoui/popper';

import { SelectContentContext } from './select-content-context';
import { useSelectContext } from './select-context';
import { SelectViewportElement } from './select-viewport';
import { getTargetEl } from './utils/get-target-el';

export interface SelectContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Popper.Content>, 'onPlaced'> {
  /**
   * Close 될 때 Dropdown 컴포넌트 DOM 제거
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
  /**
   * DropdownItem 클릭시 close
   * @default true
   */
  closeOnItemClick?: boolean;
}

export type SelectContentElement = HTMLDivElement;

const SelectContent = React.forwardRef<SelectContentElement, SelectContentProps>((props, ref) => {
  const {
    style,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    closeOnBlur = true,
    closeOnItemClick = true,
    children,
    onBlur,
    onKeyDown,
    ...contentProps
  } = props;

  const { open, triggerPointerDownPosRef, contentId, onClose, dir, trigger } = useSelectContext();

  const [content, setContent] = React.useState<HTMLDivElement | null>(null);
  const [viewport, setViewport] = React.useState<SelectViewportElement | null>(null);

  const composedRefs = useComposedRefs(ref, (node) => {
    setContent(node);
  });
  // const contentRef = React.useRef<HTMLDivElement>(null);
  // const composedRefs = useComposedRefs(ref, contentRef);

  const initialize = React.useRef<boolean>(true);

  // onBlur 시 close
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
    const target = (event.target ?? event.currentTarget) as HTMLElement;
    const { activeElement } = target.ownerDocument;
    const relatedTarget = (event.relatedTarget ?? activeElement) as HTMLElement;

    const targetIsContent = content === relatedTarget || content?.contains(relatedTarget);

    const _targetEl = getTargetEl(trigger);
    const targetIsTarget = _targetEl === relatedTarget || _targetEl.contains(relatedTarget);
    // // !trigger && position 으로 위치 제어 하는 경우 targetIsTarget 은 의미 없으므로 false
    // if (!trigger && position?.top !== undefined && position?.left !== undefined) {
    //   targetIsTarget = false;
    // }

    // targetIsTarget 이 true 인 경우는 DropdownTrigger 에서 처리 - 여기서는 작동안하도록 처리
    const isValidBlur = !targetIsContent && !targetIsTarget;
    if (open && closeOnBlur && isValidBlur) {
      onClose();
    }

    onBlur?.(event);
  };

  // Esc 키 down 시 blur(blur 시 close)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (closeOnEsc && event.key === 'Escape') {
      onClose();
    }

    onKeyDown?.(event);
  };

  // const handleRef = React.useCallback(
  //   (node: any) => {
  //     setRef(composedRefs, node);
  //   },
  //   [composedRefs],
  // );

  React.useEffect(() => {
    if (open) {
      initialize.current = false;
      content?.focus();
    }
  }, [open, content]);

  React.useEffect(() => {
    if (content) {
      let pointerMoveDelta = { x: 0, y: 0 };

      const handlePointerMove = (event: PointerEvent): void => {
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
          y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0)),
        };
      };
      const handlePointerUp = (event: PointerEvent): void => {
        // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
          event.preventDefault();
        } else {
          // otherwise, if the event was outside the content, close.
          if (!content?.contains(event.target as HTMLElement)) {
            onClose();
          }
        }
        document.removeEventListener('pointermove', handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };

      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp, { capture: true, once: true });
      }

      return () => {
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp, { capture: true });
      };
    }
  }, [content, onClose, triggerPointerDownPosRef]);

  // React.useEffect(() => {
  //   const close = (): void => {
  //     onClose();
  //   };
  //   window.addEventListener('blur', close);
  //   window.addEventListener('resize', close);
  //   return () => {
  //     window.removeEventListener('blur', close);
  //     window.removeEventListener('resize', close);
  //   };
  // }, [onClose]);

  const contextValue = React.useMemo(
    () => ({
      content,
      viewport,
      closeOnItemClick,
      onViewportChange: setViewport,
    }),
    [closeOnItemClick, content, viewport],
  );

  if (initialize.current && !open && !forceMount) {
    return null;
  }

  if (!open && !forceMount && destroyOnClose) {
    return null;
  }

  return (
    <SelectContentContext.Provider value={contextValue}>
      <Popper.Content
        data-state={open ? 'open' : 'closed'}
        role="listbox"
        id={contentId}
        dir={dir}
        {...contentProps}
        ref={composedRefs}
        tabIndex={-1}
        style={{
          // display: open ? undefined : 'none',
          // boxSizing: 'border-box',
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
    </SelectContentContext.Provider>
  );
});

SelectContent.displayName = 'Select.Content';

export default SelectContent;
