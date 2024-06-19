import React from 'react';

import getProgressState from '../progress/helpers/getProgressState';
import { CircularProgressContext } from './CircularProgress';

export interface CircularProgressIndicatorProps extends React.ComponentPropsWithoutRef<'svg'> {
  strokeWidth?: number;
  bgClassName?: string;
  barClassName?: string;
  bgStyle?: React.CSSProperties;
  barStyle?: React.CSSProperties;
}

const CircularProgressIndicator = React.forwardRef<SVGSVGElement, CircularProgressIndicatorProps>(
  (props, ref) => {
    const { strokeWidth = 10, bgClassName, barClassName, bgStyle, barStyle, ...rest } = props;

    const { value, max, computedValue, indeterminate } = React.useContext(CircularProgressContext);

    const circleComputedValue = (computedValue ?? 0) * 2.64;

    return (
      <svg
        ref={ref}
        data-state={getProgressState(value, max, indeterminate)}
        data-value={value}
        data-max={max}
        viewBox="0 0 100 100"
        {...rest}
      >
        <circle
          // className={bgClassName)
          data-component="bg"
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          strokeWidth={strokeWidth}
          style={bgStyle}
        />
        <circle
          // className={classNames(`${componentCls}__bar`, barClassName)}
          data-component="bar"
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circleComputedValue} ${264 - circleComputedValue}`}
          // style={{ stroke: color }}
          style={barStyle}
        />
      </svg>
    );
  },
);

CircularProgressIndicator.displayName = 'CircularProgress.Indicator';

export default CircularProgressIndicator;
