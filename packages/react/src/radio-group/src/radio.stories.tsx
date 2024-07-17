import React from 'react';

import { Radio, RadioValue } from '.';
import * as styles from './radio.stories.css';

export default { title: 'Components/RadioGroup' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="4">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오4</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="5">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오5</Radio.Label>
        </Radio.Root>
      </Radio.Group>

      <h1>defaultChecked</h1>
      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2" defaultChecked>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="4">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오4</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="5">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오5</Radio.Label>
        </Radio.Root>
      </Radio.Group>

      <h1>disabled</h1>
      <Radio.Group className={styles.group} disabled>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>

      <h1>readOnly</h1>
      <Radio.Group className={styles.group} readOnly>
        <Radio.Root className={styles.root} value="1" checked>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>
    </>
  );
}

export function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState('');
  const handleChange = (value: RadioValue): void => {
    setValue(value as string);
  };

  return (
    <>
      <h1>onValueChange</h1>
      <Radio.Group className={styles.group} value={value} onValueChange={handleChange}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom Size</h1>
      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1" style={{ fontSize: '0.875rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2" style={{ fontSize: '0.875rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3" style={{ fontSize: '0.875rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>
      <br />

      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1" style={{ fontSize: '1.125rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2" style={{ fontSize: '1.125rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3" style={{ fontSize: '1.125rem' }}>
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>

      <h1>Custom Color</h1>
      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator} style={{ color: '#9812f1' }}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>#9812f1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator} style={{ color: '#1446eb' }}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>#1446eb</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator} style={{ color: '#f11a0b' }}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>#f11a0b</Radio.Label>
        </Radio.Root>
      </Radio.Group>

      <h1>Custom Checked</h1>
      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            {(checked: boolean) => {
              if (checked) return <CheckedUserIcon />;
              return <UncheckedUserIcon />;
            }}
          </Radio.Indicator>
          <Radio.Label className={styles.label}>함수로 아이콘 설정1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            {(checked: boolean) => {
              if (checked) return <CheckedUserIcon />;
              return <UncheckedUserIcon />;
            }}
          </Radio.Indicator>
          <Radio.Label className={styles.label}>함수로 아이콘 설정2</Radio.Label>
        </Radio.Root>
      </Radio.Group>
      <br />

      <Radio.Group className={styles.group}>
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>prop 으로 아이콘 설정1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon checkedIcon={<CheckedUserIcon />} uncheckedIcon={<UncheckedUserIcon />} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>prop 으로 아이콘 설정2</Radio.Label>
        </Radio.Root>
      </Radio.Group>
    </>
  );
}

export function Orientation(): JSX.Element {
  return (
    <>
      <h1>orientation</h1>
      <Radio.Group className={styles.group} orientation="vertical">
        <Radio.Root className={styles.root} value="1">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="2">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.root} value="3">
          <Radio.Indicator className={styles.indicator}>
            <Radio.Icon className={styles.icon} />
          </Radio.Indicator>
          <Radio.Label className={styles.label}>라디오3</Radio.Label>
        </Radio.Root>
      </Radio.Group>
    </>
  );
}

export function ButtonStyle(): JSX.Element {
  return (
    <>
      <h1>ButtonStyle</h1>
      <Radio.Group className={styles.buttonGroup}>
        <Radio.Root className={styles.buttonRoot} value="1">
          <Radio.Indicator className={styles.buttonIndicator}>
            <Radio.Icon className={styles.buttonIcon} />
          </Radio.Indicator>
          <Radio.Label className={styles.buttonLabel}>라디오1</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.buttonRoot} value="2">
          <Radio.Indicator className={styles.buttonIndicator}>
            <Radio.Icon className={styles.buttonIcon} />
          </Radio.Indicator>
          <Radio.Label className={styles.buttonLabel}>라디오2</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.buttonRoot} value="3">
          <Radio.Indicator className={styles.buttonIndicator}>
            <Radio.Icon className={styles.buttonIcon} />
          </Radio.Indicator>
          <Radio.Label className={styles.buttonLabel}>라디오3</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.buttonRoot} value="4">
          <Radio.Indicator className={styles.buttonIndicator}>
            <Radio.Icon className={styles.buttonIcon} />
          </Radio.Indicator>
          <Radio.Label className={styles.buttonLabel}>라디오4</Radio.Label>
        </Radio.Root>

        <Radio.Root className={styles.buttonRoot} value="5">
          <Radio.Indicator className={styles.buttonIndicator}>
            <Radio.Icon className={styles.buttonIcon} />
          </Radio.Indicator>
          <Radio.Label className={styles.buttonLabel}>라디오5</Radio.Label>
        </Radio.Root>
      </Radio.Group>
    </>
  );
}

function CheckedUserIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="#00A8FF"
      />
    </svg>
  );
}

function UncheckedUserIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="#cacdcf"
      />
    </svg>
  );
}
