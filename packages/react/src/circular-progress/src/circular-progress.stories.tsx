import React from 'react';

import { CircularProgress } from '.';
import * as styles from './circular-progress.stories.css';

export default { title: 'Components/CircularProgress' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <CircularProgress.Root className={styles.root} value={30}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>30%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{ stroke: '#ff4d4f' }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={100}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{ stroke: '#1976d2' }} />
        <CircularProgress.Label className={styles.label}>100%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={30}>
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label} />
      </CircularProgress.Root>
    </>
  );
}

export function Indeterminate(): React.JSX.Element {
  return (
    <>
      <h1>Indeterminate</h1>
      <CircularProgress.Root className={styles.root} indeterminate>
        <CircularProgress.Indicator className={styles.indicator} />
      </CircularProgress.Root>
    </>
  );
}

export function Size(): React.JSX.Element {
  return (
    <>
      <h1>Size</h1>
      <CircularProgress.Root
        className={styles.root}
        value={50}
        style={{ fontSize: 34, width: 34, height: 34 }}
      >
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root className={styles.root} value={50}>
        <CircularProgress.Indicator className={styles.indicator} barStyle={{ stroke: '#ff4d4f' }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root
        className={styles.root}
        value={50}
        style={{ fontSize: 100, width: 100, height: 100 }}
      >
        <CircularProgress.Indicator className={styles.indicator} barStyle={{ stroke: '#1976d2' }} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <CircularProgress.Root
        className={styles.root}
        value={50}
        style={{ width: 200, height: 200, fontSize: 200 }}
      >
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>50%</CircularProgress.Label>
      </CircularProgress.Root>

      <div style={{ display: 'inline-block' }}>
        <div style={{ textAlign: 'center' }}>strokeWidth</div>
        <CircularProgress.Root
          className={styles.root}
          value={50}
          style={{ width: 200, height: 200 }}
        >
          <CircularProgress.Indicator className={styles.indicator} strokeWidth={2} />
          <CircularProgress.Label className={styles.label} style={{ fontSize: 50 }}>
            50%
          </CircularProgress.Label>
        </CircularProgress.Root>
      </div>
    </>
  );
}

export function ValueControlled(): React.JSX.Element {
  const [max] = React.useState(100);

  const [percent, setPercent] = React.useState<number>(0);

  const down = React.useCallback(() => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  }, [percent]);

  const up = React.useCallback(() => {
    let newPercent = percent + 10;
    if (newPercent > max) {
      newPercent = max;
    }
    setPercent(newPercent);
  }, [percent, max]);

  return (
    <>
      <h1>Value Controlled</h1>
      <CircularProgress.Root
        className={styles.root}
        value={percent}
        max={max}
        style={{ fontSize: 100, width: 100, height: 100 }}
      >
        <CircularProgress.Indicator className={styles.indicator} />
        <CircularProgress.Label className={styles.label}>{percent}%</CircularProgress.Label>
      </CircularProgress.Root>
      <div style={{ display: 'inline-flex', alignItems: 'center', marginLeft: 10 }}>
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
