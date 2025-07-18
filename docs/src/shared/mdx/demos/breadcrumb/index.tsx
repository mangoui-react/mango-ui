import React from 'react';

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from '@mangoui/breadcrumb';

import './styles.css';

export default function BreadcrumbDemo() {
  return (
    <BreadcrumbRoot>
      <BreadcrumbList className="breadcrumb-list">
        <BreadcrumbItem className="breadcrumb-item">
          <BreadcrumbLink className="breadcrumb-link" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="breadcrumb-separator" />

        <BreadcrumbItem className="breadcrumb-item">
          <BreadcrumbLink className="breadcrumb-link" href="/page">
            Page
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="breadcrumb-separator" />

        <BreadcrumbItem className="breadcrumb-item">Current</BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}
