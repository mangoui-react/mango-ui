import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface AlertTitleProps extends ComponentPropsWithoutRef<'div'> {}

// 필요없음
const AlertTitle = React.forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

AlertTitle.displayName = 'Alert.Title';

export default AlertTitle;
