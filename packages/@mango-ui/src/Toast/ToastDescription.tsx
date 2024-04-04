import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface ToastDescriptionProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요없을 듯... 확인 후 제거
const ToastDescription = React.forwardRef<HTMLDivElement, ToastDescriptionProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ToastDescription.displayName = 'Toast.Description';

export default ToastDescription;
