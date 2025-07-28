import React from 'react';

import { Slot } from '@mangoui/slot';

export interface SelectItemTextProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
}

const SelectItemText = React.forwardRef<HTMLSpanElement, SelectItemTextProps>((props, ref) => {
  const { children, asChild = false, ...itemTextProps } = props;

  const Component = asChild ? Slot : 'span';

  return (
    <Component {...itemTextProps} ref={ref}>
      {children || 'text'}
    </Component>
  );
});

SelectItemText.displayName = 'Select.Text';

export default SelectItemText;
