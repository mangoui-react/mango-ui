import React from 'react';

import { Slot } from '@mangoui/slot';

export interface SelectIconProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
}

const SelectIcon = React.forwardRef<HTMLSpanElement, SelectIconProps>((props, ref) => {
  const { children, asChild = false, ...iconProps } = props;

  const Component = asChild ? Slot : 'span';

  return (
    <Component aria-hidden {...iconProps} ref={ref}>
      {children || '▼'}
    </Component>
  );
});

SelectIcon.displayName = 'Select.Icon';

export default SelectIcon;
