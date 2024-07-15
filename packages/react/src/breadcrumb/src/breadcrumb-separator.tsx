import React from 'react';

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  (props, ref) => {
    const { children = '/', ...rest } = props;

    return (
      <li {...rest} ref={ref}>
        {children}
      </li>
    );
  },
);

BreadcrumbSeparator.displayName = 'Breadcrumb.Separator';

export default BreadcrumbSeparator;
