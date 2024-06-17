import React from 'react';

import Tooltip from '.';
import * as styles from './Tooltip.stories.css';

export default { title: 'Components/Tooltip' };

export function Basic(): JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div style={{ width: 120 }}>Tooltip</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content}>tooltip message</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>
  );
}

export function Arrow(): JSX.Element {
  return (
    <>
      <h1>Arrow</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div style={{ width: 120 }}>Tooltip</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content}>
            tooltip message
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>
  );
}

export function Placement(): JSX.Element {
  return (
    <>
      <h1>Placement</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button" style={{ width: 200 }}>
            BOTTOM-END
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} placement="bottom-end">
            tooltip message
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </>
  );
}
