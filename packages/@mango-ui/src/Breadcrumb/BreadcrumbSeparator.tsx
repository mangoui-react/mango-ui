import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<'li'> {}

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <li ref={ref} {...rest}>
        {children ?? '/'}
      </li>
    );
  },
);

BreadcrumbSeparator.displayName = 'Breadcrumb.Separator';

export default BreadcrumbSeparator;
