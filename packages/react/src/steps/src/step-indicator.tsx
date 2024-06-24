import React from 'react';

import { StepContext, StepStatusValue } from './step';

export interface StepIndicatorProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'div'>['children']
    | ((status: StepStatusValue) => React.ReactNode);
}

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>((props, ref) => {
  const { children: childrenProp, ...rest } = props;
  const { status = 'wait' } = React.useContext(StepContext);

  const children = typeof childrenProp === 'function' ? childrenProp(status) : childrenProp;

  return (
    <div ref={ref} data-status={status} {...rest}>
      {children}
    </div>
  );
});

StepIndicator.displayName = 'Steps.Indicator';

export default StepIndicator;
