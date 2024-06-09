'use client';

// TODO: 맨 위('use client';) 없애고 @mango/ui 에서 해결하는 방법으로 수정해야 함
import React from 'react';

// TODO: 원인은 tsconfig.json 설정을 때문이다. - turborepo 가 그래서 tsconfig 를 라이브러리 형태로 제공한 것이구나!!!
// tsconfig 파일은 각각의 프로젝트별로 독립적으로 관리되어야 한다.
import { Accordion } from 'mango-headlessui';

import ChevronDownIcon from '@/icons/ChevronDownIcon';

import PanelFunc from './example/PanelFunc';

export default function AccordionPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Accordion.Root className="m-0 p-0 bg-component-bg border border-solid border-border text-inherit rounded-sm border-b-0">
          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header1</span>
              {/* <AccordionTitle className="flex-1 text-left">Panel Header1</AccordionTitle> */}
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content1</Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header2</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content2</Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header3</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content3</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <div>
        <PanelFunc />
      </div>

      <div>
        <div>custom animation</div>
        <Accordion.Root className="m-0 p-0 bg-component-bg border border-solid border-border text-inherit rounded-sm border-b-0">
          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header1</span>
              {/* <Accordion.ArrowIcon /> */}
              <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4 data-[state=open]:animate-collapse-open data-[state=closed]:animate-collapse-closed">
              Content1
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header2</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4 data-[state=open]:animate-collapse-open data-[state=closed]:animate-collapse-closed">
              Content2
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header3</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4 data-[state=open]:animate-collapse-open data-[state=closed]:animate-collapse-closed">
              Content3
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
