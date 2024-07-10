import React from 'react';

import { Accordion as MelioAccordion } from '@melio-ui/accordion';

import { cn } from '@/shared/utils/cn';

interface RootProps extends React.ComponentPropsWithoutRef<typeof MelioAccordion.Root> {}
function Root({ className, ...props }: RootProps) {
  return (
    <MelioAccordion.Root
      {...props}
      className={cn(
        'm-0 bg-slate-800 p-0',
        'rounded-sm border border-b-0 border-solid border-slate-500',
        'w-72 text-inherit',
        className,
      )}
    />
  );
}

interface ItemProps extends React.ComponentPropsWithoutRef<typeof MelioAccordion.Item> {}
function Item({ className, ...props }: ItemProps) {
  return (
    <MelioAccordion.Item {...props} className={cn('border-b border-b-slate-500', className)} />
  );
}

interface HeaderProps extends React.ComponentPropsWithoutRef<typeof MelioAccordion.Header> {}
function Header({ className, ...props }: HeaderProps) {
  return (
    <MelioAccordion.Header {...props} className={cn('flex cursor-pointer px-4 py-3', className)} />
  );
}

interface ContentProps extends React.ComponentPropsWithoutRef<typeof MelioAccordion.Content> {}
function Content({ className, ...props }: ContentProps) {
  return (
    <MelioAccordion.Content
      {...props}
      className={cn('border-t border-t-slate-500 p-4', className)}
    />
  );
}

interface ArrowIconProps extends React.ComponentPropsWithoutRef<typeof MelioAccordion.ArrowIcon> {}
function ArrowIcon({ className, ...props }: ArrowIconProps) {
  return <MelioAccordion.ArrowIcon {...props} className={cn('h-5 w-5', className)} />;
}

export const Accordion = {
  Root,
  Item,
  Header,
  Content,
  ArrowIcon,
  // NameCell,
  // Cell,
};
