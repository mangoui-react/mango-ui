import React from 'react';

import { Dialog, DialogContentProps } from '@melio-ui/dialog';

import { DrawerContext } from './drawer';

export interface DrawerContentProps extends DialogContentProps {}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>((props, ref) => {
  const { placement } = React.useContext(DrawerContext);

  return <Dialog.Content data-placement={placement} {...props} ref={ref} />;
});

DrawerContent.displayName = 'Drawer.Content';

export default DrawerContent;
