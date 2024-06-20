// export { default } from './Popover';
// export { default as PopoverTrigger } from './PopoverTrigger';
// export { default as PopoverPortal } from './PopoverPortal';
// export { default as PopoverContent } from './PopoverContent';
// export { default as PopoverClose } from './PopoverClose';
import Root from './Popover';
import Close from './PopoverClose';
import Content from './PopoverContent';
import Portal from './PopoverPortal';
import Trigger from './PopoverTrigger';

export * from './Popover';
export * from './PopoverTrigger';
export * from './PopoverPortal';
export * from './PopoverContent';
export * from './PopoverClose';

export const Popover = {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
};
