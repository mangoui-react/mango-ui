import React from 'react';
import { ComponentBaseProps } from '../types/common';

export interface NumberInputButtonGroupProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

const NumberInputButtonGroup = React.forwardRef<HTMLDivElement, NumberInputButtonGroupProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  },
);

NumberInputButtonGroup.displayName = 'NumberInput.ButtonGroup';

export default NumberInputButtonGroup;
