import React from 'react';

import { RadioGroup, RadioValue } from '.';
import * as styles from './radio-group.stories.css';

export default { title: 'Components/RadioGroup' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="4">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="5">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>defaultChecked</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" defaultChecked>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="4">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="5">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>disabled</h1>
      <RadioGroup.Root className={styles.root} disabled>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>readOnly</h1>
      <RadioGroup.Root className={styles.root} readOnly>
        <RadioGroup.Item className={styles.item} value="1" checked>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
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
      <RadioGroup.Root className={styles.root} value={value} onValueChange={handleChange}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom Size</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1" style={{ fontSize: '0.875rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" style={{ fontSize: '0.875rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3" style={{ fontSize: '0.875rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
      <br />

      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1" style={{ fontSize: '1.125rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2" style={{ fontSize: '1.125rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3" style={{ fontSize: '1.125rem' }}>
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>Custom Color</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator} style={{ color: '#9812f1' }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#9812f1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator} style={{ color: '#1446eb' }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#1446eb</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator} style={{ color: '#f11a0b' }}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>#f11a0b</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <h1>Custom Checked</h1>
      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            {(checked: boolean) => {
              if (checked) return <CheckedUserIcon />;
              return <UncheckedUserIcon />;
            }}
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>함수로 아이콘 설정1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            {(checked: boolean) => {
              if (checked) return <CheckedUserIcon />;
              return <UncheckedUserIcon />;
            }}
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>함수로 아이콘 설정2</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
      <br />

      <RadioGroup.Root className={styles.root}>
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon
              checkedIcon={<CheckedUserIcon />}
              uncheckedIcon={<UncheckedUserIcon />}
            />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>prop 으로 아이콘 설정1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon
              checkedIcon={<CheckedUserIcon />}
              uncheckedIcon={<UncheckedUserIcon />}
            />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>prop 으로 아이콘 설정2</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
}

export function Orientation(): JSX.Element {
  return (
    <>
      <h1>orientation</h1>
      <RadioGroup.Root className={styles.root} orientation="vertical">
        <RadioGroup.Item className={styles.item} value="1">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="2">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.item} value="3">
          <RadioGroup.Indicator className={styles.indicator}>
            <RadioGroup.Icon className={styles.icon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.label}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
}

export function ButtonStyle(): JSX.Element {
  return (
    <>
      <h1>ButtonStyle</h1>
      <RadioGroup.Root className={styles.buttonGroup}>
        <RadioGroup.Item className={styles.buttonRoot} value="1">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오1</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="2">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오2</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="3">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오3</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="4">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오4</RadioGroup.Label>
        </RadioGroup.Item>

        <RadioGroup.Item className={styles.buttonRoot} value="5">
          <RadioGroup.Indicator className={styles.buttonIndicator}>
            <RadioGroup.Icon className={styles.buttonIcon} />
          </RadioGroup.Indicator>
          <RadioGroup.Label className={styles.buttonLabel}>라디오5</RadioGroup.Label>
        </RadioGroup.Item>
      </RadioGroup.Root>
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
