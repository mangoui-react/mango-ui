import React from 'react';

import { NumberInput, NumberInputValue } from '.';
import * as styles from './number-input.stories.css';

export default { title: 'Components/NumberInput' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <NumberInput.Root className={styles.root}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root className={styles.root}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} asChild>
            <button type="button" style={{ padding: '0px 3px' }}>
              +
            </button>
          </NumberInput.Plus>
          <NumberInput.Minus className={styles.button} asChild>
            <button type="button" style={{ padding: '0px 3px' }}>
              -
            </button>
          </NumberInput.Minus>
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>
  );
}

export function OnValueChange(): JSX.Element {
  const [value, setValue] = React.useState<NumberInputValue>(null);
  const onValueChange = (val: NumberInputValue): void => {
    setValue(val);

    // if (typeof val === 'string') {
    //   console.log('input number 유효하지 않은 값', val);
    //   return;
    // }
    // console.log('input number 유효한 값', val);
  };

  return (
    <>
      <h1>onValueChange</h1>
      <NumberInput.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>
  );
}

export function Disabled(): JSX.Element {
  return (
    <>
      <h1>disabled</h1>
      <NumberInput.Root className={styles.root} disabled>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} defaultValue={2} disabled>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} disabled>
        <NumberInput.Field className={styles.field} placeholder="placeholder" />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
    </>
  );
}

export function ReadOnly(): JSX.Element {
  return (
    <>
      <h1>readOnly</h1>
      <NumberInput.Root className={styles.root} readOnly>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} defaultValue={2} readOnly>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
      <NumberInput.Root className={styles.root} readOnly>
        <NumberInput.Field className={styles.field} placeholder="placeholder" />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />
    </>
  );
}

export function MinMax(): JSX.Element {
  return (
    <>
      <h1>Min/Max</h1>
      <NumberInput.Root className={styles.root} min={0} max={100} step={5} defaultValue={50}>
        <NumberInput.Field className={styles.field} />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom</h1>
      <NumberInput.Root className={styles.root} defaultValue={2}>
        <NumberInput.Field
          className={styles.field}
          style={{ fontSize: '0.75rem', height: '1.5rem' }}
        />
        <NumberInput.ButtonGroup className={styles.buttonGroup} style={{ height: '1.5rem' }}>
          <NumberInput.Plus
            className={styles.button}
            style={{ fontSize: '0.75rem', height: '0.75rem' }}
          />
          <NumberInput.Minus
            className={styles.button}
            style={{ fontSize: '0.75rem', height: '0.75rem' }}
          />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root className={styles.root} defaultValue={2}>
        <NumberInput.Field
          className={styles.field}
          style={{ fontSize: '1.125rem', height: '3rem' }}
        />
        <NumberInput.ButtonGroup className={styles.buttonGroup} style={{ height: '3rem' }}>
          <NumberInput.Plus
            className={styles.button}
            style={{ fontSize: '1.5rem', height: '1.5rem' }}
          />
          <NumberInput.Minus
            className={styles.button}
            style={{ fontSize: '1.5rem', height: '1.5rem' }}
          />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
      <br />

      <NumberInput.Root
        className={styles.root}
        style={{ border: '0.0625rem solid', borderColor: 'var(--error)' }}
      >
        <NumberInput.Field
          className={styles.field}
          style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        />
        <NumberInput.ButtonGroup className={styles.buttonGroup}>
          <NumberInput.Plus className={styles.button} />
          <NumberInput.Minus className={styles.button} />
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </>
  );
}
