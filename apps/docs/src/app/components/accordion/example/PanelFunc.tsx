'use client';

import React from 'react';

import { Accordion } from 'mango-headlessui';
import ChevronDownIcon from '@/icons/ChevronDownIcon';

const PanelFunc = (): JSX.Element => {
  return (
    <>
      <div>children 이 함수</div>
      <Accordion className="m-0 p-0 bg-component-bg border border-solid border-border text-inherit rounded-sm border-b-0">
        <Accordion.Item className="border-b border-b-border">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex py-3 px-4 cursor-pointer">
                <span className="flex-1 text-left">Panel Header1</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t border-t-border p-4">
                Content1
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className="border-b border-b-border">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex py-3 px-4 cursor-pointer">
                <span className="flex-1 text-left">Panel Header2</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t border-t-border p-4">
                Content2
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className="border-b border-b-border">
          {(expanded: boolean) => (
            <>
              <Accordion.Header className="flex py-3 px-4 cursor-pointer">
                <span className="flex-1 text-left">Panel Header3</span>
                <ChevronDownIcon className={`${expanded ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Accordion.Header>
              <Accordion.Content className="border-t border-t-border p-4">
                Content3
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default PanelFunc;
