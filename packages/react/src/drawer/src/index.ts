import { Modal } from '@melio-ui/modal';

import Root from './Drawer';
import Content from './DrawerContent';

export * from './Drawer';
export * from './DrawerContent';

export type {
  ModalTriggerProps as DrawerTriggerProps,
  ModalPortalProps as DrawerPortalProps,
  ModalCloseProps as DrawerCloseProps,
  ModalCloseButtonProps as DrawerCloseButtonProps,
  ModalBackdropProps as DrawerBackdropProps,
} from '@melio-ui/modal';

const Drawer = {
  Root,
  Trigger: Modal.Trigger,
  Portal: Modal.Portal,
  Content,
  Close: Modal.Close,
  CloseButton: Modal.CloseButton,
  Backdrop: Modal.Backdrop,
};

export { Drawer };
