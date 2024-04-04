import React from 'react';

import ToastClose, { ToastCloseProps } from './ToastClose';

export interface ToastActionProps extends ToastCloseProps {}

const ToastAction = React.forwardRef<HTMLButtonElement, ToastActionProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ToastClose ref={ref} {...rest}>
      {children ?? 'Action'}
    </ToastClose>
  );
});

ToastAction.displayName = 'Toast.Action';

export default ToastAction;
