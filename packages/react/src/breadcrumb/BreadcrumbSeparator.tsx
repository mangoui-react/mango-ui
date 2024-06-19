import React from 'react';

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'li'> {}

// TODO: Slot 으로 해보자(CustomSeparator 스토리북도 수정)
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
