'use client';

import Root from './modal';
import Backdrop from './modal-backdrop';
import Close from './modal-close';
import CloseButton from './modal-close-button';
import Content from './modal-content';
import Portal from './modal-portal';
import Trigger from './modal-trigger';

export * from './modal';
export * from './modal-trigger';
export * from './modal-portal';
export * from './modal-content';
export * from './modal-close';
export * from './modal-close-button';
export * from './modal-backdrop';

export const Modal = {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  CloseButton,
  Backdrop,
};
