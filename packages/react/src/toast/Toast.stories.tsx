import React from 'react';

import Toast from '.';
import * as styles from './Toast.stories.css';

export default { title: 'Components/Toast' };

export function Basic(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const onClick = (cb: React.Dispatch<React.SetStateAction<boolean>>): void => {
    // eslint-disable-next-line n/no-callback-literal
    cb(true);
  };

  return (
    <>
      <h1>기본</h1>
      <button
        type="button"
        onClick={() => {
          onClick(setOpen);
        }}
      >
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{ backgroundColor: '#dffadc', height: 50, padding: 15, color: 'black' }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>
  );
}

export function Placement(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>Placement</h1>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{ backgroundColor: '#dffadc', height: 50, padding: 15, color: 'black' }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} placement="bottom-right" />
      </Toast.Root>
    </>
  );
}

export function Duration(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>Duration(default: 5000)</h1>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>

      <Toast.Root duration={1000} open={open} onOpenChange={setOpen}>
        <Toast.Content className={styles.content}>
          <div style={{ backgroundColor: '#dffadc', height: 50, padding: 15, color: 'black' }}>
            Notification
          </div>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>
  );
}

export function Close(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>Close</h1>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Content
          className={styles.content}
          style={{
            display: 'grid',
            gridTemplateAreas: `"title action" "description action"`,
            gridTemplateColumns: 'auto max-content',
            columnGap: 15,
            alignItems: 'center',
            //
            backgroundColor: '#dffadc',
          }}
        >
          <div style={{ height: 50, padding: 15, color: 'black', gridArea: 'title' }}>
            Notification
          </div>
          <Toast.Close style={{ gridArea: 'action' }} asChild>
            <button type="button">Undo</button>
          </Toast.Close>
        </Toast.Content>
        <Toast.Viewport className={styles.viewport} />
      </Toast.Root>
    </>
  );
}
