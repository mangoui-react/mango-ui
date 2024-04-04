import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface StepTitleProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요 없을 듯... 확인 후 제거
const StepTitle = React.forwardRef<HTMLDivElement, StepTitleProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

StepTitle.displayName = 'Step.Title';

export default StepTitle;
