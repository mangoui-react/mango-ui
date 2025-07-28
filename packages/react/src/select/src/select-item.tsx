import React from 'react';

import { type SelectItemProps } from './types';

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
  const { children, value, ...itemProps } = props;

  return (
    <div ref={ref} {...itemProps}>
      {children}
    </div>
  );
});

SelectItem.displayName = 'Select.Item';

export default SelectItem;
