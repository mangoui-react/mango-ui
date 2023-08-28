'use client';

import React from 'react';

// TODO: 원인은 tsconfig.json 설정을 때문이다. - turborepo 가 그래서 tsconfig 를 라이브러리 형태로 제공한 것이구나!!!
// tsconfig 파일은 각각의 프로젝트별로 독립적으로 관리되어야 한다.
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from '@mango/ui';

export default function AccordionPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Accordion>
          <AccordionPanel>
            <AccordionHeader>Header1</AccordionHeader>
            <AccordionContent>Content1</AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>Header2</AccordionHeader>
            <AccordionContent>Content2</AccordionContent>
          </AccordionPanel>
        </Accordion>
        {/* <Accordion className="m-0 p-0 bg-component-bg border border-solid border-border text-inherit rounded-sm border-b-0">
          <Accordion.Panel className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header1</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content1</Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header2</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content2</Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="border-b border-b-border">
            <Accordion.Header className="flex py-3 px-4 cursor-pointer">
              <span className="flex-1 text-left">Panel Header3</span>
              <Accordion.ArrowIcon />
            </Accordion.Header>
            <Accordion.Content className="border-t border-t-border p-4">Content3</Accordion.Content>
          </Accordion.Panel>
        </Accordion> */}
      </div>
    </div>
  );
}
