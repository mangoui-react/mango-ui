import React from 'react';

import { Slot } from '@mangoui/slot';

import { useSelectContext } from './select-context';

export interface SelectValueProps extends React.ComponentPropsWithoutRef<'span'> {
  placeholder?: React.ReactNode;
  asChild?: boolean;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>((props, ref) => {
  const { value } = useSelectContext();

  const { placeholder = '', children, asChild = false, ...valueProps } = props;

  const Component = asChild ? Slot : 'span';

  return (
    <Component {...valueProps} ref={ref} style={{ pointerEvents: 'none' }}>
      {value === '' || value === undefined ? <>{placeholder}</> : children}
    </Component>
  );
});

SelectValue.displayName = 'Select.Value';

export default SelectValue;
