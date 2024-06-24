import React from 'react';

import { StepContext, StepStatusValue } from './step';

export interface StepContentProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'div'>['children']
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
