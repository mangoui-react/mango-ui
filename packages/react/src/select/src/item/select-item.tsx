import React from 'react';

export type SelectItemElement = HTMLDivElement;

export interface SelectItemProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
}

const SelectItem = React.forwardRef<SelectItemElement, SelectItemProps>((props, ref) => {
  const { children, value, ...itemProps } = props;

  return (
    <div ref={ref} {...itemProps}>
      {children}
    </div>
  );
});

SelectItem.displayName = 'Select.Item';

export default SelectItem;
