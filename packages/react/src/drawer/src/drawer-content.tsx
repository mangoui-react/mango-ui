import React from 'react';

import { Modal, ModalContentProps } from '@melio-ui/modal';

import { DrawerContext } from './drawer';

export interface DrawerContentProps extends ModalContentProps {}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
  const { placement } = React.useContext(DrawerContext);

  return <Modal.Content data-placement={placement} {...props} ref={ref} />;
});

DrawerContent.displayName = 'Drawer.Content';

export default DrawerContent;
