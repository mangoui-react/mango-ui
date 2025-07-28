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
              <Select.Item value="1">
                <Select.ItemIndicator />
                <Select.ItemText>1</Select.ItemText>
              </Select.Item>

              {/* <Select.Group>
                <Select.Label />
                <Select.Item>
                  <Select.ItemText />
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Group> */}

              <Select.Separator />
            </Select.Viewport>
            {/* <Select.ScrollDownButton />
            <Select.Arrow /> */}
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}
