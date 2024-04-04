import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface StepDescriptionProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요 없을 듯... 확인 후 제거
const StepDescription = React.forwardRef<HTMLDivElement, StepDescriptionProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

StepDescription.displayName = 'Step.Description';

export default StepDescription;
