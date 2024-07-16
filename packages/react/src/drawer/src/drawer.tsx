import React from 'react';

import { Modal, ModalProps } from '@melio-ui/modal';

export interface DrawerProps extends ModalProps {
  /** drawer 열리는 위치
   * @default right
   */
  placement?: 'top' | 'bottom' | 'right' | 'left';
}

export interface DrawerContextValue extends Pick<DrawerProps, 'placement'> {}
export const DrawerContext = React.createContext<DrawerContextValue>({});

export default function Drawer(props: DrawerProps): JSX.Element {
  const { open, placement = 'right', children, ...rest } = props;

  const contextValue = React.useMemo(
    () => ({
      placement,
    }),
    [placement],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <Modal.Root {...rest} role="presentation" open={open}>
        {children}
      </Modal.Root>
    </DrawerContext.Provider>
  );
}

Drawer.displayName = 'Drawer';
