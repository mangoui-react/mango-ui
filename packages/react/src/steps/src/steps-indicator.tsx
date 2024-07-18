import React from 'react';

import { StepContext, StepStatusValue } from './steps-step';

export interface StepsIndicatorProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'div'>['children']
    | ((status: StepStatusValue) => React.ReactNode);
}

const StepsIndicator = React.forwardRef<HTMLDivElement, StepsIndicatorProps>((props, ref) => {
  const { children: childrenProp, ...rest } = props;
  const { status = 'wait' } = React.useContext(StepContext);

  const children = typeof childrenProp === 'function' ? childrenProp(status) : childrenProp;

  return (
    <div ref={ref} data-status={status} {...rest}>
      {children}
    </div>
  );
});

StepsIndicator.displayName = 'Steps.Indicator';

export default StepsIndicator;
