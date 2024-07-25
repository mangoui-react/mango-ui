import React from 'react';

import { Drawer } from '.';
import * as styles from './drawer.stories.css';

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
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>Drawer Content</div>
            <div className={styles.footer}>
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
            </div>
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
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="top">
        <Drawer.Trigger asChild>
          <button type="button">Top</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="right">
        <Drawer.Trigger asChild>
          <button type="button">Right</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="bottom">
        <Drawer.Trigger asChild>
          <button type="button">Bottom</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
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
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{ width: '60%' }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">20%</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{ width: '20%' }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button">200px</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} style={{ width: 200 }}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
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
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>
              <div className="title">Parent Drawer</div>
              <button
                type="button"
                onClick={() => {
                  onClick(setOpenChild);
                }}
              >
                openChild
              </button>
            </div>

            <Drawer.Root
              open={openChild}
              onOpenChange={(_open) => {
                setOpenChild(_open);
              }}
            >
              <Drawer.Portal>
                <Drawer.Backdrop className={styles.backdrop} />
                <Drawer.Content className={styles.content} style={{ width: '20%' }}>
                  <div className={styles.body}>
                    <div className="title">Child Drawer</div>
                  </div>
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
          <Drawer.Backdrop className={styles.backdrop} />
          <Drawer.Content className={styles.content} destroyOnClose={false}>
            <div className={styles.header}>Title</div>
            <Drawer.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Drawer.Close>
            <div className={styles.body}>Drawer Content</div>
            <div className={styles.footer}>
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
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </svg>
  );
}
