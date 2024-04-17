import React from 'react';

import Drawer from '.';
import * as styles from './Drawer.stories.css';

export default { title: 'Components/Drawer' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
            <Drawer.Body className={styles.body}>Drawer Content</Drawer.Body>
            <Drawer.Footer className={styles.footer}>
              <Drawer.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  취소
                </button>
              </Drawer.Close>
              <button
                type="button"
                style={{
                  color: 'var(--primary-text-color)',
                  borderColor: 'var(--primary-color)',
                  background: 'var(--primary-color)',
                }}
              >
                확인
              </button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export function Placement(): JSX.Element {
  return (
    <>
      <h1>Placement</h1>
      <Drawer.Root placement="left">
        <Drawer.Trigger asChild>
          <button type="button">Left</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="top">
        <Drawer.Trigger asChild>
          <button type="button">Top</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="right">
        <Drawer.Trigger asChild>
          <button type="button">Right</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="bottom">
        <Drawer.Trigger asChild>
          <button type="button">Bottom</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export function Size(): JSX.Element {
  return (
    <>
      <h1>Size</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">60%</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content} style={{ width: '60%' }}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">20%</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content} style={{ width: '20%' }}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">200px</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content} style={{ width: 200 }}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export function OpenChildDrawer(): JSX.Element {
  const [openChild, setOpenChild] = React.useState(false);

  const onClick = (cb: React.Dispatch<React.SetStateAction<boolean>>): void => {
    // eslint-disable-next-line n/no-callback-literal
    cb((prop: boolean) => !prop);
  };

  return (
    <>
      <h1>OpenChildDrawer</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
            <Drawer.Body className={styles.body}>
              <div className="title">Parent Drawer</div>
              <button
                type="button"
                onClick={() => {
                  onClick(setOpenChild);
                }}
              >
                openChild
              </button>
            </Drawer.Body>

            <Drawer.Root
              open={openChild}
              onOpenChange={(_open) => {
                setOpenChild(_open);
              }}
            >
              <Drawer.Portal>
                <Drawer.Backdrop className={styles.backdrop} backdrop />
                <Drawer.Content className={styles.content} style={{ width: '20%' }}>
                  <Drawer.Body className={styles.body}>
                    <div className="title">Child Drawer</div>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export function destroyOnClose(): JSX.Element {
  return (
    <>
      <h1>destroyOnClose</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">Open Drawer - destroyOnClose</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} backdrop />
          <Drawer.Content className={styles.content} destroyOnClose={false}>
            <Drawer.Header className={styles.header}>Title</Drawer.Header>
            <Drawer.Close asChild>
              <Drawer.CloseButton className={styles.closeButton} />
            </Drawer.Close>
            <Drawer.Body className={styles.body}>Drawer Content</Drawer.Body>
            <Drawer.Footer className={styles.footer}>
              <Drawer.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  취소
                </button>
              </Drawer.Close>
              <button
                type="button"
                style={{
                  color: 'var(--primary-text-color)',
                  borderColor: 'var(--primary-color)',
                  background: 'var(--primary-color)',
                }}
              >
                확인
              </button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// function UserIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
//   return (
//     <svg
//       width="2em"
//       height="2em"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//     </svg>
//   );
// }
