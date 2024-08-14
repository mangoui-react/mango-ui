'use client';

import React from 'react';

import { Tabs } from '@melio-ui/tabs';

import { cn } from '@/shared/utils/cn';

import CodeBlock from './code-block';

export interface DemoCodeBlockProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function DemoCodeBlock(props: DemoCodeBlockProps) {
  const { children } = props;

  const codeTabs = React.Children.toArray(children).map((pre) => {
    if (pre && typeof pre === 'object' && 'props' in pre) {
      return {
        id: pre.props.title,
        title: pre.props.title,
        // source: React.Children.only(pre.props.children).props?.source,
        source: pre.props.source,
      };
    }
  });

  return (
    <Tabs.Root>
      <Tabs.List className="mb-0.5 ml-2 flex">
        {codeTabs.map((tab) => (
          <Tabs.Tab
            key={tab?.id}
            // className={cn(
            //   'inline-block bottom-[-0.0625rem] relative list-none py-1 px-3 cursor-pointer',
            //   'border-[0.0625rem] border-transparent border-b-0',
            //   'data-[state=active]:bg-slate-900 data-[state=active]:border-gray-400',
            // )}
            className={cn(
              'flex items-center justify-center gap-1',
              'text-gray-400',
              'cursor-pointer px-3 py-1',
              // 'border border-solid border-b-0 border-slate-700',
              'data-[state=active]:border-b-2 data-[state=active]:border-b-slate-800 dark:data-[state=active]:border-b-slate-200',
              'data-[state=active]:text-slate-800 dark:data-[state=active]:text-slate-200',
            )}
          >
            {tab?.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {codeTabs.map((tab) => (
        <Tabs.Content
          key={tab?.id}
          className={cn(
            'hidden p-0',
            'data-[state=active]:block data-[state=active]:bg-slate-900',
            // 'max-h-96 overflow-y-auto',
          )}
        >
          <CodeBlock live={false}>
            <div>{tab?.source}</div>
          </CodeBlock>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
