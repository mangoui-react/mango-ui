import React from 'react';

import { StepContext, StepStatusValue } from './steps-step';

export interface StepsContentProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'div'>['children']
    | ((status: StepStatusValue) => React.ReactNode);
}

const StepsContent = React.forwardRef<HTMLDivElement, StepsContentProps>((props, ref) => {
  const { children: childrenProp, ...rest } = props;
  const { status = 'wait' } = React.useContext(StepContext);

  const children = typeof childrenProp === 'function' ? childrenProp(status) : childrenProp;

  return (
    <div ref={ref} data-status={status} {...rest}>
      {children}
    </div>
  );
});

StepsContent.displayName = 'Steps.Content';

export default StepsContent;
