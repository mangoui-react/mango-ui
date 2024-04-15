import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { CircularProgressContext } from './CircularProgress';

export interface CircularProgressLabelProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: ${value}% 는 제거하는게 좋을 듯... 생각해 보자
const CircularProgressLabel = React.forwardRef<HTMLDivElement, CircularProgressLabelProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    const { value, max } = React.useContext(CircularProgressContext);

    return (
      <div ref={ref} data-value={value} data-max={max} {...rest}>
        {children ?? `${value}%`}
      </div>
    );
  },
);

CircularProgressLabel.displayName = 'CircularProgress.Label';

export default CircularProgressLabel;
