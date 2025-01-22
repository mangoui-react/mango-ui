'use client';

import React from 'react';

import { Accordion } from '@melio-ui/react';

import ChevronDownIcon from '@/icons/ChevronDownIcon';

const PanelFunc = (): React.JSX.Element => {
  return (
    <>
      <div>children 이 함수</div>
      <Accordion.Root className="bg-component-bg border-border m-0 rounded-sm border border-b-0 border-solid p-0 text-inherit">
        <Accordion.Item className="border-b-border border-b">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex cursor-pointer px-4 py-3">
                <span className="flex-1 text-left">Panel Header1</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t-border border-t p-4">
                Content1
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className="border-b-border border-b">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex cursor-pointer px-4 py-3">
                <span className="flex-1 text-left">Panel Header2</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t-border border-t p-4">
                Content2
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className="border-b-border border-b">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex cursor-pointer px-4 py-3">
                <span className="flex-1 text-left">Panel Header3</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t-border border-t p-4">
                Content3
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default PanelFunc;
