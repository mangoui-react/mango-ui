'use client';

import Root from './dropdown';
import Arrow from './dropdown-arrow';
import Content from './dropdown-content';
import Item from './dropdown-item';
import Portal from './dropdown-portal';
import Trigger from './dropdown-trigger';

export { default as DropdownRoot } from './dropdown';
export { default as DropdownContent } from './dropdown-content';
export { default as DropdownItem } from './dropdown-item';
export { default as DropdownPortal } from './dropdown-portal';
export { default as DropdownTrigger } from './dropdown-trigger';
export { default as PopoverArrow } from './dropdown-arrow';

export * from './dropdown';
export * from './dropdown-trigger';
export * from './dropdown-portal';
export * from './dropdown-content';
export * from './dropdown-item';
export * from './dropdown-arrow';

export const Dropdown = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
};
