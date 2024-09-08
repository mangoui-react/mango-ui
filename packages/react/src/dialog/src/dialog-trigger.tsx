import React from 'react';

import { Slot } from '@melio-ui/slot';

import { DialogContext } from './dialog';

export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { open, handleOpen } = React.useContext(DialogContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleOpen();
    onClick?.(event);
  };

  return (
    <Component
      data-state={open ? 'open' : 'closed'}
      {...rest}
      type="button"
      ref={ref}
      onClick={handleClick}
    >
      {children ?? 'Dialog'}
    </Component>
  );
});

DialogTrigger.displayName = 'Dialog.Trigger';

export default DialogTrigger;
