import React from 'react';

import { BadgeContent as MBadgeContent, BadgeRoot as MBadgeRoot } from '@melio-ui/badge';

import { cn } from '@/shared/utils/cn';

interface BadgeRootProps extends React.ComponentPropsWithoutRef<typeof MBadgeRoot> {}
export function BadgeRoot({ className, ...props }: BadgeRootProps) {
  return (
    <MBadgeRoot
      {...props}
      className={cn('group', 'relative box-border inline-block align-middle', 'm-0 p-0', className)}
    />
  );
}

interface BadgeContentProps extends React.ComponentPropsWithoutRef<typeof MBadgeContent> {}
export function BadgeContent({ className, ...props }: BadgeContentProps) {
  return (
    <MBadgeContent
      {...props}
      className={cn(
        'absolute origin-[100%_0] px-2 py-0 text-center',
        'z-10 box-border whitespace-nowrap',
        'bg-red-600 text-white',
        'h-[0.9375rem] min-w-[0.9375rem]',
        'text-[calc(0.9375rem-0.1875rem)]',
        'rounded-[calc(0.9375rem/2)]',
        'leading-[0.9375rem]',
        // top-right
        'group-data-[placement=top-right]:right-0 group-data-[placement=top-right]:top-0',
        'group-data-[placement=top-right]:translate-x-2/4 group-data-[placement=top-right]:translate-y-[-50%]',
        // top
        'group-data-[placement=top]:left-1/2 group-data-[placement=top]:top-0',
        'group-data-[placement=top]:translate-x-[-50%] group-data-[placement=top]:translate-y-[-50%]',
        // top-left
        'group-data-[placement=top-left]:left-0 group-data-[placement=top-left]:top-0',
        'group-data-[placement=top-left]:translate-x-[-50%] group-data-[placement=top-left]:translate-y-[-50%]',
        // bottom
        'group-data-[placement=bottom]:bottom-0 group-data-[placement=bottom]:left-1/2',
        'group-data-[placement=bottom]:translate-x-[-50%]',
        // bottom-right
        'group-data-[placement=bottom-right]:bottom-0 group-data-[placement=bottom-right]:right-0',
        'group-data-[placement=bottom-right]:translate-x-1/2',
        // bottom-left
        'group-data-[placement=bottom-left]:bottom-0 group-data-[placement=bottom-left]:left-0',
        'group-data-[placement=bottom-left]:translate-x-[-50%]',
        className,
      )}
    />
  );
}

export const Badge = {
  Root: BadgeRoot,
  Content: BadgeContent,
};
