'use client';

import React from 'react';

import { Tabs } from '@melio-ui/tabs';

import { cn } from '@/shared/utils/cn';

export interface DemoContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const titles = ['Preview', 'Code'];

export default function DemoContainer({ className, children, ...props }: DemoContainerProps) {
  const contents = React.Children.toArray(children);

  return (
    <div {...props} className={cn('flex flex-col my-4 relative', className)}>
      <Tabs.Root className={cn('relative w-full')}>
        <Tabs.List className="flex">
          {titles.map((title, index) => {
            return (
              <Tabs.Tab
                key={`${title}-${index}`}
                className={cn(
                  'flex items-center justify-center gap-1',
                  'text-gray-400',
                  'px-3 py-1 cursor-pointer',
                  // 'border border-solid border-b-0 border-slate-700',
                  'data-[state=active]:border-b-slate-200 data-[state=active]:border-b-2 data-[state=active]:text-slate-200',
                )}
              >
                {title}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>
        <Tabs.Content>
          <div className="bg-[#203b85] relative flex items-start justify-center py-24">
            {contents[0]}
          </div>
        </Tabs.Content>
        <Tabs.Content>
          <div className="relative py-4">{contents[1]}</div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
