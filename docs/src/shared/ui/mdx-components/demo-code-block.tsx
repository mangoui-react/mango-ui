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
      <Tabs.List className="p-0 m-0 border-b-[0.0625rem] border-b-slate-500">
        {codeTabs.map((tab) => (
          <Tabs.Tab
            key={tab?.id}
            className={cn(
              'inline-block bottom-[-0.0625rem] relative list-none py-1 px-3 cursor-pointer',
              'border-[0.0625rem] border-transparent border-b-0',
              'data-[state=active]:bg-slate-900 data-[state=active]:border-gray-400',
            )}
          >
            {tab?.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {codeTabs.map((tab) => (
        <Tabs.Content
          key={tab?.id}
          className={cn('p-0 hidden', 'data-[state=active]:block data-[state=active]:bg-slate-900')}
        >
          <CodeBlock className="pl-3">
            <div>{tab?.source}</div>
          </CodeBlock>
          {/* <pre>{tab?.source}</pre> */}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
