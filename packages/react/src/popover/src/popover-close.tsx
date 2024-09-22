import React from 'react';

import { Slot } from '@melio-ui/slot';

import { PopoverContext } from './popover';

export interface PopoverCloseProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { onClose } = React.useContext(PopoverContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onClose();
    onClick?.(event);
  };

  return (
    <Component type="button" {...rest} ref={ref} onClick={handleClick}>
      {children ?? 'Close'}
    </Component>
  );
});

PopoverClose.displayName = 'Popover.Close';

export default PopoverClose;
