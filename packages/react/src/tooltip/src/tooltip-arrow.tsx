import React from 'react';

import { Popper } from '@mangoui/popper';

type TooltipArrowElement = React.ElementRef<typeof Popper.Arrow>;
export interface TooltipArrowProps extends React.ComponentPropsWithoutRef<typeof Popper.Arrow> {}

const TooltipArrow = React.forwardRef<TooltipArrowElement, TooltipArrowProps>((props, ref) => {
  return <Popper.Arrow {...props} ref={ref} />;
});

TooltipArrow.displayName = 'Tooltip.Arrow';

export default TooltipArrow;
