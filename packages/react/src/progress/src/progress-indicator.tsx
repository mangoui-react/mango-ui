import React from 'react';

import { getProgressState } from '../../internal/get-progress-state';

import { ProgressContext } from './progress';

export interface ProgressIndicatorProps extends React.ComponentPropsWithoutRef<'div'> {}

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>((props, ref) => {
  const { style, ...rest } = props;

  const { value, max, computedValue, indeterminate } = React.useContext(ProgressContext);

  return (
    <div
      ref={ref}
      data-state={getProgressState(value, max, indeterminate)}
      data-value={value}
      data-max={max}
      style={{
        ...(indeterminate
          ? {
              backgroundImage: `linear-gradient(to right, transparent 0%, var(--es-primary, #1976d2) 50%, transparent 100%)`,
            }
          : {
              width: `${computedValue}%`,
              // transform: `translateX(-${100 - (computedValue ?? 0)}%)`,
            }),
        ...style,
      }}
      {...rest}
    />
  );
});

ProgressIndicator.displayName = 'Progress.Indicator';

export default ProgressIndicator;
