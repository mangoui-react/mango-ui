import React from 'react';

import { Popover, PopoverContext, PopoverProps } from '@melio-ui/popover';

export interface DropdownProps extends PopoverProps {}

export const DropdownContext = PopoverContext;

/**
 * 드롭다운 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const Dropdown = (props: DropdownProps): JSX.Element => {
  const { children, ...rest } = props;

  return <Popover.Root {...rest}>{children}</Popover.Root>;
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
