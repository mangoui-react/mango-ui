import React from 'react';

import { DropdownContext } from './dropdown';
import { DropdownContentContext } from './dropdown-content';

export interface DropdownItemProps extends React.ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
}

const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
  const { disabled, children, onClick, ...rest } = props;
  const { onClose } = React.useContext(DropdownContext);
  const { closeOnItemClick } = React.useContext(DropdownContentContext);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (disabled) return;
    onClick?.(event);

    if (!closeOnItemClick) return;
    onClose();
  };

  return (
    <div
      data-disabled={disabled ? '' : undefined}
      {...rest}
      ref={ref}
      role="menuitem"
      tabIndex={-1}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});

DropdownItem.displayName = 'Dropdown.Item';

export default DropdownItem;
