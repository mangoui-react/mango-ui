import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface BreadcrumbItemProps extends ComponentPropsWithoutRef<'li'> {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <li ref={ref} {...rest}>
      {children}
    </li>
  );
});

BreadcrumbItem.displayName = 'Breadcrumb.Item';

export default BreadcrumbItem;
