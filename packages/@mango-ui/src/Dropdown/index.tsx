// export { default } from './Dropdown';
// export { default as DropdownTrigger } from './DropdownTrigger';
// export { default as DropdownPortal } from './DropdownPortal';
// export { default as DropdownContent } from './DropdownContent';
// export { default as DropdownItem } from './DropdownItem';
// export { default as DropdownClose } from './DropdownClose';
// export { default as DropdownSeparator } from './DropdownSeparator';
// export { default as DropdownGroup } from './DropdownGroup';
// export { default as DropdownGroupTitle } from './DropdownGroupTitle';
import Root from './Dropdown';
import Close from './DropdownClose';
import Content from './DropdownContent';
import Group from './DropdownGroup';
import GroupTitle from './DropdownGroupTitle';
import Item from './DropdownItem';
import Portal from './DropdownPortal';
import Separator from './DropdownSeparator';
import Trigger from './DropdownTrigger';

export * from './Dropdown';
export * from './DropdownTrigger';
export * from './DropdownPortal';
export * from './DropdownContent';
export * from './DropdownItem';
export * from './DropdownClose';
export * from './DropdownSeparator';
export * from './DropdownGroup';
export * from './DropdownGroupTitle';

const Dropdown = {
  Root,
  Trigger,
  Portal,
  Content,
  Group,
  GroupTitle,
  Item,
  Close,
  Separator,
};

export default Dropdown;
