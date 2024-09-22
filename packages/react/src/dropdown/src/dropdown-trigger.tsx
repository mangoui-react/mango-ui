import React from 'react';

import { Popper } from '@melio-ui/popper';
import { Slot } from '@melio-ui/slot';
import { useMergedRef } from '@melio-ui/use-merged-ref';

import { DropdownContext } from './dropdown';

export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>((props, ref) => {
  const { children, asChild, onClick, ...rest } = props;
  const { open, triggerRef, onOpen, onClose } = React.useContext(DropdownContext);
  const handleTriggerRef = useMergedRef(triggerRef, ref);

  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!open) {
      onOpen();
    } else {
      onClose();
    }

    onClick?.(event);
  };

  return (
    <Popper.Anchor asChild>
      <Component
        type="button"
        data-state={open ? 'open' : 'closed'}
        {...rest}
        ref={handleTriggerRef}
        onClick={handleClick}
      >
        {children ?? 'Dropdown'}
      </Component>
    </Popper.Anchor>
  );
});

DropdownTrigger.displayName = 'Dropdown.Trigger';

export default DropdownTrigger;
