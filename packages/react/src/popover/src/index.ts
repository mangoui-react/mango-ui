'use client';

import Root from './popover';
import Arrow from './popover-arrow';
import Close from './popover-close';
import Content from './popover-content';
import Portal from './popover-portal';
import Trigger from './popover-trigger';

export { default as PopoverRoot } from './popover';
export { default as PopoverClose } from './popover-close';
export { default as PopoverContent } from './popover-content';
export { default as PopoverPortal } from './popover-portal';
export { default as PopoverTrigger } from './popover-trigger';
export { default as PopoverArrow } from './popover-arrow';

export * from './popover';
export * from './popover-trigger';
export * from './popover-portal';
export * from './popover-content';
export * from './popover-close';
export * from './popover-arrow';

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
};
