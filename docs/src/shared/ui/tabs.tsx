import React from 'react';

import {
  TabsContent as MTabsContent,
  TabsList as MTabsList,
  TabsRoot as MTabsRoot,
  TabsTab as MTabsTab,
} from '@melio-ui/tabs';

import { cn } from '@/shared/utils/cn';

interface TabsRootProps extends React.ComponentPropsWithoutRef<typeof MTabsRoot> {}
export function TabsRoot({ className, ...props }: TabsRootProps) {
  return (
    <MTabsRoot {...props} className={cn('group', 'data-[orientation=vertical]:flex', className)} />
  );
}

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof MTabsList> {}
export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <MTabsList
      {...props}
      className={cn(
        'm-0 p-0',
        'border-b-[0.0625rem] border-b-slate-400',
        'group-data-[orientation=vertical]:flex group-data-[orientation=vertical]:flex-col',
        'group-data-[orientation=vertical]:m-0 group-data-[orientation=vertical]:min-w-[3.125rem]',
        'group-data-[orientation=vertical]:border-b-0 group-data-[orientation=vertical]:border-r group-data-[orientation=vertical]:border-r-slate-400',
        className,
      )}
    />
  );
}

interface TabsTabProps extends React.ComponentPropsWithoutRef<typeof MTabsTab> {}
export function TabsTab({ className, ...props }: TabsTabProps) {
  return (
    <MTabsTab
      {...props}
      className={cn(
        'relative bottom-[-0.0625rem] inline-block',
        'border-[0.0625rem] border-solid border-transparent',
        'border-b-0',
        'cursor-pointer list-none px-3 py-1.5',
        'data-[state=active]:rounded-t-[0.3125rem] data-[state=active]:border-slate-500 data-[state=active]:bg-slate-800 data-[state=active]:text-blue-500',
        'data-[disabled]:cursor-default data-[disabled]:opacity-30',
        'group-data-[orientation=vertical]:bottom-0 group-data-[orientation=vertical]:right-[-0.0625rem] group-data-[orientation=vertical]:block group-data-[orientation=vertical]:border-r-0',
        'group-data-[orientation=vertical]:data-[state=active]:border-b-[0.0625rem] group-data-[orientation=vertical]:data-[state=active]:border-b-gray-500',
        'group-data-[orientation=vertical]:data-[state=active]:rounded-bl-[0.3125rem] group-data-[orientation=vertical]:data-[state=active]:rounded-tl-[0.3125rem]',
        className,
      )}
    />
  );
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof MTabsContent> {}
export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <MTabsContent
      {...props}
      className={cn(
        'hidden p-[0.625rem]',
        'data-[state=active]:block data-[state=active]:bg-slate-800',
        'group-data-[orientation=vertical]:w-full',
        className,
      )}
    />
  );
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Content: TabsContent,
};
