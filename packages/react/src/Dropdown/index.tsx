// export { default } from './Dropdown';
// export { default as DropdownTrigger } from './DropdownTrigger';
// export { default as DropdownPortal } from './DropdownPortal';
// export { default as DropdownContent } from './DropdownContent';
// export { default as DropdownItem } from './DropdownItem';
// export { default as DropdownClose } from './DropdownClose';
import Root from './Dropdown';
import Close from './DropdownClose';
import Content from './DropdownContent';
import Item from './DropdownItem';
import Portal from './DropdownPortal';
import Trigger from './DropdownTrigger';

export * from './Dropdown';
export * from './DropdownTrigger';
export * from './DropdownPortal';
export * from './DropdownContent';
export * from './DropdownItem';
export * from './DropdownClose';

const Dropdown = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Close,
};

export default Dropdown;
