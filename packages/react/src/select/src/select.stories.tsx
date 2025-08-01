import React from 'react';

import { Select } from '.';
import * as styles from './select.stories.css';

export default { title: 'Components/Select' };

export function Basic(): React.JSX.Element {
  return (
    <>
      <h1>기본</h1>
      <Select.Root>
        <Select.Trigger className={styles.trigger}>
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={styles.content}>
            {/* <Select.ScrollUpButton /> */}
            <Select.Viewport>
              <Select.Item value="1" className={styles.item}>
                <Select.ItemIndicator />
                <Select.ItemText>Option 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2" className={styles.item}>
                <Select.ItemIndicator />
                <Select.ItemText>Option 2</Select.ItemText>
              </Select.Item>

              <Select.Separator className={styles.separator} />

              <Select.Group>
                <Select.Label className={styles.label}>Title</Select.Label>
                <Select.Item value="3" className={styles.item}>
                  <Select.ItemIndicator />
                  <Select.ItemText>Option 3</Select.ItemText>
                </Select.Item>
                <Select.Item value="4" className={styles.item}>
                  <Select.ItemIndicator />
                  <Select.ItemText>Option 4</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            {/* <Select.ScrollDownButton />
            <Select.Arrow /> */}
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
