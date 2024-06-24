import React from 'react';

import { StepsContext } from './steps';

export interface StepSeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

const StepSeparator = React.forwardRef<HTMLDivElement, StepSeparatorProps>((props, ref) => {
  const { orientation } = React.useContext(StepsContext);

  return <div ref={ref} data-orientation={orientation} {...props} />;
});

StepSeparator.displayName = 'Steps.Separator';

export default StepSeparator;
