import React from 'react';

import { Progress } from '.';
import * as styles from './Progress.stories.css';

export default { title: 'Components/Progress' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Progress.Root className={styles.root} value={30}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <br />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Progress.Root className={styles.root} value={30}>
          <Progress.Indicator className={styles.indicator} />
        </Progress.Root>
        <span>30%</span>
      </div>
    </>
  );
}

export function Indeterminate(): JSX.Element {
  return (
    <>
      <h1>Indeterminate</h1>
      <Progress.Root className={styles.root} indeterminate>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
    </>
  );
}

export function Custom(): JSX.Element {
  return (
    <>
      <h1>Custom</h1>
      <Progress.Root className={styles.root} value={50} style={{ height: 4 }}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <br />

      <Progress.Root className={styles.root} value={50}>
        <Progress.Indicator className={styles.indicator} style={{ backgroundColor: '#ff4d4f' }} />
      </Progress.Root>
    </>
  );
}

export function ValueControlled(): JSX.Element {
  const [max] = React.useState(100);

  const [percent, setPercent] = React.useState<number>(0);

  const down = (): void => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  const up = (): void => {
    let newPercent = percent + 10;
    if (newPercent > max) {
      newPercent = max;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <h1>Value Controlled</h1>
      <Progress.Root className={styles.root} value={percent} max={max}>
        <Progress.Indicator className={styles.indicator} />
      </Progress.Root>
      <div style={{ display: 'inline-flex', alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
        <button type="button" onClick={down}>
          -
        </button>
        <button type="button" onClick={up}>
          +
        </button>
      </div>
    </>
  );
}
