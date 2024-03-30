import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface AlertActionProps extends ComponentPropsWithoutRef<'div'> {}

// 필요없음
const AlertAction = React.forwardRef<HTMLDivElement, AlertActionProps>((props, ref) => {
  const { ...rest } = props;

  return <div ref={ref} {...rest} />;
});

AlertAction.displayName = 'Alert.Action';

export default AlertAction;
