import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface DropdownGroupProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요한지 확인필요
const DropdownGroup = React.forwardRef<HTMLDivElement, DropdownGroupProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

DropdownGroup.displayName = 'Dropdown.Group';

export default DropdownGroup;
