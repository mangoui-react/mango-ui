import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface NumberInputButtonGroupProps extends ComponentPropsWithoutRef<'span'> {}

// TODO: 필요한지 확인필요
const NumberInputButtonGroup = React.forwardRef<HTMLSpanElement, NumberInputButtonGroupProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <span ref={ref} {...rest}>
        {children}
      </span>
    );
  },
);

NumberInputButtonGroup.displayName = 'NumberInput.ButtonGroup';

export default NumberInputButtonGroup;
