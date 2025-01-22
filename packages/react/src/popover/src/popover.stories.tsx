import React from 'react';

import { Popover } from '.';
import * as styles from './popover.stories.css';

export default { title: 'Components/Popover' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function OnOpenChange(): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  const onOpenChange = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <>
      <h1>onOpenChange</h1>
      <Popover.Root open={open} onOpenChange={onOpenChange}>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function Arrow(): React.JSX.Element {
  return (
    <>
      <h1>Arrow</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
            <Popover.Arrow style={{ fill: '#ffffff' }} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function Close(): React.JSX.Element {
  return (
    <>
      <h1>Close</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content}>
            <div style={{ padding: 10, paddingTop: 30 }}>This is a Popover Content</div>
            <Popover.Close className={styles.close}>X</Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function Position(): React.JSX.Element {
  return (
    <>
      <h1>Position</h1>
      <h3>
        side: right <br />
        align: start
      </h3>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} side="right" align="start">
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <div style={{ width: '100%', height: 30 }} />
      <h3>맨 우측 위치시</h3>
      <div style={{ display: 'flex', gap: 5 }}>
        <div style={{ width: '100%' }} />
        <Popover.Root>
          <Popover.Trigger asChild>
            <button type="button" style={{ whiteSpace: 'nowrap' }}>
              Open Popover
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className={styles.content}>
              <div style={{ padding: 10, whiteSpace: 'nowrap' }}>This is a Popover Content</div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </>
  );
}

export function CloseOnBlur(): React.JSX.Element {
  return (
    <>
      <h1>closeOnBlur (closeOnBlur=false)</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} closeOnBlur={false}>
            <div style={{ padding: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
              This is a Popover Content
              <Popover.Close asChild>
                <button type="button">닫기</button>
              </Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function DestroyOnClose(): React.JSX.Element {
  return (
    <>
      <h1>destroyOnClose (false)</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} destroyOnClose={false}>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function ForceMount(): React.JSX.Element {
  return (
    <>
      <h1>forceMount</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.content} forceMount>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export function Container(): React.JSX.Element {
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
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal container={container}>
          {/* container={containerRef.current} */}
          <Popover.Content className={styles.content}>
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
