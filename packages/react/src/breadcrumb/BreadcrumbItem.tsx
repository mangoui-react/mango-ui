import React from 'react';

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'> {}

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
