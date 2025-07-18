import React from 'react';

import {
  BreadcrumbCollapse as MBreadcrumbCollapse,
  BreadcrumbItem as MBreadcrumbItem,
  BreadcrumbLink as MBreadcrumbLink,
  BreadcrumbList as MBreadcrumbList,
  BreadcrumbRoot as MBreadcrumbRoot,
  BreadcrumbSeparator as MBreadcrumbSeparator,
} from '@mangoui/breadcrumb';

import { cn } from '@/shared/utils/cn';

interface BreadcrumbRootProps extends React.ComponentPropsWithoutRef<typeof MBreadcrumbRoot> {}
export function BreadcrumbRoot(props: BreadcrumbRootProps) {
  return <MBreadcrumbRoot {...props} />;
}

interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<typeof MBreadcrumbList> {}
export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <MBreadcrumbList
      {...props}
      className={cn('flex list-none items-center', 'm-0 p-0', className)}
    />
  );
}

interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<typeof MBreadcrumbItem> {}
export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <MBreadcrumbItem {...props} className={cn('flex items-center text-[#208aff]', className)} />
  );
}

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<typeof MBreadcrumbLink> {}
export function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  return (
    <MBreadcrumbLink
      {...props}
      className={cn(
        'flex cursor-pointer items-center text-black dark:text-white',
        'no-underline hover:underline',
        className,
      )}
    />
  );
}

interface BreadcrumbSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof MBreadcrumbSeparator> {}
export function BreadcrumbSeparator({ className, ...props }: BreadcrumbSeparatorProps) {
  return <MBreadcrumbSeparator {...props} className={cn('ml-2 mr-2', className)} />;
}

interface BreadcrumbCollapseProps
  extends React.ComponentPropsWithoutRef<typeof MBreadcrumbCollapse> {}
export function BreadcrumbCollapse({ className, ...props }: BreadcrumbCollapseProps) {
  return (
    <MBreadcrumbCollapse
      {...props}
      className={cn('cursor-pointer text-black dark:text-white', className)}
    />
  );
}

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
  Collapse: BreadcrumbCollapse,
};
