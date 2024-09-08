import React from 'react';

import { DialogContext } from './dialog';

export interface DialogContentProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Close 될 때 Dialog 컴포넌트 DOM 제거
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

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const {
    style,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    children,
    onKeyDown,
    ...rest
  } = props;
  const { role, open, handleOpen, handleClose } = React.useContext(DialogContext);

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

  // console.log('Dialog Render initialize.current', initialize.current);
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

DialogContent.displayName = 'Dialog.Content';

export default DialogContent;
