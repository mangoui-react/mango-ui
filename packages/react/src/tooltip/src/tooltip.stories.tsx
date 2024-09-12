import React from 'react';

import { Tooltip } from '.';
import * as styles from './tooltip.stories.css';

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
          <Tooltip.Content className={styles.content} sideOffset={5}>
            tooltip message
          </Tooltip.Content>
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
          <div style={{ width: 120, border: '.0625rem solid #618761', padding: 10 }}>Tooltip</div>
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

export function Position(): JSX.Element {
  return (
    <>
      <h1>Position</h1>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button" style={{ width: 200 }}>
            BOTTOM-END
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content} side="bottom" align="end">
            tooltip message
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <div style={{ width: '100%', height: 30 }} />
      <h3>맨 우측 위치시</h3>
      <div style={{ display: 'flex', gap: 5 }}>
        <div style={{ width: '100%' }} />
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button type="button" style={{ whiteSpace: 'nowrap' }}>
              Open Popover
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className={styles.content} side="top" align="start">
              <div style={{ padding: 10, whiteSpace: 'nowrap' }}>This is a Tooltip Content</div>
              <Tooltip.Arrow className={styles.arrow} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </>
  );
}
