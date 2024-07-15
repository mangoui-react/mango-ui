import React from 'react';

export interface BreadcrumbCollapseProps extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbCollapse = React.forwardRef<HTMLLIElement, BreadcrumbCollapseProps>(
  (props, ref) => {
    const { children = '...', ...rest } = props;

    return (
      <li {...rest} ref={ref}>
        {children}
      </li>
    );
  },
);

BreadcrumbCollapse.displayName = 'Breadcrumb.Collapse';

export default BreadcrumbCollapse;
