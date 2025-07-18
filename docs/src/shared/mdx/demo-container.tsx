'use client';

import React from 'react';

import { Tabs } from '@mangoui/tabs';

import { cn } from '@/shared/utils/cn';

export interface DemoContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const titles = ['Preview', 'Code'];

export default function DemoContainer({ className, children, ...props }: DemoContainerProps) {
  const contents = React.Children.toArray(children);

  return (
    <div {...props} className={cn('relative my-4 flex flex-col', className)}>
      <Tabs.Root className={cn('relative w-full')}>
        <Tabs.List className="mb-0.5 flex">
          {titles.map((title, index) => {
            return (
              <Tabs.Tab
                key={`${title}-${index}`}
                className={cn(
                  'flex items-center justify-center gap-1',
                  'text-gray-400',
                  'cursor-pointer px-3 py-1',
                  // 'border border-solid border-b-0 border-slate-700',
                  'data-[state=active]:border-b-2 data-[state=active]:border-b-slate-800 dark:data-[state=active]:border-b-slate-200',
                  'data-[state=active]:text-slate-800 dark:data-[state=active]:text-slate-200',
                )}
              >
                {title}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>
        <Tabs.Content>
          <div className="relative flex items-start justify-center bg-[#203b85] py-24">
            {contents[0]}
          </div>
        </Tabs.Content>
        <Tabs.Content>
          <div className="relative py-2">{contents[1]}</div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
