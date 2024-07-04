import React from 'react';

import { Accordion as MangoAccordion } from '@melio-ui/accordion';

import { cn } from '@/shared/utils/cn';

interface RootProps extends React.ComponentPropsWithoutRef<typeof MangoAccordion.Root> {}
function Root({ className, ...props }: RootProps) {
  return (
    <MangoAccordion.Root
      {...props}
      className={cn(
        'p-0 m-0 bg-slate-800',
        'border border-solid border-slate-500 rounded-sm border-b-0',
        'w-72 text-inherit',
        className,
      )}
    />
  );
}

interface ItemProps extends React.ComponentPropsWithoutRef<typeof MangoAccordion.Item> {}
function Item({ className, ...props }: ItemProps) {
  return (
    <MangoAccordion.Item {...props} className={cn('border-b border-b-slate-500', className)} />
  );
}

interface HeaderProps extends React.ComponentPropsWithoutRef<typeof MangoAccordion.Header> {}
function Header({ className, ...props }: HeaderProps) {
  return (
    <MangoAccordion.Header {...props} className={cn('flex px-4 py-3 cursor-pointer', className)} />
  );
}

interface ContentProps extends React.ComponentPropsWithoutRef<typeof MangoAccordion.Content> {}
function Content({ className, ...props }: ContentProps) {
  return (
    <MangoAccordion.Content
      {...props}
      className={cn('border-t border-t-slate-500 p-4', className)}
    />
  );
}

interface ArrowIconProps extends React.ComponentPropsWithoutRef<typeof MangoAccordion.ArrowIcon> {}
function ArrowIcon({ className, ...props }: ArrowIconProps) {
  return <MangoAccordion.ArrowIcon {...props} className={cn('w-5 h-5', className)} />;
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
