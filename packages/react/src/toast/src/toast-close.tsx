import React from 'react';

import { Slot } from '@mangoui/slot';

import { ToastContext } from './toast';

export interface ToastCloseProps extends React.ComponentPropsWithoutRef<'button'> {
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
    <Component type="button" {...rest} ref={ref} onClick={handleClick}>
      {children ?? 'Close'}
    </Component>
  );
});

ToastClose.displayName = 'Toast.Close';

export default ToastClose;
