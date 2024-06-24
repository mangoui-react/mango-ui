'use client';

import { Modal } from '@melio-ui/modal';

import Root from './drawer';
import Content from './drawer-content';

export * from './drawer';
export * from './drawer-content';

export type {
  ModalTriggerProps as DrawerTriggerProps,
  ModalPortalProps as DrawerPortalProps,
  ModalCloseProps as DrawerCloseProps,
  ModalCloseButtonProps as DrawerCloseButtonProps,
  ModalBackdropProps as DrawerBackdropProps,
} from '@melio-ui/modal';

export const Drawer = {
  Root,
  Trigger: Modal.Trigger,
  Portal: Modal.Portal,
  Content,
  Close: Modal.Close,
  CloseButton: Modal.CloseButton,
  Backdrop: Modal.Backdrop,
};
