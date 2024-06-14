import React from 'react';

import Slot from '../internal/components/Slot';
import { ComponentPropsWithoutRef } from '../types/common';

import { ToastContext } from './Toast';

export interface ToastCloseProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const ToastClose = React.forwardRef<HTMLButtonElement, ToastCloseProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { handleClose } = React.useContext(ToastContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleClose();
    onClick?.(event);
  };

  return (
    <Component ref={ref} type="button" onClick={handleClick} {...rest}>
      {children ?? 'Close'}
    </Component>
  );
});

ToastClose.displayName = 'Toast.Close';

export default ToastClose;
