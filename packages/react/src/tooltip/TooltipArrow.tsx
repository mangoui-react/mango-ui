import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

// import { TooltipContentContext } from './TooltipContent';

export interface TooltipArrowProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 확인후 필요 없으면 제거
const TooltipArrow = React.forwardRef<HTMLDivElement, TooltipArrowProps>((props, ref) => {
  // const { placement } = React.useContext(TooltipContentContext);

  return (
    <div
      ref={ref}
      // data-placement={placement}
      {...props}
    />
  );
});

TooltipArrow.displayName = 'Tooltip.Arrow';

export default TooltipArrow;
