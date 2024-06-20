import React from 'react';

import { Dropdown } from '.';
import * as styles from './Dropdown.stories.css';

export default { title: 'Components/Dropdown' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export function DestroyOnClose(): JSX.Element {
  return (
    <>
      <h1>destroyOnClose (false)</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content} destroyOnClose={false}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export function ForceMount(): JSX.Element {
  return (
    <>
      <h1>forceMount</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content} forceMount>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export function Position(): JSX.Element {
  return (
    <>
      <h1>Position</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content
            className={styles.content}
            triggerPosition={{ vertical: 'bottom', horizontal: 'right' }}
            contentPosition={{ vertical: 'top', horizontal: 'left' }}
          >
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export function Container(): JSX.Element {
  // const containerRef = React.useRef(null);
  const [container, setContainer] = React.useState<HTMLElement>();

  React.useEffect(() => {
    setContainer(document.getElementById('container') as HTMLElement);
  }, []);

  return (
    <>
      <h1>Container</h1>
      {/* <div ref={containerRef} /> */}
      <div id="container" />
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal container={container}>
          <Dropdown.Content className={styles.content}>
            <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
            <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom</h1>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button type="button">Dropdown</button>
        </Dropdown.Trigger>
        <Dropdown.Portal>
          <Dropdown.Content className={styles.content}>
            <div className={styles.group}>
              <div className={styles.title}>제목1</div>
              <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
              <Dropdown.Item className={styles.item} disabled>
                DropdownItem - 2
              </Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
            </div>
            <div role="separator" className={styles.separator} />
            <div className={styles.group}>
              <div className={styles.title}>제목2</div>
              <Dropdown.Item className={styles.item}>DropdownItem - 1</Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 2</Dropdown.Item>
              <Dropdown.Item className={styles.item}>DropdownItem - 3</Dropdown.Item>
            </div>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
}
