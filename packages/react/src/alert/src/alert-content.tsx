import React from 'react';

import { AlertContext } from './alert';

export interface AlertContentProps extends React.ComponentPropsWithoutRef<'div'> {}

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>((props, ref) => {
  const { status = 'info' } = React.useContext(AlertContext);

  return <div {...props} data-status={status} ref={ref} />;
});

AlertContent.displayName = 'Alert.Content';

export default AlertContent;
