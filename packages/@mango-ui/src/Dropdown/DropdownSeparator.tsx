import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface DropdownSeparatorProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요한지 확인필요
const DropdownSeparator = React.forwardRef<HTMLDivElement, DropdownSeparatorProps>((props, ref) => {
  return <div ref={ref} role="separator" {...props} />;
});

DropdownSeparator.displayName = 'Dropdown.Separator';

export default DropdownSeparator;
