import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface DropdownGroupTitleProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요한지 확인필요
const DropdownGroupTitle = React.forwardRef<HTMLDivElement, DropdownGroupTitleProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  },
);

DropdownGroupTitle.displayName = 'Dropdown.GroupTitle';

export default DropdownGroupTitle;
