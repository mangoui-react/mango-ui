import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface AlertDescriptionProps extends ComponentPropsWithoutRef<'div'> {}

// 필요없음
const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

AlertDescription.displayName = 'Alert.Description';

export default AlertDescription;
