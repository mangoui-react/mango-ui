import React from 'react';

import { Slot } from '@melio-ui/slot';
import { useMergedRef } from '@melio-ui/use-merged-ref';

import { TooltipContext } from './Tooltip';

export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>((props, ref) => {
  const { children, asChild, onMouseOver, onMouseOut, ...rest } = props;
  const { open, triggerRef, handleOpen, handleClose } = React.useContext(TooltipContext);
  const handleTriggerRef = useMergedRef(triggerRef, ref);

  const Component = asChild ? Slot : 'button';

  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleOpen();
    onMouseOver?.(event);
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleClose();
    onMouseOut?.(event);
  };

  return (
    <Component
      type="button"
      data-state={open ? 'open' : 'closed'}
      {...rest}
      ref={handleTriggerRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children ?? 'Tooltip'}
    </Component>
  );
});

TooltipTrigger.displayName = 'Tooltip.Trigger';

export default TooltipTrigger;
