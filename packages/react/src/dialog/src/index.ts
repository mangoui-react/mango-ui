'use client';

import Root from './dialog';
import Backdrop from './dialog-backdrop';
import Close from './dialog-close';
import Content from './dialog-content';
import Portal from './dialog-portal';
import Trigger from './dialog-trigger';

export { default as DialogRoot } from './dialog';
export { default as DialogBackdrop } from './dialog-backdrop';
export { default as DialogClose } from './dialog-close';
export { default as DialogContent } from './dialog-content';
export { default as DialogPortal } from './dialog-portal';
export { default as DialogTrigger } from './dialog-trigger';

export * from './dialog';
export * from './dialog-trigger';
export * from './dialog-portal';
export * from './dialog-content';
export * from './dialog-close';
export * from './dialog-backdrop';

export const Dialog = {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Backdrop,
};
