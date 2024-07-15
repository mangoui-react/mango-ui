import React from 'react';

import { Slot } from '@melio-ui/slot';

import { ModalContext } from './modal';

export interface ModalTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const ModalTrigger = React.forwardRef<HTMLButtonElement, ModalTriggerProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { open, handleOpen } = React.useContext(ModalContext);
  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    handleOpen();
    onClick?.(event);
  };

  return (
    <Component
      {...rest}
      type="button"
      data-state={open ? 'open' : 'closed'}
      ref={ref}
      onClick={handleClick}
    >
      {children ?? 'Modal'}
    </Component>
  );
});

ModalTrigger.displayName = 'Modal.Trigger';

export default ModalTrigger;
