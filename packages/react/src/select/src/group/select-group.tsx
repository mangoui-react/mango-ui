import React from 'react';

export interface SelectGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

export type SelectGroupElement = HTMLDivElement;

const SelectGroup = React.forwardRef<SelectGroupElement, SelectGroupProps>((props, ref) => {
  return <div role="group" {...props} ref={ref} />;
});

SelectGroup.displayName = 'Select.Group';

export default SelectGroup;
