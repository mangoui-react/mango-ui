import React from 'react';

import { Popover, PopoverCloseProps } from '@melio-ui/popover';

export interface DropdownCloseProps extends PopoverCloseProps {}

const DropdownClose = React.forwardRef<HTMLButtonElement, DropdownCloseProps>((props, ref) => {
  return <Popover.Close ref={ref} {...props} />;
});

DropdownClose.displayName = 'Dropdown.Close';

export default DropdownClose;
