import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { DropdownContext } from './Dropdown';
import { DropdownContentContext } from './DropdownContent';

export interface DropdownItemProps extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
}

const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
  const { disabled, children, onClick, ...rest } = props;
  const { handleClose } = React.useContext(DropdownContext);
  const { closeOnItemClick } = React.useContext(DropdownContentContext);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (disabled) return;
    onClick?.(event);

    if (!closeOnItemClick) return;
    handleClose();
  };

  return (
    <div
      ref={ref}
      role="menuitem"
      tabIndex={-1}
      data-disabled={disabled ? '' : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </div>
  );
});

DropdownItem.displayName = 'Dropdown.Item';

export default DropdownItem;
