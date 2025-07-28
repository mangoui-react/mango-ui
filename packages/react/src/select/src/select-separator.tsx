import React from 'react';

export interface SelectSeparatorProps {
  name?: string;
}

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>((props, ref) => {
  const { name } = props;

  return <div ref={ref}>{name}</div>;
});

SelectSeparator.displayName = 'Select.Separator';

export default SelectSeparator;
