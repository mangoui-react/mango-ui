import React from 'react';

import { getProgressState } from '../../internal/get-progress-state';

import { CircularProgressContext } from './circular-progress';

export interface CircularProgressLabelProps extends React.ComponentPropsWithoutRef<'div'> {}

const CircularProgressLabel = React.forwardRef<HTMLDivElement, CircularProgressLabelProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    const { value, max, indeterminate } = React.useContext(CircularProgressContext);

    return (
      <div
        data-state={getProgressState(value, max, indeterminate)}
        data-value={value}
        data-max={max}
        {...rest}
        ref={ref}
      >
        {children ?? value}
      </div>
    );
  },
);

CircularProgressLabel.displayName = 'CircularProgress.Label';

export default CircularProgressLabel;
