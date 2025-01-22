import React from 'react';

import { StepStatusValue, Steps } from '.';
import * as styles from './steps.stories.css';

export default { title: 'Components/Steps' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>
  );
}

export function ChildrenByFunc(): React.JSX.Element {
  return (
    <>
      <h1>함수사용 Children</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator} style={{ width: '3rem', height: '3rem' }}>
            {(status: StepStatusValue) => (status === 'finish' ? '완료' : status)}
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            {(status: StepStatusValue) =>
              status === 'finish' ? (
                <div>Step01 - {status}</div>
              ) : (
                <>
                  <div>Step01 - {status}</div>
                  <div>This is a description</div>
                </>
              )
            }
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>
  );
}

export function CustomStatus(): React.JSX.Element {
  return (
    <>
      <h1>Custom Status</h1>
      <Steps.Root className={styles.root} currentStep={1}>
        <Steps.Step className={styles.step} status="error">
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status finish={<UserIcon />} error={<UserIcon color="red" />} />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            {(status: StepStatusValue) =>
              status === 'wait' ? <UserIcon color="gray" /> : <UserIcon />
            }
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>
  );
}

export function Orientation(): React.JSX.Element {
  return (
    <>
      <h1>Orientation</h1>
      <Steps.Root className={styles.root} orientation="vertical" currentStep={1}>
        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step01</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step02</div>
            <div>This is a description</div>
          </Steps.Content>
          <Steps.Separator className={styles.separator} />
        </Steps.Step>

        <Steps.Step className={styles.step}>
          <Steps.Indicator className={styles.indicator}>
            <Steps.Status />
          </Steps.Indicator>
          <Steps.Content className={styles.content}>
            <div>Step03</div>
          </Steps.Content>
        </Steps.Step>
      </Steps.Root>
    </>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>): React.JSX.Element {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
