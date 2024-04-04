import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { StepContext, StepStatusValue } from './Step';

export interface StepIndicatorProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | ComponentPropsWithoutRef<'div'>['children']
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
