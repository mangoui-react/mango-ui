import React from 'react';

export type SelectGroupElement = HTMLDivElement;

export interface SelectGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
}

const SelectGroup = React.forwardRef<SelectGroupElement, SelectGroupProps>((props, ref) => {
  const { children, value, ...groupProps } = props;

  return (
    <div ref={ref} {...groupProps}>
      {children}
    </div>
  );
});

SelectGroup.displayName = 'Select.Group';

export default SelectGroup;
