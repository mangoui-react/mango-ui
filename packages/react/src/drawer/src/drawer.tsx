import React from 'react';

import { Dialog, DialogProps } from '@mangoui/dialog';

export interface DrawerProps extends DialogProps {
  /** drawer 열리는 위치
   * @default right
   */
  placement?: 'top' | 'bottom' | 'right' | 'left';
}

export interface DrawerContextValue extends Pick<DrawerProps, 'placement'> {}
export const DrawerContext = React.createContext<DrawerContextValue>({});

export default function Drawer(props: DrawerProps): React.JSX.Element {
  const { open, placement = 'right', children, ...rest } = props;

  const contextValue = React.useMemo(
    () => ({
      placement,
    }),
    [placement],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <Dialog.Root {...rest} role="presentation" open={open}>
        {children}
      </Dialog.Root>
    </DrawerContext.Provider>
  );
}

Drawer.displayName = 'Drawer';
