import React from 'react';

import { createPopper } from '@popperjs/core';

import { useMergedRef } from '@melio-ui/use-merged-ref';

import setRef from '../../internal/set-ref';

import { TooltipContext } from './tooltip';
import { Placement } from './types';

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Tootip 이 display되는 위치
   * @default 'top'
   */
  placement?: Placement;
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>((props, ref) => {
  const { placement = 'top', children, ...rest } = props;
  const { open, triggerRef } = React.useContext(TooltipContext);

  const tooltipRef = React.useRef<HTMLDivElement>();
  const tooltipMergedRef = useMergedRef(tooltipRef, ref);

  const handleOpen = React.useCallback(() => {
    if (!open || !triggerRef.current || !tooltipRef.current) {
      return;
    }

    createPopper(triggerRef.current, tooltipRef.current, {
      placement,
      modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
    });
  }, [open, placement, triggerRef]);

  const handleRef = React.useCallback(
    (node: any) => {
      setRef(tooltipMergedRef, node);
      handleOpen();
    },
    [handleOpen, tooltipMergedRef],
  );

  if (!open) {
    return null;
  }

  return (
    <div
      // data-placement={placement} // @popperjs/core 에서 data-popper-placement 로 정의함
      {...rest}
      ref={handleRef}
    >
      {children}
    </div>
  );
});

TooltipContent.displayName = 'Tooltip.Content';

export default TooltipContent;
