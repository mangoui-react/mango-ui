'use client';

import Root from './radio';
import Group from './radio-group';
import Icon from './radio-icon';
import Indicator from './radio-indicator';
import Label from './radio-label';

export { default as RadioRoot } from './radio';
export { default as RadioGroup } from './radio-group';
export { default as RadioIcon } from './radio-icon';
export { default as RadioIndicator } from './radio-indicator';
export { default as RadioLabel } from './radio-label';

export * from './radio';
export * from './radio-group';
export * from './radio-indicator';
export * from './radio-icon';
export * from './radio-label';

// TODO: radio-group, radio-item 으로 수정하자
export const Radio = {
  Root,
  Group,
  Indicator,
  Icon,
  Label,
};
