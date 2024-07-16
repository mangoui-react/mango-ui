import React from 'react';

export interface TooltipArrowProps extends React.ComponentPropsWithoutRef<'div'> {}

// TODO: 확인후 필요 없으면 제거
const TooltipArrow = React.forwardRef<HTMLDivElement, TooltipArrowProps>((props, ref) => {
  // const { placement } = React.useContext(TooltipContentContext);

  return (
    <div
      {...props}
      ref={ref}
      // data-placement={placement}
    />
  );
});

TooltipArrow.displayName = 'Tooltip.Arrow';

export default TooltipArrow;
