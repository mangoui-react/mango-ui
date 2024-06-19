// export { default } from './Checkbox';
// export { default as CheckboxGroup } from './CheckboxGroup';
// export { default as CheckboxIndicator } from './CheckboxIndicator';
// export { default as CheckboxIcon } from './CheckboxIcon';
// export { default as CheckboxLabel } from './CheckboxLabel';
import Root from './Checkbox';
import Group from './CheckboxGroup';
import Icon from './CheckboxIcon';
import Indicator from './CheckboxIndicator';
import Label from './CheckboxLabel';

export * from './Checkbox';
export * from './CheckboxGroup';
export * from './CheckboxIndicator';
export * from './CheckboxIcon';
export * from './CheckboxLabel';

const Checkbox = {
  Root,
  Icon,
  Group,
  Indicator,
  Label,
};

export { Checkbox };
