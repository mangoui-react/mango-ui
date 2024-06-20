import React from 'react';

import { Slot } from '@melio-ui/slot';

import { PopoverContext } from './Popover';

export interface PopoverCloseProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { handleClose } = React.useContext(PopoverContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleClose();
    onClick?.(event);
  };

  return (
    <Component ref={ref} type="button" onClick={handleClick} {...rest}>
      {children ?? 'Close'}
    </Component>
  );
});

PopoverClose.displayName = 'Popover.Close';

export default PopoverClose;
