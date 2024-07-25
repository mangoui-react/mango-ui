import React from 'react';

import { getProgressState } from '../../internal/get-progress-state';

import { CircularProgressContext } from './circular-progress';

export interface CircularProgressIndicatorProps extends React.ComponentPropsWithoutRef<'svg'> {
  strokeWidth?: number;
  bgStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
}

const CircularProgressIndicator = React.forwardRef<SVGSVGElement, CircularProgressIndicatorProps>(
  (props, ref) => {
    const { strokeWidth = 10, bgStyle, barStyle, ...rest } = props;

    const { value, max, computedValue, indeterminate } = React.useContext(CircularProgressContext);

    const circleComputedValue = (computedValue ?? 0) * 2.64;

    return (
      <svg
        data-state={getProgressState(value, max, indeterminate)}
        data-value={value}
        data-max={max}
        {...rest}
        viewBox="0 0 100 100"
        ref={ref}
      >
        <circle
          data-component="bg"
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          strokeWidth={strokeWidth}
          style={bgStyle}
        />
        <circle
          data-component="bar"
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circleComputedValue} ${264 - circleComputedValue}`}
          style={barStyle}
        />
      </svg>
    );
  },
);

CircularProgressIndicator.displayName = 'CircularProgress.Indicator';

export default CircularProgressIndicator;
