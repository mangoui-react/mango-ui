import React from 'react';

import { Slider } from '.';
import * as styles from './slider.stories.css';

export default { title: 'Components/Slider' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Slider.Root className={styles.root}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>
  );
}

export function OnValueChange(): React.JSX.Element {
  const [value, setValue] = React.useState(30);

  const onValueChange = (newValue: number | number[]): void => {
    setValue(newValue as number);
  };

  return (
    <>
      <h1>onValueChange</h1>
      <Slider.Root className={styles.root} value={value} onValueChange={onValueChange}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
      <div>값: {value}</div>
    </>
  );
}

export function ThumbLabel(): React.JSX.Element {
  return (
    <>
      <h1>Thumb Label</h1>
      <Slider.Root className={styles.root} defaultValue={20}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
      </Slider.Root>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Slider.Root className={styles.root} defaultValue={20}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
      </Slider.Root>
    </>
  );
}

export function Disabled(): React.JSX.Element {
  return (
    <>
      <h1>Disabled</h1>
      <Slider.Root className={styles.root} defaultValue={30} disabled>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>
  );
}

export function MinMax(): React.JSX.Element {
  return (
    <>
      <h1>Min/Max</h1>
      <Slider.Root className={styles.root} min={10} max={120} step={10} defaultValue={30}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>
  );
}

export function Orientation(): React.JSX.Element {
  return (
    <>
      <h1>Orientation</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <Slider.Root className={styles.root} orientation="vertical" style={{ height: 300 }}>
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb} />
        </Slider.Root>

        <Slider.Root
          className={styles.root}
          orientation="vertical"
          defaultValue={30}
          style={{ height: 300 }}
        >
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
        </Slider.Root>
      </div>
    </>
  );
}

export function Range(): React.JSX.Element {
  return (
    <>
      <h1>Range</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>

      <h1>Range Thumb Label</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} />
        </Slider.Thumb>
      </Slider.Root>

      <h1>Range Thumb Label - auto</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]}>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
        <Slider.Thumb className={styles.thumb}>
          <Slider.ThumbLabel className={styles.thumbLabel} auto />
        </Slider.Thumb>
      </Slider.Root>

      <h1>Range Disabled</h1>
      <Slider.Root className={styles.root} defaultValue={[10, 30]} disabled>
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>
    </>
  );
}

export function RangeOrientation(): React.JSX.Element {
  return (
    <>
      <h1>Range Orientation</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 50 }}>
        <Slider.Root
          className={styles.root}
          defaultValue={[10, 30]}
          orientation="vertical"
          style={{ height: 300 }}
        >
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb} />
          <Slider.Thumb className={styles.thumb} />
        </Slider.Root>

        <Slider.Root
          className={styles.root}
          defaultValue={[10, 30]}
          orientation="vertical"
          style={{ height: 300 }}
        >
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} />
          </Slider.Thumb>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} />
          </Slider.Thumb>
        </Slider.Root>

        <Slider.Root
          className={styles.root}
          defaultValue={[10, 30]}
          orientation="vertical"
          style={{ height: 300 }}
        >
          <Slider.Track className={styles.track}>
            <Slider.Range className={styles.range} />
          </Slider.Track>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
          <Slider.Thumb className={styles.thumb}>
            <Slider.ThumbLabel className={styles.thumbLabel} auto />
          </Slider.Thumb>
        </Slider.Root>
      </div>
    </>
  );
}
