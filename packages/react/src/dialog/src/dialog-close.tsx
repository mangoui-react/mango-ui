import React from 'react';

import { Slot } from '@mangoui/slot';

import { DialogContext } from './dialog';

export interface DialogCloseProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { handleClose } = React.useContext(DialogContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleClose();
    onClick?.(event);
  };

  return (
    <Component {...rest} ref={ref} type="button" onClick={handleClick}>
      {children ?? 'Close'}
    </Component>
  );
});

DialogClose.displayName = 'Dialog.Close';

export default DialogClose;
