import React from 'react';

import { CircularProgressContext } from './circular-progress';

export interface CircularProgressLabelProps extends React.ComponentPropsWithoutRef<'div'> {}

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
