// export { default } from './Breadcrumb';
// export { default as BreadcrumbItem } from './BreadcrumbItem';
// export { default as BreadcrumbLink } from './BreadcrumbLink';
// export { default as BreadcrumbSeparator } from './BreadcrumbSeparator';
// export { default as BreadcrumbCollapse } from './BreadcrumbCollapse';
import Root from './Breadcrumb';
import Collapse from './BreadcrumbCollapse';
import Item from './BreadcrumbItem';
import Link from './BreadcrumbLink';
import Separator from './BreadcrumbSeparator';

export * from './Breadcrumb';
export * from './BreadcrumbItem';
export * from './BreadcrumbLink';
export * from './BreadcrumbSeparator';
export * from './BreadcrumbCollapse';

const Breadcrumb = {
  Root,
  Item,
  Collapse,
  Link,
  Separator,
};

// const Breadcrumb = Object.assign(Root, { Item, Link, Collapse, Separator });

export { Breadcrumb };
