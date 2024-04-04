import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface ToastTitleProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요없을 듯... 확인 후 제거
const ToastTitle = React.forwardRef<HTMLDivElement, ToastTitleProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ToastTitle.displayName = 'Toast.Title';

export default ToastTitle;
