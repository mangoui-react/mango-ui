import React from 'react';

import { ModalContext } from './modal';

export interface ModalContentProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Close 될 때 Modal 컴포넌트 DOM 제거
   * forceMount=true 시 unabled 됨
   * @default true
   */
  destroyOnClose?: boolean;
  forceMount?: boolean;
  /** ESC 키 사용시 close
   * @default true
   */
  closeOnEsc?: boolean;
}

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>((props, ref) => {
  const {
    style,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    children,
    onKeyDown,
    ...rest
  } = props;
  const { role, open, handleOpen, handleClose } = React.useContext(ModalContext);

  const initialize = React.useRef<boolean>(true);

  React.useEffect(() => {
    if (open) {
      handleOpen();
      initialize.current = false;
    }
  }, [handleOpen, open]);

  // Esc 키 down 시 close)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (closeOnEsc && event.key === 'Escape') {
      handleClose();
    }
    onKeyDown?.(event);
  };

  // console.log('Modal Render initialize.current', initialize.current);
  if (initialize.current && !open && !forceMount) {
    return null;
  }

  if (!open && !forceMount && destroyOnClose) {
    return null;
  }

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      {...rest}
      ref={ref}
      role={role}
      style={{
        // display: !open && !destroyOnClose && state === 'exited' ? 'none' : undefined,
        display: open ? undefined : 'none',
        ...style,
      }}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
});

ModalContent.displayName = 'Modal.Content';

export default ModalContent;
