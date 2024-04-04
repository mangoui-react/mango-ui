import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { StepContext, StepStatusValue } from './Step';

export interface StepContentProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | ComponentPropsWithoutRef<'div'>['children']
    | ((status: StepStatusValue) => React.ReactNode);
}

const StepContent = React.forwardRef<HTMLDivElement, StepContentProps>((props, ref) => {
  const { children: childrenProp, ...rest } = props;
  const { status = 'wait' } = React.useContext(StepContext);

  const children = typeof childrenProp === 'function' ? childrenProp(status) : childrenProp;

  return (
    <div ref={ref} data-status={status} {...rest}>
      {children}
    </div>
  );
});

StepContent.displayName = 'Steps.Content';

export default StepContent;
