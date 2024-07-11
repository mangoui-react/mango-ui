import React from 'react';

import { Alert, AlertProps } from '.';
import * as styles from './alert.stories.css';

export default { title: 'Components/Alert' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an info alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="success">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an success alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="warning">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an warning alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="error">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an error alert</Alert.Content>
        </Alert.Root>
      </div>
    </>
  );
}

export function Title(): JSX.Element {
  return (
    <>
      <h1>타이틀</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>information</div>
            <div>This is an info alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="success">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>success</div>
            <div>This is an success alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="warning">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>warning</div>
            <div>This is an warning alert</div>
          </Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status="error">
          <Alert.StatusIcon className={styles.icon} />
          <Alert.Content className={styles.content}>
            <div className={styles.title}>error</div>
            <div>This is an error alert</div>
          </Alert.Content>
        </Alert.Root>
      </div>
    </>
  );
}

export function Icon(): JSX.Element {
  const [status, setStatus] = React.useState<AlertProps['status']>('info');

  return (
    <>
      <h1>아이콘</h1>
      <div className={styles.flexCol}>
        <Alert.Root className={styles.root}>
          <CheckIcon className={styles.icon} />
          <Alert.Content className={styles.content}>This is an custom icon alert</Alert.Content>
        </Alert.Root>

        <Alert.Root className={styles.root} status={status}>
          <Alert.StatusIcon
            className={styles.icon}
            info={<CheckIcon />}
            success={<SuccessIcon />}
            warning={<WarningIcon />}
            error={<ErrorIcon />}
          />
          <Alert.Content className={styles.content}>
            This is an custom icon alert by AlertStatusIcon
          </Alert.Content>
        </Alert.Root>
        <div>
          <button
            type="button"
            onClick={() => {
              setStatus('info');
            }}
          >
            info
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus('success');
            }}
          >
            success
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus('warning');
            }}
          >
            warning
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus('error');
            }}
          >
            error
          </button>
        </div>
      </div>
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  );
}

function SuccessIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
    </svg>
  );
}

function WarningIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
    </svg>
  );
}

function ErrorIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </svg>
  );
}
