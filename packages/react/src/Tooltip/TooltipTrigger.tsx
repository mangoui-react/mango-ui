import React from 'react';

import { useMergedRef } from '../hooks';
// import { useMergedRef } from '../hooks';
import Slot from '../internal/components/Slot';
import { ComponentPropsWithoutRef } from '../types/common';

import { TooltipContext } from './Tooltip';

// import { PopoverContext } from './Popover';

export interface TooltipTriggerProps extends ComponentPropsWithoutRef<'button'> {
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
