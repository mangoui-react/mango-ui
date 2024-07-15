import React from 'react';

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  return <nav {...props} ref={ref} />;
});

Breadcrumb.displayName = 'Breadcrumb.Root';

export default Breadcrumb;
