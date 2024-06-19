import React from 'react';

import { Accordion } from '.';
import * as styles from './Accordion.stories.css';

export default { title: 'Components/Accordion' };

// TODO: 스타일은 무엇으로 할지 생각해 보자.
// radix 는 https://github.com/stitchesjs/stitches 으로 했음
export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Accordion.Root className={styles.root}>
        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header1</span>
            {/* <AccordionTitle className={styles.title}>Panel Header1</AccordionTitle> */}
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content1</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header2</span>
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content2</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          <Accordion.Header className={styles.header}>
            <span className={styles.title}>Panel Header3</span>
            <Accordion.ArrowIcon />
          </Accordion.Header>
          <Accordion.Content className={styles.content}>Content3</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}

export function ItemByFunc(): JSX.Element {
  return (
    <>
      <h1>children 이 함수</h1>
      <Accordion.Root className={styles.root}>
        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => (
            <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header1</span>
                <ChevronDownIcon className={`${expanded ? styles.openArrow : styles.closeArrow}`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content1</Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => (
            <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header2</span>
                <ChevronDownIcon className={`${expanded ? styles.openArrow : styles.closeArrow}`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content2</Accordion.Content>
            </>
          )}
        </Accordion.Item>

        <Accordion.Item className={styles.item}>
          {(expanded: boolean) => (
            <>
              <Accordion.Header className={styles.header}>
                <span className={styles.title}>Panel Header3</span>
                <ChevronDownIcon className={`${expanded ? styles.openArrow : styles.closeArrow}`} />
              </Accordion.Header>
              <Accordion.Content className={styles.content}>Content3</Accordion.Content>
            </>
          )}
        </Accordion.Item>
      </Accordion.Root>
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
