import React from 'react';

import { Slot } from '@mangoui/slot';

import { useSelectItemContext } from '../item/select-item-context';

export interface SelectItemIndicatorProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
}

const SelectItemIndicator = React.forwardRef<HTMLSpanElement, SelectItemIndicatorProps>(
  (props, ref) => {
    const { asChild = false, children = '✔️', ...indicatorProps } = props;
    const itemContext = useSelectItemContext();

    const Component = asChild ? Slot : 'span';

    return itemContext.isSelected ? (
      <Component aria-hidden {...indicatorProps} ref={ref}>
        {children}
      </Component>
    ) : null;
  },
);

SelectItemIndicator.displayName = 'Select.ItemIndicator';

export default SelectItemIndicator;
