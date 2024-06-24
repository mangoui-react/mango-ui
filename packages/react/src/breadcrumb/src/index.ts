'use client';

import Root from './breadcrumb';
import Collapse from './breadcrumb-collapse';
import Item from './breadcrumb-item';
import Link from './breadcrumb-link';
import Separator from './breadcrumb-separator';

export * from './breadcrumb';
export * from './breadcrumb-item';
export * from './breadcrumb-link';
export * from './breadcrumb-separator';
export * from './breadcrumb-collapse';

export const Breadcrumb = {
  Root,
  Item,
  Collapse,
  Link,
  Separator,
};

// const Breadcrumb = Object.assign(Root, { Item, Link, Collapse, Separator });
