import React from 'react';

import { Modal } from '.';
import * as styles from './modal.stories.css';

export default { title: 'Components/Modal' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function OnOpenChange(): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenChange = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <>
      <h1>OnOpenChange</h1>
      <Modal.Root open={open} onOpenChange={handleOpenChange}>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function Width(): JSX.Element {
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
        Modal width:{' '}
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
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content
            className={styles.content}
            style={{ ...(isFull ? { width: '100%' } : { width }) }}
          >
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function TopPosition(): JSX.Element {
  const [top, setTop] = React.useState<number>(30);

  const onTopChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTop(Number(event.target.value));
  };

  return (
    <>
      <h1>TopPosition</h1>
      <div>
        Modal top:{' '}
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
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content} style={{ top }}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function Backdrop(): JSX.Element {
  return (
    <>
      <h1>preventCloseOnClick</h1>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} preventCloseOnClick />
          <Modal.Content className={styles.content}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function DestroyOnClose(): JSX.Element {
  return (
    <>
      <h1>destroyOnClose</h1>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content} destroyOnClose={false}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function ForceMount(): JSX.Element {
  return (
    <>
      <h1>forceMount</h1>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content} forceMount>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </>
  );
}

export function Container(): JSX.Element {
  const [container, setContainer] = React.useState<HTMLElement>();

  React.useEffect(() => {
    setContainer(document.getElementById('container') as HTMLElement);
  }, []);

  return (
    <>
      <h1>Container</h1>
      <div id="container" />
      <Modal.Root>
        <Modal.Trigger asChild>
          <button type="button">Open Modal</button>
        </Modal.Trigger>
        <Modal.Portal container={container}>
          <Modal.Backdrop className={styles.backdrop} />
          <Modal.Content className={styles.content}>
            <Modal.Close asChild>
              <button type="button" className={styles.closeButton}>
                <CloseIcon />
              </button>
            </Modal.Close>
            <div className={styles.body}>Modal Content</div>
            <div className={styles.footer}>
              <Modal.Close asChild>
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
              </Modal.Close>
            </div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
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
