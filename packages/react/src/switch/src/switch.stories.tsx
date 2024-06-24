import React from 'react';

import { Switch } from '.';
import * as styles from './switch.stories.css';

export default { title: 'Components/Switch' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Switch.Root className={styles.root}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
      </Switch.Root>
    </>
  );
}

export function Label(): JSX.Element {
  return (
    <>
      <h1>Label</h1>
      <Switch.Root className={styles.root}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>
    </>
  );
}

export function OnCheckedChange(): JSX.Element {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <h1>onCheckedChange</h1>
      <Switch.Root className={styles.root} checked={checked} onCheckedChange={setChecked}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
      </Switch.Root>
    </>
  );
}

export function DisabledReadOnly(): JSX.Element {
  return (
    <>
      <h1>Disabled</h1>
      <Switch.Root className={styles.root} checked disabled>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>

      <h1>ReadOnly</h1>
      <Switch.Root className={styles.root} readOnly>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
        </Switch.Track>
        <Switch.Label className={styles.label}>Label</Switch.Label>
      </Switch.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
  const [innerChecked, setInnerChecked] = React.useState(false);

  return (
    <>
      <h1>Custom Size</h1>
      <Switch.Root className={styles.root} checked={checked} onCheckedChange={setChecked}>
        <Switch.Track className={styles.track} style={{ height: 32, minWidth: 60 }}>
          <Switch.Thumb
            className={styles.thumb}
            style={{
              width: 28,
              height: 28,
              ...(checked && { left: 'calc(100% - 32px)' }),
            }}
          />
        </Switch.Track>
        <Switch.Label className={styles.label}>Size</Switch.Label>
      </Switch.Root>

      <h1>Custom checked/unChecked</h1>
      <Switch.Root className={styles.root} checked={innerChecked} onCheckedChange={setInnerChecked}>
        <Switch.Track className={styles.track}>
          <Switch.Thumb className={styles.thumb} />
          {innerChecked ? (
            <span style={{ margin: '0 28px 0 5px', color: '#fff' }}>open</span>
          ) : (
            <span style={{ margin: '0 5px 0 28px' }}>close</span>
          )}
        </Switch.Track>
      </Switch.Root>
    </>
  );
}
