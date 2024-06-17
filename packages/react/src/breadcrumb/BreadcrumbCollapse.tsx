import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface BreadcrumbCollapseProps extends ComponentPropsWithoutRef<'li'> {}

const BreadcrumbCollapse = React.forwardRef<HTMLLIElement, BreadcrumbCollapseProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <li ref={ref} {...rest}>
        {children ?? '...'}
      </li>
    );
  },
);

BreadcrumbCollapse.displayName = 'Breadcrumb.Collapse';

export default BreadcrumbCollapse;
