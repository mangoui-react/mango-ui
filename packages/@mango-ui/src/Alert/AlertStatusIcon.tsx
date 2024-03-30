import React from 'react';

import ErrorIcon from '../internal/icons/ErrorIcon';
import InfoIcon from '../internal/icons/InfoIcon';
import SuccessIcon from '../internal/icons/SuccessIcon';
import WarningIcon from '../internal/icons/WarningIcon';

import { AlertContext } from './Alert';

export interface AlertStatusIconProps extends React.SVGProps<SVGSVGElement> {
  info?: React.ReactNode;
  success?: React.ReactNode;
  warning?: React.ReactNode;
  error?: React.ReactNode;
}

const statusIconMapping = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

/**
 * Alert 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AlertStatusIcon = React.forwardRef<SVGSVGElement, AlertStatusIconProps>(
  ({ info, success, warning, error, ...rest }, ref) => {
    // const {  info, success, warning, error, ...rest } = props; // TODO: type 에러 확인필요

    const { status = 'info' } = React.useContext(AlertContext);

    const statusIcon = React.useMemo(() => {
      if (status === 'success') return success;
      if (status === 'warning') return warning;
      if (status === 'error') return error;

      return info;
    }, [error, info, status, success, warning]);

    return React.cloneElement<AlertStatusIconProps>(
      (statusIcon ?? statusIconMapping[status]) as React.ReactElement<AlertStatusIconProps>,
      {
        ref,
        ...rest,
      },
    );
  },
);

AlertStatusIcon.displayName = 'Alert.StatusIcon';

export default AlertStatusIcon;
