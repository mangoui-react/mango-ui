import React from 'react';

import Popover from '.';
import * as styles from './Popover.stories.css';

export default { title: 'Components/Popover' };

export function Basic(): JSX.Element {
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

export function OnOpenChange(): JSX.Element {
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

export function CloseOnBlur(): JSX.Element {
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

export function DestroyOnClose(): JSX.Element {
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

export function ForceMount(): JSX.Element {
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

export function Position(): JSX.Element {
  return (
    <>
      <h1>Position</h1>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">Open Popover</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.content}
            triggerPosition={{ vertical: 'bottom', horizontal: 'right' }}
            contentPosition={{ vertical: 'top', horizontal: 'left' }}
          >
            <div style={{ padding: 10 }}>This is a Popover Content</div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
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
