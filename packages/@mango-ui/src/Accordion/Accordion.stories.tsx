import React from 'react';

import Accordion from '.';

export default { title: 'Components/Accordion' };

// TODO: 스타일은 무엇으로 할지 생각해 보자.
// radix 는 https://github.com/stitchesjs/stitches 으로 했음
export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Accordion className="m-0 p-0 bg-component-bg border border-solid border-border text-inherit rounded-sm border-b-0">
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
      </Accordion>
    </>
  );
}

export function ItemByFunc(): JSX.Element {
  return (
    <>
      <h1>children 이 함수</h1>
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
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
