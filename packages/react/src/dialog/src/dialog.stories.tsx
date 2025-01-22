import React from 'react';

import { Dialog } from '.';
import * as styles from './dialog.stories.css';

export default { title: 'Components/Dialog' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function OnOpenChange(): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenChange = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <>
      <h1>OnOpenChange</h1>
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function Width(): React.JSX.Element {
  const [width, setWidth] = React.useState<number>(800);
  const [isFull, setIsFull] = React.useState<boolean>(false);

  const onWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWidth(Number(event.target.value));
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsFull(event.target.checked);
  };
  return (
    <>
      <h1>Width</h1>
      <div>
        Dialog width:{' '}
        <input
          value={width.toString()}
          onChange={onWidthChange}
          style={{
            width: 50,
            minWidth: 0,
            position: 'relative',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--component-bg)',
            color: 'inherit',
            padding: '5px 11px',
            lineHeight: 1,
            fontSize: '1rem',
          }}
        />
        px <input type="checkbox" onChange={handleCheckChange} />
        Full
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content
            className={styles.content}
            style={{ ...(isFull ? { width: '100%' } : { width }) }}
          >
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function TopPosition(): React.JSX.Element {
  const [top, setTop] = React.useState<number>(30);

  const onTopChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTop(Number(event.target.value));
  };

  return (
    <>
      <h1>TopPosition</h1>
      <div>
        Dialog top:{' '}
        <input
          value={top.toString()}
          onChange={onTopChange}
          style={{
            width: 50,
            minWidth: 0,
            position: 'relative',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--component-bg)',
            color: 'inherit',
            padding: '5px 11px',
            lineHeight: 1,
            fontSize: '1rem',
          }}
        />
        px
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} style={{ top }}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function Backdrop(): React.JSX.Element {
  return (
    <>
      <h1>preventCloseOnClick</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} preventCloseOnClick />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function DestroyOnClose(): React.JSX.Element {
  return (
    <>
      <h1>destroyOnClose</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} destroyOnClose={false}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function ForceMount(): React.JSX.Element {
  return (
    <>
      <h1>forceMount</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content} forceMount>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function Container(): React.JSX.Element {
  const [container, setContainer] = React.useState<HTMLElement>();

  React.useEffect(() => {
    setContainer(document.getElementById('container') as HTMLElement);
  }, []);

  return (
    <>
      <h1>Container</h1>
      <div id="container" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button type="button">Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Backdrop className={styles.backdrop} />
          <Dialog.Content className={styles.content}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Dialog.Close>
            <div className={styles.body}>Dialog Content</div>
            <div className={styles.footer}>
              <Dialog.Close asChild>
                <button
                  type="button"
                  style={{
                    color: 'var(--primary-color)',
                    backgroundColor: 'transparent',
                    marginRight: 3,
                  }}
                >
                  닫기
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>): React.JSX.Element {
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
