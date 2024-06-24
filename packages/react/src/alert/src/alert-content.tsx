import React from 'react';

import { AlertContext } from './alert';

export interface AlertContentProps extends React.ComponentPropsWithoutRef<'div'> {}

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>((props, ref) => {
  const { status = 'info' } = React.useContext(AlertContext);

  return <div ref={ref} data-status={status} {...props} />;
});

AlertContent.displayName = 'Alert.Content';

export default AlertContent;
