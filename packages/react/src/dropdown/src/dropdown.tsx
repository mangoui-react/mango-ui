import React from 'react';

import { Popover, PopoverContext, PopoverProps } from '@melio-ui/popover';

export interface DropdownProps extends PopoverProps {}

export const DropdownContext = PopoverContext;

const Dropdown = (props: DropdownProps): JSX.Element => {
  const { children, ...rest } = props;

  return <Popover.Root {...rest}>{children}</Popover.Root>;
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
