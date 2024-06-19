import React from 'react';

import { Checkbox, CheckboxValue } from '.';
import * as styles from './Checkbox.stories.css';

export default { title: 'Components/Checkbox' };

export function Basic(): JSX.Element {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <h1>기본</h1>
      <Checkbox.Root className={styles.root}>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>체크박스</Checkbox.Label>
      </Checkbox.Root>

      <h1>defaultChecked</h1>
      <Checkbox.Root className={styles.root} defaultChecked>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>defaultChecked</Checkbox.Label>
      </Checkbox.Root>

      <h1>disabled/readOnly</h1>
      <Checkbox.Root className={styles.root} disabled>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>disabled</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root className={styles.root} readOnly>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>readOnly</Checkbox.Label>
      </Checkbox.Root>

      <h1>indeterminate</h1>
      <Checkbox.Root className={styles.root} indeterminate>
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>indeterminate</Checkbox.Label>
      </Checkbox.Root>

      <h1>onCheckedChange</h1>
      <Checkbox.Root
        className={styles.root}
        checked={checked}
        onCheckedChange={(newChecked: boolean) => {
          setChecked(newChecked);
        }}
      >
        <Checkbox.Indicator className={styles.indicator}>
          <Checkbox.Icon className={styles.icon} />
        </Checkbox.Indicator>
        <Checkbox.Label className={styles.label}>체크박스</Checkbox.Label>
      </Checkbox.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom Size</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox.Root className={styles.root} style={{ fontSize: '0.875rem' }}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} style={{ fontSize: '1.25rem' }} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>small</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>medium</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} style={{ fontSize: '1.125rem' }}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} style={{ fontSize: '1.75rem' }} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>large</Checkbox.Label>
        </Checkbox.Root>
      </div>

      <h1>Custom Color</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{ color: '#9812f1' }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#9812f1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{ color: '#1446eb' }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#1446eb</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator} style={{ color: '#f11a0b' }}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>#f11a0b</Checkbox.Label>
        </Checkbox.Root>
      </div>

      <h1>Custom Checked</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            {(checked: boolean) => {
              if (checked) return <CheckedUserIcon />;
              return <UncheckedUserIcon />;
            }}
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>함수로 아이콘 설정</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon
              className={styles.icon}
              checkedIcon={<CheckedUserIcon />}
              uncheckedIcon={<UncheckedUserIcon />}
            />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>prop 으로 아이콘 설정</Checkbox.Label>
        </Checkbox.Root>
      </div>
    </>
  );
}

export function CheckboxGroup(): JSX.Element {
  const [checkedValues, setCheckedValues] = React.useState<CheckboxValue[]>([0, 1]);

  return (
    <>
      <h1>CheckboxGroup</h1>
      <Checkbox.Group className={styles.group}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>onValueChange</h1>
      <Checkbox.Group
        className={styles.group}
        value={checkedValues}
        onValueChange={(value: CheckboxValue[]) => {
          setCheckedValues(value);
        }}
      >
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>orientation=vertical</h1>
      <Checkbox.Group className={styles.group} orientation="vertical">
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>defaultValue</h1>
      <Checkbox.Group className={styles.group} defaultValue={[0, 2]}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>disabled</h1>
      <Checkbox.Group className={styles.group} defaultValue={[0, 2]} disabled>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>readOnly</h1>
      <Checkbox.Group className={styles.group} defaultValue={[1]} readOnly>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>spacing=35</h1>
      <Checkbox.Group className={styles.group} style={{ gap: 35 }}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>

      <h1>orientation=vertical, spacing=35</h1>
      <Checkbox.Group className={styles.group} orientation="vertical" style={{ gap: 35 }}>
        <Checkbox.Root className={styles.root} value={0}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스1</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={1}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스2</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root className={styles.root} value={2}>
          <Checkbox.Indicator className={styles.indicator}>
            <Checkbox.Icon className={styles.icon} />
          </Checkbox.Indicator>
          <Checkbox.Label className={styles.label}>체크박스3</Checkbox.Label>
        </Checkbox.Root>
      </Checkbox.Group>
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
