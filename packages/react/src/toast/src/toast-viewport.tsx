import React from 'react';

import { useMergedRef } from '@mangoui/use-merged-ref';

import { TypeAttributes } from '../../types/common';

import { ToastContext } from './toast';

export interface ToastViewportProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Tootip 이 display되는 위치
   * @default 'top'
   */
  placement?: TypeAttributes.Placement;
}

const ToastViewport = React.forwardRef<HTMLDivElement, ToastViewportProps>((props, ref) => {
  const { placement = 'top', children, ...rest } = props;
  const { onViewportChange } = React.useContext(ToastContext);
  const handleViewportRef = useMergedRef(ref, onViewportChange);

  return (
    <div data-placement={placement} tabIndex={-1} {...rest} ref={handleViewportRef}>
      {children}
    </div>
  );
});

ToastViewport.displayName = 'Toast.Viewport';

export default ToastViewport;
