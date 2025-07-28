import React from 'react';

import { Slot } from '@mangoui/slot';

export interface SelectItemIndicatorProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
}

const SelectItemIndicator = React.forwardRef<HTMLSpanElement, SelectItemIndicatorProps>(
  (props, ref) => {
    const { asChild = false, ...indicatorProps } = props;

    const Component = asChild ? Slot : 'span';

    const isSelected = true;
    return isSelected ? <Component aria-hidden {...indicatorProps} ref={ref} /> : null;
  },
);

SelectItemIndicator.displayName = 'Select.ItemIndicator';

export default SelectItemIndicator;
