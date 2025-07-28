'use client';

import Root from './select';
// import Arrow from './select-arrow';
import Content from './select-content';
// import Group from './select-group';
import Icon from './select-icon';
import Item from './select-item';
import ItemIndicator from './select-item-indicator';
import ItemText from './select-item-text';
// import Label from './select-label';
import Portal from './select-portal';
import Separator from './select-separator';
import Trigger from './select-trigger';
import Value from './select-value';
import Viewport from './select-viewport';

export { default as SelectRoot } from './select';
export { default as SelectTrigger } from './select-trigger';
export { default as SelectContent } from './select-content';
export { default as SelectItem } from './select-item';
export { default as SelectItemText } from './select-item-text';
export { default as SelectItemIndicator } from './select-item-indicator';
// export { default as SelectLabel } from './select-label';
// export { default as SelectGroup } from './select-group';
export { default as SelectViewport } from './select-viewport';
export { default as SelectSeparator } from './select-separator';
export { default as SelectPortal } from './select-portal';
export { default as SelectValue } from './select-value';
export { default as SelectIcon } from './select-icon';
// export { default as SelectArrow } from './select-arrow';

export * from './select';
export * from './select-trigger';
export * from './select-content';
export * from './select-item';
export * from './select-item-text';
export * from './select-item-indicator';
// export * from './select-label';
// export * from './select-group';
export * from './select-viewport';
export * from './select-separator';
export * from './select-portal';
export * from './select-value';
export * from './select-icon';
// export * from './select-arrow';

export const Select = {
  Root,
  Trigger,
  Content,
  Item,
  ItemText,
  ItemIndicator,
  // Label,
  // Group,
  Viewport,
  Separator,
  Portal,
  Value,
  Icon,
};
