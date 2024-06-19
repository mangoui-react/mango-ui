import React from 'react';

import { useMergedRef } from '@melio-ui/use-merged-ref';

import Slot from '../internal/components/Slot';

import { PopoverContext } from './Popover';

export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { open, triggerRef, handleOpen, handleClose } = React.useContext(PopoverContext);
  const handleTriggerRef = useMergedRef(triggerRef, ref);

  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!open) {
      handleOpen();
    } else {
      handleClose();
    }

    onClick?.(event);
  };

  return (
    <Component
      type="button"
      data-state={open ? 'open' : 'closed'}
      {...rest}
      ref={handleTriggerRef}
      onClick={handleClick}
    >
      {children ?? 'Popover'}
    </Component>
  );
});

PopoverTrigger.displayName = 'Popover.Trigger';

export default PopoverTrigger;
