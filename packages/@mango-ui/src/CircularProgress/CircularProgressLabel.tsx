import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { CircularProgressContext } from './CircularProgress';

export interface CircularProgressLabelProps extends ComponentPropsWithoutRef<'div'> {}

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
