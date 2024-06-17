import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { AlertContext } from './Alert';

export interface AlertContentProps extends ComponentPropsWithoutRef<'div'> {}

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>((props, ref) => {
  const { status = 'info' } = React.useContext(AlertContext);

  return <div ref={ref} data-status={status} {...props} />;
});

AlertContent.displayName = 'Alert.Content';

export default AlertContent;
