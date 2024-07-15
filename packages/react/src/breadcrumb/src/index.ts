'use client';

import Root from './breadcrumb';
import Collapse from './breadcrumb-collapse';
import Item from './breadcrumb-item';
import Link from './breadcrumb-link';
import List from './breadcrumb-list';
import Separator from './breadcrumb-separator';

export { default as BreadcrumbRoot } from './breadcrumb';
export { default as BreadcrumbList } from './breadcrumb-list';
export { default as BreadcrumbCollapse } from './breadcrumb-collapse';
export { default as BreadcrumbItem } from './breadcrumb-item';
export { default as BreadcrumbLink } from './breadcrumb-link';
export { default as BreadcrumbSeparator } from './breadcrumb-separator';

export * from './breadcrumb';
export * from './breadcrumb-list';
export * from './breadcrumb-item';
export * from './breadcrumb-link';
export * from './breadcrumb-separator';
export * from './breadcrumb-collapse';

export const Breadcrumb = {
  Root,
  List,
  Item,
  Collapse,
  Link,
  Separator,
};

// const Breadcrumb = Object.assign(Root, { Item, Link, Collapse, Separator });
