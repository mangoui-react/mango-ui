import React from 'react';

import { Popover, PopoverTriggerProps } from '@melio-ui/popover';

export interface DropdownTriggerProps extends PopoverTriggerProps {}

const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>((props, ref) => {
  return <Popover.Trigger ref={ref} {...props} />;
});

DropdownTrigger.displayName = 'Dropdown.Trigger';

export default DropdownTrigger;
