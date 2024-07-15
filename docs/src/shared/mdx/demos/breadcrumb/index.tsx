import React from 'react';

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@melio-ui/breadcrumb';

import './styles.css';

export default function BreadcrumbDemo() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbList className="list">
        <BreadcrumbItem className="item">
          <BreadcrumbLink className="link" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="separator" />

        <BreadcrumbItem className="item">
          <BreadcrumbLink className="link" href="/page">
            Page
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="separator" />

        <BreadcrumbItem className="item">Current</BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}
