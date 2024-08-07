import React from 'react';

import { StepsContext } from './steps';

export interface StepsSeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

const StepsSeparator = React.forwardRef<HTMLDivElement, StepsSeparatorProps>((props, ref) => {
  const { orientation } = React.useContext(StepsContext);

  return <div data-orientation={orientation} {...props} ref={ref} />;
});

StepsSeparator.displayName = 'Steps.Separator';

export default StepsSeparator;
