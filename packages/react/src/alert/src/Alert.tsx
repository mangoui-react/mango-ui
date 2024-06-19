import React from 'react';

import { TypeAttributes } from '../../types/common';

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Alert 메시지 상태 */
  status?: TypeAttributes.Status;
}

export interface AlertContextValue extends Pick<AlertProps, 'status'> {}

export const AlertContext = React.createContext<AlertContextValue>({
  status: 'info',
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { status = 'info', children, ...rest } = props;

  const contextValue = React.useMemo(() => ({ status }), [status]);

  return (
    <AlertContext.Provider value={contextValue}>
      <div ref={ref} data-status={status} {...rest}>
        {children}
      </div>
    </AlertContext.Provider>
  );
});

Alert.displayName = 'Alert';

export default Alert;
