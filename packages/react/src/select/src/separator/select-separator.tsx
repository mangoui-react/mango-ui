import React from 'react';

export interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

export type SelectSeparatorElement = HTMLDivElement;

const SelectSeparator = React.forwardRef<SelectSeparatorElement, SelectSeparatorProps>(
  (props, ref) => {
    return <div aria-hidden {...props} ref={ref} />;
  },
);

SelectSeparator.displayName = 'Select.Separator';

export default SelectSeparator;
